<?php
/**
 * @property  斗地主 房间
 */

require_once __DIR__ . '/../game/GameManager.php';
require_once __DIR__ . '/../game/PlayerManager.php';
require_once __DIR__ . '/../game/GamePlayback.php';
require_once __DIR__ . '/BaseDefine.php';

use Workerman\Lib\Timer;
class BaseRoom 
{

	//房间状态
	const STATE_NONE = 0;
	const STATE_WAITTING = 1;
	const STATE_PLAYING = 2;
	const STATE_END = 3;
	const STATE_GAMEOVER = 4;

	const GAMESTATE_NONE = 0;
	const GAMESTATE_READY = 1;
	const GAMESTATE_DIZHU = 2;
	const GAMESTATE_DOUBLERANK = 3;
	const GAMESTATE_SENDCARDS = 4;
	const GAMESTATE_OUTCARDS = 5;
	const GAMESTATE_END = 6;
	const GAMESTATE_OVER = 7;
	
	public $m_roomOwner = null;
	public $m_roomPwd	= null;

	public $m_roomRule;

	public $m_roomStatus;
	public $m_gameStatus;

	public $m_memberCount;
	public $m_joinCoast;
	public $m_playGround;
	public $m_controlList;
	
	//房间玩家数据
	public $m_playerList = array();
	//房间座位数据
	public $m_deskData = array();
	//房间类型
	public $m_gameType = array();
	//房间结算记录
	public $m_scoreRecord = array();
	

	//----------------------------------
	//房间定时器
	public $m_roomClick = array();
	public $m_curRomClickName;
	public $m_clickValue_RoomLife = 0;
	public $m_clickValue_ready = 0;
	public $m_clickValue_dizhu = 0;
	public $m_clickValue_doublerank = 0;
	public $m_clickValue_sendcard = 0;
	public $m_clickValue_outcard = 0;
	public $m_clickValue_Dismiss = 0;

	//---------------------------
	//等待解散状态
	public $m_waittingDismiss;
	public $m_dismissData;
	//解散标志
	public $m_dismissMark;
	//坐下的经纬度
	public $m_deskLocation = array();
	// public $m_cardOne=array(
 //        0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,   //黑 A - K
 //        0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,   //红 A - K
 //        0x22,0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,   //梅 A - K
 //        0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E  //方 A - K
 //    );

	
	public function __construct($userid,$pwd,$rule)
	{
		$this->m_roomOwner = $userid;
		$this->m_roomPwd = $pwd;
		$this->m_roomStatus = self::STATE_NONE;
		$this->m_gameStatus = self::GAMESTATE_READY;
		$this->m_playGround = 0;
		$this->m_roomRule = $rule;
		$this->m_gameType = $rule['gametype'];

		$this->m_waittingDismiss = false;
		$this->m_dismissData = array();
		$this->m_dismissMark = false;

		//计算加入房间，玩家需要支付的钻石
		if ($this->m_roomRule['gameground'] == 4) {
			$this->m_joinCoast = 100;
		}else if ($this->m_roomRule['gameground'] == 8) {
			$this->m_joinCoast = 140;
		}else if ($this->m_roomRule['gameground'] == 12) {
			$this->m_joinCoast = 200;
		}
		if ($this->m_roomRule['paymode'] == PAYMODE_BANKER) {
			$this->m_joinCoast *= $this->m_roomRule['peoplecount'];
		}

		//房间生命周期
		$this->addTimeClick(CLICK_NAME_ROOM_LIFE,CLICK_VALUE_ROOM_LIFE,array($this,'gameOverCheck'),array());

		$this->addTimeClick(CLICK_NAME_MAX_LIFE,CLICK_VALUE_MAX_LIFE,array($this,'gameOver'),array(true));
		//全局定时器
		$this->addTimeClick(CLICK_NAME_UPDATE,1,array($this,'update'),array(),true);
	}

