<?php
/**
 * @property  斗地主 房间
 */

require_once __DIR__ . '/GameManager.php';
require_once __DIR__ . '/PlayerManager.php';
require_once __DIR__ . '/SifuCardsGameLogic.php';
require_once __DIR__ . '/../base/BaseRoom.php';

use Workerman\Lib\Timer;
class GameRoom extends BaseRoom
{

	//房间状态



	//当前房间的庄家
	private $m_curbankerNo = -1;
	private $m_lastWinSeatno = -1;
	//麻雀座位号
	private $m_sparrowSeatno = -1;

	//当前局的牌数据
	private $m_curJuCardsData = array();

	//当前出牌的玩家；
	private $m_curOutCardSeatno = -1;
	//当前出牌的类型 主动/被动
	private $m_curOutCardType = true;
	//当前出牌玩家的数据状态
	private $m_curOutCardMsgData = array();
	//上一轮出牌的数据
	private $m_preOutCardSeatno = -1;
	private $m_preOutCardData = array();

	//这一轮牌桌的分数
	private $m_deskScore = 0;
	//当局每个人的牌数
	private $m_cardsSeatnoScore = array();
	//当局贡献分分数
	private $m_contributionScore = array();
	//当局贡献纪录
	private $m_contributionSeatno = array();
	//当局贡献次数
	private $m_contributionCount = array();
	//单局结算数据
	private $m_compareDataResult = array();
	//上个出完牌的人
	private $m_lastOutCards = 0;
	//不洗牌的纪录
	private $m_outCardsRecord = array();

	//总结算数据
	public $m_winCount = array();
	public $m_loseCount = array();
	public $m_maxScoreCount = array();
	public $m_KingBombCount = array();
	public $m_sevenBombCount = array();

	public function __construct($userid,$pwd, $rule)
	{
		parent::__construct($userid,$pwd, $rule);

		//$this->m_bankerList = array();
		for ($i=0; $i <= 4; $i++) { 
			$this->m_winCount[$i] = 0;
			$this->m_loseCount[$i] = 0;
			$this->m_maxScoreCount[$i] = 0;
			$this->m_KingBombCount[$i] = 0;
			$this->m_sevenBombCount[$i] = 0;
		}
	}


	//====================================================================================================
	//----------------获取房间数据------------------------------------------------------------
	public function getRoomData(){

		$roomData['roomstatus'] = $this->m_roomStatus;
		$roomData['gamestatus'] = $this->m_gameStatus;
		foreach ($this->m_roomClickValue as $name => $value) {
			if ($name == CLICK_NAME_MAX_LIFE || $name == CLICK_NAME_UPDATE) {
				continue;
			}
			$roomData['click']['name'] = $name;
			$roomData['click']['value'] = $value;
		}
		$roomData['roomowner'] = $this->m_roomOwner;
		$roomData['roompwd'] = $this->m_roomPwd;
		$roomData['roomownernick'] = isset($this->m_playerList[$this->m_roomOwner])?$this->m_playerList[$this->m_roomOwner]['nickname']:"";
		$roomData['playGround'] = $this->m_playGround;
		$roomData['rule'] = $this->m_roomRule;
		$roomData['playerlist'] = $this->m_playerList;
		$roomData['deskdata'] = $this->m_deskData;
		$roomData['comparedata']  = $this->m_compareDataResult;
		//解散数据
		$roomData['waittingdismiss'] = $this->m_waittingDismiss;
		$roomData['dismissData'] = $this->m_dismissData;
		$roomData['dismissMark'] = $this->m_dismissMark;

		$roomData['deskScore'] = $this->m_deskScore;
		$roomData['cardsSeatnoScore'] = $this->m_cardsSeatnoScore;
		$roomData['contributionScore'] = $this->m_contributionCount;

		//当前出牌的玩家；
		 $roomData['curoutcardseatno'] = $this->m_curOutCardSeatno;
		//当前出牌的类型 主动/被动
		 $roomData['curoutcardtype'] = $this->m_curOutCardType;
		//当前出牌玩家的数据状态
		 $roomData['curoutcardmsgdata'] = $this->m_curOutCardMsgData;
		//上一轮出牌的数据
		 $roomData['preoutcardseatno'] = $this->m_preOutCardSeatno;
		 $roomData['preoutcarddata'] = $this->m_preOutCardData;
		 $roomData['preoutcardline'] = GameLogic::getInstance()->getBombLine($this->m_preOutCardData);
	
		return $roomData;
	}


