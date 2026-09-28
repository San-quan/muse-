<?php

/**
/*十三水算法
/*
/*/
require_once __DIR__ . '/GameManager.php';

//牌类型
define("TP_INVALID",        0);//错误
define("TP_WULONG",         1);//乌龙
define("TP_DUIZI_OME",      2);//1对
define("TP_DUIZI_TWO",      3);//2对
define("TP_THREE_TIAO",     4);//3条
define("TP_ORDER",          5);//顺子
define("TP_SAME_COLOR",     6);//同花
define("TP_HULU",           7);//葫芦
define("TP_BOMB",           8);//铁支
define("TP_SAME_COLOR_ORDER", 9);//同花顺
define("TP_5SAME",           10);//五同


define("TP_S_NONE",                   20);//非特殊
define("TP_S_THREE_ORDER",            21);//三顺子
define("TP_S_THREE_SAME_COLOR",       22);//三同花
define("TP_S_DUIZI_6",                23);//6对子
// define("TP_S_DUIZI_5_3",              24);//5对+3条
// define("TP_S_FOUR_GROUP_THREE",       25);//4套3条
// define("TP_S_CHOU_ONE_COLOR",         26);//凑一色
// define("TP_S_ALL_SMALL",              27);//全小
// define("TP_S_ALL_BIG",                28);//全大
// define("TP_S_THREE_UNDER_SKY",        29);//3分天下
// define("TP_S_THREE_SAME_COLOR_ORDER", 30);//3同花顺
// define("TP_S_12_KING_FAMILY",         31);//12皇族
define("TP_S_ONE_LONG",               32);//一条龙
// define("TP_S_ONE_COLOR",              33);//一条花
// define("TP_S_DOUBLE_TONG",            34);//双五同
define("TP_S_MAX_LONG",               35);//至尊青龙


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


    private static $m_cardOne=array(
        0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,   //黑 A - K
        0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,   //红 A - K
        0x22,0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,   //梅 A - K
        0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E  //方 A - K
    );
    private static $m_cardTwo=array(
        0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,   //黑 A - K
        0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,   //红 A - K
        0x22,0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,   //梅 A - K
        0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E,   //方 A - K
        0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E    //方 A - K
    );

    //获取数值
    public function getCardValue($cardData) { return $cardData&LOGIC_MASK_VALUE; } //十六进制前面四位表示牌的数值
    //获取花色
    public function getCardColor($cardData) { return ($cardData&LOGIC_MASK_COLOR)>>4; } //十六进制后面四位表示牌的花色 

    //------------------------------------------------------------------------------------------------------------------
    //创建一副牌

    public function createCardsByClist($clist,$peopleCount){

        $peopleCount = sizeof($clist);
        $playerCardsList = array();

         //洗牌
        if ($peopleCount == 5) {
            $cardClone = self::$m_cardTwo;
        }else{
            $cardClone = self::$m_cardOne;
        }
        srand ((float)microtime()*1000000*(GameManager::$_workerId+1));
        shuffle($cardClone);

        srand ((float)microtime()*1000000*(GameManager::$_workerId+3));
        shuffle($cardClone);

        foreach ($clist as $key => $value) {
            if($value){
                $playerCardsList[$key] = $this->getOneSpecialList($cardClone);
            }else{
                $playerCardsList[$key] = array();
            }
        }
        // $playerCardsList[0] = array(0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3C,0x3E);
        // $playerCardsList[1] = array(0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E);
        // $playerCardsList[2] = array(0x22,0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E);
        // $playerCardsList[3] = array(0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E);
        // $playerCardsList[4] = array(0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E);
        
        // $playerCardsList[3] = array(0x12,0x26,0x33,0x38,0x3E,0x22,0x08,0x18,0x02,0x13,0x34,0x05,0x06);//同花顺
        // $playerCardsList[1] = array(0x3A,0x3B,0x3C,0x3D,0x3E,0x3A,0x29,0x3D,0x39,0x39,0x3B,0x3C,0x09);//五同
        // $playerCardsList[2] = array(0x38,0x32,0x23,0x2C,0x0A,0x24,0x35,0x32,0x1E,0x37,0x37,0x17,0x07);//炸弹
        // $playerCardsList[0] = array(0x2E,0x14,0x34,0x25,0x15,0x16,0x36,0x2D,0x1D,0x2A,0x04,0x28,0x0E);//特殊
        // $playerCardsList[4] = array(0x03,0x1A,0x1B,0x1C,0x27,0x0B,0x0C,0x33,0x35,0x36,0x0D,0x19,0x2B);//

        $cardIndex = 0;
        foreach ($playerCardsList as $key => $cards) {
            $cardCount = sizeof($cards);
            for ($i=$cardIndex; $i <  $cardIndex + 13-$cardCount; $i++) { 
                $playerCardsList[$key][] = $cardClone[$i];
            }
            $cardIndex += (13-$cardCount);
        }
        for ($i=0; $i<$peopleCount; $i++) { 
            $this->sortCards($playerCardsList[$i]);
        }
        return $playerCardsList;
    }

    public function getOneSpecialList(&$cards){
        srand ((float)microtime()*1000000*(GameManager::$_workerId+1));
        $i = rand(1,3);
        $list = array();
        $newCards = array();
        if($i==1){
            //炸弹
            $y = rand(2,14);
            foreach ($cards as $key => $value) {
                if(($value&0x0F) == $y){
                    unset($cards[$key]);
                    $list[] = $value;
                }
            }
        }else{
            //同花
            $y = rand(1,4);
            $color = 0;
            if($y == 1)$color = 16;
            else if($y == 2)$color = 32;
            else if($y == 3)$color = 48;

            $k = rand(2,10);
            foreach ($cards as $key => $value) {
                if(($value&0xF0) == $color && ($value&0x0F) >= $k && ($value&0x0F) < $k+5){
                    unset($cards[$key]);
                    $list[] = $value;
                }
            }
        }

        foreach ($cards as $key => $value) {
            $newCards[] = $value;
        }
        $cards =  $newCards;
        return $list;
    }

    public function shuffleArray(&$cardList){
        $newList = array();
        for ($i=0; $i < 30; $i++) { 
            $index = rand(0,sizeof($cardList)-1);
            $no = 0;
            foreach ($cardList as $key => $value) {
                if($no == $index){
                    $newList[]=$value;
                    unset($cardList[$key]);
                    break;
                }
                $no++;
            }
        }
        foreach ($cardList as $key => $value) {
            $newList[] = $value;
        }

        $cardList = $newList;
    }

    // public function test(){
    //     for ($i=0; $i < 20; $i++) { 
    //         $cardClone = self::$m_cardOne ;

    //         echo "------------------------\n";
    //         $this->shuffleArray($cardClone);
    //         foreach ($cardClone as $key => $value) {
    //             echo $value;
    //             echo ",";
    //         }
    //         echo "\n------------------------\n";
    //     }
    // }


    //对比两幅特殊牌分数
    public function getSpecialCardsScore($cards1,$cards2){
        for ($i=sizeof($cards1)-1; $i >=0; $i--) { 
            $cardclolor1 = $this->getCardColor($cards1[$i]);
            $cardclolor2 = $this->getCardColor($cards2[$i]);
            if($cardclolor1 < $cardclolor2)return 1;
            else if($cardclolor1 > $cardclolor2)return -1;
        }
        return 0;
    }

