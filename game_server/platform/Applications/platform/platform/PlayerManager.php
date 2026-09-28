<?php

require_once __DIR__ . '/Platform.php';
use \GatewayWorker\Lib\Gateway;
class PlayerManager
{

    //静态变量保存全局实例
    private static $_instance = null;
    //私有构造函数，防止外界实例化对象
    private function __construct() {
    }
    //私有克隆函数，防止外办克隆对象
    private function __clone() {
    }
    //静态方法，单例统一访问入口
    static public function getInstance() {
        if (is_null ( self::$_instance ) || isset ( self::$_instance )) {
            self::$_instance = new self ();
        }
        return self::$_instance;
    }

    //**--------------------------------------------
    //链接映射
    private static $m_clientToUid = array();
    //成员数据
    private static $m_userBaseDataList = array();


    /**--------------------------------------------
    *socket连接成功，游戏基本版本数据
    *
    */
    public function onConnectMessage($client_id){
        $info = PlatformDB::getInstance()->getSysInfo();
        $this->sendMsgByClientId($client_id,PT_GAMEINFO,$info);
    }
    /**--------------------------------------------
    *用户登录游戏
    * @param $userInfo 
    *array('openid','nickname','photo' )
    * @return $result 
    * array('code','desc','usernfo')
    * code: 0/1/2 成功/拉黑/数据异常
    */
    public function onLoginMessage($client_id, $userInfo){
        $result = array();
        //Telegram Mini App：initData HMAC 校验，取出 tg_id 并映射为 openid（tg_ 前缀）
        if (isset($userInfo['initData']) && $userInfo['initData'] !== '') {
            $tg = $this->checkTelegramInitData($userInfo['initData']);
            if ($tg === false) {
                //假包/过期包直接拒绝登录
                $result['code'] = 2;
                $result['desc'] = "登录校验失败";
                $this->sendMsgByClientId($client_id,PT_LOGIN,$result);
                return;
            }
            $userInfo['openid']   = 'tg_'.$tg['tg_id'];
            $userInfo['nickname'] = $tg['nickname'];
            $userInfo['headurl']  = $tg['photo'];
        }
        if (isset($userInfo['openid'])&&$userInfo['openid']!=""&&$userInfo['openid']!=-1&&strlen($userInfo['openid'])<30) {
            $resCode =  PlatformDB::getInstance()->loginCheck($userInfo);
            if ($resCode == 1) {
                $result['code'] = 1;
                $result['desc'] = "你已被禁止登录，请联系管理员！";
            }else{
                $result['code'] = 0;
                $result['desc'] = "登陆成功";
                $result['userinfo'] = $this->getUserBaseInfoByID($resCode);
                $result['notice'] = $this->getHallNotice();
                $result['gamelist'] = PlatformDB::getInstance()->getgameList();
                $result['photolist'] = PlatformDB::getInstance()->getPhotoList();
                $result['lastroom'] = PlatformDB::getInstance()->getLastRoom($resCode);
                //设置全局标志
                foreach (self::$m_clientToUid as $key => $value) {
                    if (self::$m_clientToUid[$key] == $resCode) {
                        Gateway::closeClient($key);
                        unset(self::$m_clientToUid[$key]);
                        break;
                    }
                }
                self::$m_clientToUid[$client_id] = $resCode;
                
            }
        }else{
            //数据异常,提交了非法数据
            $result['code'] = 3;
            $result['desc'] = "数据异常";
        }
        $this->sendMsgByClientId($client_id,PT_LOGIN,$result);
    }


