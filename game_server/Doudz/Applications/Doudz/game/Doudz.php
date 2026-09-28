<?php
/**
 * @property  斗地主 房间
 */

require_once __DIR__ . '/GameManager.php';
require_once __DIR__ . '/PlayerManager.php';
require_once __DIR__ . '/DoudzGameLogic.php';
require_once __DIR__ . '/../base/BaseRoom.php';

use Workerman\Lib\Timer;
class GameRoom extends BaseRoom
{

	//房间状态



	//当前房间的庄家
	public $m_curbankerNo = -1;
	//准备状态
	public $m_playerReadyStatus = array();
	//叫地主状态
	public $m_playerDizhuStatus = array();
	//明牌状态
	public $m_playerShowCardsStatus = array();
	//加倍状态
	public $m_playerDoubleRankStatus = array();
	//当前叫地主的座位号
	public $m_callDizhuSeatNo = 1;
	//当前抢地主的座位号
	public $m_qiangDizhuSeatNo = 1;
	//是否为叫地主消息
	public $m_isCallDizhuSeatNo = true;
	//抢和不抢的总次数
	public $m_dizhuTotalCount = 0;
	//抢地主的次数
	public $m_qiangDiZhuCount = 0;
	//不叫地主的次数，5轮不叫地主，随机取一个地主
	public $m_callLunCount = 0;

	public $m_jiaoFenList = array();

	public $m_outCardsList = array();
	//当前局的牌数据
	public $m_curJuCardsData = array();
	//当前局的总倍率
	public $m_totalRank = array(
		'base'			=> 1,
		'showcard'		=> 1,
		'qiangdizhu'	=> 1,
		'dicards'		=> 1,
		'bomb'			=> 1,
		'dizhu'			=> 1,
		'nongmin'		=> 1,
		'spring'		=> 1
		);

	//当前出牌的玩家；
	public $m_curOutCardSeatno = -1;
	//当前出牌的类型 主动/被动
	public $m_curOutCardType = true;
	//当前出牌玩家的数据状态
	public $m_curOutCardMsgData = array();
	//上一轮出牌的数据
	public $m_preOutCardSeatno = -1;
	public $m_preOutCardData = array();
	//地主的出牌次数，只出过一次的话，就是反春
	public $m_dizhuOutCardCount = 0;

	public $m_cardholder;

	
	public function __construct($userid,$pwd, $rule)
	{
		
		parent::__construct($userid,$pwd, $rule);
		//状态初始化
		$this->m_playerReadyStatus = array(0,0,0);
		$this->m_playerDizhuStatus = array(0,0,0); //0/1/2/3 初值/不叫/不抢/叫地主/抢地主
		$this->m_playerShowCardsStatus = array(0,0,0);//0/1/2 初值/不明牌/明牌
		$this->m_playerDoubleRankStatus = array(0,0,0); //0/1/2 初值/不加倍/加倍

		//$this->m_bankerList = array();
	}


	//====================================================================================================
	//----------------获取房间数据------------------------------------------------------------
	public function getRoomData(){

		$roomData['roomstatus'] = $this->m_roomStatus;
		$roomData['gamestatus'] = $this->m_gameStatus;
		$roomData['click']['name'] = $this->m_curRomClickName;
		switch ($this->m_curRomClickName) {
			case CLICK_NAME_ROOM_LIFE:$roomData['click']['value'] = $this->m_clickValue_RoomLife; break;
			case CLICK_NAME_READY:$roomData['click']['value'] = $this->m_clickValue_ready; break;
			case CLICK_NAME_DIZHU:$roomData['click']['value'] = $this->m_clickValue_dizhu; break;
			case CLICK_NAME_DOUBLE_RANK:$roomData['click']['value'] = $this->m_clickValue_doublerank; break;
			case CLICK_NAME_SEND_CARD:$roomData['click']['value'] = $this->m_clickValue_sendcard; break;
			case CLICK_NAME_OUT_CARD:$roomData['click']['value'] = $this->m_clickValue_outcard; break;
			case CLICK_NAME_DISMISS:$roomData['click']['value'] = $this->m_clickValue_Dismiss; break;
			default:$roomData['click']['value'] = 0;break;
		}

		$roomData['roomowner'] = $this->m_roomOwner;
		$roomData['roomownernick'] = isset($this->m_playerList[$this->m_roomOwner])?$this->m_playerList[$this->m_roomOwner]['nickname']:"";
		$roomData['roompwd'] = $this->m_roomPwd;
		$roomData['playGround'] = $this->m_playGround;
		$roomData['rule'] = $this->m_roomRule;
		$roomData['playerlist'] = $this->m_playerList;
		$roomData['deskdata'] = $this->m_deskData;
		$roomData['comparedata']  = $this->m_compareDataResult;
		//解散数据
		$roomData['waittingdismiss'] = $this->m_waittingDismiss;
		$roomData['dismissData'] = $this->m_dismissData;
		$roomData['dismissMark'] = $this->m_dismissMark;

		$roomData['playerreadystatus'] = $this->m_playerReadyStatus;
		$roomData['playerdizhustatus'] = $this->m_playerDizhuStatus; //0/1/2/3 初值/不叫/叫地主/抢地主
		$roomData['playershowcardsstatus'] = $this->m_playerShowCardsStatus;
		$roomData['playerdoublerankstatus'] = $this->m_playerDoubleRankStatus; //0/1/2 初值/不加倍/加倍

		$roomData['curcardsdata'] = $this->m_curJuCardsData;
		$roomData['curqiangdizhuseatno'] = $this->m_qiangDizhuSeatNo;
		//当前局的总倍率
		$roomData['totalrank'] = $this->m_totalRank;
		//当前出牌的玩家；
		$roomData['curoutcardseatno'] = $this->m_curOutCardSeatno;
		//当前出牌的类型 主动/被动
		$roomData['curoutcardtype'] = $this->m_curOutCardType;
		//当前出牌玩家的数据状态
		$roomData['curoutcardmsgdata'] = $this->m_curOutCardMsgData;
		//上一轮出牌的数据
		$roomData['preoutcardseatno'] = $this->m_preOutCardSeatno;
		$roomData['preoutcarddata'] = $this->m_preOutCardData;
		$roomData['startpeople'] = $this->m_startPeople;
		$roomData['jiaoFenList'] = (isset($this->m_jiaoFenList['notChoose']))?$this->m_jiaoFenList['notChoose']:array();
		return $roomData;
	}


