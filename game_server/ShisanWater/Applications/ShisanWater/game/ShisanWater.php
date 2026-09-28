<?php
/**
 * @property  十三水 房间
 */

require_once __DIR__ . '/GameManager.php';
require_once __DIR__ . '/PlayerManager.php';
require_once __DIR__ . '/ShisanGameLogic.php';
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
	const GAMESTATE_ZHUANG = 3;
	const GAMESTATE_RANK = 4;
	const GAMESTATE_SEND = 5;
	const GAMESTATE_COMPARE = 6;
	const GAMESTATE_END = 7;

	
	private $m_gameStatus;

	//马牌数据
	private $m_maCardValue;


	
	public function __construct($userid,$pwd, $rule)
	{
		parent::__construct($userid,$pwd, $rule);
		$this->m_gameStatus = self::GAMESTATE_READY;
		$this->m_maCardValue = $this->getMaCardValue($rule['ma']);
		$this->m_playGround = GameManager::getInstance()->getCurPlayGroundByPwd($pwd);

		for ($i=1; $i <= 5; $i++) { 
			$this->m_allDataResult[$i]['winCount'] = 0;
			$this->m_allDataResult[$i]['specialtypeCount'] = 0;
			$this->m_allDataResult[$i]['gunCount'] = 0;
			$this->m_allDataResult[$i]['passiveGunCount'] = 0;
			$this->m_allDataResult[$i]['allgunCount'] = 0;
		}
		
	}

	public function getMaCardValue($ma){
		switch ($ma) {
			case 1:return MA_CARD_1;
			case 2:return MA_CARD_2;
			case 3:return MA_CARD_3;
			default:return 0;
		}
	}




	//====================================================================================================
	//----------------获取房间数据------------------------------------------------------------
	public function getRoomData(){

		$roomData['roomstatus'] = $this->m_roomStatus;
		$roomData['gamestatus'] = $this->m_gameStatus;
		$roomData['click'] = $this->m_roomClickValue;

		$roomData['roomowner'] = $this->m_roomOwner;
		$roomData['roomownernick'] = isset($this->m_playerList[$this->m_roomOwner])?$this->m_playerList[$this->m_roomOwner]['nickname']:"";
		$roomData['roompwd'] = $this->m_roomPwd;
		$roomData['playGround'] = $this->m_playGround;
		$roomData['rule'] = $this->m_roomRule;
		$roomData['macardvalue'] = $this->m_maCardValue;
		$roomData['playerlist'] = $this->m_playerList;
		$roomData['deskdata'] = $this->m_deskData;
		$roomData['comparedata']  = $this->m_compareDataResult;
		//解散数据
		//$roomData['waittingdismiss'] = $this->m_waittingDismiss;
		$roomData['dismissData'] = $this->m_dismissData;
		$roomData['dismissMark'] = $this->m_dismissMark;

		return $roomData;
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
			if($this->m_gameStatus != self::GAMESTATE_READY){
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

		$readyCount = 0;
		foreach ($this->m_deskData as $seatno => $info) {
			if($info['ready']){
				$readyCount++;
			}
		}


		if($this->m_playGround == 0){
			//
		}else if(sizeof($this->m_deskData) == $readyCount){
			$this->gameBegin();
		}



		// if ($this->m_roomRule['allinstart'] == 1) {
		// 	if (sizeof($this->m_deskData) == $this->m_roomRule['peoplecount']) {
		// 		$this->gameWait();
		// 	}
		// } else {
		// 	//第一局，人数凑齐，直接开始

		// 	if (sizeof($this->m_deskData) >= 2 && !isset($this->m_roomClick[CLICK_NAME_WAITSTART])) {
		// 		$this->gameWait();
		// 	}
		// }

	}


	//====================================================================================================
	//----------------------------------------房间逻辑-----------------------------------------------------
	public function roomOwnerStart($uid){

		if($this->m_gameStatus == self::GAMESTATE_READY && $this->m_playGround == 0){
			if(sizeof($this->m_deskData) >= 2){
				$this->gameBegin();
			}else{
				echo "you are not owner or low people \n";
			}
		}else{
			echo "not in ready time or not first ju \n";
			return ;
		}

	}
	// public function gameWaitCallBack(){
	// 	$this->destoryClick(CLICK_NAME_WAITSTART);
	// 	$this->gameBegin();
	// }


	public function gameBegin(){

		$this->m_playGround++;
		GameManager::getInstance()->updateRoomPlayGround($this->m_roomPwd,$this->m_playGround);
		$this->m_roomStatus = self::STATE_PLAYING;
		$this->m_gameStatus = self::GAMESTATE_BEGIN;

		//开始游戏等待时，玩家支付房卡
		//$this->coastPlayerCard();
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
	}

	public function gameBeginCallBack(){
		$this->destoryClick(CLICK_NAME_STARTTING);
		
		$this->gameSendCards();
	}

	//----------------------发牌--------------------------
	public function gameSendCards(){
		$this->m_gameStatus = self::GAMESTATE_SEND;
		//开始定时器

		$sendcardtime = 0;
		if($this->m_roomRule['paitime'] != 0){
			$sendcardtime = $this->m_roomRule['paitime'];
			$this->addTimeClick(CLICK_NAME_SENDCARDS,$this->m_roomRule['paitime'],array($this,'gameSendCardsCallBack'),array());
		}


		
		//start ---发牌--

		$ingameCount = 0;
		foreach ($this->m_deskData as $seatno => $info) {
			if($info['ingame']){
				$ingameCount++;
			}
		}

		//$cardsList = GameLogic::getInstance()->createCards($ingameCount);
		$clist = $this->getUserClist();
		$cardsList = GameLogic::getInstance()->createCardsByClist($clist,$this->m_roomRule['peoplecount']);
		$cardsIndex = 0;
		foreach ($this->m_deskData as $seatno => $info) {
			if ($info['ingame']) {
				$this->m_deskData[$seatno]['data']['cards'] = $cardsList[$cardsIndex];

				$specialType = GameLogic::getInstance()->getSpecialCardType($cardsList[$cardsIndex]);
			
				$this->m_deskData[$seatno]['data']['specialtype'] = $specialType;
				$this->m_deskData[$seatno]['data']['enable'] = false;
				$this->m_deskData[$seatno]['outcardtag'] = 0;
				$this->m_deskData[$seatno]['data']['remommondgroup'] = GameLogic::getInstance()->analyseAIReCommondCards($cardsList[$cardsIndex]);
				$this->m_deskData[$seatno]['data']['cardtypelist'] = GameLogic::getInstance()->analyseCards($cardsList[$cardsIndex]);
				//特殊牌型直接出牌
				// if($specialType != TP_S_NONE){
				// 	$this->m_deskData[$seatno]['outcardtag'] = 1;
				// }
				$cardsIndex++;
			}
		}
		$resData['clicktime'] = $sendcardtime;
		$resData['deskdata'] = $this->m_deskData;
		$this->sendDeskMessage(GR_GAME_SEND_CARDS,$resData);

	}

	public function getUserClist(){
		$list = array();
		foreach ($this->m_deskData as $seatno => $info) {
			if ($info['ingame']) {
				foreach ($this->m_controlList as $seatnoIn => $arr) {
					if($seatno == $seatnoIn){
						if(isset($arr[$this->m_playGround])){
							$list[] = $arr[$this->m_playGround];
						}else{
							$list[] = false;
						}
						break;
					}
				}
			}
		}
		return $list;
	}

	public function gameSendCardsCallBack(){
		$this->destoryClick(CLICK_NAME_SENDCARDS);


		//判断比牌条件
		$compareCount = 0;
		$ingameCount = 0;
		foreach ($this->m_deskData as $seatno => $info) {
			if($info['ingame'] && $info['outcardtag'] == 0){
				// if($this->m_deskData[$seatno]['data']['specialtype'] == TP_S_NONE){
				$this->m_deskData[$seatno]['data']['specialtype'] = TP_S_NONE;
					$cards = array();//sizeof($this->m_deskData[$seatno]['data']['remommondgroup']) > 0 ? $this->m_deskData[$seatno]['data']['remommondgroup'][0]:array();

					if(sizeof($this->m_deskData[$seatno]['data']['remommondgroup']) > 0){
						$cards = $this->m_deskData[$seatno]['data']['remommondgroup'][0];
					}else{
						for ($i=0; $i < 13; $i++) { 
							if($i>=0 && $i<3){
								$cards['head'][] = $this->m_deskData[$seatno]['data']['cards'][$i];
							}else if($i>=3 && $i<8){
								$cards['mid'][] = $this->m_deskData[$seatno]['data']['cards'][$i];
							}else if($i>=8 && $i<13){
								$cards['foot'][] = $this->m_deskData[$seatno]['data']['cards'][$i];
							}
						}
					}

					$cards['head_name'] = GameLogic::getInstance()->getNormalCardType($cards['head']);
					$cards['mid_name'] = GameLogic::getInstance()->getNormalCardType($cards['mid']);
					$cards['foot_name'] = GameLogic::getInstance()->getNormalCardType($cards['foot']);

				
				// if($cards['head_name'] == 0){
				// 	echo "======================================null==============================================\n";
				// 	var_dump($cards['head']);
				// }
				// if($cards['mid_name'] == 0)var_dump($cards['mid']);
				// if($cards['foot_name'] == 0)var_dump($cards['foot']);
				

					$this->m_deskData[$seatno]['data']['outcards'] = $cards;
				// }else{
				// 	//特殊牌型的玩家默认为特殊牌型
				// 	$this->m_deskData[$seatno]['data']['enable'] = true;
				// }
				$this->m_deskData[$seatno]['outcardtag'] = 1;
			}
		}
		$this->gameCompareCards();
		
	}
	//特殊牌型出牌操作
	public function gameSpecialCardOperate($uid,$data){
		if ($this->m_gameStatus != self::GAMESTATE_SEND)return ;
		foreach ($this->m_deskData as $seatno => $info) {
			if($info['uid'] == $uid){
				if(!$info['ingame'] || $info['outcardtag'] == 1 || $info['data']['specialtype'] == TP_S_NONE) return;

				if ($data == false) {
					$res['outtag'] = 0;
					$res['type'] = 0;
					$res['seatno'] = $seatno;
					$this->m_deskData[$seatno]['data']['specialtype'] = TP_S_NONE;
					$this->sendMsgToUser($uid,GR_GAME_SPECIALTYPE_OPERATE,$res);
				}else{
					$this->m_deskData[$seatno]['outcardtag'] = 1;
					$res['outtag'] = 1;
					$res['type'] = $this->m_deskData[$seatno]['data']['specialtype'];
					GameLogic::getInstance()->sortCards($this->m_deskData[$seatno]['data']['cards']);
					for ($i=count($this->m_deskData[$seatno]['data']['cards']) - 1; $i >= 0 ; $i--) { 
						$res['cards'][] = $this->m_deskData[$seatno]['data']['cards'][$i];
					}
					$res['seatno'] = $seatno;
					$this->m_allDataResult[$seatno]['specialtypeCount']++;

					$this->sendDeskMessage(GR_GAME_SPECIALTYPE_OPERATE,$res);
					$this->canCompareCard();

				}
				
				break;
			}

		}

	}
    //----------------------出牌--------------------------
	public function gameOutCards($uid,$data){
		if ($this->m_gameStatus != self::GAMESTATE_SEND)return ;
		foreach ($this->m_deskData as $seatno => $info) {
			//if($info['uid'] == $uid && $info['ingame'] && $info['outcardtag'] == 1) return;

			if($info['uid'] == $uid){
				if(!$info['ingame'] || $info['outcardtag'] == 1) return;

				if(isset($data['head'])&&is_array($data['head']) && isset($data['mid'])&&is_array($data['mid']) && isset($data['foot'])&&is_array($data['foot'])){

					$cards = array();
					foreach ($data['head'] as $key => $value) {
						$cards[] = $value;
					}
					foreach ($data['mid'] as $key => $value) {
						$cards[] = $value;
					}
					foreach ($data['foot'] as $key => $value) {
						$cards[] = $value;
					}

					if(sizeof($cards) != 13){
						echo "outcard error,number error! \n";
						return;
					}
					//对比牌型是否于自己的相同
					// var_dump($cards);
					GameLogic::getInstance()->sortCards($cards);
					foreach ($this->m_deskData as $seatno => $info) {
						if($info['uid'] == $uid && $info['ingame']){
							//if($info['data']['specialtype'] != TP_S_NONE)continue;
							for ($i=0; $i < 13; $i++) { 
								if ($info['data']['cards'][$i] == $cards[$i]){
									continue;
								}else{
									echo "outcard error,value error! \n";

									// echo '-----------outcard error,value error! -----------\n';
									// echo 'server cards (';
									// foreach ($info['data']['cards'] as $key => $value) {
									// 	echo " ".$value." ";
									// }
									// echo ') \n';
									// echo ' client cards (';
									// foreach ($cards as $key => $value) {
									// 	echo " ".$value." ";
									// }
									// echo ')\n';
									// echo '------------------------------------- -----------\n';


									return;
								}
							}
							//核对成功
							$this->sendOutCardResult($uid,$data);
							break;
						}
					}
				}else{
					echo "outcard error,arraydata error! \n";
				}
				break;
			}
		}
	}

	public function sendOutCardResult($uid,$data){

		foreach ($this->m_deskData as $seatno => $info) {
			if($info['uid'] == $uid && $info['ingame']){
				if ($info['data']['specialtype'] != TP_S_NONE){
					$this->m_deskData[$seatno]['data']['specialtype'] = TP_S_NONE;
					$this->m_deskData[$seatno]['data']['enable'] = false;
				}
			}
		}


		$res= array();
		if(GameLogic::getInstance()->compareCards($data['head'],$data['mid']) > 0){

			$res['outtag'] = 0;
			$res['error'] = 1;
			$this->sendMsgToUser($uid,GR_GAME_OUT_CARDS,$res);
			return;
		}

		if(GameLogic::getInstance()->compareCards($data['mid'],$data['foot']) > 0){

			$res['outtag'] = 0;
			$res['error'] = 2;
			$this->sendMsgToUser($uid,GR_GAME_OUT_CARDS,$res);
			return;
		}


		$res['outtag'] = 1;
		$res['type'] = "normal";
		foreach ($this->m_deskData as $seatno => $info) {
			if($info['uid'] == $uid && $info['ingame']){
				$this->m_deskData[$seatno]['outcardtag'] = 1;
				$this->m_deskData[$seatno]['data']['outcards'] = $data;
				$this->m_deskData[$seatno]['data']['outcards']['head_name'] = GameLogic::getInstance()->getNormalCardType($data['head']);
				$this->m_deskData[$seatno]['data']['outcards']['mid_name'] = GameLogic::getInstance()->getNormalCardType($data['mid']);
				$this->m_deskData[$seatno]['data']['outcards']['foot_name'] = GameLogic::getInstance()->getNormalCardType($data['foot']);


				$res['seatno'] = $seatno;
				break;
			}
		}
		$this->sendDeskMessage(GR_GAME_OUT_CARDS,$res);

		
		$this->canCompareCard();

	}

	//判断比牌条件
	public function canCompareCard(){
		//判断比牌条件
		$compareCount = 0;
		$ingameCount = 0;
		foreach ($this->m_deskData as $seatno => $info) {
			if($info['ingame']){
				$ingameCount++;
				if($info['outcardtag'] == 1){
					$compareCount++;
				}
			}

		}

		if($compareCount == $ingameCount){
			$this->destoryClick(CLICK_NAME_SENDCARDS);
			$this->gameCompareCards();
		}
	}


	//获得马牌标志
	public function checkMaData($cards){
		if($this->m_maCardValue !=0){
			for ($i=0; $i < sizeof($cards); $i++) { 
				if($cards[$i] == $this->m_maCardValue){
					return 2;
				}
			}
			return 1;
		}else{
			return 1;
		}
	}
	//----------------------比牌--------------------------
	public function gameCompareCards(){
		$this->m_gameStatus = self::GAMESTATE_COMPARE;




		//比牌算分---------------------------------------------------
		// $bankerNo = -1;
		// foreach ($this->m_deskData as $seatno => $info) {
		// 	if($info['ingame'] && $info['isbanker']){
		// 		$bankerNo = $seatno;
		// 		break;
		// 	}
		// }


		$this->m_compareDataResult = array();
		foreach ($this->m_deskData as $seatno => $info) {
			if ($info['ingame']) {
				if($this->m_deskData[$seatno]['data']['specialtype'] == TP_S_NONE ){
					// $this->m_compareDataResult[$seatno]['specialtype'] 	= TP_S_NONE;
					$this->m_compareDataResult[$seatno]['head'] 			= $this->m_deskData[$seatno]['data']['outcards']['head'];
					$this->m_compareDataResult[$seatno]['head_name'] 		= $this->m_deskData[$seatno]['data']['outcards']['head_name'];
					$this->m_compareDataResult[$seatno]['mid'] 				= $this->m_deskData[$seatno]['data']['outcards']['mid'];
					$this->m_compareDataResult[$seatno]['mid_name'] 		= $this->m_deskData[$seatno]['data']['outcards']['mid_name'];
					$this->m_compareDataResult[$seatno]['foot'] 			= $this->m_deskData[$seatno]['data']['outcards']['foot'];
					$this->m_compareDataResult[$seatno]['foot_name'] 		= $this->m_deskData[$seatno]['data']['outcards']['foot_name'];
				}else{
					// $this->m_compareDataResult[$seatno]['specialtype'] 	= $this->m_deskData[$seatno]['data']['specialtype'];
					$this->m_compareDataResult[$seatno]['cards'] 			= $this->m_deskData[$seatno]['data']['cards'];
					$this->m_compareDataResult[$seatno]['cards_name'] 		= $this->m_deskData[$seatno]['data']['specialtype'];
				}
				$this->m_compareDataResult[$seatno]['head_score'] = 0;
				$this->m_compareDataResult[$seatno]['mid_score'] = 0;
				$this->m_compareDataResult[$seatno]['foot_score'] = 0;
				$this->m_compareDataResult[$seatno]['score'] = 0;

				// $this->m_compareDataResult[$seatno]['gun'] = 0;//庄闲中的是否被打枪
				$this->m_compareDataResult[$seatno]['gunlist'] = array();//通比中的打枪名单
				$this->m_compareDataResult[$seatno]['allgun'] = 0;
				$this->m_compareDataResult[$seatno]['mamark'] = $this->checkMaData($this->m_deskData[$seatno]['data']['cards']);
			}
		}
		foreach ($this->m_deskData as $seatno => $info) {
			if($info['ingame']){
				foreach ($this->m_deskData as $seatnoIn => $infoIn) {
					if($info['ingame'] && $seatno != $seatnoIn){
						$this->m_compareDataResult[$seatno]['dscore'][$seatnoIn] = 0;
					}
				}
			}
		}

		$this->tongCompare($this->m_compareDataResult);

		foreach ($this->m_compareDataResult as $seatno => $info) {
			if ($this->m_compareDataResult[$seatno]['score'] > 0) {
				$this->m_allDataResult[$seatno]['winCount']++;
			}
			$this->m_allDataResult[$seatno]['gunCount'] += count($this->m_compareDataResult[$seatno]['gunlist']);
			
			foreach ($this->m_compareDataResult as $key => $value) {
				if ($key == $seatno) {
					continue;
				}
				foreach ($this->m_compareDataResult[$key]['gunlist'] as $k => $v) {
					if ($v == $seatno) {
						$this->m_allDataResult[$seatno]['passiveGunCount']++;
					}
				}
			}
			if ($this->m_compareDataResult[$seatno]['allgun'] == 1) {
				$this->m_allDataResult[$seatno]['allgunCount']++;
			}
			

		}
		// if ($this->m_roomRule['playmode'] == PLAYMODE_BANKER_SSW) {
		// 	$this->zhuangCompare($bankerNo,$this->m_compareDataResult);
		// } else {
		// 	$this->tongCompare($this->m_compareDataResult);
		// }

		//比牌顺序排列
		// $compareOrder = $this->getCompareOrderList($this->m_compareDataResult);
		// $this->m_compareDataResult['order'] = $compareOrder;

		$this->sendRoomMessage(GR_GAME_COMPARE_CARDS,$this->m_compareDataResult);
		//var_dump($this->m_compareDataResult);

		//判断比牌人数
		// $compareCount = 1;
		// foreach ($this->m_deskData as $seatno => $info) {
		// 	if($info['ingame'] && $info['data']['specialtype'] == TP_S_NONE){
		// 		$compareCount++;
		// 	}
		// }
		// $compareCount = ($compareCount==0?1:$compareCount);


		// $normalCount = 0;
		// $specialCount = 0;
		// foreach ($this->m_deskData as $seatno => $info) {
		// 	if($info['ingame']){
		// 		if($info['data']['specialtype'] == TP_S_NONE){
		// 			$normalCount++;
		// 		}else{
		// 			$specialCount++;
		// 		}
		// 	}
		// }
		$gunCount = 0;
		$allgun = 0;
		foreach ($this->m_compareDataResult as $seatno => $info) {
			if($seatno == 'order')continue;
			if(sizeof($info['gunlist']) > 0)$gunCount += sizeof($info['gunlist']);
			if($info['allgun'] > 0)$allgun++;
		}
		$timevalue = CLICK_VALUE_COMPARECARDS_UNIT + $gunCount*2.5 + $allgun*2 +4;
		//开始定时器
		$this->addTimeClick(CLICK_NAME_COMPARECARDS_UNIT,$timevalue,array($this,'gameCompareCardsCallBack'),array());

	}


	public function tongCompare(&$dataResult){
		$baseRank = $this->m_roomRule['basescore'];

		$specialCardsScore = array(
								TP_S_THREE_ORDER => 6,
								TP_S_THREE_SAME_COLOR => 6,
								TP_S_DUIZI_6 => 6,
								TP_S_ONE_LONG => 26,
								TP_S_MAX_LONG => 108
									);

		foreach ($this->m_deskData as $seatno => $info) {
			if(!$info['ingame'])continue;
			foreach ($this->m_deskData as $seatnoin => $infoin) {
				if(!$infoin['ingame'])continue;
				if($seatno <= $seatnoin)continue;

				$maMark = ($dataResult[$seatno]['mamark']==2||$dataResult[$seatnoin]['mamark']==2)?2:1;
				//------------------
				if($infoin['data']['specialtype'] == TP_S_NONE && $info['data']['specialtype'] == TP_S_NONE){

					$resultScore = 0;
					//头道
					$compRes1 = GameLogic::getInstance()->compareCards($info['data']['outcards']['head'],$infoin['data']['outcards']['head']);
					$score = abs($compRes1);


					if($compRes1 > 0 && $info['data']['outcards']['head_name'] == TP_THREE_TIAO || $compRes1 < 0 && $infoin['data']['outcards']['head_name'] == TP_THREE_TIAO){
						$score += 2;
					}

					//马牌倍率
					$score *= $maMark;
					//底分倍率
					$score *= $baseRank;

					$dataResult[$seatno]['head_score'] 			+= $compRes1*$score;
					$dataResult[$seatnoin]['head_score'] 		+= $compRes1*$score*(-1);
					$dataResult[$seatno]['score'] 				+= $compRes1*$score;
					$dataResult[$seatnoin]['score'] 			+= $compRes1*$score*(-1);
					$resultScore += $compRes1*$score;

					//记录两两之间的结算
					$dataResult[$seatno]['dscore'][$seatnoin] += $compRes1*$score;
					$dataResult[$seatnoin]['dscore'][$seatno] += $compRes1*$score*(-1);

					//中道
					$compRes2 = GameLogic::getInstance()->compareCards($info['data']['outcards']['mid'],$infoin['data']['outcards']['mid']);
					$score = abs($compRes2);
					if($compRes2 > 0){
						switch ($info['data']['outcards']['mid_name']) {
							case TP_HULU:$score += 1;break;
							case TP_BOMB:$score += 7;break;
							case TP_SAME_COLOR_ORDER:$score += 9;break;
							case TP_5SAME:$score += 19;break;
							
							default:break;
						}
					}
					if($compRes2 < 0){
						switch ($infoin['data']['outcards']['mid_name']) {
							case TP_HULU:$score += 1;break;
							case TP_BOMB:$score += 7;break;
							case TP_SAME_COLOR_ORDER:$score += 9;break;
							case TP_5SAME:$score += 19;break;

							default:break;
						}
					}

					$score *= $maMark;
					$score *= $baseRank;
					$dataResult[$seatno]['mid_score'] 		+= $compRes2*$score;
					$dataResult[$seatnoin]['mid_score'] 	+= $compRes2*$score*(-1);
					$dataResult[$seatno]['score'] 			+= $compRes2*$score;
					$dataResult[$seatnoin]['score'] 		+= $compRes2*$score*(-1);
					$resultScore += $compRes2*$score;

					//记录两两之间的结算
					$dataResult[$seatno]['dscore'][$seatnoin] += $compRes2*$score;
					$dataResult[$seatnoin]['dscore'][$seatno] += $compRes2*$score*(-1);

					//尾道
					$compRes3 = GameLogic::getInstance()->compareCards($info['data']['outcards']['foot'],$infoin['data']['outcards']['foot']);
					$score = abs($compRes3);
					if($compRes3 > 0){
						switch ($info['data']['outcards']['foot_name']) {
							case TP_BOMB:$score += 3;break;
							case TP_SAME_COLOR_ORDER:$score += 4;break;
							case TP_5SAME:$score += 9;break;
							default:break;
						}
					}
					if($compRes3 < 0){
						switch ($infoin['data']['outcards']['foot_name']) {
							case TP_BOMB:$score += 3;break;
							case TP_SAME_COLOR_ORDER:$score += 4;break;
							case TP_5SAME:$score += 9;break;
							default:break;
						}
					}
					$score *= $maMark;
					$score *= $baseRank;
					$dataResult[$seatno]['foot_score'] 			+= $compRes3*$score;
					$dataResult[$seatnoin]['foot_score'] 		+= $compRes3*$score*(-1);
					$dataResult[$seatno]['score'] 				+= $compRes3*$score;
					$dataResult[$seatnoin]['score'] 			+= $compRes3*$score*(-1);
					$resultScore += $compRes3*$score;

					//记录两两之间的结算
					$dataResult[$seatno]['dscore'][$seatnoin] += $compRes3*$score;
					$dataResult[$seatnoin]['dscore'][$seatno] += $compRes3*$score*(-1);

					if($compRes1==1 && $compRes2==1 && $compRes3==1){


						$dataResult[$seatno]['gunlist'][] = $seatnoin;

						$dataResult[$seatno]['score'] 		+= $dataResult[$seatno]['dscore'][$seatnoin];
						$dataResult[$seatnoin]['score'] 	+= $dataResult[$seatnoin]['dscore'][$seatno];

						//记录两两之间的结算
						$dataResult[$seatno]['dscore'][$seatnoin] *= 2;
						$dataResult[$seatnoin]['dscore'][$seatno] *= 2;
					}else if($compRes1==-1 && $compRes2==-1 && $compRes3==-1){

						$dataResult[$seatnoin]['gunlist'][] = $seatno;

						$dataResult[$seatno]['score'] 		+= $dataResult[$seatno]['dscore'][$seatnoin];
						$dataResult[$seatnoin]['score'] 	+= $dataResult[$seatnoin]['dscore'][$seatno];

						//记录两两之间的结算
						$dataResult[$seatno]['dscore'][$seatnoin] *= 2;
						$dataResult[$seatnoin]['dscore'][$seatno] *= 2;
					}

					


				}else if($infoin['data']['specialtype'] != TP_S_NONE && $info['data']['specialtype'] != TP_S_NONE){

					if ($info['data']['specialtype'] > $infoin['data']['specialtype']) {
						$score = ($specialCardsScore[$info['data']['specialtype']] * $dataResult[$seatno]['mamark']) - ($specialCardsScore[$infoin['data']['specialtype']] * $dataResult[$seatnoin]['mamark']);
						// $score *= $maMark;

						$dataResult[$seatno]['score'] += $score;
						$dataResult[$seatnoin]['score'] -= $score;

						$dataResult[$seatno]['dscore'][$seatnoin] += $score;						
						$dataResult[$seatnoin]['dscore'][$seatno] += $score * -(1);
					}else if ($info['data']['specialtype'] < $infoin['data']['specialtype']) {
						$score = ($specialCardsScore[$infoin['data']['specialtype']] * $dataResult[$seatno]['mamark']) - ($specialCardsScore[$info['data']['specialtype']] * $dataResult[$seatnoin]['mamark']);
						// $score *= $maMark;

						$dataResult[$seatno]['score'] -= $score;
						$dataResult[$seatnoin]['score'] += $score;

						$dataResult[$seatno]['dscore'][$seatnoin] += $score * -(1);						
						$dataResult[$seatnoin]['dscore'][$seatno] += $score;
					}else{
						
						$dataResult[$seatno]['score'] += 0;
						$dataResult[$seatnoin]['score'] += 0;

						$dataResult[$seatno]['dscore'][$seatnoin] += 0;						
						$dataResult[$seatnoin]['dscore'][$seatno] += 0;
					}	

				}else{

					if($info['data']['specialtype'] != TP_S_NONE){
						$score = $specialCardsScore[$info['data']['specialtype']];
						$score *= $maMark;
						$score *= $baseRank;
						$dataResult[$seatno]['score'] += $score;
						$dataResult[$seatnoin]['score'] += $score*(-1);
						//记录两两之间的结算
						$dataResult[$seatno]['dscore'][$seatnoin] += $score;
						$dataResult[$seatnoin]['dscore'][$seatno] += $score*(-1);

					}else if($infoin['data']['specialtype'] != TP_S_NONE){
						$score = $specialCardsScore[$infoin['data']['specialtype']];
						$score *= $maMark;
						$score *= $baseRank;
						$dataResult[$seatno]['score'] += $score*(-1);
						$dataResult[$seatnoin]['score'] += $score;
						//记录两两之间的结算
						$dataResult[$seatno]['dscore'][$seatnoin] += $score*(-1);
						$dataResult[$seatnoin]['dscore'][$seatno] += $score;

					}
				}
				//------------------

			}
		}

		$peoplecount = count($this->m_deskData);
		$isquan = false;
		if ($this->m_roomRule['peoplecount'] == 4 || $this->m_roomRule['peoplecount'] == 5) {
			if ($this->m_roomRule['peoplecount'] == 4 && $peoplecount == 4) {
				$isquan = true;
			}else if ($this->m_roomRule['peoplecount'] == 5 && ($peoplecount == 4 || $peoplecount == 5)) {
				$isquan = true;
			}
		}
		if($this->m_roomRule['peoplecount'] == 4 || $this->m_roomRule['peoplecount'] == 5){
			foreach ($dataResult as $seatno => $info) {
				if ($this->m_deskData[$seatno]['data']['specialtype'] == TP_S_NONE) {

					if(sizeof($info['gunlist'])+1 == $peoplecount && $isquan){
						$dataResult[$seatno]['allgun'] = 1;
						$dataResult[$seatno]['score'] *= 2;
						foreach ($dataResult as $seatnoin => $infoIn) {
							if( $seatno == $seatnoin )continue;
						
								$dataResult[$seatnoin]['score'] += $dataResult[$seatnoin]['dscore'][$seatno];

								$dataResult[$seatno]['dscore'][$seatnoin] *= 2;
								$dataResult[$seatnoin]['dscore'][$seatno] *= 2;
						}

						break;
					}
				}
			}
		}


	}



	// public function getCompareOrderList($gameData){
	// 	$deskDataList = array();
	// 	foreach ($this->m_deskData as $seatno => $info) {
	// 		if ($info['ingame']) {
	// 			if($this->m_deskData[$seatno]['data']['specialtype'] == TP_S_NONE){
	// 				$list = array();
	// 				$list['seatno'] = $seatno;
	// 				$list['head'] = $gameData[$seatno]['head'];
	// 				$list['mid'] = $gameData[$seatno]['mid'];
	// 				$list['foot'] = $gameData[$seatno]['foot'];
	// 				$deskDataList[] = $list;
	// 			}

	// 		}
	// 	}

	// 	if(sizeof($deskDataList) > 0){

	// 		$headData = $deskDataList;
	// 		 $count = sizeof($headData);
	//          for($k=1;$k<$count;$k++){
	//             for($i=0;$i<$count-$k;$i++){
	//                 if(GameLogic::getInstance()->compareCards($headData[$i]['head'],$headData[$i+1]['head']) >0){//相邻比较
	//                     $tem=$headData[$i];
	//                     $headData[$i]=$headData[$i+1];
	//                     $headData[$i+1]=$tem;
	//                 }
	//             }
	//         }

	//         $midData = $deskDataList;
	// 		 $count = sizeof($midData);
	//          for($k=1;$k<$count;$k++){
	//             for($i=0;$i<$count-$k;$i++){
	//                 if(GameLogic::getInstance()->compareCards($midData[$i]['mid'],$midData[$i+1]['mid'])>0){//相邻比较
	//                     $tem=$midData[$i];
	//                     $midData[$i]=$midData[$i+1];
	//                     $midData[$i+1]=$tem;
	//                 }
	//             }
	//         }

	//         $footData = $deskDataList;
	// 		 $count = sizeof($footData);
	//          for($k=1;$k<$count;$k++){
	//             for($i=0;$i<$count-$k;$i++){
	//                 if(GameLogic::getInstance()->compareCards($footData[$i]['foot'],$footData[$i+1]['foot'])>0){//相邻比较
	//                     $tem=$footData[$i];
	//                     $footData[$i]=$footData[$i+1];
	//                     $footData[$i+1]=$tem;
	//                 }
	//             }
	//         }

	//         $res = array();
	//         for ($i=0; $i < sizeof($deskDataList); $i++) { 
	//         	$res['head'][] = $headData[$i]['seatno'];
	//         	$res['mid'][] = $midData[$i]['seatno'];
	//         	$res['foot'][] = $footData[$i]['seatno'];
	//         }
	//         return $res;
	// 	}
	// 	return array();
	// }


	// public function getSpecialCardsScore($name){
	// 	$score = 1;
	// 	switch ($name) {
	// 		case TP_S_THREE_ORDER:$score = 6;break;
	// 		case TP_S_THREE_SAME_COLOR:$score = 8;break;
	// 		case TP_S_DUIZI_6:$score = 8;break;
	// 		case TP_S_DUIZI_5_3:$score = 10;break;
	// 		case TP_S_FOUR_GROUP_THREE:$score = 12;break;
	// 		case TP_S_CHOU_ONE_COLOR:$score = 20;break;
	// 		case TP_S_ALL_SMALL:$score = 20;break;
	// 		case TP_S_ALL_BIG:$score = 20;break;
	// 		case TP_S_THREE_UNDER_SKY:$score = 40;break;
	// 		case TP_S_THREE_SAME_COLOR_ORDER:$score = 40;break;
	// 		case TP_S_12_KING_FAMILY:$score = 48;break;
	// 		case TP_S_ONE_LONG:$score = 72;break;
	// 		case TP_S_ONE_COLOR:$score = 80;break;
	// 		case TP_S_DOUBLE_TONG:$score = 90;break;
	// 		case TP_S_MAX_LONG:$score = 108;break;
	// 		default:break;
	// 	}
	// 	return $score;
	// }

	public function gameCompareCardsCallBack(){
		$this->destoryClick(CLICK_NAME_COMPARECARDS_UNIT);
		$this->gameEnd();
	}


	public function gameEnd(){
		$this->m_gameStatus = self::GAMESTATE_END;
		
		$gamedata = array();
		$this->sendRoomMessage(GR_GAMEEND,$gamedata);

		//结束定时器
		//$this->addTimeClick(CLICK_NAME_END,CLICK_VALUE_END,array($this,'gameEndCallBack'),array());

		foreach ($this->m_deskData as $seatno => $info) {
			if($info['ingame']){
				foreach ($this->m_compareDataResult as $compSeatno => $compInfo) {
					if($seatno == $compSeatno){
						$data = array();
						$data['uid'] = $info['uid'];
						$data['roompwd'] = $this->m_roomPwd;
						$data['gamename'] = GAMENAME;
						$data['playground'] = $this->m_playGround;
						$data['score'] = $compInfo['score'];
						$data['inserttime'] = time();

						$cardData = array();
						$cardData['specialtype'] = $info['data']['specialtype'];
						if($info['data']['specialtype'] == TP_S_NONE){
							$cardData['cards'] = $info['data']['outcards'];
						}else{
							$cardData['cards'] = $info['data']['cards'];
						}
						$data['carddata'] = serialize($cardData);
						GameManager::getInstance()->insertRoomRecord($data);
						$this->m_scoreRecord[$this->m_playGround][$info['uid']] = $compInfo['score'];
						//更新玩家总积分

						foreach ($this->m_playerList as $uid => $pinfo) {
							if($seatno == $pinfo['seatno']){
								$this->m_playerList[$uid]['score'] += $compInfo['score'];
								break;
							}
						}

						break;
					}
				}
			}
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


	// public function gameOver(){

	// 	if ($this->m_roomStatus == self::STATE_PLAYING)return;
	// 	//销毁定时器
	// 	foreach ($this->m_roomClick as $name => $info) {
	// 		$this->destoryClick($name);
	// 	}

	// 	//var_dump($this->m_playerList);

	// 	foreach ($this->m_playerList as $uid => $info) {
	// 		if($info['ispay']){
	// 			$data = array();
	// 			$data['uid'] = $uid;
	// 			$data['roompwd'] = $this->m_roomPwd;
	// 			$data['gamename'] = GAMENAME;
	// 			$data['score'] = $info['score'];
	// 			$data['createtime'] = time();
	// 			GameManager::getInstance()->insertRoomAllRecord($data);
	// 		}
	// 	}


	// 	$overData = array();
	// 	foreach ($this->m_playerList as $uid => $info) {
	// 		if($info['ispay'] > 0){
	// 			$data = array();
	// 			$data['uid'] = $uid;
	// 			$data['nickname'] = $info['nickname'];
	// 			$data['score'] = $info['score'];
	// 			$overData[] = $data;
	// 		}
	// 	}

	// 	//var_dump($overData);

	// 	//冒泡排名
	// 	$count = sizeof($overData);
 //        for($k=1;$k<$count;$k++){
 //            for($i=0;$i<$count-$k;$i++){
 //                if($overData[$i]['score']<$overData[$i+1]['score']){//相邻比较
 //                    $tem=$overData[$i];
 //                    $overData[$i]=$overData[$i+1];
 //                    $overData[$i+1]=$tem;
 //                }
 //            }
 //        }

	// 	$this->sendRoomMessage(GR_GAMEOVER,$overData);
	// 	GameManager::getInstance()->gameover($this->m_roomPwd);
	// 	GameManager::getInstance()->deleteRoom($this->m_roomPwd);
	// }



}