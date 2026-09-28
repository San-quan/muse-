<?php
// 自动加载类
require_once __DIR__ . '/MessageDefine.php';
require_once __DIR__ . '/PlatformDB.php';
require_once __DIR__ . '/PlayerManager.php';
require_once __DIR__ . '/HttpManager.php';
class Platform
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

    


    public function onSocketMessage($client_id,$MainID,$data){

        switch ($MainID) {

            case PT_CREATEROOM:
                {
                        /**--------------------------------------------
                        *创建成功
                        * @return $result 
                        * array('code','desc','gamename','roompwd')
                        * code: 0/1/2/3/4 创建成功/钻石不足/数据异常/俱乐部房卡不足/俱乐部不存在
                        */
                    if (isset($data['gamename'])&&isset($data['rule'])&&$this->checkCreateParamEnable($data['gamename'],$data['rule'])) {
                        $res = PlatformDB::getInstance()->getLastRoom(PlayerManager::getInstance()->getUserID($client_id));
                        if (!isset($res['roompwd']) || $res['roompwd'] == '') {
                            $ruleData = $this->checkCreateParam($data['gamename'],$data['rule']);
                            $coast = $this->getCreateRoomCoast($data['gamename'],$ruleData['paymode'],$ruleData['gameground'],$ruleData['peoplecount']);

                            $this->createRoom(PlayerManager::getInstance()->getUserID($client_id),$data['gamename'],$ruleData,$coast);
                        }else{
                            $data['code'] = 3;
                            $data['desc'] = "您已经在其他房间";
                            PlayerManager::getInstance()->sendMsgByClientId($client_id,PT_CREATEROOM,$data);
                        }
                        
                        
                    }else{
                        //数据异常,提交了非法数据
                        $data['code'] = 2;
                        $data['desc'] = "数据异常";
                        PlayerManager::getInstance()->sendMsgByClientId($client_id,PT_CREATEROOM,$data);
                        //var_dump( $data);
                    }
                }
                break;
            case PT_ENTERROOM:
            {
                /**--------------------------------------------
                *进入房间
                * @param array('roompwd')
                * @return array(code,desc)
                * code: 0/1/2/3 正常/房间结束/房间不存在/参数错误
                */
                $resData = array();
                if (isset($data['roompwd'])&&strlen($data['roompwd'])==6) {
                    $resData['code'] = PlatformDB::getInstance()->checkRoomPwd(PlayerManager::getInstance()->getUserID($client_id),$data['roompwd']);
                    if($resData['code'] == 1){
                        $resData['desc'] = "game over";
                    }else if($resData['code'] == 2){
                        $resData['desc'] = "game none";
                    }else if($resData['code'] == 4){
                        $resData['desc'] = "you are not club vip";
                    }else if($resData['code'] == 0){
                        $resData['desc'] = "game active";
                        $resData['gamename'] = PlatformDB::getInstance()->getRoomGamename($data['roompwd']);
                    }
                }else{
                    //数据异常,提交了非法数据
                    $resData['code'] = 3;
                    $resData['desc'] = "param error";
                }
                $this->sendMsgByClientId($client_id,PT_ENTERROOM,$resData);
            }
                break;
             case PT_GOODSLIST:{
                //获取产品列表
                $res = PlatformDB::getInstance()->getGoodsList(PlayerManager::getInstance()->getUserID($client_id));
                $this->sendMsgByClientId($client_id,PT_GOODSLIST,$res);
            }
                break;
            case PT_PAYORDER_LIST:{
                //
                $res = PlatformDB::getInstance()->getPayOrderRecord(PlayerManager::getInstance()->getUserID($client_id));
                $this->sendMsgByClientId($client_id,PT_PAYORDER_LIST,$res);
            }
                break;
            case PT_FIGHTING:{
                //战绩
                $res = PlatformDB::getInstance()->getGameRecord(PlayerManager::getInstance()->getUserID($client_id));
                $this->sendMsgByClientId($client_id,PT_FIGHTING,$res);
            }
                break;
                
            case PT_FIGHTING_ROOM:{
                $resData = array();
                if (isset($data['roompwd'])&&strlen($data['roompwd'])==6) {
                    $resData['code'] = 1;
                    $resData['desc'] = "success";
                    $gamename = '';
                    $rule = array();
                    $resData['list'] = PlatformDB::getInstance()->getRoomRecordList($data['roompwd'],$gamename,$rule);
                    $resData['gamename'] = $gamename;
                    $resData['rule'] = $rule;
                }else{
                    //数据异常,提交了非法数据
                    $resData['code'] = 2;
                    $resData['desc'] = "param error";
                }
                $this->sendMsgByClientId($client_id,PT_FIGHTING_ROOM,$resData);
            }
                break;
            case PT_FIGHTING_ROOM_DETAIL:{
                $resData = array();
                if (isset($data['ground'])&&isset($data['roompwd'])&&strlen($data['roompwd'])==6) {
                    $resData['code'] = 1;
                    $resData['desc'] = "success";
                    $resData['ground'] = $data['ground'];
                    $resData['list'] = PlatformDB::getInstance()->getRoomRecordDetailList($data['roompwd'],$data['ground']);
                    $resData['gamename'] = $resData['list']['gamename'];
                    unset($resData['list']['gamename']);
                    $resData['ma'] =  PlatformDB::getInstance()->getRoomRecordDetailMaData($data['roompwd']);
                }else{
                    //数据异常,提交了非法数据
                    $resData['code'] = 2;
                    $resData['desc'] = "param error";
                }
                 $this->sendMsgByClientId($client_id,PT_FIGHTING_ROOM_DETAIL,$resData);
            }
                break;
            case PT_FIND:{
                $res = PlatformDB::getInstance()->getRoomRecord(PlayerManager::getInstance()->getUserID($client_id));
                PlayerManager::getInstance()->sendMsgByClientId($client_id,PT_FIND,$res);
            }
                break;
            case PT_SIGNIN:
                $res = PlatformDB::getInstance()->getSignintime(PlayerManager::getInstance()->getUserID($client_id));
                PlayerManager::getInstance()->sendMsgByClientId($client_id,PT_SIGNIN,$res);
                break;
                
            case PT_SIGNREG:
                $res = PlatformDB::getInstance()->userSignin(PlayerManager::getInstance()->getUserID($client_id));
                PlayerManager::getInstance()->sendMsgByClientId($client_id,PT_SIGNREG,$res);
                break;
            case PT_PAYMENT:
                if (isset($data['goodsid'])) {           
                    $data = PlatformDB::getInstance()->getgood(PlayerManager::getInstance()->getUserID($client_id),$data['goodsid']);
                    $res = HttpManager::getInstance()->payment($data);
                    PlayerManager::getInstance()->sendMsgByClientId($client_id,PT_PAYMENT,$res);
                }else{
                    //数据异常,提交了非法数据
                    $data['code'] = 2;
                    $data['desc'] = "数据异常";
                    PlayerManager::getInstance()->sendMsgByClientId($client_id,PT_PAYMENT,$data);
                    //var_dump( $data);
                }
                break;
            case PT_USERCARDS:          
                $data = PlatformDB::getInstance()->getCards(PlayerManager::getInstance()->getUserID($client_id));
                PlayerManager::getInstance()->sendMsgByClientId($client_id,PT_USERCARDS,$data);
                break;
            default:
            {
                echo "error mainID:".$MainID;
                break;
            }
        }
    }

    public function sendMsgByClientId($client_id,$MainID,$data){
        PlayerManager::getInstance()->sendMsgByClientId($client_id,$MainID,$data);
    }


    //code 02345 创建成功/创建参数错误/俱乐部群主房卡不足/俱乐部不存在/房主房卡不足
    public function createRoom($uid,$gameName,$rule,$coast){
        $data = array();
            $pwd = $this->createRoomPwd();
            //扣除钻石
            if($rule['paymode'] == 1){
                $userInfo = PlayerManager::getInstance()->getUserBaseInfoByID($uid);
                if($userInfo['cards'] < $coast ){
                    $data['code'] = 5;
                    $data['desc'] = "banker card not enough! \n";
                }else{
                    PlatformDB::getInstance()->coastPlayerCards($uid,$pwd,$gameName,$rule,$coast);
                    PlatformDB::getInstance()->createRoom($uid,$gameName,$pwd,$rule,$coast);
                    $data['code'] = 0;
                    $data['desc'] = "createsuccess";
                    $data['gamename'] = $gameName;
                    $data['roompwd'] = $pwd;
                }
               //AA
            }else{
                PlatformDB::getInstance()->createRoom($uid,$gameName,$pwd,$rule,$coast);
                $data['code'] = 0;
                $data['desc'] = "createsuccess";
                $data['gamename'] = $gameName;
                $data['roompwd'] = $pwd;
            }
        PlayerManager::getInstance()->sendMsgByUid($uid,PT_CREATEROOM,$data);
    }


    //--------------------------------------------------------
    private static $m_roomRule = array(
            'basescore'     => 1,               //1/2/5/10/15/20/50/100
            'gameground'    => 10,
            'paymode'       => 1,               //1/2/3
            'peoplecount'   => 4,               //4/3   
            'paitime'       => 45,                //1/2/0
            'ipmark'        => 0,                //0/1
            'ma'            => 0,
            'invitecode'    => 'AAAAAA'
            );

    private static $m_roomMajongRule = array(
            'gameground'    => 8,
            'paymode'       => 1,
            'peoplecount'   => 3,
            // 'bottomScore'   => 1,
            'contract'      => 1,
            'oldUp'         => 3,
            'manyWealth'    => 0,
            'maxScore'      => 0,
            'noCountPengGang'=> 1
            );

    private static $m_roomSifuRule = array(
            'basescore'     => 1,               //1/2/5/10/15/20/50/100
            'gameground'    => 4,
            'paymode'       => 1,               //1/2/3
            'peoplecount'   => 4,               //4/3   
            'squarecards'   => 1,                //1/2/0
            'aloneReward'   => 0,                //0/1
            'shuffleCardsWay'=> 1,
            'sparrow'       => 1,
            'invitecode'    => 'AAAAAA'
            );
    private static $m_roomDdzRule = array(
            'maxscore'     => 0,               //地主封顶/0/32/64/128
            'gameground'    => 10,
            'paymode'       => 1,
            'peoplecount'   => 3,
            'invitecode'    => 'AAAAAA',
            'gameWay'       => 1,
            'shuffleCardsWay'=>1
            );
    private static $m_roomRfRule = array(
            'gameground'    => 10,
            'paymode'       => 1,
            'peoplecount'   => 3,
            'invitecode'    => 'AAAAAA',
            );
    public function checkCreateParamEnable($gameName,$rule){
       // return true;
       // echo $gameName;
        $paramTag = false;
        switch ($gameName) {
            case ShisanWater:
                {
                   if(
                    isset($rule['gameground'])&&
                    isset($rule['paymode'])&&
                    isset($rule['peoplecount'])&&
                    isset($rule['paitime'])&&
                    isset($rule['ipmark'])&&
                    isset($rule['ma'])&&
                    isset($rule['invitecode'])){
                         $paramTag = true;
                   }
                }
                break;
            case HangzhouMajong:
                {
                   if(isset($rule['gameground'])&&
                    isset($rule['paymode'])&&
                    isset($rule['peoplecount'])
                    // isset($rule['contract'])&&
                    // isset($rule['oldUp'])&&
                    // isset($rule['manyWealth'])&&
                    // isset($rule['maxScore'])&&
                    // isset($rule['noCountPengGang'])
                ){
                         $paramTag = true;
                   }
                }
                break;
            case SifuCards:
                {
                   if(
                    isset($rule['gameground'])&&
                    isset($rule['paymode'])&&
                    isset($rule['peoplecount'])&&
                    isset($rule['squarecards'])&&
                    isset($rule['aloneReward'])&&
                    isset($rule['shuffleCardsWay'])&&
                    isset($rule['invitecode'])&&
                    isset($rule['sparrow'])){
                         $paramTag = true;
                   }
                }
                break;
            case Doudz:
                {
                   if(
                        isset($rule['maxscore'])&&
                        isset($rule['gameground'])&&
                        // isset($rule['peoplecount'])&&
                        // isset($rule['paymode'])&&
                        isset($rule['invitecode'])
                        // isset($rule['gameWay'])&&
                        // isset($rule['shuffleCardsWay'])
                    ){
                         $paramTag = true;
                   }
                }
                break;
            case Runfast:
                {
                   if(
                        isset($rule['gameground'])&&
                        // isset($rule['peoplecount'])&&
                        // isset($rule['paymode'])&&
                        isset($rule['invitecode'])
                        // isset($rule['gameWay'])&&
                        // isset($rule['shuffleCardsWay'])
                    ){
                         $paramTag = true;
                   }
                }
                break;   
            default:
               
                break;
        }
        return $paramTag;
    }

      public function checkCreateParam($gameName,$rule){
        $realRule = array();
        switch ($gameName) {
            case ShisanWater:
                {
                    $realRule['gametype'] = ShisanWater;
                     $realRule['basescore']  = self::$m_roomRule['basescore'];
                     $realRule['gameground'] = ($rule['gameground']==10||$rule['gameground']==20||$rule['gameground']==30)?$rule['gameground']:self::$m_roomRule['gameground'];
                     $realRule['peoplecount'] = ($rule['peoplecount']==5||$rule['peoplecount']==4||$rule['peoplecount']==3||$rule['peoplecount']==2)?$rule['peoplecount']:self::$m_roomRule['peoplecount'];
                     $realRule['paitime']   = ($rule['paitime']==30||$rule['paitime']==45||$rule['paitime']==60||$rule['paitime']==90||$rule['paitime']==0)?$rule['paitime']:self::$m_roomRule['paitime'];
                     $realRule['ipmark']   = ($rule['ipmark']==1||$rule['ipmark']==0)?$rule['ipmark']:self::$m_roomRule['ipmark'];
                     $realRule['ma'] = ($rule['ma']==1||$rule['ma']==2||$rule['ma']==3)? $rule['ma']:self::$m_roomRule['ma'];
                     $realRule['paymode']    = ($rule['paymode']==1||$rule['paymode']==2)?$rule['paymode']:self::$m_roomRule['paymode'];
                     $realRule['invitecode'] = (strlen($rule['invitecode']) >= 4 && strlen($rule['invitecode']) <= 6 && PlatformDB::getInstance()->checkInvitecode($rule['invitecode']))?$rule['invitecode']:self::$m_roomRule['invitecode'];
                }
                break;

            case HangzhouMajong:
                {   
                    $realRule['gametype'] = HangzhouMajong;
                    $realRule['gameground'] = ($rule['gameground']==8||$rule['gameground']==16)?$rule['gameground']:self::$m_roomMajongRule['gameground'];
                    $realRule['paymode']    = ($rule['paymode']==1||$rule['paymode']==2)?$rule['paymode']:self::$m_roomMajongRule['paymode'];
                    $realRule['peoplecount'] = ($rule['peoplecount'] == 2 || $rule['peoplecount'] == 3 || $rule['peoplecount'] == 4)?$rule['peoplecount']:self::$m_roomMajongRule['peoplecount'];
                    
                    $realRule['oldUp']    = ($rule['oldUp']==1||$rule['oldUp']==2||$rule['oldUp']==3)?$rule['oldUp']:self::$m_roomHappyMajongRule['oldUp'];
                    $realRule['manyWealth']    = ($rule['manyWealth']==0||$rule['manyWealth']==1||$rule['manyWealth']==2)?$rule['manyWealth']:self::$m_roomHappyMajongRule['manyWealth'];
                    $realRule['maxScore']    = ($rule['maxScore']==0||$rule['maxScore']==128||$rule['maxScore']==256)?$rule['maxScore']:self::$m_roomHappyMajongRule['maxScore'];

                    $realRule['invitecode'] = (isset($rule['invitecode']) && strlen($rule['invitecode']) >= 4 && strlen($rule['invitecode']) <= 6 && PlatformDB::getInstance()->checkInvitecode($rule['invitecode']))?$rule['invitecode']:self::$m_roomRule['invitecode'];
                }
                break;

            case SifuCards:
                {
                    $realRule['gametype'] = SifuCards;
                     $realRule['basescore']  = self::$m_roomRule['basescore'];
                     $realRule['gameground'] = ($rule['gameground']==4||$rule['gameground']==8||$rule['gameground']==12)?$rule['gameground']:self::$m_roomSifuRule['gameground'];
                     $realRule['peoplecount'] = ($rule['peoplecount']==2||$rule['peoplecount']==3||$rule['peoplecount']==4)?$rule['peoplecount']:self::$m_roomSifuRule['peoplecount'];
                     $realRule['squarecards']   = ($rule['squarecards']==0||$rule['squarecards']==1)?$rule['squarecards']:self::$m_roomSifuRule['squarecards'];
                     $realRule['aloneReward']   = ($rule['aloneReward']==1||$rule['aloneReward']==0)?intval($rule['aloneReward']):self::$m_roomSifuRule['aloneReward'];
                     $realRule['shuffleCardsWay']   = ($rule['shuffleCardsWay']==1||$rule['shuffleCardsWay']==2)?$rule['shuffleCardsWay']:self::$m_roomSifuRule['shuffleCardsWay'];
                     $realRule['sparrow']   = ($rule['sparrow']==1||$rule['sparrow']==0)?$rule['sparrow']:self::$m_roomSifuRule['sparrow'];
                     $realRule['paymode']    = ($rule['paymode']==1||$rule['paymode']==2)?$rule['paymode']:self::$m_roomSifuRule['paymode'];
                     $realRule['invitecode'] = (strlen($rule['invitecode']) >= 4 && strlen($rule['invitecode']) <= 6 && PlatformDB::getInstance()->checkInvitecode($rule['invitecode']))?$rule['invitecode']:self::$m_roomRule['invitecode'];
                }
                break;
            case Doudz:
                {
                    $realRule['gametype'] = Doudz;
                    $realRule['maxscore']  = ($rule['maxscore']==0||$rule['maxscore']==16||$rule['maxscore']==64||$rule['maxscore']==256)?$rule['maxscore']:self::$m_roomDdzRule['maxscore'];
                    $realRule['gameground'] = ($rule['gameground']==10||$rule['gameground']==20||$rule['gameground']==30)?$rule['gameground']:self::$m_roomDdzRule['gameground'];
                    $realRule['peoplecount'] = 3;
                    $realRule['paymode']    = 2;
                    $realRule['gameWay']    = 2;
                    $realRule['shuffleCardsWay']    = self::$m_roomDdzRule['shuffleCardsWay'];
                    $realRule['invitecode'] = (isset($rule['invitecode']) && strlen($rule['invitecode']) >= 4 && strlen($rule['invitecode']) <= 6 && PlatformDB::getInstance()->checkInvitecode($rule['invitecode']))?$rule['invitecode']:self::$m_roomDdzRule['invitecode'];
                }
                break;
            case Runfast:
                {
                    $realRule['gametype'] = Runfast;
                    $realRule['gameground'] = ($rule['gameground']==10||$rule['gameground']==20||$rule['gameground']==30)?$rule['gameground']:self::$m_roomRfRule['gameground'];
                    $realRule['peoplecount'] = 3;
                    $realRule['paymode']    = 2;
                    $realRule['invitecode'] = (isset($rule['invitecode']) && strlen($rule['invitecode']) >= 4 && strlen($rule['invitecode']) <= 6 && PlatformDB::getInstance()->checkInvitecode($rule['invitecode']))?$rule['invitecode']:self::$m_roomRfRule['invitecode'];
                }
                break;
                
            default:
                
                break;
        }
        return $realRule;
    }