	//====================================================================================================
	//----------------------------------------房间逻辑-----------------------------------------------------
	//code 1/2 准备/明牌准备
	public function gameReady($uid){
			if($this->m_gameStatus == self::GAMESTATE_READY){
				foreach ($this->m_deskData as $seatno => $info) {
					if($info['uid'] == $uid){
						if(!$info['ready']){
							$this->m_deskData[$seatno]['ready'] = true;

							$data['seatno'] = $seatno;
							$data['uid'] = $info['uid'];
							$this->sendRoomMessage(GR_GAMEREADYRESULT,$data);

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

		if ($this->m_playGround == 0) {
			foreach ($this->m_deskData as $seatno => $info) {
				if ($this->m_playerList[$this->m_deskData[$seatno]['uid']]['online'] == 0) {
					return;
				}
			}
		}
		
		$readyCount = 0;
		foreach ($this->m_deskData as $seatno => $info) {
			if($info['ready']){
				$readyCount++;
			}
		}

		// if($this->m_playGround == 0){
			if ($this->m_roomRule['peoplecount'] == $readyCount) {
				$this->gameBegin();
			}
		// }else if(sizeof($this->m_deskData) == $readyCount){
		// 	$this->gameBegin();
		// }

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

		

		$this->m_curbankerNo = -1;
		$this->m_curOutCardSeatno = -1;
		//当前出牌的类型 主动/被动
		$this->m_curOutCardType = true;
		//上一轮出牌的数据
		$this->m_preOutCardSeatno = -1;
		$this->m_preOutCardData = array();

		$this->m_deskScore = 0;
		$this->saveRoomMessage();
		//------清除作为数据------------
		foreach ($this->m_deskData as $seatno => $info) {
			$this->m_deskData[$seatno]['cards'] = array();
			$this->m_deskData[$seatno]['isbanker'] = false;
			$this->m_deskData[$seatno]['abandoncards'] = false;
			$this->m_deskData[$seatno]['ready'] = true;
			$this->m_deskData[$seatno]['outCardsEnd'] = 0;

			$this->m_contributionScore[$seatno] = 0;
			$this->m_contributionCount[$seatno] = 0;
			$this->m_contributionSeatno[$seatno] = array();
			$this->m_cardsSeatnoScore[$seatno] = 0;
		}
		if ($this->m_roomRule['sparrow'] == 1) {
			//随机一个麻雀
			srand ((float)microtime()*1000000*(GameManager::$_workerId+1));
			$this->m_sparrowSeatno = rand(1,4);
			$this->m_deskData[$this->m_sparrowSeatno]['isbanker'] = true;
		}
		//=======================================================

		//发牌
		$this->gameSendCard();
	}

	public function gameSendCard(){
		$this->m_gameStatus = self::GAMESTATE_SENDCARDS;
		$this->destoryClick(CLICK_NAME_SEND_CARD);
		//开始定时器
		$this->addTimeClick(CLICK_NAME_SEND_CARD,CLICK_VALUE_SEND_CARD,array($this,'sendCardsCallBack'),array());

		//发牌消息
		$cardData = GameLogic::getInstance()->createCards($this->m_roomRule,$this->m_outCardsRecord,$this->m_controlList,$this->m_playGround);

		$this->m_curJuCardsData = $cardData;
		foreach ($this->m_deskData as $seatno => $info) { 
			$this->m_deskData[$seatno]['cards'] = $cardData[$seatno];
		}
		//发牌
		$this->m_outCardsRecord = array();
		$this->saveGameMessage(1,$this->m_deskData);
		$this->sendRoomMessage(GR_GAME_SEND_CARDS,$this->m_deskData);

	}

	public function sendCardsCallBack()
	{
		if($this->m_gameStatus == self::GAMESTATE_OUTCARDS)return ;
		$this->m_gameStatus = self::GAMESTATE_OUTCARDS;
		$this->findBanker();
		$this->peopleTurn();
		$this->outCards();
	}
	//======================出牌顺序相关逻辑==============================

	public function findBanker()
	{
		if ($this->m_lastWinSeatno == -1) {
			foreach ($this->m_playerList as $uid => $info) {
				if ($uid == $this->m_roomOwner) {
					$this->m_curbankerNo = $info['seatno'];
				}
			}
		}else{
			$this->m_curbankerNo = $this->m_lastWinSeatno;
		}
	}

	public function peopleTurn()
	{
		if ($this->m_curOutCardSeatno == -1) {
			$this->m_curOutCardSeatno = $this->m_curbankerNo;
			if ($this->m_curOutCardSeatno == -1 || $this->m_curOutCardSeatno == 0) {
				$this->m_curOutCardSeatno = 1;
			}
			$this->m_curOutCardType = true;
		}else{
			$activeCards = 0;
			$endPeople = 0;
			$notAbandonSeatno = -1;
			$lastSeatnoGetScore = true;
			foreach ($this->m_deskData as $seatno => $info) {
				if ($this->m_deskData[$seatno]['outCardsEnd'] != 0) {
					$endPeople++;
				}
				if ($info['abandoncards'] == false) {
					if ($this->m_deskData[$seatno]['outCardsEnd'] == 0) {
						$notAbandonSeatno = $seatno;
					}
				}else{
					$activeCards++;
				}
				if ($this->m_deskData[$seatno]['outCardsEnd'] == 0 && $info['abandoncards'] == false) {
					$lastSeatnoGetScore = false;
				}
			}
			if ($this->m_lastOutCards != 0) {
				$this->m_curOutCardType = $lastSeatnoGetScore;
			}else{
				$this->m_curOutCardType = ($activeCards == ($this->m_roomRule['peoplecount'] - 1 - $endPeople))?true:false;
			}
			if ($this->m_curOutCardType) {
				if ($lastSeatnoGetScore) {
					$this->m_cardsSeatnoScore[$this->m_lastOutCards] += $this->m_deskScore;
					$this->m_curOutCardSeatno = $this->m_lastOutCards;
					$this->m_lastOutCards = 0;
				}else{
					$this->m_cardsSeatnoScore[$notAbandonSeatno] += $this->m_deskScore;
					$this->m_curOutCardSeatno = $notAbandonSeatno;
				}
				$this->m_deskScore = 0;	
				foreach ($this->m_deskData as $seatno => $info) {
					$this->m_deskData[$seatno]['abandoncards'] = false;
				}
				if ($this->m_deskData[$this->m_curOutCardSeatno]['outCardsEnd'] != 0) {
					$this->findNextOutCards();
				}
			}else{
				$this->findNextOutCards();
			}
		}
	}

	public function findNextOutCards()
	{
		$this->m_curOutCardSeatno++;
		if ($this->m_curOutCardSeatno > $this->m_roomRule['peoplecount']) {
			$this->m_curOutCardSeatno = 1;
		}
		if ($this->m_deskData[$this->m_curOutCardSeatno]['abandoncards']) {
			$this->findNextOutCards();
		}
		if ($this->m_deskData[$this->m_curOutCardSeatno]['outCardsEnd'] != 0) {
			$this->findNextOutCards();
		}
	}
	//======================分数计算==============================

	public function bombScore($cards,&$linedata)
	{
		if (($cards['cardtype'] == TP_BOMB || $cards['cardtype'] == TP_KINGBOMB) && $cards['cardline'] > 6) {

			$this->m_contributionSeatno[$cards['seatno']][] = $cards['cardline'];
			$lineScore = ($cards['cardline'] - 6) * 30;
			if ($cards['cardtype'] == TP_KINGBOMB) {
				$this->m_KingBombCount[$cards['seatno']]++;
			}
			if ($cards['cardline'] >= 7) {
				$this->m_sevenBombCount[$cards['seatno']]++;
			}

			if ($this->m_roomRule['sparrow'] == 1) {
				foreach ($this->m_contributionScore as $seatno => $score) {
					if ($cards['seatno'] == $this->m_sparrowSeatno) {
						if ($seatno == $cards['seatno']) {
							$this->m_contributionSeatno[$seatno][] = $cards['cardline'];
							$this->m_contributionCount[$seatno] += ($cards['cardline'] - 6);
							$linedata[$seatno] = $lineScore * ($this->m_roomRule['peoplecount'] - 1) * 2;
							$this->m_contributionScore[$seatno] += $lineScore * ($this->m_roomRule['peoplecount'] - 1) * 2;
						}else{
							$linedata[$seatno] = $lineScore * -2;
							$this->m_contributionScore[$seatno] += $lineScore * -2;
						}
					}else{
						if ($seatno == $cards['seatno']) {
							$this->m_contributionSeatno[$seatno][] = $cards['cardline'];
							$this->m_contributionCount[$seatno] += ($cards['cardline'] - 6);
							$linedata[$seatno] = $lineScore * $this->m_roomRule['peoplecount'];
							$this->m_contributionScore[$seatno] += $lineScore * $this->m_roomRule['peoplecount'];
						}else if($seatno == $this->m_sparrowSeatno){
							$linedata[$seatno] = $lineScore * -2;
							$this->m_contributionScore[$seatno] += $lineScore * -2;
						}else{
							$linedata[$seatno] = $lineScore * -1;
							$this->m_contributionScore[$seatno] += $lineScore * -1;
						}
					}
					
				}
			}else if ($this->m_roomRule['sparrow'] == 0) {
				foreach ($this->m_contributionScore as $seatno => $score) {
					if ($seatno == $cards['seatno']) {
						$this->m_contributionSeatno[$seatno][] = $cards['cardline'];
						$this->m_contributionCount[$seatno] += ($cards['cardline'] - 6);
						$linedata[$seatno] = $lineScore * ($this->m_roomRule['peoplecount'] - 1);
						$this->m_contributionScore[$seatno] += $lineScore * ($this->m_roomRule['peoplecount'] - 1);
					}else{
						$linedata[$seatno] = $lineScore * -1;
						$this->m_contributionScore[$seatno] += $lineScore * -1;
					}
				}
			}
			
			return true;
		}
		return false;
	}

	public function cardsScore($cards)
	{
		$cardsValue = GameLogic::getInstance()->getCardValue($cards['outcardsdata'][0]);
		$cardsCount = count($cards['outcardsdata']);
		if ($cardsValue == 5) {
			$this->m_deskScore += 5 * $cardsCount;
		}else if($cardsValue == 10 || $cardsValue == 13){
			$this->m_deskScore += 10 * $cardsCount;
		}
	}

	//======================出牌==============================

	// true/false 主动出牌/被动出牌
	public function outCards(){
		$this->destoryClick(CLICK_NAME_OUT_CARD);
		$data['seatno'] = $this->m_curOutCardSeatno;
		$data['time'] = CLICK_VALUE_OUT_CARD;
		$data['outtype'] = $this->m_curOutCardType;

		if(!$data['outtype']){
			$data['cardsarr'] = array();
			$data['ishavecards'] = GameLogic::getInstance()->getCardsListGt($this->m_deskData[$this->m_curOutCardSeatno]['cards'],$this->m_preOutCardData,$data['cardsarr']);

            $cnt = count($data['cardsarr']);
            for ($i = 0; $i < $cnt - 1; $i++) {
                for ($j = 0; $j < $cnt - $i - 1; $j++) {
                    $res = GameLogic::getInstance()->compareCards($data['cardsarr'][$j],$data['cardsarr'][$j + 1]);
                    if ($res == 1) {
                        $temp = $data['cardsarr'][$j];
                        $data['cardsarr'][$j] = $data['cardsarr'][$j + 1];
                        $data['cardsarr'][$j + 1] = $temp;
                    }
                }
            }
		}else{
			$data['cardsarr'] = GameLogic::getInstance()->getAllCardsList($this->m_deskData[$this->m_curOutCardSeatno]['cards']);
			$data['ishavecards'] = true;
		}
		//记录数据，用于断线重连回复数据
		$this->m_curOutCardMsgData = $data;
		$this->saveGameMessage(2,$data);
		if ($data['outtype'] == false && isset($data['ishavecards']) && $data['ishavecards'] == false) {
			$this->sendRoomMessage(GR_GAME_OUT_CARD,$data);
			$this->addTimeClick(CLICK_NAME_OUT_CARD_WAIT,CLICK_VALUE_OUT_CARD_WAIT,array($this,'cannotOutCard'),array());
		}else{
			$this->m_lastOutCards = 0;
			//开始定时器
			$this->addTimeClick(CLICK_NAME_OUT_CARD,CLICK_VALUE_OUT_CARD,array($this,'mustOutCardAction'),array());
			$this->sendRoomMessage(GR_GAME_OUT_CARD,$data);
		}
		
	}
	public function cannotOutCard()
	{
		$this->m_deskData[$this->m_curOutCardSeatno]['abandoncards'] = true;
		$this->peopleTurn();
		$this->outCards();
	}
	//玩家出牌的时候，验证出的牌数据
	private function checkOutCardsData($cards){
		//验证被动出牌的牌是否大于上家
		if (!$this->m_curOutCardType) {
			return GameLogic::getInstance()->compareCards($cards,$this->m_preOutCardData);
		}
		return 2;
	}
	//玩家出牌的时候，验证有没有拆牌
	public function checkOutCardsSplit($cards)
	{
		return GameLogic::getInstance()->AnalysisSplitCards($cards,$this->m_deskData[$this->m_curOutCardSeatno]['cards']);
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
		if(sizeof($data['cards'])>0){

			//主动出牌
			if($this->m_curOutCardType){
				if(GameLogic::getInstance()->getCardsType($data['cards']) == 0 && !$this->checkOutCardsSplit($cards)){
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
							//出牌数据
						$res['outaction'] = true;
						$res['errortype'] = 0;
						$res['errordesc'] = "success";
						$res['seatno'] = $this->m_curOutCardSeatno;
						$res['canout'] = true;//有牌出
						$res['outcardsdata'] = $data['cards'];
						$res['cardtype'] = GameLogic::getInstance()->getCardsType($data['cards']);
						$res['cardline'] = GameLogic::getInstance()->getBombLine($data['cards']);

						$this->cardsScore($res);
						
						$res['deskscore'] = $this->m_deskScore;
						$linedata = array();
						if ($this->bombScore($res,$linedata)) {
							$res['contributionscore'] = $this->m_contributionCount;
						}else{
							$res['contributionscore'] = $this->m_contributionCount;
						}
						$res['linescore'] = $linedata;
						$res['cardsScore'] = $this->m_cardsSeatnoScore;

						$this->delOutCardsInHandCards($this->m_curOutCardSeatno,$data['cards']);
						$res['lastcount'] = sizeof($this->m_deskData[$this->m_curOutCardSeatno]['cards']); 
						$res['handcards'] = $this->m_deskData[$this->m_curOutCardSeatno]['cards'];
						$this->saveGameMessage(3,$res);
						$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$res);

						$this->m_outCardsRecord = array_merge($this->m_outCardsRecord,array($data['cards']));
						if($res['lastcount'] == 0){
							$this->m_preOutCardData = $data['cards'];
							$this->gameOutCardsEnd($this->m_curOutCardSeatno);
						}else{
							$this->m_preOutCardSeatno = $this->m_curOutCardSeatno;
							$this->m_preOutCardData = $data['cards'];

							$this->peopleTurn();
							$this->outCards();
						}
				}
			//被动出牌
			}else{
				$compareTag = $this->checkOutCardsData($data['cards']);
				if(GameLogic::getInstance()->getCardsType($data['cards']) == 0 && !$this->checkOutCardsSplit($cards)){
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
						$res['cardline'] = GameLogic::getInstance()->getBombLine($data['cards']);
						$this->cardsScore($res);
						
						$res['deskscore'] = $this->m_deskScore;
						$linedata = array();
						if ($this->bombScore($res,$linedata)) {
							$res['contributionscore'] = $this->m_contributionCount;
						}else{
							$res['contributionscore'] = $this->m_contributionCount;
						}
						$res['linescore'] = $linedata;
						$res['cardsScore'] = $this->m_cardsSeatnoScore;

						$this->delOutCardsInHandCards($this->m_curOutCardSeatno,$data['cards']);
						$res['lastcount'] = sizeof($this->m_deskData[$this->m_curOutCardSeatno]['cards']); 
						$res['handcards'] = $this->m_deskData[$this->m_curOutCardSeatno]['cards'];

						$this->saveGameMessage(3,$res);
						$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$res);

						$this->m_outCardsRecord = array_merge($this->m_outCardsRecord,array($data['cards']));
						if($res['lastcount'] == 0){
							$this->m_preOutCardData = $data['cards'];
							$this->gameOutCardsEnd($this->m_curOutCardSeatno);
						}else{
							$this->m_preOutCardSeatno = $this->m_curOutCardSeatno;
							$this->m_preOutCardData = $data['cards'];

							$this->peopleTurn();
							$this->outCards();
						}
				}

			}

		}else{
			echo "outcard action error\n";
			var_dump($data);
		}
		
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
		// return;
		if($this->m_curOutCardType){

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
			$data['cardline'] = GameLogic::getInstance()->getBombLine($data['outcardsdata']);
			//$data['lastcount'] = $this->delOutCardsInHandCards($this->m_curOutCardSeatno,$outCardsData);

			$this->cardsScore($data);
			
			$data['deskscore'] = $this->m_deskScore;
			$linedata = array();
			if ($this->bombScore($data,$linedata)) {
				$data['contributionscore'] = $this->m_contributionScore;
			}else{
				$data['contributionscore'] = $this->m_contributionScore;
			}

			$this->delOutCardsInHandCards($this->m_curOutCardSeatno,$outCardsData[0]);
			$data['lastcount'] = sizeof($this->m_deskData[$this->m_curOutCardSeatno]['cards']); 
			$data['handcards'] = $this->m_deskData[$this->m_curOutCardSeatno]['cards'];
			$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$data);

			$this->m_outCardsRecord = array_merge($this->m_outCardsRecord,array($data['outcardsdata']));
			if($data['lastcount'] == 0){
				$this->gameOutCardsEnd($this->m_curOutCardSeatno);
			}else{
				$this->m_preOutCardSeatno = $this->m_curOutCardSeatno;
				$this->m_preOutCardData = $data['outcardsdata'];
				$this->peopleTurn();
				$this->outCards();
			}

		//被动出牌
		}else{
			$outCardsData = array();
			$isHave = GameLogic::getInstance()->getCardsListGt($this->m_deskData[$this->m_curOutCardSeatno]['cards'],$this->m_preOutCardData,$outCardsData);


			if($isHave){
				//出牌数据
				$data['outaction'] = true;
				$data['errortype'] = 0;
				$data['errordesc'] = "success";
				$data['seatno'] = $this->m_curOutCardSeatno;
				$data['canout'] = true;//有牌出
				$data['outcardsdata'] = $outCardsData[0];
				$data['cardtype'] = GameLogic::getInstance()->getCardsType($outCardsData[0]);
				$data['cardline'] = GameLogic::getInstance()->getBombLine($data['outcardsdata']);
				//$data['lastcount'] = $this->delOutCardsInHandCards($this->m_curOutCardSeatno,$outCardsData);

				$this->cardsScore($data);
			
				$data['deskscore'] = $this->m_deskScore;
				$linedata = array();
				if ($this->bombScore($data,$linedata)) {
					$data['contributionscore'] = $this->m_contributionScore;
				}else{
					$data['contributionscore'] = $this->m_contributionScore;
				}
				$this->delOutCardsInHandCards($this->m_curOutCardSeatno,$outCardsData[0]);
				$data['lastcount'] = sizeof($this->m_deskData[$this->m_curOutCardSeatno]['cards']); 
				$data['handcards'] = $this->m_deskData[$this->m_curOutCardSeatno]['cards'];
				$this->sendRoomMessage(GR_GAME_OUT_CARD_REG,$data);

				$this->m_outCardsRecord = array_merge($this->m_outCardsRecord,array($data['outcardsdata']));
				if($data['lastcount'] == 0){
					$this->gameOutCardsEnd($this->m_curOutCardSeatno);
				}else{
					$this->m_preOutCardSeatno = $this->m_curOutCardSeatno;
					$this->m_preOutCardData = $data['outcardsdata'];
					$this->peopleTurn();
					$this->outCards();
				}
			}
		}
	}

	//删除手牌中出牌数据
	//return 手牌的数量
	public function delOutCardsInHandCards($seatno,$cardsData){
		 $handcards = $this->m_deskData[$seatno]['cards'];
		 $cardNewValue = $cardsData;
        for ($i=0; $i < sizeof($cardNewValue); $i++) { 
        	GameLogic::getInstance()->initIndex($handcards);
            foreach ($handcards as $key => $value) {
                 if ($value == $cardNewValue[$i]) {
                     unset($handcards[$key]);
                     $isDelete = true;
                     break;
                }
            }
        }
        $handcards = GameLogic::getInstance()->arrangementCards($handcards);  
        $this->m_deskData[$seatno]['cards'] = $handcards;
	}



	public function gameOutCardsEnd($seatno)
	{
		$this->destoryClick(CLICK_NAME_OUT_CARD);
		$outCardsEndPeople = 1;
		foreach ($this->m_deskData as $seat => $info) {
			if ($info['outCardsEnd'] == 0 && count($this->m_deskData[$seat]['cards']) == 0) {
				$seatno = $seat;
			}
			if ($info['outCardsEnd'] != 0) {
				$outCardsEndPeople++;
			}else if($info['outCardsEnd'] == 0 && count($this->m_deskData[$seat]['cards']) != 0){
				$notEndPeople = $seat;
			}
			if ($info['outCardsEnd'] == 1) {
				$firstSeatno = $seat;
			}
		}
		$this->m_deskData[$seatno]['outCardsEnd'] = $outCardsEndPeople;		
		if ($outCardsEndPeople == 1) {
			$firstSeatno = $seatno;
		}
		if ($outCardsEndPeople == $this->m_roomRule['peoplecount'] - 1) {
			$this->m_cardsSeatnoScore[$seatno] += $this->m_deskScore;
			$this->m_deskScore = 0;
			$this->m_deskData[$notEndPeople]['outCardsEnd'] = $outCardsEndPeople + 1;
			$this->gameEnd($firstSeatno,$notEndPeople);
		}else{
			$data['seatno'] = $seatno;
			$data['outCardsEndNum'] = $outCardsEndPeople;
			$this->m_lastOutCards = $seatno; 
			$this->saveGameMessage(4,$data);
			$this->sendRoomMessage(GR_GAME_PEOPLE_END,$data);
			$this->peopleTurn();
			$this->outCards();
		}
	}

	public function gameEnd($firstSeatno,$lastSeatno){
		$this->destoryClick(CLICK_NAME_OUT_CARD);
		$this->m_gameStatus = self::GAMESTATE_END;
		//开始定时器
		$this->addTimeClick(CLICK_NAME_END,CLICK_VALUE_END,array($this,'gameEndCallBack'),array());
		
		$this->m_outCardsRecord = array_merge($this->m_outCardsRecord,array($this->m_deskData[$lastSeatno]['cards']));

		if ($this->m_roomRule['aloneReward'] == 1) {
			$aloneReward = 0;
			foreach ($this->m_contributionSeatno as $seatno => $value) {
				if (count($this->m_contributionSeatno[$seatno]) != 0) {
					$aloneReward++;
				}
			}
			if ($aloneReward == 1) {
				foreach ($this->m_contributionSeatno as $seatno => $value) {
					$this->m_contributionScore[$seatno] *= 2;
				}
			}
		}
		$surplusScore = GameLogic::getInstance()->findSurplusScore($this->m_deskData[$lastSeatno]['cards']);
		$this->m_cardsSeatnoScore[$firstSeatno] += $surplusScore;
		$maxScore = -999;
		foreach ($this->m_deskData as $seatno => $info) {
			if ($seatno == $firstSeatno) {
				$this->m_compareDataResult['score'][$seatno] = $this->m_contributionScore[$seatno] + $this->m_cardsSeatnoScore[$seatno] + 30 -100;
			}else if ($seatno == $lastSeatno) {
				$this->m_compareDataResult['score'][$seatno] = $this->m_contributionScore[$seatno] + $this->m_cardsSeatnoScore[$seatno] - 30 -100;
			}else{
				$this->m_compareDataResult['score'][$seatno] = $this->m_contributionScore[$seatno] + $this->m_cardsSeatnoScore[$seatno] -100;
			}
			if ($maxScore < $this->m_compareDataResult['score'][$seatno]) {
				$maxSeatno = $seatno;
				$maxScore = $this->m_compareDataResult['score'][$seatno];
			}else if ($maxScore == $this->m_compareDataResult['score'][$seatno]) {
				if ($this->m_deskData[$maxSeatno]['outCardsEnd'] > $this->m_deskData[$seatno]['outCardsEnd']) {
					$maxSeatno = $seatno;
				}
			}
			if ($this->m_compareDataResult['score'][$seatno] >= 0) {
				$this->m_winCount[$seatno]++;
			}else{
				$this->m_loseCount[$seatno]++;
			}
		}
		$this->m_lastWinSeatno = $firstSeatno;
		$this->m_maxScoreCount[$maxSeatno]++;
		$alldata = array();
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
							$alldata[$seatno]['allScore'] = $this->m_playerList[$uid]['score'];
							$alldata[$seatno]['nickname'] = $this->m_playerList[$uid]['nickname'];
							$alldata[$seatno]['headurl'] = $this->m_playerList[$uid]['headurl'];
							$alldata[$seatno]['uid'] = $uid;
							$alldata[$seatno]['cards'] = $this->m_deskData[$seatno]['cards']; 
							break;
						}
					}
					break;
				}
			}
		}
		foreach ($this->m_deskData as $seatno => $info) {
			$alldata[$seatno]['cardsScore'] = $this->m_cardsSeatnoScore[$seatno];
			$alldata[$seatno]['contributionScore'] = $this->m_contributionScore[$seatno];
			$alldata[$seatno]['curScore'] = $this->m_compareDataResult['score'][$seatno];
			$alldata[$seatno]['outCardsEnd'] = $this->m_deskData[$seatno]['outCardsEnd'];
		}
		$this->saveGameMessage(5,$alldata);
		$this->sendRoomMessage(GR_GAMEEND,$alldata);

	}

	public function gameEndCallBack(){
		$this->destoryClick(CLICK_NAME_END);
		$this->m_roomStatus = self::STATE_NONE;
		$this->m_gameStatus = self::GAMESTATE_READY;

		foreach ($this->m_deskData as $seatno => $info) {
			$this->m_deskData[$seatno]['ready'] = false;
		}
		// $this->sendRoomMessage(GR_GAMEREADY,array());
			
		//开始下一局之前清理断线玩家
		//$this->clearOfflinePlayer();

		//下一局
		$this->checkStart();	
	}

}