    /**--------------------------------------------
    *校验 Telegram Mini App initData，成功返回 tg 用户信息，失败返回 false
    * 与子服 HappyMajong PlayerManager::checkTelegramInitData 同一套公式：
    * 规则：secret_key = HMAC_SHA256(bot_token, "WebAppData")
    *      data_check_string = 除 hash 外所有 key=value 按 key 升序、以 \n 连接
    *      auth_date 与当前时间差 <= TG_AUTH_MAX_AGE_SEC（默认 86400）
    * @return array|false  array('tg_id','nickname','photo')
    */
    private function checkTelegramInitData($initData){
        //bot token 未配置（占位）时直接拒绝，避免被绕过
        if (!defined('TG_BOT_TOKEN') || TG_BOT_TOKEN === '') {
            return false;
        }
        $data = array();
        parse_str($initData, $data);
        if (!isset($data['hash']) || !isset($data['auth_date']) || !isset($data['user'])) {
            return false;
        }
        $checkHash = $data['hash'];
        $pairs = array();
        foreach ($data as $k => $v) {
            if ($k === 'hash') {
                continue;
            }
            $pairs[$k] = $k.'='.$v;
        }
        ksort($pairs);
        $dataCheckString = implode("\n", $pairs);
        $secretKey = hash_hmac('sha256', "WebAppData", TG_BOT_TOKEN, true);
        $calcHash  = hash_hmac('sha256', $dataCheckString, $secretKey);
        if (!hash_equals($calcHash, $checkHash)) {
            return false;
        }
        $authDate = intval($data['auth_date']);
        if ($authDate <= 0 || (time() - $authDate) > TG_AUTH_MAX_AGE_SEC) {
            return false;
        }
        $tgUser = json_decode($data['user'], true);
        if (!is_array($tgUser) || !isset($tgUser['id'])) {
            return false;
        }
        $nickname = isset($tgUser['first_name']) ? $tgUser['first_name'] : '';
        if (isset($tgUser['last_name']) && $tgUser['last_name'] !== '') {
            $nickname .= $tgUser['last_name'];
        }
        if ($nickname === '') {
            $nickname = 'TG'.$tgUser['id'];
        }
        $photo = isset($tgUser['photo_url']) ? $tgUser['photo_url'] : '';
        return array(
            'tg_id'    => $tgUser['id'],
            'nickname' => $nickname,
            'photo'    => $photo,
        );
    }


    /**--------------------------------------------
    *加载一个玩家数据
    */
    public function addUserBaseInfo($userInfo){
        self::$m_userBaseDataList[$userInfo["id"]] = $userInfo;
    }

    //更新玩家房卡
    public function updateCardsByBindCode($userID,$cards){
        foreach (self::$m_userBaseDataList as $uid => $info) {
            if ($uid == $userID) {
                self::$m_userBaseDataList[$uid]['cards'] = $cards;
            }
        }
    }

    /**
    * 获取玩家数据
    */
    public function getUserBaseInfoByID($userID){
        foreach (self::$m_userBaseDataList as $uid => $info) {
            if ($uid == $userID) {
                return $info;
            }
        }
        return null;
    }

    /**--------------------------------------------
    *玩家断线，清除数据
    */
    public function clearUserByOffLine($client_id){
        if (isset(self::$m_clientToUid[$client_id])) {
            $uid = self::$m_clientToUid[$client_id];
            unset(self::$m_clientToUid[$client_id]);
            unset(self::$m_userBaseDataList[$uid]);
        }
    }
    public function updataUserCards($userID,$cards){
        if (isset(self::$m_userBaseDataList[$userID])) {
            self::$m_userBaseDataList[$userID]['cards'] = $cards;
        }
        return 0;
    }
    //获取大厅消息
    public function getHallNotice(){
       return  PlatformDB::getInstance()->getHallNotice();
    }
    //获取玩家的房间列表
    public function getPlayerRoomList($uid){
        return  PlatformDB::getInstance()->getPlayerRoomList($uid);
    }

    /**--------------------------------------------
    *获取玩家链接状态
    */
    public function getUserSession($client_id){
        return isset(self::$m_clientToUid[$client_id])?true:false;
    }

    /*获取玩家uid
    */
    public function getUserID($client_id){
        return self::$m_clientToUid[$client_id];
    }
        /**
    * 获取玩家的钻石
    */
    public function getUserCards($userID){
        foreach (self::$m_userBaseDataList as $uid => $info) {
            if ($uid == $userID) {
                return $info['cards'];
            }
        }
        return 0;
    }
    /**--------------------------------------------
    *获取玩家通信ID
    */
    public function getClientIdByUid($userid){
        foreach (self::$m_clientToUid as $client_id => $uid) {
            if ($uid == $userid) {
                return $client_id;
            }
        }
        return null;
    }

    public function sendMsgByClientId($client_id,$MainID,$data) {
        $msg['mainid'] = $MainID;
        $msg['data'] = $data;
        $restag = Gateway::sendToClient($client_id, json_encode($msg));
    }
    public function sendMsgByUid($uid,$MainID,$data) {
        $client_id = $this->getClientIdByUid($uid);
        if ($client_id != null){
            $this->sendMsgByClientId($client_id,$MainID,$data);
        }
    }


}
