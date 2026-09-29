<?php
/**
 * @property  十三水 房间
 */

require_once __DIR__ . '/GameManager.php';
require_once __DIR__ . '/PlayerManager.php';
require_once __DIR__ . '/HappyMajongGameLogic.php';
require_once __DIR__ . '/../base/BaseRoom.php';

use Workerman\Lib\Timer;
class GameRoom extends BaseRoom
{

	//房间状态
	const STATE_NONE = 0;
	const STATE_WAITTING = 1;
	const STATE_PLAYING = 2;
	const STATE_END = 3;
	const STATE_GAMEOVER = 4;

	const GAMESTATE_NONE = 0;
	const GAMESTATE_READY = 1;
	const GAMESTATE_BEGIN = 2;
	const GAMESTATE_OUT = 3;
	const GAMESTATE_SEND = 4;
	const GAMESTATE_OPERATE = 5;
	const GAMESTATE_COMPARE = 6;
	const GAMESTATE_END = 7;

	//校验类型
	const EstimatKind_outCard = 1;
	const EstimatKind_GangCard = 2;

	//游戏状态
	private $m_gameStatus;

	//==================以下为游戏中数据=======================

	
	private $m_cbSiceCount = array();			//骰子数据，根据游戏需求，自定义游戏骰子的个数
	private $m_wBankerUser;						//庄家座位号
	private $m_cbCardIndex = array();			//4个MAX_INDEX长度的二维数组，用于存储玩家手牌数据
	private $m_bTrustee = array();				//是否托管，4个长度的BOOL

	//出牌数据
	private $m_wOutCardUser;					//出牌玩家的座位号
	private $m_cbOutCardData;					//出牌的麻将
	private $m_cbDiscardCard = array();			//已经打出的牌的记录，4个纬度的二维数组
	private $m_cbDiscardCardOndesk = array();			//牌桌显示的牌，4个纬度的二维数组

	//发牌数据
	private $m_cbSendCardData;					//发牌的麻将
	private $m_cbLeftCardCount;					//牌池剩余的牌数目
	private $m_cbLeftCard;						//牌池剩余的牌
	private $m_cbSendCardCount;					//发出的牌的数目

	//运行数据
	private $m_wResumeUser;						//当前还原的用户
	private $m_wCurrentUser;					//当前用户
	private $m_wProvideUser;					//供应用户
	private $m_cbProvideCard;					//供应的麻将
	private $m_OperateNotify;					//当前的动作
	private $m_cbthisCards;						//本轮摸到的牌
	// private $m_OperateResult					//当前的动作

	//状态变量
	private $m_bSendStatus;						//发牌状态
	private $m_bGangStatus;						//杠开状态
	private $m_bQiangGang;						//抢杠状态
	private $m_bBaotouStatus;					//爆头状态
	private $m_bWealthWind;						//财飘状态
	private $m_bFollowWind;						//跟飘状态
	private $m_bGangWealth;						//杠飘状态
	private $m_bWealthCards;					//."\n".'cards:'.财飘的牌
	private $m_bLastGang;						//上一轮杠
	private $m_bFalseWealthWind;				//假飘状态

	private $m_bEnjoinChiHu = array();			//禁止吃胡 size=4
	private $m_bEnjoinChiHuWinTime = array();	//禁止吃胡的分数 //在胡先不胡后的基础上 增加 胡大不胡小 size=4
	private $m_bEnjoinChiPeng = array();		//禁止吃碰 size=4

	private $m_cbPlayerCount;					//玩家人数
	private $m_cbPlayerStatus = array();		//size=4	玩家状态

	//用户状态

	private $m_bResponse = array();				//size=4 响应标志
	private $m_cbUserAction = array();			//size=4 用户动作
	private $m_cbOperateCard = array();			//size=4 操作扑克
	private $m_cbPerformAction = array();		//size=4 执行动作
	private $m_dwChiHuRight = array();			//size=4 吃胡权位

	private $m_cbWeaveItemCount = array();		//size=4 组合数目
	private $m_WeaveItemArray = array();		//size=（4个4组tagWeaveItem数据） 组合扑克

	private $m_cbChiHuCard;						//吃胡扑克
	private $m_cbContinueNT;					//连庄

	private $m_cbAllGiveRecvGang = array();		//size=4个4组int 接放杠信息	
	private $m_cbGiveRecvGang = array();		//size=4个4组int 接放杠信息	
	private $m_cbQiangGang = array();			//size=4 抢杠信息
	private $m_cbLightGang = array();			//size=4 明杠信息
	private $m_cbLightPengGang = array();		//size=4 碰后杠
	private $m_cbDarkGang = array();				//size=4 暗杠信息
	private $m_bGangFlower =array();			//size=4 杠上开花（杠完补牌自摸）

	private $m_cbNotOperate = array();			//用户不能执行的动作

	private $m_skippedDianPao = array();		//size=4，过点炮的牌（过圈清；不影响自摸）
	private $m_skippedPeng = array();			//size=4，过碰的牌（过圈清）
	private $m_skippedBuGang = array();			//size=4，过杠的牌（本局锁死，过圈也不清）
	private $m_forbidDiscard = array();			//size=4，碰后禁止打回的那张牌（-1 表示无）

	private $m_faceUp = array();				//明牌（翻屁股）数组
	private $m_forcedDeck = null;				//测试专用：指定发牌规格（null=不指定，走随机）
	private $m_faceUpUser = -1;					//当前可以选明牌的座位号
	private $m_faceUpPhase = false;				//是否处于选明牌阶段
	private $m_faceUpHuIndex = array();			//faceUp[i] 可以胡的索引数组
	private $m_gangLedger = array();			//杠分记账（胡才兑）
	private $m_paoPoints = array();				//加炮点数，size=4（玩家各自的加炮值）
	private $m_listenState = array();			//size=4，是否已听牌

	private $m_hasKong = false;					//本局是否有成功完成的杠（Redeal 判据）
	private $m_redealSeq = 0;					//同一局号的重开次数
	private $m_paoDone = array();				//size=4，本局是否已提交选炮（提交后不能改）
	private $m_paoAllDone = false;				//全员选炮完成标志
	private $m_dealerOpeningPhase = false;		//庄家开局首张阶段（DealerOpening + WaitClaim opening=true）
	private $m_openingDone = false;				//庄家开局首张处理完标志，true 后才进开局翻牌 FlipChoose
	private $m_lastDrawnTile = array();			//size=4，每位刚摸/刚选的那张牌（出牌超时打这个）
	private $m_flipContext = '';				//'OPENING' | 'AFTER_GANG'，当前 FlipChoose 的上下文
	private $m_lastHuSource = '';				//最近一次胡的来源：'ZIMO' | 'DIANPAO' | 'TIAN_HU' | 'GANG_SHANG_HUA' | 'QIANG_GANG'
	private $m_gangHuaWinnerTile = -1;			//杠后从 faceUp 选到的那张牌值，杠花触发判据
	private $m_autoPlayOn = array();			//size=4，是否进入托管（cause=TIMEOUT，碰杠胡超时不进）
	private $m_autoPlayCause = array();			//size=4，TIMEOUT | OFFLINE | LEFT | BANNED
	private $m_timeoutStreak = array();			//size=4，同一座位连续操作超时次数，>=2 才强制托管（主动操作后清零）
	private $m_pendingGangResult = null;		//抢杠窗口待完成的杠：窗口全过后由此续杠（杠家补牌/选翻）
	private $m_lastHandEndReason = '';			//上局结束原因：HU | LIU_JU | REDEAL | DISSOLVED | RECLAIMED | ALL_LEFT
	private $m_nextDealerSeat = -1;				//下局庄家座位（B3 定庄逻辑提前算好）
	private $m_countsAsHand = true;				//上一局是否计入 8 局数（Redeal false；Hu/流局 true；解散/回收 false）

	public $m_Room_HuNum = array();			//size=GAMEROUND/4 胡的统计
	public $m_Room_GangDark = array();			//size=GAMEROUND/4 暗杠统计
	public $m_Room_GangLight = array();		//size=GAMEROUND/4 明杠统计
	public $m_Room_PengGangLight = array();	//size=GAMEROUND/4 碰杠统计
	public $m_Room_GangPot = array();			//size=GAMEROUND/4 点杠统计
	public $m_Room_ZiMoNum = array();			//size=GAMEROUND/4 自摸统计
	public $m_Room_RecvGun = array();			//size=GAMEROUND/4 接炮
	public $m_Room_GiveGun = array();			//size=GAMEROUND/4 点炮
	public $m_Room_GameScore = array();
	
	public $m_lastTime;
	public $m_lastType;
	public function __construct($userid,$pwd, $rule)
	{
		parent::__construct($userid,$pwd, $rule);
		$this->m_gameStatus = self::GAMESTATE_READY;
		$this->m_playGround = GameManager::getInstance()->getCurPlayGroundByPwd($pwd);
		//初始化房间数据
		$this->initRoomData();
		//初始化单局房间数据
		$this->initSimpleRoomData();

	}

	public function dumpLog($type)
	{
		return;
		$file =  __DIR__ . '/log/' . $this->m_roomPwd . '.txt';
		if ($type == 1) {
			//游戏开始
			$site = '--------------------------'.$this->m_playGround.'-------------------------------'."\n";
			$this->m_lastTime = microtime(true);
		}else if($type == 2){
			$time = microtime(true);
			$useTime = $time - $this->m_lastTime;
			$this->m_lastTime = $time;
			$site = $time.' sendCardsStart ==========>'.$useTime."\n";
		}else if($type == 3){
			$time = microtime(true);
			$useTime = $time - $this->m_lastTime;
			$this->m_lastTime = $time;
			$site = $time.' sendCardsEnd ==========>'.$useTime."\n";
		}else if($type == 4){
			$time = microtime(true);
			$useTime = $time - $this->m_lastTime;
			$this->m_lastTime = $time;
			$site = $time.' cardsInHandStart ==========>'.$useTime."\n";
		}else if($type == 5){
			$time = microtime(true);
			$useTime = $time - $this->m_lastTime;
			$this->m_lastTime = $time;
			$site = $time.' cardsInHandEnd ==========>'.$useTime."\n";
		}else if($type == 6){
			$time = microtime(true);
			$useTime = $time - $this->m_lastTime;
			$this->m_lastTime = $time;
			$site = $time.' actionStart ==========>'.$useTime."\n";
		}else if($type == 7){
			$time = microtime(true);
			$useTime = $time - $this->m_lastTime;
			$this->m_lastTime = $time;
			$site = $time.' actionEnd ==========>'.$useTime."\n";
		}else if($type == 8){
			$time = microtime(true);
			$useTime = $time - $this->m_lastTime;
			$this->m_lastTime = $time;
			$site = $time.' outCardStart ==========>'.$useTime."\n";
		}else if($type == 9){
			$time = microtime(true);
			$useTime = $time - $this->m_lastTime;
			$this->m_lastTime = $time;
			$site = $time.' outCarEnd ==========>'.$useTime."\n";
		}
		file_put_contents($file, $site, FILE_APPEND | LOCK_EX);

		if (isset($useTime) && $useTime > 0.1 && in_array($type, array(3,5,7,9))) {
			$site = '=================>use time so long'."\n".'type:'.$type."\n".'outcardsUser:'.$this->m_wOutCardUser."\n".'cards:'.json_encode($this->m_cbCardIndex[$this->m_wOutCardUser])."\n".'ware:'.json_encode($this->m_WeaveItemArray[$this->m_wOutCardUser])."\n".'action:'.json_encode($this->m_OperateNotify)."\n";
			file_put_contents($file, $site, FILE_APPEND | LOCK_EX);
		}
		if ($this->m_lastType == $type) {
			$site = '=================>more choose button'."\n".'type:'.$type."\n".'outcardsUser:'.$this->m_wOutCardUser."\n".'cards:'.json_encode($this->m_cbCardIndex[$this->m_wOutCardUser])."\n".'ware:'.json_encode($this->m_WeaveItemArray[$this->m_wOutCardUser])."\n".'action:'.json_encode($this->m_OperateNotify)."\n";
			file_put_contents($file, $site, FILE_APPEND | LOCK_EX);
		}
		$this->m_lastType = $type;
	}

	public function dump($data)
	{
		$file =  __DIR__ . '/log/' . $this->m_roomPwd . '.txt';

		$site = json_encode($data)."\n";

		
		file_put_contents($file, $site, FILE_APPEND | LOCK_EX);

	}

//====================================================================================================
	//----------------------------------------------房间初始化-------------------------------------------
	//每局游戏开始 房间初始化
	public function initRoomData()
	{
		for ($j=1; $j <= $this->m_roomRule['gameground']; $j++) { 
			for ($i=1; $i <= 4; $i++) { 
				$this->m_Room_HuNum[$j][$i] = 0;		
				$this->m_Room_GangDark[$j][$i] = 0;		
				$this->m_Room_GangLight[$j][$i] = 0;	
				$this->m_Room_PengGangLight[$j][$i] = 0;
				$this->m_Room_GangPot[$j][$i] = 0;		
				$this->m_Room_ZiMoNum[$j][$i] = 0;		
				$this->m_Room_RecvGun[$j][$i] = 0;
				$this->m_Room_GiveGun[$j][$i] = 0;
				$this->m_Room_GameScore[$i] = 0;
			}
		}
		
		$this->m_wBankerUser = -1;
	}

	//每局游戏的每一把的初始化
	public function initSimpleRoomData()
	{
	// m_cbSiceCount = array();			//骰子数据，根据游戏需求，自定义游戏骰子的个数
		// m_wBankerUser;						//庄家座位号
		for ($i=1; $i <= 4; $i++) { 
			$this->m_cbCardIndex[$i] = array();	
			$this->m_bTrustee[$i] = array();
			$this->m_cbDiscardCard[$i] = array();
			$this->m_cbDiscardCardOndesk[$i] = array();
			
			$this->m_cbPlayerStatus[$i] = array();	
			$this->m_bResponse[$i] = array();	
			$this->m_cbUserAction[$i] = -1;			
			$this->m_cbOperateCard[$i] = array();		
			$this->m_cbPerformAction[$i] = array();
			$this->m_dwChiHuRight[$i] = array();			
			$this->m_cbQiangGang[$i] = array();	
			$this->m_cbLightGang[$i] = array();	
			$this->m_cbLightPengGang[$i] = array();
			$this->m_cbDarkGang[$i] = array();		
			$this->m_bGangFlower[$i] =array();	
			$this->m_cbWeaveItemCount[$i] = array();
			$this->m_WeaveItemArray[$i] = array();

			$this->m_bBaotouStatus[$i] = false;
			$this->m_bWealthWind[$i] = 0;
			$this->m_bFollowWind[$i] = false;
			$this->m_bGangWealth[$i] = false;

			$this->m_cbNotOperate[$i]['hucards'] = array();
			$this->m_cbNotOperate[$i]['pengcards'] = array();

			$this->m_skippedDianPao[$i] = array();
			$this->m_skippedPeng[$i] = array();
			$this->m_skippedBuGang[$i] = array();
			$this->m_forbidDiscard[$i] = -1;

			$this->m_cbthisCards[$i] = -1;
			$this->m_nextSendCard[$i] = -1;
			$this->m_bLastGang[$i] = 0;
			$this->m_bQiangGang[$i]['state'] = 0;					
			$this->m_bQiangGang[$i]['msg'] = '';
			$this->m_bFalseWealthWind[$i] = false;
			for ($j=1; $j <= 4; $j++) { 
				$this->m_cbGiveRecvGang[$i][$j] = 0;	
			}		
		}
		$this->m_wOutCardUser = -1;
		$this->m_cbOutCardData = -1;
		$this->m_cbSendCardData = -1;
		$this->m_cbLeftCardCount = GR_CONST_CARD_MAX;
		$this->m_cbLeftCard = -1;
		$this->m_cbSendCardCount = -1;
		$this->m_wResumeUser = -1;
		$this->m_wCurrentUser = -1;
		$this->m_wProvideUser = -1;
		$this->m_cbProvideCard = -1;
		$this->m_OperateNotify = array();
		$this->m_bSendStatus = false;
		$this->m_bGangStatus = false;
		$this->m_cbChiHuCard = -1;
		$this->m_bWealthCards = -1;

		$this->m_faceUp = array();
		$this->m_faceUpUser = -1;
		$this->m_faceUpPhase = false;
		$this->m_faceUpHuIndex = array();
		$this->m_gangLedger = array();
		$this->m_paoPoints = array();
		$this->m_listenState = array();
		$this->m_hasKong = false;
		$this->m_paoDone = array();
		$this->m_paoAllDone = false;
		$this->m_dealerOpeningPhase = false;
		$this->m_openingDone = false;
		$this->m_lastDrawnTile = array();
		$this->m_flipContext = '';
		$this->m_lastHuSource = '';
		$this->m_gangHuaWinnerTile = -1;
		$this->m_autoPlayOn = array();
		$this->m_autoPlayCause = array();
		$this->m_timeoutStreak = array();
		$this->m_pendingGangResult = null;
		$this->m_lastHandEndReason = '';
		$this->m_nextDealerSeat = -1;
		$this->m_countsAsHand = true;

		for ($i=1; $i <= 4; $i++) {
			$this->m_paoPoints[$i] = 0;
			$this->m_listenState[$i] = false;
			$this->m_paoDone[$i] = false;
			$this->m_lastDrawnTile[$i] = -1;
			$this->m_autoPlayOn[$i] = false;
			$this->m_autoPlayCause[$i] = '';
			$this->m_timeoutStreak[$i] = 0;
			for ($j=1; $j <= 4; $j++) {
				$this->m_gangLedger[$i][$j] = 0;
			}
		}
		// private m_bEnjoinChiHu = array();			//禁止吃胡 size=4
		// private m_bEnjoinChiHuWinTime = array();	//禁止吃胡的分数 //在胡先不胡后的基础上 增加 胡大不胡小 size=4
		// private $m_bEnjoinChiPeng = array();		//禁止吃碰 size=4
	}

	//====================================================================================================





	//====================================================================================================
	//----------------获取房间数据------------------------------------------------------------
	public function getRoomData($uid){

		$roomData['roomstatus'] = $this->m_roomStatus;
		$roomData['gamestatus'] = $this->m_gameStatus;
		$roomData['click'] = $this->m_roomClickValue;

		$roomData['roomowner'] = $this->m_roomOwner;
		$roomData['roomownernick'] = isset($this->m_playerList[$this->m_roomOwner])?$this->m_playerList[$this->m_roomOwner]['nickname']:"";
		$roomData['roompwd'] = $this->m_roomPwd;
		$roomData['playGround'] = $this->m_playGround;
		$roomData['rule'] = $this->m_roomRule;
		// $roomData['macardvalue'] = $this->m_maCardValue;
		$roomData['playerlist'] = $this->m_playerList;
		$roomData['deskdata'] = $this->m_deskData;
		$roomData['comparedata']  = $this->m_compareDataResult;
		//解散数据
		//$roomData['waittingdismiss'] = $this->m_waittingDismiss;
		$roomData['dismissData'] = $this->m_dismissData;
		$roomData['dismissMark'] = $this->m_dismissMark;

		$roomData['discardCard'] = $this->m_cbDiscardCardOndesk;
		$roomData['currentUser'] = $this->m_wOutCardUser;	
		$roomData['cardsdata'] = $this->getUserCardsData($uid);
		$roomData['cardscount'] = $this->getUserCardsCount();
		$roomData['weaveItemArray'] = $this->m_WeaveItemArray;
		$roomData['operateNotify'] = $this->getUserOperateNotify($uid);
		$roomData['sendCardData'] = $this->getSendCardData($uid);
		$roomData['leftCardCount'] = $this->m_cbLeftCardCount;	
		$roomData['bankerUser'] = $this->m_wBankerUser;	
		//翻屁股（明牌）全桌可见，重连 snapshot 与实时广播 GR_GAME_MJ_FACE_UP 保持同一份数据
		$roomData['faceUp'] = $this->m_faceUp;
		$roomData['faceUpSeat'] = $this->m_faceUpUser;
		$roomData['faceUpPhase'] = $this->m_faceUpPhase;
		$roomData['faceUpHuIdx'] = $this->m_faceUpHuIndex;

		return $roomData;
	}