	//添加定时器
	public function addTimeClick($name,$value,$func,$array=array(),$param=array(),$loop = false){
		$this->destoryClick($name);
		$this->m_roomClick[$name] = Timer::add($value, $func, $array, $loop);
		$this->m_roomClickValue[$name] = $value;

		if ($name != CLICK_NAME_UPDATE) {
			$data['clickname'] = $name;
			$data['clickvalue'] =$value;
			$data['data'] = $param;
			$this->sendRoomMessage(GR_CLICKTIME,$data);
			//echo "[Time]-".$name."-".$value."\n";
		}
		
	}
	//销毁时钟
	public function destoryClick($clickName){
		if (isset($this->m_roomClick[$clickName])) {
			Timer::del($this->m_roomClick[$clickName]);
			unset($this->m_roomClick[$clickName]);
			if(isset($this->m_roomClickValue[$clickName])){
				unset($this->m_roomClickValue[$clickName]);
			}
		}
	}

	//全局定时器处理
	public function update(){
		foreach ($this->m_roomClickValue as $name => $value) {
			($this->m_roomClickValue[$name]>0)?($this->m_roomClickValue[$name]--):($this->m_roomClickValue[$name]=0);
		}
	}

	public function getMemberCount(){return sizeof($this->m_playerList);}
	public function getRoomOwner(){ return $this->m_roomOwner;}
	public function getJoinCost($uid){
		if($this->m_roomRule['paymode'] == PAYMODE_BANKER){
			if ($this->m_roomOwner == $uid) {
				return PAYMODE_AA_COAST*3*ceil($this->m_roomRule['gameground']/10);
			} else {
				return 0;
			}
		}else{
			return PAYMODE_AA_COAST * ceil($this->m_roomRule['gameground']/10);
		}
	}

	public function gameOverCheck(){
		if($this->m_roomStatus == self::STATE_NONE && $this->m_playGround == 0){
			foreach ($this->m_playerList as $id => $info) {
				if($info['ispay'] == 1){
					GameManager::getInstance()->recoastOnePlayerCards($this->m_roomPwd,$id);
				}
			}
			$this->gameOver(true);
		}
	}


	
	//====================================================================================================
	//----------------------------------------------玩家进出动作-------------------------------------------
	//玩家重连进来
	public function canRecomonIn($uid){
		return isset($this->m_playerList[$uid])?true:false;
	}
	 //更新玩家钻石
    public function updateRoomPlayerCards($uid,$cards){
        foreach ($this->m_playerList as $userid => $info) {
           	if($uid == $userid){
           		$this->m_playerList[$uid]['cards'] = $cards;
           	}
        }
    }
	//玩家进入
	public function comeIn($uid,$sendTag = true){
		$data = array();
		if (isset($this->m_playerList[$uid])) {
			$this->m_playerList[$uid]['online'] = 1;

			$data['comeintype'] = 1;
			$data['comeintype'] = "重连回房间";
			$this->checkStart();
		}else{
			$userInfo = PlayerManager::getInstance()->getUserInfoFromLists($uid);
			$userInfo['online'] = 1;
			$userInfo['score'] 		= 0;
			$userInfo['seatno'] 	= 0;
			$userInfo['ispay'] 		= 0; //是否付了房费
			$userInfo['isagreedismiss'] = 0; //是否同意解散
			$this->m_playerList[$uid] = $userInfo;

			$data['comeintype'] = 2;
			$data['comeintype'] = "第一次进入房间";
		}
		$data['userdata'] = $this->m_playerList[$uid];

		// GameManager::getInstance()->roomOnlineCount(GR_COMEIN,$this->m_gameType);

		//房主进来，默认是已经支付了的
		// if($uid == $this->m_roomOwner && $this->m_playerList[$uid]['ispay'] == 0){
		// 	$this->m_playerList[$uid]['ispay'] == 1;
		// }

		if ($sendTag) {
			$this->sendRoomMessage(GR_COMEIN,$data);
		}
		

	}
	//玩家出去
	public function commOut($uid){
		if(isset($this->m_playerList[$uid])&&$this->m_playerList[$uid]['online']==1){
			$this->m_playerList[$uid]['online'] = 0;
			$this->sendRoomMessage(GR_COMEOUT,$this->m_playerList[$uid]);
		}
		

	}