	//====================================================================================================
	//----------------------------------------房间逻辑-----------------------------------------------------
	//code 1/2 准备/明牌准备
	public function gameReady($uid,$code){
			if($this->m_gameStatus == self::GAMESTATE_READY){
				if ($code == 2) {
					return;
				}
				foreach ($this->m_deskData as $seatno => $info) {
					if($info['uid'] == $uid){
						if($this->m_playerReadyStatus[$seatno -1] == 0){
							$this->m_playerReadyStatus[$seatno -1] = 1;
							//$this->m_playerShowCardsStatus[$seatno-1] = ($code==2)?1:0;
							if(($code==2)){
								$this->m_playerShowCardsStatus[$seatno-1] = 2;
								$this->m_totalRank['showcard'] *= 2;
							}else{
								$this->m_playerShowCardsStatus[$seatno-1] = 1;
							}

							$data['seatno'] = $seatno;
							$data['showcard'] = ($code==2)?true:false;	//明牌标志
							$data['totalrank'] = $this->m_totalRank;
							$this->sendRoomMessage(GR_GAMEREADYREG,$data);

						}else{
							echo 'you have ready \n';
							return;
						}
						$this->checkStart();
						break;
					}
				}
			}else{
				echo 'not in ready time \n';
				return ;
			}

	}

	public function checkStart(){
		if($this->m_roomStatus != self::STATE_NONE){
			return;
		}

		//检查是否有解散请求
		if ($this->m_dismissMark) {
			$this->gameOver();
			return ;
		}

		//总结算
		if ($this->m_playGround >= $this->m_roomRule['gameground']) {
			$this->gameOver();
			return;
		}

		if (sizeof($this->m_deskData) == 3) {
			$startTag = true;
			for ($i=0; $i < 3; $i++) { 
				if($this->m_playerReadyStatus[$i] == 0){
					$startTag = false;
					break;
				}
			}
			if($startTag){
				$this->gameBegin();
			}
		}

	}
	public function gameBegin(){

		$this->m_roomStatus = self::STATE_PLAYING;
		//$this->m_gameStatus = self::GAMESTATE_DIZHU;
		$this->m_playGround++;
		GameManager::getInstance()->updateRoomPlayGround($this->m_roomPwd,$this->m_playGround);

		//开始游戏等待时，玩家支付房卡
		//游戏开始，定时2秒，用于播放开始动画
		//$this->sendDeskMessage(GR_GAMESTART,array());

		//===================初始化数据==========================
		$this->m_compareDataResult = array();
		$this->m_curbankerNo = -1;
		for ($i=0; $i < 3; $i++) { 
			//$this->m_playerReadyStatus[$i] = 0;
			$this->m_playerDizhuStatus[$i] = 0;
			//$this->m_playerShowCardsStatus[$i] = 0;
			$this->m_playerDoubleRankStatus[$i] = 0;
		}
		$this->m_jiaoFenList['seatno'] = -1;
		$this->m_jiaoFenList['callScore'] = -1;
		$this->m_jiaoFenList['notChoose'] = array();	
		

		$this->m_curbankerNo = -1;
		$this->m_curOutCardSeatno = -1;
		//当前出牌的类型 主动/被动
		$this->m_curOutCardType = true;
		//上一轮出牌的数据
		$this->m_preOutCardSeatno = -1;
		$this->m_preOutCardData = array();
		//当前叫地主的座位号
		//$this->m_callDizhuSeatNo = 0;
		//当前抢地主的座位号
		//$this->m_qiangDizhuSeatNo = 0;
		//总次数
		$this->m_dizhuTotalCount = 0;
		//抢地主的次数
		$this->m_qiangDiZhuCount = 0;
		//不叫地主的次数，5轮不叫地主，随机取一个地主
		$this->m_callLunCount = 0;
		//初始化地主的出牌数据
		$this->m_dizhuOutCardCount = 0;


		//------清除作为数据------------
		foreach ($this->m_deskData as $seatno => $info) {
			$this->m_deskData[$seatno]['cards'] = array();
			$this->m_deskData[$seatno]['isbanker'] = false;
		}

		//=======================================================

		if ($this->m_playGround == 1) {
			$this->upsetSeatno();
		}else{
			//发牌
			$this->gameSendCard();
		}
	}

	public function upsetSeatno()
	{
		$seatnoClone = $this->m_deskData;
		$i = 0;
		shuffle($seatnoClone);
		foreach ($this->m_deskData as $seatno => $info) {
			$this->m_deskData[$seatno] = $seatnoClone[$i];
			$this->m_playerList[$this->m_deskData[$seatno]['uid']]['seatno'] = $seatno;
			$i++;
		}
		$this->sendRoomMessage(GR_GAMEUPSETSEATNO,$this->m_playerList);
		$this->addTimeClick(CLICK_NAME_UPSET_SEATNO,CLICK_VALUE_UPSET_SEATNO,array($this,'gameSendCard'),array());
	}

	public function useCardholder()
	{
		foreach ($this->m_playerList as $uid => $info) {
			if ($this->m_playerList[$uid]['cardholder'] > 0) {
				$this->m_playerList[$uid]['cardholder']--;
				PlayerManager::getInstance()->useCardholder($uid);
				$this->m_cardholder[$this->m_playerList[$uid]['seatno']] = true;
			}else{
				$this->m_cardholder[$this->m_playerList[$uid]['seatno']] = false;
			}
		}
	}
	public function initDizhuData(){
		for ($i=0; $i < 3; $i++) { 
			$this->m_playerDizhuStatus[$i] = 0;
		}
		$this->m_curbankerNo = -1;
		//总次数
		$this->m_dizhuTotalCount = 0;
		//抢地主的次数
		$this->m_qiangDiZhuCount = 0;

		$this->m_jiaoFenList['seatno'] = -1;
		$this->m_jiaoFenList['callScore'] = -1;
		$this->m_jiaoFenList['notChoose'] = array();	
	}

	public function gameSendCard()
	{
		if ($this->m_roomRule['shuffleCardsWay'] == 2 && count($this->m_outCardsList) == 54) {
			$this->gameNoShuffleSendCard();
		}else{
			$this->gameShuffleSendCard();
		}
	}
	public function cardsholderReg($uid)
	 {
	 	foreach ($this->m_deskData as $seatno => $value) {
	 		if ($this->m_deskData[$seatno]['uid'] == $uid) {
	 			if ($this->m_cardholder[$seatno]) {
	 				$data['code'] = 1;
	 				$data['cardsholder'] = $this->cardsholder($seatno);
	 			}else{
	 				$data['code'] = 3;
           			$data['desc'] = "无记牌器权限";
	 			}
	 		}
	 	}
	 	$this->sendMsgToUser($uid,GR_GAME_CARDHOLDER,$data);
	 }

	public function gameNoShuffleSendCard()
	{
		$this->m_gameStatus = self::GAMESTATE_SENDCARDS;
		$this->destoryClick(CLICK_NAME_SEND_CARD);
		$this->destoryClick(CLICK_NAME_DIZHU);
		//开始定时器
		$this->addTimeClick(CLICK_NAME_SEND_CARD,CLICK_VALUE_SEND_CARD,array($this,'sendCardsCallBack'),array());

		//发牌消息
		$cardData['handcards'][] = array_slice($this->m_outCardsList,0,17);
		$cardData['handcards'][] = array_slice($this->m_outCardsList,17,17);
		$cardData['handcards'][] = array_slice($this->m_outCardsList,34,17);
		foreach ($cardData['handcards'] as $key => $value) {
			GameLogic::getInstance()->sortCards($cardData['handcards'][$key]);
		}
		$cardData['dicards'] = array_slice($this->m_outCardsList,51,3);
		$this->m_outCardsList = array();
		if(sizeof($cardData['handcards']) != 3 || sizeof($cardData['dicards']) != 3)echo 'create cards error\n';

		$this->m_curJuCardsData = $cardData;
		$cardIndex = 0;
		foreach ($this->m_deskData as $seatno => $info) { 
			$this->m_deskData[$seatno]['cards'] = $cardData['handcards'][$cardIndex];
			$cardIndex++;
		}
		//发牌
		$this->sendRoomMessage(GR_GAME_SEND_CARDS,$this->m_deskData);
	}