	public function getSendCardData($uid)
	{
		foreach ($this->m_deskData as $seatno => $info) {
			if ($this->m_deskData[$seatno]['uid'] == $uid) {
				if ($this->m_wOutCardUser == $seatno) {
					if ($this->m_cbthisCards[$this->m_wOutCardUser] == $this->m_bWealthCards) {
						return $this->m_bWealthCards;
					}else{
						return -1;
					}		
				}else{
					return -1;
				}
			break;
			}
		}
		return -1;
	}
	public function getUserCardsCount()
	{
		$data = array();
		foreach ($this->m_cbCardIndex as $seatno => $value) {
			$data[$seatno] = array_sum($this->m_cbCardIndex[$seatno]);
			if($this->m_gameStatus == self::GAMESTATE_OPERATE && $this->m_wOutCardUser == $seatno && isset($this->m_OperateNotify[$seatno]['cbActionMask']) && $this->m_OperateNotify[$seatno]['cbActionMask'] != WIK_NULL && $this->m_cbSendCardData != -1){
				$data[$seatno]++;
			}
		}
		return $data;
	}
	public function getUserOperateNotify($uid)
	{
		foreach ($this->m_deskData as $seatno => $info) {
			if ($this->m_deskData[$seatno]['uid'] == $uid) {
				if (isset($this->m_OperateNotify[$seatno]) && count($this->m_OperateNotify[$seatno]) != 0 && $this->m_OperateNotify[$seatno]['cbActionMask'] != 0) {
					return $this->m_OperateNotify[$seatno];
				}else{
					unset($this->m_OperateNotify[$seatno]);
					$this->m_OperateNotify[$seatno] = array();
					return $this->m_OperateNotify[$seatno];
				}
			}
		}
		return array();
	}
	public function getUserCardsData($uid)
	{
		$cardsdata = array();
		$outcards = false;
		if($this->m_gameStatus == self::GAMESTATE_OUT){
			$outcards = true;
		}
		foreach ($this->m_deskData as $seatno => $info) {
			if ($this->m_deskData[$seatno]['uid'] == $uid) {
				foreach ($this->m_cbCardIndex[$seatno] as $index => $count) {
					$card = GameLogic::getInstance()->SwitchToCardData($index);
					// if ($card == $this->m_cbSendCardData && $outcards) {
					// 	$count--;
					// }
					for ($i=0; $i < $count; $i++) { 
						$cardsdata[] = $card;
					}
				}
				if($this->m_gameStatus == self::GAMESTATE_OPERATE && $this->m_wOutCardUser == $seatno && isset($this->m_OperateNotify[$seatno]['cbActionMask']) && $this->m_OperateNotify[$seatno]['cbActionMask'] != WIK_NULL && $this->m_cbSendCardData != -1){
					$cardsdata[] = $this->m_cbSendCardData;
				}
				break;
			}
		}
		
		asort($cardsdata);
		$cardsdata = array_values($cardsdata);
		return $cardsdata;
	}
	//
	public function gameReady($uid){
			if($this->m_gameStatus == self::GAMESTATE_READY){
				foreach ($this->m_deskData as $seatno => $info) {
					if($info['uid'] == $uid){
						if(!$info['ready']){
							$this->m_deskData[$seatno]['ready'] = true;

							$data['seatno'] = $seatno;
							$data['uid'] = $info['uid'];
							$this->sendRoomMessage(GR_GAMEREADYRRESULT,$data);

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


	/**
	*	玩家坐下
	*/
	public function sitDownAction($uid,$sendTag = true){
		//if($this->m_gameStatus != self::GAMESTATE_READY)return ;
		if($this->sitDown($uid,$sendTag)){
			//触发游戏
			if($this->m_gameStatus == self::GAMESTATE_READY){
				$this->checkStart();
			}
		}else{
			echo "sit down error \n";
		}
	}
	
	public function checkStart(){
		if($this->m_roomStatus != self::STATE_NONE){
			return;
		}

		//检查是否牌局结束
		if($this->m_playGround >= $this->m_roomRule['gameground']){
			$this->gameOver();
			return ;
		}

		//检查是否有解散请求
		if ($this->m_dismissMark) {
			$this->gameOver();
			return ;
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

		if ($this->m_roomRule['peoplecount'] == $readyCount) {
			$this->gameBegin();
		}

	}
	//====================================================================================================
	//----------------------------------------游戏作弊控制-----------------------------------------------------
	public function whetherSuperReg($uid)
	{
		if ($this->getSuper($uid)) {
			foreach ($this->m_cbLeftCard as $key => $value) {
				$data[$value] = isset($data[$value])?$data[$value]+1:1;
			}
			return $data;
		}else{
			return false;
		}
	}
	public function setNextSendCard($uid,$card)
	{
		foreach ($this->m_deskData as $seatno => $info) {
			if ($uid == $this->m_deskData[$seatno]['uid']) {
				$nowSeatno = $seatno;
				break;
			}
		}
		if (in_array($card, $this->m_cbLeftCard)) {
			$this->m_nextSendCard[$nowSeatno] = $card;
			return true;
		}else{
			return false;
		}
	}
	//====================================================================================================
	//----------------------------------------测试专用：指定发牌---------------------------------------------
	// 说明：仅在 GR_TEST_FORCE_DECK=true 且请求者为控制用户时生效；默认关闭，不影响正常对局。
	public function setForcedDeck($uid, $spec)
	{
		if (!GR_TEST_FORCE_DECK) return false;
		if (!$this->getSuper($uid)) return false;
		if (!is_array($spec) || !isset($spec['hands']) || !is_array($spec['hands'])) return false;
		$this->m_forcedDeck = $spec;
		return true;
	}

	// 依据 hands（按 uid 或座位）+ pool（剩余牌墙，末尾为最先摸/翻的牌）+ extra（庄家第14张）拼出完整牌墙
	public function buildForcedDeck($ingameCount)
	{
		$spec = $this->m_forcedDeck;
		$pool = isset($spec['pool']) && is_array($spec['pool']) ? array_values($spec['pool']) : array();
		$extra = isset($spec['extra']) ? intval($spec['extra']) : -1;
		$order = array();
		foreach ($this->m_deskData as $seatno => $info) {
			if ($info['ingame']) $order[] = $seatno;
		}
		$deck = $pool;
		// 发牌按座位顺序从牌墙末尾取，故先处理的座位手牌位于数组最末
		for ($k = count($order) - 1; $k >= 0; $k--) {
			$seatno = $order[$k];
			$uid = isset($this->m_deskData[$seatno]['uid']) ? $this->m_deskData[$seatno]['uid'] : 0;
			$hand = array();
			if (isset($spec['hands'][$uid]) && is_array($spec['hands'][$uid])) {
				$hand = array_values($spec['hands'][$uid]);
			} elseif (isset($spec['hands'][$seatno]) && is_array($spec['hands'][$seatno])) {
				$hand = array_values($spec['hands'][$seatno]);
			}
			if ($seatno == $this->m_wBankerUser && $extra > 0) {
				$hand[] = $extra;
			}
			$deck = array_merge($deck, $hand);
		}
		return $deck;
	}
	//====================================================================================================
	//----------------------------------------房间逻辑-----------------------------------------------------
	public function roomOwnerStart($uid){

		if($this->m_gameStatus == self::GAMESTATE_READY && $this->m_playGround == 0){
			if($this->m_roomOwner == $uid && sizeof($this->m_deskData) >= 2){
				$this->gameBegin();
			}else{
				echo "you are not owner or low people \n";
			}
		}else{
			echo "not in ready time or not first ju \n";
			return ;
		}


	}
	

	//初始化参数，并且洗牌
	public function gameBegin(){
		if ($this->m_countsAsHand) {
			$this->m_playGround++;
			GameManager::getInstance()->updateRoomPlayGround($this->m_roomPwd,$this->m_playGround);
			// 新一局（局号+1）才清零本局重开次数；Redeal 复用同一局号时保留累加
			$this->m_redealSeq = 0;
		}
		$this->m_roomStatus = self::STATE_PLAYING;
		$this->m_gameStatus = self::GAMESTATE_BEGIN;

		$this->m_hasKong = false;
		$this->m_lastHuSource = '';
		$this->m_openingDone = false;
		$this->m_dealerOpeningPhase = false;
		$this->m_nextDealerSeat = -1;
		$this->m_countsAsHand = true;

		//开始定时器
		$this->addTimeClick(CLICK_NAME_STARTTING,CLICK_VALUE_STARTTING,array($this,'gameBeginCallBack'),array());

		//游戏开始，定时2秒，用于播放开始动画
		$data['playground'] = $this->m_playGround;
		$data['totalground'] = $this->m_roomRule['gameground'];
		$this->sendDeskMessage(GR_GAMESTART,$data);

		//清理数据
		foreach ($this->m_deskData as $seatno => $info) {
			if($info['ready']){
				$this->m_deskData[$seatno]['ingame'] = true;
				$this->m_deskData[$seatno]['outcardtag'] = 0;
				$this->m_deskData[$seatno]['outcards'] = array();
				$this->m_deskData[$seatno]['data'] = array();

			}
		}
		$this->m_compareDataResult = array();
		$this->initSimpleRoomData();
	}

	public function gameBeginCallBack(){
		$this->destoryClick(CLICK_NAME_STARTTING);
		if ($this->m_playGround == 1) {
			$this->upsetSeatno();
		}else{
			//发牌
			$this->gameSendCards();
		}
	}

	public function upsetSeatno()
	{
		$originalOrder = array();
		foreach ($this->m_deskData as $seatno => $info) {
			$originalOrder[$seatno] = $info;
		}
		$keys = array_keys($originalOrder);
		shuffle($keys);
		$shuffledOrder = array();
		$shuffleInfo = array();
		$i = 0;
		foreach ($originalOrder as $seatno => $info) {
			$shuffledOrder[$seatno] = $originalOrder[$keys[$i]];
			$shuffleInfo[$seatno] = array(
				'seatno' => $seatno,
				'uid' => isset($shuffledOrder[$seatno]['uid']) ? $shuffledOrder[$seatno]['uid'] : null,
			);
			$i++;
		}
		$oldControl = $this->m_controlList;
		$this->m_controlList = array();
		foreach ($shuffledOrder as $seatno => $info) {
			$this->m_deskData[$seatno] = $info;
			if (isset($info['uid']) && isset($this->m_playerList[$info['uid']])) {
				$prevSeat = isset($this->m_playerList[$info['uid']]['seatno']) ? $this->m_playerList[$info['uid']]['seatno'] : $seatno;
				$this->m_playerList[$info['uid']]['seatno'] = $seatno;
				if (isset($oldControl[$prevSeat])) {
					$this->m_controlList[$seatno] = $oldControl[$prevSeat];
				}
			}
		}
		$this->sendRoomMessage(GR_GAME_MJ_SEATS_SHUFFLED, array('seats' => $shuffleInfo));
		$this->sendRoomMessage(GR_GAMEUPSETSEATNO, $this->m_playerList);
		$this->addTimeClick(CLICK_NAME_UPSET_SEATNO, CLICK_VALUE_UPSET_SEATNO, array($this, 'startSelectPao'), array());
	}

	public function startSelectPao()
	{
		$this->destoryClick(CLICK_NAME_UPSET_SEATNO);
		$needPao = array();
		foreach ($this->m_deskData as $seatno => $info) {
			if (empty($info['ingame'])) continue;
			$this->m_paoDone[$seatno] = false;
			$this->m_paoPoints[$seatno] = 0;
			$needPao[] = $seatno;
		}
		$this->m_paoAllDone = false;
		if (GR_REDEAL_RESELECT_PAO === false && $this->m_redealSeq > 0 && count($needPao)) {
			foreach ($needPao as $seatno) {
				$this->m_paoDone[$seatno] = true;
			}
			$this->m_paoAllDone = true;
		}
		$this->sendRoomMessage(GR_GAME_MJ_ACTION_PROMPT, array(
			'phase' => 'select_pao',
			'paoMin' => GR_PAO_MIN,
			'paoMax' => GR_PAO_MAX,
			'timeoutSec' => GR_DISCARD_TIMEOUT_SEC,
			'deadline' => $this->serverDeadline(GR_DISCARD_TIMEOUT_SEC),
			'seats' => $needPao,
		));
		$this->addTimeClick(CLICK_NAME_SEL_PAO, GR_DISCARD_TIMEOUT_SEC, array($this, 'onSelectPaoTimeout'), array(), array(), false);
		foreach ($needPao as $seatno) {
			if (GR_REDEAL_RESELECT_PAO === false && $this->m_redealSeq > 0) continue;
			if (!empty($this->m_autoPlayOn[$seatno])) {
				$this->onSetPaoBySeat($seatno, 0, true);
			}
		}
		if ($this->m_paoAllDone) {
			call_user_func(array($this, 'afterSelectPaoDone'));
			return;
		}
	}

	public function onSelectPaoTimeout()
	{
		$this->destoryClick(CLICK_NAME_SEL_PAO);
		foreach ($this->m_deskData as $seatno => $info) {
			if (empty($info['ingame'])) continue;
			if (empty($this->m_paoDone[$seatno])) {
				$this->onSetPaoBySeat($seatno, 0, true);
			}
		}
	}

	public function onSetPao($uid, $pao)
	{
		if ($this->m_paoAllDone) return;
		$seatno = $this->getUserSeatno($uid);
		if ($seatno == 0) return;
		$this->onSetPaoBySeat($seatno, $pao);
	}

	public function onSetPaoBySeat($seatno, $pao, $isTimeout = false)
	{
		if (!empty($this->m_paoDone[$seatno])) return;
		$pao = intval($pao);
		if ($pao < GR_PAO_MIN) $pao = GR_PAO_MIN;
		if ($pao > GR_PAO_MAX) $pao = GR_PAO_MAX;
		$this->m_paoPoints[$seatno] = $pao;
		$this->m_paoDone[$seatno] = true;
		$this->sendRoomMessage(GR_GAME_MJ_SET_PAO, array(
			'seatno' => $seatno,
			'pao' => $pao,
			'timeout' => $isTimeout ? 1 : 0,
		));
		$allDone = true;
		foreach ($this->m_deskData as $s => $info) {
			if (empty($info['ingame'])) continue;
			if (empty($this->m_paoDone[$s])) {
				$allDone = false;
				break;
			}
		}
		if ($allDone) {
			$this->m_paoAllDone = true;
			$this->destoryClick(CLICK_NAME_SEL_PAO);
			call_user_func(array($this, 'afterSelectPaoDone'));
		}
	}

	public function afterSelectPaoDone()
	{
		$this->destoryClick(CLICK_NAME_SEL_PAO);
		$this->gameSendCards();
	}

	private function getUserSeatno($uid)
	{
		if (!isset($this->m_playerList[$uid])) return 0;
		$seat = intval($this->m_playerList[$uid]['seatno']);
		return $seat > 0 ? $seat : 0;
	}
	//-------------------决定出牌顺序-----------------------

	//决定谁是庄家
	public function gameZhuang()
	{
		// 测试专用：指定庄家（仅在指定发牌生效时）
		if (GR_TEST_FORCE_DECK && $this->m_forcedDeck !== null && isset($this->m_forcedDeck['bankerUid'])) {
			$buid = $this->m_forcedDeck['bankerUid'];
			foreach ($this->m_deskData as $seatno => $info) {
				if (isset($info['uid']) && $info['uid'] == $buid) { $this->m_wBankerUser = $seatno; break; }
			}
		}
		if ($this->m_wBankerUser == -1) {
			foreach ($this->m_deskData as $seatno => $info) {
				$infodata[] = $seatno;
			}
			$rand = array_rand($infodata);
			$this->m_wBankerUser = $infodata[$rand];
			$this->m_wBankerUser = ($this->m_wBankerUser == -1)?1:$this->m_wBankerUser;
		}else if($this->m_wBankerUser == -2){
			$this->findBanker();
			$this->m_deskData[$this->m_wBankerUser]['isbanker'] = true;
		}
		$data = array($this->m_wBankerUser);
		$this->gameZhuangCallBack(); 
		$this->saveGameMessage(1,$data);
		$this->sendRoomMessage(GR_GAME_MJ_ZHUANG,$data);
	}

	public function findBanker()
	{
		reset($this->m_deskData);
		foreach ($this->m_deskData as $key => $info) {
			if(key($this->m_deskData) == $this->m_wBankerUser){
				next($this->m_deskData);
				$nextSeatno = key($this->m_deskData);
			}else{
				next($this->m_deskData);
			}
		}
		if($nextSeatno == NULL){
			reset($this->m_deskData);
			$nextSeatno = key($this->m_deskData);
		}
		$this->m_wBankerUser = $nextSeatno;
		if($nextSeatno != NULL && ($this->m_deskData[$nextSeatno]['ingame'] == false)){
			$nextSeatno = $this->findBanker();
		}
		return $nextSeatno;
	}
	public function gameZhuangCallBack()
	{
		$this->destoryClick(CLICK_NAME_ZHUANG);
	}

	//轮到谁下一个出牌
	public function peopleTurn($guard = 0)
	{
		reset($this->m_deskData);
		if ($this->m_wOutCardUser == -1) {
			$this->m_wOutCardUser = $this->m_wBankerUser;
			$nextSeatno = $this->m_wBankerUser;
		}else{
			$lastSeatno = $this->m_wOutCardUser;
			foreach ($this->m_deskData as $key => $info) {
				if(key($this->m_deskData) == $lastSeatno){
					next($this->m_deskData);
					$nextSeatno = key($this->m_deskData);
				}else{
					next($this->m_deskData);
				}
			}

			if($nextSeatno == NULL){
				reset($this->m_deskData);
				$nextSeatno = key($this->m_deskData);
			}
			if($nextSeatno != NULL && isset($this->m_deskData[$nextSeatno]) && ($this->m_deskData[$nextSeatno]['ingame'] == false)){
			// 跳过 ingame=false（已离座/已结束）座位：先推进起点再递归，
			// 否则递归内 m_wOutCardUser 仍是旧家，会从同一家反复重算导致死循环/OOM
			$this->m_wOutCardUser = $nextSeatno;
			// 全部座位都非 ingame 时会绕桌无限递归 → 加绕桌一圈上限后提前 return，避免 OOM
			if ($guard >= 4) {
				return $nextSeatno;
			}
			$nextSeatno = $this->peopleTurn($guard + 1);
		}
			$this->m_wOutCardUser = $nextSeatno;
		}
		if ($this->m_bWealthWind[$nextSeatno] == 0) {
			$this->m_bQiangGang[$nextSeatno]['state'] = 0;
			$this->m_bQiangGang[$nextSeatno]['msg'] = '';
		}
		return $nextSeatno;
	}

	//过圈：自己摸/碰/杠/打一次后，清空该玩家的过点炮/过碰（过杠锁死不清）
	private function clearSkippedByTurn($seatno)
	{
		if (!isset($this->m_skippedDianPao[$seatno])) {
			return;
		}
		$this->m_skippedDianPao[$seatno] = array();
		$this->m_skippedPeng[$seatno] = array();
		$this->m_cbNotOperate[$seatno]['hucards'] = array();
		$this->m_cbNotOperate[$seatno]['pengcards'] = array();
	}

	//墙空或墙头仅剩<=2 张时禁止再杠
	private function canKongByWall()
	{
		$wall = is_array($this->m_cbLeftCard) ? count($this->m_cbLeftCard) : 0;
		return $wall > GR_FACE_UP_COUNT;
	}

	//发送到轮到谁出牌的数据
	public function gameOutcardTurn($isOpening = false)
	{
		$this->m_gameStatus = self::GAMESTATE_OUT;
		$seatno = $this->m_wOutCardUser;

		// 过圈：自己摸/碰/杠/打一次后清过胡/过碰（过杠锁死不在此清）
		$this->clearSkippedByTurn($seatno);

		$data = array();
		$data['seatno'] = $seatno;
		$data['opening'] = $isOpening ? 1 : 0;
		// v1.20 2.8：截止时间以服务端时间为准下发
		$data['timeoutSec'] = CLICK_VALUE_OUTCARDS;
		$data['deadline'] = $this->serverDeadline(CLICK_VALUE_OUTCARDS);
		$this->sendRoomMessage(GR_GAME_MJ_OUT_CARDS,$data);
		if ($isOpening) {
			// 开局庄家首张：补发"摸牌"标记（TOUCHCARDS），让客户端点亮并可点击手牌；
			// 牌值取庄家手牌里已有的一张（最右/最大），不新增手牌、不从牌墙再摸一张。
			$bankerTile = $this->getRightmostTile($seatno);
			if ($bankerTile > 0) {
				$this->sendRoomMessage(GR_GAME_MJ_SEND_CARDS, array('seatno'=>$seatno));
				$this->sendMsgToUser($this->m_deskData[$seatno]['uid'], GR_GAME_MJ_TOUCH_CARDS, array($bankerTile));
			}
		}
		foreach ($this->m_OperateNotify as $s => $info) {
			$this->m_OperateNotify[$s] = array();
			$this->m_cbUserAction[$s] = -1;
		}
		if (!$isOpening) {
			if ($this->m_cbLeftCardCount > count($this->m_faceUp)) {
				$this->gameSendOneCards();
			}else{
				$this->doWallEndOrLiuJu();
				return;
			}
		}
		// v1.20 2.8：超时托管持续到本局结束，出牌轮次不再清托管；托管者直接代打
		if (!$isOpening && !empty($this->m_autoPlayOn[$seatno]) && $this->m_gameStatus == self::GAMESTATE_OUT) {
			$this->onOutcardTimeout();
			return;
		}
		$this->addTimeClick(CLICK_NAME_OUTCARDS, CLICK_VALUE_OUTCARDS, array($this, 'onOutcardTimeout'));
	}

	public function onOutcardTimeout()
	{
		$this->destoryClick(CLICK_NAME_OUTCARDS);
		$seatno = $this->m_wOutCardUser;
		if ($this->m_gameStatus != self::GAMESTATE_OUT) return;
		// v1.20 2.8：托管规则改为"同一座位连续两次操作超时（各15秒）才强制托管"。
		// 第一次超时仅按默认动作代打一次，不置托管、不广播；玩家主动操作会清零计数。
		$streak = isset($this->m_timeoutStreak[$seatno]) ? $this->m_timeoutStreak[$seatno] + 1 : 1;
		$this->m_timeoutStreak[$seatno] = $streak;
		if ($streak >= 2) {
			$this->m_autoPlayOn[$seatno] = true;
			$this->m_autoPlayCause[$seatno] = 'TIMEOUT';
			$this->sendRoomMessage(GR_GAME_MJ_AUTO_PLAY, array('seatno'=>$seatno,'cause'=>'TIMEOUT','on'=>true));
		}
		$uid = isset($this->m_deskData[$seatno]['uid']) ? $this->m_deskData[$seatno]['uid'] : 0;
		if ($uid == 0) return;
		// v1.20 2.8：托管能胡自动胡（自摸；过点炮锁仅限点炮胡，不影响自摸）
		$drawnTile = isset($this->m_lastDrawnTile[$seatno]) ? $this->m_lastDrawnTile[$seatno] : -1;
		if ($drawnTile > 0) {
			$dIdx = GameLogic::getInstance()->SwitchToCardIndex($drawnTile);
			if (isset($this->m_cbCardIndex[$seatno][$dIdx]) && $this->m_cbCardIndex[$seatno][$dIdx] > 0) {
				// 手牌已含所摸牌，判定自摸前临时移除，避免重复计算
				$this->m_cbCardIndex[$seatno][$dIdx]--;
				if ($this->m_cbCardIndex[$seatno][$dIdx] <= 0) unset($this->m_cbCardIndex[$seatno][$dIdx]);
				$tmpRes = array();
				$r = $this->judgeHu(
					$this->m_cbCardIndex[$seatno],
					$this->m_WeaveItemArray[$seatno],
					$drawnTile,
					$tmpRes,
					$seatno,
					false
				);
				$this->m_cbCardIndex[$seatno][$dIdx] = isset($this->m_cbCardIndex[$seatno][$dIdx]) ? $this->m_cbCardIndex[$seatno][$dIdx] + 1 : 1;
				if ($r == WIK_CHI_HU) {
					$huRes = array(
						'wOperateUser' => $seatno,
						'wProvideUser' => $seatno,
						'cbOperateCode' => WIK_CHI_HU,
						'cbOperateCard' => $drawnTile,
						'bDarkGuang' => false,
						'source'      => 'auto_zimo',
					);
					$this->gameHuCards($huRes);
					return;
				}
			}
		}
		// v1.20 2.8：打刚摸/刚选的牌，没有则打显示顺序最右一张
		$outTile = $this->pickAutoDiscardTile($seatno);
		if ($outTile <= 0) {
			$this->peopleTurn(); $this->gameOutcardTurn(); return;
		}
		// 复用正常出牌流程：判定他家碰/杠/胡、听牌等
		$this->gameOutCardReg($uid, array('data' => $outTile), true);
	}

	public function onWaitClaimTimeout()
	{
		$this->destoryClick(CLICK_NAME_WAITCLAIM);
		// 碰杠胡超时：canHu autoHu else autoPass（不进托管！）
		$anyPending = false;
		foreach ($this->m_OperateNotify as $seatno => $info) {
			if (count($info) == 0) continue;
			if ($this->m_cbUserAction[$seatno] != -1) continue;
			$anyPending = true;
			$mask = isset($info['cbActionMask']) ? intval($info['cbActionMask']) : 0;
			if (($mask & WIK_CHI_HU) > 0) {
				$cards = isset($info['cbActionCard']) ? $info['cbActionCard'] : 0;
				// v1.20 2.10：超时自动胡只登记表态，继续处理其余未表态者，最后统一聚合裁决（支持一炮多响）
				$this->gameOperateReg($this->m_deskData[$seatno]['uid'], $cards, WIK_CHI_HU, true);
			} else {
				$this->gameOperateReg($this->m_deskData[$seatno]['uid'], 0, WIK_NULL, true);
			}
		}
		if (!$anyPending && $this->m_dealerOpeningPhase && !$this->m_openingDone) {
			$this->afterOpeningWaitClaim();
		}
	}

	public function gameOutcardTurnNoCards()
	{
		$this->m_gameStatus = self::GAMESTATE_OUT;

		// 过圈：碰/吃/杠后自己出牌即算过一次圈
		$this->clearSkippedByTurn($this->m_wOutCardUser);

		$data = array();
		$data['seatno'] = $this->m_wOutCardUser;
		// v1.20 2.8：碰/吃后出牌同样有 15 秒倒计时与截止时间
		$data['timeoutSec'] = CLICK_VALUE_OUTCARDS;
		$data['deadline'] = $this->serverDeadline(CLICK_VALUE_OUTCARDS);
		$this->sendRoomMessage(GR_GAME_MJ_OUT_CARDS,$data);
		foreach ($this->m_OperateNotify as $seatno => $info) {
			$this->m_OperateNotify[$seatno] = array();
			$this->m_cbUserAction[$seatno] = -1;
		}
		// v1.20 2.8：托管者直接代打
		if (!empty($this->m_autoPlayOn[$this->m_wOutCardUser])) {
			$this->onOutcardTimeout();
			return;
		}
		$this->addTimeClick(CLICK_NAME_OUTCARDS, CLICK_VALUE_OUTCARDS, array($this, 'onOutcardTimeout'));
	}

	//----------------------发牌--------------------------
	public function gameSendCards(){

		$this->saveRoomMessage();
		$this->gameZhuang();
		$this->m_gameStatus = self::GAMESTATE_SEND;

		$ingameCount = 0;
		foreach ($this->m_deskData as $seatno => $info) {
			if ($info['ingame']) {
				++$ingameCount;
			}
		}
		$this->m_cbPlayerCount = $ingameCount;
		if (GR_TEST_FORCE_DECK && $this->m_forcedDeck !== null) {
			$this->m_cbLeftCard = $this->buildForcedDeck($ingameCount);
		} else {
			$this->m_cbLeftCard = GameLogic::getInstance()->createCards($ingameCount);
		}
		$handCardsData = array();
		foreach ($this->m_deskData as $seatno => $info) {
			$handCards = array();
			if ($info['ingame']) {
				$drawCount = ($seatno == $this->m_wBankerUser) ? 13 : 12;
				if ($this->m_controlList[$seatno][$this->m_playGround]) {
					$lastCards = array_splice($this->m_cbLeftCard, -1);
					$handCards[] = $lastCards[0];
				}else{
					$lastCards = array_splice($this->m_cbLeftCard, -1);
					$handCards[] = $lastCards[0];
				}
				$readySendHandCards = array_merge($handCards,array_splice($this->m_cbLeftCard, -$drawCount));
				$handCards = $readySendHandCards;

				$this->m_cbCardIndex[$seatno] = GameLogic::getInstance()->bubbleCards(GameLogic::getInstance()->cleanHandCards($handCards));
				asort($handCards);
				$handCards = array_values($handCards);
				$handCardsData[$seatno] = $handCards;
				$this->sendMsgToUser($this->m_deskData[$seatno]['uid'],GR_GAME_MJ_SEND_HANDCARDS,$handCards);
			}
		}
		//回放记录按座位逐条保存，避免把全桌手牌明文打成一行
		foreach ($handCardsData as $seatno => $hcards) {
			$this->saveGameMessage(2, array($seatno => $hcards));
		}

		$this->m_cbLeftCardCount = count($this->m_cbLeftCard);
		$this->addTimeClick(CLICK_NAME_SENDHANDCARDS,CLICK_VALUE_SENDHANDCARDS,array($this,'gameSendCardsCallBack'));
	}

	public function getWeathCount($handcards,$count)
	{
		return false;
	}

	public function replaceWeath($handcards)
	{
		return $handcards;
	}

	public function broadcastFaceUp($extra = array())
	{
		$data = array(
			'faceUp' => $this->m_faceUp,
			'seatno' => $this->m_faceUpUser,
			'phase'  => $this->m_faceUpPhase ? 1 : 0,
			'huIdx'  => $this->m_faceUpHuIndex,
		);
		foreach ($extra as $k => $v) $data[$k] = $v;
		$this->sendRoomMessage(GR_GAME_MJ_FACE_UP, $data);
	}

	public function refillFaceUp()
	{
		while (count($this->m_faceUp) < GR_FACE_UP_COUNT && count($this->m_cbLeftCard) > 0) {
			$pick = array_splice($this->m_cbLeftCard, -1, 1);
			$this->m_faceUp[] = $pick[0];
		}
		$this->m_cbLeftCardCount = count($this->m_cbLeftCard);
	}

	public function enterFaceUpPhase($seatno, $context = 'AFTER_GANG')
	{
		if (count($this->m_faceUp) == 0 || $seatno <= 0) return;
		$this->m_faceUpUser = $seatno;
		$this->m_faceUpPhase = true;
		$this->m_faceUpHuIndex = array();
		$this->m_flipContext = $context;
		$this->m_gangHuaWinnerTile = -1;
		foreach ($this->m_faceUp as $idx => $card) {
			$tmpRes = array();
			$r = GameLogic::getInstance()->AnalyseChiHuCard(
				$this->m_cbCardIndex[$seatno],
				$this->m_WeaveItemArray[$seatno],
				$card,
				$tmpRes
			);
			if ($r == WIK_CHI_HU) {
				$this->m_faceUpHuIndex[] = $idx;
			}
		}
		$this->broadcastFaceUp();
		$prompt = array(
			'seatno' => $seatno,
			'context' => $context,
			'canZimo' => count($this->m_faceUpHuIndex) > 0,
			'canDiscard' => true,
			'canKong' => ($context === 'OPENING') ? GR_OPENING_FLIP_KONG : true,
			'huIdx' => $this->m_faceUpHuIndex,
			'timeoutSec' => CLICK_VALUE_FLIPCHOOSE,
			'deadline' => $this->serverDeadline(CLICK_VALUE_FLIPCHOOSE),
		);
		$this->sendMsgToUser($this->m_deskData[$seatno]['uid'], GR_GAME_MJ_ACTION_PROMPT, $prompt);
		$this->addTimeClick(CLICK_NAME_FLIPCHOOSE, CLICK_VALUE_FLIPCHOOSE, array($this, 'onFlipChooseTimeout'));
	}

	public function clearAutoPlay($seatno)
	{
		if (isset($this->m_timeoutStreak[$seatno])) $this->m_timeoutStreak[$seatno] = 0;
		if (isset($this->m_autoPlayOn[$seatno])) {
			$this->m_autoPlayOn[$seatno] = false;
			$this->m_autoPlayCause[$seatno] = '';
		}
	}

	// v1.20 2.8：结束托管并广播全桌（仅在确实处于托管时广播）
	public function clearAutoPlayWithBroadcast($seatno, $cause = '')
	{
		// 玩家主动操作即视为"连续操作超时"中断，清零连击计数
		if (isset($this->m_timeoutStreak[$seatno])) $this->m_timeoutStreak[$seatno] = 0;
		if (empty($this->m_autoPlayOn[$seatno])) return;
		$this->m_autoPlayOn[$seatno] = false;
		$this->m_autoPlayCause[$seatno] = '';
		$this->sendRoomMessage(GR_GAME_MJ_AUTO_PLAY, array('seatno'=>$seatno,'cause'=>$cause,'on'=>false));
	}

	// v1.20 2.8：客户端取消超时托管（仅 TIMEOUT 托管可取消）
	public function cancelAutoPlay($uid)
	{
		$seatno = -1;
		foreach ($this->m_deskData as $sn => $info) {
			if (isset($info['uid']) && $info['uid'] == $uid) { $seatno = $sn; break; }
		}
		if ($seatno < 0) return false;
		// 只有超时托管可取消；断线/离座等其他原因本阶段不可取消
		if (empty($this->m_autoPlayOn[$seatno])) return false;
		if ($this->m_autoPlayCause[$seatno] !== 'TIMEOUT') return false;
		$this->clearAutoPlayWithBroadcast($seatno, 'TIMEOUT');
		return true;
	}

	// v1.20 2.8：截止时间以服务端时间为准下发
	private function serverDeadline($sec)
	{
		return time() + intval($sec);
	}

	// v1.20 2.8：托管选牌——刚摸/刚选的牌优先，否则显示顺序最右一张（避开"碰后禁打回"）
	private function pickAutoDiscardTile($seatno)
	{
		$lastDrawn = isset($this->m_lastDrawnTile[$seatno]) ? $this->m_lastDrawnTile[$seatno] : -1;
		$forbid = isset($this->m_forbidDiscard[$seatno]) ? $this->m_forbidDiscard[$seatno] : -1;
		if ($lastDrawn > 0 && $lastDrawn != $forbid) {
			$idx = GameLogic::getInstance()->SwitchToCardIndex($lastDrawn);
			if (isset($this->m_cbCardIndex[$seatno][$idx]) && $this->m_cbCardIndex[$seatno][$idx] > 0) {
				return $lastDrawn;
			}
		}
		if (!isset($this->m_cbCardIndex[$seatno])) return -1;
		$maxIdx = -1;
		foreach ($this->m_cbCardIndex[$seatno] as $cardIdx => $cnt) {
			if ($cnt <= 0) continue;
			$cardIdx = intval($cardIdx);
			$byte = GameLogic::getInstance()->SwitchToCardData($cardIdx);
			if (is_array($byte)) $byte = reset($byte);
			if ($byte == $forbid) continue;
			if ($cardIdx > $maxIdx) { $maxIdx = $cardIdx; }
		}
		if ($maxIdx >= 0) {
			$byte = GameLogic::getInstance()->SwitchToCardData($maxIdx);
			if (is_array($byte)) $byte = reset($byte);
			return $byte;
		}
		return -1;
	}

	private function getRightmostTile($seatno)
	{
		$maxIdx = -1;
		$maxByte = -1;
		foreach ($this->m_cbCardIndex[$seatno] as $cardIdx => $cnt) {
			if ($cnt <= 0) continue;
			if ($cardIdx > $maxIdx) { $maxIdx = $cardIdx; }
		}
		if ($maxIdx >= 0) {
			$byte = GameLogic::getInstance()->SwitchToCardData($maxIdx);
			if (is_array($byte)) $byte = reset($byte);
			return $byte;
		}
		return $maxByte;
	}

	public function onFlipChooseTimeout()
	{
		$this->destoryClick(CLICK_NAME_FLIPCHOOSE);
		$seatno = $this->m_faceUpUser;
		if (!$this->m_faceUpPhase || $seatno <= 0) return;
		// v1.20 2.11：只有"摸牌后出牌超时"才计入托管连击；选翻超时只代选，不计入连击（碰/杠/胡窗口同理只算过）
		$pickIdx = 0;
		if (count($this->m_faceUpHuIndex) > 0) $pickIdx = $this->m_faceUpHuIndex[0];
		$uid = isset($this->m_deskData[$seatno]['uid']) ? $this->m_deskData[$seatno]['uid'] : 0;
		// 选翻已改为普通摸牌：onPickFlip 内部完成补亮/判胡判杠/进入出牌，
		// 托管者由 gameOutcardTurnNoCards 或 WaitClaim 超时自动代打
		$this->onPickFlip($uid, $pickIdx, true);
	}

	public function onPickFlip($uid, $pickIdx, $isAuto = false)
	{
		$seatno = 0;
		foreach ($this->m_deskData as $sn => $info) {
			if ($info['uid'] == $uid) { $seatno = $sn; break; }
		}
		if ($seatno == 0 || !$this->m_faceUpPhase || $seatno != $this->m_faceUpUser) return false;
		if (!isset($this->m_faceUp[$pickIdx])) return false;
		// v1.20 2.8：超时托管链路（isAuto）不清托管；本人主动操作才结束托管
		if (!$isAuto) $this->clearAutoPlayWithBroadcast($seatno, 'TIMEOUT');
		$this->destoryClick(CLICK_NAME_FLIPCHOOSE);
		// 过圈：选明牌入手算本人一次摸牌，清空过点炮/过碰（过杠锁死不清）
		$this->clearSkippedByTurn($seatno);

		$pickCard = $this->m_faceUp[$pickIdx];
		unset($this->m_faceUp[$pickIdx]);
		$this->m_faceUp = array_values($this->m_faceUp);
		// 杠花判据：杠后选翻选走的这张即为杠花候选
		if ($this->m_flipContext === 'AFTER_GANG') {
			$this->m_gangHuaWinnerTile = $pickCard;
		}
		// 立刻补回 2 张亮牌
		$this->refillFaceUp();
		// 选翻结束：选走的这张按普通摸牌处理
		$this->m_faceUpPhase = false;
		$this->m_faceUpUser = -1;
		$this->m_wOutCardUser = $seatno;
		$this->m_cbSendCardData = $pickCard;
		$this->m_bWealthCards = $pickCard;
		$this->m_cbthisCards[$seatno] = $pickCard;
		// v1.20 2.8：记录刚选到的牌，供出牌超时托管"打刚摸的牌"使用
		$this->m_lastDrawnTile[$seatno] = $pickCard;
		$this->m_gameStatus = self::GAMESTATE_OUT;
		$this->m_OperateNotify = array();

		$this->sendRoomMessage(GR_GAME_MJ_PICK_FLIP, array(
			'seatno'=>$seatno, 'pickIdx'=>$pickIdx, 'pickCard'=>$pickCard, 'faceUpNow'=>$this->m_faceUp
		));
		$this->broadcastFaceUp();
		// 与普通摸牌 gameSendOneCards 一致：广播摸牌 + 置客户端 canOut=true（可点自己手牌出牌）
		$this->sendRoomMessage(GR_GAME_MJ_SEND_CARDS, array('seatno'=>$seatno));
		$this->sendMsgToUser($uid, GR_GAME_MJ_TOUCH_CARDS, array($pickCard));
		// 照常判胡/杠：能胡/杠 → GAMESTATE_OPERATE 提示；否则牌入手 → 等普通出牌
		$this->insertCardsToHand($seatno);
		if ($this->m_gameStatus != self::GAMESTATE_OPERATE) {
			$this->gameOutcardTurnNoCards();
		}
		return true;
	}

	public function onFlipZimo($uid, $isAuto = false)
	{
		$seatno = 0;
		foreach ($this->m_deskData as $sn => $info) {
			if ($info['uid'] == $uid) { $seatno = $sn; break; }
		}
		if ($seatno == 0 || !$this->m_faceUpPhase || $seatno != $this->m_faceUpUser) return;
		$pickCard = isset($this->m_lastDrawnTile[$seatno]) ? $this->m_lastDrawnTile[$seatno] : 0;
		if ($pickCard <= 0) return;
		// v1.20 2.9：自摸申报前手牌应为等出牌 14-3*碰杠组数
		if (!$this->checkHandCount($seatno, 'discard')) {
			$this->rejectHandCount($seatno, 'discard');
			return;
		}
		// v1.20 2.3 步骤5：翻牌自摸必须该张确实成胡（服务端校验，防改造客户端强胡）
		$pickIdx = GameLogic::getInstance()->SwitchToCardIndex($pickCard);
		$huOK = false;
		if (isset($this->m_cbCardIndex[$seatno][$pickIdx]) && $this->m_cbCardIndex[$seatno][$pickIdx] > 0) {
			$this->m_cbCardIndex[$seatno][$pickIdx]--;
			if ($this->m_cbCardIndex[$seatno][$pickIdx] <= 0) unset($this->m_cbCardIndex[$seatno][$pickIdx]);
			$tmpRes = array();
			$r = GameLogic::getInstance()->AnalyseChiHuCard(
				$this->m_cbCardIndex[$seatno],
				$this->m_WeaveItemArray[$seatno],
				$pickCard,
				$tmpRes
			);
			$this->m_cbCardIndex[$seatno][$pickIdx] = isset($this->m_cbCardIndex[$seatno][$pickIdx]) ? $this->m_cbCardIndex[$seatno][$pickIdx] + 1 : 1;
			if ($r == WIK_CHI_HU) $huOK = true;
		}
		if (!$huOK) return;
		if (!$isAuto) $this->clearAutoPlayWithBroadcast($seatno, 'TIMEOUT');
		$OperateResult = array(
			'wOperateUser' => $seatno,
			'wProvideUser' => $seatno,
			'cbOperateCode' => WIK_CHI_HU,
			'cbOperateCard' => $pickCard,
			'bDarkGuang' => false,
			'source'      => 'flip_zimo',
		);
		$this->m_faceUpPhase = false;
		$this->m_faceUpUser = -1;
		// 天胡只认路径A（发牌后庄家14张即成胡）；杠后选翻自摸不算天胡
		$flipZimoData = array('seatno'=>$seatno,'card'=>$pickCard);
		$this->sendRoomMessage(GR_GAME_MJ_FLIP_ZIMO, $flipZimoData);
		$this->gameHuCards($OperateResult);
	}

	public function onFlipDiscard($uid, $outCard, $isAuto = false)
	{
		$seatno = 0;
		foreach ($this->m_deskData as $sn => $info) {
			if ($info['uid'] == $uid) { $seatno = $sn; break; }
		}
		if ($seatno == 0 || !$this->m_faceUpPhase || $seatno != $this->m_faceUpUser) return;
		$outIdx = GameLogic::getInstance()->SwitchToCardIndex($outCard);
		if (!isset($this->m_cbCardIndex[$seatno][$outIdx]) || $this->m_cbCardIndex[$seatno][$outIdx] <= 0) return;
		if (!$isAuto) $this->clearAutoPlayWithBroadcast($seatno, 'TIMEOUT');
		$this->m_cbCardIndex[$seatno][$outIdx]--;
		if ($this->m_cbCardIndex[$seatno][$outIdx] <= 0) unset($this->m_cbCardIndex[$seatno][$outIdx]);
		$this->m_cbDiscardCard[$seatno][] = $outCard;
		$this->m_cbDiscardCardOndesk[$seatno][] = $outCard;
		$this->m_cbOutCardData = $outCard;
		$this->m_wOutCardUser = $seatno;
		$this->m_faceUpPhase = false;
		$this->m_faceUpUser = -1;
		$this->sendRoomMessage(GR_GAME_MJ_FLIP_DISCARD, array(
			'seatno'=>$seatno, 'outCard'=>$outCard, 'fromFlip'=>true
		));
		$this->peopleTurn();
		$this->gameOutcardTurn();
	}

	public function onFlipKong($uid, $tile, $type='an')
	{
		$seatno = 0;
		foreach ($this->m_deskData as $sn => $info) {
			if ($info['uid'] == $uid) { $seatno = $sn; break; }
		}
		if ($seatno == 0 || !$this->m_faceUpPhase || $seatno != $this->m_faceUpUser) return;
		if (!GR_CHAIN_KONG) return;
		$gangCards = array();
		$this->findAllGang($seatno, $gangCards);
		if (!in_array($tile, $gangCards)) return;
		$this->clearAutoPlayWithBroadcast($seatno, 'TIMEOUT');
		$OperateResult = array(
			'wOperateUser' => $seatno,
			'wProvideUser' => $seatno,
			'cbOperateCode' => WIK_GANG,
			'cbOperateCard' => $tile,
			'bDarkGuang' => ($type === 'an'),
			'source'      => 'flip_kong',
		);
		foreach ($this->m_WeaveItemArray[$seatno] as $key => $value) {
			if ($value['cbWeaveKind'] == WIK_PENG && $value['cbCenterCard'] == $tile) {
				$OperateResult['bDarkGuang'] = false;
				break;
			}
		}
		$this->m_faceUpPhase = false;
		$this->m_faceUpUser = -1;
		$this->sendRoomMessage(GR_GAME_MJ_FLIP_KONG, array('seatno'=>$seatno,'tile'=>$tile,'type'=>$type));
		$this->gameGangCards($OperateResult);
	}

	public function onPickFaceUp($uid, $pickIdx, $outCard, $huFlag, $paoAdd)
	{
		return;
	}

	public function onPassFaceUp($uid)
	{
		return;
	}

	public function gameSendCardsCallBack(){
		$this->destoryClick(CLICK_NAME_SENDHANDCARDS);
		$this->m_cbLeftCardCount = count($this->m_cbLeftCard);
		while (count($this->m_faceUp) < GR_FACE_UP_COUNT && count($this->m_cbLeftCard) > 0) {
			$pick = array_splice($this->m_cbLeftCard, -1, 1);
			$this->m_faceUp[] = $pick[0];
		}
		$this->m_cbLeftCardCount = count($this->m_cbLeftCard);
		$this->broadcastFaceUp();
		$banker = $this->m_wBankerUser;
		// ========= Step 1: CheckTianHu =========
		$tianhuOK = false;
		$tianhuCard = -1;
		$bankerTotal = 0;
		foreach ($this->m_cbCardIndex[$banker] as $idx => $cnt) $bankerTotal += intval($cnt);
		if ($bankerTotal == 14) {
			foreach ($this->m_cbCardIndex[$banker] as $cardIdx => $cnt) {
				if ($cnt <= 0) continue;
				$this->m_cbCardIndex[$banker][$cardIdx]--;
				if ($this->m_cbCardIndex[$banker][$cardIdx] <= 0) unset($this->m_cbCardIndex[$banker][$cardIdx]);
				$tmpRes = array();
				$cardByte = GameLogic::getInstance()->SwitchToCardData($cardIdx);
				if (is_array($cardByte)) $cardByte = reset($cardByte);
				$r = GameLogic::getInstance()->AnalyseChiHuCard(
					$this->m_cbCardIndex[$banker],
					$this->m_WeaveItemArray[$banker],
					$cardByte,
					$tmpRes
				);
				$this->m_cbCardIndex[$banker][$cardIdx] = isset($this->m_cbCardIndex[$banker][$cardIdx]) ? $this->m_cbCardIndex[$banker][$cardIdx] + 1 : 1;
				if ($r == WIK_CHI_HU) {
					$tianhuOK = true;
					$tianhuCard = $cardByte;
					break;
				}
			}
		}
		if ($tianhuOK) {
			$this->m_lastHuSource = 'TIAN_HU';
			$this->m_lastHandEndReason = 'TIAN_HU';
			$this->m_lastDrawnTile[$banker] = $tianhuCard;
			$OperateResult = array(
				'wOperateUser' => $banker,
				'wProvideUser' => $banker,
				'cbOperateCode' => WIK_CHI_HU,
				'cbOperateCard' => $tianhuCard,
				'bDarkGuang' => false,
				'source'      => 'tianhu',
			);
			$this->sendRoomMessage(GR_GAME_MJ_FLIP_ZIMO, array('seatno'=>$banker,'card'=>$tianhuCard,'tianhu'=>1));
			$this->gameHuCards($OperateResult);
			return;
		}
		// ========= Step 2: DealerOpening = 庄家14→13，打首张 =========
		$this->m_dealerOpeningPhase = true;
		$this->m_openingDone = false;
		$this->m_wOutCardUser = $banker;
		$this->m_cbSendCardData = -1;
		$this->m_gameStatus = self::GAMESTATE_OUT;
		$this->m_OperateNotify = array();
		// 庄家首张出牌动作（禁首张前暗杠 dealer_opening_an_gang=false）
		$this->gameOutcardTurn(true);
	}

	public function afterOpeningWaitClaim()
	{
		// 首张 WaitClaim 结果后：全过 → 过圈，由下家正常摸牌墙头；碰/杠/胡都在 gameOperateReg 处理
		if ($this->m_openingDone) return;
		$banker = $this->m_wBankerUser;
		$allPass = true;
		foreach ($this->m_cbUserAction as $seatno => $act) {
			if ($seatno == $banker) continue;
			if ($act != -1 && $act != WIK_NULL) { $allPass = false; break; }
		}
		if (!$allPass) return;
		// 开局不再选翻：全过后直接进入正常轮转，下家摸牌墙头
		$this->m_openingDone = true;
		$this->m_dealerOpeningPhase = false;
		$this->peopleTurn();
		$this->gameOutcardTurn();
	}

	public function getNewSendCards()
	{
		$rand = array_rand($this->m_cbLeftCard);
		$cards = $this->m_cbLeftCard[$rand];
		$cardsCount = array_count_values($this->m_cbLeftCard)[$cards];
		if (count($this->m_cbLeftCard) <= 4) {
			return -1;
		}
		if (in_array($cards, $this->m_nextSendCard) && $cardsCount <= 1) {
			return $this->getNewSendCards();
		}
		return $cards;
	}
	//每个人开始的发牌
	public function gameSendOneCards()
	{
		$this->m_gameStatus = self::GAMESTATE_OUT;
		$this->m_OperateNotify = array();
		if ($this->m_nextSendCard[$this->m_wOutCardUser] != -1 && in_array($this->m_nextSendCard[$this->m_wOutCardUser], $this->m_cbLeftCard)) {
			$cards = $this->m_nextSendCard[$this->m_wOutCardUser];
			$position = array_search($cards, $this->m_cbLeftCard);
			unset($this->m_cbLeftCard[$position]);
			$this->m_cbLeftCard = array_values($this->m_cbLeftCard);
		}else if($this->m_nextSendCard[$this->m_wOutCardUser] != -1 || !in_array($this->m_nextSendCard[$this->m_wOutCardUser], $this->m_cbLeftCard)){
			$cards = $this->m_cbLeftCard[count($this->m_cbLeftCard) - 1];
			$cardsCount = array_count_values($this->m_cbLeftCard)[$cards];
			if (in_array($cards, $this->m_nextSendCard) && $cardsCount <= 1) {
				$cards = $this->getNewSendCards();
				if ($cards != -1) {
					$position = array_search($cards, $this->m_cbLeftCard);
					unset($this->m_cbLeftCard[$position]);
					$this->m_cbLeftCard = array_values($this->m_cbLeftCard);
				}else{
					$cards = array_splice($this->m_cbLeftCard, -1)[0];
				}
			}else{
				$cards = array_splice($this->m_cbLeftCard, -1)[0];
			}
		}else{
			$cards = array_splice($this->m_cbLeftCard, -1)[0];
		}
		$this->m_cbSendCardCount++;
		$this->m_cbLeftCardCount--;
		$this->m_cbSendCardData = $cards;
		$this->m_bWealthCards = $cards;
		$this->m_cbthisCards[$this->m_wOutCardUser] = $cards;
		// v1.20 2.8：记录刚摸的牌，供出牌超时托管"打刚摸的牌"使用
		$this->m_lastDrawnTile[$this->m_wOutCardUser] = $cards;
		$seatno = $this->m_wOutCardUser;
		$data['seatno'] = $seatno;
		$this->sendRoomMessage(GR_GAME_MJ_SEND_CARDS,$data);
		$data['card'] = $cards;
		$this->saveGameMessage(3,$data);
		$this->sendMsgToUser($this->m_deskData[$seatno]['uid'],GR_GAME_MJ_TOUCH_CARDS,array($cards));
		$this->insertCardsToHand($seatno);
	}

	//轮到某个人的动作
	public function cardsToHand($seatno)
	{
		$hadGangCards = array();
		$hadGang = $this->findAllGang($seatno,$hadGangCards);
		$this->m_OperateNotify = array();
		$allowGang = true;
		if ($this->m_dealerOpeningPhase && !GR_DEALER_OPENING_AN_GANG) $allowGang = false;
		if ($allowGang && $hadGang == WIK_GANG) {
			if (count($hadGangCards) == 1) {
				$this->m_OperateNotify[$seatno]['wResumeUser'] = $seatno;
				$this->m_OperateNotify[$seatno]['cbActionMask'] = WIK_GANG;
				$this->m_OperateNotify[$seatno]['cbActionCard'] = $hadGangCards['0'];
				$this->m_OperateNotify[$seatno]['GangCardNotice'] = $hadGangCards;
			}else if (count($hadGangCards) > 1) {
				$this->m_OperateNotify[$seatno]['wResumeUser'] = $seatno;
				$this->m_OperateNotify[$seatno]['cbActionMask'] = WIK_GANG;
				$this->m_OperateNotify[$seatno]['cbActionCard'] = $hadGangCards[0];
				$this->m_OperateNotify[$seatno]['GangCardNotice'] = $hadGangCards;
			}

			$this->m_gameStatus = self::GAMESTATE_OPERATE;
			$this->gameOperateNotify();
		}
		
	}

	//牌进入手中的动作
	public function insertCardsToHand($seatno)
	{
		$ChiHuResult = array();
		$hadGangCards = array();
		$allowGang = true;
		if ($this->m_dealerOpeningPhase && !GR_DEALER_OPENING_AN_GANG) $allowGang = false;
		$gang = $allowGang ? $this->judgeGang($this->m_cbCardIndex[$seatno],$this->m_cbSendCardData,$seatno) : WIK_NULL;
		$hu = $this->judgeHu($this->m_cbCardIndex[$seatno],$this->m_WeaveItemArray[$seatno],$this->m_cbSendCardData,$ChiHuResult,$seatno);
		$hadGang = $allowGang ? $this->findAllGang($seatno,$hadGangCards) : WIK_NULL;
		$cardsIndex = GameLogic::getInstance()->SwitchToCardIndex($this->m_cbSendCardData);
		$this->m_OperateNotify = array();
		$this->m_OperateNotify[$seatno]['cbActionMask'] = WIK_NULL;
		if ($gang == WIK_NULL && $hu == WIK_NULL && $hadGang == WIK_NULL) {
			$this->m_cbSendCardData = -1;
			$this->m_cbCardIndex[$seatno][$cardsIndex] = isset($this->m_cbCardIndex[$seatno][$cardsIndex])?$this->m_cbCardIndex[$seatno][$cardsIndex]+1:1;
		}
		if ($gang == WIK_GANG) {
			$this->m_OperateNotify[$seatno]['wResumeUser'] = $seatno;
			$this->m_OperateNotify[$seatno]['cbActionMask'] = WIK_GANG;
			$this->m_OperateNotify[$seatno]['cbActionCard'] = $this->m_cbSendCardData;
			$this->m_OperateNotify[$seatno]['GangCardNotice'][] = $this->m_cbSendCardData;
		}
		if ($hadGang == WIK_GANG) {
			if (count($hadGangCards) == 1) {
				$this->m_OperateNotify[$seatno]['wResumeUser'] = $seatno;
				$this->m_OperateNotify[$seatno]['cbActionMask'] = WIK_GANG;
				if ($gang == WIK_GANG) {
					$this->m_OperateNotify[$seatno]['cbActionCard'] = $this->m_cbSendCardData;
					$this->m_OperateNotify[$seatno]['GangCardNotice'] = $hadGangCards;
					$this->m_OperateNotify[$seatno]['GangCardNotice'][] = $this->m_cbSendCardData;
				}else{
					$this->m_OperateNotify[$seatno]['cbActionCard'] = $hadGangCards['0'];
					$this->m_OperateNotify[$seatno]['GangCardNotice'] = $hadGangCards;
				}
			}else if (count($hadGangCards) > 1) {
				$this->m_OperateNotify[$seatno]['wResumeUser'] = $seatno;
				$this->m_OperateNotify[$seatno]['cbActionMask'] = WIK_GANG;
				if ($gang == WIK_GANG) {
					$this->m_OperateNotify[$seatno]['cbActionCard'] = $this->m_cbSendCardData;
					$this->m_OperateNotify[$seatno]['GangCardNotice'] = $hadGangCards;
					$this->m_OperateNotify[$seatno]['GangCardNotice'][] = $this->m_cbSendCardData;
				}else{
					$this->m_OperateNotify[$seatno]['cbActionCard'] = $hadGangCards[0];
					$this->m_OperateNotify[$seatno]['GangCardNotice'] = $hadGangCards;
				}
			}
		}
		if ($hu == WIK_CHI_HU) {
			$this->m_OperateNotify[$seatno]['wResumeUser'] = $seatno;
			$this->m_OperateNotify[$seatno]['cbActionMask'] |= WIK_CHI_HU;
			$this->m_OperateNotify[$seatno]['cbActionCard'] = $this->m_cbSendCardData;
			$this->m_OperateNotify[$seatno]['dwChiHuRight'] = $ChiHuResult;
		}
		// v1.20 2.9：摸牌后校验手牌张数
		// 牌已入手 → 等出牌 14-3*碰杠组数；牌留待杠/胡未入手 → 等摸 13-3*碰杠组数
		$drawnIn = ($gang == WIK_NULL && $hu == WIK_NULL && $hadGang == WIK_NULL);
		$handState = $drawnIn ? 'discard' : 'draw';
		if (!$this->checkHandCount($seatno, $handState)) {
			$this->rejectHandCount($seatno, $handState);
			return;
		}
		if ($gang != WIK_NULL || $hu != WIK_NULL || $hadGang != WIK_NULL) {
			$this->m_gameStatus = self::GAMESTATE_OPERATE;
			$this->gameOperateNotify();
		}
		
	}

	public function findAllGang($seatno,&$hadGangCards)
	{
		// 墙空或墙头仅剩<=2 张时禁止再杠
		if (!$this->canKongByWall()) {
			return WIK_NULL;
		}
		$wealthCardIndex = GameLogic::getInstance()->SwitchToCardIndex(WEALTHCARD);
		foreach ($this->m_cbCardIndex[$seatno] as $cards => $value) {
			if ($this->m_cbCardIndex[$seatno][$cards] == 4 && $wealthCardIndex != $cards) {
				$hadGangCards[] = GameLogic::getInstance()->SwitchToCardData($cards);
			}
		}
		if (!$this->sendAndOut($seatno)) {
			foreach ($this->m_WeaveItemArray[$seatno] as $key => $value) {
				if ($this->m_WeaveItemArray[$seatno][$key]['cbWeaveKind'] == WIK_PENG && $this->m_WeaveItemArray[$seatno][$key]['cbCenterCard'] == $this->m_cbSendCardData) {
					$hadGangCards[] = $this->m_cbSendCardData;
					continue;
				}
				if ($this->m_WeaveItemArray[$seatno][$key]['cbWeaveKind'] == WIK_PENG) {
					foreach ($this->m_cbCardIndex[$seatno] as $cardsIndex => $cardsCount) {
						if ($cardsCount > 1) {
							continue;
						}else if ($cardsCount == 1) {
							$v = GameLogic::getInstance()->SwitchToCardData($cardsIndex);
							if ($v == $this->m_WeaveItemArray[$seatno][$key]['cbCenterCard']) {
								$hadGangCards[] = $v;
							}
						}
					}
				}
			}
		}
		// 过杠锁死：剔除本局已放弃的杠
		if (count($this->m_skippedBuGang[$seatno]) > 0) {
			$hadGangCards = array_values(array_diff($hadGangCards, $this->m_skippedBuGang[$seatno]));
		}
		if (count($hadGangCards) == 0) {
			return WIK_NULL;
		}else{
			return WIK_GANG;
		}
	}
	//发送动作通知
	public function gameOperateNotify(){
		$deadline = $this->serverDeadline(CLICK_VALUE_WAITCLAIM);
		foreach ($this->m_OperateNotify as $seatno => $info) {
			// v1.20 2.8：截止时间以服务端时间为准下发
			$this->m_OperateNotify[$seatno]['timeoutSec'] = CLICK_VALUE_WAITCLAIM;
			$this->m_OperateNotify[$seatno]['deadline'] = $deadline;
			$this->sendMsgToUser($this->m_deskData[$seatno]['uid'],GR_GAME_MJ_OPERATE_NOTIFY,$this->m_OperateNotify[$seatno]);
		}
		$this->saveGameMessage(5,$this->m_OperateNotify);
		$this->addTimeClick(CLICK_NAME_WAITCLAIM, CLICK_VALUE_WAITCLAIM, array($this, 'onWaitClaimTimeout'));
	}

	//响应动作通知
	public function gameOperateReg($uid,$cards,$action,$isAuto=false){
		//@@ 此处需要校验动作玩家是否有效 判断是否发送过状态
		if ($this->m_gameStatus != self::GAMESTATE_OPERATE) {
			return;
		}
		$data = array();
		foreach ($this->m_deskData as $seatno => $info) {
			if ($this->m_deskData[$seatno]['uid'] == $uid) {
				$data['seatno'] = $seatno;
				break;
			}
		}
		$data['cards'] = $cards;
		$data['action'] = $action;
		foreach ($this->m_OperateNotify as $seatno => $info) {
			if ($this->m_cbUserAction[$data['seatno']] != -1) {
				return ;
			}
		}
		if (in_array($action, array(WIK_LEFT, WIK_CENTER, WIK_RIGHT))) {
			return;
		}
		// v1.20 2.8：本人主动表态即结束超时托管（超时自动表态 isAuto 不清托管）
		if (!$isAuto) $this->clearAutoPlayWithBroadcast($data['seatno'], 'TIMEOUT');
		if ($action != WIK_NULL) {
			if(($this->m_OperateNotify[$data['seatno']]['cbActionMask'] & $action) <= 0){
				return;
			}
			if ($action != WIK_GANG) {
				if ($this->m_OperateNotify[$data['seatno']]['cbActionCard'] != $cards) {
					return;
				}	
			}else if ($action == WIK_GANG) {
				if (!isset($this->m_OperateNotify[$data['seatno']]['GangCardNotice']) || !in_array($cards, $this->m_OperateNotify[$data['seatno']]['GangCardNotice'])) {
					return;
				}
			}
		}else{
			if (!isset($this->m_OperateNotify[$data['seatno']]['cbActionMask']) || $this->m_OperateNotify[$data['seatno']]['cbActionMask'] == 0) {
				return;
			}
		}
		if ($action != WIK_NULL && $action != WIK_CHI_HU) {
			if ($action != WIK_GANG) {
				switch ($action) {
					case WIK_PENG:
						$res = $this->judgePeng($this->m_cbCardIndex[$data['seatno']],$data['cards'],$data['seatno']);
						break;
					default:
						return;
						break;
				}
				if (($res & $action) <= 0) {
					return;
				}
			}else{
				$res = $this->judgeGang($this->m_cbCardIndex[$data['seatno']],$data['cards'],$data['seatno']);
				if (($res & $action) <= 0) {
					$hadGangCards = array();
					$this->findAllGang($data['seatno'],$hadGangCards);
					if (!in_array($data['cards'], $hadGangCards)) {
						return;
					}
				}
			}
		}
		if ($action == WIK_NULL) {
			$nullMask = isset($this->m_OperateNotify[$data['seatno']]['cbActionMask']) ? $this->m_OperateNotify[$data['seatno']]['cbActionMask'] : 0;
			$nullCard = isset($this->m_OperateNotify[$data['seatno']]['cbActionCard']) ? $this->m_OperateNotify[$data['seatno']]['cbActionCard'] : 0;
			// 过点炮（过圈清；不影响自摸）
			if (($nullMask & WIK_CHI_HU) > 0) {
				$this->m_skippedDianPao[$data['seatno']][] = $nullCard;
				$this->m_cbNotOperate[$data['seatno']]['hucards'][] = $nullCard;
			}
			// 过碰（过圈清）
			if (($nullMask & WIK_PENG) > 0) {
				$this->m_skippedPeng[$data['seatno']][] = $nullCard;
				$this->m_cbNotOperate[$data['seatno']]['pengcards'][] = $nullCard;
			}
			// 过杠（本局锁死，过圈也不清；仅锁明杠/补杠，暗杠不锁）
			if (($nullMask & WIK_GANG) > 0) {
				$lockGang = array();
				if (isset($this->m_OperateNotify[$data['seatno']]['GangCardNotice'])) {
					foreach ($this->m_OperateNotify[$data['seatno']]['GangCardNotice'] as $gc) {
						$lockGang[] = $gc;
					}
				} else {
					$lockGang[] = $nullCard;
				}
				foreach ($lockGang as $gc) {
					if ($this->isAnGangCard($data['seatno'], $gc)) {
						continue;
					}
					$this->m_skippedBuGang[$data['seatno']][] = $gc;
				}
			}
		}
		$action = true;
		if ($data['action'] == WIK_PENG) {
			// v1.20 2.10：claim 窗口结束前任何碰都不执行；只登记表态，交关窗聚合裁决
			$action = false;
			$this->m_cbUserAction[$data['seatno']] = WIK_PENG;
		}else if ($data['action'] == WIK_GANG) {
			// v1.20 2.10：claim 窗口结束前任何杠都不执行；只登记表态，交关窗聚合裁决
			$action = false;
			$this->m_cbUserAction[$data['seatno']] = WIK_GANG;
		}else if ($data['action'] == WIK_CHI_HU) {
			// v1.20 2.10：能胡的人窗口结束后一起胡（一炮多响）；只登记表态
			$action = false;
			$this->m_cbUserAction[$data['seatno']] = WIK_CHI_HU;
		}else if ($data['action'] == WIK_NULL){
			foreach ($this->m_OperateNotify as $seatno => $info) {
				if ($seatno != $data['seatno'] && $seatno != $this->m_wOutCardUser) {
					if (count($this->m_OperateNotify[$seatno]) != 0) {
						$action = false;
					}
				}
			}
			$OperateResult = array();
			$OperateResult['wOperateUser'] = $data['seatno'];
			$OperateResult['wProvideUser'] = $this->m_wOutCardUser;
			$OperateResult['cbOperateCode'] = $data['action'];
			$OperateResult['cbOperateCard'] = $data['cards'];
			$OperateResult['bDarkGuang'] = false;
			if ($action) {
				$this->saveGameMessage(6,$OperateResult);
				$this->sendRoomMessage(GR_GAME_MJ_OPERATE_RESULT,$OperateResult);
				// 杠后抢杠窗口全过：续杠（杠家补牌/选翻），不得 peopleTurn 跳过杠家
				if ($this->m_pendingGangResult !== null) {
					$this->destoryClick(CLICK_NAME_WAITCLAIM);
					$pendingGang = $this->m_pendingGangResult;
					$this->finishGangCards($pendingGang);
					return;
				}
				if ($OperateResult['wOperateUser'] != $OperateResult['wProvideUser']) {
					// v1.20 2.3 步骤5：开局首张全员主动过也必须进庄家 OPENING 翻牌
					if ($this->m_dealerOpeningPhase && !$this->m_openingDone) {
						$this->destoryClick(CLICK_NAME_WAITCLAIM);
						$this->afterOpeningWaitClaim();
					} else {
						$this->peopleTurn();
						$this->gameOutcardTurn();
					}
				}else{
					$cardsIndex = GameLogic::getInstance()->SwitchToCardIndex($this->m_cbSendCardData);
					if ($this->m_cbSendCardData != -1) {
						$this->m_cbCardIndex[$OperateResult['wOperateUser']][$cardsIndex] = isset($this->m_cbCardIndex[$OperateResult['wOperateUser']][$cardsIndex])?$this->m_cbCardIndex[$OperateResult['wOperateUser']][$cardsIndex]+1:1;
					}
					$this->gameOutcardTurnNoCards();
				}
			}else{
				$this->m_cbUserAction[$data['seatno']] = $OperateResult['cbOperateCode'];
			}
		}
		if ($action == false) {
			$operateNotifyCount = 0;
			foreach ($this->m_OperateNotify as $seatno => $info){
				if(count($this->m_OperateNotify[$seatno]) != 0){
					$operateNotifyCount++;
				}
			}
			$userActionCount = 0;
			foreach ($this->m_cbUserAction as $seatno => $info){
				if($this->m_cbUserAction[$seatno] != -1){
					$userActionCount++;
				}
			}
			if ($operateNotifyCount == $userActionCount) {
				$maxAction = 0;
				$maxSeatno = $data['seatno'];
				foreach ($this->m_cbUserAction as $seatno => $info) {
					if ($this->m_cbUserAction[$seatno] > $maxAction) {
						$maxSeatno = $seatno;
						$maxAction = $this->m_cbUserAction[$seatno];
					}
					if ($this->m_cbUserAction[$seatno] == $maxAction && $this->m_cbUserAction[$seatno] == WIK_CHI_HU) {
						//判断谁胡
						$maxSeatno = $this->findMaxHu($maxSeatno,$seatno,$this->m_wOutCardUser);
						
					}	
				}
				// 两人能碰 → 取逆时针离打牌者最近者
				if ($maxAction == WIK_PENG) {
					$pengSeats = array();
					foreach ($this->m_cbUserAction as $s => $a) {
						if ($a == WIK_PENG) $pengSeats[] = $s;
					}
					if (count($pengSeats) > 1) {
						$maxSeatno = $this->findNearestSeat($this->m_wOutCardUser, $pengSeats);
					}
				}
				// 两人能明杠 → 同样取逆时针离打牌者最近者
				if ($maxAction == WIK_GANG) {
					$gangSeats = array();
					foreach ($this->m_cbUserAction as $s => $a) {
						if ($a == WIK_GANG) $gangSeats[] = $s;
					}
					if (count($gangSeats) > 1) {
						$maxSeatno = $this->findNearestSeat($this->m_wOutCardUser, $gangSeats);
					}
				}
				$OperateResult = array();
				$OperateResult['wOperateUser'] = $maxSeatno;
				$OperateResult['wProvideUser'] = $this->m_wOutCardUser;
				$OperateResult['cbOperateCode'] = $maxAction;
				$OperateResult['cbOperateCard'] = $this->m_cbSendCardData;
				if ($data['seatno'] == $this->m_wOutCardUser && $OperateResult['cbOperateCode'] == WIK_GANG) {
					$OperateResult['bDarkGuang'] = true;
				}else{
					$OperateResult['bDarkGuang'] = false;
				}
				$this->sendRoomMessage(GR_GAME_MJ_OPERATE_RESULT,$OperateResult);
				switch ($OperateResult['cbOperateCode']) {
					case WIK_NULL:
						// 杠后抢杠窗口全过：续杠（杠家补牌/选翻），不得 peopleTurn 跳过杠家
						if ($this->m_pendingGangResult !== null) {
							$this->destoryClick(CLICK_NAME_WAITCLAIM);
							$pendingGang = $this->m_pendingGangResult;
							$this->finishGangCards($pendingGang);
							break;
						}
						// v1.20 2.3 步骤5：开局首张全员主动过也必须进庄家 OPENING 翻牌
						if ($this->m_dealerOpeningPhase && !$this->m_openingDone) {
							$this->destoryClick(CLICK_NAME_WAITCLAIM);
							$this->afterOpeningWaitClaim();
						} else {
							$this->peopleTurn();
							$this->gameOutcardTurn();
						}
						break;
					case WIK_PENG:
						// v1.21 修复：碰成立即收尾 claim 窗口——先销毁 WAITCLAIM 定时器并结束开局阶段，
						// 否则窗口超时 onWaitClaimTimeout 会因 m_OperateNotify 已清空而误判"全员过"，
						// 走 afterOpeningWaitClaim → peopleTurn()+gameOutcardTurn()，把出牌权抢给下家（碰家被跳过）。
						// 注意必须在 gamePengCards 之前：碰家若有杠会在 cardsToHand→gameOperateNotify 里新建 WAITCLAIM 窗口。
						$this->destoryClick(CLICK_NAME_WAITCLAIM);
						$this->m_dealerOpeningPhase = false;
						$this->m_openingDone = true;
						$this->gamePengCards($OperateResult);
						break;
					case WIK_GANG:
						$this->gameGangCards($OperateResult);
						break;
					case WIK_CHI_HU:
						// 抢杠胡成立：不再给杠家补牌，清掉待完成杠
						$this->m_pendingGangResult = null;
						// v1.20 2.10：能胡的人一起胡（一炮多响），逐家生成胡结果后一次结算
						$winners = array();
						foreach ($this->m_cbUserAction as $s => $a) {
							if ($a == WIK_CHI_HU) {
								$cr = isset($this->m_OperateNotify[$s]['dwChiHuRight']) ? $this->m_OperateNotify[$s]['dwChiHuRight'] : array();
								if (!is_array($cr)) $cr = array();
								$this->buildHuResult($s, $OperateResult, $cr);
								$winners[$s] = $cr;
							}
						}
						if (count($winners) > 0) {
							$this->m_dealerOpeningPhase = false;
							$this->m_openingDone = true;
							// 主胡 = 逆时针离放炮人最近者（$maxSeatno 已按 findMaxHu 求得）
							$OperateResult['wOperateUser'] = $maxSeatno;
							$primary = isset($winners[$maxSeatno]) ? $winners[$maxSeatno] : reset($winners);
							$this->m_countsAsHand = true;
							$this->saveGameMessage(7,$winners);
							$this->gameFinish(WIK_CHI_HU,$primary,$OperateResult,$winners);
						}
						break;
					default:
							# code...
						break;
					}	
			}
		}
	}
	public function findMaxHu($maxSeatno,$seatno,$provideUser)
	{
		// 逆时针从打牌者起找，先遇到谁谁优先
		$cur = $this->findNext($provideUser);
		for ($guard = 0; $guard < 8; $guard++) {
			if ($cur == $maxSeatno) {
				return $maxSeatno;
			}
			if ($cur == $seatno) {
				return $seatno;
			}
			$cur = $this->findNext($cur);
		}
		return $maxSeatno;
	}

	// 在给定座位集合中，取逆时针离打牌者最近者
	public function findNearestSeat($provideUser, $seats)
	{
		if (!is_array($seats) || count($seats) == 0) {
			return -1;
		}
		$seats = array_values($seats);
		$cur = $this->findNext($provideUser);
		for ($guard = 0; $guard < 8; $guard++) {
			if (in_array($cur, $seats)) {
				return $cur;
			}
			$cur = $this->findNext($cur);
		}
		return $seats[0];
	}

	public function findSeatno($cbCardIndex)
	{
		foreach ($this->m_cbCardIndex as $seatno => $value) {
			if ($cbCardIndex == $value) {
				$nowSeatno = $seatno;
				break;
			}
		}
		return $nowSeatno;
	}

	//是否可以进行动作牌
	public function whetherContract($seatno)
	{	
		$seatnoProCount = 0;
		foreach ($this->m_WeaveItemArray[$seatno] as $key => $value) {
			if ($value['wProvideUser'] == $this->m_wOutCardUser && $this->m_wOutCardUser != $seatno) {
				$seatnoProCount++;
			}
		}
		if($seatnoProCount >= 2){
			return false;
		}else{
			return true;
		}
	}
	//是否摸打规则
	public function sendAndOut($seatno)
	{
		$sendAndOut = false;
		foreach ($this->m_bFalseWealthWind as $seat => $info) {
			if ($this->m_bFalseWealthWind[$seat]) {
				$sendAndOut = true;
			}
		}
		if ($this->m_bFalseWealthWind[$seatno]) {
			$sendAndOut = false;
		}
		return $sendAndOut;
	}
	//判断爆头
	public function judgeBaotou($cbCardIndex=array())
	{
		return GameLogic::getInstance()->AnalyseBaotou($cbCardIndex);
	}
	//判断胡牌
	public function judgeHu($cbCardIndex=array(),$WeaveItem,$cbCurrentCard,&$ChiHuResult,$seatno,$fromOther=false)
	{
		$nowSeatno = $seatno;

		// 过点炮：过圈前不能胡同一张；点炮胡才受此限制，自摸不受影响
		if ($fromOther && in_array($cbCurrentCard, $this->m_skippedDianPao[$nowSeatno])) {
			return WIK_NULL;
		}
		// return GameLogic::getInstance()->AnalyseChiHuCard($cbCardIndex,$WeaveItem,$cbCurrentCard,$ChiHuResult);
		$res = GameLogic::getInstance()->lazarilloCard($cbCardIndex,$WeaveItem,$cbCurrentCard,$ChiHuResult,WIK_CHI_HU);
		return $res;
		
	}
	//判断杠牌
	public function judgeGang($cbCardIndex=array(), $cbCurrentCard,$seatno)
	{
		$nowSeatno = $seatno;
		// 过杠：本局锁死，过圈也不清
		if (in_array($cbCurrentCard, $this->m_skippedBuGang[$nowSeatno])) {
			return WIK_NULL;
		}
		// 墙空或墙头仅剩<=2 张时禁止再杠
		if (!$this->canKongByWall()) {
			return WIK_NULL;
		}
		if ($this->sendAndOut($nowSeatno)) {
			return WIK_NULL;
		}
		if (!$this->whetherContract($nowSeatno)) {
			return WIK_NULL;
		}
		if ($cbCurrentCard == WEALTHCARD) {
			return WIK_NULL;
		}
		return GameLogic::getInstance()->EstimateGangCard($cbCardIndex, $cbCurrentCard);
	}
	// 某张牌对某座位是否为暗杠候选（本局"过杠"锁定时用于排除暗杠）
	// 暗杠=自己手中攥齐，非碰后补杠、非吃/碰他家打出的明杠
	private function isAnGangCard($seatno, $card)
	{
		if (!isset($this->m_cbCardIndex[$seatno])) {
			return false;
		}
		// 补杠：已碰过该张 → 不是暗杠
		if (isset($this->m_WeaveItemArray[$seatno])) {
			foreach ($this->m_WeaveItemArray[$seatno] as $v) {
				if ($v['cbWeaveKind'] == WIK_PENG && $v['cbCenterCard'] == $card) {
					return false;
				}
			}
		}
		// 明杠：牌来自他家打出（当前出牌人不是自己）→ 不是暗杠
		if ($this->m_wOutCardUser != $seatno) {
			return false;
		}
		return true;
	}
	public function judgeTing($cbCardIndex=array(), $WeaveItem = array(),&$cbListenCard = array(),$seatno)
	{
		$nowSeatno = $seatno;
		$wealthCardIndex = GameLogic::getInstance()->SwitchToCardIndex(WEALTHCARD);
		if ($this->judgeBaotou($cbCardIndex)) {
			for ($i=0; $i < (GR_CONST_MAX_INDEX - 8 - 1); $i++) {
				$tingCardsOption[] = GameLogic::getInstance()->SwitchToCardData($i);
			}
			$this->m_bBaotouStatus[$nowSeatno] = true;
			return true;
		}else{
			$this->m_bBaotouStatus[$nowSeatno] = false;
		}
		if (isset($cbCardIndex[$wealthCardIndex]) && $cbCardIndex[$wealthCardIndex] == 3) {
			$cbListenCard[] = WEALTHCARD;
			return true;
		}else if(isset($cbCardIndex[$wealthCardIndex]) && $cbCardIndex[$wealthCardIndex] == 4){
			$cbListenCard[] = WEALTHCARD;
			return true;
		}
		$tingCardsOption = array();
		foreach ($this->m_cbCardIndex as $seatno => $info) {
			if ($seatno != $nowSeatno) {	
				foreach ($this->m_cbCardIndex[$seatno] as $index => $count) {
					if ($count != 0) {
						$tingCardsOption[$index] = $count;
					}
				}
			}
		}
		foreach ($this->m_cbLeftCard as $key => $value) {
			if ($value != WEALTHCARD) {
				$index = GameLogic::getInstance()->SwitchToCardIndex($value);
				$tingCardsOption[$index] = isset($tingCardsOption[$index])?$tingCardsOption[$index]+1:1;
			}
		}
		rsort($tingCardsOption);
		$baotou = false;
		$res = GameLogic::getInstance()->AnalyseTingCard($cbCardIndex, $WeaveItem,$cbListenCard,$tingCardsOption,$baotou);
		if ($baotou) {
			$this->m_bBaotouStatus[$nowSeatno] = true;
		}
		return $res;
	}
	//判断碰牌
	public function judgePeng($cbCardIndex=array(), $cbCurrentCard,$seatno)
	{

		$nowSeatno = $seatno;
		// 过碰：过圈前不能碰同一张
		if (in_array($cbCurrentCard, $this->m_skippedPeng[$nowSeatno])) {
			return WIK_NULL;
		}
		if (in_array($cbCurrentCard, $this->m_cbNotOperate[$nowSeatno]['pengcards'])) {
			return WIK_NULL;
		}
		if ($cbCurrentCard == WEALTHCARD) {
			return WIK_NULL;
		}
		$gangCards = GameLogic::getInstance()->EstimatePengCard($cbCardIndex, $cbCurrentCard);
		if ($gangCards == WIK_PENG) {
			if (!$this->whetherContract($nowSeatno)) {
				$this->m_cbNotOperate[$nowSeatno]['pengcards'][] = $cbCurrentCard;
				return WIK_NULL;
			}
			if ($this->sendAndOut($nowSeatno)) {
				$this->m_cbNotOperate[$nowSeatno]['pengcards'][] = $cbCurrentCard;
				return WIK_NULL;
			}
			return WIK_PENG;
		}else{
			return WIK_NULL;
		}
	}
	//判断吃牌
	public function judgeChi($cbCardIndex=array(), $cbCurrentCard,$seatno)
	{
		$nowSeatno = $seatno;
		if ($this->sendAndOut($nowSeatno)) {
			return WIK_NULL;
		}
		if (!$this->whetherContract($nowSeatno)) {
			return WIK_NULL;
		}
		return GameLogic::getInstance()->EstimateEatCard($cbCardIndex, $cbCurrentCard);
	}
    //----------------------出牌--------------------------
	// ========== v1.20 2.9 精确手牌张数校验 ==========
	// 碰/杠组数（不含吃，吃已废弃）；每 3 张一组的碰或杠都记 1 组
	private function countPengGangWeave($seatno)
	{
		$cnt = 0;
		if (isset($this->m_WeaveItemArray[$seatno]) && is_array($this->m_WeaveItemArray[$seatno])) {
			foreach ($this->m_WeaveItemArray[$seatno] as $w) {
				if (!isset($w['cbWeaveKind'])) continue;
				if ($w['cbWeaveKind'] == WIK_PENG || $w['cbWeaveKind'] == WIK_GANG) {
					$cnt++;
				}
			}
		}
		return $cnt;
	}

	// 当前手牌（暗牌）张数
	private function countConcealedCards($seatno)
	{
		if (!isset($this->m_cbCardIndex[$seatno]) || !is_array($this->m_cbCardIndex[$seatno])) {
			return 0;
		}
		$sum = 0;
		foreach ($this->m_cbCardIndex[$seatno] as $v) {
			$sum += intval($v);
		}
		return $sum;
	}

	// 期望张数：'discard'=等出牌 14-3*碰杠组数；'draw'=等摸牌 13-3*碰杠组数
	private function expectedHandCount($seatno, $state)
	{
		$base = ($state === 'draw') ? 13 : 14;
		return $base - 3 * $this->countPengGangWeave($seatno);
	}

	// 张数是否精确匹配
	private function checkHandCount($seatno, $state)
	{
		return $this->countConcealedCards($seatno) === $this->expectedHandCount($seatno, $state);
	}

	// 张数不符：下发 HAND_COUNT 拒绝通知，返回 false
	private function rejectHandCount($seatno, $state)
	{
		$actual = $this->countConcealedCards($seatno);
		$expect = $this->expectedHandCount($seatno, $state);
		$uid = isset($this->m_deskData[$seatno]['uid']) ? $this->m_deskData[$seatno]['uid'] : '';
		if ($uid !== '' && $uid !== null) {
			$this->sendMsgToUser($uid, GR_GAME_MJ_ERR_NOTIFY, array(
				'code'    => GR_ERR_HAND_COUNT,
				'seatno'  => $seatno,
				'state'   => $state,
				'expect'  => $expect,
				'actual'  => $actual,
			));
		}
		return false;
	}

	// 碰后打回刚碰那张：下发 PENG_TILE_DISCARD 拒绝通知，返回 false
	private function rejectPengTileDiscard($seatno, $card)
	{
		$uid = isset($this->m_deskData[$seatno]['uid']) ? $this->m_deskData[$seatno]['uid'] : '';
		if ($uid !== '' && $uid !== null) {
			$this->sendMsgToUser($uid, GR_GAME_MJ_ERR_NOTIFY, array(
				'code'   => GR_ERR_PENG_TILE_DISCARD,
				'seatno' => $seatno,
				'card'   => $card,
			));
		}
		return false;
	}

	public function gameOutCardReg($uid,$data,$isAuto=false)
	{
		if ($this->m_gameStatus != self::GAMESTATE_OUT) {
			return;
		}
		$normalOutCards = true;
		foreach ($this->m_bFalseWealthWind as $seatno => $info) {
			if ($this->m_bFalseWealthWind[$seatno]) {
				if ($this->m_deskData[$seatno]['uid'] != $uid) {
					$normalOutCards = false;
				}
			}
		}

		if (!$normalOutCards && $data['data'] != $this->m_bWealthCards && $this->m_bWealthCards != -1) {
			return;
		}

		$discardSeatno = -1;
		foreach ($this->m_deskData as $s => $info) {
			if ($info['uid'] == $uid) { $discardSeatno = $s; break; }
		}
		// 规则4：碰后不能打回刚碰那张
		if ($discardSeatno > 0 && $discardSeatno == $this->m_wOutCardUser
			&& isset($this->m_forbidDiscard[$discardSeatno])
			&& $this->m_forbidDiscard[$discardSeatno] == $data['data']) {
			$this->rejectPengTileDiscard($discardSeatno, $data['data']);
			return;
		}
		// 规则7：出牌前手牌张数必须精确等于 14-3*碰杠组数（等出牌）
		if ($discardSeatno > 0 && $discardSeatno == $this->m_wOutCardUser) {
			if (!$this->checkHandCount($discardSeatno, 'discard')) {
				$this->rejectHandCount($discardSeatno, 'discard');
				return;
			}
		}

		$this->m_OperateNotify = array();
		$this->destoryClick(CLICK_NAME_OUTCARDS);
		$haveCards = false;
		foreach ($this->m_deskData as $seatno => $info) {
			if ($this->m_deskData[$seatno]['uid'] == $uid && $seatno == $this->m_wOutCardUser) {
				$cardsIndex = GameLogic::getInstance()->SwitchToCardIndex($data['data']);
				foreach ($this->m_cbCardIndex[$seatno] as $cards => $value) {
					if ($cardsIndex == $cards) {
						$haveCards = true;
					}
				}
				if ($haveCards) {
					$outCardsSeatno = $seatno;
					// v1.20 2.8：本人主动出牌即结束超时托管（托管代打 isAuto 不清托管）
					if (!$isAuto) $this->clearAutoPlayWithBroadcast($seatno, 'TIMEOUT');
					// 成功出牌后解除"碰后禁打回"标记
					$this->m_forbidDiscard[$seatno] = -1;
					$this->m_lastDrawnTile[$seatno] = -1;
					$this->m_cbDiscardCard[$seatno][] = $data['data'];
					$this->m_cbDiscardCardOndesk[$seatno][] = $data['data'];
					
					$this->m_cbCardIndex[$seatno][$cardsIndex]--;
					if ($this->m_cbCardIndex[$seatno][$cardsIndex] == 0) {
						unset($this->m_cbCardIndex[$seatno][$cardsIndex]);
					}
				}else{
					return;
				}
			}else if($this->m_deskData[$seatno]['uid'] == $uid && $seatno != $this->m_wOutCardUser){
				return;
			}
			if ($this->m_deskData[$seatno]['uid'] == $uid && $seatno == $this->m_wOutCardUser) {
				$handcards = array();
				foreach ($this->m_cbCardIndex[$seatno] as $cards => $value) {
					$cardsdata = GameLogic::getInstance()->SwitchToCardData($cards);
					for ($m=0; $m < $value; $m++) { 
						$handcards[] = $cardsdata;
					}
				}
				asort($handcards);
				$handcards = array_values($handcards);
			}
		}
		$sendData = array();
		$sendData[$outCardsSeatno] = $data['data'];

		$saveData['seatno'] = $outCardsSeatno;
		$saveData['card'] = $data['data'];
		$this->m_bGangWealth[$outCardsSeatno] = false;
		$this->saveGameMessage(4,$saveData);
		$this->sendRoomMessage(GR_GAME_MJ_OUT_CARDS_DATA,$sendData);

		$this->sendMsgToUser($uid,GR_GAME_MJ_HANDCARDS,$handcards);
		$cbListenCard = array();
		if ($data['data'] == WEALTHCARD) {
			$canPiao = true;
			foreach ($this->m_bFalseWealthWind as $key => $value) {
				if ($value != false) {
					$canPiao = false;
					break;
				}
			}
			if (!$this->m_bFalseWealthWind[$outCardsSeatno]) {
				$this->m_bFalseWealthWind[$outCardsSeatno] = $canPiao;
			}
			if ($this->m_bFalseWealthWind[$outCardsSeatno]) {
				$this->sendRoomMessage(GR_GAME_MJ_CAI_PIAO,array($outCardsSeatno));
			}
		}else{
			$this->m_bFalseWealthWind[$outCardsSeatno] = false;
		}
		if ($this->judgeTing($this->m_cbCardIndex[$outCardsSeatno],$this->m_WeaveItemArray[$outCardsSeatno],$cbListenCard,$outCardsSeatno)) {
			$this->gameTingCards($outCardsSeatno,$cbListenCard);
			if ($data['data'] == WEALTHCARD && $this->m_bBaotouStatus[$outCardsSeatno]) {
				$this->m_bWealthWind[$outCardsSeatno]++;
			}else{
				$this->m_bWealthWind[$outCardsSeatno] = 0;
			}
		}
		$this->m_cbSendCardData = $data['data'];
		$action = false;
		foreach ($this->m_deskData as $seatno => $info) {
			if ($this->m_deskData[$seatno]['uid'] != $uid) {
				$ChiHuResult = array();
				$gang = $this->judgeGang($this->m_cbCardIndex[$seatno],$this->m_cbSendCardData,$seatno);
				// 点炮胡：重新启用（fromOther=true，受"过点炮"限制）
				$hu = $this->judgeHu($this->m_cbCardIndex[$seatno],$this->m_WeaveItemArray[$seatno],$this->m_cbSendCardData,$ChiHuResult,$seatno,true);
				$peng = $this->judgePeng($this->m_cbCardIndex[$seatno],$this->m_cbSendCardData,$seatno);
				// 规则5：能胡能碰同时出现只胡（同一玩家不提供碰选项）
				if ($hu != WIK_NULL && $peng != WIK_NULL) {
					$peng = WIK_NULL;
				}
				if ($gang != WIK_NULL || $hu != WIK_NULL || $peng != WIK_NULL) {
					$action = true; 
					$this->m_gameStatus = self::GAMESTATE_OPERATE;
					$this->m_OperateNotify[$seatno]['wResumeUser'] = $seatno;
					$this->m_OperateNotify[$seatno]['cbActionMask'] = $gang;
					if ($hu != WIK_NULL) {
						$this->m_OperateNotify[$seatno]['cbActionMask'] |= $hu;
						$this->m_OperateNotify[$seatno]['dwChiHuRight'] = $ChiHuResult;
					}
					$this->m_OperateNotify[$seatno]['cbActionMask'] |= $peng;
					$this->m_OperateNotify[$seatno]['cbActionCard'] = $this->m_cbSendCardData;
					if ($gang != WIK_NULL) {
						$this->m_OperateNotify[$seatno]['GangCardNotice'][] = $this->m_cbSendCardData;
					}
				}
			}
		}
		if ($action) {
			$this->gameOperateNotify();
		}else{
			$this->peopleTurn();
			$this->gameOutcardTurn();
		}

	}

	public function findNext($seatno)
	{
		$nextSeatno = $seatno;
		$guard = 0;
		do {
			reset($this->m_deskData);
			$lastSeatno = $nextSeatno;
			$found = null;
			foreach ($this->m_deskData as $key => $info) {
				if(key($this->m_deskData) == $lastSeatno){
					next($this->m_deskData);
					$found = key($this->m_deskData);
				}else{
					next($this->m_deskData);
				}
			}
			if($found == NULL){
				reset($this->m_deskData);
				$found = key($this->m_deskData);
			}
			$nextSeatno = $found;
			$guard++;
		// 仅跳过 ingame=false（已离座/已结束）；最多绕桌一圈，避免全部离座时无限递归
		} while ($nextSeatno != NULL && isset($this->m_deskData[$nextSeatno]) && $this->m_deskData[$nextSeatno]['ingame'] == false && $guard < 8);
		return $nextSeatno;
	}
	//听牌
	public function gameTingCards($outCardsSeatno,$cbListenCard){
		$data = array();
		$data[$outCardsSeatno] = $cbListenCard;

		$saveData['cbOperateCode'] = WIK_LISTEN;
		$saveData['cbOperateCard'] = $cbListenCard;
		$saveData['bDarkGuang'] = false;
		$saveData['wProvideUser'] = $outCardsSeatno;
		$saveData['wOperateUser'] = $outCardsSeatno;
		$this->saveGameMessage(6,$saveData);

		$this->sendRoomMessage(GR_GAME_MJ_TING_NOTICE,$data);	
	} 
	//胡牌
	// v1.20 2.10：按座位生成胡结果（供单家/一炮多响复用）
	public function buildHuResult($seatno, $OperateResult, &$ChiHuResult){
		$hu = is_array($ChiHuResult) ? $ChiHuResult : array();
		if (!isset($ChiHuResult['dwChiHuRight'])) $ChiHuResult['dwChiHuRight'] = 0;
		if (!isset($ChiHuResult['dwWinTimes'])) $ChiHuResult['dwWinTimes'] = 1;
		if (!isset($ChiHuResult['dwChiHuKind'])) $ChiHuResult['dwChiHuKind'] = 0;
		// ========== T_B7: 全禁地胡 DI_HU ==========
		$ChiHuResult['dwChiHuRight'] &= ~CHR_DI;
		// ========== 清 WEALTHCARD / BAOTOU 相关逻辑（停用财神） ==========
		// ========== 标记 HuRight 来源（按lastHuSource精确覆盖）==========
		$src = isset($this->m_lastHuSource) ? $this->m_lastHuSource : '';
		$isQiangGang = (isset($this->m_bQiangGang[$seatno]) && $this->m_bQiangGang[$seatno]['state'] != 0
			&& $OperateResult['wProvideUser'] != $seatno);
		$isGangKai = false;
		if ($this->m_flipContext === 'AFTER_GANG' && $this->m_gangHuaWinnerTile > 0
			&& $OperateResult['cbOperateCard'] == $this->m_gangHuaWinnerTile
			&& $OperateResult['wProvideUser'] == $seatno) {
			$isGangKai = true;
		}
		if ($src === 'TIAN_HU') {
			$ChiHuResult['dwChiHuRight'] |= CHR_TIAN;
			$ChiHuResult['dwChiHuRight'] &= ~(CHR_ZI_MO | CHR_GANG_KAI | CHR_QIANG_GANG);
		} else if ($isQiangGang || $src === 'QIANG_GANG') {
			$ChiHuResult['dwChiHuRight'] |= CHR_QIANG_GANG;
			$ChiHuResult['dwChiHuRight'] &= ~(CHR_ZI_MO | CHR_TIAN | CHR_GANG_KAI);
			if (isset($OperateResult['wProvideUser']) && $OperateResult['wProvideUser'] != $seatno) {
				if (isset($this->m_cbGiveRecvGang[$OperateResult['wProvideUser']][$seatno]))
					$this->m_cbGiveRecvGang[$OperateResult['wProvideUser']][$seatno]--;
			}
			$this->m_lastHuSource = 'QIANG_GANG';
		} else if ($isGangKai) {
			$ChiHuResult['dwChiHuRight'] |= CHR_GANG_KAI;
			$ChiHuResult['dwChiHuRight'] &= ~(CHR_ZI_MO | CHR_TIAN | CHR_QIANG_GANG);
		} else if ($OperateResult['wProvideUser'] == $seatno) {
			$ChiHuResult['dwChiHuRight'] |= CHR_ZI_MO;
			$ChiHuResult['dwChiHuRight'] &= ~(CHR_TIAN | CHR_GANG_KAI | CHR_QIANG_GANG);
			if (!$src) $this->m_lastHuSource = 'ZIMO';
		} else {
			$ChiHuResult['dwChiHuRight'] &= ~(CHR_ZI_MO | CHR_TIAN | CHR_GANG_KAI | CHR_QIANG_GANG);
			if (!$src) $this->m_lastHuSource = 'DIANPAO';
		}
		$this->m_Room_HuNum[$this->m_playGround][$seatno]++;
		$hr = intval($ChiHuResult['dwChiHuRight']);
		if (($hr & CHR_ZI_MO) != 0 || ($hr & CHR_TIAN) != 0 || ($hr & CHR_GANG_KAI) != 0) {
			$this->m_Room_ZiMoNum[$this->m_playGround][$seatno]++;
		}else{
			$this->m_Room_RecvGun[$this->m_playGround][$seatno]++;
			if (isset($OperateResult['wProvideUser']) && $OperateResult['wProvideUser'] > 0)
				$this->m_Room_GiveGun[$this->m_playGround][$OperateResult['wProvideUser']]++;
		}
		$ChiHuResult['dwChiHuKind'] = isset($hu['dwChiHuKind']) ? $hu['dwChiHuKind'] : 0;
	}

	public function gameHuCards($OperateResult){
		$ChiHuResult = array();
		$seatno = $OperateResult['wOperateUser'];
		if (isset($this->m_OperateNotify[$seatno]) && isset($this->m_OperateNotify[$seatno]['dwChiHuRight'])) {
			$ChiHuResult = $this->m_OperateNotify[$seatno]['dwChiHuRight'];
		}
		if (!is_array($ChiHuResult)) $ChiHuResult = array();
		$this->buildHuResult($seatno, $OperateResult, $ChiHuResult);
		$this->m_countsAsHand = true;
		$this->saveGameMessage(7,$ChiHuResult);
		$this->gameFinish(WIK_CHI_HU,$ChiHuResult,$OperateResult);
	} 
	public function IsMenQing($seatno)
	{
		if (!isset($this->m_WeaveItemArray[$seatno])) return true;
		foreach ($this->m_WeaveItemArray[$seatno] as $weave) {
			if (in_array($weave['cbWeaveKind'], array(WIK_LEFT, WIK_CENTER, WIK_RIGHT, WIK_PENG))) {
				return false;
			}
			if ($weave['cbWeaveKind'] == WIK_GANG && isset($weave['bDarkGuang']) && $weave['bDarkGuang'] === false) {
				return false;
			}
			if ($weave['cbWeaveKind'] == WIK_GANG && isset($weave['cbPublicCard']) && $weave['cbPublicCard'] === false) {
				if (!isset($weave['wProvideUser']) || $weave['wProvideUser'] != $seatno) return false;
			}
		}
		return true;
	}

	public function calcPatternMultiplier($seatno, $ChiHuResult, $isZiMo, $isGangKai, $isTianHu, $isDiHu, &$patternNames)
	{
		$base = 1;
		$names = array();
		$cardIdx = $this->m_cbCardIndex[$seatno];
		$weave = isset($this->m_WeaveItemArray[$seatno]) ? $this->m_WeaveItemArray[$seatno] : array();
		$GL = GameLogic::getInstance();
		$isQingYiSe = $GL->IsQingYiSe($cardIdx, $weave);
		$isQiXiaoDui = $GL->IsQiXiaoDui($cardIdx, $weave);
		$isDaDuiDui = $GL->IsDaDuiDui($cardIdx, $weave);
		$isMenQing = $this->IsMenQing($seatno);
		// ========== T_B7: 地胡全禁用 ==========
		$isDiHu = false;
		// ========== 基础牌型（单一最大，不叠加，但天胡可叠加）==========
		$qingFan = 10;
		$qiduiFan = GR_QIDUI_ALLOW_QUAD ? 7 : 7;
		$daduiFan = 3;
		$huCard = isset($ChiHuResult['_huCard']) ? intval($ChiHuResult['_huCard']) : -1;
		$gangHuaOK = false;
		if ($this->m_flipContext === 'AFTER_GANG' && $this->m_gangHuaWinnerTile > 0
			&& $this->m_gangHuaWinnerTile == $huCard) {
			$gangHuaOK = true;
		}
		if ($isQingYiSe) {
			$base = $qingFan; $names[] = '清一色';
		} else if ($isQiXiaoDui) {
			$base = $qiduiFan; $names[] = '七对';
			// GR_QIDUI_ALLOW_QUAD: 4张相同算两对，七对番7，不加龙七对（已由AnalyseChiHuCard处理计数）
		} else if ($isDaDuiDui) {
			$base = $daduiFan; $names[] = '对对胡';
		} else {
			$base = 1; $names[] = '平胡';
		}
		// ========== T_B7: 天胡叠加（TIANHU_STACK_PATTERNS=true） ==========
		if ($isTianHu) {
			if (GR_TIANHU_STACK_PATTERNS) {
				$base += 10; $names[] = '天胡(+10叠)';
			} else {
				if ($base <= 1) {
					$base = 11; $names[] = '天胡(10+门清1)';
				} else {
					$base = 10; $names[] = '天胡';
				}
			}
		}
		// ========== T_B7: 杠花3番 仅 context=AFTER_GANG && huCard==gangHuaWinnerTile ==========
		if ($gangHuaOK) {
			$base += 3; $names[] = '杠花(+3)';
		} else if ($isGangKai && !$gangHuaOK) {
			// 非精确杠花（例如普通杠开自摸非faceUp选的）不算杠花，仅保留普通自摸
		}
		// ========== 门清 ==========
		if ($isZiMo && $isMenQing) {
			if ($base == 1) {
				$base = 2; $names[] = '门清自摸';
			} else {
				$base += 1; $names[] = '门清(+1)';
			}
		}
		$patternNames = $names;
		return $base;
	}

	// ========== T_B12: collect() 空函数占位 ==========
	public function collect(&$scoreMap, &$debtsMap, &$gangScoreMap)
	{
		// P0: 实收 = 应收，debts 全 0；后续 P1 只改此函数体
		$paid = array();
		$debtsMap = array();
		for ($s=1; $s<=4; $s++) {
			$paid[$s] = isset($scoreMap[$s]) ? $scoreMap[$s] : 0;
			$debtsMap[$s] = 0;
			for ($t=1; $t<=4; $t++) $debtsMap[$s.'_'.$t] = 0;
		}
		return $paid;
	}

	//杠牌记账+杠后触发选明牌（T_B8抢补杠 + T_B9faceUp=0禁杠）
	public function gameGangCards($OperateResult){
		// 规则8：墙空或墙头仅剩<=2 张时禁止再杠（口径见规则文档）
		if (!$this->canKongByWall()) {
			return;
		}
		$opSeat0 = $OperateResult['wOperateUser'];
		// 规则2：过杠本局锁死，禁止再杠该张
		if (isset($this->m_skippedBuGang[$opSeat0]) && in_array($OperateResult['cbOperateCard'], $this->m_skippedBuGang[$opSeat0])) {
			return;
		}
		$opSeat = $OperateResult['wOperateUser'];
		$provSeat = $OperateResult['wProvideUser'];
		$tile = $OperateResult['cbOperateCard'];
		$this->clearAutoPlayWithBroadcast($opSeat, 'TIMEOUT');
		// ========== 三分类：Straight / Bend / Dark ==========
		$gangKind = 'dark';
		$isBend = false;
		$tileIdx = GameLogic::getInstance()->SwitchToCardIndex($tile);
		// 先判 Bend（补杠 / 碰后再杠）
		$bendDetected = false;
		$pengIdx = -1;
		foreach ($this->m_WeaveItemArray[$opSeat] as $k => $v) {
			if ($v['cbWeaveKind'] == WIK_PENG && $v['cbCenterCard'] == $tile) {
				$bendDetected = true;
				$pengIdx = $k;
				break;
			}
		}
		if ($bendDetected) {
			$gangKind = 'bend';
			$isBend = true;
		} else if ($provSeat != $opSeat && !$OperateResult['bDarkGuang']) {
			$gangKind = 'straint';
		} else {
			$gangKind = 'dark';
		}
		// ========== 插入手牌（cbSendCardData未入的先入）==========
		if ($tile != $this->m_cbSendCardData && $this->m_cbSendCardData != -1) {
			$idx = GameLogic::getInstance()->SwitchToCardIndex($this->m_cbSendCardData);
			if ($this->m_cbSendCardData != -1) {
				$this->m_cbCardIndex[$opSeat][$idx] = isset($this->m_cbCardIndex[$opSeat][$idx]) ? $this->m_cbCardIndex[$opSeat][$idx] + 1 : 1;
			}
		}
		$this->m_cbSendCardData = -1;
		// ========== T_B8: 抢补杠 只有Bend才给非杠者挂WIK_CHI_HU ==========
		$robHuSeats = array();
		if (GR_ROB_KONG_SCOPE === 'bu_only' && $isBend) {
			foreach ($this->m_deskData as $seatno => $info) {
				if (!$info['ingame']) continue;
				if ($seatno == $opSeat) continue;
				// 过点炮/过抢杠胡：过圈前不能再胡同一张
				if (isset($this->m_skippedDianPao[$seatno]) && in_array($tile, $this->m_skippedDianPao[$seatno])) continue;
				$tmpRes = array();
				$r = GameLogic::getInstance()->AnalyseChiHuCard(
					$this->m_cbCardIndex[$seatno],
					$this->m_WeaveItemArray[$seatno],
					$tile,
					$tmpRes
				);
				if ($r == WIK_CHI_HU) {
					$robHuSeats[$seatno] = $tmpRes;
				}
			}
		}
		if (count($robHuSeats) > 0) {
			// 存在抢杠胡 → 先发OPERATE_NOTIFY 抢杠位 → 等待gameOperateReg响应
			// 抢杠成功 → 不算成功杠 hasKong=false，不触发FlipChoose
			$this->m_OperateNotify = array();
			$this->m_cbUserAction = array();
			for ($s=1; $s<=4; $s++) $this->m_cbUserAction[$s] = -1;
			foreach ($robHuSeats as $seatno => $right) {
				$this->m_OperateNotify[$seatno]['wResumeUser'] = $seatno;
				$this->m_OperateNotify[$seatno]['cbActionMask'] = WIK_CHI_HU;
				$this->m_OperateNotify[$seatno]['cbActionCard'] = $tile;
				$this->m_OperateNotify[$seatno]['dwChiHuRight'] = $right;
				$this->m_bQiangGang[$seatno]['state'] = 1;
				$this->m_bQiangGang[$seatno]['msg'] = 'PengGang';
			}
			$this->m_wOutCardUser = $opSeat;
			$this->m_cbOutCardData = $tile;
			// 抢杠窗口期间锁全桌（谁都不许摸牌）；记录待完成的杠，
			// 若窗口内无人抢杠（全过），由 gameOperateReg 聚合处续杠给杠家补牌
			$this->m_pendingGangResult = $OperateResult;
			$this->m_gameStatus = self::GAMESTATE_OPERATE;
			$this->gameOperateNotify();
			return;
		}
		// ========== 无抢杠：正常完成杠（杠家补牌/选翻 → 出牌） ==========
		$this->finishGangCards($OperateResult);
	}

	// 完成杠（抽自 gameGangCards 末尾）：记账 + 扣手牌 + 杠家补牌/选翻
	// 抢杠窗口全过后也由此续杠，保证杠家不被轮转跳过
	private function finishGangCards($OperateResult)
	{
		$opSeat = $OperateResult['wOperateUser'];
		$provSeat = $OperateResult['wProvideUser'];
		$tile = $OperateResult['cbOperateCard'];
		$tileIdx = GameLogic::getInstance()->SwitchToCardIndex($tile);
		$isBend = false;
		$pengIdx = -1;
		foreach ($this->m_WeaveItemArray[$opSeat] as $k => $v) {
			if ($v['cbWeaveKind'] == WIK_PENG && $v['cbCenterCard'] == $tile) {
				$isBend = true;
				$pengIdx = $k;
				break;
			}
		}
		$gangKind = 'dark';
		if ($isBend) {
			$gangKind = 'bend';
		} else if ($provSeat != $opSeat && !$OperateResult['bDarkGuang']) {
			$gangKind = 'straint';
		}
		$this->m_pendingGangResult = null;
		$this->m_hasKong = true;
		$this->m_bQiangGang[$opSeat]['state']++;
		$weaveCount = count($this->m_WeaveItemArray[$opSeat]);
		$this->m_WeaveItemArray[$opSeat][$weaveCount]['cbWeaveKind'] = WIK_GANG;
		$this->m_WeaveItemArray[$opSeat][$weaveCount]['cbCenterCard'] = $tile;
		$this->m_WeaveItemArray[$opSeat][$weaveCount]['cbPublicCard'] = $OperateResult['bDarkGuang'];
		$this->m_WeaveItemArray[$opSeat][$weaveCount]['wProvideUser'] = $provSeat;
		// 扣手牌：暗/明直杠 扣4张；补杠 扣1张（碰的3张已在WeaveItem里）
		if ($isBend) {
			if (isset($this->m_cbCardIndex[$opSeat][$tileIdx]) && $this->m_cbCardIndex[$opSeat][$tileIdx] > 0) {
				$this->m_cbCardIndex[$opSeat][$tileIdx]--;
				if ($this->m_cbCardIndex[$opSeat][$tileIdx] <= 0) unset($this->m_cbCardIndex[$opSeat][$tileIdx]);
			}
			if ($pengIdx >= 0) {
				$this->m_WeaveItemArray[$opSeat][$weaveCount]['wProvideUser'] = $this->m_WeaveItemArray[$opSeat][$pengIdx]['wProvideUser'];
				$OperateResult['wProvideUser'] = $this->m_WeaveItemArray[$opSeat][$pengIdx]['wProvideUser'];
				$provSeat = $OperateResult['wProvideUser'];
				$this->m_WeaveItemArray[$opSeat][$weaveCount]['cbPublicCard'] = false;
				$OperateResult['bDarkGuang'] = false;
				$this->m_bQiangGang[$opSeat]['msg'] = 'PengGang';
				$this->m_Room_PengGangLight[$this->m_playGround][$opSeat]++;
				unset($this->m_WeaveItemArray[$opSeat][$pengIdx]);
				$this->m_WeaveItemArray[$opSeat] = array_values($this->m_WeaveItemArray[$opSeat]);
			}
		} else {
			if (isset($this->m_cbCardIndex[$opSeat][$tileIdx])) unset($this->m_cbCardIndex[$opSeat][$tileIdx]);
			if ($provSeat != $opSeat) {
				array_pop($this->m_cbDiscardCardOndesk[$provSeat]);
				$this->m_Room_GangLight[$this->m_playGround][$opSeat]++;
				$this->m_bQiangGang[$opSeat]['msg'] = 'Light';
			} else {
				$this->m_Room_GangDark[$this->m_playGround][$opSeat]++;
				$this->m_bQiangGang[$opSeat]['msg'] = 'Dark';
			}
		}
		// ========== gangLedger 杠分记账（整局兑现） ==========
		$bs = isset($this->m_roomRule['base_score']) ? intval($this->m_roomRule['base_score']) : GR_BASE_SCORE;
		if ($gangKind == 'straint') {
			if (isset($this->m_gangLedger[$opSeat][$provSeat]))
				$this->m_gangLedger[$opSeat][$provSeat] += 1 * $bs;
			else
				$this->m_gangLedger[$opSeat][$provSeat] = 1 * $bs;
		} else {
			for ($s=1; $s <= 4; $s++) {
				if ($s != $opSeat && isset($this->m_deskData[$s]) && $this->m_deskData[$s]['ingame']) {
					if (isset($this->m_gangLedger[$opSeat][$s]))
						$this->m_gangLedger[$opSeat][$s] += 1 * $bs;
					else
						$this->m_gangLedger[$opSeat][$s] = 1 * $bs;
				}
			}
		}
		$this->m_cbGiveRecvGang[$provSeat][$opSeat]++;
		$this->saveGameMessage(6,$OperateResult);
		// v1.20 2.9：杠完成后手牌应为等摸 13-3*碰杠组数（第4张由翻屁股补回）
		if (!$this->checkHandCount($opSeat, 'draw')) {
			$this->rejectHandCount($opSeat, 'draw');
			return;
		}
		// ========== 杠后进入 AFTER_GANG FlipChoose ==========
		$this->m_wOutCardUser = $opSeat;
		// 杠算自己的一次过圈动作（清过点炮/过碰，过杠锁死不清）
		$this->clearSkippedByTurn($opSeat);
		$this->enterFaceUpPhase($opSeat, 'AFTER_GANG');
		// enterFaceUpPhase 仅在 count(m_faceUp)>0 时才进入选翻；牌墙/亮牌不足时会直接 return，
		// 此时若不兜底，轮次会锁死在杠家（杠家既不选翻也不摸打，其余座位全被卡住）。
		// 兜底：走普通杠后轮转（杠家摸牌→出牌），不改变发牌张数与碰杠胡判定。
		if (!$this->m_faceUpPhase) {
			$this->gameOutcardTurn();
		}
	}

	// ========== T_B5: 墙头空三分支 ==========
	public function doWallEndOrLiuJu()
	{
		// 墙头空 count(m_cbLeftCard)<=0（含普通摸牌完了）
		if (count($this->m_cbLeftCard) > 0) {
			$this->peopleTurn();
			$this->gameOutcardTurn();
			return;
		}
		$this->destoryClick(CLICK_NAME_OUTCARDS);
		$this->destoryClick(CLICK_NAME_FLIPCHOOSE);
		$this->destoryClick(CLICK_NAME_WAITCLAIM);
		if ($this->m_hasKong && $this->m_redealSeq < GR_REDEAL_MAX_PER_HAND) {
			$this->doRedeal();
		} else {
			$this->doLiuJu();
		}
	}

	public function doRedeal()
	{
		$this->m_redealSeq++;
		$this->m_countsAsHand = false;
		// 0分，杠ledger清0，庄不变，pao值保留（GR_REDEAL_RESELECT_PAO=false）
		$this->m_gangLedger = array();
		for ($s=1; $s<=4; $s++) {
			$this->m_gangLedger[$s] = array();
		}
		$this->m_hasKong = false;
		$reason = array(
			'handNo' => $this->m_playGround,
			'redealSeq' => $this->m_redealSeq,
			'banker' => $this->m_wBankerUser,
			'countsAsHand' => $this->m_countsAsHand ? 1 : 0,
		);
		$this->sendRoomMessage(GR_GAME_MJ_HAND_END, array_merge(array('type'=>'REDEAL'), $reason));
		// 重新调用 gameBegin，playGround不自增
		$this->gameBegin();
	}

	public function doLiuJu()
	{
		$this->m_countsAsHand = true;
		// 庄不变，0分不查叫，ledger清0（不胡杠作废）
		$this->m_gangLedger = array();
		for ($s=1; $s<=4; $s++) $this->m_gangLedger[$s] = array();
		$this->m_hasKong = false;
		$this->m_lastHandEndReason = 'LIUJU';
		$this->m_nextDealerSeat = $this->m_wBankerUser;
		$score = array();
		for ($s=1; $s<=4; $s++) $score[$s] = 0;
		$this->sendRoomMessage(GR_GAME_MJ_HAND_END, array(
			'type' => 'LIUJU',
			'handNo' => $this->m_playGround,
			'banker' => $this->m_wBankerUser,
			'nextBanker' => $this->m_nextDealerSeat,
			'score' => $score,
			'countsAsHand' => 1,
		));
		// 调用 gameFinish WIK_NULL 流转下一局或关房
		$this->gameFinish(WIK_NULL, array(), array());
	}

	//碰牌
	public function gamePengCards($OperateResult){

		$this->m_cbSendCardData = -1;
		$count = count($this->m_WeaveItemArray[$OperateResult['wOperateUser']]);
		$this->m_WeaveItemArray[$OperateResult['wOperateUser']][$count]['cbWeaveKind'] = $OperateResult['cbOperateCode'];
		$this->m_WeaveItemArray[$OperateResult['wOperateUser']][$count]['cbCenterCard'] = $OperateResult['cbOperateCard'];
		$this->m_WeaveItemArray[$OperateResult['wOperateUser']][$count]['cbPublicCard'] = $OperateResult['bDarkGuang'];
		$this->m_WeaveItemArray[$OperateResult['wOperateUser']][$count]['wProvideUser'] = $OperateResult['wProvideUser'];

		$this->m_bWealthWind[$OperateResult['wOperateUser']] = 0;
		foreach ($this->m_deskData as $key => $value) {
			$this->m_bQiangGang[$key]['state'] = 0;
			$this->m_bQiangGang[$key]['msg'] = '';
		}

		$this->saveGameMessage(6,$OperateResult);

		$seatno = $OperateResult['wOperateUser'];
		// 规则4：碰后不能打回刚碰那张
		$this->m_forbidDiscard[$seatno] = $OperateResult['cbOperateCard'];
		// v1.20 2.8：碰后不再持有"刚摸的牌"，避免出牌超时误打旧摸牌
		$this->m_lastDrawnTile[$seatno] = -1;
		array_pop($this->m_cbDiscardCardOndesk[$OperateResult['wProvideUser']]);
		$cards = GameLogic::getInstance()->SwitchToCardIndex($OperateResult['cbOperateCard']);
		$this->m_cbCardIndex[$seatno][$cards] -= 2;
		if ($this->m_cbCardIndex[$seatno][$cards] == 0) {
			unset($this->m_cbCardIndex[$seatno][$cards]);
		}
		// v1.20 2.9：碰完成后手牌应为等出牌 14-3*碰杠组数（碰后只能出牌，不能再摸/再杠）
		if (!$this->checkHandCount($seatno, 'discard')) {
			$this->rejectHandCount($seatno, 'discard');
			return;
		}
		$this->m_wOutCardUser = $OperateResult['wOperateUser'];
		$this->gameOutcardTurnNoCards();
		$this->cardsToHand($this->m_wOutCardUser);
	} 
	//吃牌
	public function gameChiCards($OperateResult){

		$this->m_cbSendCardData = -1;
		$count = count($this->m_WeaveItemArray[$OperateResult['wOperateUser']]);
		$this->m_WeaveItemArray[$OperateResult['wOperateUser']][$count]['cbWeaveKind'] = $OperateResult['cbOperateCode'];
		$this->m_WeaveItemArray[$OperateResult['wOperateUser']][$count]['cbCenterCard'] = $OperateResult['cbOperateCard'];
		$this->m_WeaveItemArray[$OperateResult['wOperateUser']][$count]['cbPublicCard'] = $OperateResult['bDarkGuang'];
		$this->m_WeaveItemArray[$OperateResult['wOperateUser']][$count]['wProvideUser'] = $OperateResult['wProvideUser'];
		
		$this->m_bWealthWind[$OperateResult['wOperateUser']] = 0;
		foreach ($this->m_deskData as $key => $value) {
			$this->m_bQiangGang[$key]['state'] = 0;
			$this->m_bQiangGang[$key]['msg'] = '';
		}
		
		$this->saveGameMessage(6,$OperateResult);

		$seatno = $OperateResult['wOperateUser'];
		// v1.20 2.8：吃后不再持有"刚摸的牌"
		$this->m_lastDrawnTile[$seatno] = -1;
		$cbCardBuffer=array();
		array_pop($this->m_cbDiscardCardOndesk[$OperateResult['wProvideUser']]);
		GameLogic::getInstance()->GetWaveCard($OperateResult['cbOperateCode'], $OperateResult['cbOperateCard'], $cbCardBuffer);
		for ($i=0; $i < 3; $i++) { 
			$cards = GameLogic::getInstance()->SwitchToCardIndex($cbCardBuffer[$i]);
			if ($cbCardBuffer[$i] != $OperateResult['cbOperateCard']) {
				$this->m_cbCardIndex[$seatno][$cards] -= 1;
			}
			if (isset($this->m_cbCardIndex[$seatno][$cards]) && $this->m_cbCardIndex[$seatno][$cards] == 0) {
				unset($this->m_cbCardIndex[$seatno][$cards]);
			}
		}
		$this->m_wOutCardUser = $OperateResult['wOperateUser'];
		$this->gameOutcardTurnNoCards();
		$this->cardsToHand($this->m_wOutCardUser);
	} 
	//结算
	public function gameFinish($type,$ChiHuResult,$OperateResult,$extraWinners=null)
	{
		$score = array();
		$gangScore = array();
		$debts = array();
		$patternNames = array();
		$baseMultiplier = 1;
		$patternText = '';
		$winSet = array();
		$winMult = array();
		$winNames = array();
		$winText = array();
		$winZiMo = array();
		$winTianHu = array();
		$winGangKai = array();
		$winTaxArr = array();
		$winGrossArr = array();
		$winNetArr = array();
		$winnerSeat = intval($OperateResult['wOperateUser']);
		$providerSeat = intval($OperateResult['wProvideUser']);
		$isZiMo = ($winnerSeat > 0 && $winnerSeat == $providerSeat);
		$huKind = isset($ChiHuResult['dwChiHuRight']) ? intval($ChiHuResult['dwChiHuRight']) : 0;
		$isGangKai = (($huKind & CHR_GANG_KAI) != 0);
		$isQiangGang = (($huKind & CHR_QIANG_GANG) != 0);
		$outcardsCount = 0;
		foreach ($this->m_cbDiscardCard as $seat => $value) {
			$outcardsCount += count($this->m_cbDiscardCard[$seat]);
		}
		// 天胡只认路径A：本局尚无任何人出牌且赢家自摸（发牌后庄家14张已成胡）
		$isTianHu = ($outcardsCount == 0 && $isZiMo);
		$isDiHu = false;
		$winTax = 0;
		$winNet = 0;
		$winGross = 0;
		$zimoTaxLog = 0;
		$multiProvider = false;

		for ($j=1; $j <= 4; $j++) {
			$score[$j] = 0;
			$gangScore[$j] = 0;
			$debts[$j] = 0;
		}

		if ($type == WIK_CHI_HU && $winnerSeat > 0) {
			// 赢家集合：一炮多响时 $extraWinners 为 seatno=>ChiHuResult，否则仅主胡
			if (is_array($extraWinners) && count($extraWinners) > 0) {
				foreach ($extraWinners as $ws => $wc) {
					$ws = intval($ws);
					if ($ws > 0) $winSet[$ws] = $wc;
				}
			}
			if (!isset($winSet[$winnerSeat])) $winSet[$winnerSeat] = $ChiHuResult;

			$bs = isset($this->m_roomRule['base_score']) ? intval($this->m_roomRule['base_score']) : GR_BASE_SCORE;
			if ($bs < GR_BASE_SCORE_MIN) $bs = GR_BASE_SCORE_MIN;
			if ($bs > GR_BASE_SCORE_MAX) $bs = GR_BASE_SCORE_MAX;
			$bs = floor($bs / GR_BASE_SCORE_STEP) * GR_BASE_SCORE_STEP;
			if ($bs < GR_BASE_SCORE_MIN) $bs = GR_BASE_SCORE_MIN;

			// 逐家计番并收付（番型公式不变；点炮由同一放炮人分别赔付）
			foreach ($winSet as $wSeat => $wChiHu) {
				$wIsZiMo = ($wSeat == $providerSeat);
				$wHuKind = isset($wChiHu['dwChiHuRight']) ? intval($wChiHu['dwChiHuRight']) : 0;
				$wIsGangKai = (($wHuKind & CHR_GANG_KAI) != 0);
				$wIsTianHu = ($outcardsCount == 0 && $wIsZiMo);
				$wNames = array();
				$wMult = intval($this->calcPatternMultiplier($wSeat, $wChiHu, $wIsZiMo, $wIsGangKai, $wIsTianHu, false, $wNames));
				$winMult[$wSeat] = $wMult;
				$winNames[$wSeat] = $wNames;
				$winText[$wSeat] = implode(',', $wNames);
				$winZiMo[$wSeat] = $wIsZiMo;
				$winTianHu[$wSeat] = $wIsTianHu;
				$winGangKai[$wSeat] = $wIsGangKai;
				$payUnit = $bs * $wMult;
				if ($wIsZiMo) {
					for ($s=1; $s <= 4; $s++) {
						if ($s == $wSeat) continue;
						if (!isset($this->m_deskData[$s]) || !$this->m_deskData[$s]['ingame']) continue;
						$pao = isset($this->m_paoPoints[$s]) ? intval($this->m_paoPoints[$s]) : 0;
						$payerScore = -1 * ($payUnit + $pao * 2 * $bs);
						$score[$s] += $payerScore;
						$score[$wSeat] -= $payerScore;
					}
				} else {
					$pao = isset($this->m_paoPoints[$providerSeat]) ? intval($this->m_paoPoints[$providerSeat]) : 0;
					$payerScore = -1 * ($payUnit + $pao * $bs);
					$score[$providerSeat] += $payerScore;
					$score[$wSeat] -= $payerScore;
				}
			}

			// 主胡展示头/日志用
			$baseMultiplier = $winMult[$winnerSeat];
			$patternNames = $winNames[$winnerSeat];
			$patternText = $winText[$winnerSeat];

			// 记录收付后、杠分结算前的胡分
			foreach ($winSet as $wSeat => $wChiHu) {
				$huGross[$wSeat] = isset($score[$wSeat]) ? $score[$wSeat] : 0;
			}
			// 杠分结算（每个赢家各结算一次），再统一 collect
			$anyPositive = false;
			foreach ($winSet as $wSeat => $wChiHu) {
				if ($huGross[$wSeat] <= 0) continue;
				$anyPositive = true;
				for ($s=1; $s <= 4; $s++) {
					if ($s == $wSeat) continue;
					if (!isset($this->m_deskData[$s]) || !$this->m_deskData[$s]['ingame']) continue;
					$v1 = isset($this->m_gangLedger[$wSeat][$s]) ? intval($this->m_gangLedger[$wSeat][$s]) : 0;
					$v2 = isset($this->m_gangLedger[$s][$wSeat]) ? intval($this->m_gangLedger[$s][$wSeat]) : 0;
					if ($v1 > 0) {
						$score[$s] -= $v1;
						$score[$wSeat] += $v1;
						$gangScore[$wSeat] += $v1;
						$gangScore[$s] -= $v1;
					}
					if ($v2 > 0) {
						$score[$s] += $v2;
						$score[$wSeat] -= $v2;
						$gangScore[$wSeat] -= $v2;
						$gangScore[$s] += $v2;
					}
				}
			}
			if ($anyPositive) {
				$this->collect($score, $debts, $gangScore);
			}
			// 自摸税仅自摸赢家；一炮多响为点炮，无税
			foreach ($winSet as $wSeat => $wChiHu) {
				if ($huGross[$wSeat] <= 0) {
					$winTaxArr[$wSeat] = 0;
					$winGrossArr[$wSeat] = 0;
					$winNetArr[$wSeat] = 0;
					continue;
				}
				$netForTax = $huGross[$wSeat] + $gangScore[$wSeat];
				if ($winZiMo[$wSeat] && $netForTax > 0) {
					$tax = floor($netForTax * GR_ZIMO_TAX_RATE);
					if ($tax < 1 && $netForTax >= 1) $tax = 1;
					if ($tax > $netForTax) $tax = $netForTax;
					$winTaxArr[$wSeat] = $tax;
				} else {
					$winTaxArr[$wSeat] = 0;
				}
				$winGrossArr[$wSeat] = $netForTax;
				$winNetArr[$wSeat] = $netForTax;
			}
			$winTax = $winTaxArr[$winnerSeat];
			$winGross = $winGrossArr[$winnerSeat];
			$winNet = $winNetArr[$winnerSeat];
			$zimoTaxLog = $winTax;

			$this->m_countsAsHand = true;
			$winnerCount = count($winSet);
			if ($winnerCount >= 2) {
				$multiProvider = true;
			}
			if ($multiProvider) {
				$this->m_nextDealerSeat = $providerSeat;
			} else {
				$this->m_nextDealerSeat = $winnerSeat;
			}
			$this->m_wBankerUser = $this->m_nextDealerSeat > 0 ? $this->m_nextDealerSeat : $winnerSeat;
		} else {
			$this->m_countsAsHand = true;
			$this->m_nextDealerSeat = $this->m_wBankerUser;
		}

		if ($this->m_roomRule['maxScore'] != 0 && $type == WIK_CHI_HU) {
			$maxTimes = 0;
			$totalScoreAbs = 0;
			foreach ($score as $seatno => $value) {
				if ($score[$seatno] < 0 && abs($score[$seatno]) > $this->m_roomRule['maxScore']) {
					$times = $score[$seatno] / $this->m_roomRule['maxScore'] * -1;
				}
				if (isset($times) && $maxTimes < $times) $maxTimes = $times;
			}
			if ($maxTimes != 0) {
				foreach ($score as $seatno => $value) {
					$score[$seatno] = floor($score[$seatno] / $maxTimes);
				}
			}
		}

		foreach ($this->m_Room_GameScore as $seatno => $value) {
			if (isset($score[$seatno])) {
				$this->m_Room_GameScore[$seatno] += $score[$seatno];
			}
		}

		if ($isZiMo && $zimoTaxLog > 0) {
			$fp = @fopen(__DIR__ . '/log/zimo_tax.log', 'a');
			if ($fp) {
				$line = date('Y-m-d H:i:s') . ' room=' . $this->m_roomPwd
					. ' round=' . $this->m_playGround
					. ' winnerSeat=' . $winnerSeat
					. ' gross=' . $winGross
					. ' tax=' . $zimoTaxLog
					. ' net=' . $winNet
					. ' pattern=' . $patternText
					. ' nextBanker=' . $this->m_nextDealerSeat
					. "\n";
				@fwrite($fp, $line);
				@fclose($fp);
			}
		}

		$cardsList = array();
		foreach ($this->m_cbCardIndex as $seatno => $info) {
			foreach ($this->m_cbCardIndex[$seatno] as $cards => $value) {
				for ($i=0; $i < $value; $i++) {
					$cardsList[$seatno][] = GameLogic::getInstance()->SwitchToCardData($cards);
				}
			}
		}
		$data = array();
		foreach ($this->m_deskData as $seatno => $info) {
			$data[$seatno]['cards'] = isset($cardsList[$seatno]) ? $cardsList[$seatno] : array();
			$wIsWinner = isset($winSet[$seatno]);
			if ($wIsWinner) {
				$data[$seatno]['hucards'] = $this->m_cbSendCardData;
			}else{
				$data[$seatno]['hucards'] = -1;
			}
			$data[$seatno]['uid'] = $this->m_deskData[$seatno]['uid'];
			$data[$seatno]['qianggang'] = $this->m_bQiangGang[$seatno];
			$data[$seatno]['score'] = isset($score[$seatno]) ? $score[$seatno] : 0;
			$data[$seatno]['gangScore'] = isset($gangScore[$seatno]) ? $gangScore[$seatno] : 0;
			$data[$seatno]['curScore'] = isset($score[$seatno]) ? $score[$seatno] : 0;
			$data[$seatno]['allScore'] =
				isset($this->m_Room_GameScore[$seatno]) ? $this->m_Room_GameScore[$seatno] : 0;
			$data[$seatno]['weaveItem'] = $this->m_WeaveItemArray[$seatno];
			$data[$seatno]['GiveGang'] = array_sum($this->m_cbGiveRecvGang[$seatno])
				- (isset($this->m_cbGiveRecvGang[$seatno][$seatno]) ? $this->m_cbGiveRecvGang[$seatno][$seatno] : 0);
			$data[$seatno]['RecvGang'] = 0;
			for ($i=1; $i <= $this->m_cbPlayerCount; $i++) {
				if ($i != $seatno) {
					$data[$seatno]['RecvGang'] += isset($this->m_cbGiveRecvGang[$i][$seatno]) ? $this->m_cbGiveRecvGang[$i][$seatno] : 0;
				}
			}
			$data[$seatno]['DarkGang'] =
				isset($this->m_Room_GangDark[$this->m_playGround][$seatno])
					? $this->m_Room_GangDark[$this->m_playGround][$seatno] : 0;
			$data[$seatno]['PengGang'] =
				isset($this->m_Room_PengGangLight[$this->m_playGround][$seatno])
					? $this->m_Room_PengGangLight[$this->m_playGround][$seatno] : 0;
			$data[$seatno]['paoPoints'] =
				isset($this->m_paoPoints[$seatno]) ? $this->m_paoPoints[$seatno] : 0;
			$data[$seatno]['baseMultiplier'] = $wIsWinner ? $winMult[$seatno] : $baseMultiplier;
			$data[$seatno]['patternNames'] = $wIsWinner ? $winNames[$seatno] : $patternNames;
			$data[$seatno]['patternText'] = $wIsWinner ? $winText[$seatno] : $patternText;
			$data[$seatno]['zimoTax'] = $wIsWinner ? $winTaxArr[$seatno] : 0;
			$data[$seatno]['isZiMo'] = $wIsWinner ? $winZiMo[$seatno] : false;
			$data[$seatno]['isGangKai'] = $wIsWinner ? $winGangKai[$seatno] : false;
			$data[$seatno]['isTianHu'] = $wIsWinner ? $winTianHu[$seatno] : $isTianHu;

			$isSelfDrawHu = ($providerSeat == $winnerSeat);
			if ($wIsWinner) {
				$data[$seatno]['hu'] = true;
				$data[$seatno]['dian'] = false;
			} else if (!$isSelfDrawHu && $providerSeat == $seatno) {
				$data[$seatno]['hu'] = false;
				$data[$seatno]['dian'] = true;
			} else {
				$data[$seatno]['hu'] = false;
				$data[$seatno]['dian'] = false;
			}
			if ($data[$seatno]['hu'] && $type == WIK_CHI_HU) {
				$data[$seatno]['baotou'] =
					isset($this->m_bBaotouStatus[$seatno]) ? $this->m_bBaotouStatus[$seatno] : false;
				$data[$seatno]['wealthwind'] =
					isset($this->m_bWealthWind[$seatno]) ? $this->m_bWealthWind[$seatno] : 0;
				$data[$seatno]['dwChiHuKind'] = isset($winSet[$seatno]['dwChiHuKind']) ? $winSet[$seatno]['dwChiHuKind'] : 0;
				$data[$seatno]['dwChiHuRight'] = isset($winSet[$seatno]['dwChiHuRight']) ? $winSet[$seatno]['dwChiHuRight'] : 0;
			}
		}
		$alldata = array();
		$alldata['0'] = $data;
		$alldata['1']['kind'] = ($type == WIK_CHI_HU) ? ($isZiMo ? 1 : 2) : 0;
		$alldata['1']['time'] = date("Y-m-d H:i:s");
		$alldata['1']['patternText'] = $patternText;
		$alldata['1']['baseMultiplier'] = $baseMultiplier;
		$alldata['1']['zimoTax'] = $winTax;
		$alldata['1']['isZiMo'] = $isZiMo ? 1 : 0;
		$alldata['1']['faceUp'] = $this->m_faceUp;
		$this->saveGameMessage(8,$alldata);
		$this->sendRoomMessage(GR_GAME_MJ_CALCULATION,$alldata);
		$this->gameEnd($data);
	}




	public function gameEnd($score){
		$this->m_gameStatus = self::GAMESTATE_END;
		
		$gamedata = array();
		$this->sendRoomMessage(GR_GAMEEND,$gamedata);

		$mode = isset($this->m_roomRule['mode']) ? $this->m_roomRule['mode'] : 'room_card';
		$maxHands = isset($this->m_roomRule['room_max_hands']) ? intval($this->m_roomRule['room_max_hands']) : GR_ROOM_MAX_HANDS;
		$isGameOver = ($mode == 'room_card' && $this->m_playGround >= $maxHands);

		//结束定时器
		//$this->addTimeClick(CLICK_NAME_END,CLICK_VALUE_END,array($this,'gameEndCallBack'),array());
		foreach ($this->m_deskData as $seatno => $info) {
			if($info['ingame']){
				foreach ($this->m_Room_GameScore as $compSeatno => $compInfo) {
					if($seatno == $compSeatno){
						$data = array();
						$data['uid'] = $info['uid'];
						$data['roompwd'] = $this->m_roomPwd;
						$data['gamename'] = GAMENAME;
						$data['playground'] = $this->m_playGround;
						$data['score'] = $score[$seatno]['curScore'];
						$data['inserttime'] = date("Y-m-d H:i:s",time());

						$data['carddata'] = '';
						GameManager::getInstance()->insertRoomRecord($data);
						$this->m_scoreRecord[$this->m_playGround][$info['uid']] = $compInfo['score'];
						//更新玩家总积分

						foreach ($this->m_playerList as $uid => $pinfo) {
							if($seatno == $pinfo['seatno']){
								$this->m_playerList[$uid]['score'] += $score[$seatno]['curScore'];
								break;
							}
						}

						break;
					}
				}
			}
		}

		if ($isGameOver) {
			$this->m_roomStatus = self::STATE_GAMEOVER;
			$closeData = array();
			$closeData['finalScore'] = $this->m_Room_GameScore;
			$closeData['playground'] = $this->m_playGround;
			$closeData['totalHands'] = $maxHands;
			$this->sendRoomMessage(GR_GAME_MJ_HAND_END,$closeData);
			$fp = @fopen(__DIR__ . '/log/hand_end.log', 'a');
			if ($fp) {
				$line = date('Y-m-d H:i:s') . ' room=' . $this->m_roomPwd
					. ' playground=' . $this->m_playGround
					. ' maxHands=' . $maxHands
					. ' mode=' . $mode
					. ' status=GAMEOVER'
					. "\n";
				@fwrite($fp, $line);
				@fclose($fp);
			}
			return;
		}

		$this->gameEndCallBack();

	}
	public function gameEndCallBack(){
		$this->destoryClick(CLICK_NAME_END);
		$this->m_roomStatus = self::STATE_NONE;
		$this->m_gameStatus = self::GAMESTATE_READY;
		//清理抢庄模式下注倍率的数据
		// if($this->m_roomRule['playmode'] == PLAYMODE_BANKER_SSW){
		// 	foreach ($this->m_deskData as $seatno => $info) {
		// 		$this->m_deskData[$seatno]['xiazhurank'] = -1;
		// 	}
		// }
		//开始下一局之前清理断线玩家
		//$this->clearOfflinePlayer();

		//清理数据
		foreach ($this->m_deskData as $seatno => $info) {
			$this->m_deskData[$seatno]['ready'] = false;
			$this->m_deskData[$seatno]['ingame'] = false;
			$this->m_deskData[$seatno]['outcardtag'] = 0;
			$this->m_deskData[$seatno]['outcards'] = array();
			$this->m_deskData[$seatno]['data'] = array();
		}
		$this->m_compareDataResult = array();
		//下一局
		$this->checkStart();
	}
}