	//玩家站起
	public function sitUp($uid){

		if($this->m_roomStatus == self::STATE_NONE && $this->m_playGround == 0 && isset($this->m_playerList[$uid])){
			//echo "-->[".$uid."] sitUp \n";
			//删除座位数据
			if(isset($this->m_deskData[$this->m_playerList[$uid]['seatno']])){
				unset($this->m_deskData[$this->m_playerList[$uid]['seatno']]);
				unset($this->m_controlList[$this->m_playerList[$uid]['seatno']]);
				unset($this->m_deskLocation[$this->m_playerList[$uid]['seatno']]);
				array_values($this->m_deskLocation);
				//AA 退钱
				if($this->m_roomRule['paymode'] == 2){
					GameManager::getInstance()->recoastOnePlayerCards($this->m_roomPwd,$uid);
				}
				
				$data['code'] = 0;
				$data['desc'] = "situp success";
				$data['uid'] = $uid;
				$data['seatno'] = $this->m_playerList[$uid]['seatno'];
				$this->m_playerList[$uid]['ispay'] = 0;
				GameManager::getInstance()->deleteLastRoom($uid);
				$this->sendRoomMessage(GR_SITUP,$data);
				$this->m_playerList[$uid]['seatno'] = 0;

				return true;
			}
		}else{
			$data['code'] = 1;
			$data['desc'] = "situp fail";
			$this->sendMsgToUser($uid,GR_SITUP,$data);
			return;
		}
		return false;
	}
	//判断该位置是否可以坐下
	public function checkSeatNo($seatno){
		if ($seatno >0 && $seatno<=3) {
			foreach ($this->m_playerList as $uid => $info) {
				if ($info['seatno'] == $seatno) {
					return false;
				}
			}
		}
		return true;
	}

	public function getNullSeatNo(){
		for ($i=1; $i <= $this->m_roomRule['peoplecount']; $i++) { 
			if(!isset($this->m_deskData[$i])){
				return $i;
			}
		}
		return -1;
	}
		//code 0123 坐下成功/坐下失败/同一IP/AA（房卡不足）
	public function sitDown($uid,$seatno,$sendTag = true){

		$haveSeatno = $seatno;
		$seatnoList = array(1,2,3,4);
			if (in_array($seatno, $seatnoList) && isset($this->m_playerList[$uid]) && $this->m_playerList[$uid]['seatno']==0&&!isset($this->m_deskData[$haveSeatno])) {
				//echo "-->[".$uid."] sitDown \n";


				//条件符合，看看是否房卡充足
				if ($this->m_roomRule['paymode'] == 2) {
					if($this->m_playerList[$uid]['cards'] < $this->m_joinCoast){
						$data['code'] = 3;
						$data['desc'] = "sitdown fail : card not enough";
						$this->sendMsgToUser($uid,GR_SITDOWN,$data);
						return false;
					}else{
						GameManager::getInstance()->coastPlayerCards($uid,$this->m_roomPwd,$this->m_roomRule,$this->m_joinCoast,$this->m_gameType);
					}
				}
				$this->m_playerList[$uid]['ispay'] = 1;
				//更新标志
				$this->m_controlList[$haveSeatno] = $this->getControlList($uid);

				$this->m_playerList[$uid]['seatno'] = $haveSeatno;
				$data['code'] = 0;
				$data['desc'] = "sitdown success";
				$data['userinfo'] = $this->m_playerList[$uid];
				if($sendTag)$this->sendRoomMessage(GR_SITDOWN,$data);

				GameManager::getInstance()->insertLastRoom($uid,$this->m_roomPwd,GAMENAME);
				//更新座位数据
				$this->m_deskData[$haveSeatno]['uid'] = $uid;
				$this->m_deskData[$haveSeatno]['ingame'] = false;
				$this->m_deskData[$haveSeatno]['ready'] = true;
				// $this->m_deskData[$haveSeatno]['isbanker'] = false;
				// $this->m_deskData[$haveSeatno]['bankerrank'] = -1;
				// $this->m_deskData[$haveSeatno]['xiazhurank'] = -1;

				$this->m_deskData[$haveSeatno]['data'] = array();
				$this->m_deskData[$haveSeatno]['data']['outcardtag'] = 0;
				$this->m_deskData[$haveSeatno]['data']['outcards'] = array();

				$readyCount = 0;
				foreach ($this->m_deskData as $seatno => $info) {
					if($info['ready']){
						$readyCount++;
					}
				}

				if ($this->m_roomRule['peoplecount'] == $readyCount) {
					$this->gameBegin();
				}

				return true;
			}else{
				$data['code'] = 1;
				$data['desc'] = "sitdown fail";
				if($sendTag)$this->sendMsgToUser($uid,GR_SITDOWN,$data);
				return false;
			}

	}