	public function gameShuffleSendCard(){
		$this->m_gameStatus = self::GAMESTATE_SENDCARDS;
		$this->destoryClick(CLICK_NAME_SEND_CARD);
		$this->destoryClick(CLICK_NAME_DIZHU);
		//开始定时器
		$this->addTimeClick(CLICK_NAME_SEND_CARD,CLICK_VALUE_SEND_CARD,array($this,'sendCardsCallBack'),array());

		//发牌消息
		$cardData = GameLogic::getInstance()->createCards();
		if(sizeof($cardData['handcards']) != 3 || sizeof($cardData['dicards']) != 3)echo 'create cards error\n';

		$this->m_curJuCardsData = $cardData;
		$cardIndex = 0;
		foreach ($this->m_deskData as $seatno => $info) { 
			$this->m_deskData[$seatno]['cards'] = $cardData['handcards'][$cardIndex];
			$cardIndex++;
		}
		//发牌
		$this->sendRoomMessage(GR_GAME_SEND_CARDS,$this->m_deskData);

	}

	
	//=================响应不同模式=====================
	public function sendCardsCallBack(){
		$this->m_gameStatus = self::GAMESTATE_DIZHU;
		//发送抢地主消息
		if ($this->m_roomRule['gameWay'] == 1) {
			$this->sendDizhuAction($this->m_qiangDizhuSeatNo);
		}else if ($this->m_roomRule['gameWay'] == 2) {
			$this->sendJiaofenAction($this->m_qiangDizhuSeatNo);
		}
	}

	public function dizhuActionReg($uid,$code){
		if ($this->m_roomRule['gameWay'] == 1) {
			$this->jiaodizhuActionReg($uid,$code);
		}else if ($this->m_roomRule['gameWay'] == 2) {
			$this->difenActionReg($uid,$code);
		}
	}

	//=================叫分模式=====================
	public function sendJiaofenAction($seatno)
	{
		if($this->m_gameStatus != self::GAMESTATE_DIZHU)return;
		//开始定时器
		// $this->addTimeClick(CLICK_NAME_DIZHU,CLICK_VALUE_DIZHU,array($this,'jiaofenActionCallBack'),array());
		$data['seatno'] = $seatno;
		$data['time'] = CLICK_VALUE_DIZHU;
		$data['notChoose'] = array();
		$this->m_qiangDizhuSeatNo = $seatno;
		if (isset($this->m_jiaoFenList['seatno']) && isset($this->m_jiaoFenList['callScore'])) {
			for ($i=1; $i <= 3; $i++) { 
				if ($this->m_jiaoFenList['callScore'] >= $i) {
					$data['notChoose'][] = $i;
					$this->m_jiaoFenList['notChoose'] = $data['notChoose'];
				}
			}
		}

		$this->sendRoomMessage(GR_GAME_DIZHU,$data);
	}

	public function jiaofenActionCallBack(){

		$this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] = DZ_BU_JIAO_DIZHU;
		//MSG抢地主消息
		$data['seatno'] = $this->m_qiangDizhuSeatNo;
		$data['code'] = 0;
		$data['callScore'] = 0;
		$data['totalrank'] = $this->m_totalRank;
		$this->sendRoomMessage(GR_GAME_DIZHU_REG,$data);


