<?php

// /**
// /*斗地主算法
// /*
// /*/


// //牌类型
define("TP_INVALID",        0);//非法牌型
define("TP_DAN",            1);//单
define("TP_DUI",            2);//对子
define("TP_3TIAO",          3);//三条
define("TP_BOMB",           4);//炸弹
define("TP_KINGBOMB",       5);//王炸


define("LOGIC_MASK_COLOR", 0xF0);
define("LOGIC_MASK_VALUE", 0x0F);

class GameLogic
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


    private static $m_cardOne=array(    //有正点牌
        //第一副
        0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,   //黑 A - K
        0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,   //红 A - K
        0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,   //梅 A - K
        0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,   //方 A - K
        0x40,0x41,0x42,                                                     //0小王 1大王 2正点
        //第二副
        0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,   //黑 A - K
        0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,   //红 A - K
        0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,   //梅 A - K
        0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,   //方 A - K
        0x40,0x41,0x42,                                                     //0小王 1大王 2正点
        //第三副
        0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,   //黑 A - K
        0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,   //红 A - K
        0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,   //梅 A - K
        0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,   //方 A - K
        0x40,0x41,0x42,                                                     //0小王 1大王 2正点
        //第四副
        0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,   //黑 A - K
        0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,   //红 A - K
        0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,   //梅 A - K
        0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,   //方 A - K
        0x40,0x41,0x42,                                                     //0小王 1大王 2正点
    );

    private static $m_cardTwo=array(    //无正点牌
        //第一副
        0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,   //黑 A - K
        0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,   //红 A - K
        0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,   //梅 A - K
        0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,   //方 A - K
        0x40,0x41,                                                          //0小王 1大王
        //第二副
        0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,   //黑 A - K
        0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,   //红 A - K
        0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,   //梅 A - K
        0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,   //方 A - K
        0x40,0x41,                                                          //0小王 1大王
        //第三副
        0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,   //黑 A - K
        0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,   //红 A - K
        0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,   //梅 A - K
        0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,   //方 A - K
        0x40,0x41,                                                          //0小王 1大王
        //第四副
        0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,   //黑 A - K
        0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,   //红 A - K
        0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,   //梅 A - K
        0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,   //方 A - K
        0x40,0x41,                                                          //0小王 1大王
    );

    //获取数值
    public function getCardValue($cardData) { return $cardData&LOGIC_MASK_VALUE; } //十六进制前面四位表示牌的数值
    //获取花色
    public function getCardColor($cardData) { return ($cardData&LOGIC_MASK_COLOR)>>4; } //十六进制后面四位表示牌的花色 

    //------------------------------------------------------------------------------------------------------------------
    //创建一副牌
    public function createCards($rule,$outCardsRecord,$list,$playground){

        if ($rule['squarecards'] == 1) {
            if ($rule['shuffleCardsWay'] == 2 && count($outCardsRecord) == count(self::$m_cardOne)) {
                $cardClone = $outCardsRecord;
            }else{
                $cardClone = self::$m_cardOne;
                srand ((float)microtime()*1000000*(GameManager::$_workerId+1));
                shuffle($cardClone);
            }
        }else if ($rule['squarecards'] == 0){
            if ($rule['shuffleCardsWay'] == 2 && count($outCardsRecord) == count(self::$m_cardTwo)) {
                $cardClone = $outCardsRecord;
            }else{
                $cardClone = self::$m_cardTwo;
                srand ((float)microtime()*1000000*(GameManager::$_workerId+1));
                shuffle($cardClone);
            }
        }
        
        foreach ($list as $key => $value) {
            $playerCardsList[$key] = array();
        }
        foreach ($list as $key => $value) {
            if ($list[$key][$playground - 1]) {
                $playerCardsList = $this->createBigLine($cardClone,$playerCardsList,$key);
            }
        }

        for ($i=1; $i <= $rule['peoplecount']; $i++) { 
            $cnt = count($playerCardsList[$i]);
            $cardsArr = array_splice($cardClone, 0,(54 + $rule['squarecards'] - $cnt));
            $playerCardsList[$i] = array_merge($playerCardsList[$i],$cardsArr);
            $playerCardsList[$i] = $this->arrangementCards($playerCardsList[$i]);
        }   
        
        return $playerCardsList;
    }
    public function createBigLine(&$cardClone,$playerCardsList,$key)
    {
        srand ((float)microtime()*1000000*(GameManager::$_workerId+1));
        $line = rand(7,9);
        $cardValue = rand(3,15);
        $clone = $cardClone;
        $cards = array();
        foreach ($clone as $k => $card) {
            $value = $this->getCardValue($card);
            if ($value == $cardValue) {
                $cards[] = $card;
                unset($clone[$k]);
            }
        }
        if (count($cards) != 16) {
            return $this->createBigLine($cardClone,$playerCardsList,$key);
        }
        $bigLine = array_splice($cards, 0,$line);
        $playerCardsList[$key] = array_merge($playerCardsList[$key],$bigLine);
        $cnt = count($playerCardsList);
        for ($i=1; $i <= $cnt; $i++) { 
            if($i == $key){
                continue;
            }else{
                if ($i == $cnt || ($key == $cnt && $i == $cnt - 1)) {
                    $lastLine = count($cards);
                }else{
                    $lastLine = rand(0,count($cards));
                }
                $lastCards = array_splice($cards, 0,$lastLine);
                $playerCardsList[$i] = array_merge($playerCardsList[$i],$lastCards);
            }
        }

        $cardClone = array_values($clone);
        return $playerCardsList;
    }
    //整理牌
    public function arrangementCards($cardsList)
    {   
        $cleanCardsList = array();
        $wangCards = array();
        //正点 大小王排在最前面
        for ($i=0; $i < 3; $i++) { 
            $wangCards[] = array();
        }
        for ($i=3; $i <= 15; $i++) { 
            $cleanCardsList[$i] = array();
        }

        foreach ($cardsList as $key => $value) {
            $cardsValue = $this->getCardValue($value);
            if ($value >= 3) {
                $cleanCardsList[$cardsValue][] = $value;
                asort($cleanCardsList[$cardsValue]);
            }else if($value < 3 && $value >= 0){
                $wangCards[$cardsValue][] = $value;
            }   
        }
        $arrangementCards = array();
        foreach ($wangCards as $key => $value) {
            if ($value > 0) {
                foreach ($wangCards[$key] as $count => $card) {
                    $arrangementCards[] = $card;
                }
            }
        }
        foreach ($cleanCardsList as $key => $value) {
            if ($value > 0) {
                foreach ($cleanCardsList[$key] as $count => $card) {
                    $arrangementCards[] = $card;
                }
            }
        }
        return $arrangementCards;
    }
    //冒泡
     public function sortCards(&$cardsList=array()){
        $this->initIndex($cardsList);

        $count = sizeof($cardsList);
          for($k=1;$k<$count;$k++){
            for($i=0;$i<$count-$k;$i++){

                $cardColor = $this->getCardColor($cardsList[$i]);
                $cardNextColor = $this->getCardColor($cardsList[$i+1]);
                $cardValue = $this->getCardValue($cardsList[$i]);
                $cardNextValue = $this->getCardValue($cardsList[$i+1]);

                if($cardColor == 4 ||$cardNextColor == 4){
                    if($cardColor == $cardNextColor){
                        if($cardValue<$cardNextValue){//相邻比较
                            $tem=$cardsList[$i];
                            $cardsList[$i]=$cardsList[$i+1];
                            $cardsList[$i+1]=$tem;
                        }
                    }else{
                        if($cardNextColor == 4){
                            $tem=$cardsList[$i];
                            $cardsList[$i]=$cardsList[$i+1];
                            $cardsList[$i+1]=$tem;
                        }
                    }
                }else{
                    if($cardValue<$cardNextValue){//相邻比较
                        $tem=$cardsList[$i];
                        $cardsList[$i]=$cardsList[$i+1];
                        $cardsList[$i+1]=$tem;
                    }else if($cardValue == $cardNextValue){
                       
                        if($cardColor > $cardNextColor){
                            $tem=$cardsList[$i];
                            $cardsList[$i]=$cardsList[$i+1];
                            $cardsList[$i+1]=$tem;
                        }
                    }
                }
            }
        }
    }

    //递增排序
    public function sortCardsASC(&$cardsList=array()){
        $this->initIndex($cardsList);

        $count = sizeof($cardsList);
          for($k=1;$k<$count;$k++){
            for($i=0;$i<$count-$k;$i++){

                $cardColor = $this->getCardColor($cardsList[$i]);
                $cardNextColor = $this->getCardColor($cardsList[$i+1]);
                $cardValue = $this->getCardValue($cardsList[$i]);
                $cardNextValue = $this->getCardValue($cardsList[$i+1]);


                if($cardColor == 4 ||$cardNextColor == 4){
                    if($cardColor == $cardNextColor){
                        if($cardValue>$cardNextValue){//相邻比较
                            $tem=$cardsList[$i];
                            $cardsList[$i]=$cardsList[$i+1];
                            $cardsList[$i+1]=$tem;
                        }
                    }else{
                        if($cardColor == 4){
                            $tem=$cardsList[$i];
                            $cardsList[$i]=$cardsList[$i+1];
                            $cardsList[$i+1]=$tem;
                        }
                    }
                }else{
                    if($cardValue>$cardNextValue){//相邻比较
                        $tem=$cardsList[$i];
                        $cardsList[$i]=$cardsList[$i+1];
                        $cardsList[$i+1]=$tem;
                    }else if($cardValue == $cardNextValue){
                       
                        if($cardColor < $cardNextColor){
                            $tem=$cardsList[$i];
                            $cardsList[$i]=$cardsList[$i+1];
                            $cardsList[$i+1]=$tem;
                        }
                    }
                }
            }
        }
    }

    //递增排序
    public function sortValueASC(&$cardsList=array()){
        $this->initIndex($cardsList);

        $count = sizeof($cardsList);
          for($k=1;$k<$count;$k++){
            for($i=0;$i<$count-$k;$i++){

                $cardValue = $cardsList[$i];
                $cardNextValue = $cardsList[$i+1];

                if(($cardValue==1||$cardValue==2)&&($cardNextValue==1||$cardNextValue==2)){
                    if($cardValue>$cardNextValue){//相邻比较
                        $tem=$cardsList[$i];
                        $cardsList[$i]=$cardsList[$i+1];
                        $cardsList[$i+1]=$tem;
                    }
                }else if(($cardValue==1||$cardValue==2) && $cardNextValue>2){
                    $tem=$cardsList[$i];
                    $cardsList[$i]=$cardsList[$i+1];
                    $cardsList[$i+1]=$tem;
                }else if(($cardNextValue==1||$cardNextValue==2) && $cardValue>2){
                    //
                }else{
                    if($cardValue>$cardNextValue){//相邻比较
                        $tem=$cardsList[$i];
                        $cardsList[$i]=$cardsList[$i+1];
                        $cardsList[$i+1]=$tem;
                    }
                }
            }
        }
    }

    //重建索引
    public function initIndex(&$cardsList=array()){
        $cardNewList = array();
        foreach ($cardsList as $key => $value) {
            $cardNewList[] = $value;
        }
        $cardsList = $cardNewList;
    }



    //==============================================================

    //被动情况下，取一副大于该牌型的牌
    public function getCardsListGt($cardsList,$preCardsList,&$resCardsList=array()){
        if(is_array($cardsList)&&is_array($preCardsList) && sizeof($preCardsList) > 0 && sizeof($cardsList) > 0){
            $cardType = $this->getCardsType($preCardsList);
            $this->sortCardsASC($cardsList);
            $this->sortCardsASC($preCardsList);
             switch ($cardType) {
                case TP_DAN:        return $this->getDan($cardsList,$preCardsList,$resCardsList);
                case TP_DUI:        return $this->getDuizi($cardsList,$preCardsList,$resCardsList);
                case TP_3TIAO:      return $this->get3Tiao($cardsList,$preCardsList,$resCardsList);
                case TP_BOMB:       return $this->getBomb($cardsList,$preCardsList,$resCardsList);
                case TP_KINGBOMB:   return $this->getBomb($cardsList,$preCardsList,$resCardsList);
                default:            return false;
            }
        }else{
            return false;
        }
        return true;
    }

    //主动出牌的情况下，取出一副默认的出牌数据
    public function getCardsListBySelfOutCards($cardsList,&$resCardsList=array()){
        if(sizeof($cardsList)>0){
            $this->sortCardsASC($cardsList);
            $cleanCardsList = $this->cleanUpCardsList($cardsList);
            krsort($cleanCardsList);
            $smallCardsValue = key($cleanCardsList);
            $resCards = array();
            foreach ($cardsList as $key => $card) {
                $cardValue = $this->getCardValue($card);
                if ($cardValue == $smallCardsValue) {
                    $resCards[] = $card;
                }
            }
            $resCardsList[] = $resCards;
        }else{
            return false;
        }

    }

    //主动出牌 推荐所有牌型
    public function getAllCardsList($cards)
    {
        $cardsList = $this->cleanUpCardsList($cards);
        $recommend = array();
        $wangCardsCount = 0;
        $i = 0;
        $wangCards = array();
        $wangList = array();
        foreach ($cardsList as $value => $count) {
            if ($value <= 2) {
                $wangCardsCount += $count;
            }
            foreach ($cards as $key => $v) {
                $cardsValue = $this->getCardValue($v);
                if ($cardsValue == $value) {
                    if ($value >= 3) {
                        $recommend[$i][] = $v;
                    }else if($value <= 2){
                        $wangCards[] = $v;
                        $wangList[$cardsValue][] = $v;
                    }
                }
            }
            $i++;
        }
        if ($wangCardsCount < 4) {
            for ($j=0; $j <= 2; $j++) { 
                if (isset($wangList[$j])) {
                    $recommend[$i + $j] = $wangList[$j];
                }
            }
        }else{
            $recommend[$i] = $wangCards;
        }
        $recommend = array_values($recommend);
        $cnt = count($recommend);
        for ($i = 0; $i < $cnt - 1; $i++) {
            for ($j = 0; $j < $cnt - $i - 1; $j++) {
                $res = GameLogic::getInstance()->compareCards($recommend[$j],$recommend[$j + 1]);
                $cardType1 = $this->getCardsType($recommend[$j]);
                $cardType2 = $this->getCardsType($recommend[$j + 1]);
                if ($res == 1 || ($res == -2 && $cardType1 > $cardType2)) {
                    $temp = $recommend[$j];
                    $recommend[$j] = $recommend[$j + 1];
                    $recommend[$j + 1] = $temp;
                }
            }
        }
        return $recommend;
    }

    //比较两幅牌型的大小
    //return 1/0/-1/-2 大于/等于/小于/无法比较
    public function compareCards($cards1,$cards2){
        $this->sortCardsASC($cards1);
        $this->sortCardsASC($cards2);
        $cardsType1 = $this->getCardsType($cards1);
        $cardsType2 = $this->getCardsType($cards2);
        if($cardsType1 == TP_INVALID || $cardsType2 == TP_INVALID)return -2;

        if($cardsType1 < TP_BOMB && $cardsType2 < TP_BOMB){
            if($cardsType1 != $cardsType2){
                return -2;
            }else{
                //===================同类型牌型进行比较============================
                switch ($cardsType1) {
                    case TP_DAN:
                    {
                        $val1 = $this->getCardValue($cards1[0]);
                        $val2 = $this->getCardValue($cards2[0]);
                        if ($val1 <= 2 || $val2 <= 2) {
                            if ($val1 <= 2 && $val2 > 2) {
                                return 1;
                            }else if ($val1 > 2 && $val2 <= 2) {
                                return -1;
                            }else if ($val1 <= 2 && $val2 <= 2){
                                if($val1 > $val2){
                                    return 1;
                                }else if($val1 < $val2){
                                    return -1;
                                }else{
                                    return 0;
                                }
                            }
                        }else{
                            if($val1 > $val2){
                                return 1;
                            }else if($val1 < $val2){
                                return -1;
                            }else{
                                return 0;
                            }
                        }
                        
                    }break;
                    case TP_DUI:
                    case TP_3TIAO:
                    {
                        $val1 = $this->getCardValue($cards1[0]);
                        $val2 = $this->getCardValue($cards2[0]);
                        if ($val1 <= 2 || $val2 <= 2) {
                            if ($val1 <= 2 && $val2 > 2) {
                                return 1;
                            }else if ($val1 > 2 && $val2 <= 2) {
                                return -1;
                            }else if ($val1 <= 2 && $val2 <= 2){
                                for ($i=0; $i < count($cards1); $i++) { 
                                    if ($cards1[$i] > $cards2[$i]) {
                                        return 1;
                                    }else if($cards1[$i] < $cards2[$i]){
                                        return -1;
                                    }else{

                                    }
                                }
                                return 0;
                            }
                        }else{
                            if($val1 > $val2){
                                return 1;
                            }else if($val1 < $val2){
                                return -1;
                            }else{
                                return 0;
                            }
                        }
                    }break;

                    default:return -2;break;
                }
                return -2;
                //===============================================
            }

        }else if($cardsType1 == TP_KINGBOMB || $cardsType1 == TP_KINGBOMB || $cardsType1 == TP_BOMB || $cardsType2 == TP_BOMB){

            if(($cardsType1 == TP_BOMB || $cardsType1 == TP_KINGBOMB) && ($cardsType2 == TP_BOMB || $cardsType2 == TP_KINGBOMB)){
                $lineCount1 = $this->getBombLine($cards1);
                $lineCount2 = $this->getBombLine($cards2);
                if($lineCount1 > $lineCount2){
                    return 1;
                }else if($lineCount1 < $lineCount2){
                    return -1;
                }else{
                    if($cardsType1 > $cardsType2){
                        return 1;
                    }else if($cardsType1 < $cardsType2){
                        return -1;
                    }else{
                        if ($cardsType2 == TP_KINGBOMB && $cardsType2 == TP_KINGBOMB) {
                            if ($lineCount1 % count($cards1) == 0) {
                                $chunBomb1 = true;
                            }else{
                                $chunBomb1 = false;
                            }
                            if ($lineCount2 % count($cards2) == 0) {
                                $chunBomb2 = true;
                            }else{
                                $chunBomb2 = false;
                            }
                            if ($chunBomb1 && !$chunBomb2) {
                                return 1;
                            }else if (!$chunBomb1 && $chunBomb2) {
                                return -1;
                            }else if ($chunBomb1 && $chunBomb2) {
                                $zheng1 = 0;
                                $da1 = 0;
                                $xiao1 = 0;
                                $zheng2 = 0;
                                $da2 = 0;
                                $xiao2 = 0;
                                foreach ($cards1 as $key => $value) {
                                    switch ($cards1[$key]) {
                                        case 0x40:
                                            $xiao1++;
                                            break;
                                        case 0x41:
                                            $da1++;
                                            break;
                                        case 0x42:
                                            $zheng1++;
                                            break;
                                        default:
                                            # code...
                                            break;
                                    }
                                    switch ($cards2[$key]) {
                                        case 0x40:
                                            $xiao2++;
                                            break;
                                        case 0x41:
                                            $da2++;
                                            break;
                                        case 0x42:
                                            $zheng2++;
                                            break;
                                        default:
                                            # code...
                                            break;
                                    }
                                }
                                if ($zheng1 >= 4 && $zheng2 < 4) {
                                    return 1;
                                }else if($zheng1 < 4 && $zheng2 >= 4) {
                                    return -1;
                                }else{
                                    if ($da1 >= 4 && $da2 < 4) {
                                        return 1;
                                    }else if($da1 < 4 && $da2 >= 4) {
                                        return -1;
                                    }else{
                                        if ($xiao1 >= 4 && $xiao2 < 4) {
                                            return 1;
                                        }else if($xiao1 < 4 && $xiao2 >= 4) {
                                            return -1;
                                        }else{
                                            $cards1 = array_reverse($cards1);
                                            $cards2 = array_reverse($cards2);
                                            for ($i=0; $i < count($cards1); $i++) { 
                                                if ($cards1[$i] > $cards2[$i]) {
                                                    return 1;
                                                }else if($cards1[$i] < $cards2[$i]){
                                                    return -1;
                                                }else{

                                                }
                                            }
                                            return 0;
                                        }
                                    }
                                }
                            }else{
                                $cards1 = array_reverse($cards1);
                                $cards2 = array_reverse($cards2);
                                for ($i=0; $i < count($cards1); $i++) { 
                                    if ($cards1[$i] > $cards2[$i]) {
                                        return 1;
                                    }else if($cards1[$i] < $cards2[$i]){
                                        return -1;
                                    }else{

                                    }
                                }
                                return 0;
                            }
                        }else if($cardsType2 == TP_BOMB && $cardsType2 == TP_BOMB){
                            $val1 = $this->getCardValue($cards1[0]);
                            $val2 = $this->getCardValue($cards2[0]);
                            if($val1 > $val2){
                                return 1;
                            }else if($val1 < $val2){
                                return -1;
                            }else{
                                return 0;
                            }
                        }
                    }
                }
            }else if($cardsType1 == TP_BOMB || $cardsType1 == TP_KINGBOMB){
                return 1;
            }else if($cardsType2 == TP_BOMB || $cardsType2 == TP_KINGBOMB){
                return -1;
            }else{
                return -2;
            }

        }else{
            return -2;
        }
    }
    //识别炸弹的线值
    public function getBombLine($cardsList)
    {
        $cardType = $this->getCardsType($cardsList);
        $lineCount = count($cardsList);
        if ($cardType == TP_BOMB) {
            return $lineCount;
        }else if ($cardType == TP_KINGBOMB) {
            $spaceCards = 0;
            $daCards = 0;
            $xiaoCards = 0;
            foreach ($cardsList as $key => $value) {
                $cards = $this->getCardValue($value);
                switch ($cards) {
                    case 0:
                        $xiaoCards++;
                        break;
                    case 1:
                        $daCards++;
                        break;
                    case 2:
                        $spaceCards++;
                        break;
                    default:
                        # code...
                        break;
                }
            }
            if ($spaceCards >= 4 || $daCards >= 4 || $xiaoCards >= 4) {
                return $lineCount * 2;
            }else{
                return $lineCount + 3;
            }
        }
        return $lineCount;
    }
    //识别一副牌的牌型
    public function getCardsType($cardsList){
        if(!is_array($cardsList))return TP_INVALID;
        switch (sizeof($cardsList)) {
            case 1:{
                    return TP_DAN;
                    }break;
            case 2:{
                    if($this->isDuizi($cardsList))return TP_DUI;
                    }break;
            case 3:{
                    if($this->is3Tiao($cardsList))return TP_3TIAO;
                    }break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                    {
                    if($this->isKingBomb($cardsList))return TP_KINGBOMB;
                    if($this->isBomb($cardsList))return TP_BOMB;
                    }break;
            case 13:
            case 14:
            case 15:
            case 16:
                    {
                    if($this->isBomb($cardsList))return TP_BOMB;
                    }break; 
            default:return TP_INVALID;break;
        }
        return TP_INVALID;
    }
    //判断有无拆牌
    public function AnalysisSplitCards($cards,$cardsList)
    {
        $this->sortCardsASC($cards);
        $cardsValue = $this->getCardValue($cards[0]);
        $outcardsCount = count($cards);
        if ($cardsValue > 2) {
            $count = 0;
            foreach ($cardsList as $key => $value) {
                $handcardValue = $this->getCardValue($value);
                if ($handcardValue == $cardsValue) {
                    $count++;
                }
                if ($count > $outcardsCount) {
                    return false;
                }
            }
        }else if($cardsValue <= 2){
            $count = 0;
            $spaceCards = 0;
            $daCards = 0;
            $xiaoCards = 0;
            foreach ($cardsList as $key => $value) {
                $handcardValue = $this->getCardValue($value);
                if ($handcardValue <= 2) {
                    $count++;
                }
                if ($handcardValue == 2) {
                    $spaceCards++;
                }else if ($handcardValue == 1) {
                    $daCards++;
                }else if ($handcardValue == 0) {
                    $xiaoCards++;
                }
            }
            if ($count >= 4) {
                if ($count > $outcardsCount) {
                    return false;
                }
            }else{
                switch ($cardsValue) {
                    case 0:
                        if ($xiaoCards >= $outcardsCount) {
                            return false;
                        }
                        break;
                    case 1:
                        if ($daCards >= $outcardsCount) {
                            return false;
                        }
                        break;
                    case 2:
                        if ($spaceCards >= $outcardsCount) {
                            return false;
                        }
                        break;
                    default:
                        # code...
                        break;
                }
            }
        }
        return true;
    }
    //找到牌里还有多少分
    public function findSurplusScore($cardsList)
    {
        $score = 0;
        foreach ($cardsList as $key => $value) {
            $cardsValue = $this->getCardValue($value);
            if ($cardsValue == 5) {
                $score += 5;
            }else if($cardsValue == 10 || $cardsValue == 13){
                $score += 10;
            }
        }
        return $score;
    }