	public function getControlList($uid){
		$ctTag = GameManager::getInstance()->getUserControlTag($uid);
		$list = array();
		if (is_array($ctTag)&&isset($ctTag['rank'])&&($ctTag['rank']>0&&$ctTag['rank']<=100)) {
			$rank = intval($ctTag['rank'] * $this->m_roomRule['gameground'] / 100);
			if($rank > $this->m_roomRule['gameground']){
				$rank = $this->m_roomRule['gameground'];
			}else if ($rank == 0){
				$rank = 1;
			}
		}else{
			$rank = 0;
		}

		for($i=1;$i<=$this->m_roomRule['gameground'];$i++){
			if($i<=$rank){
				$list[$i] = true;
			}else{
				$list[$i] = false;
			}
		}

		srand ((float)microtime()*1000000);
        shuffle($list);
        return $list;
	}

	//解散房间请求
	public function dismiss($uid){

		if (!$this->m_dismissMark&&!$this->m_waittingDismiss && isset($this->m_playerList[$uid]) && $this->m_playerList[$uid]['ispay']) {

			if ($this->m_playGround == 0 && $this->m_roomStatus != self::STATE_PLAYING) {
				//只有房主可以直接解散
				if($uid == $this->m_roomOwner){
					$this->dismissResult(1);
					//退房主的钱
					foreach ($this->m_playerList as $id => $info) {
						if($info['ispay'] == 1){
							GameManager::getInstance()->recoastOnePlayerCards($this->m_roomPwd,$id);
						}
					}
				}
			} else {
				$this->m_waittingDismiss = true;
				$this->m_playerList[$uid]['isagreedismiss'] = 1;
				if(isset($this->m_dismissData['curcount'])){
					$this->m_dismissData['curcount']++;
				}else{
					$this->m_dismissData['curcount']=1;
				}

				$this->m_dismissData['uid'] = $uid;
				$this->m_dismissData['name'] = $this->m_playerList[$uid]['nickname'];
				$this->m_dismissData['curcount'] = $this->m_dismissData['curcount'];
				$this->m_dismissData['count'] = $this->getIsPayedCount();
				$this->m_dismissData['ulist'][$uid]['uid'] = $uid;
				$this->m_dismissData['ulist'][$uid]['name'] = $this->m_playerList[$uid]['nickname'];

				foreach ($this->m_deskData as $seatno => $info) {
					$this->m_dismissData['playerlist'][$seatno]['uid'] = $info['uid'];
					$this->m_dismissData['playerlist'][$seatno]['nickname'] = $this->m_playerList[$info['uid']]['nickname'];
					$this->m_dismissData['playerlist'][$seatno]['headurl'] = $this->m_playerList[$info['uid']]['headurl'];
				}

				$this->m_dismissData['clickname'] = CLICK_NAME_DISMISS;
				$this->m_dismissData['clicvalue'] = CLICK_VALUE_DISMISS;

				$this->saveGameMessage(7,$this->m_dismissData);
				$this->sendRoomMessage(GR_DISMISS,$this->m_dismissData);

				//解散房间倒计时
				$this->addTimeClick(CLICK_NAME_DISMISS,CLICK_VALUE_DISMISS,array($this,'dismissResult'),array(1));
				

			}
			
			
		}
		
	}
	public function getIsPayedCount(){
		$count = 0;
		foreach ($this->m_playerList as $uid => $info) {
			if($info['ispay'] == 1){
				$count++;
			}
		}
		return $count;
	}
	//解散房间响应
	public function dismissReg($uid,$code){
		if (!$this->m_dismissMark&&$this->m_waittingDismiss && isset($this->m_playerList[$uid]) && $this->m_playerList[$uid]['ispay']) {
			if ($code == 1) {
				$this->m_dismissData['curcount']++;
				$this->m_playerList[$uid]['isagreedismiss'] = 1;

				$this->m_dismissData['curcount'] = $this->m_dismissData['curcount'];
				$this->m_dismissData['count'] = $this->getIsPayedCount();
				$this->m_dismissData['ulist'][$uid]['uid'] = $uid;
				$this->m_dismissData['ulist'][$uid]['name'] = $this->m_playerList[$uid]['nickname'];

				foreach ($this->m_deskData as $seatno => $info) {
					$this->m_dismissData['playerlist'][$seatno]['uid'] = $info['uid'];
					$this->m_dismissData['playerlist'][$seatno]['nickname'] = $this->m_playerList[$info['uid']]['nickname'];
					$this->m_dismissData['playerlist'][$seatno]['headurl'] = $this->m_playerList[$info['uid']]['headurl'];
				}


				$this->saveGameMessage(8,$this->m_dismissData);
				$this->sendRoomMessage(GR_DISMISS,$this->m_dismissData);



				if($this->m_dismissData['curcount'] == $this->getIsPayedCount()){
					$this->dismissResult(1);
				}

			} else {
				//拒绝，清理数据
				$this->m_waittingDismiss = false;
				$this->m_dismissMark = false;
				$this->m_dismissData = array();
				foreach ($this->m_playerList as $uid => $info) {
					$this->m_playerList[$uid]['isagreedismiss']  = 0;
				}
				$this->dismissResult(0);
			}
			
		}
	}

