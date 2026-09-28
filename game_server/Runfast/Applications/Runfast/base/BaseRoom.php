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
	public $m_startPeople = 0;
	public $m_comeinPeople = array();
	//房间玩家数据
	public $m_playerList = array();
	//房间座位数据
	public $m_deskData = array();
	//房间结算记录
	public $m_scoreRecord = array();
	//单局比牌数据数据
	public $m_compareDataResult = array();

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
	public $m_gameType;
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

		if ($this->m_roomRule['gameground'] == 10) {
			$this->m_joinCoast = 110;
		}else if ($this->m_roomRule['gameground'] == 20) {
			$this->m_joinCoast = 180;
		}else if ($this->m_roomRule['gameground'] == 30) {
			$this->m_joinCoast = 250;
		}

		if ($this->m_roomRule['paymode'] == PAYMODE_BANKER) {
			$this->m_joinCoast *= $this->m_roomRule['peoplecount'];
		}

		//全局定时器
		$this->addTimeClick(CLICK_NAME_UPDATE,1,array($this,'update'),array(),true);
		//房间生命周期
		$this->addTimeClick(CLICK_NAME_ROOM_LIFE,CLICK_VALUE_ROOM_LIFE*$this->m_roomRule['gameground'],array($this,'gameOverCheck'),array());
	}

	//添加定时器
	public function addTimeClick($name,$value,$func,$array=array(),$loop = false){
		if (isset($this->m_roomClick[$name])) {
			Timer::del($this->m_roomClick[$name]);
			unset($this->m_roomClick[$name]);
		}
		$this->m_curRomClickName = $name;
		switch ($name) {
			case CLICK_NAME_ROOM_LIFE:$this->m_clickValue_RoomLife = CLICK_VALUE_ROOM_LIFE; break;
			case CLICK_NAME_READY:$this->m_clickValue_ready = CLICK_VALUE_READY; break;
			case CLICK_NAME_DIZHU:$this->m_clickValue_dizhu = CLICK_VALUE_DIZHU; break;
			case CLICK_NAME_DOUBLE_RANK:$this->m_clickValue_doublerank = CLICK_VALUE_DOUBLE_RANK; break;
			case CLICK_NAME_SEND_CARD:$this->m_clickValue_sendcard = CLICK_VALUE_SEND_CARD; break;
			case CLICK_NAME_OUT_CARD:$this->m_clickValue_outcard = CLICK_VALUE_OUT_CARD; break;
			case CLICK_NAME_DISMISS:$this->m_clickValue_Dismiss = CLICK_VALUE_DISMISS; break;
		}
		$this->m_roomClick[$name] = Timer::add($value, $func, $array, $loop);

		if ($name != CLICK_NAME_UPDATE) {
			$data['clickname'] = $name;
			$data['clickvalue'] =$value;
			$this->sendRoomMessage(GR_CLICKTIME,$data);

			//echo "[Time]-".$name."-".$value."\n";
		}
		
	}
	//销毁时钟
	public function destoryClick($clickName){
		if (isset($this->m_roomClick[$clickName])) {
			switch ($clickName) {
				case CLICK_NAME_ROOM_LIFE:$this->m_clickValue_RoomLife = 0; break;
				case CLICK_NAME_READY:$this->m_clickValue_ready = 0; break;
				case CLICK_NAME_DIZHU:$this->m_clickValue_dizhu = 0; break;
				case CLICK_NAME_DOUBLE_RANK:$this->m_clickValue_doublerank = 0; break;
				case CLICK_NAME_SEND_CARD:$this->m_clickValue_sendcard = 0; break;

				case CLICK_NAME_OUT_CARD:$this->m_clickValue_outcard = 0; break;
				case CLICK_NAME_DISMISS:$this->m_clickValue_Dismiss = 0; break;
			}
			Timer::del($this->m_roomClick[$clickName]);
			unset($this->m_roomClick[$clickName]);
		}
		
	}

	//全局定时器处理
	public function update(){
		($this->m_clickValue_RoomLife>0)?$this->m_clickValue_RoomLife--:$this->m_clickValue_RoomLife=0;
		($this->m_clickValue_ready>0)?$this->m_clickValue_ready--:$this->m_clickValue_ready=0;
		($this->m_clickValue_dizhu>0)?$this->m_clickValue_dizhu--:$this->m_clickValue_dizhu=0;
		($this->m_clickValue_doublerank>0)?$this->m_clickValue_doublerank--:$this->m_clickValue_doublerank=0;
		($this->m_clickValue_sendcard>0)?$this->m_clickValue_sendcard--:$this->m_clickValue_sendcard=0;
		($this->m_clickValue_outcard>0)?$this->m_clickValue_outcard--:$this->m_clickValue_outcard=0;
		($this->m_clickValue_Dismiss>0)?$this->m_clickValue_Dismiss--:$this->m_clickValue_Dismiss=0;
		//echo $this->m_clickValue_RoomLife;
		//GameLogic::getInstance()->createCards(7);

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

		if ($sendTag) {
			$this->sendRoomMessage(GR_COMEIN,$data);
		}
		

		//var_dump($this->m_playerList);

	}
	//玩家出去
	public function commOut($uid){
		if(isset($this->m_playerList[$uid])&&$this->m_playerList[$uid]['online']==1){
			$this->m_playerList[$uid]['online'] = 0;
			$this->sendRoomMessage(GR_COMEOUT,$this->m_playerList[$uid]);
			//var_dump($this->m_playerList);
		}
		

	}

	//玩家站起
	public function sitUp($uid,$isSys = false){

		if($this->m_roomStatus == self::STATE_NONE && $this->m_playGround == 0 && isset($this->m_playerList[$uid])){
			//echo "-->[".$uid."] sitUp \n";
			//删除座位数据
			if(isset($this->m_deskData[$this->m_playerList[$uid]['seatno']])){
				if ($this->m_startPeople == $this->m_playerList[$uid]['seatno']) {
					foreach ($this->m_comeinPeople as $key => $info) {
						if ($info == $this->m_startPeople) {
							unset($this->m_comeinPeople[$key]);
							break;
						}
					}
					$this->m_comeinPeople = array_values($this->m_comeinPeople);
					$this->m_startPeople = (isset($this->m_comeinPeople['0']))?$this->m_comeinPeople['0']:0;;
				}
				$this->m_playerReadyStatus[$this->m_playerList[$uid]['seatno'] - 1] = 0;
				unset($this->m_deskData[$this->m_playerList[$uid]['seatno']]);
				unset($this->m_deskLocation[$this->m_playerList[$uid]['seatno']]);
				array_values($this->m_deskLocation);
				//AA 退钱
				if($this->m_roomRule['paymode'] == 2){
					GameManager::getInstance()->recoastOnePlayerCards($this->m_roomPwd,$uid);
				}
				$this->m_playerList[$uid]['ispay'] = 0;
				$data['code'] = 0;
				$data['desc'] = "situp success";
				$data['uid'] = $uid;
				$data['seatno'] = $this->m_playerList[$uid]['seatno'];
				$data['startpeople'] = $this->m_startPeople;
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

		//var_dump($this->m_playerList);
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

		//玩家坐下
	public function sitDown($uid,$seatno,$sendTag = true){
		if ($this->checkSeatNo($seatno) && isset($this->m_playerList[$uid]) && $this->m_playerList[$uid]['seatno']==0&&!isset($this->m_deskData[$seatno])) {
			//echo "-->[".$uid."] sitDown \n";
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
			$this->m_playerList[$uid]['seatno'] = $seatno;
			$this->m_playerReadyStatus[$seatno -1] = 1;
			$data['code'] = 0;
			$data['desc'] = "坐下成功";
			$data['userinfo'] = $this->m_playerList[$uid];
			$this->m_comeinPeople[] = $seatno;
			if (count($this->m_comeinPeople) == 1) {
				$data['startpeople'] = $seatno;
				$this->m_startPeople = $seatno;
			}else{
				$data['startpeople'] = $this->m_startPeople;
			}
			if($sendTag)$this->sendRoomMessage(GR_SITDOWN,$data);
			GameManager::getInstance()->insertLastRoom($uid,$this->m_roomPwd,GAMENAME);

			//更新座位数据
			$this->m_deskData[$seatno]['uid'] = $uid;
			$this->m_deskData[$seatno]['ingame'] = false;
			$this->m_deskData[$seatno]['isbanker'] = false;
		}else{
			$data['code'] = 1;
			$data['desc'] = "坐下失败";
			if($sendTag)$this->sendMsgToUser($uid,GR_SITDOWN,$data);
			return;
		}

		//触发游戏
		//$this->checkStart();
	}

	public function roomOwnerStart($uid){

		if($this->m_gameStatus == self::GAMESTATE_READY && $this->m_playGround == 0){
			if(sizeof($this->m_deskData) == 3){
				$this->gameBegin();
			}else{
				echo "you are not owner or low people \n";
			}
		}else{
			echo "not in ready time or not first ju \n";
			return ;
		}


	}

	//解散房间请求
	public function dismiss($uid){
		if (!$this->m_dismissMark&& isset($this->m_playerList[$uid]) && $this->m_playerList[$uid]['ispay']) {

			if ($this->m_playGround == 0 && $this->m_roomStatus != self::STATE_PLAYING) {
				//只有房主可以直接解散
				if($uid == $this->m_roomOwner){
					$this->dismissResult(1);
					//退玩家的钱
					foreach ($this->m_playerList as $id => $info) {
						if($info['ispay'] == 1){
							GameManager::getInstance()->recoastOnePlayerCards($this->m_roomPwd,$id);
						}
					}
				}
				
			} else {
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
		foreach ($this->m_deskData as $seatno => $deakInfo) {
			foreach ($this->m_playerList as $uid => $info) {
				if($deakInfo['uid'] == $uid && $info['ispay'] == 1){
					$count++;
				}
			}
		}
		
		return $count;
	}
	//解散房间响应
	public function dismissReg($uid,$code){
		if (!$this->m_dismissMark && isset($this->m_playerList[$uid]) && $this->m_playerList[$uid]['ispay']) {
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
				//$this->m_waittingDismiss = false;
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

		//var_dump($this->m_playerList);

		foreach ($this->m_playerList as $uid => $info) {
			if($info['ispay']){
				$data = array();
				$data['uid'] = $uid;
				$data['roompwd'] = $this->m_roomPwd;
				$data['gamename'] = GAMENAME;
				$data['score'] = $info['score'];
				$data['createtime'] = time();
				$data['roomInfo'] = $this->m_roomRule;
				$data['endtime'] = time();
				GameManager::getInstance()->deleteLastRoom($uid);
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
				$overData[] = $data;
			}
		}

		// //var_dump($overData);

		//冒泡排名
		$count = sizeof($overData);
        for($k=1;$k<$count;$k++){
            for($i=0;$i<$count-$k;$i++){
                if($overData[$i]['score']<$overData[$i+1]['score']){//相邻比较
                    $tem=$overData[$i];
                    $overData[$i]=$overData[$i+1];
                    $overData[$i+1]=$tem;
                }
            }
        }

        $res['playerlist'] = $overData;
		$res['roomInfo'] = $this->m_roomRule;
		$res['roompwd'] = $this->m_roomPwd;
		$res['endtime'] = time();

		$this->saveGameMessage(6,$res);
		$this->sendRoomMessage(GR_GAMEOVER,$res);
		GameManager::getInstance()->agentNcome($this->m_roomPwd);
		GameManager::getInstance()->gameover($this->m_roomPwd);
		GameManager::getInstance()->deleteRoom($this->m_roomPwd);

	}

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
		$data = array_values($this->m_deskLocation);
		$this->sendMsgToUser($uid,GR_GETLOCATION,$data);
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
    		if($info['seatno'] != 0 && $this->m_deskData[$info['seatno']]['ingame']){
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
    	GamePlayBack::getInstance()->saveGameMessage($this->m_roomPwd,$this->m_playGround,$datatype,$data);
    }

	//----------------------------------------------发送房间数据-------------------------------------------
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