//=================================================================


//是否单
private function isDan($cardsList){
    if (sizeof($cardsList) == 1) {
        return true;
    }else{
        return false;
    }
}

//是否对子
private function isDuizi($cardsList){
    if(sizeof($cardsList) == 2){
        $this->initIndex($cardsList);
        $cardValue = $this->getCardValue($cardsList[0]);
        $cardNextValue = $this->getCardValue($cardsList[1]);
        if($cardValue == $cardNextValue){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }

}

//是否3条
private function is3Tiao($cardsList){
     if(sizeof($cardsList) == 3){
        $this->initIndex($cardsList);
        $cardValue = $this->getCardValue($cardsList[0]);
        $cardNextValue = $this->getCardValue($cardsList[1]);
        $cardNextNextValue = $this->getCardValue($cardsList[2]);
        if($cardValue == $cardNextValue && $cardNextValue==$cardNextNextValue){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}


//是否炸弹
private function isBomb($cardsList){
    if(sizeof($cardsList) >= 4){
        $isBomb = true;
        $bombValue = $this->getCardValue($cardsList[0]);
        foreach ($cardsList as $key => $value) {
            $nextCardsValue = $this->getCardValue($value);
            if ($nextCardsValue != $bombValue) {
                $isBomb = false;
            }
        }
        return $isBomb;
    }else{
        return false;
    }
}

//是否王炸
private function isKingBomb($cardsList){
    if(sizeof($cardsList) >= 4){
        $isKingBomb = true;
        foreach ($cardsList as $key => $value) {
            $cardsValue = $this->getCardValue($value);
            if ($cardsValue < 0 || $cardsValue > 2) {
                $isKingBomb = false;
            }
        }
        return $isKingBomb;
    }else{
        return false;
    }
}


//-----------------------------
//取牌

//整理手牌
public function cleanUpCardsList($cardsList)
{
    $cleanCardsList = array();
    foreach ($cardsList as $card => $value) {
        $cardsValue = $this->getCardValue($value);
        $cleanCardsList[$cardsValue] = isset($cleanCardsList[$cardsValue])?$cleanCardsList[$cardsValue]+1:1;
    }
    return $cleanCardsList;
}
//取单牌
public function getDan($cardsList,$preOutCards,&$resultData){
    $resultData = array();
    if(sizeof($preOutCards) == 1 && sizeof($cardsList) >= sizeof($preOutCards)){
        $preCardColor = $this->getCardColor($preOutCards[0]);
        $preCardValue = $this->getCardValue($preOutCards[0]);
        $cleanCardsList = $this->cleanUpCardsList($cardsList);
        $temp1 = array();
        $temp = array();
        $wangCardsCount = 0;
        $wangCards = array();
        if($preCardColor < 4){
            $cleanCardsList = $this->cleanUpCardsList($cardsList);
            foreach ($cleanCardsList as $value => $count) {
                if ($count == 1 && $value > $preCardValue) {
                    $temp1[] = $value;
                }
                if ($value <= 2) {
                    $wangCardsCount += $count;
                }
                if ($value <= 2 && $count == 1) {
                    foreach ($cardsList as $num => $card) {
                        $cardValue = $this->getCardValue($card);
                        if ($cardValue == $value) {
                            $wangCards[] = array($card);
                        }
                    }
                }
            }
            if ($wangCardsCount < 4) {
                $temp = $wangCards;
            }
        }else{
            foreach ($cleanCardsList as $value => $count) {
                if ($value <= 2) {
                    $wangCardsCount += $count;
                }
                if ($value <= 2 && $value > $preCardValue && $count == 1) {
                    foreach ($cardsList as $num => $card) {
                        $cardValue = $this->getCardValue($card);
                        if ($cardValue == $value) {
                            $wangCards[] = array($card);
                        }
                    }
                }
            }
            if ($wangCardsCount < 4) {
                $temp = $wangCards;
            }
        }
        
        foreach ($temp1 as $key => $value) {
            foreach ($cardsList as $num => $card) {
                $cardValue = $this->getCardValue($card);
                if ($cardValue == $value) {
                    $temp[] = array($card);
                }
            }
        }
        $resultData = $temp;
    }
    $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}

//取对子
public function getDuizi($cardsList,$preOutCards=array(),&$resultData){
    $resultData = array();
    if(sizeof($preOutCards) == 2 && sizeof($cardsList) >= sizeof($preOutCards)){
        $preCardColor = $this->getCardColor($preOutCards[0]);
        $preCardValue = $this->getCardValue($preOutCards[0]);
        $cleanCardsList = $this->cleanUpCardsList($cardsList);
        $temp1 = array();
        $temp = array();
        $wangCardsCount = 0;
        $wangCards = array();
        $i = 0;
        if($preCardColor < 4){
            $cleanCardsList = $this->cleanUpCardsList($cardsList);
            foreach ($cleanCardsList as $value => $count) {
                if ($count == 2 && $value > $preCardValue) {
                    $temp1[] = $value;
                }
                if ($value <= 2) {
                    $wangCardsCount += $count;
                }
                if ($value <= 2 && $count == 2) {
                    foreach ($cardsList as $num => $card) {
                        $cardValue = $this->getCardValue($card);
                        if ($cardValue == $value && !in_array($card, $wangCards)) {
                            $wangCards[] = $card;
                        }
                    }
                }
            }
            if ($wangCardsCount < 4) {
                foreach ($wangCards as $key => $value) {
                    $temp[$i] = array($wangCards[$key],$wangCards[$key]);
                    $i++;
                }       
            }
        }else{
            foreach ($cleanCardsList as $value => $count) {
                if ($value <= 2) {
                    $wangCardsCount += $count;
                }
                if ($value <= 2 && $value > $preCardValue && $count == 2) {
                    foreach ($cardsList as $num => $card) {
                        $cardValue = $this->getCardValue($card);
                        if ($cardValue == $value && !in_array($card, $wangCards)) {
                            $wangCards[] = $card;
                        }
                    }
                }
            }
            if ($wangCardsCount < 4) {
                foreach ($wangCards as $key => $value) {
                    $temp[$i] = array($wangCards[$key],$wangCards[$key]);
                    $i++;
                }       
            }
        }
        
        
        foreach ($temp1 as $key => $value) {
            foreach ($cardsList as $num => $card) {
                $cardValue = $this->getCardValue($card);
                if ($cardValue == $value) {
                    $temp[$i][] = $card;
                }
            }
            $i++;
        }
        $resultData = $temp;
    }
    $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}


//取3条
public function get3Tiao($cardsList,$preOutCards=array(),&$resultData){
    $resultData = array();
    if(sizeof($preOutCards) == 3 && sizeof($cardsList) >= sizeof($preOutCards)){
        $preCardColor = $this->getCardColor($preOutCards[0]);
        $preCardValue = $this->getCardValue($preOutCards[0]);
        $cleanCardsList = $this->cleanUpCardsList($cardsList);
        $temp1 = array();
        $temp = array();
        $wangCardsCount = 0;
        $wangCards = array();
        $i = 0;
        if($preCardColor < 4){
            $cleanCardsList = $this->cleanUpCardsList($cardsList);
            foreach ($cleanCardsList as $value => $count) {
                if ($count == 3 && $value > $preCardValue) {
                    $temp1[] = $value;
                }
                if ($value <= 2) {
                    $wangCardsCount += $count;
                }
                if ($value <= 2 && $count == 3) {
                    foreach ($cardsList as $num => $card) {
                        $cardValue = $this->getCardValue($card);
                        if ($cardValue == $value && !in_array($card, $wangCards)) {
                            $wangCards[] = $card;
                        }
                    }
                }
            }
            if ($wangCardsCount < 4) {
                foreach ($wangCards as $key => $value) {
                    $temp[$i] = array($wangCards[$key],$wangCards[$key],$wangCards[$key]);
                    $i++;
                }       
            }
        }else{
            foreach ($cleanCardsList as $value => $count) {
                if ($value <= 2) {
                    $wangCardsCount += $count;
                }
                if ($value <= 2 && $value > $preCardValue && $count == 3) {
                    foreach ($cardsList as $num => $card) {
                        $cardValue = $this->getCardValue($card);
                        if ($cardValue == $value && !in_array($card, $wangCards)) {
                            $wangCards[] = $card;
                        }
                    }
                }
            }
            if ($wangCardsCount < 4) {
                foreach ($wangCards as $key => $value) {
                    $temp[$i] = array($wangCards[$key],$wangCards[$key],$wangCards[$key]);
                    $i++;
                }       
            }
        }
        
        foreach ($temp1 as $key => $value) {
            foreach ($cardsList as $num => $card) {
                $cardValue = $this->getCardValue($card);
                if ($cardValue == $value) {
                    $temp[$i][] = $card;
                }
            }
            $i++;
        }
        $resultData = $temp;
    }
    $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}


//取炸弹
public function getBomb($cardsList,$preOutCards=array(),&$resultData){
    $resultData = array();
    // if(sizeof($preOutCards) == 1 && sizeof($cardsList) >= sizeof($preOutCards)){
        $preCardColor = $this->getCardColor($preOutCards[0]);
        $preCardValue = $this->getCardValue($preOutCards[0]);
        $cleanCardsList = $this->cleanUpCardsList($cardsList);
        $temp1 = array();
        $wangCardsCount = 0;
        $wangCards = array();
        $temp = array();
        $i = 0;
        foreach ($cleanCardsList as $value => $count) {
            if ($count >= 4) {
                $temp1[] = $value;
            }
            if ($value <= 2) {
                $wangCardsCount += $count;
                foreach ($cardsList as $num => $card) {
                    $cardValue = $this->getCardValue($card);
                    if ($cardValue == $value) {
                        $wangCards[] = $card;
                    }
                }
            }
        }
        if ($wangCardsCount >= 4) {
            $res = $this->compareCards($wangCards,$preOutCards);
            if ($res == 1) {
                $temp[$i] = $wangCards;
                $i++;
            }
        }
        foreach ($temp1 as $key => $value) {
            foreach ($cardsList as $num => $card) {
                $cardValue = $this->getCardValue($card);
                if ($cardValue == $value) {
                    $temp[$i][] = $card;
                }
            }
            $i++;
        }
        foreach ($temp as $key => $value) {
            $res = $this->compareCards($temp[$key],$preOutCards);
            if ($res != 1) {
                unset($temp[$key]);
            }
        }

        $resultData = array_values($temp);
    // }
    return (sizeof($resultData)>0)?true:false;
}


public function isHaveBomb($cardsList,&$resultData){

    $cleanCardsList = $this->cleanUpCardsList($cardsList);
    $resTag = false;
    $wangCardsCount = 0;
    $wangCards = array();
    foreach ($cleanCardsList as $cardValue => $count) {
        if($count >= 4 && $cardValue > 2){
            $resTag = true;
            $temp = array();
            foreach ($cardsList as $num => $card) {
                $value = $this->getCardValue($card);
                if ($cardValue == $value) {
                    $temp[] = $card;
                }
            }
            $resultData[] = $temp;
        }
        if ($cardValue <= 2) {
            $wangCardsCount += $count;
            foreach ($cardsList as $num => $card) {
                $value = $this->getCardValue($card);
                if ($cardValue == $value) {
                    $wangCards[] = $card;
                }
            }
        }
    }
    if ($wangCardsCount >= 4) {
        $resTag = true;
        $resultData[] = $wangCards;
    }
    return  $resTag;

}



}