	//解散房间结果通知
	//code 0/1
	public function dismissResult($code){
		$this->destoryClick(CLICK_NAME_DISMISS);
		$data['code'] = $code;
		if($code == 1){
			$data['desc'] = "解散成功";
			$this->m_dismissMark = true;
			$this->gameOver(true);
		}else{
			$data['desc'] = "解散拒绝";
		}
		$this->saveGameMessage(9,$data);
		$this->sendRoomMessage(GR_DISMISS_RESULT,$data);
	}
	


	public function gameOver($type = false){
		if ($type == false) {
			if (!$this->m_dismissMark && $this->m_roomStatus == self::STATE_PLAYING)return;
		}
		//销毁定时器
		foreach ($this->m_roomClick as $name => $info) {
			$this->destoryClick($name);
		}

		foreach ($this->m_playerList as $uid => $info) {
			if($info['ispay']){
				GameManager::getInstance()->deleteLastRoom($uid);
				$data = array();
				$data['uid'] = $uid;
				$data['roompwd'] = $this->m_roomPwd;
				$data['gamename'] = GAMENAME;
				$data['score'] = $info['score'];
				$data['createtime'] = time();
				$data['data']['winCount'] = $this->m_winCount[$info['seatno']];
				$data['data']['loseCount'] = $this->m_loseCount[$info['seatno']];
				$data['data']['maxScoreCount'] = $this->m_maxScoreCount[$info['seatno']];
				$data['data']['KingBombCount'] = $this->m_KingBombCount[$info['seatno']];
				$data['data']['sevenBombCount'] = $this->m_sevenBombCount[$info['seatno']];

				$data['data'] = serialize($data['data']);
				GameManager::getInstance()->insertRoomAllRecord($data);
			}
		}


		$overData = array();
		foreach ($this->m_playerList as $uid => $info) {
			if($info['ispay'] > 0){
				$data = array();
				$data['uid'] = $uid;
				$data['nickname'] = $info['nickname'];
				$data['score'] = $info['score'];
				$data['photo'] = $info['headurl'];

				$data['winCount'] = $this->m_winCount[$info['seatno']];
				$data['loseCount'] = $this->m_loseCount[$info['seatno']];
				$data['maxScoreCount'] = $this->m_maxScoreCount[$info['seatno']];
				$data['KingBombCount'] = $this->m_KingBombCount[$info['seatno']];
				$data['sevenBombCount'] = $this->m_sevenBombCount[$info['seatno']];

				$overData['playerlist'][] = $data;
			}
		}
		$overData['roomInfo'] = $this->m_roomRule;
		$overData['roompwd'] = $this->m_roomPwd;
		$overData['roomowner'] = $this->m_roomOwner;
		$overData['endtime'] = time();
		//冒泡排名
		$count = sizeof($overData['playerlist']);
        for($k=1;$k<$count;$k++){
            for($i=0;$i<$count-$k;$i++){
                if($overData['playerlist'][$i]['score']<$overData['playerlist'][$i+1]['score']){//相邻比较
                    $tem=$overData['playerlist'][$i];
                    $overData['playerlist'][$i]=$overData['playerlist'][$i+1];
                    $overData['playerlist'][$i+1]=$tem;
                }
            }
        }
        $this->saveGameMessage(6,$overData);
		$this->sendRoomMessage(GR_GAMEOVER,$overData);
		GameManager::getInstance()->agentNcome($this->m_roomPwd);
		GameManager::getInstance()->gameover($this->m_roomPwd);
		GameManager::getInstance()->deleteRoom($this->m_roomPwd);

	}


