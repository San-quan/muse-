<?php


// 自动加载类
require_once __DIR__ . '/HappyMajong.php';
require_once __DIR__ . '/PlayerManager.php';
require_once __DIR__ . '/MessageDefine.php';


class GameManager
{
    //当前进程ID
    public static $_workerId = -1;
    
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


    //房间列表
    private static $m_roomList=array();





    public function onSocketMessage($client_id,$MainID,$data){
        switch ($MainID) {

             case GR_SITDOWN:{

                /**--------------------------------------------
                *坐下
                * @param array('roompwd','seatno')
                * @return array('code','desc','userinfo')
                * code: 0/1/2 坐下成功/坐下失败/参数错误
                */
                 if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])) {
                        self::$m_roomList[$data['roompwd']]->sitDownAction(PlayerManager::getInstance()->getUid($client_id));
                }else{
                    $data['code'] = 2;
                    $data['desc'] = "参数错误";
                    PlayerManager::getInstance()->sendMsgByClientId($client_id,GR_SITDOWN,$data);
                }
            }
                break;
            case GR_SITUP:{
                /**--------------------------------------------
                *站起
                * @param array('roompwd')
                * @return array('code','desc','userinfo')
                * code: 0/1/2 站起成功/站起失败/参数错误
                */
                 if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])) {
                        self::$m_roomList[$data['roompwd']]->sitUp(PlayerManager::getInstance()->getUid($client_id));
                }else{
                    $data['code'] = 2;
                    $data['desc'] = "参数错误";
                    PlayerManager::getInstance()->sendMsgByClientId($client_id,GR_SITUP,$data);
                }
            }
                break;
            case GR_DISMISS:{
                /**--------------------------------------------
                *发起解散
                * @param array('roompwd')
                */
                 if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])) {
                        self::$m_roomList[$data['roompwd']]->dismiss(PlayerManager::getInstance()->getUid($client_id));
                }
            }
                break;
            case GR_DISMISS_REG:{
                /**--------------------------------------------
                *响应解散
                * @param array('roompwd','code')
                */
                 if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['actioncode'])) {
                        self::$m_roomList[$data['roompwd']]->dismissReg(PlayerManager::getInstance()->getUid($client_id),$data['actioncode']);
                }
            }
                break;
            // case GR_GAME_QIANG_ZHUANG:{
            //     /**--------------------------------------------
            //     *抢庄
            //     * @param array('roompwd','code')
            //     */
            //     if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['code'])) {
            //             self::$m_roomList[$data['roompwd']]->gameQiangZhuangReg(PlayerManager::getInstance()->getUid($client_id),$data['code']);
            //     }
                
            // }
            //     break;
            // case GR_GAME_SURE_RANK:{
            //     /**--------------------------------------------
            //     *下注
            //     * @param array('roompwd','code')
            //     */
            //     if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['code'])) {
            //             self::$m_roomList[$data['roompwd']]->gameSureRankReg(PlayerManager::getInstance()->getUid($client_id),$data['code']);
            //     }
                
            // }
                // break;
            case GR_GAME_MJ_OUT_CARDS_REG:{
                /**--------------------------------------------
                *出牌
                * @param array('roompwd','data')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['data'])) {
                        self::$m_roomList[$data['roompwd']]->gameOutCardReg(PlayerManager::getInstance()->getUid($client_id),$data['data']);
                }else{
                    echo " param error \n";
                    var_dump($data);
                }
            }
                break;
            case GR_GAME_MJ_OPERATE_REG:{
                /**--------------------------------------------
                *响应吃碰杠胡动作
                * @param array('roompwd','data')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['cards'])&&isset($data['action'])) {
                        self::$m_roomList[$data['roompwd']]->gameOperateReg(PlayerManager::getInstance()->getUid($client_id),$data['cards'],$data['action']);
                }else{
                    echo " param error \n";
                    var_dump($data);
                }
            }
                break;
            case GR_GAME_MJ_SET_PAO:{
                /**--------------------------------------------
                *开局选加炮 0-10
                * @param array('roompwd','pao')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['pao'])) {
                        self::$m_roomList[$data['roompwd']]->onSetPao(PlayerManager::getInstance()->getUid($client_id), intval($data['pao']));
                }else{
                    echo " SET_PAO param error \n";
                    var_dump($data);
                }
            }
                break;
            case GR_GAME_MJ_PICK_FLIP:{
                /**--------------------------------------------
                *选明牌第几步1：选 faceUp idx 入手
                * @param array('roompwd','idx')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['idx'])) {
                        self::$m_roomList[$data['roompwd']]->onPickFlip(PlayerManager::getInstance()->getUid($client_id), intval($data['idx']));
                }else{
                    echo " PICK_FLIP param error \n";
                    var_dump($data);
                }
            }
                break;
            case GR_GAME_MJ_FLIP_ZIMO:{
                /**--------------------------------------------
                *选明牌第几步2-1：选完直接胡（杠花/普通）
                * @param array('roompwd')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])) {
                        self::$m_roomList[$data['roompwd']]->onFlipZimo(PlayerManager::getInstance()->getUid($client_id));
                }else{
                    echo " FLIP_ZIMO param error \n";
                    var_dump($data);
                }
            }
                break;
            case GR_GAME_MJ_FLIP_DISCARD:{
                /**--------------------------------------------
                *选明牌第几步2-2：选完出牌
                * @param array('roompwd','tile')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['tile'])) {
                        self::$m_roomList[$data['roompwd']]->onFlipDiscard(PlayerManager::getInstance()->getUid($client_id), intval($data['tile']));
                }else{
                    echo " FLIP_DISCARD param error \n";
                    var_dump($data);
                }
            }
                break;
            case GR_GAME_MJ_FLIP_KONG:{
                /**--------------------------------------------
                *选明牌第几步2-3：选完开连杠
                * @param array('roompwd','tile','type')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['tile'])&&isset($data['type'])) {
                        self::$m_roomList[$data['roompwd']]->onFlipKong(PlayerManager::getInstance()->getUid($client_id), intval($data['tile']), $data['type']);
                }else{
                    echo " FLIP_KONG param error \n";
                    var_dump($data);
                }
            }
                break;
            case GR_GAME_MJ_CANCEL_AUTO_PLAY:{
                /**--------------------------------------------
                *v1.20 2.8：取消超时托管（仅 TIMEOUT 托管可取消）
                * @param array('roompwd')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])) {
                        self::$m_roomList[$data['roompwd']]->cancelAutoPlay(PlayerManager::getInstance()->getUid($client_id));
                }else{
                    echo " CANCEL_AUTO_PLAY param error \n";
                    var_dump($data);
                }
            }
                break;
            case GR_GAMEREADYREG:{
                /**--------------------------------------------
                *准备
                * @param array('roompwd')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])) {
                            self::$m_roomList[$data['roompwd']]->gameReady(PlayerManager::getInstance()->getUid($client_id));
                    }
                    
                }
                 break;
            case GR_GAME_MJ_GET_CONTROL:{
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])) {
                        $res = self::$m_roomList[$data['roompwd']]->whetherSuperReg(PlayerManager::getInstance()->getUid($client_id));
                        if ($res != false) {
                            PlayerManager::getInstance()->sendMsgByClientId($client_id,GR_GAME_MJ_GET_CONTROL,$res);
                        }
                    }
                    
                }
                 break;
            
            case GR_GAME_MJ_CONTROL:{
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['cards'])) {
                        $res = self::$m_roomList[$data['roompwd']]->setNextSendCard(PlayerManager::getInstance()->getUid($client_id),$data['cards']);
                         PlayerManager::getInstance()->sendMsgByClientId($client_id,GR_GAME_MJ_CONTROL,$res);
                    }
                    
                }
                 break;
            case GR_GAME_MJ_SET_DECK:{
                // 测试专用：指定发牌（默认关闭，见 GR_TEST_FORCE_DECK）
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['spec'])) {
                        $res = self::$m_roomList[$data['roompwd']]->setForcedDeck(PlayerManager::getInstance()->getUid($client_id),$data['spec']);
                        PlayerManager::getInstance()->sendMsgByClientId($client_id,GR_GAME_MJ_SET_DECK,$res);
                    }
                    
                }
                 break;
            case GR_GAMEROWNER_START:{
                /**--------------------------------------------
                *房主开始
                * @param array('roompwd')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])) {
                        self::$m_roomList[$data['roompwd']]->roomOwnerStart(PlayerManager::getInstance()->getUid($client_id));
                }
                
            }
            break;
            case GR_OBTAINLOCATION:{
                /**--------------------------------------------
                *获得定位
                * @param array('roompwd','data')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['latitude'])&&isset($data['longitude'])) {
                    $res = self::$m_roomList[$data['roompwd']]->obtainLocation(PlayerManager::getInstance()->getUid($client_id),$data['latitude'],$data['longitude']);
                    PlayerManager::getInstance()->sendMsgByClientId($client_id,GR_OBTAINLOCATION,$res);
                }
            }
                break;
            case GR_GETLOCATION:{
                /**--------------------------------------------
                *发送定位信息
                * @param array('roompwd','data')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])) {
                        self::$m_roomList[$data['roompwd']]->getLocation(PlayerManager::getInstance()->getUid($client_id));
                }else{
                    echo "GR_GETLOCATION param error \n";
                    var_dump($data);
                }
            }
                break;
            case GR_CHAT:{
                /**--------------------------------------------
                *语音
                * @param array('roompwd','data')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['data'])) {
                        self::$m_roomList[$data['roompwd']]->chatMessage(PlayerManager::getInstance()->getUid($client_id),$data['data']);
                }else{
                    echo "GR_CHAT param error \n";
                    var_dump($data);
                }
            }
                break;
            case GR_CHAT_ANI:{
                /**--------------------------------------------
                *语音
                * @param array('roompwd','data')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['data'])) {
                        self::$m_roomList[$data['roompwd']]->chatAniMessage(PlayerManager::getInstance()->getUid($client_id),$data['data']);
                }else{
                    echo "GR_CHAT_ANI param error \n";
                    var_dump($data);
                }
            }
                break;
            default:
            {
                echo "error : ".$MainID."\n";
                break;
            }
        }
    }


    //验证准入资格
    //@return 0/1/2/3/4 可以加入/钻石不足/房间不存在/房间达到人口上限/房间已经结算
    public function canEnterRoom($userID,$roompwd){

        $cards = PlayerManager::getInstance()->getUserCards($userID);

        if(!isset(self::$m_roomList[$roompwd])){
            $uInfo = GameDB::getInstance()->getRecordByPwd($roompwd);
            if (is_array($uInfo)&&isset($uInfo['id'])) {
               if ($uInfo['gameover'] == 1) {
                   return 4;//房间已经结算
               } else {

                   //加载房间
                    $this->createRoom($uInfo);
                    $rule = unserialize($uInfo['rule']);
                    if($userID!=$uInfo['roomowner'] && $cards < $this->getjoinCoast($userID,$roompwd) && $rule['paymode'] == PAYMODE_AA_SSW){
                        return 1;//钻石不足
                    }else{
                        return 0;//可以加入
                    }
               }
            }else{
                return 2;///房间不存在
            }
        }else{
            //如果房间中已经有该玩家的数据，表示是重新进来的
            if(self::$m_roomList[$roompwd]->canRecomonIn($userID))return 0;//可以加入
            //房间人数太多了
            if ($this->getRoomMemberCount($roompwd) >= ALLMEMBER_COUNT)return 3;//房间达到人口上限
            //其他玩家进来需要判断钻石
            if($userID!=self::$m_roomList[$roompwd]->getRoomOwner() && $cards < $this->getjoinCoast($userID,$roompwd) && self::$m_roomList[$roompwd]->m_roomRule['paymode'] == PAYMODE_AA_SSW)return 1;
            return 0;
        }
    }


        //更新玩家钻石
    public function updateRoomPlayerCards($uid,$cards){
        foreach (self::$m_roomList as $roompwd => $rinfo) {
            $rinfo->updateRoomPlayerCards($uid,$cards);
        }
    }

    //代理的钻石结算
    public function agentNcome($pwd){
        $token = 0;
        $data = GameDB::getInstance()->cardsCoast($pwd);
        $coast = $data['coast'];
        $total = $data['coast'] + $data['free'];
        $agentList = GameDB::getInstance()->roomsInvite($pwd);
        $agentNcome = array();
        foreach ($agentList as $key => $value) {
             if($agentList[$key]['parentID'] == 0){
                $agentNcome['obtain'] = $coast - $token;
             }else{
                 $agentNcome['obtain'] = $agentList[$key]['percent'] * $coast * 0.01 - $token;
                 $token += $agentNcome['obtain'];
             }
             GameDB::getInstance()->agentCards($agentList[$key]['id'],$pwd,$total,$coast,$agentList[$key]['percent'],$agentNcome['obtain']);
        }
    }

    //创建房间
    public function createRoom($roomInfo){
        self::$m_roomList[$roomInfo['roompwd']] = new GameRoom($roomInfo['roomowner'],$roomInfo['roompwd'],unserialize($roomInfo['rule']));
         GameWorkMap::getInstance()->addBusinessWorkerMap(self::$_workerId,$roomInfo['roompwd']);
    }
    //进入房间
    public function enterRoom($uid,$pwd){
        if(!isset(self::$m_roomList[$pwd]))return;
        self::$m_roomList[$pwd]->comeIn($uid);
        $roomData = self::$m_roomList[$pwd]->getRoomData($uid);
        PlayerManager::getInstance()->sendMsgByUid($uid,GR_ENTER,$roomData);
    }

    //删除房间
    public function deleteRoom($pwd){
         if(!isset(self::$m_roomList[$pwd]))return;
            unset(self::$m_roomList[$pwd]);
    }

    //发送玩家离线消息
    public function checkPlayerOfflineStatus($uid){
        foreach (self::$m_roomList as $pwd => $room) {
            $room->commOut($uid);
        }
    }

    //-------------------------------------获取房间数据-------------------------------------------------
    //获取房间数据
    public function getRoomMemberCount($pwd){
        return self::$m_roomList[$pwd]->getMemberCount();
    }
    //获取加入房间需要消耗的钻石
    public function getjoinCoast($uid,$pwd){
        return self::$m_roomList[$pwd]->getJoinCost($uid);
    }

    public function userJoinRecord($uid,$roompwd){
        GameDB::getInstance()->userJoinRecord($uid,$roompwd);
    }

    //获取房间数据
    public function getCardsByClubId($clubId){
        return 0;
    }


    //---------------------------------------------------------------------------------
    //记录房间单局结算
    public function insertRoomRecord($data){
         GameDB::getInstance()->insertRoomRecord($data);
    }
    //记录房间总结算
    public function insertRoomAllRecord($data){
         GameDB::getInstance()->insertRoomAllRecord($data);
    }
    //道具支付房卡
    public function chatCoast($uid,$roomPwd,$coast,$gametype){
        GameDB::getInstance()->chatCoast($uid,$roomPwd,$coast,$gametype);
    }
    //玩家支付房卡
    public function coastPlayerCards($uid,$roomPwd,$rule,$coast,$gametype){
        GameDB::getInstance()->coastPlayerCards($uid,$roomPwd,$rule,$coast,$gametype);
    }
    //退所有玩家的钱
    public function recoastPlayerCards($roomPwd){
        GameDB::getInstance()->recoastPlayerCards($roomPwd);
    }
     //退玩家的钱
    public function recoastOnePlayerCards($roomPwd,$uid){
        GameDB::getInstance()->recoastOnePlayerCards($roomPwd,$uid);
    }
    //获取房间的记录
    public function getRoomRecord($roompwd){
        return GameDB::getInstance()->getRecordByPwd($roompwd);
    }

     //获取房间的总结算
    public function getZongRecord($roompwd){
        return GameDB::getInstance()->getZongRecord($roompwd);
    }

     public function gameover($roompwd){
        return GameDB::getInstance()->gameover($roompwd);
    }

    //更新房间的局数
    public function updateRoomPlayGround($roompwd,$playground){
        GameDB::getInstance()->updateRoomPlayGround($roompwd,$playground);
    }

    //更新房间的人数
    public function updateUserCount($roompwd,$add = false){
        GameDB::getInstance()->updateUserCount($roompwd,$add);
    }
    public function getUserControlTag($uid){
         return GameDB::getInstance()->getUserControlTag($uid);
    }

    //获得当前房间的所处的局数
    public function getCurPlayGroundByPwd($pwd){
        return GameDB::getInstance()->getCurPlayGroundByPwd($pwd);
    }

    //服务器重启清理房间数据
    public function gameServerStop(){
        GameDB::getInstance()->gameStopDeleteLastRoom(GAMENAME);
        foreach (self::$m_roomList as $pwd => $value) {
            self::$m_roomList[$pwd]->gameOver(true);
        }
        // GameDB::getInstance()->gameServerStop();
    }

    //防止加入更多房间
    public function getLastRoom($uid,$roompwd)
    {
        return GameDB::getInstance()->getLastRoom($uid,$roompwd);
    }   

    public function insertLastRoom($uid,$roompwd,$gamename)
    {
        GameDB::getInstance()->insertLastRoom($uid,$roompwd,$gamename);
    }

    public function deleteLastRoom($uid)
    {
        GameDB::getInstance()->deleteLastRoom($uid);
    }
}