//对比两幅牌（3，5）(5,5)
 public function compareCards($cardsListOne=array(),$cardsListTwo=array()){
        //$this->initIndex($cardsListOne);
        //$this->initIndex($cardsListTwo);
        $this->sortCards($cardsListOne);
        $this->sortCards($cardsListTwo);
        $t1 = $this->getNormalCardType($cardsListOne);
        $t2 = $this->getNormalCardType($cardsListTwo);


        if($t1 > $t2)return 1;
        else if($t1<$t2)return -1;
        else{
            switch ($t1) {
                case TP_5SAME:
                case TP_SAME_COLOR_ORDER:{
                    return  $this->compareOneByOne($cardsListOne,$cardsListTwo);
                    break;
                }
                case TP_BOMB:{
                    $cardData1 = $this->checkCardsCount($cardsListOne);
                    $cardData2 = $this->checkCardsCount($cardsListTwo);
                    $card_bomb_1 = 0;
                    $card_bomb_2 = 0;
                    $card_dan_1 = 0;
                    $card_dan_2 = 0;
                    foreach ($cardData1 as $value => $count) {
                        if($count == 4)$card_bomb_1 = $value ;
                        if($count == 1)$card_dan_1 = $value ;
                    }
                    foreach ($cardData2 as $value => $count) {
                        if($count == 4)$card_bomb_2 = $value ;
                        if($count == 1)$card_dan_2 = $value ;
                    }
                    if($card_bomb_1 > $card_bomb_2)return 1;
                    else if($card_bomb_1 < $card_bomb_2)return -1;
                    else{
                        if($card_dan_1 > $card_dan_2)return 1;
                        else if($card_dan_1 < $card_dan_2)return -1;
                        else{
                            return  $this->compareOneByOne($cardsListOne,$cardsListTwo);
                        }
                    }

                    break;
                }
                case TP_HULU:{
                    $cardData1 = $this->checkCardsCount($cardsListOne);
                    $cardData2 = $this->checkCardsCount($cardsListTwo);
                    $card_3t_1 = 0;
                    $card_3t_2 = 0;
                    $card_dui_1 = 0;
                    $card_dui_2 = 0;
                    foreach ($cardData1 as $value => $count) {
                        if($count == 3)$card_3t_1 = $value ;
                        if($count == 2)$card_dui_1 = $value ;
                    }
                    foreach ($cardData2 as $value => $count) {
                        if($count == 3)$card_3t_2 = $value ;
                        if($count == 2)$card_dui_2 = $value ;
                    }
                    if($card_3t_1 > $card_3t_2)return 1;
                    else if($card_3t_1 < $card_3t_2)return -1;
                    else{
                        if($card_dui_1 > $card_dui_2)return 1;
                        else if($card_dui_1 < $card_dui_2)return -1;
                        else{
                            return  $this->compareOneByOne($cardsListOne,$cardsListTwo);
                        }
                    }
                    break;
                }
                case TP_SAME_COLOR:{
                    $type1 = ($this->isDuiziOne($cardsListOne))?1:0;
                    $type1 = ($this->isDuiziTwo($cardsListOne))?2:$type1;
                    $type2 = ($this->isDuiziOne($cardsListTwo))?1:0;
                    $type2 = ($this->isDuiziTwo($cardsListTwo))?2:$type2;
                    if ($type1 > $type2) {
                        return 1;
                    }else if ($type1 < $type2) {
                        return -1;
                    }else if ($type1 == $type2) {
                        if ($type1 == 1) {
                            $cardData1 = $this->checkCardsCount($cardsListOne);
                            $cardData2 = $this->checkCardsCount($cardsListTwo);
                         
                            $card_dui_1 = 0;
                            $card_dui_2 = 0;
                            foreach ($cardData1 as $value => $count) {
                                if($count == 2)$card_dui_1 = $value ;
                            }
                            foreach ($cardData2 as $value => $count) {
                                if($count == 2)$card_dui_2 = $value ;
                            }
                            if($card_dui_1 > $card_dui_2)return 1;
                            else if($card_dui_1 < $card_dui_2)return -1;
                            else{
                                return  $this->compareOneByOne($cardsListOne,$cardsListTwo);
                            }
                        }else if ($type1 == 2){
                            $cardData1 = $this->checkCardsCount($cardsListOne);
                            $cardData2 = $this->checkCardsCount($cardsListTwo);
                         
                            $card_dui_1 = array();
                            $card_dui_2 = array();
                            $card_dan_1 = 0;
                            $card_dan_2 = 0;
                            foreach ($cardData1 as $value => $count) {
                               if($count == 2)$card_dui_1[] =  $value;
                               if($count == 1)$card_dan_1 = $value ;
                            }
                            foreach ($cardData2 as $value => $count) {
                                if($count == 2)$card_dui_2[] =  $value;
                                if($count == 1)$card_dan_2 = $value ;
                            }


                            if(sizeof($card_dui_1)!=2||sizeof($card_dui_2)!=2)return 0;
                            if($card_dui_1[0]<$card_dui_1[1]){
                                $temp = $card_dui_1[0];
                                $card_dui_1[0] = $card_dui_1[1];
                                $card_dui_1[1] = $temp;
                            }
                            if($card_dui_2[0]<$card_dui_2[1]){
                                $temp = $card_dui_2[0];
                                $card_dui_2[0] = $card_dui_2[1];
                                $card_dui_2[1] = $temp;
                            }
                            if($card_dui_1[0]>$card_dui_2[0])return 1;
                            if($card_dui_1[0]<$card_dui_2[0])return -1;
                            else{
                                if($card_dui_1[1]>$card_dui_2[1])return 1;
                                if($card_dui_1[1]<$card_dui_2[1])return -1;
                                else {
                                    if($card_dan_1>$card_dan_2)return 1;
                                    if($card_dan_1<$card_dan_2)return -1;
                                    else {
                                        return $this->compareOneByOne($cardsListOne,$cardsListTwo);
                                    }
                                }
                            }
                        }else{
                            return  $this->compareOneByOne($cardsListOne,$cardsListTwo);
                        } 
                    }
                    break;
                }
                case TP_ORDER:{
                    return  $this->compareOneByOne($cardsListOne,$cardsListTwo);
                    break;
                }
                case TP_THREE_TIAO:{
                    $cardData1 = $this->checkCardsCount($cardsListOne);
                    $cardData2 = $this->checkCardsCount($cardsListTwo);
                    $card_3t_1 = 0;
                    $card_3t_2 = 0;
                    foreach ($cardData1 as $value => $count) {
                        if($count == 3)$card_3t_1 = $value ;
                    }
                    foreach ($cardData2 as $value => $count) {
                        if($count == 3)$card_3t_2 = $value ;
                    }

                    if(sizeof($cardsListOne) == 3 && sizeof($cardsListTwo) == 5){
                        if($card_3t_1 > $card_3t_2)return 1;
                        else return -1;
                    }else{
                        if($card_3t_1 > $card_3t_2)return 1;
                        else if($card_3t_1 < $card_3t_2)return -1;
                        else{
                            return  $this->compareOneByOne($cardsListOne,$cardsListTwo);
                        }
                    }

                    if($card_3t_1 > $card_3t_2)return 1;
                    else return -1;
                    break;
                }
                case TP_DUIZI_TWO:{
                    $cardData1 = $this->checkCardsCount($cardsListOne);
                    $cardData2 = $this->checkCardsCount($cardsListTwo);
                 
                    $card_dui_1 = array();
                    $card_dui_2 = array();
                    $card_dan_1 = 0;
                    $card_dan_2 = 0;
                    foreach ($cardData1 as $value => $count) {
                       if($count == 2)$card_dui_1[] =  $value;
                       if($count == 1)$card_dan_1 = $value ;
                    }
                    foreach ($cardData2 as $value => $count) {
                        if($count == 2)$card_dui_2[] =  $value;
                        if($count == 1)$card_dan_2 = $value ;
                    }


                    if(sizeof($card_dui_1)!=2||sizeof($card_dui_2)!=2)return 0;
                    if($card_dui_1[0]<$card_dui_1[1]){
                        $temp = $card_dui_1[0];
                        $card_dui_1[0] = $card_dui_1[1];
                        $card_dui_1[1] = $temp;
                    }
                    if($card_dui_2[0]<$card_dui_2[1]){
                        $temp = $card_dui_2[0];
                        $card_dui_2[0] = $card_dui_2[1];
                        $card_dui_2[1] = $temp;
                    }
                    if($card_dui_1[0]>$card_dui_2[0])return 1;
                    if($card_dui_1[0]<$card_dui_2[0])return -1;
                    else{
                        if($card_dui_1[1]>$card_dui_2[1])return 1;
                        if($card_dui_1[1]<$card_dui_2[1])return -1;
                        else {
                            if($card_dan_1>$card_dan_2)return 1;
                            if($card_dan_1<$card_dan_2)return -1;
                            else {
                                return $this->compareOneByOne($cardsListOne,$cardsListTwo);
                            }
                        }
                    }

                    break;
                }
                case TP_DUIZI_OME:{
                    $cardData1 = $this->checkCardsCount($cardsListOne);
                    $cardData2 = $this->checkCardsCount($cardsListTwo);
                 
                    $card_dui_1 = 0;
                    $card_dui_2 = 0;
                    foreach ($cardData1 as $value => $count) {
                        if($count == 2)$card_dui_1 = $value ;
                    }
                    foreach ($cardData2 as $value => $count) {
                        if($count == 2)$card_dui_2 = $value ;
                    }
                    if($card_dui_1 > $card_dui_2)return 1;
                    else if($card_dui_1 < $card_dui_2)return -1;
                    else{
                        return  $this->compareOneByOne($cardsListOne,$cardsListTwo);
                    }
                    break;
                }
                default:
                    return  $this->compareOneByOne($cardsListOne,$cardsListTwo);
                    break;
            }
        }

    return 0;
}

public function compareOneByOne($cardsListOne=array(),$cardsListTwo=array()){
    $this->sortCards($cardsListOne);
    $this->sortCards($cardsListTwo);
    for ($i=1; $i <= 5; $i++) { 
        $listOne = $this->getSmallCardsCount($cardsListOne,$i);
        $listTwo = $this->getSmallCardsCount($cardsListTwo,$i);

        if (count($listOne) != 0 && count($listTwo) != 0 ) {
            $res = $this->compareOneCard($listOne,$listTwo);
            if ($res != 0) {
                return $res;
            }
        }
    }
}

public function getSmallCardsCount($cardsList,$count)
{
    $temp = array();
    $cleanCards = array();
    foreach ($cardsList as $key => $card) {
        $value = $this->getCardValue($card);
        $cleanCards[$value]['count'] = isset($cleanCards[$value]['count'])?$cleanCards[$value]['count']+1:1;
        $cleanCards[$value]['cards'][] = $card;
    }
    foreach ($cleanCards as $value => $info) {
        if ($info['count'] == $count) {
            $temp = array_merge($temp,$info['cards']);
        }
    }
    return $temp;
}
public function compareOneCard($cardsListOne=array(),$cardsListTwo=array())
{
    $this->sortCards($cardsListOne);
    $this->sortCards($cardsListTwo);
    $cardsListOne = array_reverse($cardsListOne);
    $cardsListTwo = array_reverse($cardsListTwo);
    for ($i=0; $i < sizeof($cardsListOne); $i++) { 
        $cardvalue1 = $this->getCardValue($cardsListOne[$i]);
        $cardvalue2 = $this->getCardValue($cardsListTwo[$i]);
        if($cardvalue1 > $cardvalue2)return 1;
        else if($cardvalue1 < $cardvalue2)return -1;
    } 
    for ($i=0; $i < sizeof($cardsListOne); $i++) { 
        $cardclolor1 = $this->getCardColor($cardsListOne[$i]);
        $cardclolor2 = $this->getCardColor($cardsListTwo[$i]);
        if($cardclolor1 < $cardclolor2)return 1;
        else if($cardclolor1 > $cardclolor2)return -1;
    }
    return 0;
}

