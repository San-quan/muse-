<?php
/**
 * @property  斗地主 房间
 */

require_once __DIR__ . '/GameManager.php';
require_once __DIR__ . '/PlayerManager.php';
require_once __DIR__ . '/RunfastGameLogic.php';
require_once __DIR__ . '/../base/BaseRoom.php';

use Workerman\Lib\Timer;
class GameRoom extends BaseRoom
{

	//房间状态



	//当前房间的庄家
	public $m_curbankerNo = -1;
	//准备状态
	public $m_playerReadyStatus = array();

	public $m_outCardsList = array();
	//当前局的牌数据
	public $m_curJuCardsData = array();
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
 	//第一局出牌 必须带黑桃3	
 	public $m_firstState = false;
	//当局得分
	public $m_preBomb = array();
	//报警状态
	public $m_callpoliceState = array();
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
							if($code==1){
								$this->m_playerShowCardsStatus[$seatno-1] = 1;
							}

							$data['seatno'] = $seatno;
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
		$this->m_curOutCardSeatno = -1;
		//当前出牌的类型 主动/被动
		$this->m_curOutCardType = true;
		//上一轮出牌的数据
		$this->m_preOutCardSeatno = -1;
		$this->m_preOutCardData = array();

		$this->m_firstState = false;
		//------清除作为数据------------
		foreach ($this->m_deskData as $seatno => $info) {
			$this->m_deskData[$seatno]['cards'] = array();
			$this->m_deskData[$seatno]['isbanker'] = false;
			$this->m_deskData[$seatno]['ingame'] = true;

			$this->m_compareDataResult['score'][$seatno] = 0;
			$this->m_compareDataResult['cardsScore'][$seatno] = 0;
			$this->m_compareDataResult['bombScore'][$seatno] = 0;

			$this->m_preBomb[$seatno] = 0;
			$this->m_callpoliceState[$seatno] = false;
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
			foreach ($this->m_deskLocation as $key => $value) {
				if ($this->m_deskLocation[$key]['seatno'] == $this->m_playerList[$this->m_deskData[$seatno]['uid']]['seatno']) {
					$this->m_deskLocation[$key]['seatno'] = $seatno;
					break;
				}
			}
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
		//总次数
		$this->m_dizhuTotalCount = 0;
		//抢地主的次数
		$this->m_qiangDiZhuCount = 0;

		$this->m_jiaoFenList['seatno'] = -1;
		$this->m_jiaoFenList['callScore'] = -1;
		$this->m_jiaoFenList['notChoose'] = array();	
	}

	// public function gameSendCard()
	// {
	// 	if ($this->m_roomRule['shuffleCardsWay'] == 2 && count($this->m_outCardsList) == 54) {
	// 		$this->gameNoShuffleSendCard();
	// 	}else{
	// 		$this->gameShuffleSendCard();
	// 	}
	// }
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

	public function gameSendCard()
	{	
		$this->saveRoomMessage();
		$this->m_gameStatus = self::GAMESTATE_SENDCARDS;
		$this->destoryClick(CLICK_NAME_SEND_CARD);
		$this->destoryClick(CLICK_NAME_DIZHU);
		//开始定时器
		$this->addTimeClick(CLICK_NAME_SEND_CARD,CLICK_VALUE_SEND_CARD,array($this,'sendCardsCallBack'),array());

		//发牌消息
		$cardData = GameLogic::getInstance()->createCards();

		$this->m_curJuCardsData = $cardData;
		$cardIndex = 0;
		foreach ($this->m_deskData as $seatno => $info) { 
			$this->m_deskData[$seatno]['cards'] = $cardData['handcards'][$cardIndex];
			$cardIndex++;
		}
		//发牌
		$this->saveGameMessage(1,$this->m_deskData);
		$this->sendRoomMessage(GR_GAME_SEND_CARDS,$this->m_deskData);
	}

