<?php
require_once __DIR__ . '/GameManager.php';
require_once __DIR__ . '/MessageDefine.php';
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


    //**--------------------------------------------

    
    /**--------------------------------------------
    *用户登录
    * @param $userInfo 
    *array('openid','actiontype',data=array())
    * @return $result 
    * array('code','desc','usernfo')
    * code: 0/1/2/3/4/5/6/7 成功/拉黑/未登录/数据异常/钻石不足/房间不存在/房间人数达到上限/房间结算
    */
    public function onEnterMessage($client_id, $userInfo){
        //var_dump($userInfo);

        $result = array();
        if (isset($userInfo['openid']) && $userInfo['openid']!="" && strlen($userInfo['openid'])<30 && isset($userInfo['roompwd']) && $userInfo['roompwd'] !=""&&strlen($userInfo['roompwd']) == 6) {
            // $userInfo['roompwd'] = intval($userInfo['roompwd']);
            $resCode =  GameDB::getInstance()->loginCheck($userInfo);
            if ($resCode == 1) {
                $result['code'] = 1;
                $result['desc'] = "你已被禁止登录，请联系管理员！";
            }if ($resCode == 2) {
                $result['code'] = 2;
                $result['desc'] = "请登录！";
            }else{
                //$result['userinfo'] = $this->getUserInfoByID($resCode);
                //链接成功，验证准入资格
                $enterCode = GameManager::getInstance()->canEnterRoom($resCode,$userInfo['roompwd']);

                if ($enterCode == 1) {
                    $result['code'] = 4;
                    $result['desc'] = "钻石不足";
                }else if ($enterCode == 2) {
                    $result['code'] = 5;
                    $result['desc'] = "房间不存在";
                }else if ($enterCode == 3) {
                    $result['code'] = 6;
                    $result['desc'] = "房间人数达到上限";
                }else if ($enterCode == 4) {
                    $result['code'] = 7;
                    $result['desc'] = "房间结算";
                    $result['roomrecord'] = $this->getRoomRecord($userInfo['roompwd']);
                }else{
                    $lastRoom = GameManager::getInstance()->getLastRoom($resCode,$userInfo['roompwd']);
                    if ($lastRoom == -1) {
                        $result['code'] = 0;
                        $result['desc'] = "连接成功";
                        $result['userinfo'] = $this->getUserBaseInfoByID($resCode);
                        self::$m_userBaseDataList[$resCode]['ip'] = $userInfo['ip'];
                    }else{
                        $result['code'] = 8;
                        $result['desc'] = "你已在其他房间";
                        $result['roompwd'] = $lastRoom['roompwd'];
                        $result['gamename'] = $lastRoom['gamename'];
                    }
                }
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

        //var_dump($result);

       $this->sendMsgByClientId($client_id,GR_LOGIN,$result);

        //登陆子游戏成功，进行房间操作
        if ($result['code'] == 0) {
           GameManager::getInstance()->enterRoom($resCode,$userInfo['roompwd']);
        }
    }

    public function playbackEnter($client_id, $userInfo)
    {
        $result = array();
        if (isset($userInfo['openid']) && $userInfo['openid']!="" && strlen($userInfo['openid'])<30) {
            $resCode =  GameDB::getInstance()->loginCheck($userInfo);
            if ($resCode == 1) {
                $result['code'] = 1;
                $result['desc'] = "你已被禁止登录，请联系管理员！";
            }if ($resCode == 2) {
                $result['code'] = 2;
                $result['desc'] = "请登录！";
            }else{
                $result['code'] = 0;
                $result['desc'] = "success";
                self::$m_clientToUid[$client_id] = $resCode;
                
            }
        }else{
            //数据异常,提交了非法数据
            $result['code'] = 3;
            $result['desc'] = "数据异常";
        }
       $this->sendMsgByClientId($client_id,GR_PLAYBACK,$result);
       return $result;
    }






    /**--------------------------------------玩家个人数据------------------------------------------------
    *获取玩家链接状态
    */
    public function getUserSession($client_id){
        return isset(self::$m_clientToUid[$client_id])?true:false;
    }


    /**
    *加载一个玩家数据
    */
    public function addUserBaseInfo($userInfo){
         self::$m_userBaseDataList[$userInfo['id']] = $userInfo;
        GameManager::getInstance()->updateRoomPlayerCards($userInfo['id'],$userInfo['cards']);
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

    //获取玩家游戏内基本数据
    //@return array（uid,headurl,nickname）
    public function getUserInfoFromLists($uid){
        return array(
            'uid'=>self::$m_userBaseDataList[$uid]['id'],
            'nickname'=>self::$m_userBaseDataList[$uid]['nickname'],
            'headurl'=>self::$m_userBaseDataList[$uid]['photo'],
            'cards'=>self::$m_userBaseDataList[$uid]['cards'],
            'ip'=>self::$m_userBaseDataList[$uid]['ip'],
        );

    }

    //获取房间的总结算
    public function getRoomRecord($roompwd){
        $roomInfo = GameDB::getInstance()->getRoomInfo($roompwd);
        $roomData['roompwd'] = $roomInfo['roompwd'];
        $roomData['endtime'] = $roomInfo['endtime'];
        $roomData['roomInfo'] = unserialize($roomInfo['rule']);
        $roomData['roomowner'] = $roomInfo['roomowner'];
        $roomData['playerlist'] = GameManager::getInstance()->getZongRecord($roompwd);
        return $roomData;
    }



    /**--------------------------------------------
    *玩家断线，清除数据
    */
    public function clearUserByOffLine($client_id){
        if (isset(self::$m_clientToUid[$client_id])) {

            $uid =  self::$m_clientToUid[$client_id];
            //检测该玩家所在的房间状态，发送离线数据
            GameManager::getInstance()->checkPlayerOfflineStatus($uid);

            unset(self::$m_clientToUid[$client_id]);
            unset(self::$m_userBaseDataList[$uid]);
        }
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
    //获取玩家UID
    public function getUid($client_id){
        return self::$m_clientToUid[$client_id];
    }

    public function sendMsgByClientId($client_id,$MainID,$data) {
       // echo "[".self::$m_clientToUid[$client_id]."]".$MainID."\n";

        $msg['mainid'] = $MainID;
        $msg['data'] = $data;
        Gateway::sendToClient($client_id, json_encode($msg));
    }
    public function sendMsgByUid($uid,$MainID,$data) {
        $client_id = $this->getClientIdByUid($uid);
        if ($client_id != null){
            $this->sendMsgByClientId($client_id,$MainID,$data);
        }
    }





}