	//玩家支付房卡
	public function coastPlayerCard(){

		foreach ($this->m_deskData as $seatno => $deskInfo) {
				if ($this->m_playerList[$deskInfo['uid']]['ispay'] == 0) {
					$this->m_playerList[$deskInfo['uid']]['ispay'] = 1;
					if ($this->m_roomRule['paymode'] == PAYMODE_AA) {
						GameManager::getInstance()->coastPlayerCards($deskInfo['uid'],$this->m_roomPwd,$this->m_roomRule,$this->m_joinCoast,$this->m_gameType);
					}
					
				}
			}
		
	}

	//开始下一局之前清理断线玩家
	public function clearOfflinePlayer(){
		foreach ($this->m_deskData as $seatno => $deskInfo) {
			if ($this->m_playerList[$deskInfo['uid']]['online'] == 0) {
				$this->sitUp($deskInfo['uid'],true);
				unset($this->m_deskData[$seatno]);
			}
		}
	}
	//----------------------------------------------回放相关逻辑-------------------------------------------

	public function saveRoomMessage()
    {
        GamePlayBack::getInstance()->saveRoomMessage(GAMENAME,$this->m_roomPwd,$this->m_playGround,$this->m_roomOwner,$this->m_roomRule);
        $this->saveUsersMessage();
    }
    
    public function saveUsersMessage()
    {
    	$userList = array();
    	foreach ($this->m_playerList as $uid => $info) {
    		if($info['seatno'] != 0){
    			$userList[$uid]['seatno'] = $this->m_playerList[$uid]['seatno'];
    			$userList[$uid]['headurl'] = $this->m_playerList[$uid]['headurl'];
    			$userList[$uid]['score'] = $this->m_playerList[$uid]['score'];
    			$userList[$uid]['nickname'] = $this->m_playerList[$uid]['nickname'];
    		}
    	}
    	GamePlayBack::getInstance()->saveUsersMessage($this->m_roomPwd,$this->m_playGround,$userList);
    }

    public function saveGameMessage($datatype,$data)
    {
    	/*
    	  datatype 
    	  1 游戏基本数据;2 发牌数据;3 摸牌数据;4 出牌数据;5 动作判定;6 动作结果;7 胡牌数据;8 单局结算数据;9 总结算数据;
    	*/
    	GamePlayBack::getInstance()->saveGameMessage($this->m_roomPwd,$this->m_playGround,$datatype,$data);
    }