	// public function gameShuffleSendCard(){
	// 	$this->m_gameStatus = self::GAMESTATE_SENDCARDS;
	// 	$this->destoryClick(CLICK_NAME_SEND_CARD);
	// 	$this->destoryClick(CLICK_NAME_DIZHU);
	// 	//开始定时器
	// 	$this->addTimeClick(CLICK_NAME_SEND_CARD,CLICK_VALUE_SEND_CARD,array($this,'sendCardsCallBack'),array());

	// 	//发牌消息
	// 	$cardData = GameLogic::getInstance()->createCards();
	// 	if(sizeof($cardData['handcards']) != 3 || sizeof($cardData['dicards']) != 3)echo 'create cards error\n';

	// 	$this->m_curJuCardsData = $cardData;
	// 	$cardIndex = 0;
	// 	foreach ($this->m_deskData as $seatno => $info) { 
	// 		$this->m_deskData[$seatno]['cards'] = $cardData['handcards'][$cardIndex];
	// 		$cardIndex++;
	// 	}
	// 	//发牌
	// 	$this->sendRoomMessage(GR_GAME_SEND_CARDS,$this->m_deskData);

	// }

	public function sendCardsCallBack(){
		$this->destoryClick(CLICK_NAME_SEND_CARD);
		$this->m_gameStatus = self::GAMESTATE_OUTCARDS;
		$this->startOutCards();
	}


	//======================out card==============================
	public function startOutCards(){
		$this->findFristOutCards();
		$this->outCards(true);
	}