//-===============================================================================

    public function test(){
       // $cards = array(0x01,0x01,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D);
       // $cards = array(0x31,0x02,0x04,0x11,0x15,0x19,0x18,0x0A,0x0B,0x0A,0x1C,0x0D,0x03);
       //$cards = array(0x08,0x29,0x4C,0x4D,0x11,0x2C,0x1D,0x0B,0x0C,0x0D,0x0B,0x0C,0x0D);
       // $cards = array(0x02,0x22,0x22,0x24,0x25,0x06,0x07,0x08,0x03,0x25,0x26,0x28,0x32);
       $cards =  array(0x33,0x34,0x05,0x06,0x36,0x17,0x19,0x0A,0x2B,0x1C,0x2C,0x3D,0x2E);
        var_dump($this->analyseAIReCommondCards($cards));

    }


    //冒泡
     public function sortCards(&$cardsList=array()){
        $this->initIndex($cardsList);

        $count = sizeof($cardsList);
          for($k=1;$k<$count;$k++){
            for($i=0;$i<$count-$k;$i++){

                $cardValue = $this->getCardValue($cardsList[$i]);
                $cardNextValue = $this->getCardValue($cardsList[$i+1]);

                if($cardValue>$cardNextValue){//相邻比较
                    $tem=$cardsList[$i];
                    $cardsList[$i]=$cardsList[$i+1];
                    $cardsList[$i+1]=$tem;
                }else if($cardValue == $cardNextValue){
                    $cardColor = $this->getCardColor($cardsList[$i]);
                    $cardNextColor = $this->getCardColor($cardsList[$i+1]);
                    if($cardColor < $cardNextColor){
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

    //-----------------------------------------------------------------------------

  //分析一副牌(AI 推荐)


    public  function analyseAIReCommondCards($cardsList=array()){
        
        $list = array();
        $cardInfo = $this->analyseGroupCards($cardsList);

        $type = array('fivetong','samecolororder','bomb','hulu','samecolor','order','threetiao','duizi2','duizi1','wulong');
        $cardType = array(TP_5SAME,TP_SAME_COLOR_ORDER,TP_BOMB,TP_HULU,TP_SAME_COLOR,TP_ORDER,TP_THREE_TIAO,TP_DUIZI_TWO,TP_DUIZI_OME,TP_WULONG);

        for ($i=0; $i < 9; $i++) { 
            if($cardInfo[$type[$i]] == 0 || ($type[$i] == 'duizi2' && $cardInfo[$type[$i]] <=1))continue;

            $group = array();
            $cardresult = array();
            switch ($type[$i]) {
                case 'fivetong':$this->get5TongInList($cardsList,$cardresult);break;
                case 'samecolororder':$this->getSameColorOrderInList($cardsList,$cardresult);break;
                case 'bomb':$this->getBombInList($cardsList,$cardresult);break;
                case 'hulu':$this->getHuLuInList($cardsList,$cardresult);break;
                case 'samecolor':$this->getSameColorInList($cardsList,$cardresult);break;
                case 'order':$this->getOrderInList($cardsList,$cardresult);break;
                case 'threetiao':{
                    if( sizeof($list)>=4)break;
                    $this->get3TiaoInList($cardsList,$cardresult);
                }break;
                case 'duizi2':{
                    if( sizeof($list)>=4)break;
                    $this->get2DuiInList($cardsList,$cardresult);
                }break;
                case 'duizi1':{
                    if( sizeof($list)>=4)break;
                    $this->getOneDuiInList($cardsList,$cardresultIn);
                }break;
                default: break;
            }

            if(!isset($cardresult['ishave']) || !$cardresult['ishave'])continue;
            //var_dump($cardresult);

            $group['foot'] = $cardresult['cards'];
            $group['foot_name'] = $this->getNormalCardType($cardresult['cards']);
            

            $this->initIndex($cardresult['lastcards']);
            $cardInfoIn = $this->analyseGroupCards($cardresult['lastcards']);
           // var_dump($cardInfoIn);
            for ($j=$i; $j < 10; $j++) { 

               if($j !=9 && ($cardInfoIn[$type[$j]] == 0 || ($type[$j] == 'duizi2' && $cardInfoIn[$type[$j]] <2)||($type[$j] == 'duizi1' && $cardInfoIn[$type[$j]] <1)))continue;
                $cardresultIn = array();
                $tag = false;
                switch ($type[$j]) {
                    case 'fivetong':$this->get5TongInList($cardresult['lastcards'],$cardresultIn);break;
                    case 'samecolororder':$this->getSameColorOrderInList($cardresult['lastcards'],$cardresultIn);break;
                    case 'bomb':$this->getBombInList($cardresult['lastcards'],$cardresultIn);break;
                    case 'hulu':$this->getHuLuInList($cardresult['lastcards'],$cardresultIn);break;
                    case 'samecolor':$this->getSameColorInList($cardresult['lastcards'],$cardresultIn);break;
                    case 'order':$this->getOrderInList($cardresult['lastcards'],$cardresultIn);break;
                    case 'threetiao':$this->get3TiaoInList($cardresult['lastcards'],$cardresultIn);break;
                    case 'duizi2': $this->get2DuiInList($cardresult['lastcards'],$cardresultIn);break;
                    case 'duizi1':$this->getOneDuiInList($cardresult['lastcards'],$cardresultIn);break;
                    default: {
                        if (sizeof($list)==0) {
                            $this->getWulongInList($cardresult['lastcards'],$cardresultIn);
                        }
                        
                    }break;
                }
                    if(!isset($cardresultIn['ishave']) || !$cardresultIn['ishave'])continue;
                    if( sizeof($list)>=4)continue;

                    $midClone = $cardresultIn['cards'];
                    $this->sortCards($midClone);
                    $hesdClone = $cardresultIn['lastcards'];
                    $this->sortCards($hesdClone);

                    $compRes = $this->compareCards($hesdClone,$midClone);
                    if($compRes > 0)continue;

                    $group['mid'] = $midClone;
                    $group['mid_name'] = $this->getNormalCardType($midClone);
                    $this->initIndex($cardresultIn['lastcards']);

                    
                    $group['head'] = $hesdClone;
                    $group['head_name'] = $this->getNormalCardType($hesdClone);



                    //对比前一副牌是否一样（特殊牌型时候会推荐出相同的牌型）
                    if(sizeof($list)>0){
                        $arr = $list[sizeof($list)-1];
                        if((sizeof($arr['head'])==3&&sizeof($group['head'])==3)&&$this->compareCards($arr['head'],$group['head']) == 0){
                            if((sizeof($arr['mid'])==5&&sizeof($group['mid'])==5)&&$this->compareCards($arr['mid'],$group['mid']) == 0){
                                if((sizeof($arr['foot'])==5&&sizeof($group['foot'])==5)&&$this->compareCards($arr['foot'],$group['foot']) == 0){
                                    continue;
                                }
                            }
                        }
                    }

                     $list[] =  $group;
            }
        }

        return $list;
    }





    //分析一副牌(对子的数量，3条的数量，四个的数量，顺子的数量，同花的数量，同花顺的数量，5同的数量)
    public  function analyseCards($cardsList=array()){
        $cardInfo = array();
        $cardInfo['dan'] = $this->getDanCount($cardsList);
        $cardInfo['duizi'] = $this->getDuiZiCount($cardsList);
        $cardInfo['threetiao'] = $this->get3TiaoCount($cardsList);
        $cardInfo['bomb'] = $this->getbombCount($cardsList);
        $cardInfo['hulu'] = $this->getHuluCount($cardsList);
        $cardInfo['fivetong'] = $this->get5TongCount($cardsList);
        $cardInfo['samecolor'] = $this->getSameColorCount($cardsList);
        $cardInfo['order'] = $this->getOrderCount($cardsList);
        $cardInfo['samecolororder'] = $this->getSameColorOrderCount($cardsList);
        return $cardInfo;
    }

    //分析一副牌(乌龙的数量，1对的数量，2对的数量 3条的数量，葫芦的数量，铁支的数量，顺子的数量，同花的数量，同花顺的数量，5同的数量)
    public  function analyseGroupCards($cardsList=array()){
        $cardInfo = array();
        $cardInfo['duizi1'] = $this->get1DuiZiGroupCount($cardsList);
        $cardInfo['duizi2'] = $this->get2DuiZiGroupCount($cardsList);
        $cardInfo['threetiao'] = $this->get3TiaoGroupCount($cardsList);
        $cardInfo['bomb'] = $this->getbombGroupCount($cardsList);
        $cardInfo['hulu'] = $this->getHuluCount($cardsList);
        $cardInfo['fivetong'] = $this->get5TongCount($cardsList);
        $cardInfo['samecolor'] = $this->getSameColorCount($cardsList);
        $cardInfo['order'] = $this->getOrderCount($cardsList);
        $cardInfo['samecolororder'] = $this->getSameColorOrderCount($cardsList);
        return $cardInfo;
    }

    //-----------------------------------------------------------------------------
    //获取牌型统计
    public function getDanCount($cardsList=array()){
        $this->sortCards($cardsList);


        $cardData = array();
        for ($i=0; $i < sizeof($cardsList); $i++) { 
            $cardValue = $cardsList[$i]&0x0F;
            if(isset($cardData[$cardsList[$i]&0x0F])){
                $cardData[$cardsList[$i]&0x0F]++;
            }else{
                $cardData[$cardsList[$i]&0x0F] = 1;
            }
        }
        $dcount = 0;
        foreach ($cardData as $cardvalue => $count) {
            if($count == 1){
                $dcount++;
            }
        }
        return $dcount;
    }
    public function getDuiZiCount($cardsList=array()){
        
        $this->sortCards($cardsList);
        $count = 0;
        for ($i=0; $i < sizeof($cardsList)-1;) { 
            if (($cardsList[$i]&0x0F) == ($cardsList[$i+1]&0x0F)) {
                $count++;
                $i+=2;
            } else {
                $i++;
            }
        }
        return $count;
    }

    public function get1DuiZiGroupCount($cardsList=array()){
        
        if($this->getDuiZiCount($cardsList) <1 ) return 0;

        $this->sortCards($cardsList);
        $count = 0;
        $duiziValue = array();
        for ($i=0; $i < sizeof($cardsList)-1;) { 
            if (($cardsList[$i]&0x0F) == ($cardsList[$i+1]&0x0F) ) {
                //判断剩余牌中是否有3张不一样的牌
                $danlist = array();
                for($j=0;$j<sizeof($cardsList);$j++){
                    if(($cardsList[$j]&0x0F) != ($cardsList[$i]&0x0F) && !in_array(($cardsList[$j]&0x0F), $danlist)){
                       $danlist[] = ($cardsList[$j]&0x0F);
                    }
                }
                if(sizeof($danlist)>=3){
                    $count++;
                    $i+=2;
                }else{
                    $i++;
                }
                
            }else {
                $i++;
            }
        }

        return $count;

    }

    public function get2DuiZiGroupCount($cardsList=array()){
        
        if($this->getDuiZiCount($cardsList) <2 ) return 0;

        $this->sortCards($cardsList);
        $count = 0;
        $duiziValue = array();
        for ($i=0; $i < sizeof($cardsList)-1;) { 
            if (($cardsList[$i]&0x0F) == ($cardsList[$i+1]&0x0F) && !in_array(($cardsList[$i]&0x0F), $duiziValue)) {
                $duiziValue[] = ($cardsList[$i]&0x0F);
                $count++;
                $i+=2;
            }else {
                $i++;
            }
        }

        //是否有和两个对子不一样的牌
        if(sizeof($duiziValue)<2)return 0;
        $isHave = false;
        for($j=0;$j<sizeof($cardsList);$j++){
            if(!in_array(($cardsList[$j]&0x0F), $duiziValue)){
                $isHave = true;
                break;
            }
        }
        if($isHave){
            return $count;
        }
        return 0;
    }

    //3张的统计
    public function get3TiaoCount($cardsList=array()){
        $this->sortCards($cardsList);
        $count = 0;
        for ($i=0; $i < sizeof($cardsList)-2;) { 
            if (($cardsList[$i]&0x0F) == ($cardsList[$i+1]&0x0F) && ($cardsList[$i+1]&0x0F) == ($cardsList[$i+2]&0x0F)) {
                $count++;
                $i+=3;
            } else {
                $i++;
            }
        }
        return $count;
    }

    //5张的统计
    public function get3TiaoGroupCount($cardsList=array()){
        $this->sortCards($cardsList);
        $count = 0;
        for ($i=0; $i < sizeof($cardsList)-2;) { 
            if (($cardsList[$i]&0x0F) == ($cardsList[$i+1]&0x0F) && ($cardsList[$i+1]&0x0F) == ($cardsList[$i+2]&0x0F)) {
                
                //判断剩余牌中是否有两张不一样的牌
                $danlist = array();
                for($j=0;$j<sizeof($cardsList);$j++){
                    if(($cardsList[$j]&0x0F) != ($cardsList[$i]&0x0F) && !in_array(($cardsList[$j]&0x0F), $danlist)){
                       $danlist[] = ($cardsList[$j]&0x0F);
                    }
                }
                if(sizeof($danlist)>=2){
                    $count++;
                    $i+=3;
                }else{
                    $i++;
                }

            } else {
                $i++;
            }
        }
        return $count;
    }

    //4张的统计
    public function getbombCount($cardsList=array()){
        $this->sortCards($cardsList);
        $count = 0;
        for ($i=0; $i < sizeof($cardsList)-3;) { 
            if (($cardsList[$i]&0x0F) == ($cardsList[$i+1]&0x0F) &&( $cardsList[$i+1]&0x0F) == ($cardsList[$i+2]&0x0F) && ($cardsList[$i+2]&0x0F) == ($cardsList[$i+3]&0x0F)) {
                $count++;
                $i+=4;
            } else {
                $i++;
            }
        }
        return $count;
    }
    //5张的统计
    public function getbombGroupCount($cardsList=array()){
        $this->sortCards($cardsList);
        $count = 0;
        $dan = $this->getDanCount($cardsList);
        for ($i=0; $i < sizeof($cardsList)-3;) { 
            if (($cardsList[$i]&0x0F) == ($cardsList[$i+1]&0x0F) &&( $cardsList[$i+1]&0x0F) == ($cardsList[$i+2]&0x0F) && ($cardsList[$i+2]&0x0F) == ($cardsList[$i+3]&0x0F)) {
                //判断后面的牌是否有和铁支不一样的牌
                $isHave = false;
                for($j=0;$j<sizeof($cardsList);$j++){
                    if(($cardsList[$j]&0x0F) != ($cardsList[$i]&0x0F)){
                        $isHave = true;
                        break;
                    }
                }
                if($isHave){
                    $count++;
                    $i+=4;
                }else{
                    $i++;
                }
                
            } else {
                $i++;
            }
        }
        return $count;
    }
    public function getHuluCount($cardsList=array()){
        $this->sortCards($cardsList);
        $count3t = 0;
        for ($i=0; $i < sizeof($cardsList)-2;) { 
            if (($cardsList[$i]&0x0F) == ($cardsList[$i+1]&0x0F) && ($cardsList[$i+1]&0x0F) == ($cardsList[$i+2]&0x0F) ) {

                //判断是否有和三条不一样的对子
                $ishave = false;
                for ($j=0; $j < sizeof($cardsList)-1;$j++) { 
                    if (($cardsList[$j]&0x0F) == ($cardsList[$j+1]&0x0F) && ($cardsList[$j]&0x0F) != ($cardsList[$i]&0x0F)) {
                        $ishave = true;
                        break;
                    }
                }

                if($ishave){
                    $count3t++;
                    $i+=3;
                }else{
                    $i++;
                }
               
            } else {
                $i++;
            }
        }

        return $count3t;
    }
    public function get5TongCount($cardsList=array()){
        $this->sortCards($cardsList);
        $count = 0;
        for ($i=0; $i < sizeof($cardsList)-4;) { 
            if (($cardsList[$i]&0x0F) == ($cardsList[$i+1]&0x0F) && ($cardsList[$i+1]&0x0F) == ($cardsList[$i+2]&0x0F) 
                && ($cardsList[$i+2]&0x0F) == ($cardsList[$i+3]&0x0F) && ($cardsList[$i+3]&0x0F) == ($cardsList[$i+4]&0x0F)) {
                $count++;
                $i+=5;
            } else {
                $i++;
            }
        }
        return $count;
    }
    public function getOrderCount($cardsList=array()){
        $this->initIndex($cardsList);

        $count = 0;
         //过滤同牌
            $cardNew = array();
            foreach ($cardsList as $key => $value) {
                if(in_array(($value&0x0F), $cardNew))continue;
                $cardNew[] = $value&0x0F;
            }

            if (sizeof($cardNew) >= 5){
                $this->sortCards($cardNew);

                for ($i=0; $i < sizeof($cardNew)-4;) { 
                    if ($cardNew[$i+1] - $cardNew[$i] == 1 &&
                        $cardNew[$i+2] - $cardNew[$i+1] == 1 &&
                        $cardNew[$i+3] - $cardNew[$i+2] == 1 &&
                        $cardNew[$i+4] - $cardNew[$i+3] == 1 ) {
                        $count++;
                        $i+=5;
                    }else{
                        $i++;
                    }
                }
                //判断A顺
                if($count == 0){
                    if(in_array(14, $cardNew)&&in_array(2, $cardNew)&&in_array(3, $cardNew)&&in_array(4, $cardNew)&&in_array(5, $cardNew)){
                        $count++;
                    }
                }
            }
            return $count;
    }
    public function getSameColorCount($cardsList=array()){
        $this->initIndex($cardsList);

        $cardsColor = array();
        for ($i=0; $i < sizeof($cardsList); $i++) { 
            if (isset($cardsColor[$cardsList[$i]&0xF0])) {
                $cardsColor[$cardsList[$i]&0xF0]++;
            } else {
               $cardsColor[$cardsList[$i]&0xF0]=1;
            }
        }
        $huaCount = 0;
        foreach ($cardsColor as $color => $count) {
            if ($count >= 10) $huaCount += 2;
            else if ($count >= 5) $huaCount += 1;
        }
        return $huaCount;
    }
    public function getSameColorOrderCount($cardsList=array()){
        $this->initIndex($cardsList);

         $cardsColor = array();
         foreach ($cardsList as $key => $value) {
             $cardsColor[$value&0xF0][] = $value;
         }

        $huaCount = 0;
        foreach ($cardsColor as $color => $cards) {
            //过滤同牌
            $cardNew = array();
            foreach ($cards as $key => $value) {
                if(in_array($value&0x0F, $cardNew))continue;
                $cardNew[] = $value;
            }

            if (sizeof($cardNew) >= 5){
                $this->sortCards($cardNew);
                for ($i=0; $i < sizeof($cardNew)-4;) { 
                    if (($cardNew[$i+1]) - ($cardNew[$i]) == 1 &&
                        ($cardNew[$i+2]) - ($cardNew[$i+1]) == 1 &&
                        ($cardNew[$i+3]) - ($cardNew[$i+2]) == 1 &&
                        ($cardNew[$i+4]) - ($cardNew[$i+3]) == 1 ) {
                        $huaCount++;
                        $i+=5;
                    }else{
                        $i++;
                    }
                }
                //A 顺
                if($huaCount == 0){
                    if(in_array(14, $cardNew)&&in_array(2, $cardNew)&&in_array(3, $cardNew)&&in_array(4, $cardNew)&&in_array(5, $cardNew)){
                        $huaCount++;
                    }
                   
                }
            }
        }
        return $huaCount;
    }


    //-----------------------------------------------------------------------------

    //获取牌型类型(3张或5张)
    public function getNormalCardType($cardsList=array(),$isspecial = false){
        if (sizeof($cardsList)==3||sizeof($cardsList)==5){

            if(sizeof($cardsList)==5){
                if($this->is5Same($cardsList))return TP_5SAME;
                if($this->isBomb($cardsList))return TP_BOMB;
                if($this->isHuLu($cardsList))return TP_HULU;
            }

            if(sizeof($cardsList)==5 || $isspecial){
                $isSameColor = $this->isSameColor($cardsList);
                $isOrder = $this->isOrder($cardsList);
                if($isSameColor && $isOrder){
                    return TP_SAME_COLOR_ORDER;
                }else{
                    if($isSameColor)return TP_SAME_COLOR;
                    if($isOrder)return TP_ORDER;
                }
            }


            if($this->is3Tiao($cardsList))return TP_THREE_TIAO;
             if(sizeof($cardsList)==5){if($this->isDuiziTwo($cardsList))return TP_DUIZI_TWO;}
            if($this->isDuiziOne($cardsList))return TP_DUIZI_OME;

            return TP_WULONG;
           
        }else{
            echo "error : type error! \n";
            return TP_INVALID;
        }
    }
       

    //获取特殊牌型(13张)
    public function getSpecialCardType($cardsList=array()){
        if(sizeof($cardsList)!=13)return TP_INVALID;

        $isOneLong = $this->isSpOneLong($cardsList);
        $isOneColor = $this->isSpOneColor($cardsList);
        if ($isOneLong && $isOneColor){
            return TP_S_MAX_LONG;   //至尊青龙
        }else{
            //if($isOneColor)return TP_S_ONE_COLOR;
            if($isOneLong)return TP_S_ONE_LONG; //一条龙
        }

        if($this->isSp6DuiZi($cardsList))return TP_S_DUIZI_6;
        if($this->isSp3SameColor($cardsList))return TP_S_THREE_SAME_COLOR;
        if($this->isSp3Order($cardsList))return TP_S_THREE_ORDER;


        return TP_S_NONE;
    }


    //------------------------------------------------------------------------------------------------------------------------
    //算法函数

    //整理牌数据
    public function checkCardsCount($cardsList=array()){
        $this->initIndex($cardsList);

        $cardData = array();
        for ($i=0; $i < sizeof($cardsList); $i++) { 
            if(isset($cardData[$cardsList[$i]&0x0F])){
                $cardData[$cardsList[$i]&0x0F]++;
            }else{
                $cardData[$cardsList[$i]&0x0F] = 1;
            }
        }
        return $cardData;
    }

    //是否是乌龙
    //public function isWuLong($cardsList=array()){}
    //是否是一对
    public function isDuiziOne($cardsList=array()){
        $this->initIndex($cardsList);

        $cardData = $this->checkCardsCount($cardsList);

        if(sizeof($cardsList)==5){
            return sizeof($cardData)==4 ? true : false;
        }else if(sizeof($cardsList)==3){
            return sizeof($cardData)==2 ? true : false;
        }

         return false;
        
    }
    //是否是2对
    public function isDuiziTwo($cardsList=array()){
        $this->initIndex($cardsList);

        if(sizeof($cardsList)!=5)return false;
        $cardData = $this->checkCardsCount($cardsList);
        if (sizeof($cardData)==3) {
            $isDoubleDz = true;
            foreach ($cardData as $cardValue => $count) {
                if($count>2){
                    $isDoubleDz = false;
                    break;
                }
            }
            return $isDoubleDz;
        }
         return false;
    }
    //是否是3条
    public function is3Tiao($cardsList=array()){
        $this->initIndex($cardsList);
        $cardData = $this->checkCardsCount($cardsList);
        if (sizeof($cardsList)==3) {
            if (sizeof($cardData)==1) return true;
        } else if (sizeof($cardsList)==5){
           if (sizeof($cardData)==3) {
                $is3Tiao = false;
                foreach ($cardData as $cardValue => $count) {
                    if($count == 3){
                        $is3Tiao = true;
                        break;
                    }
                }
                return $is3Tiao;
            }
        }
        
         return false;
    }

    //是否是A小顺
    public function isAOrder($cardsList=array()){
        $this->sortCards($cardsList);

        if(sizeof($cardsList)<3)return false;
        $tag = true;
        if(($cardsList[0]&0x0F)==2 && ($cardsList[sizeof($cardsList)-1]&0x0F) == 14){
            for ($i=0; $i < sizeof($cardsList)-2; $i++) { 
                if (($cardsList[$i+1]&0x0F) - ($cardsList[$i]&0x0F) != 1) {
                    $tag = false;
                    break;
                }
            }
        }else{
            $tag = false;
        }
        return $tag;
    }

    //是否是顺子
    public function isOrder($cardsList=array()){
        $this->initIndex($cardsList);

        if(sizeof($cardsList)<3)return false;
        $this->sortCards($cardsList);
        $isOrder = true;
        for ($i=0; $i < sizeof($cardsList)-1; $i++) { 
            if (($cardsList[$i+1]&0x0F) - ($cardsList[$i]&0x0F) != 1) {
                $isOrder = false;
                break;
            }
        }
        //判断A为最小
        if(!$isOrder){

            if(($cardsList[0]&0x0F)==2 && ($cardsList[sizeof($cardsList)-1]&0x0F) == 14){
                $tag = true;
                for ($i=0; $i < sizeof($cardsList)-2; $i++) { 
                    if (($cardsList[$i+1]&0x0F) - ($cardsList[$i]&0x0F) != 1) {
                        $tag = false;
                        break;
                    }
                }
                if($tag)$isOrder = true;
            }
        }
        return $isOrder;
    }
    //是否是同花
    public function isSameColor($cardsList=array()){
        $this->initIndex($cardsList);

        $isSameColor = true;
        for ($i=0; $i < sizeof($cardsList)-1; $i++) { 
            if (($cardsList[$i]&0xF0) != ($cardsList[$i+1]&0xF0)) {
                $isSameColor = false;
                break;
            }
        }
        return $isSameColor;
    }
    //是否是葫芦
    public function isHuLu($cardsList=array()){
        $this->initIndex($cardsList);

        if(sizeof($cardsList)!=5)return false;
        $cardData = $this->checkCardsCount($cardsList);
        if (sizeof($cardData)==2) {
            $hulu = true;
            foreach ($cardData as $cardValue => $count) {
                if($count == 2 || $count == 3)continue;
                $hulu = false;
            }
            return $hulu;
        }
         return false;
    }
    //是否是铁支
    public function isBomb($cardsList=array()){
        $this->initIndex($cardsList);

        if(sizeof($cardsList)!=5)return false;
        $cardData = $this->checkCardsCount($cardsList);
        if (sizeof($cardData)==2) {
            $bomb = false;
            foreach ($cardData as $cardValue => $count) {
                if($count == 4){
                    $bomb = true;
                    break;
                }
            }
            return $bomb;
        }
         return false;
    }
    public function is5Same($cardsList=array())
    {
        $this->initIndex($cardsList);

        if(sizeof($cardsList)!=5)return false;
        $cardData = $this->checkCardsCount($cardsList);
        if (sizeof($cardData)==1) {
            $fiveSame = false;
            foreach ($cardData as $cardValue => $count) {
                if($count == 5){
                    $fiveSame = true;
                    break;
                }
            }
            return $fiveSame;
        }
         return false;
    }


//取牌---------------------------------------------------------------------------
    //取一副5同
    public function get5TongInList($cardsList=array(),&$result){
        $this->initIndex($cardsList);

        $result['ishave'] = false;
       $result['lastcards'] = array();
       $result['cards'] = array();
       $result['cardsvalue'] = array();

       if (sizeof($cardsList) <5)return;
       if($this->get5TongCount($cardsList)==0)return ;


        for ($i=sizeof($cardsList)-1; $i >3 ;) { 
            if ((($cardsList[$i]&0x0F) == ($cardsList[$i-1]&0x0F)) && (($cardsList[$i-1]&0x0F) == ($cardsList[$i-2]&0x0F)) 
                && (($cardsList[$i-2]&0x0F) == ($cardsList[$i-3]&0x0F)) && (($cardsList[$i-3]&0x0F) == ($cardsList[$i-4]&0x0F))) {
                $cardNewValue = array($cardsList[$i],$cardsList[$i-1],$cardsList[$i-2],$cardsList[$i-3],$cardsList[$i-4]);
                $result['ishave'] = true;
                for ($j=0; $j < sizeof($cardNewValue); $j++) { 
                    foreach ($cardsList as $key => $value) {
                         if ($value ==$cardNewValue[$j] ) {
                            $result['cards'][] = $cardNewValue[$j];
                            $result['cardsvalue'][] = $cardNewValue[$j]&0x0F;
                            unset($cardsList[$key]);
                            break;
                        }
                    }
                }
                $result['lastcards'] = $cardsList;
                break;
            } else {
                $i--;
            }
        }

        return ;
    }
    //取一副三张顺字
    public function getThreeOrderInList($cardsList=array(),&$result){
        $this->initIndex($cardsList);

       $result['ishave'] = false;
       $result['lastcards'] = array();
       $result['cards'] = array();
       $result['cardsvalue'] = array();

        if (sizeof($cardsList) <3)return;
       if($this->getOrderCount($cardsList)==0)return ;


       //过滤同牌
        $cardNew = array();
        foreach ($cardsList as $key => $value) {
            if(in_array($value&0x0F, $cardNew))continue;
            $cardNew[] = $value&0x0F;
        }
        if(sizeof($cardNew)<3)return;

        $this->sortCards($cardNew);

        //从大到小取顺子
        for ($i=sizeof($cardNew)-1; $i >= 2; $i--) {

                if($cardNew[$i] - $cardNew[$i-1] ==1 && $cardNew[$i-1] - $cardNew[$i-2] ==1){
                    $cardNewValue = array($cardNew[$i],$cardNew[$i-1],$cardNew[$i-2]);
                    $result['ishave'] = true;
                    for ($j=0; $j < sizeof($cardsList); $j++) {
                        if (in_array($cardsList[$j]&0x0F,$cardNewValue) && !in_array($cardsList[$j]&0x0F,$result['cardsvalue'])) {
                            $result['cards'][] = $cardsList[$j];
                            $result['cardsvalue'][] = $cardsList[$j]&0x0F;
                        }else{
                            $result['lastcards'][] = $cardsList[$j];
                        }
                    }
                    return;
                }
        }

        //取A顺
        if($cardNew[sizeof($cardNew)-1]==14 && $cardNew[0]==2 && $cardNew[1]==3 ){
             $cardNewValue = array($cardNew[sizeof($cardNew)-1],$cardNew[0],$cardNew[1]);
            $result['ishave'] = true;
           for ($i=0; $i < sizeof($cardsList); $i++) {
                if (in_array($cardsList[$i]&0x0F,$cardNewValue) && !in_array($cardsList[$i]&0x0F,$result['cardsvalue'])) {
                    $result['cards'][] = $cardsList[$i];
                    $result['cardsvalue'][] = $cardsList[$i]&0x0F;
                }else{
                    $result['lastcards'][] = $cardsList[$i];
                }
           }
           return;
        }


        return;
    }
    //取一副顺子
    public function getOrderInList($cardsList=array(),&$result){
        $this->initIndex($cardsList);

       $result['ishave'] = false;
       $result['lastcards'] = array();
       $result['cards'] = array();
       $result['cardsvalue'] = array();

        if (sizeof($cardsList) <5)return;
       if($this->getOrderCount($cardsList)==0)return ;


       //过滤同牌
        $cardNew = array();
        foreach ($cardsList as $key => $value) {
            if(in_array($value&0x0F, $cardNew))continue;
            $cardNew[] = $value&0x0F;
        }
        if(sizeof($cardNew)<5)return;

        $this->sortCards($cardNew);

        //从大到小取顺子
        for ($i=sizeof($cardNew)-1; $i >= 4; $i--) {

                if($cardNew[$i] - $cardNew[$i-1] ==1 && $cardNew[$i-1] - $cardNew[$i-2] ==1 &&  $cardNew[$i-2] - $cardNew[$i-3] ==1 && $cardNew[$i-3] - $cardNew[$i-4] ==1){
                    $cardNewValue = array($cardNew[$i],$cardNew[$i-1],$cardNew[$i-2],$cardNew[$i-3],$cardNew[$i-4]);
                    $result['ishave'] = true;
                    for ($j=0; $j < sizeof($cardsList); $j++) {
                        if (in_array($cardsList[$j]&0x0F,$cardNewValue) && !in_array($cardsList[$j]&0x0F,$result['cardsvalue'])) {
                            $result['cards'][] = $cardsList[$j];
                            $result['cardsvalue'][] = $cardsList[$j]&0x0F;
                        }else{
                            $result['lastcards'][] = $cardsList[$j];
                        }
                    }
                    return;
                }
        }

        //取A顺
        if($cardNew[sizeof($cardNew)-1]==14 && $cardNew[0]==2 && $cardNew[1]==3 && $cardNew[2]==4 && $cardNew[3]==5){
             $cardNewValue = array($cardNew[sizeof($cardNew)-1],$cardNew[0],$cardNew[1],$cardNew[2],$cardNew[3]);
            $result['ishave'] = true;
           for ($i=0; $i < sizeof($cardsList); $i++) {
                if (in_array($cardsList[$i]&0x0F,$cardNewValue) && !in_array($cardsList[$i]&0x0F,$result['cardsvalue'])) {
                    $result['cards'][] = $cardsList[$i];
                    $result['cardsvalue'][] = $cardsList[$i]&0x0F;
                }else{
                    $result['lastcards'][] = $cardsList[$i];
                }
           }
           return;
        }


        return;
    }
    //取一副同花
    public function getSameColorInList($cardsList=array(),&$result){
        $this->initIndex($cardsList);

       $result['ishave'] = false;
       $result['lastcards'] = array();
       $result['cards'] = array();
       $result['cardsvalue'] = array();

        if (sizeof($cardsList) <5)return;
       if($this->getSameColorCount($cardsList)==0)return ;

        $cardsColor = array();
        for ($i=0; $i < sizeof($cardsList); $i++) { 
             $cardsColor[$cardsList[$i]&0xF0][] = $cardsList[$i];
        }


        $tonghuaList = array();
        foreach ($cardsColor as $color => $cards) {
            $this->sortCards($cards);
            if(sizeof($cards)>=5){
               $tonghuaList[$color] = array($cards[sizeof($cards)-5],$cards[sizeof($cards)-4],$cards[sizeof($cards)-3],$cards[sizeof($cards)-2],$cards[sizeof($cards)-1]);
            }
        }

        if(sizeof($tonghuaList)==0)return ;

        $bigHua = -1;
        $bigCards = array();
        foreach ($tonghuaList as $color => $cards) {
            if($bigHua == -1){
                $bigHua = $color;
                $bigCards = $cards;
            }else{
                $res = $this->compareCards($cards,$bigCards);
                if($res > 0){
                    $bigHua = $color;
                    $bigCards = $cards;
                }
            }
        }

        if ($bigHua != -1) {
            foreach ($cardsColor as $color => $cards) {
                $this->sortCards($cards);
                if($color == $bigHua){
                    $cardNewValue = array($cards[sizeof($cards)-5],$cards[sizeof($cards)-4],$cards[sizeof($cards)-3],$cards[sizeof($cards)-2],$cards[sizeof($cards)-1]);;
                    $result['ishave'] = true;

                     for ($i=0; $i < sizeof($cardNewValue); $i++) { 
                        foreach ($cardsList as $key => $value) {
                            if ($value == $cardNewValue[$i] ) {
                                $result['cards'][] = $cardNewValue[$i];
                                $result['cardsvalue'][] = $cardNewValue[$i]&0x0F;

                                unset($cardsList[$key]);
                                break;
                            }
                        }
                    }

                    $result['lastcards'] = $cardsList;
                    
                    return;

                }
            }
        }
        return;
    }


    //取一副同花顺
    public function getSameColorOrderInList($cardsList=array(),&$result){
        $this->initIndex($cardsList);

        $result['ishave'] = false;
       $result['lastcards'] = array();
       $result['cards'] = array();
      $result['cardsvalue'] = array();

        if (sizeof($cardsList) <5)return;
       if($this->getSameColorOrderCount($cardsList)==0)return ;

        $cardsColor = array();
        foreach ($cardsList as $key => $value) {
           $cardsColor[$value&0xF0][] = $value;
        }


        $cardsSameColor = array();
        foreach ($cardsColor as $color => $cards) {
            if(sizeof($cards)>=5){
                for ($i=0; $i < sizeof($cards); $i++) { 
                    if(!isset($cardsSameColor[$color]))$cardsSameColor[$color] = array();
                    if(!in_array($cards[$i], $cardsSameColor[$color])){
                        $cardsSameColor[$color][]=$cards[$i];
                    }
                }
            }
        }

 // var_dump($cardsSameColor);

        $huaCount = 0;
        $bigHuaCardValue = -1;
        $bigHua = -1;
        foreach ($cardsSameColor as $color => $cards) {

            //过滤同牌
            $cardValue = array();
            $cardNew = array();
            foreach ($cards as $key => $value) {
                if(in_array($value&0x0F, $cardValue))continue;
                $cardValue[] = $value&0x0F;
                $cardNew[] = $value;
            }

            if(sizeof($cardNew)>=5){
                $this->sortCards($cardNew);
               
                //从大到小取顺子
                for ($i=sizeof($cardNew)-1; $i >= 4;) {
                        if($cardNew[$i] - $cardNew[$i-1] ==1 && $cardNew[$i-1] - $cardNew[$i-2] ==1 &&  $cardNew[$i-2] - $cardNew[$i-3] ==1 && $cardNew[$i-3] - $cardNew[$i-4] ==1){
                            $cardNewValue = array($cardNew[$i],$cardNew[$i-1],$cardNew[$i-2],$cardNew[$i-3],$cardNew[$i-4]);
                            $result['ishave'] = true;
                            for ($j=0; $j < sizeof($cardNewValue); $j++) { 
                                foreach ($cardsList as $key => $value) {
                                     if ($value == $cardNewValue[$j]) {
                                        $result['cards'][] = $cardNewValue[$j];
                                        $result['cardsvalue'][] = $cardNewValue[$j]&0x0F;

                                         unset($cardsList[$key]);
                                         break;
                                    }
                                }
                            }
                            $result['lastcards'] = $cardsList;
                            return;

                        }else{
                            $i--;
                        }
                }

                //取A顺
                if($cardNew[0]==2 && $cardNew[1]==3 && $cardNew[2]==4 && $cardNew[3]==5 && $cardNew[sizeof($cardNew)-1]==14){
                     $cardNewValue = array($cardNew[0],$cardNew[1],$cardNew[2],$cardNew[3],$cardNew[sizeof($cardNew)-1]);
                    $result['ishave'] = true;


                    for ($i=0; $i < sizeof($cardNewValue); $i++) { 

                        foreach ($cardsList as $key => $value) {
                             if ($value == $cardNewValue[$i]) {
                                $result['cards'][] = $cardNewValue[$i];
                                $result['cardsvalue'][] = $cardNewValue[$i]&0x0F;

                                 unset($cardsList[$key]);
                                 break;
                            }
                        }
                    }
                    $result['lastcards'] = $cardsList;
                   return;
                }




            }
        }
        return;
    }

    //取一副铁支
    public function getBombInList($cardsList=array(),&$result){
        $this->initIndex($cardsList);

        $result['ishave'] = false;
       $result['lastcards'] = array();
       $result['cards'] = array();
       $result['cardsvalue'] = array();

       if (sizeof($cardsList) <5)return;
       if($this->getbombCount($cardsList)==0)return ;


        $bombCardValue = -1; 
        for ($i=sizeof($cardsList)-1; $i >2 ;) { 
             if ((($cardsList[$i]&0x0F) == ($cardsList[$i-1]&0x0F)) && (($cardsList[$i-1]&0x0F) == ($cardsList[$i-2]&0x0F)) && ($cardsList[$i-2]&0x0F) == (($cardsList[$i-3]&0x0F))) {
                $cardNewValue = array($cardsList[$i],$cardsList[$i-1],$cardsList[$i-2],$cardsList[$i-3]);
                $result['ishave'] = true;
                 $bombCardValue = ($cardsList[$i]&0x0F) ;
                for ($j=0; $j < sizeof($cardNewValue); $j++) { 
                    foreach ($cardsList as $key => $value) {
                         if ($value ==$cardNewValue[$j] ) {
                            $result['cards'][] = $cardNewValue[$j];
                            $result['cardsvalue'][] = $cardNewValue[$j]&0x0F;
                            unset($cardsList[$key]);
                            break;
                        }
                    }
                }
                
                break;
            } else {
                $i--;
            }
        }
        $this->initIndex($cardsList);
        if($result['ishave'] == true){


            $dans = array();
            $cardCountList = $this->checkCardsCount($cardsList);
            foreach ($cardCountList as $value => $count) {
                if( $count == 1){
                    $dans[] =  $value;
                }
            }


            if(sizeof($dans) == 0){
                // //加一张单
                foreach ($cardsList as $key => $value) {
                    if((($value&0x0F) != $bombCardValue)){
                        $result['cards'][] = $cardsList[$key];
                        $result['cardsvalue'][] = $cardsList[$key]&0x0F;
                        unset($cardsList[$key]);
                        break;
                    }
                }
            }else{
                foreach ($cardsList as $key => $value) {
                    if((($value&0x0F) != $bombCardValue)  && in_array($value&0x0F, $dans)){
                        $result['cards'][] = $cardsList[$key];
                        $result['cardsvalue'][] = $cardsList[$key]&0x0F;
                        unset($cardsList[$key]);
                        break;
                    }
                }
            }



            //加一张单
            // foreach ($cardsList as $key => $value) {
            //     if(($value&0x0F) != $bombCardValue){
            //         $result['cards'][] = $cardsList[$key];
            //         $result['cardsvalue'][] = $cardsList[$key]&0x0F;
            //         unset($cardsList[$key]);
            //         break;
            //     }
               
            // }
            
            $result['lastcards'] = $cardsList;
        }
   

        return;
    }
    //取一副葫芦
    public function getHuLuInList($cardsList=array(),&$result){
        $this->initIndex($cardsList);

        $result['ishave'] = false;
       $result['lastcards'] = array();
       $result['cards'] = array();
       $result['cardsvalue'] = array();

       if (sizeof($cardsList) <5)return;
       if($this->getHuluCount($cardsList)==0)return ;

       $huluCardValue = -1;
        for ($i=sizeof($cardsList)-1; $i >1 ;) { 
             if ((($cardsList[$i]&0x0F) == ($cardsList[$i-1]&0x0F)) && (($cardsList[$i-1]&0x0F) == ($cardsList[$i-2]&0x0F)) ) {
                $cardNewValue = array($cardsList[$i],$cardsList[$i-1],$cardsList[$i-2]);
                $result['ishave'] = true;
                $huluCardValue = ($cardsList[$i]&0x0F);
                for ($j=0; $j < sizeof($cardNewValue); $j++) { 
                    foreach ($cardsList as $key => $value) {
                       if ($value ==$cardNewValue[$j] ) {
                            $result['cards'][] = $cardNewValue[$j];
                            $result['cardsvalue'][] = $cardNewValue[$j]&0x0F;
                            unset($cardsList[$key]);
                            break;
                        }
                    }

                }
                
                break;
            } else {
                $i--;
            }
        }

        $this->initIndex($cardsList);
        
        //加一对
        if($result['ishave'] == true){
            for ($i=0; $i < sizeof($cardsList)-1; $i++) { 
                 if ((($cardsList[$i]&0x0F) == ($cardsList[$i+1]&0x0F)) && (($cardsList[$i]&0x0F) != $huluCardValue)) {
                    $cardNewValue = array($cardsList[$i],$cardsList[$i+1]);
                    for ($j=0; $j < sizeof($cardNewValue); $j++) { 
                        foreach ($cardsList as $key => $value) {
                             if ($value ==$cardNewValue[$j] ) {
                                $result['cards'][] = $cardNewValue[$j];
                                $result['cardsvalue'][] = $cardNewValue[$j]&0x0F;
                                unset($cardsList[$key]);
                                break;
                            }
                        }
                    }
                    break;
                }
            }

        }
        $result['lastcards'] = $cardsList;
    }


    //取一副3T
    public function get3TiaoInList($cardsList=array(),&$result){
        $this->initIndex($cardsList);

        $result['ishave'] = false;
       $result['lastcards'] = array();
       $result['cards'] = array();
       $result['cardsvalue'] = array();

       if (sizeof($cardsList) <5)return;
       if($this->get3TiaoCount($cardsList)==0)return ;


       $huluCardValue = -1;
        for ($i=sizeof($cardsList)-1; $i >1 ;) { 
             if ((($cardsList[$i]&0x0F) == ($cardsList[$i-1]&0x0F)) && (($cardsList[$i-1]&0x0F) == ($cardsList[$i-2]&0x0F)) ) {
                $cardNewValue = array($cardsList[$i],$cardsList[$i-1],$cardsList[$i-2]);
                $result['ishave'] = true;
                $huluCardValue = ($cardsList[$i]&0x0F);
                for ($j=0; $j < sizeof($cardNewValue); $j++) { 
                    foreach ($cardsList as $key => $value) {
                         if ($value ==$cardNewValue[$j] ) {
                            $result['cards'][] = $cardNewValue[$j];
                            $result['cardsvalue'][] = $cardNewValue[$j]&0x0F;
                            unset($cardsList[$key]);
                            break;
                        }
                    }
                }
                
                break;
            } else {
                $i--;
            }
        }
        $this->initIndex($cardsList);
        if($result['ishave'] == true){
            //加2张单
            
            $dans = array();
            $cardCountList = $this->checkCardsCount($cardsList);
            foreach ($cardCountList as $value => $count) {
                if( $count == 1){
                    $dans[] =  $value;
                }
            }

            if(sizeof($dans)<2){
                $count = 0;
                $danlist = array();
                foreach ($cardsList as $key => $value) {
                    if($count > 1)break;
                    if((($value&0x0F) != $huluCardValue) && !in_array(($value&0x0F), $danlist)){
                        $danlist[] = ($value&0x0F);
                        $result['cards'][] = $cardsList[$key];
                        $result['cardsvalue'][] = $cardsList[$key]&0x0F;
                        unset($cardsList[$key]);
                        $count++;
                    }
                    
                }
            }else{
                $count = 0;
                $danlist = array();
                foreach ($cardsList as $key => $value) {
                    if($count > 1)break;
                    if((($value&0x0F) != $huluCardValue) && in_array(($value&0x0F), $dans)){
                        $danlist[] = ($value&0x0F);
                        $result['cards'][] = $cardsList[$key];
                        $result['cardsvalue'][] = $cardsList[$key]&0x0F;
                        unset($cardsList[$key]);
                        $count++;
                    }
                    
                }
            }

            

            $result['lastcards'] = $cardsList;
        }
   

        return;
    }
    //取一副2D
    public function get2DuiInList($cardsList=array(),&$result){
        $this->initIndex($cardsList);


        $result['ishave'] = false;
       $result['lastcards'] = array();
       $result['cards'] = array();
       $result['cardsvalue'] = array();



      // var_dump($cardsList);

       if (sizeof($cardsList) <5)return;
       if($this->getDuiZiCount($cardsList)<2)return ;
        $result['ishave'] = true;

        $duizi1 = -1;
       for ($i=sizeof($cardsList)-1; $i >0 ;) { 
            if ((($cardsList[$i]&0x0F) == ($cardsList[$i-1]&0x0F)) ) {
                $duizi1= ($cardsList[$i]&0x0F);
                $cardNewValue = array($cardsList[$i],$cardsList[$i-1]);
                for ($j=0; $j < sizeof($cardNewValue); $j++) { 
                    foreach ($cardsList as $key => $value) {
                         if ($value ==$cardNewValue[$j] ) {
                            $result['cards'][] = $cardNewValue[$j];
                            $result['cardsvalue'][] = $cardNewValue[$j]&0x0F;
                            unset($cardsList[$key]);
                            break;
                        }
                    }
                }
                break;
            } else {
                $i--;
            }
        }

        $this->initIndex($cardsList);
        $duizi2 = -1;
        for ($i=sizeof($cardsList)-1; $i >0 ;) {
            if ((($cardsList[$i]&0x0F) == ($cardsList[$i-1]&0x0F)) && (($cardsList[$i]&0x0F) != $duizi1)) {
              // echo $cardsList[$i]&0x0F;
              $duizi2 = ($cardsList[$i]&0x0F);
                $cardNewValue = array($cardsList[$i],$cardsList[$i-1]);
                for ($j=0; $j < sizeof($cardNewValue); $j++) { 
                   foreach ($cardsList as $key => $value) {
                         if ($value ==$cardNewValue[$j] ) {
                            $result['cards'][] = $cardNewValue[$j];
                            $result['cardsvalue'][] = $cardNewValue[$j]&0x0F;
                            unset($cardsList[$key]);
                            break;
                        }
                    }
                }
                break;
            } else {
                $i--;
            }
        }



        $dans = array();
        $cardCountList = $this->checkCardsCount($cardsList);
        foreach ($cardCountList as $value => $count) {
            if( $count == 1){
                $dans[] =  $value;
            }
        }

        if(sizeof($dans) == 0){
            // //加一张单
            foreach ($cardsList as $key => $value) {
                if((($value&0x0F) != $duizi1) && (($value&0x0F) != $duizi2)){
                    $result['cards'][] = $cardsList[$key];
                    $result['cardsvalue'][] = $cardsList[$key]&0x0F;
                    unset($cardsList[$key]);
                    break;
                }
            }
        }else{
            foreach ($cardsList as $key => $value) {
                if((($value&0x0F) != $duizi1) && (($value&0x0F) != $duizi2) && in_array($value&0x0F, $dans)){
                    $result['cards'][] = $cardsList[$key];
                    $result['cardsvalue'][] = $cardsList[$key]&0x0F;
                    unset($cardsList[$key]);
                    break;
                }
            }
        }

       

         $result['lastcards'] = $cardsList;
        return ;
    }
    //取一副1D
    public function getOneDuiInList($cardsList=array(),&$result){
        $this->initIndex($cardsList);

         $result['ishave'] = false;
       $result['lastcards'] = array();
       $result['cards'] = array();
       $result['cardsvalue'] = array();

       if (sizeof($cardsList) <5)return;
       if($this->getDuiZiCount($cardsList)<1)return ;
       $result['ishave'] = true;

       $duiziVlue = -1;
       for ($i=sizeof($cardsList)-1; $i >0 ;) { 
            if (($cardsList[$i]&0x0F) == ($cardsList[$i-1]&0x0F)) {
                $cardNewValue = array($cardsList[$i],$cardsList[$i-1]);
                $duiziVlue = ($cardsList[$i]&0x0F);
                for ($j=0; $j < sizeof($cardNewValue); $j++) { 
                    foreach ($cardsList as $key => $value) {
                         if ($value ==$cardNewValue[$j] ) {
                            $result['cards'][] = $cardNewValue[$j];
                            $result['cardsvalue'][] = $cardNewValue[$j]&0x0F;
                            unset($cardsList[$key]);
                            break;
                        }
                    }

                }
                break;
            } else {
                $i--;
            }
        }
        $this->initIndex($cardsList);


        $dans = array();
        $cardCountList = $this->checkCardsCount($cardsList);
        foreach ($cardCountList as $value => $count) {
            if( $count == 1){
                $dans[] =  $value;
            }
        }

        if(sizeof($dans) < 3){
            $count = 0;
            $danlist = array();
            foreach ($cardsList as $key => $value) {
                if($count > 2)break;
                if(($value&0x0F) != $duiziVlue && !in_array(($value&0x0F), $danlist)){
                    $danlist[] = ($value&0x0F);
                    $result['cards'][] = $cardsList[$key];
                    $result['cardsvalue'][] = $cardsList[$key]&0x0F;
                    unset($cardsList[$key]);
                    $count++;
                }
                
            }
        }else{
            $count = 0;
           // $danlist = array();
            foreach ($cardsList as $key => $value) {
                if($count > 2)break;
                if(($value&0x0F) != $duiziVlue && in_array(($value&0x0F), $dans)){
                   // $danlist[] = ($value&0x0F);
                    $result['cards'][] = $cardsList[$key];
                    $result['cardsvalue'][] = $cardsList[$key]&0x0F;
                    unset($cardsList[$key]);
                    $count++;
                }
                
            }
        }


        
        $result['lastcards'] = $cardsList;
        return ;

    }
    //取一副乌龙
    public function getWulongInList($cardsList=array(),&$result){
        //$this->initIndex($cardsList);
        $this->sortCards($cardsList);

         $result['ishave'] = false;
       $result['lastcards'] = array();
       $result['cards'] = array();
       $result['cardsvalue'] = array();

       if (sizeof($cardsList) <5)return;

        $cardNewValue = array($cardsList[sizeof($cardsList)-1],$cardsList[sizeof($cardsList)-2],$cardsList[sizeof($cardsList)-3],$cardsList[sizeof($cardsList)-4],$cardsList[sizeof($cardsList)-5]);
        $result['ishave'] = true;
        for ($i=0; $i < sizeof($cardNewValue); $i++) { 

            foreach ($cardsList as $key => $value) {
                if ($value ==$cardNewValue[$i] ) {
                    $result['cards'][] = $cardNewValue[$i];
                    $result['cardsvalue'][] = $cardNewValue[$i]&0x0F;
                    unset($cardsList[$key]);
                    break;
                }
            }
        }
        $result['lastcards'] = $cardsList;
        return ;
    }

//--------------------------------------------------------------------------------------
   //是否是三同花
    public function isSp3SameColor($cardsList=array()){
        $this->initIndex($cardsList);

        if (sizeof($cardsList)!=13)return false;

        $cardsColor = array();
        for ($i=0; $i < sizeof($cardsList); $i++) { 
            if (isset($cardsColor[$cardsList[$i]&0xF0])) {
                $cardsColor[$cardsList[$i]&0xF0]++;
            } else {
               $cardsColor[$cardsList[$i]&0xF0]=1;
            }
        }

        if (sizeof($cardsColor) == 3) {
            $same3Color = true;
            foreach ($cardsColor as $color => $count) {
                if($count == 5 || $count == 3)continue;
                $same3Color = false;
            }
            return $same3Color;
        }else if (sizeof($cardsColor) == 2) {
            $same3Color = true;
            foreach ($cardsColor as $color => $count) {
                if(in_array($count, array(10,3)) || in_array($count, array(8,5)))continue;
                $same3Color = false;
            }
            return $same3Color;
        }if (sizeof($cardsColor) == 1) {
            $same3Color = true;
            return $same3Color;
        } else {
            return false;
        }
    }
    //是否是三顺子
    public function isSp3Order($cardsList=array()){
        $this->initIndex($cardsList);

        //过滤同牌
        $cardNew = array();
        foreach ($cardsList as $key => $value) {
            if(in_array($value&0x0F, $cardNew))continue;
            $cardNew[] = $value&0x0F;
        }
        if(sizeof($cardNew)<5)return false;

        $this->sortCards($cardNew);
        //从大到小取顺子
        $cnt = sizeof($cardNew)-1;
        for ($i=$cnt; $i >= 4; $i--) {
            if ($i >= 4) {
                if($cardNew[$i] - $cardNew[$i-1] ==1 && $cardNew[$i-1] - $cardNew[$i-2] ==1 &&  $cardNew[$i-2] - $cardNew[$i-3] ==1 && $cardNew[$i-3] - $cardNew[$i-4] ==1){
                    $cardNewValue = array($cardNew[$i],$cardNew[$i-1],$cardNew[$i-2],$cardNew[$i-3],$cardNew[$i-4]);
                    $cards1 = array();
                    $cardsvalue1 = array();
                    $lastcards1 = array();
                    for ($j=0; $j < sizeof($cardsList); $j++) {
                        if (in_array($cardsList[$j]&0x0F,$cardNewValue) && !in_array($cardsList[$j]&0x0F,$cardsvalue1)) {
                            $cards1[] = $cardsList[$j];
                            $cardsvalue1[] = $cardsList[$j]&0x0F;
                        }else{
                            $lastcards1[] = $cardsList[$j];
                        }
                    }
                    $cardNew1 = array();
                    foreach ($lastcards1 as $key => $value) {
                        if(in_array($value&0x0F, $cardNew1))continue;
                        $cardNew1[] = $value&0x0F;
                    }
                    if(sizeof($cardNew1)<5)continue;

                    $this->sortCards($cardNew1);

                    for ($m=sizeof($cardNew1)-1; $m >= 4; $m--) { 
                        
                        if ($m >= 4) {
                            if($cardNew1[$m] - $cardNew1[$m-1] ==1 && $cardNew1[$m-1] - $cardNew1[$m-2] ==1 && $cardNew1[$m-2] - $cardNew1[$m-3] ==1 && $cardNew1[$m-3] - $cardNew1[$m-4] ==1){
                            $cardNewValue = array($cardNew1[$m],$cardNew1[$m-1],$cardNew1[$m-2],$cardNew1[$m-3],$cardNew1[$m-4]);
                            $cards2 = array();
                            $cardsvalue2 = array();
                            $lastcards2 = array();
                            for ($n=0; $n < sizeof($lastcards1); $n++) {
                                if (in_array($lastcards1[$n]&0x0F,$cardNewValue) && !in_array($lastcards1[$n]&0x0F,$cardsvalue2)) {
                                    $cards2[] = $lastcards1[$n];
                                    $cardsvalue2[] = $lastcards1[$n]&0x0F;
                                }else{
                                    $lastcards2[] = $lastcards1[$n];
                                }
                            }
                            $res = $this->isOrder($lastcards2);
                            if ($res) {
                                return true;
                            }
                        }
                        if($cardNew1[sizeof($cardNew1)-1]==14 && $cardNew1[0]==2 && $cardNew1[1]==3 && $cardNew1[2]==4 && $cardNew1[3]==5){
                                $cardNewValue = array($cardNew1[sizeof($cardNew1)-1],$cardNew1[0],$cardNew1[1],$cardNew1[2],$cardNew1[3]);
                                $cards2 = array();
                                $cardsvalue2 = array();
                                $lastcards2 = array();
                                for ($n=0; $n < sizeof($lastcards1); $n++) {
                                    if (in_array($lastcards1[$n]&0x0F,$cardNewValue) && !in_array($lastcards1[$n]&0x0F,$cardsvalue2)) {
                                        $cards2[] = $lastcards1[$n];
                                        $cardsvalue2[] = $lastcards1[$n]&0x0F;
                                    }else{
                                        $lastcards2[] = $lastcards1[$n];
                                    }
                                }
                                $res = $this->isOrder($lastcards2);
                                if ($res) {
                                    return true;
                                }
                            }
                        }
                    }

                }

                if($cardNew[sizeof($cardNew)-1]==14 && $cardNew[0]==2 && $cardNew[1]==3 && $cardNew[2]==4 && $cardNew[3]==5){
                    $cardNewValue = array($cardNew[sizeof($cardNew)-1],$cardNew[0],$cardNew[1],$cardNew[2],$cardNew[3]);
                    $cards1 = array();
                    $cardsvalue1 = array();
                    $lastcards1 = array();
                    for ($j=0; $j < sizeof($cardsList); $j++) {
                        if (in_array($cardsList[$j]&0x0F,$cardNewValue) && !in_array($cardsList[$j]&0x0F,$cardsvalue1)) {
                            $cards1[] = $cardsList[$j];
                            $cardsvalue1[] = $cardsList[$j]&0x0F;
                        }else{
                            $lastcards1[] = $cardsList[$j];
                        }
                    }
                    $cardNew1 = array();
                    foreach ($lastcards1 as $key => $value) {
                        if(in_array($value&0x0F, $cardNew1))continue;
                        $cardNew1[] = $value&0x0F;
                    }
                    if(sizeof($cardNew1)<5)continue;

                    $this->sortCards($cardNew1);

                    for ($m=sizeof($cardNew1)-1; $m >= 2; $m--) { 
                        
                        if ($m >= 4) {
                            if($cardNew1[$m] - $cardNew1[$m-1] ==1 && $cardNew1[$m-1] - $cardNew1[$m-2] ==1 && $cardNew1[$m-2] - $cardNew1[$m-3] ==1 && $cardNew1[$m-3] - $cardNew1[$m-4] ==1){
                                $cardNewValue = array($cardNew1[$m],$cardNew1[$m-1],$cardNew1[$m-2],$cardNew1[$m-3],$cardNew1[$m-4]);
                                $cards2 = array();
                                $cardsvalue2 = array();
                                $lastcards2 = array();
                                for ($n=0; $n < sizeof($lastcards1); $n++) {
                                    if (in_array($lastcards1[$n]&0x0F,$cardNewValue) && !in_array($lastcards1[$n]&0x0F,$cardsvalue2)) {
                                        $cards2[] = $lastcards1[$n];
                                        $cardsvalue2[] = $lastcards1[$n]&0x0F;
                                    }else{
                                        $lastcards2[] = $lastcards1[$n];
                                    }
                                }
                                $res = $this->isOrder($lastcards2);
                                if ($res) {
                                    return true;
                                }
                            }
                        }
                        if($cardNew1[sizeof($cardNew1)-1]==14 && $cardNew1[0]==2 && $cardNew1[1]==3 && $cardNew1[2]==4 && $cardNew1[3]==5){
                            $cardNewValue = array($cardNew1[sizeof($cardNew1)-1],$cardNew1[0],$cardNew1[1],$cardNew1[2],$cardNew1[3]);
                            $cards2 = array();
                            $cardsvalue2 = array();
                            $lastcards2 = array();
                            for ($n=0; $n < sizeof($lastcards1); $n++) {
                                if (in_array($lastcards1[$n]&0x0F,$cardNewValue) && !in_array($lastcards1[$n]&0x0F,$cardsvalue2)) {
                                    $cards2[] = $lastcards1[$n];
                                    $cardsvalue2[] = $lastcards1[$n]&0x0F;
                                }else{
                                    $lastcards2[] = $lastcards1[$n];
                                }
                            }
                            $res = $this->isOrder($lastcards2);
                            if ($res) {
                                return true;
                            }
                        }
                    }

                }
            }
        }
        return false;
    }
    //是否是6对子
    public function isSp6DuiZi($cardsList=array()){
        if (sizeof($cardsList)!=13)return false;
        return ($this->getDuiZiCount($cardsList) == 6)?true:false;
    }
    //是否是一条龙
    public function isSpOneLong($cardsList=array()){
        if (sizeof($cardsList)!=13)return false;
        return $this->isOrder($cardsList);
    }
    
    //是否是同花
    public function isSpOneColor($cardsList=array()){
        if (sizeof($cardsList)!=13)return false;
        return $this->isSameColor($cardsList);
    }

}