	//----------------------------------------------发送房间数据-------------------------------------------
    //定位功能
	public function obtainLocation($uid,$latitude,$longitude)
	{
		foreach ($this->m_playerList as $id => $info) {
			if ($uid == $id) {
				$nowSeatno = $this->m_playerList[$id]['seatno'];
				break;
			}
		}
		if (isset($nowSeatno) && $nowSeatno != 0) {
			$updateData = false;
			foreach ($this->m_deskLocation as $key => $value) {
				if ($value['seatno'] == $nowSeatno) {
					$this->m_deskLocation[$key]['seatno'] = $nowSeatno;
					$this->m_deskLocation[$key]['data']['latitude'] = $latitude;
					$this->m_deskLocation[$key]['data']['longitude'] = $longitude;
					$updateData = true;
					break;
				}
			}
			if (!$updateData) {
				$cnt = count($this->m_deskLocation);
				$this->m_deskLocation[$cnt]['seatno'] = $nowSeatno;
				$this->m_deskLocation[$cnt]['data']['latitude'] = $latitude;
				$this->m_deskLocation[$cnt]['data']['longitude'] = $longitude;
			}
			$res['code'] = 0;
			$res['desc'] = '定位获取成功';
		}else{
			$res['code'] = 1;
			$res['desc'] = '定位获取失败';
		}
		return $res;
		
	}
	public function getLocation($uid)
	{
		$data = array();
		foreach ($this->m_deskLocation as $key => $value) {
			$data[$this->m_deskLocation[$key]['seatno']-1] = $this->m_deskLocation[$key];
		}
		$data = array_values($data);
		$this->sendMsgToUser($uid,GR_GETLOCATION,$data);
	}
	//发送房间消息
	public function sendDeskMessage($MainID,$data){
		foreach ($this->m_playerList as $uid => $info) {
			$dataClone = $data;
			// if ($info['seatno'] > 0 && isset($dataClone[$info['seatno']])&&$dataClone[$info['seatno']]['ingame']) {
			// 	foreach ($dataClone as $seatno => $deskInfo) {
			// 		if($deskInfo['uid'] == $uid)continue;
			// 		$dataClone[$info['seatno']]['data'] = array();
			// 	}
			// }else{
			// 	foreach ($dataClone as $seatno => $deskInfo) {
			// 		$dataClone[$info['seatno']]['data'] = array();
			// 	}
			// }

			$this->sendMsgToUser($uid,$MainID,$dataClone);
		}
	}

	//语音
	public function chatMessage($uid,$data){
		if(isset($data['type'])){
			if(($data['type'] == 1  &&isset($data['chatid']) && ($data['chatid']>=1&&$data['chatid']<=11)) ||
				$data['type'] == 2 &&isset($data['chatid']) && ($data['chatid']>=1&&$data['chatid']<=15) ||
			$data['type'] == 3 ){
				foreach ($this->m_deskData as $seatno => $deskInfo) {
					if ($deskInfo['uid'] == $uid) {
						$msg['type'] = $data['type'];
						$msg['chatid'] = $data['chatid'];
						$msg['seatno'] = $seatno;
						$this->sendRoomMessage(GR_CHAT,$msg);
						break;
					}
				}
			}

		}
	}
	//语音
	public function chatAniMessage($uid,$data){
		if(isset($data['objuid']) &&  isset($data['chatid']) ){
			$msg['uid'] = $uid;
			$msg['objuid'] = $data['objuid'];
			$msg['chatid'] = $data['chatid'];
			foreach ($this->m_deskData as $seatno => $deskInfo) {
				if ($deskInfo['uid'] == $uid) {
					$msg['seatno'] = $seatno;
				}
				if ($deskInfo['uid'] == $msg['objuid']) {
					$msg['objseatno'] = $seatno;
				}
			}
			$res = GameManager::getInstance()->chatCoast($uid,$this->m_roomPwd,1,$this->m_gameType);
			if ($res == 0) {
				$msg['code'] = 0;
				$this->sendRoomMessage(GR_CHAT_ANI,$msg);
			}else if ($res == 1) {
				$senddata['code'] = 1;
				$senddata['desc'] = '钻石不足';
				$this->sendRoomMessage(GR_CHAT_ANI,$senddata);
			}
			// $this->sendRoomMessage(GR_CHAT_ANI,$msg);
		}
	}
	//发送房间消息
	public function sendRoomMessage($MainID,$data){
		foreach ($this->m_playerList as $uid => $info) {
			$this->sendMsgToUser($uid,$MainID,$data);
		}
	}
	//发送房间玩家数据消息
	public function sendMsgToUser($uid,$MainID,$data){
		if($this->m_playerList[$uid]['online'] == 1){
			PlayerManager::getInstance()->sendMsgByUid($uid,$MainID,$data);
		}
		
	}

}