public function getCreateRoomCoast($gameName,$paymode,$gameground,$peoplecount){

        switch ($gameName) {
            case ShisanWater:
                {
                    if ($paymode == 1) {
                        if ($gameground == 10) {
                            return 80;
                        }else if($gameground == 20){
                            return 140;
                        }else if($gameground == 30){
                            return 200;
                        }else{
                            return 80;
                        }
                    }else if ($paymode == 2) {
                        if ($gameground == 10) {
                            return 80 * $peoplecount;
                        }else if($gameground == 20){
                            return 140 * $peoplecount;
                        }else if($gameground == 30){
                            return 200 * $peoplecount;
                        }else{
                            return 80 * $peoplecount;
                        }
                    }else{
                        if ($gameground == 10) {
                            return 80;
                        }else if($gameground == 20){
                            return 140;
                        }else if($gameground == 30){
                            return 200;
                        }else{
                            return 80;
                        }
                    }
                }
                break;
            case HangzhouMajong:
                {
                    if ($paymode == 1) {
                        if ($gameground == 8) {
                            return 100;
                        }else if($gameground == 16){
                            return 140;
                        }else{
                            return 100;
                        }
                    }else if ($paymode == 2) {
                        if ($gameground == 8) {
                            return 100 * $peoplecount;
                        }else if($gameground == 16){
                            return 140 * $peoplecount;
                        }else{
                            return 100 * $peoplecount;
                        }
                    }else{
                        if ($gameground == 8) {
                            return 100;
                        }else if($gameground == 16){
                            return 140;
                        }else{
                            return 100;
                        }
                    }
                }
                break;
            case SifuCards:
                {
                    if ($paymode == 1) {
                        if ($gameground == 4) {
                            return 100;
                        }else if($gameground == 8){
                            return 140;
                        }else if($gameground == 12){
                            return 200;
                        }else{
                            return 80;
                        }
                    }else if ($paymode == 2) {
                        if ($gameground == 4) {
                            return 100 * $peoplecount;
                        }else if($gameground == 8){
                            return 140 * $peoplecount;
                        }else if($gameground == 12){
                            return 200 * $peoplecount;
                        }else{
                            return 100 * $peoplecount;
                        }
                    }else{
                        if ($gameground == 4) {
                            return 100;
                        }else if($gameground == 8){
                            return 140;
                        }else if($gameground == 12){
                            return 200;
                        }else{
                            return 100;
                        }
                    }
                }
                break;
            case Doudz:
            case Runfast:
                {
                    if ($paymode == 1) {
                        if ($gameground == 10) {
                            return 110;
                        }else if($gameground == 20){
                            return 180;
                        }else if($gameground == 30){
                            return 250;
                        }else{
                            return 110;
                        }
                    }else if ($paymode == 2) {
                        if ($gameground == 10) {
                            return 110 * $peoplecount;
                        }else if($gameground == 20){
                            return 180 * $peoplecount;
                        }else if($gameground == 30){
                            return 250 * $peoplecount;
                        }else{
                            return 110 * $peoplecount;
                        }
                    }else{
                        if ($gameground == 10) {
                            return 110;
                        }else if($gameground == 20){
                            return 180;
                        }else if($gameground == 30){
                            return 250;
                        }else{
                            return 110;
                        }
                    }
                }
                break;
            default:
               
                break;
        }
        return -1;
    }


    //生成一个房间号
    public function createRoomPwd(){
        //随机生成房间号
        $pwd = PlatformDB::getInstance()->getNewRoomPwd();
        if($pwd == -1){
            echo "roomid is not enough!";
        }
        return $pwd;
    }

}
