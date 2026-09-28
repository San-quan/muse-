<?php


// 自动加载类
require_once __DIR__ . '/SifuCards.php';
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
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['seatno'])) {
                        self::$m_roomList[$data['roompwd']]->sitDown(PlayerManager::getInstance()->getUid($client_id),$data['seatno']);
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
            case GR_GAME_DIZHU_REG:{
                /**--------------------------------------------
                *抢地主
                * @param array('roompwd','code')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['code'])) {
                        self::$m_roomList[$data['roompwd']]->dizhuActionReg(PlayerManager::getInstance()->getUid($client_id),$data['code']);
                }
                
            }
                break;
            case GR_GAME_DOUBLE_RANK:{
                /**--------------------------------------------
                *加倍
                * @param array('roompwd','code')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['code'])) {
                            self::$m_roomList[$data['roompwd']]->doubleRankReg(PlayerManager::getInstance()->getUid($client_id),$data['code']);
                    }
                }
                break;
            case GR_GAME_OUT_CARD_REG:{
                /**--------------------------------------------
                *出牌
                * @param array('roompwd','cards')
                */
                if (isset($data['roompwd'])&&isset(self::$m_roomList[$data['roompwd']])&&isset($data['cards'])) {
                            self::$m_roomList[$data['roompwd']]->outCardsReg(PlayerManager::getInstance()->getUid($client_id),$data);
                    }else{
                        echo "out cards data error\n";
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
                }else{
                    echo "GR_OBTAINLOCATION param error \n";
                    var_dump($data);
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
                    echo " param error！ \n";
                    var_dump($data);
                }
            }
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
                    if($userID!=$uInfo['roomowner'] && $cards < $this->getjoinCoast($userID,$roompwd)){
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
            if($userID!=self::$m_roomList[$roompwd]->getRoomOwner() && $cards < $this->getjoinCoast($userID,$roompwd))return 1;
            return 0;
        }
    }


    //更新玩家钻石
    public function updateRoomPlayerCards($uid,$cards){
        foreach (self::$m_roomList as $roompwd => $rinfo) {
            $rinfo->updateRoomPlayerCards($uid,$cards);
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
        $roomData = self::$m_roomList[$pwd]->getRoomData();
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

    //-------------------------------------获取房间数据-------------------------------------------------
    //获取房间数据
    public function getRoomMemberCount($pwd){
        return self::$m_roomList[$pwd]->getMemberCount();
    }
    //获取加入房间需要消耗的钻石
    public function getjoinCoast($uid,$pwd){
        return self::$m_roomList[$pwd]->getJoinCost($uid);
    }





    //---------------------------------------------------------------------------------

    //房间人数统计
    public function roomOnlineCount($type,$roomtype)
    {
        GameDB::getInstance()->roomOnlineCount($type,$roomtype);
    }
    //更新房间的局数
    public function updateRoomPlayGround($roompwd,$playground){
        GameDB::getInstance()->updateRoomPlayGround($roompwd,$playground);
    }
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
    //退房主的钱
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
    public function getUserControlTag($uid){
         return GameDB::getInstance()->getUserControlTag($uid);
    }

     //获取房间的总结算
    public function getZongRecord($roompwd){
        return GameDB::getInstance()->getZongRecord($roompwd);
    }

     public function gameover($roompwd){
        return GameDB::getInstance()->gameover($roompwd);
    }

    public function insertRoomData($roompwd,$roomData){
        $data['roompwd'] = $roompwd;
        $data['roomdata'] = $roomData;
        return GameDB::getInstance()->insertRoomCardsData($data);
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
