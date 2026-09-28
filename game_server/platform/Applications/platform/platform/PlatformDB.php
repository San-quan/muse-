<?php

require_once __DIR__ . '/../../../vendor/mysql-master/src/Connection.php';
require_once __DIR__ . '/PlayerManager.php';
require_once __DIR__ . '/HttpManager.php';

class PlatformDB
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
        if(self::$db == null){
            echo "[Platform DB success]\n";
            self::$db = new \Workerman\MySQL\Connection('127.0.0.1', '3306', 'root', '', 'game735');
            // self::$db = new \Workerman\MySQL\Connection('rm-bp1qf4ol5816z28z5.mysql.rds.aliyuncs.com', '3306', 'hunzugame', 'bd7839a3d823204d', 'jiagecai');
        }
    }

    public function getSysInfo(){
        $sql = "SELECT * FROM `system_config`";
        return self::$db->row($sql);
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
    public function filterNickname($nickname){
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

    public function getUserCards(&$info)
    {
        if (strlen($info['phone']) == 11) {
            $sql = "SELECT * FROM `users` WHERE phone='".$info['phone']."'";
            $uInfo =self::$db->query($sql);
            if (count($uInfo) >= 2) {
                $otherCards['freecards'] = 0;
                $otherCards['paycards'] = 0;
                $otherCards['cards'] = 0;

                $all['freecards'] = 0;
                $all['paycards'] = 0;
                $all['cards'] = 0;
                foreach ($uInfo as $key => $value) {
                    if ($value['verifyPhone'] === 0) {
                        $otherCards['freecards'] += $uInfo['freecards'];
                        $otherCards['paycards'] += $uInfo['paycards'];
                        $otherCards['cards'] += $uInfo['cards'];
                    }
                    $all['freecards'] += $uInfo['freecards'];
                    $all['paycards'] += $uInfo['paycards'];
                    $all['cards'] += $uInfo['cards'];
                }
                if ($otherCards['freecards'] > 0 || $otherCards['paycards'] > 0 || $otherCards['cards'] > 0) {
                    $sql = "UPDATE `users` SET freecards = 0,paycards = 0,cards = 0 WHERE phone = '".$info['phone']."' and verifyPhone = 0";
                    self::$db->query($sql);

                    $sql = "UPDATE `users` SET freecards = freecards + ".$otherCards['freecards'].",paycards = paycards + ".$otherCards['paycards'].",cards = cards + ".$otherCards['cards']." WHERE phone = '".$info['phone']."' and verifyPhone = 1";
                    self::$db->query($sql);
                }
            }
            if (is_array($uInfo)&&isset($uInfo['id'])) {
                $info['freecards'] = $all['freecards'];
                $info['paycards'] = $all['paycards'];
                $info['cards'] = $all['cards'];
            }
        }
    }
    //获取该房号的数据
    // public function checkRoomPwdActive($pwd){
    //     $sql = "SELECT * FROM `rooms` WHERE roompwd=".$pwd;
    //     $uInfo =self::$db->row($sql);
    //     if (is_array($uInfo)&&isset($uInfo['id'])) {
    //        return true;
    //     }
    //     return false;
    // }
    //创建房间数据
    
    public function getgameList(){
        $sql = "SELECT * FROM room_info ORDER BY gameorder ASC";
        $res = self::$db->query($sql);
        return $res;
    }
    public function createRoom($uid,$gameName,$pwd,$rule,$coast){
        self::$db->insert('rooms')->cols(array(
                        'gameName'=>$gameName,
                        'roompwd'=>$pwd,
                        'roomowner'=>$uid,
                        'rule'=>serialize($rule),
                        'createtime'=>time(),
                        'gameover'=>0,
                        'playground'=>0,
                        'coast' =>$coast,
                        'invitecode' => $rule['invitecode']
                        ))->query();
    }

    public function getCoastUid(&$uid)
    {
        $sql = "SELECT * FROM `users` WHERE id='".$uid."'";
        $info =self::$db->row($sql);
        if ($info['verifyPhone'] == 1) {
            return; 
        }
        if (strlen($info['phone']) == 11) {
            $sql = "SELECT * FROM `users` WHERE verifyPhone = 1 and phone='".$info['phone']."'";
            $uInfo =self::$db->row($sql);
            $uid = $uInfo['id'];
        }
    }
       //玩家支付房卡
    public function coastPlayerCards($uid,$roomPwd,$gameName,$coast){
        $this->getCoastUid($uid);
        $sql = "SELECT freecards FROM users WHERE id = '$uid'";
        $res = self::$db->row($sql);
        if ($res['freecards'] >= $coast) {
            $sql = "UPDATE `users` SET cards = cards - ".$coast.", freecards = freecards - ".$coast." WHERE id=".$uid;
            self::$db->query($sql);

            self::$db->insert('usercoastrecord')->cols(array(
                'uid' => $uid,
                'gameName' => $gameName,
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
                    'gameName' => $gameName,
                    'roompwd' =>  $roomPwd,
                    'coast' => $res['freecards'],
                    'costtime' =>  time(),
                    'cardsmode' => 2
                ))->query();
            }
            self::$db->insert('usercoastrecord')->cols(array(
                'uid' => $uid,
                'gameName' => $gameName,
                'roompwd' =>  $roomPwd,
                'coast' => $coastPaycards,
                'costtime' =>  time(),
                'cardsmode' => 1
            ))->query();
        }
    }


    

    //-------------------------------------------------------------------------------
    //获取玩家的历史充值记录
    public function getPayOrderRecord($uid){
        $time = time()-24*3600*15;
        $sql = "SELECT t1.localOrderNo,t1.price,t2.diamond,t2.award,t4.parent_id,t1.time FROM web_final_order as t1 
LEFT JOIN web_playerorder AS t2 ON t1.orderNo = t2.orderNo
LEFT JOIN users as t4 ON t2.uid = t4.id WHERE t1.status = 1 AND t2.uid =".$uid." AND t1.time > ".$time ;
        $uInfo =self::$db->query($sql);
        return $uInfo;
    }
    //获取商品列表
    public function getGoodsList($uid){
        $sql = "SELECT * FROM goods where state = 1";
        $goods =self::$db->query($sql);
        
        $data['record'] = $this->getPayOrderRecord($uid);
        foreach ($data['record'] as $key => $value) {
            $data['record'][$key]['time'] = date('Y-m-d H:i:s',$data['record'][$key]['time']);
        }
        $data['goods'] = $goods;
        return $data;
    }

    //获取玩家的历史房间总数
    public function getGameRecordCount($uid){
        $sql = "SELECT count(roompwd) as roomcount FROM roomrecord WHERE uid =".$uid;
        $uInfo =self::$db->row($sql);
        return $uInfo['roomcount'];
    }
    //查询玩家房间战绩列表
    public function getGameRecord($uid){
        $sql = "SELECT t1.roompwd,t1.score,t1.gameName,FROM_UNIXTIME(t1.createtime) as dtime,t2.roomowner,t2.endtime,t2.playground,t2.rule FROM roomrecord as t1 left join rooms as t2 on t1.roompwd=t2.roompwd WHERE t2.playground>0 and t1.uid =".$uid." order by t1.createtime desc limit 20";
        $roomlist = self::$db->query($sql);
        if(count($roomlist) > 0){
            foreach ($roomlist as $key => $value) {
                $roomlist[$key]['rule'] = unserialize($roomlist[$key]['rule']);
                $sql = "SELECT id FROM roomgroundrecord WHERE roompwd ='".$roomlist[$key]['roompwd']."'";
                $recordList = self::$db->row($sql);
                if (is_array($recordList) && isset($recordList['id']) && $recordList['id'] != '') {
                    $roomlist[$key]['code'] = 0;
                }else{
                    $roomlist[$key]['code'] = 1;
                }
            }
        }else{
            return array();
        }
        return $roomlist;
    }

    //查询玩家俱乐部房间战绩列表
    public function getClubGameRecord($uid,$cid){
        $isOwner = $this->isClubOwner($uid,$cid);
        $sql = "";
        if($isOwner){
             $sql = "SELECT t1.roompwd,FROM_UNIXTIME(t1.createtime) as dtime,t2.roomowner,t2.endtime,t2.playground,t2.rule FROM roomrecord as t1 left join rooms as t2 on t1.roompwd=t2.roompwd WHERE t2.isclub=1 and t2.cid='".$cid."' and t2.playground>0  and t1.createtime > ".(time()-24*3600)." group by t1.roompwd,t1.roompwd ,t1.createtime,t2.roomowner,t2.endtime,t2.playground,t2.rule order by t1.createtime desc limit 10";
        }else{
             $sql = "SELECT t1.roompwd,t1.score,FROM_UNIXTIME(t1.createtime) as dtime,t2.roomowner,t2.endtime,t2.playground,t2.rule FROM roomrecord as t1 left join rooms as t2 on t1.roompwd=t2.roompwd WHERE t2.isclub=1 and t2.cid='".$cid."' and t2.playground>0 and t1.uid =".$uid." and t1.createtime > ".(time()-24*3600)." order by t1.createtime desc limit 10";
        }
        $roomlist = self::$db->query($sql);

        if(count($roomlist) > 0){
            foreach ($roomlist as $key => $value) {
                $roomlist[$key]['rule'] = unserialize($roomlist[$key]['rule']);
                 $sql = "SELECT t1.uid,t1.score,t2.nickname,t2.photo FROM roomrecord as t1 left join users as t2 on t1.uid=t2.id WHERE t1.roompwd ='".$value['roompwd']."'";
                $roomlist[$key]['userlist'] = self::$db->query($sql);
            }
        }else{
            return array();
        }
        return $roomlist;
    }

    //获取房间的局数列表
    public function getRoomRecordList($roompwd,&$gamename,&$rule){

        $sql = "SELECT roompwd,playground,gameName,rule FROM rooms WHERE gameover = 1 and playground>0 and roompwd ='".$roompwd."'";
        $uInfo =self::$db->row($sql);
        $gamename = $uInfo['gameName'];
        $rule = unserialize($uInfo['rule']);
        if(is_array($uInfo)&&isset($uInfo['roompwd'])){
            $sql = "SELECT t1.uid,t1.score,t2.nickname FROM roomrecord as t1 left join users as t2 on t1.uid=t2.id WHERE t1.roompwd ='".$roompwd."'";
            $userlist = self::$db->query($sql);

            $sql = "SELECT uid,roompwd,playground,score,gameName FROM roomgroundrecord WHERE roompwd ='".$roompwd."'";
            $recordList = self::$db->query($sql);

            $resData = array();
            for ($i=1; $i <= $uInfo['playground']; $i++) { 
                for ($j=0; $j < sizeof($userlist); $j++) { 
                        $isHave = false;
                        for ($k=0; $k < count($recordList); $k++) { 
                            if ($recordList[$k]['playground'] == $i && $recordList[$k]['uid'] == $userlist[$j]['uid']) {
                                $resData[$i][$j] = $recordList[$k]['score'];
                                $isHave = true;
                            }
                        }
                        if(!$isHave){
                            $resData[$i][$j] = 0;
                        }

                }
            }
            $data['groundlist'] = $resData;
            $data['nickandscore'] = $userlist;
            $data['roompwd'] = $roompwd;
            return $data;
        }
        return array();
    }
    //查询玩家的房间记录
    public function getRoomRecord($uid){
        $sql = "SELECT t1.uid,t1.roompwd,t1.gameName,t2.playground,t2.rule,t2.roomowner FROM usercoastrecord as t1 LEFT JOIN rooms as t2 ON t1.roompwd = t2.roompwd WHERE t1.uid = '$uid' AND t1.coast > 0 AND t2.gameover=0 GROUP BY t1.costtime,t1.roompwd,t1.gameName,t2.gameName,t2.gameover,t2.playground,t2.roomowner,t2.roompwd,t2.rule,t2.usercount  ORDER BY t1.costtime DESC LIMIT 20";
        $roomlist = self::$db->query($sql);

        $sql = "SELECT roompwd,gameName,playground,rule,roomowner FROM rooms where roomowner = '$uid' and gameover = 0";
        $res = self::$db->query($sql);

        $isHave = false;
        foreach ($res as $key => $value) {
            $res[$key]['uid'] = $uid;
            foreach ($roomlist as $k => $v) {
                if ($roomlist[$k]['roompwd'] == $res[$key]['roompwd']) {
                    $isHave = true;
                    break;
                }
            }
            if (!$isHave) {
                $roomlist[] = $res[$key];
            }
            
        }
        if(count($roomlist) > 0){
            foreach ($roomlist as $key => $value) {
                $roomlist[$key]['rule'] = unserialize($roomlist[$key]['rule']);
            }
        }else{
            return array();
        }
       
        return $roomlist;
    }

    //查询这一局的详细数据
    public function getRoomRecordDetailList($roompwd,$ground){
        $sql = "SELECT t1.uid,t1.roompwd,t1.playground,t1.score,t1.carddata,t2.nickname,t1.gameName FROM roomgroundrecord as t1 left join users as t2 on t1.uid=t2.id WHERE roompwd ='".$roompwd."' and playground =".$ground;
        $recordList = self::$db->query($sql);
        if (isset($recordList['0']['gameName']) && ($recordList['0']['gameName'] == 'SifuCards' || $recordList['0']['gameName'] == 'HangzhouMajong'|| $recordList['0']['gameName'] == 'Doudz'|| $recordList['0']['gameName'] == 'Runfast')) {
            $data['roompwd'] = $roompwd;
            $data['gamename'] = $recordList['0']['gameName'];
            return $data;
        }else if(isset($recordList['0']['gameName']) && ($recordList['0']['gameName'] == 'ShisanWater' || $recordList['0']['gameName'] == 'ShiSanWater')){
            if(count($recordList)>0){
                for ($j=0; $j < sizeof($recordList); $j++) { 
                    $recordList[$j]['carddata'] = unserialize( $recordList[$j]['carddata']);
                }
            }
            $recordList['gamename'] = 'ShisanWater';
            return $recordList;
        }
        return array();
    }

    //获取房间的马牌
    public function getRoomRecordDetailMaData($roompwd){
        $sql = "SELECT rule FROM `rooms` WHERE roompwd='".$roompwd."'";
        $roominfo =self::$db->row($sql);

        if (is_array($roominfo)&&isset($roominfo['rule'])) {

            $rule = unserialize($roominfo['rule']);
            if (isset($rule['ma'])) {
                 return $rule['ma'];
            }
        }
        return 0;
    }
    

    //加入房间，查询房间信息
    public function getNewRoomPwd(){
        $sql = "SELECT roomid FROM `roomids` WHERE flag=0 order by id asc limit 1";
        $roominfo =self::$db->row($sql);

        if (is_array($roominfo)&&isset($roominfo['roomid'])) {
            $sql = "UPDATE `roomids` set flag = 1 where roomid = '".$roominfo['roomid']."'";
            $rowCount = self::$db->query($sql);

            if($rowCount == 1){
                return $roominfo['roomid'];
            }else{
                return $this->getNewRoomPwd();
            }
        }else{
            return -1;//房号不够了
        }
    }

    //查询房间类型
    public function getRoomGamename($roomPwd){
        $sql = "SELECT * FROM `rooms` WHERE roompwd='".$roomPwd."'";
        $roominfo =self::$db->row($sql);

        if (is_array($roominfo)&&isset($roominfo['id'])) {
            return $roominfo['gameName'];
        }else{
            return;//房间不存在
        }
    }
    //加入房间，查询房间信息
    public function checkRoomPwd($uid,$roomPwd){
        $sql = "SELECT * FROM `rooms` WHERE roompwd='".$roomPwd."'";
        $roominfo =self::$db->row($sql);

        if (is_array($roominfo)&&isset($roominfo['id'])) {

            if ($roominfo['gameover'] == 0) {
                 return 0;//正常的房间，可以加入
            }else{
                return 1;//房间已经解散
            }
            
        }else{
            return 2;//房间不存在
        }
    }


        //获取大厅消息
    public function getHallNotice(){
        $sql = "SELECT msg,kefu FROM message WHERE type='notice'";
        $res =self::$db->row($sql);
         return $res;
    }
    //获取玩家的房间列表
    public function getPlayerRoomList($uid){
        $sql = "SELECT t2.*  FROM userjoinrecord as t1 LEFT JOIN rooms as t2 ON t1.roompwd = t2.roompwd WHERE t1.uid =".$uid." and t1.gameover =0  ORDER BY t1.jointime DESC";
        $list = self::$db->query($sql);
        foreach ($list as $key => $value) {
            $list[$key]['rule'] = unserialize($list[$key]['rule']);
        }
       return $list;
    }

    //查询用户的邀请码
    public function checkupPlayerCode($uid){
        $sql = "SELECT * FROM `users` WHERE id=".$uid;
        $uInfo =self::$db->row($sql);

        if (is_array($uInfo)&&isset($uInfo['id'])&&$uInfo['parent_id'] == 0) {
           return 0;//未绑定
        }else{
            $sql = "SELECT invite FROM `agent` WHERE id=".$uInfo['parent_id'];
            $aInfo =self::$db->row($sql);

            if (is_array($aInfo)&&isset($aInfo['invite'])) {
                return $aInfo['invite'];
            }else{
                return 0;
            }
        }
    }


    //获取用户的邀请码
    public function checkPlayerCode($uid){
        $sql = "SELECT * FROM `users` WHERE id=".$uid;
        $uInfo =self::$db->row($sql);

        if (is_array($uInfo)&&isset($uInfo['id'])) {
            if ($uInfo['parent_id'] == 0) {
                 return 0;//未绑定
            }else{
                return 1;//已经绑定
            }
        }else{
            return 2;//玩家不存在
        }
    }
    //检测代理的邀请码
    public function checkPlayerCodeActive($code){
        $sql = "SELECT id FROM `agent` WHERE invite='".$code."'";
        $aInfo =self::$db->row($sql);

        if (is_array($aInfo)&&isset($aInfo['id'])) {
            return $aInfo['id'];
        }else{
            return "";
        }
    }
    //绑定代理的邀请码
    public function bindPlayerInvateCode($uid,$code){

        $sql = "SELECT id FROM `agent` WHERE invite='".$code."'";
        $aInfo =self::$db->row($sql);

        if (is_array($aInfo)&&isset($aInfo['id'])) {
            $sql = "UPDATE `users` SET  parent_id= ".$aInfo['id']." ,cards=cards+8 WHERE id=".$uid;
            self::$db->query($sql);

            //插入绑定记录
            self::$db->insert('web_player_bind')->cols(array(
                'uid' => $uid,
                'invitecode' =>  $code,
                'time' =>  time(),
            ))->query();
        }

        $sql = "SELECT cards FROM `users` WHERE id=".$uid;
        $data = self::$db->row($sql);
        if (is_array($data)&&isset($data['cards'])) {
            return $data['cards'];
        }else{
            return 0;
        }
        
    }

    //验证邀请码的有效性
    public function checkInvitecode($invitecode)
    {
        $sql = "SELECT invite FROM `agent` WHERE invite = '$invitecode'";
        $inviteInfo =self::$db->row($sql);
        if(is_array($inviteInfo) && isset($inviteInfo['invite'])){
            return true;
        }else{
            return false;
        }
    }
    public function getContinuityDay($uid)
    {
        $sql = "SELECT * FROM `usersignin` WHERE uid = '$uid'";
        $info =self::$db->row($sql);
        if (is_array($info) && isset($info['uid']) && $info['uid'] != '') {
            $signinTime = date("Y-m-d",$info['signinTime']);
            $yesterday = date("Y-m-d",strtotime("-1 day"));
            $today = date("Y-m-d");
            if ($signinTime != $yesterday && $signinTime != $today) {
                $info['continuityDay'] = 0;
            }
            if ($signinTime == $today) {
                $data['signined'] = true;
            }else{
                $data['signined'] = false;
            }
        }else{
            $info['continuityDay'] = 0;
             self::$db->insert('usersignin')->cols(array(
                'uid' => $uid,
                'signinTime' =>  0,
                'continuityDay' =>  0,
            ))->query();
            $data['signined'] = false;
        }

        $data['continuityDay'] = $info['continuityDay'];
        return $data;
    }
    public function getSignintime($uid)
    {
        $info = $this->getContinuityDay($uid);
        $data['day'] = $info['continuityDay'];
        $data['signined'] = $info['signined'];
        $day = $data['day'] + 1;
        $sql = "SELECT MAX(continuityDay) as continuityDay FROM `signinsong`";
        $res = self::$db->row($sql);
        if ($res['continuityDay'] > $data['day']) {
            $day = $data['day'] + 1;
        }else if($res['continuityDay'] <= $data['day']){
            $day = $res['continuityDay'];
        }
        $sql = "SELECT * FROM `signinsong` WHERE continuityDay = ".$day;
        $res = self::$db->row($sql);
        
        $sql = "SELECT * FROM `goods` WHERE id = ".$res['goodsid'];
        $res =self::$db->row($sql);
        $data['song'] = $res['diamond'] + $res['award'];
        return $data;
    }

    public function getPhotoList(){
        $sql = "SELECT title,content,recommend FROM platformphoto GROUP BY title,content,recommend ORDER BY recommend ASC LIMIT 5";
        return self::$db->query($sql);
    }

    public function userSignin($uid)
    {
        $data = $this->getSignintime($uid);
        if ($data['signined']) {
            $data['code'] = 2;
            $data['desc'] = '您今天已经签到';
        }else{
            $day = $data['day'] + 1;
            $time = time();
            $sql = "UPDATE `usersignin` set continuityDay = $day,signinTime = $time where uid = '$uid'";
            self::$db->query($sql);
            $song = $data['song'];
            $sql = "UPDATE `users` set cards = cards + $song,freecards = freecards + $song where id = '$uid'";
            self::$db->query($sql);

            $sql = "SELECT cards FROM `users` where id = '$uid'";
            $res =self::$db->row($sql);

            $data['code'] = 1;
            $data['day'] = $day;
            $data['cards'] = $res['cards'];
            $data['type'] = 'cards';       
        }
        return $data;
    }

    public function getLastRoom($uid)
    {
        $sql = "SELECT * FROM `reconnection` WHERE uid='".$uid."'";
        $info = self::$db->row($sql);
        if (is_array($info) && $info['uid'] != '') {
            return $info;
        }else{
            return array();
        }
    }

    public function getgood($uid,$goodsid)
    {
        $sql = "SELECT * FROM goods where id = $goodsid";
        $goods =self::$db->row($sql);
        $sql = "SELECT openid FROM users where id = $uid";
        $info =self::$db->row($sql);

        $data['goodsid'] = $goodsid;
        $data['openid'] = $info['openid'];
        $data['zuanshi'] = $goods['price'] * 100;
        $data['userid'] = $uid;
        return $data;
    }
    public function getCards($uid)
    {
        $sql = "SELECT * FROM users where id = $uid";
        $info =self::$db->row($sql);
        if ($info['verifyPhone'] != 1) {
            if (strlen($info['phone']) == 11) {
                $sql = "SELECT * FROM `users` WHERE verifyPhone = 1 and phone='".$info['phone']."'";
                $uInfo =self::$db->row($sql);

                $sql = "UPDATE `users` SET phone = '".$phone."',freecards = 0,paycards = 0,cards = 0 WHERE id=".$uid;
                self::$db->query($sql);

                $sql = "UPDATE `users` SET freecards = freecards + ".$info['freecards'].",paycards = paycards + ".$info['paycards'].",cards = cards + ".$info['cards']." WHERE id=".$uInfo['id'];
                self::$db->query($sql);

                $sql = "SELECT * FROM users where id = ".$uInfo['id'];
                $info =self::$db->row($sql);
            }
        }

        PlayerManager::getInstance()->updataUserCards($uid,$info['cards']);
        
        return $info['cards'];
    }
    public function getCanSendsms($uid,$phone)
    {
        $sql = "SELECT id FROM openidtophone where uid = $uid";
        $info =self::$db->row($sql);
        if (is_array($info) && isset($info['id']) &&$info['id'] != 0) {
            $res['code'] = 1;
            $res['desc'] = '您已经绑定过手机号';
        }else{
            $sendtime = $this->getLastSendtime($uid);
            if ($sendtime == -1) {
                $res['code'] = 0;
                $res['desc'] = '可以发送';
            }else{
                $res['code'] = 1;
                $res['desc'] = '暂时不能发送，请稍后';
            }
        }
        return $res;
    }
    public function getLastSendtime($uid)
    {
        $sql = "SELECT id,sendtime,state FROM verificationcode where uid = $uid order by id desc";
        $info =self::$db->query($sql);
        if (is_array($info) && count($info) > 0) {
            $sendtime = $info[0]['sendtime'];
            $now = time();
            if ($sendtime > ($now - 300)) {
                //验证码在有效期内
                if ($info[0]['state'] === 0) {
                    //验证码在有效期内 且发送成功，则不能重发
                    return $sendtime;
                }else{
                    if ($sendtime > ($now - 60)){
                        //验证码在有效期内 但发送失败，距离上次发送超过一分钟 可以重发
                        return -1;
                    }else{
                        //验证码在有效期内 但发送失败，距离上次发送尚未超过一分钟 不可以重发
                        return $sendtime;
                    }
                }
            }else{
                //验证码不在有效期内
                return -1;
            }
        }else{
            return -1;
        }
    }
    public function saveCode($uid,$sendres,$data)
    {
        self::$db->insert('verificationcode')->cols(array(
            'uid' => $uid,
            'phone' => $data['phone'],
            'sendtime' => time(),
            'code' => $data['code'],
            'detail' => json_encode($sendres['detail']),
            'state' => $sendres['code']
        ))->query();
    }
    public function checkCode($uid,$data)
    {
        $phone = $data['phone'];
        $code = $data['code'];

        $sql = "SELECT * FROM verificationcode where uid = $uid and phone = '$phone' order by id desc";
        $info =self::$db->query($sql);
        if (is_array($info) && count($info) > 0) {
            $lastCode = $info[0];
            $now = time();
            if ($code == $lastCode['code'] && $lastCode['state'] === 0 && $sendtime > ($now - 300)) {
                $res['code'] = 0;
                $res['desc'] = '验证通过';
                $this->mergeUser($uid,$data['phone']);
            }else if($code != $lastCode['code']){
                $res['code'] = 1;
                $res['desc'] = '验证码有误';
            }else if($sendtime < ($now - 300)){
                $res['code'] = 3;
                $res['desc'] = '验证码失效';
            }else{
                $res['code'] = 4;
                $res['desc'] = '？？？';
            }
        }else{
            $res['code'] = 2;
            $res['desc'] = '尚未发送验证码';
        }
    }
    public function mergeUser($uid,$phone)
    {

        $sql = "SELECT * FROM users where phone = '$phone'";
        $info =self::$db->row($sql);
        if (is_array($info) && isset($info['id']) &&$info['id'] != 0) {
            $sql = "SELECT * FROM users WHERE id=".$uid;
            $user =self::$db->row($sql);

            $sql = "UPDATE `users` SET phone = '".$phone."',freecards = 0,paycards = 0,cards = 0 WHERE id=".$uid;
            self::$db->query($sql);

            $sql = "UPDATE `users` SET freecards = freecards + ".$info['freecards'].",paycards = paycards + ".$info['paycards'].",cards = cards + ".$info['cards']." WHERE id=".$info['id'];
            self::$db->query($sql);

        }else{
            $sql = "UPDATE `users` SET verifyPhone = 1, phone = '".$phone."' WHERE id=".$uid;
            self::$db->query($sql);
        }
    }
}
