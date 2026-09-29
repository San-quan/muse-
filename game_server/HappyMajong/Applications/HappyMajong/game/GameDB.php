<?php

require_once __DIR__ . '/../../../vendor/mysql-master/src/Connection.php';
require_once __DIR__ . '/PlayerManager.php';
require_once __DIR__ . '/GameManager.php';
require_once __DIR__ . '/MessageDefine.php';
require_once __DIR__ . '/HttpManager.php';
class GameDB
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


    private static $db = null;


    public function initDB(){
       self::$db = new \Workerman\MySQL\Connection('127.0.0.1', '3306', 'root', '', 'game735');
        // self::$db = new \Workerman\MySQL\Connection('rm-bp1qf4ol5816z28z5.mysql.rds.aliyuncs.com', '3306', 'hunzugame', 'bd7839a3d823204d', 'jiagecai');
    }


    public function loginCheck($userInfo){
        $sql = "SELECT * FROM `users` WHERE openid='".$userInfo['openid']."'";
        $uInfo =self::$db->row($sql);
        if (is_array($uInfo)&&isset($uInfo['id'])) {
            if ($uInfo['status'] == 0) {
                 return 1;//封号
            }
        }else{
            //新注册用户
           $insert_id = self::$db->insert('users')->cols(array(
                        'openid'=>$userInfo['openid'],
                        'nickname'=>$this->filterNickname($userInfo['nickname']),
                        'photo'=>$userInfo['headurl'],
                        // 'sex' => $userInfo['sex'],
                        'status'=>1,
                        'score'=>0,
                        'money'=>0,
                        'vcoin'=>0,
                        'cards'=>500,
                        'paycards'=>0,
                        'freecards'=>500,
                        'level'=>0,
                        'online'=>1,
                        'agency_id'=>1,
                        'reg_time'=>time(),
                        'login_time'=>time()
                        ))->query();
        }
        $sql = "SELECT * FROM `users` WHERE openid='".$userInfo['openid']."'";
        $uInfo =self::$db->row($sql);
        //更新头像
        // $userInfo['headurl'] = HttpManager::getInstance()->dealHeadUrl($uInfo['id'],$userInfo['headurl']);
        $this->updateAvatar($userInfo['headurl'],$uInfo['id']);

        $sql = "SELECT * FROM `users` WHERE openid='".$userInfo['openid']."'";
        $uInfo =self::$db->row($sql);
        // var_dump($uInfo);
        //加载数据
        PlayerManager::getInstance()->addUserBaseInfo($uInfo);
        return $uInfo['id'];
    }
    public function filterNickname($nickname)
     
    {
        $nickname = preg_replace('/[\x{1F600}-\x{1F64F}]/u', '', $nickname);
     
        $nickname = preg_replace('/[\x{1F300}-\x{1F5FF}]/u', '', $nickname);
     
        $nickname = preg_replace('/[\x{1F680}-\x{1F6FF}]/u', '', $nickname);
     
        $nickname = preg_replace('/[\x{2600}-\x{26FF}]/u', '', $nickname);
        $nickname = preg_replace('/[\x{2700}-\x{27BF}]/u', '', $nickname);
        $nickname = str_replace(array('"','\''), '', $nickname);
        $nickname = addslashes(trim($nickname));
        $nickname = preg_replace_callback( '/./u',
            function (array $match) {
                return strlen($match[0]) >= 4 ? '' : $match[0];
            },$nickname);

        return $nickname;//addslashes(trim($nickname));
    }
    //玩家更新头像
    public function updateAvatar($path,$uid){
         $sql = "UPDATE `users` SET photo = '".$path."' WHERE id=".$uid;
        self::$db->query($sql);
    }


    public function getRoomInfo($roompwd){
        $sql = "SELECT * FROM `rooms` WHERE roompwd='".$roompwd."'";
        $uInfo =self::$db->row($sql);
        if (is_array($uInfo)&&isset($uInfo['id'])) {
           return $uInfo;
        }else{
            return array();
        }
    }


    //添加创建房间记录
    public function insertRoomData($uid,$pwd,$rule){    
       self::$db->insert('rooms')->cols(array(
            'gameName' =>   GAMENAME,
            'roompwd' =>  $pwd,
            'roomowner' =>  $uid,
            'rule' =>  serialize($rule),
            'starttime' =>  time(),

        ))->query();
    }
    //是否存在该房间记录
    public function getRecordByPwd($pwd){
         $sql = "SELECT * FROM `rooms` WHERE gameName = '".GAMENAME."' and roompwd='".$pwd."'";
        return self::$db->row($sql);
       
    }

    //房间总结算
    public function getZongRecord($pwd){
        $sql = "SELECT t1.uid,t2.nickname,t2.photo,t1.score,t1.roomData FROM `roomrecord` as t1 left join users as t2 on t1.uid=t2.id WHERE t1.gameName = '".GAMENAME."' and t1.roompwd='".$pwd."' order by t1.score desc";
        $res = self::$db->query($sql);
        foreach ($res as $key => $value) {
            $roomData = unserialize($res[$key]['roomData']);
            if (!is_array($roomData)) {
                return array();
            }
            foreach ($roomData as $name => $number) {
                $res[$key][$name] = $number;
            }
            unset($res[$key]['roomData']);
        }
        return $res;
    }

    //玩家支付房卡
    public function coastPlayerCards($uid,$roomPwd,$rule,$coast,$gametype){
        //路线B：有 user_wallet 行则扣钱包并写 ledger(ROOM_CARD)；无行回退原 users 扣卡（不自动建行）
        $tgId = 0;
        $uRow = self::$db->row("SELECT openid FROM users WHERE id = '".$uid."'");
        if (!empty($uRow['openid']) && strpos($uRow['openid'], 'tg_') === 0) {
            $tgId = intval(substr($uRow['openid'], 3));
        }
        $wRow = ($tgId > 0) ? self::$db->row("SELECT room_cards, balance FROM user_wallet WHERE tg_id = ".$tgId) : false;
        if (!empty($wRow) && isset($wRow['room_cards'])) {
            $after = intval($wRow['room_cards']) - intval($coast);
            self::$db->query("UPDATE user_wallet SET room_cards = room_cards - ".intval($coast)." WHERE tg_id = ".$tgId);
            self::$db->insert('ledger')->cols(array(
                'tg_id' => $tgId,
                'type' => 'ROOM_CARD',
                'amount' => -intval($coast),
                'balance_after' => intval($wRow['balance']),
                'room_cards_after' => $after,
                'note' => $gametype,
                'room_id' => $roomPwd
            ))->query();
            return;
        }
        @file_put_contents(__DIR__.'/log/routeB_coast.log', date('[Y-m-d H:i:s]')." [routeB] coastPlayerCards no wallet row uid=".$uid." tg_id=".$tgId." room=".$roomPwd." coast=".$coast."\n", FILE_APPEND | LOCK_EX);
        $sql = "SELECT cards,paycards,freecards FROM users WHERE id = '$uid'";
        $res = self::$db->row($sql);

        if ($res['cards'] != $res['paycards'] + $res['freecards'] ) {
            $sql = "UPDATE `users` SET freecards = '".$res['cards']."' - '".$res['paycards']."' WHERE id=".$uid;
            self::$db->query($sql);
        }
        if ($res['freecards'] >= $coast) {
            $sql = "UPDATE `users` SET cards = cards - ".$coast.", freecards = freecards - ".$coast." WHERE id=".$uid;
            self::$db->query($sql);

            self::$db->insert('usercoastrecord')->cols(array(
                'uid' => $uid,
                'gameName' => $gametype,
                'roompwd' =>  $roomPwd,
                'coast' => $coast,
                'costtime' =>  time(),
                'cardsmode' => 2
            ))->query();
        }else{
            $coastPaycards = $coast - $res['freecards'];
            $sql = "UPDATE `users` SET cards = cards - ".$coast.", freecards = 0, paycards = paycards - ".$coastPaycards." WHERE id=".$uid;
            self::$db->query($sql);

            if ($res['freecards'] != 0) {
                self::$db->insert('usercoastrecord')->cols(array(
                    'uid' => $uid,
                    'gameName' => $gametype,
                    'roompwd' =>  $roomPwd,
                    'coast' => $res['freecards'],
                    'costtime' =>  time(),
                    'cardsmode' => 2
                ))->query();
            }
            self::$db->insert('usercoastrecord')->cols(array(
                'uid' => $uid,
                'gameName' => $gametype,
                'roompwd' =>  $roomPwd,
                'coast' => $coastPaycards,
                'costtime' =>  time(),
                'cardsmode' => 1
            ))->query();
        }
    }


     //退玩家的钱
    public function recoastPlayerCards($roomPwd){
        $sql = "SELECT * FROM `usercoastrecord` WHERE roompwd='".$roomPwd."'";
        $coastRecord = self::$db->query($sql);


        if(is_array($coastRecord)&&sizeof($coastRecord)>0){

            foreach ($coastRecord as $key => $record) {
                if(isset($record['coast'])&&$record['coast']>0){
                        $sql = "UPDATE `users` SET cards = cards + ".$record['coast']." WHERE id=".$record['uid'];
                        self::$db->query($sql);

                        $sql = "DELETE FROM `usercoastrecord` WHERE uid = ".$record['uid']." and roompwd='".$roomPwd."'";
                        self::$db->query($sql);

                        // //插入消耗记录
                        // self::$db->insert('usercoastrecord')->cols(array(
                        //     'uid' => $record['uid'],
                        //     'gameName' =>  GAMENAME,
                        //     'roompwd' =>  $roomPwd,
                        //     'coast' => -$record['coast'],
                        //     'costtime' =>  time()

                        // ))->query();
                }

            }
        }

    }

   //退一个玩家的钱
    public function recoastOnePlayerCards($roomPwd,$uid){
        $sql = "SELECT * FROM `usercoastrecord` WHERE uid = ".$uid." and roompwd='".$roomPwd."'";
        $cardsinfo = self::$db->query($sql);

        foreach ($cardsinfo as $key => $value) {
            if ($cardsinfo[$key]['cardsmode'] == 1) {
                $sql = "UPDATE `users` SET cards = cards + ".$cardsinfo[$key]['coast'].",paycards = paycards + ".$cardsinfo[$key]['coast']." WHERE id=".$cardsinfo[$key]['uid'];
                self::$db->query($sql);
                //插入消耗记录
                self::$db->insert('usercoastrecord')->cols(array(
                    'uid' => $cardsinfo[$key]['uid'],
                    'roompwd' =>  $roomPwd,
                    'gameName' => $cardsinfo[$key]['gameName'],
                    'coast' => -$cardsinfo[$key]['coast'],
                    'costtime' =>  time(),
                    'cardsmode' => 1
                ))->query();
            }else if ($cardsinfo[$key]['cardsmode'] == 2) {
                $sql = "UPDATE `users` SET cards = cards + ".$cardsinfo[$key]['coast'].",freecards = freecards + ".$cardsinfo[$key]['coast']." WHERE id=".$cardsinfo[$key]['uid'];
                self::$db->query($sql);
                //插入消耗记录
                self::$db->insert('usercoastrecord')->cols(array(
                    'uid' => $cardsinfo[$key]['uid'],
                    'roompwd' =>  $roomPwd,
                    'gameName' => $cardsinfo[$key]['gameName'],
                    'coast' => -$cardsinfo[$key]['coast'],
                    'costtime' =>  time(),
                    'cardsmode' => 2
                ))->query();
            }
        }
    }
    //道具收费
    public function chatCoast($uid,$roomPwd,$coast,$gametype){
        $sql = "SELECT cards,paycards,freecards FROM users WHERE id = '$uid'";
        $res = self::$db->row($sql);

        if ($res['cards'] < $coast) {
            return 1;
        }
        if ($res['cards'] != $res['paycards'] + $res['freecards'] ) {
            $sql = "UPDATE `users` SET freecards = '".$res['cards']."' - '".$res['paycards']."' WHERE id=".$uid;
            self::$db->query($sql);
        }
        if ($res['freecards'] >= $coast) {
            $sql = "UPDATE `users` SET cards = cards - ".$coast.", freecards = freecards - ".$coast." WHERE id=".$uid;
            self::$db->query($sql);

            self::$db->insert('userschatcoastrecord')->cols(array(
                'uid' => $uid,
                'gameName' => $gametype,
                'roompwd' =>  $roomPwd,
                'coast' => $coast,
                'costtime' =>  time(),
                'cardsmode' => 2
            ))->query();
        }else{
            $coastPaycards = $coast - $res['freecards'];
            $sql = "UPDATE `users` SET cards = cards - ".$coast.", freecards = 0, paycards = paycards - ".$coastPaycards." WHERE id=".$uid;
            self::$db->query($sql);

            if ($res['freecards'] != 0) {
                self::$db->insert('userschatcoastrecord')->cols(array(
                    'uid' => $uid,
                    'gameName' => $gametype,
                    'roompwd' =>  $roomPwd,
                    'coast' => $res['freecards'],
                    'costtime' =>  time(),
                    'cardsmode' => 2
                ))->query();
            }
            self::$db->insert('userschatcoastrecord')->cols(array(
                'uid' => $uid,
                'gameName' => $gametype,
                'roompwd' =>  $roomPwd,
                'coast' => $coastPaycards,
                'costtime' =>  time(),
                'cardsmode' => 1
            ))->query();
        }
        return 0;
    }
    //更新房间的局数
    public function updateRoomPlayGround($roompwd,$playground){
        $sql = "UPDATE `rooms` SET playground = ".$playground." WHERE roompwd='".$roompwd."'";
        self::$db->query($sql);
    }

    //记录房间单局结算
    public function insertRoomRecord($data){
        

        self::$db->insert('roomgroundrecord')->cols(array(
            'uid' => $data['uid'],
            'roompwd' =>  $data['roompwd'],
            'gameName' => $data['gamename'],
            'playground' => $data['playground'],
            'score' =>  $data['score'],
            'inserttime' =>  time(),
            'carddata' => $data['carddata']
        ))->query();
       
    }

      //记录房间总结算
    public function insertRoomAllRecord($data){
          self::$db->insert('roomrecord')->cols(array(
            'uid' => $data['uid'],
            'roompwd' =>  $data['roompwd'],
            'gameName' => $data['gamename'],
            'score' =>  $data['score'],
            'createtime' =>  time(),
            'roomData' => $data['data']
        ))->query();
    }
    public function gameover($roompwd){
         $sql = "UPDATE `rooms` SET gameover = 1,endtime=".time()." WHERE roompwd='".$roompwd."'";
         self::$db->query($sql);

         $sql = "UPDATE `userjoinrecord` SET gameover = 1 WHERE roompwd='".$roompwd."'";
         self::$db->query($sql);
    }

    //记录玩家的房间足迹
    public function userJoinRecord($uid,$roompwd){
        $sql = "SELECT * FROM `userjoinrecord` WHERE uid= ".$uid." and roompwd='".$roompwd."'";
        $uInfo =self::$db->row($sql);
        if (is_array($uInfo)&&isset($uInfo['uid'])) {
           //
        }else{
            //添加足迹
            self::$db->insert('userjoinrecord')->cols(array(
                'uid' => $uid,
                'roompwd' =>  $roompwd,
                'jointime' => time()
            ))->query();
        }
    }

    //更新房间的人数
    public function updateUserCount($roompwd,$add){
        $sql = "";
        if($add){
            $sql = "UPDATE `rooms` SET usercount = usercount+1  WHERE roompwd='".$roompwd."'";
        }else{
            $sql = "UPDATE `rooms` SET usercount = usercount-1  WHERE roompwd='".$roompwd."'";
        }
        self::$db->query($sql);
    }

    //
    public function getUserControlTag($uid){
        $sql = "SELECT * FROM `web_super_power_hangmaj` WHERE uid= ".$uid;
        $uInfo =self::$db->row($sql);
        if (is_array($uInfo)&&isset($uInfo['uid'])) {
           return $uInfo;
        }else{
           return array();
        }
    }

    //获得当前房间的所处的局数
    public function getCurPlayGroundByPwd($pwd){
        $sql = "SELECT roompwd,playground FROM `roomgroundrecord` WHERE roompwd= '".$pwd."' order by inserttime desc limit 1";
        $uInfo =self::$db->row($sql);
        if (is_array($uInfo)&&isset($uInfo['playground'])) {
           return $uInfo['playground'];
        }else{
           return 0;
        }
    }


    public function gameServerStop(){
        $workerid = GameManager::$_workerId;
        $sql = "SELECT t1.* FROM `rooms` as t1 left join businessworkermap as t2 on t1.roompwd=t2.roompwd WHERE t1.gameover=0 and t2.workerid=".$workerid;
        $roomlist =self::$db->query($sql);
        
        if (is_array($roomlist)&&sizeof($roomlist)>0) {
           foreach ($roomlist as $key => $roomInfo) {
                $sql = "UPDATE `rooms` SET gameover=1,endtime=".time()." WHERE roompwd='".$roomInfo['roompwd']."'";
                self::$db->query($sql);

                $sql = "UPDATE `userjoinrecord` SET gameover = 1 WHERE roompwd='".$roomInfo['roompwd']."'";
                self::$db->query($sql);

                $sql = "SELECT uid,SUM(score) as score FROM `roomgroundrecord` WHERE roompwd='".$roomInfo['roompwd']."' GROUP BY uid";
                $recordlist =self::$db->query($sql);

                if(is_array($recordlist)){
                     foreach ($recordlist as $keyIn => $sumlist) {
                        $sql = "SELECT uid FROM `roomrecord` WHERE roompwd='".$roomInfo['roompwd']."' and uid=".$sumlist['uid'];
                        $urecord =self::$db->row($sql);
                        if(is_array($urecord)&&isset($urecord['uid'])){

                        }else{
                            self::$db->insert('roomrecord')->cols(array(
                                'uid' => $sumlist['uid'],
                                'roompwd' =>  $roomInfo['roompwd'],
                                'gameName' => $roomInfo['gameName'],
                                'score' =>  $sumlist['score'],
                                'createtime' =>  time()
                            ))->query();
                        }

                        
                    }
                }
               
           }
        }
    }

    //查找房间内的钻石消耗
    public function cardsCoast($roompwd){
        $coast = 0;
        $free = 0;
        $sql = "SELECT * FROM `usercoastrecord` WHERE roompwd='".$roompwd."'";
        $uInfo = self::$db->query($sql);
        foreach ($uInfo as $key => $value) {  
            if ($uInfo[$key]['cardsmode'] == 1) {
                $coast += $uInfo[$key]['coast'];
            }else if ($uInfo[$key]['cardsmode'] == 2) {
                $free += $uInfo[$key]['coast'];
            }
        }
        $data['coast'] = $coast;
        $data['free'] = $free;
        return $data;  
    }

    //查询房间邀请码
    public function roomsInvite($roompwd)
    {
        $sql = "SELECT invitecode FROM `rooms` WHERE roompwd='".$roompwd."'";
        $uInfo = self::$db->row($sql);

        $sql = "SELECT * FROM `agent` WHERE invite='".$uInfo['invitecode']."'";
        $uInfo = self::$db->row($sql);
        if (is_array($uInfo) && $uInfo['id'] != 0 && $uInfo['status'] == 1) {
            $agentList = array();   
            $agentList = $this->findAgent($uInfo['invite'],$agentList);
        }else{
            $agentList = array();   
            $agentList = $this->findAgent('AAAAAA',$agentList);
        }
        return $agentList;
    }

    //查找邀请码代理及所有上级代理
    public function findAgent($invitecode,$agentList)
    {
        $sql = "SELECT id,parentID,level,percent FROM `agent` WHERE invite='".$invitecode."'";
        $uInfo = self::$db->row($sql);
        if (is_array($uInfo) && isset($uInfo['parentID'])) {
            $agentList[] = $uInfo;
            if($uInfo['parentID'] != 0){
                $sql = "SELECT invite FROM `agent` WHERE id='".$uInfo['parentID']."'";
                $uInfo = self::$db->row($sql);
                if(is_array($uInfo)){
                    return $this->findAgent($uInfo['invite'],$agentList);
                }
            }else if($uInfo['parentID'] == 0){
                return $agentList;
            }
        }
    }

    //统计代理的钻石结算情况
    public function agentCards($aid,$roomid,$totalcards,$coast,$percent,$obtain)
    {
        if ($coast != 0) {
            $percent = $obtain / $coast * 100;
        }else{
            $percent = 0;
        }    
        self::$db->insert('agent_ncome')->cols(array(
            'aid' => $aid,
            'roomid' => $roomid,
            'totalcards' => $totalcards,
            'totalpaycards' => $coast,
            'percent' => $percent,
            'total' => ($coast / 100),
            'obtain' => ($obtain / 100),
            'addTime' => time()
        ))->query();
        $obtain /= 100;
        $sql = "UPDATE `agent` SET mycash = mycash + ".$obtain." WHERE id=".$aid;
        self::$db->query($sql);
    }
    //--------------------------------回放相关功能-------------------------------------
    public function getRecordId($roompwd,$playground)
    {
        $sql = "SELECT id FROM `playback_record_mj` WHERE roomPwd = '".$roompwd."' and playRound = '".$playground."'";
        $res = self::$db->row($sql);
        if (!is_array($res) || !isset($res['id']) || $res['id'] == '') {
            return -1;
        }
        return $res['id'];
    }

    public function saveRoomMessage($gamename,$roompwd,$playground,$roomowner,$rule)
    {   
        self::$db->insert('playback_record_mj')->cols(array(
            'gamename' => $gamename,
            'roomPwd' => $roompwd,
            'playRound' => $playground,
            'roomOwner' => $roomowner,
            'rule' => $rule,
            'addtime' => time()
        ))->query();
    }
    
    public function saveUsersMessage($recordId,$uid,$seatno,$headUrl,$score,$nickname)
    {
        self::$db->insert('playback_recordusers_mj')->cols(array(
            'recordID' => $recordId,
            'userID' => $uid,
            'deskStation' => $seatno,
            'headUrl' => $headUrl,
            'pointNum' => $score,
            'nickname' => $nickname,
        ))->query();
    }

    public function saveGameMessage($recordId,$datatype,$data,$playground)
    {
        self::$db->insert('playback_recordjsondata_mj')->cols(array(
            'recordID' => $recordId,
            'DataType' => $datatype,
            'jsonData' => $data,
            'curRound' => $playground,
            'addtime' => time()
        ))->query();
    }

    public function getRoomMessage($recordId)
    {
        $sql = "SELECT * FROM `playback_record_mj` WHERE id = '".$recordId."'";
        $res = self::$db->row($sql);
        return $res;
    }

    public function getUsersMessage($recordId)
    {
        $sql = "SELECT * FROM `playback_recordusers_mj` WHERE recordID = '".$recordId."'";
        $res = self::$db->query($sql);
        return $res;
    }

    public function getGameMessage($recordId)
    {    
        $sql = "SELECT * FROM `playback_recordjsondata_mj` WHERE recordID = '".$recordId."'";
        $res = self::$db->query($sql);
        return $res;
    }
    //------------------------------------------------------------------------------------
    //防止加入更多房间
    public function getLastRoom($uid,$roompwd = -1)
    {
        $sql = "SELECT * FROM `reconnection` WHERE uid='".$uid."'";
        $info = self::$db->row($sql);
        if (is_array($info) && $info['uid'] != '') {
            if ($roompwd == -1) {
                return $info;
            }else{
                if ($roompwd == $info['roompwd']) {
                    return -1;
                }else{
                    return $info;
                }
            }
        }else{
            return -1;
        }
    }

    public function insertLastRoom($uid,$roompwd,$gamename)
    {
        $last = $this->getLastRoom($uid);
        if ($last == -1) {
            self::$db->insert('reconnection')->cols(array(
                'uid' => $uid,
                'roompwd' => $roompwd,
                'gamename' => $gamename,
            ))->query();
        }
    }

    public function deleteLastRoom($uid)
    {
        $sql = "DELETE FROM `reconnection` WHERE uid='".$uid."'";
        $info = self::$db->row($sql);
    }

    public function gameStopDeleteLastRoom($gamename)
    {
        $sql = "DELETE FROM `reconnection` WHERE gamename='".$gamename."'";
        $info = self::$db->row($sql);
        $sql = "UPDATE `rooms` SET gameover=1,endtime=".time()." WHERE gameover=0 and gameName = '".GAMENAME."'";
        self::$db->query($sql);
    }
}