		$this->checkJiaoFenResult();
	}
	public function checkJiaoFenResult(){

		$resetCards = true;
		foreach ($this->m_playerDizhuStatus as $key => $value) {
			if ($value == 0) {
				$resetCards = false;
			}
		}
		if ($resetCards) {
			$dizhu = false;
			foreach ($this->m_playerDizhuStatus as $key => $value) {
				if ($value != 1 && $value != 0) {
					$dizhu = true;
				}
			}
			if ($dizhu) {
				$this->setJiaoFenDizhu($this->m_jiaoFenList['seatno'],$this->m_jiaoFenList['callScore']);
			}else{
				if ($this->m_callLunCount >= 5) {
					$this->setJiaoFenDizhu($this->m_callDizhuSeatNo,1);
				}else{
					$this->m_callLunCount++;
					$this->initDizhuData();
					$this->gameSendCard();
				}
			}
		}else{
			if (isset($this->m_jiaoFenList['seatno']) && isset($this->m_jiaoFenList['callScore']) && $this->m_jiaoFenList['callScore'] == DZ_JIAOFEN_3_DIZHU - 4) {
				$this->setJiaoFenDizhu($this->m_jiaoFenList['seatno'],$this->m_jiaoFenList['callScore']);
			}else{
				$nextSeatno = -1;
				if($this->m_qiangDizhuSeatNo == 3){
					$nextSeatno = 1;
				}else{
					$nextSeatno = $this->m_qiangDizhuSeatNo + 1;
				}
				$this->m_qiangDizhuSeatNo = $nextSeatno;
				$this->sendJiaofenAction($nextSeatno);
			}
		}
	}
	public function setJiaoFenDizhu($seatno,$callScore)
	{
		$this->destoryClick(CLICK_NAME_DIZHU);

		$this->m_curbankerNo = $seatno;
		$this->m_curOutCardSeatno = $seatno;
		$this->m_deskData[$seatno]['isbanker'] = true;


		$dizhuCards = $this->m_deskData[$seatno]['cards'];
		$this->m_totalRank['dizhu'] = $callScore;
		$this->m_totalRank['dicards'] = 1;
		$dicardsrank = array();
		for ($i=0; $i < 3; $i++) { 
			$dizhuCards[] = $this->m_curJuCardsData['dicards'][$i];
			$dicardsrank[] = GameLogic::getInstance()->getCardValue($this->m_curJuCardsData['dicards'][$i]);
		}
		$dicardsrank = array_flip($dicardsrank);
		// if (count($dicardsrank) == 1) {
		// 	$this->m_totalRank['dicards'] *= 4;
		// }else if (count($dicardsrank) == 2) {
		// 	$this->m_totalRank['dicards'] *= 2;
		// }
		// if (in_array(0x41, $this->m_curJuCardsData['dicards'])) {
		// 	$this->m_totalRank['dicards'] *= 2;
		// }
		// if (in_array(0x42, $this->m_curJuCardsData['dicards'])) {
		// 	$this->m_totalRank['dicards'] *= 2;
		// }
		
		$this->m_deskData[$seatno]['cards'] = $dizhuCards;

		$data['dizhuseatno'] = $seatno;
		$data['dicards'] = $this->m_curJuCardsData['dicards'];
		$data['callScore'] = $callScore;
		$data['totalrank'] = $this->m_totalRank;
		foreach ($this->m_deskData as $seat => $info) {
			if($seat == $seatno || $this->m_playerShowCardsStatus[$seatno-1] == 2){
				GameLogic::getInstance()->sortCards($dizhuCards);
				$data['handcards'] = $dizhuCards;
				$data['handcardssort'] = $dizhuCards;
			}
			$this->sendMsgToUser($info['uid'],GR_GAME_DIZHU_RESULT,$data);
		}
		//$this->sendRoomMessage(GR_GAME_DIZHU_RESULT,$data);
		//确定地主之后，游戏进入加倍环节
		// $this->m_gameStatus = self::GAMESTATE_DOUBLERANK;
		//开始定时器
		// $this->addTimeClick(CLICK_NAME_DOUBLE_RANK,CLICK_VALUE_DOUBLE_RANK,array($this,'doubleRankCallBack'),array());
		$this->startOutCards();
	}
	public function difenActionReg($uid,$code){

		if($this->m_gameStatus != self::GAMESTATE_DIZHU){
			echo 'not in qiang dizhu time \n';
			return ;

		}
		if (isset($this->m_jiaoFenList['notChoose']) && in_array($code, $this->m_jiaoFenList['notChoose'])) {
			return ;
		}
		if ($this->m_playerList[$uid]['seatno'] != $this->m_qiangDizhuSeatNo) {
			return ;
		}
		$this->destoryClick(CLICK_NAME_DIZHU);

		if($code == 0 || $code == 1 || $code == 2 || $code == 3){
			$data['seatno'] = $this->m_playerList[$uid]['seatno'];
			if ($code == 0) {
				$data['code'] = 0;
				$data['callScore'] = 0;
				$this->m_playerDizhuStatus[$data['seatno']-1] = DZ_BU_JIAO_DIZHU;
			}else{
				$data['code'] = 3;
				$data['callScore'] = $code;
				$this->m_totalRank['dizhu'] = $code;
				$this->m_playerDizhuStatus[$data['seatno']-1] = $code + 4;
				$this->m_jiaoFenList['callScore'] = $code;
				$this->m_jiaoFenList['seatno'] = $data['seatno'];
			}
			$data['totalrank'] = $this->m_totalRank;
			$this->sendRoomMessage(GR_GAME_DIZHU_REG,$data);

			$this->checkJiaoFenResult();
		}else{
			echo "qiang dizhu code ".$code." error!\n";
		}

	}
	//=================抢地主模式=====================
	public function sendDizhuAction($seatno){
		if($this->m_gameStatus != self::GAMESTATE_DIZHU)return;
		//开始定时器
		// $this->addTimeClick(CLICK_NAME_DIZHU,CLICK_VALUE_DIZHU,array($this,'dizhuActionCallBack'),array());
		$data['seatno'] = $seatno;
		$data['time'] = CLICK_VALUE_DIZHU;

		$isJiaoDizhu = true;
		for ($i=0; $i < 3; $i++) { 
			if($this->m_playerDizhuStatus[$i] > 2){
				$isJiaoDizhu = false;
				break;
			}
		}
		$data['jiaodizhu'] = $isJiaoDizhu;

		$this->m_isCallDizhuSeatNo = $isJiaoDizhu;
		$this->sendRoomMessage(GR_GAME_DIZHU,$data);
		
	}
	public function dizhuActionCallBack(){
		//地主抢地主，不统计
		if($this->m_callDizhuSeatNo == $this->m_qiangDizhuSeatNo && $this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] == DZ_JIAO_DIZHU){
			//地主抢地主
		}else{
			$this->m_dizhuTotalCount++;
		}
		if($this->m_isCallDizhuSeatNo){
			$this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] = DZ_BU_JIAO_DIZHU;//默认不抢
		}else{
			$this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] = DZ_BU_QIANG_DIZHU;//默认不抢
		}

		//MSG抢地主消息
		$data['seatno'] = $this->m_qiangDizhuSeatNo;
		$data['code'] = 1;
		$data['totalrank'] = $this->m_totalRank;
		$this->sendRoomMessage(GR_GAME_DIZHU_REG,$data);


		$this->checkDizhuResult();
	}
	public function jiaodizhuActionReg($uid,$code){

		if($this->m_gameStatus != self::GAMESTATE_DIZHU){
			echo 'not in qiang dizhu time \n';
			return ;

		}
		foreach ($this->m_deskData as $seatno => $info) {
			if($uid == $info['uid']){
				if($seatno != $this->m_qiangDizhuSeatNo || $this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] == DZ_QIANG_DIZHU){
					echo "qiangdizhu error\n";
					return;
				}
			}
		}

		$this->destoryClick(CLICK_NAME_DIZHU);

		if($code == 1 || $code == 2){
			//地主抢地主，不统计
			if($this->m_callDizhuSeatNo == $this->m_qiangDizhuSeatNo && $this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] == DZ_JIAO_DIZHU){
				//地主抢地主
				if($code == 2){
					$this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] = DZ_QIANG_DIZHU;//抢地主
					$this->m_qiangDiZhuCount++;
					$this->m_totalRank['qiangdizhu'] *= 2;
				}else{
					$this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] = DZ_BU_QIANG_DIZHU;//不抢
				}
			}else{
				if($code == 2){
					if($this->m_isCallDizhuSeatNo){
						$this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] = DZ_JIAO_DIZHU;//叫地主
					}else{
						$this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] = DZ_QIANG_DIZHU;//抢地主
						$this->m_totalRank['qiangdizhu'] *= 2;
					}
					$this->m_qiangDiZhuCount++;
				}else{
					if($this->m_isCallDizhuSeatNo){
						$this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] = DZ_BU_JIAO_DIZHU;//不抢
					}else{
						$this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] = DZ_BU_QIANG_DIZHU;//不抢
					}
					
				}
				
			}
			$this->m_dizhuTotalCount++;
			//MSG抢地主消息
			$data['seatno'] = $this->m_qiangDizhuSeatNo;
			$data['code'] = $this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1];
			$data['totalrank'] = $this->m_totalRank;
			$this->sendRoomMessage(GR_GAME_DIZHU_REG,$data);

			$this->checkDizhuResult();
		}else{
			echo "qiang dizhu code ".$code." error!\n";
		}

	}
	public function checkDizhuResult(){

		$qiangCount = 0;
		//$jiaoCount = 0;
		for ($i=0; $i < 3; $i++) { 
			if($this->m_playerDizhuStatus[$i] == DZ_QIANG_DIZHU){
				$qiangCount++;
			}
		}


		$nextSeatno = -1;
		if($this->m_qiangDizhuSeatNo == 3){
			$nextSeatno = 1;
		}else{
			$nextSeatno = $this->m_qiangDizhuSeatNo + 1;
		}
		if($this->m_playerDizhuStatus[$nextSeatno-1] == DZ_WAIT_DIZHU ){
			//发送下一条叫地主消息
			$this->m_qiangDizhuSeatNo = $nextSeatno;
			$this->sendDizhuAction($this->m_qiangDizhuSeatNo);
		}else if($this->m_playerDizhuStatus[$nextSeatno-1] == DZ_JIAO_DIZHU ){
			
			if($qiangCount > 0){
				//发送下一条叫地主消息
				$this->m_qiangDizhuSeatNo = $nextSeatno;
				$this->sendDizhuAction($this->m_qiangDizhuSeatNo);
			}else{
				$this->setDizhuAction($nextSeatno);
			}
		}else if($this->m_playerDizhuStatus[$nextSeatno-1] == DZ_QIANG_DIZHU ){

			$preSeatno = ($this->m_qiangDizhuSeatNo == 1)?3:($this->m_qiangDizhuSeatNo-1);
			if($this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] == DZ_QIANG_DIZHU){
				$this->setDizhuAction($this->m_qiangDizhuSeatNo);
			}else if($this->m_playerDizhuStatus[$preSeatno-1] == DZ_QIANG_DIZHU){
				$this->setDizhuAction($preSeatno);
			}else{
				$this->setDizhuAction($nextSeatno);
			}
			
		}else if($this->m_playerDizhuStatus[$nextSeatno-1] == DZ_BU_QIANG_DIZHU){
			$preSeatno = ($this->m_qiangDizhuSeatNo == 1)?3:($this->m_qiangDizhuSeatNo-1);
			if($this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] == DZ_QIANG_DIZHU){
				$this->setDizhuAction($this->m_qiangDizhuSeatNo);
			}else if($this->m_playerDizhuStatus[$preSeatno-1] == DZ_QIANG_DIZHU){
				$this->setDizhuAction($preSeatno);
			}else{
				//重新发牌
				if($this->m_callLunCount>=5){
					//叫地主的人做地主
					$this->setDizhuAction($this->m_callDizhuSeatNo);
				}else{
					$this->initDizhuData();
					$this->gameSendCard();
					$this->m_callLunCount++;
				}
			}
		}else if($this->m_playerDizhuStatus[$nextSeatno-1] == DZ_BU_JIAO_DIZHU){
			if($this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] == DZ_BU_JIAO_DIZHU){
				//重新发牌
				if($this->m_callLunCount>=5){
					//叫地主的人做地主
					$this->setDizhuAction($this->m_callDizhuSeatNo);
				}else{
					$this->initDizhuData();
					$this->gameSendCard();
					$this->m_callLunCount++;
				}
			}else if($this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] == DZ_JIAO_DIZHU){
				$this->setDizhuAction($this->m_qiangDizhuSeatNo);
			}else if($this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] == DZ_QIANG_DIZHU){
				$this->setDizhuAction($this->m_qiangDizhuSeatNo);
			}else if($this->m_playerDizhuStatus[$this->m_qiangDizhuSeatNo-1] == DZ_BU_QIANG_DIZHU){
				$preSeatno = ($this->m_qiangDizhuSeatNo == 1)?3:($this->m_qiangDizhuSeatNo-1);
				$this->setDizhuAction($preSeatno);
			}else{
				echo 'qiang error 1';
			}
		}else{
				echo 'qiang error 2';
			}

	}

	//设置地主
	public function setDizhuAction($seatno){
		$this->destoryClick(CLICK_NAME_DIZHU);

		$this->m_curbankerNo = $seatno;
		$this->m_curOutCardSeatno = $seatno;
		$this->m_deskData[$seatno]['isbanker'] = true;

		$dizhuCards = $this->m_deskData[$seatno]['cards'];
		$this->m_totalRank['dicards'] = 1;
		$dicardsrank = array();
		for ($i=0; $i < 3; $i++) { 
			$dizhuCards[] = $this->m_curJuCardsData['dicards'][$i];
			$dicardsrank[] = GameLogic::getInstance()->getCardValue($this->m_curJuCardsData['dicards'][$i]);
		}
		$dicardsrank = array_flip($dicardsrank);
		if (count($dicardsrank) == 1) {
			$this->m_totalRank['dicards'] *= 4;
		}else if (count($dicardsrank) == 2) {
			$this->m_totalRank['dicards'] *= 2;
		}
		if (in_array(0x41, $this->m_curJuCardsData['dicards'])) {
			$this->m_totalRank['dicards'] *= 2;
		}
		if (in_array(0x42, $this->m_curJuCardsData['dicards'])) {
			$this->m_totalRank['dicards'] *= 2;
		}
		

		$this->m_deskData[$seatno]['cards'] = $dizhuCards;

		$data['dizhuseatno'] = $seatno;
		$data['dicards'] = $this->m_curJuCardsData['dicards'];
		
		foreach ($this->m_deskData as $seat => $info) {
			if($seat == $seatno || $this->m_playerShowCardsStatus[$seatno-1] == 2){
				$data['handcards'] = $dizhuCards;
				GameLogic::getInstance()->sortCards($dizhuCards);
				$data['handcardssort'] = $dizhuCards;
				$data['totalrank'] = $this->m_totalRank;
			}
			$this->sendMsgToUser($info['uid'],GR_GAME_DIZHU_RESULT,$data);
		}
		//$this->sendRoomMessage(GR_GAME_DIZHU_RESULT,$data);
		//确定地主之后，游戏进入加倍环节
		// $this->m_gameStatus = self::GAMESTATE_DOUBLERANK;
		//开始定时器
		// $this->addTimeClick(CLICK_NAME_DOUBLE_RANK,CLICK_VALUE_DOUBLE_RANK,array($this,'doubleRankCallBack'),array());

		$this->startOutCards();
	}

	//加倍回调
	public function doubleRankCallBack(){
		for ($i=0; $i < 3; $i++) { 
			if($this->m_playerDoubleRankStatus[$i] == 0){
				$this->m_playerDoubleRankStatus[$i] = 1; 

				$data['seatno'] = $i+1;
				$data['type'] = 3;
				$data['desc'] = "不加倍";
				$data['totalrank'] = $this->m_totalRank;
				$this->sendRoomMessage(GR_GAME_DOUBLE_RANK,$data);
			}
		}
		
		//游戏进入出牌状态
		$this->startOutCards();

	}
	//加倍回调
	//code 0/1 不加倍/加倍
	//return 1/2/3 已经加倍过了/加倍成功/不加倍
	public function doubleRankReg($uid,$code){
		return ;
		if($code!=0&&$code!=1){
			echo 'doubleRankReg code error\n';
			return ;
		}
		if($this->m_gameStatus == self::GAMESTATE_DOUBLERANK){
			foreach ($this->m_deskData as $seatno => $info) {
				if($uid == $info['uid']){
					$data['seatno'] = $seatno;
					if($this->m_playerDoubleRankStatus[$seatno-1]!=0){
						$data['seatno'] = $seatno;
						$data['type'] = 1;
						$data['desc'] = "你已经加倍过了";
						$data['totalrank'] = $this->m_totalRank;
						$this->sendMsgToUser($info['uid'],GR_GAME_DOUBLE_RANK,$data);
					}else{
						$this->m_playerDoubleRankStatus[$seatno-1] = $code;
						$data['seatno'] = $seatno;
						if($code == 1){//加倍
							if($this->m_curbankerNo == $seatno){
								$this->m_totalRank['dizhu'] *= 2;
							}else{
								if($this->m_totalRank['nongmin'] == 1)$this->m_totalRank['nongmin'] *= 2;
							}
							$data['type'] = 2;
							$data['desc'] = "加倍成功";
						}else{//不加倍
							$data['type'] = 3;
							$data['desc'] = "不加倍";
						}
						$data['totalrank'] = $this->m_totalRank;
						$this->sendRoomMessage(GR_GAME_DOUBLE_RANK,$data);
					}

					//判断是否所有人都已经加倍操作
					$canOutCard = true;
					for ($i=0; $i < 3; $i++) { 
						if($this->m_playerDoubleRankStatus[$i] == 0){
							$canOutCard = false;
							break;
						}
					}
					if($canOutCard){
						$this->startOutCards();
					}
					break;
				}
			}
		}else{
			echo "not in doublerank time!";
		}
		

	}

	//======================out card==============================
	public function startOutCards(){
		if($this->m_gameStatus == self::GAMESTATE_OUTCARDS)return ;
		$this->destoryClick(CLICK_VALUE_DOUBLE_RANK);
		$this->m_gameStatus = self::GAMESTATE_OUTCARDS;

		$this->outCards(true);
	}

	//isSelf true/false 主动出牌/被动出牌
	public function outCards($isSelf = false){
		$this->destoryClick(CLICK_NAME_OUT_CARD);
		$data['seatno'] = $this->m_curOutCardSeatno;
		$data['outtype'] = ($isSelf || $this->m_curOutCardSeatno == $this->m_preOutCardSeatno)?true:false;
		$this->m_curOutCardType = $data['outtype'];
		//echo "out type:".$data['outtype']."\n";
		if(!$data['outtype']){
			$data['cardsarr'] = array();
			$data['ishavecards'] = GameLogic::getInstance()->getCardsListGt($this->m_deskData[$this->m_curOutCardSeatno]['cards'],$this->m_preOutCardData,$data['cardsarr']);
		}
		
		//记录数据，用于断线重连回复数据cd
		$this->m_curOutCardMsgData = $data;
		//开始定时器
		if(GameLogic::getInstance()->getCardsType($this->m_preOutCardData) == TP_KINGBOMB && !$data['outtype']){
			$data['time'] = 3;
			$this->addTimeClick(CLICK_NAME_OUT_CARD,3,array($this,'mustOutCardAction'),array());
		}else{
			$data['time'] = CLICK_VALUE_OUT_CARD;
			// $this->addTimeClick(CLICK_NAME_OUT_CARD,CLICK_VALUE_OUT_CARD,array($this,'mustOutCardAction'),array());
		}
		$this->sendRoomMessage(GR_GAME_OUT_CARD,$data);
		//var_dump($data);
		
	}
	//玩家出牌的时候，验证出的牌数据
	public function checkOutCardsData($cards){
		//验证被动出牌的牌是否大于上家
		if (!$this->m_curOutCardType) {
			return GameLogic::getInstance()->compareCards($cards,$this->m_preOutCardData);
		}
		return 2;
	}
	//玩家出牌
	//$data array('cardslist')
	public function outCardsReg($uid,$data){
		if($this->m_gameStatus != self::GAMESTATE_OUTCARDS){
			echo 'not in out card time \n';
			return;
		}
		//检测是否是这个人出牌
		foreach ($this->m_deskData as $seatno => $info) {
			if($info['uid'] == $uid){
				if($this->m_curOutCardSeatno != $seatno){
					echo "not you out card \n";
					return;
				}
			}
		}

		//出牌
		if($data['code'] == 1 && sizeof($data['cards'])>0){
			$cnt = count($data['cards']);
		    for ($i = 0; $i < $cnt - 1; $i++) {
		        for ($j = 0; $j < $cnt - $i - 1; $j++) {
		            if (GameLogic::getInstance()->getCardValue($data['cards'][$j]) < GameLogic::getInstance()->getCardValue($data['cards'][$j+1])) {
		                $temp = $data['cards'][$j];
		                $data['cards'][$j] = $data['cards'][$j + 1];
		                $data['cards'][$j + 1] = $temp;
		            }
		        }
		    }
			// for ($i=0; $i < count($data['cards']); $i++) { 
			// 	if (isset($data['cards'][$i]) && isset($data['cards'][$i+1]) && GameLogic::getInstance()->getCardValue($data['cards'][$i]) < GameLogic::getInstance()->getCardValue($data['cards'][$i+1])) {
			// 			$temp = $data['cards'][$i];
			// 			$data['cards'][$i] = $data['cards'][$i+1];
			// 			$data['cards'][$i+1] = $temp;
			// 	}
			// }
			//主动出牌
			if($this->m_curOutCardType){
				if(GameLogic::getInstance()->getCardsType($data['cards']) == 0){
					//echo "out card value error!";
					$res['outaction'] = false;
					$res['errortype'] = 1;
					$res['errordesc'] = "out card value error";
					$this->sendMsgToUser($uid,GR_GAME_OUT_CARD_REG,$res);
				}else{
					//先校验是否是自己手上拥有的牌
						if(!$this->checkHandsCards($this->m_deskData[$this->m_curOutCardSeatno]['cards'],$data['cards'])){
							$res['outaction'] = false;
							$res['errortype'] = 4;
							$res['errordesc'] = "outcards data not in handcards";
							$this->sendMsgToUser($uid,GR_GAME_OUT_CARD_REG,$res);
							echo "outcards data not in handcards \n";
							return ;
						}


						if($this->m_curOutCardSeatno == $this->m_curbankerNo)$this->m_dizhuOutCardCount++;
							//出牌数据
						$res['outaction'] = true;
						$res['errortype'] = 0;
						$res['errordesc'] = "success";
						$res['seatno'] = $this->m_curOutCardSeatno;
						$res['canout'] = true;//有牌出
						$res['outcardsdata'] = $data['cards'];
						$res['cardtype'] = GameLogic::getInstance()->getCardsType($data['cards']);
						if ($res['cardtype'] == TP_BOMB || $res['cardtype'] == TP_KINGBOMB) {
							$this->m_totalRank['bomb'] *= 2;
						}
						$this->delOutCardsInHandCards($this->m_curOutCardSeatno,$data['cards']);
						$res['lastcount'] = sizeof($this->m_deskData[$this->m_curOutCardSeatno]['cards']); 
						$res['handcards'] = $this->m_deskData[$this->m_curOutCardSeatno]['cards'];
						$res['totalrank'] = $this->m_totalRank;
						$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$res);

						if($res['lastcount'] == 0){
							$this->gameEnd($this->m_curOutCardSeatno);
						}else{
							$this->m_preOutCardSeatno = $this->m_curOutCardSeatno;
							$this->m_preOutCardData = $data['cards'];

							if($this->m_curOutCardSeatno==3){
								$this->m_curOutCardSeatno = 1;
							}else{
								$this->m_curOutCardSeatno++;
							}
							$this->outCards(false);
						}
				}
			//被动出牌
			}else{
				$compareTag = $this->checkOutCardsData($data['cards']);
				if(GameLogic::getInstance()->getCardsType($data['cards']) == 0){
					//echo "out card value error!";
					$res['outaction'] = false;
					$res['errortype'] = 1;
					$res['errordesc'] = "out card value error";
					$this->sendMsgToUser($uid,GR_GAME_OUT_CARD_REG,$res);
				}else if($compareTag<=0){
					$res['outaction'] = false;
					if($compareTag==0 || $compareTag==-1){
						$res['errortype'] = 2;
						$res['errordesc'] = "smaller pre outcard";
					}else{
						$res['errortype'] = 3;
						$res['errordesc'] = "outcard type error";
					}
					$this->sendMsgToUser($uid,GR_GAME_OUT_CARD_REG,$res);
				}else{

						//先校验是否是自己手上拥有的牌
						if(!$this->checkHandsCards($this->m_deskData[$this->m_curOutCardSeatno]['cards'],$data['cards'])){
							$res['outaction'] = false;
							$res['errortype'] = 4;
							$res['errordesc'] = "outcards data not in handcards";
							$this->sendMsgToUser($uid,GR_GAME_OUT_CARD_REG,$res);
							echo "outcards data not in handcards \n";
							return ;
						}

						if($this->m_curOutCardSeatno == $this->m_curbankerNo)$this->m_dizhuOutCardCount++;
							//出牌数据
						$res['outaction'] = true;
						$res['errortype'] = 0;
						$res['errordesc'] = "success";
						$res['seatno'] = $this->m_curOutCardSeatno;
						$res['canout'] = true;//有牌出
						$res['outcardsdata'] = $data['cards'];
						$res['cardtype'] = GameLogic::getInstance()->getCardsType($data['cards']);
						if ($res['cardtype'] == TP_BOMB || $res['cardtype'] == TP_KINGBOMB) {
							$this->m_totalRank['bomb'] *= 2;
						}
						$this->delOutCardsInHandCards($this->m_curOutCardSeatno,$data['cards']);
						$res['lastcount'] = sizeof($this->m_deskData[$this->m_curOutCardSeatno]['cards']); 
						$res['handcards'] = $this->m_deskData[$this->m_curOutCardSeatno]['cards'];
						$res['totalrank'] = $this->m_totalRank;
						$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$res);

						if($res['lastcount'] == 0){
							$this->gameEnd($this->m_curOutCardSeatno);
						}else{
							$this->m_preOutCardSeatno = $this->m_curOutCardSeatno;
							$this->m_preOutCardData = $data['cards'];

							if($this->m_curOutCardSeatno==3){
								$this->m_curOutCardSeatno = 1;
							}else{
								$this->m_curOutCardSeatno++;
							}
							$this->outCards(false);
						}
				}
			}


			

		//不出
		}else if($data['code'] == 0){
			if($this->m_curOutCardType)return;

			//要不起
			$res['outaction'] = true;
			$res['errortype'] = 0;
			$res['errordesc'] = "success";
			$res['seatno'] = $this->m_curOutCardSeatno;
			$res['canout'] = false;
			$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$res);

			if($this->m_curOutCardSeatno==3){
				$this->m_curOutCardSeatno = 1;
			}else{
				$this->m_curOutCardSeatno++;
			}
			$this->outCards(false);
		}else{
			echo "outcard action error\n";
			var_dump($data);
		}
		
		
	}
	public function cardsholder($seatno)
	{
		$cardsholder = array();
		for ($i=1; $i <= 15; $i++) { 
			$cardsholder[$i] = 0;
		}
		if ($this->m_roomStatus != self::STATE_PLAYING) {
			return $cardsholder;
		}
		foreach ($this->m_deskData as $seat => $info) {
			if ($seatno != $seat) {
				foreach ($info['cards'] as $key => $cards) {
					$card = GameLogic::getInstance()->getCardValue($cards);
					$cardsholder[$card]++;
				}
			}
		}
		return $cardsholder;
	}
	public function checkHandsCards($handcards,$outcards){
		GameLogic::getInstance()->sortCardsAsc($handcards);
		GameLogic::getInstance()->sortCardsAsc($outcards);
		for ($i=0; $i < sizeof($outcards); $i++) {
			$isHave = false; 
			GameLogic::getInstance()->initIndex($handcards);
			for ($j=0; $j < sizeof($handcards); $j++) { 
				if($outcards[$i] == $handcards[$j]){
					$isHave = true;
					unset($handcards[$j]);
					break;
				}
			}
			if($isHave)continue;
			else return false;
		}
		return true;
	}

	//强制出牌
	public function mustOutCardAction(){
		if($this->m_curOutCardType){
			if($this->m_curOutCardSeatno == $this->m_curbankerNo)$this->m_dizhuOutCardCount++;

			$outCardsData = array();
			$isHave = GameLogic::getInstance()->getCardsListBySelfOutCards($this->m_deskData[$this->m_curOutCardSeatno]['cards'],$outCardsData);



			//出牌数据
			$data['outaction'] = true;
			$data['errortype'] = 0;
			$data['errordesc'] = "success";
			$data['seatno'] = $this->m_curOutCardSeatno;
			$data['canout'] = true;//有牌出
			$data['outcardsdata'] = $outCardsData[0];
			$data['cardtype'] = GameLogic::getInstance()->getCardsType($outCardsData[0]);
			//$data['lastcount'] = $this->delOutCardsInHandCards($this->m_curOutCardSeatno,$outCardsData);
			if ($data['cardtype'] == TP_BOMB || $data['cardtype'] == TP_KINGBOMB) {
				$this->m_totalRank['bomb'] *= 2;
			}
			$this->delOutCardsInHandCards($this->m_curOutCardSeatno,$outCardsData[0]);
			$data['lastcount'] = sizeof($this->m_deskData[$this->m_curOutCardSeatno]['cards']); 
			$data['handcards'] = $this->m_deskData[$this->m_curOutCardSeatno]['cards'];
			$data['totalrank'] = $this->m_totalRank;
			$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$data);

			if($data['lastcount'] == 0){
				$this->gameEnd($this->m_curOutCardSeatno);
			}else{
				$this->m_preOutCardSeatno = $this->m_curOutCardSeatno;
				$this->m_preOutCardData = $outCardsData[0];
				if($this->m_curOutCardSeatno==3){
					$this->m_curOutCardSeatno = 1;
				}else{
					$this->m_curOutCardSeatno++;
				}
				$this->outCards(false);
			}

		//被动出牌
		}else{
			$outCardsData = array();
			$isHave = GameLogic::getInstance()->getCardsListGt($this->m_deskData[$this->m_curOutCardSeatno]['cards'],$this->m_preOutCardData,$outCardsData);


			if($isHave){
				if($this->m_curOutCardSeatno == $this->m_curbankerNo)$this->m_dizhuOutCardCount++;
				//出牌数据
				$data['outaction'] = true;
				$data['errortype'] = 0;
				$data['errordesc'] = "success";
				$data['seatno'] = $this->m_curOutCardSeatno;
				$data['canout'] = true;//有牌出
				$data['outcardsdata'] = $outCardsData[0];
				$data['cardtype'] = GameLogic::getInstance()->getCardsType($outCardsData[0]);
				//$data['lastcount'] = $this->delOutCardsInHandCards($this->m_curOutCardSeatno,$outCardsData);
				if ($data['cardtype'] == TP_BOMB || $data['cardtype'] == TP_KINGBOMB) {
					$this->m_totalRank['bomb'] *= 2;
				}
				$this->delOutCardsInHandCards($this->m_curOutCardSeatno,$outCardsData[0]);
				$data['lastcount'] = sizeof($this->m_deskData[$this->m_curOutCardSeatno]['cards']); 
				$data['handcards'] = $this->m_deskData[$this->m_curOutCardSeatno]['cards'];
				$data['totalrank'] = $this->m_totalRank;
				$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$data);

				if($data['lastcount'] == 0){
					$this->gameEnd($this->m_curOutCardSeatno);
				}else{
					$this->m_preOutCardSeatno = $this->m_curOutCardSeatno;
					$this->m_preOutCardData = $outCardsData[0];

					if($this->m_curOutCardSeatno==3){
						$this->m_curOutCardSeatno = 1;
					}else{
						$this->m_curOutCardSeatno++;
					}
					$this->m_preOutCardData = $outCardsData[0];
					$this->outCards(false);
				}
			}else{
				//要不起
				$data['outaction'] = true;
				$data['errortype'] = 0;
				$data['errordesc'] = "success";
				$data['seatno'] = $this->m_curOutCardSeatno;
				$data['canout'] = false;//要不起
				$this->sendRoomMessage(GR_GAME_OUT_CARD,$data);

				if($this->m_curOutCardSeatno==3){
					$this->m_curOutCardSeatno = 1;
				}else{
					$this->m_curOutCardSeatno++;
				}
				$this->outCards(false);
			}
		}
	}

	//删除手牌中出牌数据
	//return 手牌的数量
	public function delOutCardsInHandCards($seatno,$cardsData){
		foreach ($cardsData as $index => $cards) {
			$this->m_outCardsList[] = $cards;
		}
		 $handcards = $this->m_deskData[$seatno]['cards'];
		 $cardNewValue = $cardsData;
        for ($i=0; $i < sizeof($cardNewValue); $i++) {
        	GameLogic::getInstance()->initIndex($handcards);
            foreach ($handcards as $key => $value) {
                 if ($value == $cardNewValue[$i]) {
                     unset($handcards[$key]);
                     break;
                }
            }
        }
        GameLogic::getInstance()->sortCards($handcards);  
        $this->m_deskData[$seatno]['cards'] = $handcards;
	}





	public function gameEnd($winSeatno){
		$this->destoryClick(CLICK_NAME_OUT_CARD);
		$this->m_gameStatus = self::GAMESTATE_END;
		//开始定时器
		$this->addTimeClick(CLICK_NAME_END,CLICK_VALUE_END,array($this,'gameEndCallBack'),array());
		
		
		//总倍率
		$totalRank = $this->m_totalRank['base']*$this->m_totalRank['showcard']*$this->m_totalRank['qiangdizhu']*$this->m_totalRank['dizhu']*$this->m_totalRank['bomb'];
		$data['dizhuseatno'] = $this->m_curbankerNo;
		$data['winseatno'] = $winSeatno;
		$data['springtag'] = true;
		//地主赢了
		if ($winSeatno == $this->m_curbankerNo) {
			$data['wintag'] = 1;
			$data['desc'] = "地主赢了";
			$data['springtag'] = true;
			foreach ($this->m_deskData as $seatno => $info) {
				if($seatno == $winSeatno)continue;
				if(sizeof($info['cards']) != 17){
					$data['springtag'] = false;
					break;
				}
			}
			// $totalRank *= $this->m_totalRank['dizhu'];
		}else{
			$data['wintag'] = 2;
			$data['desc'] = "农民赢了";
			
			//反春
			if($this->m_dizhuOutCardCount > 1)$data['springtag'] = false;
			// $totalRank *= $this->m_totalRank['nongmin'];
		}
		if($data['springtag'])$totalRank*=2;		
		if ($totalRank > $this->m_roomRule['maxscore'] && $this->m_roomRule['maxscore'] != 0) {
			$totalRank = $this->m_roomRule['maxscore'];
		}



		foreach ($this->m_deskData as $seatno => $info) {
	    	if($this->m_curbankerNo == $seatno){
	    		$this->m_compareDataResult['score'][$seatno] = $totalRank*2;
	    		if($data['wintag'] == 2)$this->m_compareDataResult['score'][$seatno]*=(-1);
	    	}else{
	    		$this->m_compareDataResult['score'][$seatno] = $totalRank;
	    		if($data['wintag'] == 1)$this->m_compareDataResult['score'][$seatno]*=(-1);
	    	}
	    	$this->m_compareDataResult['handcards'][$seatno] = $info['cards'];
	    }
	    $this->m_compareDataResult['gameenddata'] = $data;
	    $this->sendRoomMessage(GR_GAMEEND,$this->m_compareDataResult);

	    //累计分数
	    foreach ($this->m_deskData as $seatno => $info) {
				foreach ($this->m_compareDataResult['score'] as $compSeatno => $score) {
					if($seatno == $compSeatno){
						$data = array();
						$data['uid'] = $info['uid'];
						$data['roompwd'] = $this->m_roomPwd;
						$data['gamename'] = GAMENAME;
						$data['playground'] = $this->m_playGround;
						$data['score'] = $score;
						$data['inserttime'] = date("Y-m-d H:i:s");
						GameManager::getInstance()->insertRoomRecord($data);
						$this->m_scoreRecord[$this->m_playGround][$info['uid']] = $score;
						//更新玩家总积分

						foreach ($this->m_playerList as $uid => $pinfo) {
							if($seatno == $pinfo['seatno']){
								$this->m_playerList[$uid]['score'] += $score;
								break;
							}
						}

						break;
					}
				}
		}

	}

	public function gameEndCallBack(){
		$this->destoryClick(CLICK_NAME_END);
		$this->m_roomStatus = self::STATE_NONE;
		$this->m_gameStatus = self::GAMESTATE_READY;

		$this->sendRoomMessage(GR_GAMEREADY,array());
			
		//开始下一局之前清理断线玩家
		//$this->clearOfflinePlayer();
		for ($i=0; $i < 3; $i++) { 
			$this->m_playerReadyStatus[$i] = 0;
			$this->m_playerShowCardsStatus[$i] = 0;
			$this->m_playerDizhuStatus[$i] = 0;
			$this->m_playerDoubleRankStatus[$i] = 0;
		}
		//初始化倍率
		foreach ($this->m_totalRank  as $key => $value) {
			$this->m_totalRank[$key] = 1;
		}
		//下一局
		$this->checkStart();	
	}


}