	public function findFristOutCards()
	{
		if ($this->m_playGround == 1) {
			$this->m_firstState = true;
			foreach ($this->m_deskData as $seatno => $info) {
				if (in_array(0x03, $this->m_deskData[$seatno]['cards'])) {
					$this->m_curOutCardSeatno = $seatno;
					break;
				}
			}
		}else{
			$this->m_firstState = false;
			$this->m_curOutCardSeatno = $this->m_curbankerNo;
		}
		$this->m_curbankerNo = $this->m_curOutCardSeatno;
		$this->m_deskData[$this->m_curOutCardSeatno]['isbanker'] = false;

		$data = intval($this->m_curbankerNo);
		$this->saveGameMessage(2,$data);
		$this->sendRoomMessage(GR_GAME_DIZHU_REG,$data);
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
		if(!$data['outtype'] && !$data['ishavecards']){
			// $this->mustOutCardAction();
			$data['time'] = 1;
			$this->addTimeClick(CLICK_NAME_OUT_CARD,0.8,array($this,'mustOutCardAction'),array());
			$this->sendRoomMessage(GR_GAME_OUT_CARD,$data);
		}else if ($data['outtype'] && $this->checkAllOutCards($this->m_deskData[$this->m_curOutCardSeatno]['cards'])) {
			$data['time'] = CLICK_VALUE_OUT_CARD;
			$this->sendRoomMessage(GR_GAME_OUT_CARD,$data);
			$cardsdata['code'] = 1;
			$cardsdata['cards'] = $this->m_deskData[$this->m_curOutCardSeatno]['cards'];
			$this->outCardsReg($this->m_deskData[$this->m_curOutCardSeatno]['uid'],$cardsdata,true);
		}else{
			if (count($this->m_preOutCardData) == 1 && !$data['outtype']) {
				$nextSeatno = $this->findNextSeatno($this->m_curOutCardSeatno);
				if ($this->m_callpoliceState[$nextSeatno]) {
					$maxCard = GameLogic::getInstance()->findMaxCard($this->m_deskData[$this->m_curOutCardSeatno]['cards']);
					$res = array();
					foreach ($data['cardsarr'] as $key => $value) {
						if (GameLogic::getInstance()->getCardValue($value[0]) == GameLogic::getInstance()->getCardValue($maxCard)) {
							$res[] = $value;
						}
					}
					$data['cardsarr'] = $res;
				}
			}
			$data['time'] = CLICK_VALUE_OUT_CARD;
			// $this->addTimeClick(CLICK_NAME_OUT_CARD,CLICK_VALUE_OUT_CARD,array($this,'mustOutCardAction'),array());
			$this->sendRoomMessage(GR_GAME_OUT_CARD,$data);
		}
		$this->saveGameMessage(3,$data);
		//var_dump($data);
		
	}
	//是否符合全部出牌
	public function checkAllOutCards($cardsList)
	{
		return GameLogic::getInstance()->checkAllOutCards($cardsList);
	}
	//玩家出牌的时候，验证出的牌数据
	public function checkOutCardsData($cards){
		//验证被动出牌的牌是否大于上家
		if (!$this->m_curOutCardType) {
			return GameLogic::getInstance()->compareCards($cards,$this->m_preOutCardData);
		}
		return 2;
	}
	public function findNextSeatno($seatno)
	{
		if ($seatno == 3) {
			$next = 1;
		}else{
			$next = $seatno + 1;
		}
		return $next;
	}
	//玩家出牌
	//$data array('cardslist')
	public function outCardsReg($uid,$data,$type = false){
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
		//报警状态
		if (count($data['cards']) == 1) {
			$nextSeatno = $this->findNextSeatno($this->m_curOutCardSeatno);
			if ($this->m_callpoliceState[$nextSeatno]) {
				$maxCard = GameLogic::getInstance()->findMaxCard($this->m_deskData[$this->m_curOutCardSeatno]['cards']);
				if (GameLogic::getInstance()->getCardValue($maxCard) != GameLogic::getInstance()->getCardValue($data['cards']['0'])) {
					$res['outaction'] = false;
					$res['errortype'] = 1;
					$res['errordesc'] = "out card value error";
					$this->sendMsgToUser($uid,GR_GAME_OUT_CARD_REG,$res);
					return;
				}
			}
		}
		//出牌
		if($data['code'] == 1 && sizeof($data['cards'])>0){
			GameLogic::getInstance()->sortCards($data['cards']);
			//主动出牌
			if($this->m_curOutCardType){
				if ($this->m_firstState) {
					if (!in_array(0x03, $data['cards'])) {
						$res['outaction'] = false;
						$res['errortype'] = 1;
						$res['errordesc'] = "out card value error";
						$this->sendMsgToUser($uid,GR_GAME_OUT_CARD_REG,$res);
						return;
					}
				}

				if(!$type && GameLogic::getInstance()->getCardsType($data['cards']) == 0){
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

						$this->m_firstState = false;
							//出牌数据
						$res['outaction'] = true;
						$res['errortype'] = 0;
						$res['errordesc'] = "success";
						$res['seatno'] = $this->m_curOutCardSeatno;
						$res['canout'] = true;//有牌出
						$res['outcardsdata'] = $data['cards'];
						$res['cardtype'] = GameLogic::getInstance()->getCardsType($data['cards']);
						if ($res['cardtype'] == TP_BOMB || $res['cardtype'] == TP_KINGBOMB) {
							foreach ($this->m_deskData as $seatno => $info) {
								if ($this->m_curOutCardSeatno != $seatno) {
									$this->m_preBomb[$seatno]--;
									$this->m_preBomb[$this->m_curOutCardSeatno]++;
								}
							}
						}

						$this->delOutCardsInHandCards($this->m_curOutCardSeatno,$data['cards']);
						$res['lastcount'] = sizeof($this->m_deskData[$this->m_curOutCardSeatno]['cards']); 
						$res['handcards'] = $this->m_deskData[$this->m_curOutCardSeatno]['cards'];

						$this->saveGameMessage(4,$res);
						$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$res);
						if ($res['lastcount'] == 1) {
							$this->m_callpoliceState[$res['seatno']] = true;
						}
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

							//出牌数据
						$res['outaction'] = true;
						$res['errortype'] = 0;
						$res['errordesc'] = "success";
						$res['seatno'] = $this->m_curOutCardSeatno;
						$res['canout'] = true;//有牌出
						$res['outcardsdata'] = $data['cards'];
						$res['cardtype'] = GameLogic::getInstance()->getCardsType($data['cards']);

						if ($res['cardtype'] == TP_BOMB || $res['cardtype'] == TP_KINGBOMB) {
							foreach ($this->m_deskData as $seatno => $info) {
								if ($this->m_curOutCardSeatno != $seatno) {
									$this->m_preBomb[$this->m_curOutCardSeatno]++;
									$this->m_preBomb[$seatno]--;
								}
							}
						}

						$this->delOutCardsInHandCards($this->m_curOutCardSeatno,$data['cards']);
						$res['lastcount'] = sizeof($this->m_deskData[$this->m_curOutCardSeatno]['cards']); 
						$res['handcards'] = $this->m_deskData[$this->m_curOutCardSeatno]['cards'];

						$this->saveGameMessage(4,$res);
						$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$res);
						if ($res['lastcount'] == 1) {
							$this->m_callpoliceState[$res['seatno']] = true;
						}
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
		}
		// else if($data['code'] == 0){
		// 	if($this->m_curOutCardType)return;

		// 	//要不起
		// 	$res['outaction'] = true;
		// 	$res['errortype'] = 0;
		// 	$res['errordesc'] = "success";
		// 	$res['seatno'] = $this->m_curOutCardSeatno;
		// 	$res['canout'] = false;
		// 	$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$res);

		// 	if($this->m_curOutCardSeatno==3){
		// 		$this->m_curOutCardSeatno = 1;
		// 	}else{
		// 		$this->m_curOutCardSeatno++;
		// 	}
		// 	$this->outCards(false);
		// }
		else{
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
		//要不起
		$data['outaction'] = true;
		$data['errortype'] = 0;
		$data['errordesc'] = "success";
		$data['seatno'] = $this->m_curOutCardSeatno;
		$data['canout'] = false;//要不起
		$this->saveGameMessage(4,$data);
		$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$data);

		if($this->m_curOutCardSeatno==3){
			$this->m_curOutCardSeatno = 1;
		}else{
			$this->m_curOutCardSeatno++;
		}
		$this->outCards(false);
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

		$this->m_curbankerNo = $winSeatno;
		$time = 2;
		foreach ($this->m_deskData as $seatno => $info) {
			$this->m_compareDataResult['springtag'][$seatno] = false;
	    	if($winSeatno != $seatno){
	    		$curScore = count($info['cards']);
	    		if ($curScore == 1) {
	    			$curScore = 0;
	    		}else if($curScore == 16){
	    			$this->m_compareDataResult['springtag'][$seatno] = true;
	    			$time++;
	    			$curScore *= 2;
	    		}
	    		$this->m_compareDataResult['score'][$winSeatno] += $curScore;
	    		$this->m_compareDataResult['cardsScore'][$winSeatno] += $curScore;
	    		$this->m_compareDataResult['score'][$seatno] -= $curScore;
	    		$this->m_compareDataResult['cardsScore'][$seatno] -= $curScore;
	    	}
	    	$this->m_compareDataResult['score'][$seatno] += $this->m_preBomb[$seatno] * 10;
	    	$this->m_compareDataResult['bombScore'][$seatno] += $this->m_preBomb[$seatno] * 10;
	    	$this->m_compareDataResult['handcards'][$seatno] = $info['cards'];
	    }
	    $this->saveGameMessage(5,$this->m_compareDataResult);
	    $this->sendRoomMessage(GR_GAMEEND,$this->m_compareDataResult);
	    //开始定时器
		$this->addTimeClick(CLICK_NAME_END,$time,array($this,'gameEndCallBack'),array());
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
						$data['inserttime'] = time();
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
		//下一局
		$this->checkStart();	
	}


}