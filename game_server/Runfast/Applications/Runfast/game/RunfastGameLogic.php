<?php

// /**
// /*斗地主算法
// /*
// /*/


// //牌类型
define("TP_INVALID",        0);//非法牌型
define("TP_DAN",            1);//单
define("TP_DUI",            2);//对子
define("TP_DUI_LIAN",       3);//连对
define("TP_3TIAO",          4);//三条
define("TP_3DAI1",          5);//三代一
define("TP_3DAI2",          6);//三带二
define("TP_4DAI1",          7);//4带一
define("TP_4DAI2",          8);//4带二
define("TP_PLANE_DAI0",     9);//飞机
define("TP_PLANE_DAI1",     10);//飞机
define("TP_PLANE_DAI2",     11);//飞机
define("TP_ORDER",          12);//顺子
define("TP_BOMB",           13);//炸弹
define("TP_KINGBOMB",       14);//王炸


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
        0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,   //黑 3 - 2
        0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,        //红 3 - A
        0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,        //梅 3 - A
        0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,             //方 3 - A
    );
    // private static $m_cardOne=array(
    //     0x0A,0x0B,0x05,0x05,0x0C,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,   //黑 A - K
    //     0x1A,0x1B,0x15,0x15,0x1C,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,   //红 A - K
    //     0x2A,0x2B,0x25,0x25,0x2C,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,   //梅 A - K
    //     0x3A,0x3B,0x35,0x35,0x3C,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,  //方 A - K
    //     0x41,0x42
    // );

    //获取数值
    public function getCardValue($cardData) { return $cardData&LOGIC_MASK_VALUE; } //十六进制前面四位表示牌的数值
    //获取花色
    public function getCardColor($cardData) { return ($cardData&LOGIC_MASK_COLOR)>>4; } //十六进制后面四位表示牌的花色 

    //------------------------------------------------------------------------------------------------------------------
    //创建一副牌
    public function createCards(){
        //洗牌
        $cardClone = self::$m_cardOne;
        srand ((float)microtime()*1000000*(GameManager::$_workerId+1));
        shuffle($cardClone);
        $playerCardsList = array();
        $diCards = array();
        for($i=0;$i<3;$i++){
            $playerCardsList[$i] = array_splice($cardClone, 0,16);
        }

        // $playerCardsList[0] = array(0x03,0x13,0x33,0x04,0x24,0x34,0x05,0x06,0x08,0x0D,0x0E,0x0F,0x23,0x25,0x26,0x41,0x42);
        // $playerCardsList[1] = array(0x16,0x17,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,0x2A,0x0B,0x3C,0x3D,0x3E,0x2C,0x2D,0x2E,);
        // $playerCardsList[2] = array(0x14,0x15,0x2B,0x2F,0x35,0x36,0x37,0x07,0x27,0x38,0x18,0x28,0x39,0x29,0x3A,0x3B,0x09);

        for ($i=0; $i < 3; $i++) { 
           $this->sortCards($playerCardsList[$i]);
        }

        $cardData['handcards'] = $playerCardsList;
        $cardData['dicards'] = $diCards;
        return $cardData;
    }

    public function test(){

        // $cardsList = array(0x03,0x04,0x05,0x06,0x07,0x08,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x3A,0x3B,0x3C);
        // $preOutCards = array(0x03,0x04,0x05,0x13,0x14,0x15);
        // $resultData = array();


        // $this->getDuiziLian($cardsList,$preOutCards,$resultData);
        // var_dump($resultData);
        // return ;


        $res = $this->createCards();
        for ($i=0; $i < 3; $i++) { 
            for ($j=0; $j < 17; $j++) { 
               echo "(".($res['handcards'][$i][$j]&0xF0).":".($res['handcards'][$i][$j]&0x0F).")\n";
            }
            echo "\n";
        }
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
        if(is_array($cardsList)&&is_array($preCardsList) && sizeof($preCardsList)>0){
                $cardType = $this->getCardsType($preCardsList);
                $this->sortCardsASC($cardsList);
                $this->sortCardsASC($preCardsList);
                 switch ($cardType) {
                    case TP_DAN:        return $this->getDan($cardsList,$preCardsList,$resCardsList);
                    case TP_DUI:        return $this->getDuizi($cardsList,$preCardsList,$resCardsList);
                    // case TP_3TIAO:      return $this->get3Tiao($cardsList,$preCardsList,$resCardsList);
                    case TP_DUI_LIAN:   return $this->getDuiziLian($cardsList,$preCardsList,$resCardsList);
                    // case TP_3DAI1:      return $this->get3TiaoDai1($cardsList,$preCardsList,$resCardsList);
                    case TP_3DAI2:      return $this->get3TiaoDai2($cardsList,$preCardsList,$resCardsList);
                    // case TP_4DAI1:      return $this->get4Dai1($cardsList,$preCardsList,$resCardsList);
                    // case TP_4DAI2:      return $this->get4Dai2($cardsList,$preCardsList,$resCardsList);
                    // case TP_PLANE_DAI0: return $this->getPlaneBuDai($cardsList,$preCardsList,$resCardsList);
                    // case TP_PLANE_DAI1: return $this->getPlaneDaiDan($cardsList,$preCardsList,$resCardsList);
                    case TP_PLANE_DAI2: return $this->getPlaneDaiDui($cardsList,$preCardsList,$resCardsList);
                    case TP_ORDER:      return $this->getOrder($cardsList,$preCardsList,$resCardsList);
                    case TP_BOMB:       return $this->getBomb($cardsList,$preCardsList,$resCardsList);
                    case TP_KINGBOMB:   return false;
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
            $resCardsList[] = array($cardsList[0]);
        }else{
            return false;
        }
        
        // if(sizeof($cardsList)>1 && $this->getCardValue($cardsList[0]) == $this->getCardValue($cardsList[1])){
        //     $resCardsList[] = $cardsList[1];
        // }
        // if(sizeof($cardsList)>2 && $this->getCardValue($cardsList[0]) == $this->getCardValue($cardsList[2])){
        //     $resCardsList[] = $cardsList[1];
        // }

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

                        if($val1 == 1 && $val2 == 2){
                            return -1;
                        }else if($val1 == 2 && $val2 == 1){
                            return 1;
                        }else if(($val1 == 1 ||$val1 == 2) && $val2 >2){
                            return 1;
                        }else if(($val2 == 1 ||$val2 == 2) && $val1 >2){
                            return -1;
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
                        if($val1 > $val2){
                            return 1;
                        }else if($val1 < $val2){
                            return -1;
                        }else{
                            return 0;
                        }
                    }break;
                    
                    case TP_DUI_LIAN:{ //连对
                        if(sizeof($cards1) == sizeof($cards2)){
                            $val1 = $this->getCardValue($cards1[0]);
                            $val2 = $this->getCardValue($cards2[0]);
                            if($val1 > $val2){
                                return 1;
                            }else if($val1 < $val2){
                                return -1;
                            }else{
                                return 0;
                            }
                        }else{
                            return -2;
                        }
                    }break;
                    
                    case TP_3DAI1:
                    case TP_3DAI2:{
                        $cardval1  = -1;
                        $cardval2  = -1;
                        $cards1Count = $this->getCardsvalueCount($cards1);
                        $cards2Count = $this->getCardsvalueCount($cards2);
                         foreach ($cards1Count as $val => $count) {
                             if($count == 3){
                                $cardval1 = $val;
                                break;
                             }
                         }
                          foreach ($cards2Count as $val => $count) {
                             if($count == 3){
                                $cardval2 = $val;
                                break;
                             }
                         }
                          if($cardval1 > $cardval2){
                                return 1;
                            }else if($cardval1 < $cardval2){
                                return -1;
                            }else{
                                return 0;
                            }
                    }break;
                    case TP_4DAI1:
                    case TP_4DAI2:{
                        $cardval1  = -1;
                        $cardval2  = -1;
                        $cards1Count = $this->getCardsvalueCount($cards1);
                        $cards2Count = $this->getCardsvalueCount($cards2);
                         foreach ($cards1Count as $val => $count) {
                             if($count == 4){
                                $cardval1 = $val;
                                break;
                             }
                         }
                          foreach ($cards2Count as $val => $count) {
                             if($count == 4){
                                $cardval2 = $val;
                                break;
                             }
                         }
                          if($cardval1 > $cardval2){
                                return 1;
                            }else if($cardval1 < $cardval2){
                                return -1;
                            }else{
                                return 0;
                            }
                    }break;
                    case TP_PLANE_DAI0:
                    case TP_PLANE_DAI1:
                    case TP_PLANE_DAI2:{
                         if(sizeof($cards1) == sizeof($cards2)){
                            $cardval1  = -1;
                            $cardval2  = -1;
                            $cards1Count = $this->getCardsvalueCount($cards1);
                            $cards2Count = $this->getCardsvalueCount($cards2);
                             foreach ($cards1Count as $val => $count) {
                                 if($count == 3 ){
                                    if($cardval1 == -1 || $val  < $cardval1){
                                        $cardval1 = $val;
                                    }
                                 }
                             }
                              foreach ($cards2Count as $val => $count) {
                                 if($count == 3 ){
                                    if($cardval1 == -1 || $val  < $cardval1){
                                        $cardval2 = $val;
                                    }
                                    
                                 }
                             }
                            if($cardval1 > $cardval2){
                                return 1;
                            }else if($cardval1 < $cardval2){
                                return -1;
                            }else{
                                return 0;
                            }
                        }else{
                            return -2;
                        }
                    }break;
                    case TP_ORDER:{ // 顺子
                        if(sizeof($cards1) == sizeof($cards2)){
                            $val1 = $this->getCardValue($cards1[0]);
                            $val2 = $this->getCardValue($cards2[0]);
                            if($val1 > $val2){
                                return 1;
                            }else if($val1 < $val2){
                                return -1;
                            }else{
                                return 0;
                            }
                        }else{
                            return -2;
                        }
                    }break;
                    // case TP_BOMB:{}break;
                    // case TP_KINGBOMB:{}break;
                    default:return -2;break;
                }
                return -2;
                //===============================================
            }

        }else if(($cardsType1 != TP_KINGBOMB&&$cardsType1 != TP_KINGBOMB) && ($cardsType1 == TP_BOMB || $cardsType2 == TP_BOMB)){
            if($cardsType1 == TP_BOMB && $cardsType2 == TP_BOMB){
                $val1 = $this->getCardValue($cards1[0]);
                $val2 = $this->getCardValue($cards2[0]);
                if($val1 > $val2){
                    return 1;
                }else if($val1 < $val2){
                    return -1;
                }else{
                    return 0;
                }
            }else if($cardsType1 == TP_BOMB){
                return 1;
            }else if($cardsType2 == TP_BOMB){
                return -1;
            }else{
                return -2;
            }

        }else if($cardsType1 == TP_KINGBOMB){
            return 1;
        }else if($cardsType2 == TP_KINGBOMB){
            return -1;
        }else{
            return -2;
        }
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
                    // if($this->isKingBomb($cardsList))return TP_KINGBOMB;
                    }break;
            case 3:{
                    // if($this->is3Tiao($cardsList))return TP_3TIAO;
                    // if($this->isKingBomb($cardsList))return TP_KINGBOMB;
                    }break;
            case 4:{
                    // if($this->is3Tiao1($cardsList))return TP_3DAI1;
                    if($this->isDuiziLian($cardsList))return TP_DUI_LIAN;
                    if($this->isBomb($cardsList))return TP_BOMB;
                    }break;
            case 5:{
                    if($this->is3Tiao2($cardsList))return TP_3DAI2;
                    // if($this->is4Dai1($cardsList))return TP_4DAI1;
                    if($this->isOrder($cardsList))return TP_ORDER;
                    }break;
            case 6:{
                    if($this->isDuiziLian($cardsList))return TP_DUI_LIAN;
                    // if($this->is4Dai2($cardsList))return TP_4DAI2;
                    if($this->isOrder($cardsList))return TP_ORDER;
                    // if($this->isPlane($cardsList))return TP_PLANE_DAI0;
                    }break;
            case 7:{
                    if($this->isOrder($cardsList))return TP_ORDER;
                    }break;
            case 8:{
                    if($this->isDuiziLian($cardsList))return TP_DUI_LIAN;
                    // if($this->isPlaneDai1($cardsList))return TP_PLANE_DAI1;
                    if($this->isOrder($cardsList))return TP_ORDER;
                    // if($this->is4Dai2($cardsList))return TP_4DAI2;
                    }break;
            case 9:{
                    // if($this->isPlane($cardsList))return TP_PLANE_DAI0;
                    if($this->isOrder($cardsList))return TP_ORDER;
                    }break;
            case 10:{
                    if($this->isDuiziLian($cardsList))return TP_DUI_LIAN;
                    if($this->isPlaneDai2($cardsList))return TP_PLANE_DAI2;
                    if($this->isOrder($cardsList))return TP_ORDER;
                    }break;
            case 11:{
                    if($this->isOrder($cardsList))return TP_ORDER;
                    }break;
            case 12:{
                    if($this->isDuiziLian($cardsList))return TP_DUI_LIAN;
                    // if($this->isPlane($cardsList))return TP_PLANE_DAI0;
                    // if($this->isPlaneDai1($cardsList))return TP_PLANE_DAI1;
                    if($this->isOrder($cardsList))return TP_ORDER;
                    }break;
            case 13:{

                    }break;
            case 14:{
                    if($this->isDuiziLian($cardsList))return TP_DUI_LIAN;
                    }break;
            case 15:{
                    if($this->isPlaneDai2($cardsList))return TP_PLANE_DAI2;
                    // if($this->isPlane($cardsList))return TP_PLANE_DAI0;
                    }break;
            case 16:{
                    if($this->isDuiziLian($cardsList))return TP_DUI_LIAN;
                    // if($this->isPlaneDai1($cardsList))return TP_PLANE_DAI1;
                    }break;
            case 17:{

                    }break;
            case 18:{
                    if($this->isDuiziLian($cardsList))return TP_DUI_LIAN;
                    // if($this->isPlane($cardsList))return TP_PLANE_DAI0;
                    }break;
            case 19:{

                    }break;
            case 20:{
                    if($this->isDuiziLian($cardsList))return TP_DUI_LIAN;
                    if($this->isPlaneDai2($cardsList))return TP_PLANE_DAI2;
                    }break;
            default:return TP_INVALID;break;
        }
        return TP_INVALID;
    }


//=================================================================
//组合算法
public function combination($arr, $m)
{
    $r = array();
    $arrClone = array_unique($arr,SORT_REGULAR);
    foreach($arrClone as $key => $value){
        if($m == 1){
            $r[] = array($arrClone[$key]);
        }else{
            $lastArr = array_slice($arr, $key + 1);
            $c = $this->combination($lastArr, $m-1);
            foreach ($c as $v) {
                $r[] = array_merge(array($arrClone[$key]), $v);
            }
        }
        
        
    }
    return $r;
}
public function checkAllOutCards($cardsList)
{
    $cardsType = $this->getCardsType($cardsList);
    if ($cardsType != TP_INVALID) {
        return true;
    }
    $cardsCount = $this->getCardsvalueCount($cardsList);
    $threeCardsList = array();
    foreach ($cardsCount as $value => $count) {
        if ($count == 3) {
            $threeCardsList[] = $value;
        }
    }
    asort($threeCardsList);
    $threeCardsList = array_values($threeCardsList);
    $cnt = count($threeCardsList);
    if ($cnt < 1) {
        return false;
    }
    $maxcnt = 1;
    $num = 1;
    for ($i=0; $i < ($cnt - 1); $i++) { 
        if (isset($threeCardsList[$i + 1]) && $threeCardsList[$i] != $threeCardsList[$i + 1] - 1) {
            $num = 1;
        }else if(isset($threeCardsList[$i + 1]) && $threeCardsList[$i] == $threeCardsList[$i + 1] - 1){
            $num++;
            if ($maxcnt < $num) {
                $maxcnt = $num;
            }
        }
    }
    $maxCount = $maxcnt * 5;
    $nowCount = count($cardsList);
    if ($maxCount >= $nowCount) {
        return true;
    }else{
        return false;
    }
}
public function findMaxCard($cardsList)
{
    $maxCard = 0;
    $maxValue = 0;
    foreach ($cardsList as $key => $card) {
        $value = $this->getCardValue($card);
        if ($value > $maxValue) {
            $maxValue = $value;
            $maxCard = $card;
        }
    }
    return $maxCard;
}
public function getCardsvalueCount($cardsList){
    $this->sortCardsASC($cardsList);
    $res = array();
    for ($i=0; $i < sizeof($cardsList); $i++) { 
        $val = $this->getCardValue($cardsList[$i]);
        if(isset($res[$val])){
            $res[$val]++;
        }else{
            $res[$val] = 1;
        }
    }
    return $res;
}

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

//是否连对
private function isDuiziLian($cardsList){
    if(sizeof($cardsList)>=4&&sizeof($cardsList)%2==0){

        $valList = array();
        $valCountList = $this->getCardsvalueCount($cardsList);
        foreach ($valCountList as $val => $count) {
            //2和大小王存在肯定不能组成连对
            if($val == 1||$val == 2||$val==15)return false;
            if($count !=2){
                return false;
            }else{
                $valList[] = $val;
            }
        }
        if(sizeof($valList) < 2)return false;
        $this->sortValueASC($valList);
        for ($i=1; $i < sizeof($valList); $i++) { 
            if($valList[$i]-$valList[$i-1] != 1)return false;
        }
        return true;
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

//是否3-1
private function is3Tiao1($cardsList){
    if(sizeof($cardsList) == 4){
         $valCount = $this->getCardsvalueCount($cardsList);
         if(sizeof($valCount)!=2)return false;
         foreach ($valCount as $val => $count) {
             if($count != 1 && $count !=3)return false;
         }
        return true;
    }else{
        return false;
    }
}

//是否3-2
private function is3Tiao2($cardsList){
    if(sizeof($cardsList) == 5){
         $valCount = $this->getCardsvalueCount($cardsList);
         $is3Tiao2 = false;
         foreach ($valCount as $val => $count) {
             if($count ==3){
                $is3Tiao2 = true;
             }
         }
        return $is3Tiao2;
    }else{
        return false;
    }
}

//是否4-1
private function is4Dai1($cardsList){
    //  if(sizeof($cardsList) == 5){
    //      $valCount = $this->getCardsvalueCount($cardsList);
    //      if(sizeof($valCount)!=2)return false;
    //      foreach ($valCount as $val => $count) {
    //          if($count != 1 && $count !=4)return false;
    //      }
    //     return true;
    // }else{
    //     return false;
    // }
    return false;
}

//是否4-2
private function is4Dai2($cardsList){
     if(sizeof($cardsList) == 6 || sizeof($cardsList) == 8){
         $valCount = $this->getCardsvalueCount($cardsList);
         if(sizeof($valCount)!=2&&sizeof($valCount)!=3)return false;
         foreach ($valCount as $val => $count) {
            if (sizeof($cardsList) == 6) {
                if (sizeof($valCount)==2) {
                    if($count != 2 && $count !=4)return false;
                }else if (sizeof($valCount)==3) {
                    if($count != 1 && $count !=4)return false;
                } 
            }else if (sizeof($cardsList) == 8) {
                if($count != 2 && $count !=4)return false;
            }
         }
        return true;
    }else{
        return false;
    }
}

//是否飞机
private function isPlane($cardsList){
     if(sizeof($cardsList) >= 6 && sizeof($cardsList)%3==0){
         $valCount = $this->getCardsvalueCount($cardsList);
         foreach ($valCount as $val => $count) {
             if($count !=3)return false;
         }

         $temp = array();
         foreach ($valCount as $val => $count) {
             $temp[] = $val;
         }

         $this->sortValueASC($temp);
         for ($i=0; $i < sizeof($temp)-1; $i++) { 
             if($temp[$i+1]-$temp[$i]==1){
                continue;
             }else{
                return false;
             }
         }

        return true;
    }else{
        return false;
    }
}

//是否飞机-1
private function isPlaneDai1($cardsList){
      if(sizeof($cardsList) >= 8 && sizeof($cardsList)%4==0){
         $valCount = $this->getCardsvalueCount($cardsList);
         $temp = array();
         foreach ($valCount as $val => $count) {
            if($count >= 3){
                 $temp[] = $val;
            }
         }
         if(sizeof($temp) != sizeof($cardsList)/4)return false;
         $this->sortValueASC($temp);
         for ($i=0; $i < sizeof($temp)-1; $i++) { 
             if($temp[$i+1]-$temp[$i]==1){
                continue;
             }else{
                return false;
             }
         }

        return true;
    }else{
        return false;
    }
}

//是否飞机-2
private function isPlaneDai2($cardsList){
    if(sizeof($cardsList) >= 10 && sizeof($cardsList)%5==0){

        $valCount = $this->getCardsvalueCount($cardsList);
        $temp3 = array();
        $temp2 = array();
        foreach ($valCount as $val => $count) {
           if($count == 3){
                $temp3[] = $val;
           }
        }
        // if(sizeof($temp3) != sizeof($cardsList)/5)return false;

        $this->sortValueASC($temp3);
        $maxcnt = 1;
        $num = 1;
        $cnt = count($temp3);
        for ($i=0; $i < ($cnt - 1); $i++) { 
            if (isset($temp3[$i + 1]) && $temp3[$i] != $temp3[$i + 1] - 1) {
                $num = 1;
            }else if(isset($temp3[$i + 1]) && $temp3[$i] == $temp3[$i + 1] - 1){
                $num++;
                if ($maxcnt < $num) {
                    $maxcnt = $num;
                }
            }
        }
        if ($maxcnt * 5 != sizeof($cardsList)) {
            return false;
        }
        return true;
    }else{
        return false;
    }
}

//是否顺子
private function isOrder($cardsList){
    if(sizeof($cardsList)<5)return false;
    $this->sortCardsASC($cardsList);
    for ($i=0; $i < sizeof($cardsList); $i++) { 
        $val = $this->getCardValue($cardsList[$i]);
        //打小鬼，2 都不不能组成顺子
        if($val==1 ||$val==2||$val==15)return false;  
    }
    for ($i=0; $i < sizeof($cardsList)-1; $i++) { 
        if($this->getCardValue($cardsList[$i+1])-$this->getCardValue($cardsList[$i])==1){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

//是否炸弹
private function isBomb($cardsList){
    if(sizeof($cardsList) == 4){
        $this->initIndex($cardsList);
        $cardValue = $this->getCardValue($cardsList[0]);
        $cardNextValue = $this->getCardValue($cardsList[1]);
        $cardNextNextValue = $this->getCardValue($cardsList[2]);
        $cardNextNextNextValue = $this->getCardValue($cardsList[3]);
        if($cardValue == $cardNextValue && $cardNextValue==$cardNextNextValue && $cardNextNextValue==$cardNextNextNextValue){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

//是否王炸
private function isKingBomb($cardsList){
    return false;
    if(sizeof($cardsList) == 3){
        foreach ($cardsList as $key => $card) {
            if ($this->getCardValue($card) != 14) {
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}


//-----------------------------
//取牌

//取单牌
public function getDan($cardsList,$preOutCards,&$resultData){
    $resultData = array();
    if(sizeof($preOutCards) == 1 && sizeof($cardsList) >= sizeof($preOutCards)){
        $preCardColor = $this->getCardColor($preOutCards[0]);
        $preCardValue = $this->getCardValue($preOutCards[0]);

        if($preCardColor < 4){
             $temp = array();
             $temp1 = array();
             $temp2 = array();
            
            $valCount = $this->getCardsvalueCount($cardsList);
            foreach ($valCount as $val=> $count) {
                if($count == 1){
                    $temp1[] = $val;
                }else{
                    $temp2[] = $val;
                }
            }

            for ($i=0; $i < sizeof($cardsList); $i++) { 
                if(in_array($this->getCardValue($cardsList[$i]), $temp1) && ($this->getCardValue($cardsList[$i]) > $preCardValue || $this->getCardColor($cardsList[$i]) == 4)){
                    $temp[] = array($cardsList[$i]);
                }
            }

             for ($i=0; $i < sizeof($cardsList); $i++) { 
                if(in_array($this->getCardValue($cardsList[$i]), $temp2) && ($this->getCardValue($cardsList[$i]) > $preCardValue || $this->getCardColor($cardsList[$i]) == 4)){
                    $temp[] = array($cardsList[$i]);
                }
            }


            $resultData = $temp;
        }else{
            if($preCardValue == 1){
                $this->sortCards($cardsList);
                if($this->getCardValue($cardsList[0]) ==2){
                    $resultData[] = array($cardsList[0]);
                }
            }
        }
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

         $temp = array();
         $temp1 = array();
         $temp2 = array();
        
        $this->sortCardsASC($cardsList);
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($val > $preCardValue){
                if($count == 2){
                    $temp1[] = $val;
                }else if($count > 2){
                    $temp2[] = $val;
                }
            }
        }

        $list = $cardsList;
        for ($i=0; $i < sizeof($temp1); $i++) { 
            $group = array();
            $this->sortCardsASC($list);
             for ($j=0; $j < sizeof($list)-1; $j++) { 
                if($temp1[$i] == $this->getCardValue($list[$j]) && $temp1[$i] == $this->getCardValue($list[$j+1])){
                    $group[] = $list[$j];
                    $group[] = $list[$j+1];
                    unset($list[$j]);
                    unset($list[$j+1]);
                    break;
                }
            }
            $temp[] = $group;
        }
       

         $list = $cardsList;
        for ($i=0; $i < sizeof($temp2); $i++) { 
            $group = array();
            $this->sortCardsASC($list);
             for ($j=0; $j < sizeof($list)-1;$j++) { 
                if($temp2[$i] == $this->getCardValue($list[$j]) &&$temp2[$i] == $this->getCardValue($list[$j+1])  ){
                    $group[] = $list[$j];
                    $group[] = $list[$j+1];
                    unset($list[$j]);
                    unset($list[$j+1]);
                    break;
                }
            }
            $temp[] = $group;
        }

        $resultData = $temp;
    }
    $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}

//取连对
public function getDuiziLian($cardsList,$preOutCards=array(),&$resultData){
    $resultData = array();
    if(sizeof($preOutCards) >= 4 && sizeof($preOutCards)%2==0 && sizeof($cardsList) >= sizeof($preOutCards)){
        $this->sortCardsASC($preOutCards);

        $preCardColor = $this->getCardColor($preOutCards[0]);
        $preCardValue = $this->getCardValue($preOutCards[0]);

         $temp = array();
         $temp1 = array();
        // $temp2 = array();
        
        
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($val > $preCardValue && $val != 15){
                if($count >= 2){
                    $temp1[] = $val;
                }
            }
        }
        //大牌的数量比sizeof($preOutCards)少
        //if(sizeof($temp1)<(sizeof($preOutCards)/2))return false;
        //连对最后一张是A表示最大的
       // if($this->getCardValue($preOutCards[sizeof($preOutCards)-1]) == 14)return false;
        if(sizeof($temp1)>=(sizeof($preOutCards)/2) || $this->getCardValue($preOutCards[sizeof($preOutCards)-1]) != 14){
                 $list = $cardsList;
                $this->sortValueASC($temp1);
                $groupBase = array();
                for ($j=0; $j < sizeof($temp1)-(sizeof($preOutCards)/2)+1; $j++) { 
                    $haveTag = true;
                    for ($i=0; $i < sizeof($preOutCards)/2 - 1; $i++) { 
                        if($temp1[$j+$i+1] - $temp1[$j+$i] != 1){
                            $haveTag = false;
                            break;
                        }
                    }
                    if($haveTag){
                        $gp = array();
                        for ($i=0; $i < sizeof($preOutCards)/2; $i++) { 
                            $gp[] = $temp1[$j+$i];
                        }
                        $groupBase[] = $gp;
                    }
                }
                // var_dump( $groupBase );

                for ($i=0; $i < sizeof($groupBase); $i++) { 
                    $group = array();
                    for ($q=0; $q < sizeof($groupBase[$i]); $q++) { 
                         $list = $cardsList;
                        $this->sortCardsASC($list);
                        $delcardCount = 0;
                         for ($j=0; $j < sizeof($list); $j++) { 
                            if($groupBase[$i][$q] == $this->getCardValue($list[$j])){
                                $group[] = $list[$j];
                               // unset($list[$j]);
                                $delcardCount++;
                                if($delcardCount >=2)break;
                            }
                        }
                    }
                    $temp[] = $group;
                }

                $resultData = $temp;
        }
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

         $temp = array();
         $temp1 = array();
         $temp2 = array();
        
        $this->sortCardsASC($cardsList);
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($val > $preCardValue){
                if($count == 3){
                    $temp1[] = $val;
                }else if($count > 3){
                    $temp2[] = $val;
                }
            }
        }

        $list = $cardsList;
        for ($i=0; $i < sizeof($temp1); $i++) { 
            $group = array();
            $this->sortCardsASC($list);
             for ($j=0; $j < sizeof($list)-2; $j++) { 
                if($temp1[$i] == $this->getCardValue($list[$j]) && $temp1[$i] == $this->getCardValue($list[$j+1])&& $temp1[$i] == $this->getCardValue($list[$j+2])){
                    $group[] = $list[$j];
                    $group[] = $list[$j+1];
                    $group[] = $list[$j+2];
                    unset($list[$j]);
                    unset($list[$j+1]);
                    unset($list[$j+2]);
                    break;
                }
            }
            $temp[] = $group;
        }
       

         $list = $cardsList;
        for ($i=0; $i < sizeof($temp2); $i++) { 
            $group = array();
            $this->sortCardsASC($list);
             for ($j=0; $j < sizeof($list)-2;$j++) { 
                if($temp2[$i] == $this->getCardValue($list[$j]) &&$temp2[$i] == $this->getCardValue($list[$j+1]) && $temp2[$i] == $this->getCardValue($list[$j+2]) ){
                    $group[] = $list[$j];
                    $group[] = $list[$j+1];
                    $group[] = $list[$j+2];
                    unset($list[$j]);
                    unset($list[$j+1]);
                    unset($list[$j+2]);
                    break;
                }
            }
            $temp[] = $group;
        }
        $resultData = $temp;
    }
    $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}

//取3-1
public function get3TiaoDai1($cardsList,$preOutCards=array(),&$resultData){
    $resultData = array();
   if(sizeof($preOutCards) == 4 && sizeof($cardsList) >= sizeof($preOutCards)){
         $prevalCount = $this->getCardsvalueCount($preOutCards);
         $preCardValue  = -1;
         foreach ($prevalCount as $val => $count) {
             if($count == 3){
                $preCardValue = $val;
                break;
             }
         }
         $temp = array();
         $temp1 = array();//3张
         $temp2 = array();//4张
        $this->sortCardsASC($cardsList);
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($val > $preCardValue){
                if($count == 3){
                    $temp1[] = $val;
                }else if($count > 3){
                    $temp2[] = $val;
                }
            }
        }

        $list = $cardsList;
        for ($i=0; $i < sizeof($temp1); $i++) { 
            $group = array();
            $this->sortCardsASC($list);
             for ($j=0; $j < sizeof($list)-2; $j++) { 
                if($temp1[$i] == $this->getCardValue($list[$j]) && $temp1[$i] == $this->getCardValue($list[$j+1])&& $temp1[$i] == $this->getCardValue($list[$j+2])){
                    $group[] = $list[$j];
                    $group[] = $list[$j+1];
                    $group[] = $list[$j+2];
                    unset($list[$j]);
                    unset($list[$j+1]);
                    unset($list[$j+2]);
                    break;
                }
            }
            $temp[] = $group;
        }
       

         $list = $cardsList;
        for ($i=0; $i < sizeof($temp2); $i++) { 
            $group = array();
            $this->sortCardsASC($list);
             for ($j=0; $j < sizeof($list)-2;$j++) { 
                if($temp2[$i] == $this->getCardValue($list[$j]) &&$temp2[$i] == $this->getCardValue($list[$j+1]) && $temp2[$i] == $this->getCardValue($list[$j+2]) ){
                    $group[] = $list[$j];
                    $group[] = $list[$j+1];
                    $group[] = $list[$j+2];
                    unset($list[$j]);
                    unset($list[$j+1]);
                    unset($list[$j+2]);
                    break;
                }
            }
            $temp[] = $group;
        }

        $resultData = $temp;


        //----
        $temp3 = array();//1张
        $temp4 = array();//2张
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($count == 1){
                $temp3[] = $val;
            }
        }
        foreach ($valCount as $val=> $count) {
            if($count == 2){
                $temp3[] = $val;
            }
        }
        foreach ($valCount as $val=> $count) {
            if($count == 3){
                $temp3[] = $val;
            }
        }
        foreach ($valCount as $val=> $count) {
            if($count == 4){
                $temp3[] = $val;
            }
        }

        $resData = array();
        if(sizeof($resultData) > 0){
            for ($i=0; $i < sizeof($resultData); $i++) { 
                $isHave = false;
                for ($j=0; $j < sizeof($temp3); $j++) { 
                    if($this->getCardValue($resultData[$i][0]) != $temp3[$j]){
                        $isHave = true;
                        for ($q=0; $q < sizeof($cardsList);$q++) {
                            if($temp3[$j] == $this->getCardValue($cardsList[$q])){
                               $resultData[$i][] = $cardsList[$q];
                                break;
                            }
                        }
                        break;
                    }
                }
                if(!$isHave){
                    $resultData[$i] = array();
                }
            }
            for ($i=0; $i < sizeof($resultData); $i++) { 
                if(sizeof($resultData[$i])>0){
                    $resData[] = $resultData[$i];
                }
            }
        }
        $resultData = $resData;
    }
    $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;

}

//取3-2
public function get3TiaoDai2($cardsList,$preOutCards=array(),&$resultData){
    $resultData = array();
   if(sizeof($preOutCards) == 5 && sizeof($cardsList) >= sizeof($preOutCards)){
         $prevalCount = $this->getCardsvalueCount($preOutCards);
         $preCardValue  = -1;
         foreach ($prevalCount as $val => $count) {
             if($count == 3){
                $preCardValue = $val;
                break;
             }
         }
         $temp = array();
         $temp1 = array();//3张
         $temp2 = array();//4张
        $this->sortCardsASC($cardsList);
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($val > $preCardValue){
                if($count == 3){
                    $temp1[] = $val;
                }else if($count > 3){
                    $temp2[] = $val;
                }
            }
        }
        $list = $cardsList;
        for ($i=0; $i < sizeof($temp1); $i++) { 
            $group = array();
            $this->sortCardsASC($list);
             for ($j=0; $j < sizeof($list)-2; $j++) { 
                if($temp1[$i] == $this->getCardValue($list[$j]) && $temp1[$i] == $this->getCardValue($list[$j+1])&& $temp1[$i] == $this->getCardValue($list[$j+2])){
                    $group[] = $list[$j];
                    $group[] = $list[$j+1];
                    $group[] = $list[$j+2];
                    unset($list[$j]);
                    unset($list[$j+1]);
                    unset($list[$j+2]);
                    break;
                }
            }
            $temp[] = $group;
        }
       

         $list = $cardsList;
        for ($i=0; $i < sizeof($temp2); $i++) { 
            $group = array();
            $this->sortCardsASC($list);
             for ($j=0; $j < sizeof($list)-2;$j++) { 
                if($temp2[$i] == $this->getCardValue($list[$j]) &&$temp2[$i] == $this->getCardValue($list[$j+1]) && $temp2[$i] == $this->getCardValue($list[$j+2]) ){
                    $group[] = $list[$j];
                    $group[] = $list[$j+1];
                    $group[] = $list[$j+2];
                    unset($list[$j]);
                    unset($list[$j+1]);
                    unset($list[$j+2]);
                    break;
                }
            }
            $temp[] = $group;
        }

        $resultData = $temp;

        $temp3 = $this->combination($cardsList,2);
        $resData = array();
        if(sizeof($resultData) > 0){
            for ($i=0; $i < sizeof($resultData); $i++) { 
                $isHave = false;
                for ($j=0; $j < sizeof($temp3); $j++) { 

                        if($this->getCardValue($resultData[$i][0]) != $this->getCardValue($temp3[$j][0]) && $this->getCardValue($resultData[$i][0]) != $this->getCardValue($temp3[$j][1])){
                            $isHave = true;
                            // for ($q=0; $q < sizeof($cardsList)-1;$q++) {
                            //     if($temp3[$j][$a] == $this->getCardValue($cardsList[$q])){
                            //        $resultData[$i][] = $cardsList[$q][$a];
                            //         break;
                            //     }
                            // }
                            $resultData[$i][] = $temp3[$j][0];
                            $resultData[$i][] = $temp3[$j][1];
                            break;
                        }

                }
                if(!$isHave){
                    $resultData[$i] = array();
                }
            }
            for ($i=0; $i < sizeof($resultData); $i++) { 
                if(sizeof($resultData[$i])>0){
                    $resData[] = $resultData[$i];
                }
            }
        }
        $resultData = $resData;
    }
     $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}

//取4-2
public function get4Dai2($cardsList,$preOutCards=array(),&$resultData){
   $resultData = array();
   if((sizeof($preOutCards) == 6||sizeof($preOutCards) == 8) && sizeof($cardsList) >= sizeof($preOutCards)){
         $prevalCount = $this->getCardsvalueCount($preOutCards);
         $preCardValue  = -1;
         foreach ($prevalCount as $val => $count) {
             if($count == 4){
                $preCardValue = $val;
                break;
             }
         }
         $temp = array();
         $temp1 = array();//4张
        $this->sortCardsASC($cardsList);
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($val > $preCardValue){
                if($count == 4){
                    $temp1[] = $val;
                }
            }
        }

        $list = $cardsList;
        for ($i=0; $i < sizeof($temp1); $i++) { 
            $group = array();
            $this->sortCardsASC($list);
             for ($j=0; $j < sizeof($list)-3; $j++) { 
                if($temp1[$i] == $this->getCardValue($list[$j]) && $temp1[$i] == $this->getCardValue($list[$j+1])&& $temp1[$i] == $this->getCardValue($list[$j+2]) && $temp1[$i] == $this->getCardValue($list[$j+3])){
                    $group[] = $list[$j];
                    $group[] = $list[$j+1];
                    $group[] = $list[$j+2];
                    $group[] = $list[$j+3];
                    unset($list[$j]);
                    unset($list[$j+1]);
                    unset($list[$j+2]);
                    unset($list[$j+3]);
                    break;
                }
            }
            $temp[] = $group;
        }

        $resultData = $temp;
        $this->sortCardsASC($list);
        $temp3 = array();//1张
        $temp5 = array();
        $valCount = $this->getCardsvalueCount($list);
        foreach ($valCount as $val=> $count) {
            if($count == 1){
                $temp3[] = $val;
            }
        }
        foreach ($valCount as $val=> $count) {
            if($count == 2){
                $temp3[] = $val;
                $temp5[] = $val;
            }
        }
        foreach ($valCount as $val=> $count) {
            if($count == 3){
                $temp3[] = $val;
                $temp5[] = $val;
            }
        }
        foreach ($valCount as $val=> $count) {
            if($count == 4){
                $temp3[] = $val;
                $temp5[] = $val;
                $temp5[] = $val;
            }
        }
        $resData = array();
        if(sizeof($resultData) > 0){
            if(sizeof($preOutCards) == 6){
                $twoCards = array();
                foreach ($list as $key => $value) {
                    if ($this->getCardValue($value) == $temp3[0]) {
                        $twoCards[] = $value;
                        if (count($twoCards) == 2) {
                            break;
                        }
                    }else if ($this->getCardValue($value) == $temp3[1]) {
                        $twoCards[] = $value;
                        if (count($twoCards) == 2) {
                            break;
                        }
                    }
                }
                $resData[] = $twoCards[0];
                $resData[] = $twoCards[1];
            }else if(sizeof($preOutCards) == 8){
                $twoCards1 = array();
                $twoCards2 = array();
                foreach ($list as $key => $value) {
                    if ($this->getCardValue($value) == $temp5[0]) {
                        $twoCards1[] = $value;
                        if (count($twoCards1) == 2) {
                            break;
                        }
                    }
                }
                foreach ($list as $key => $value) {
                    if ($this->getCardValue($value) == $temp5[1]) {
                        $twoCards2[] = $value;
                        if (count($twoCards2) == 2) {
                            break;
                        }
                    }
                }
                $resData[] = $twoCards1[0];
                $resData[] = $twoCards1[1];
                $resData[] = $twoCards2[0];
                $resData[] = $twoCards2[1];
            }
            foreach ($resData as $key => $value) {
                $resultData[0][] = $value;
            }
            // for ($i=0; $i < sizeof($resultData); $i++) { 
            //     $isHave = false;
            //     for ($j=0; $j < sizeof($temp3); $j++) { 
            //         if($this->getCardValue($resultData[$i][0]) != $temp3[$j]){
            //             $isHave = true;
            //             for ($q=0; $q < sizeof($cardsList);$q++) {
            //                 if($temp3[$j] == $this->getCardValue($cardsList[$q])){
            //                    $resultData[$i][] = $cardsList[$q];
            //                     break;
            //                 }
            //             }
            //             break;
            //         }
            //     }
            //     if(!$isHave){
            //         $resultData[$i] = array();
            //     }
            // }
            // for ($i=0; $i < sizeof($resultData); $i++) { 
            //     if(sizeof($resultData[$i])>0){
            //         $resData[] = $resultData[$i];
            //     }
            // }
        }
    }
    $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}

//取4-1
public function get4Dai1($cardsList,$preOutCards=array(),&$resultData){
    return false;
}

//取plane-0
public function getPlaneBuDai($cardsList,$preOutCards=array(),&$resultData){
     $resultData = array();
    if(sizeof($preOutCards) >= 6 && sizeof($preOutCards)%3==0 && sizeof($cardsList) >= sizeof($preOutCards)){
        $this->sortCardsASC($preOutCards);

        $preCardColor = $this->getCardColor($preOutCards[0]);
        $preCardValue = $this->getCardValue($preOutCards[0]);

         $temp = array();
         $temp1 = array();
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($val > $preCardValue && $val != 15){
                if($count >= 3){
                    $temp1[] = $val;
                }
            }
        }
        //大牌的数量比sizeof($preOutCards)少
        //连对最后一张是A表示最大的
        if(sizeof($temp1)>=(sizeof($preOutCards)/3) || $this->getCardValue($preOutCards[sizeof($preOutCards)-1]) != 14){
                 $list = $cardsList;
                $this->sortValueASC($temp1);
                $groupBase = array();
                for ($j=0; $j < sizeof($temp1)-(sizeof($preOutCards)/3)+1; $j++) { 
                    $haveTag = true;
                    for ($i=0; $i < sizeof($preOutCards)/3 - 1; $i++) { 
                        if($temp1[$j+$i+1] - $temp1[$j+$i] != 1){
                            $haveTag = false;
                            break;
                        }
                    }
                    if($haveTag){
                        $gp = array();
                        for ($i=0; $i < sizeof($preOutCards)/3; $i++) { 
                            $gp[] = $temp1[$j+$i];
                        }
                        $groupBase[] = $gp;
                    }
                }
                // var_dump( $groupBase );

                for ($i=0; $i < sizeof($groupBase); $i++) { 
                    $group = array();
                    for ($q=0; $q < sizeof($groupBase[$i]); $q++) { 
                         $list = $cardsList;
                        $this->sortCardsASC($list);
                        $delcardCount = 0;
                         for ($j=0; $j < sizeof($list); $j++) { 
                            if($groupBase[$i][$q] == $this->getCardValue($list[$j])){
                                $group[] = $list[$j];
                               // unset($list[$j]);
                                $delcardCount++;
                                if($delcardCount >=3)break;
                            }
                        }
                    }
                    $temp[] = $group;
                }

                $resultData = $temp;
        }
    }
    $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}

//取plane-1
public function getPlaneDaiDan($cardsList,$preOutCards=array(),&$resultData){
     $resultData = array();
    if(sizeof($preOutCards) >= 8 && sizeof($preOutCards)%4==0 && sizeof($cardsList) >= sizeof($preOutCards)){
        $valCount = $this->getCardsvalueCount($preOutCards);
        foreach ($valCount as $val=> $count) {
            if($count == 3){
                    $pre3tiao[] = $val;
            }
        }
         $this->sortValueASC($pre3tiao);
        $preCardValue = $pre3tiao[0];

         $temp = array();
         $temp1 = array();
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($val > $preCardValue && $val != 15){
                if($count >= 3){
                    $temp1[] = $val;
                }
            }
        }
        //大牌的数量比sizeof($preOutCards)少
        //连对最后一张是A表示最大的
        if(sizeof($temp1)>=(sizeof($preOutCards)/4) || $this->getCardValue($preOutCards[sizeof($preOutCards)-1]) != 14){
                $list = $cardsList;
                $this->sortValueASC($temp1);
                $groupBase = array();
                for ($j=0; $j < sizeof($temp1)-(sizeof($preOutCards)/4)+1; $j++) { 
                    $haveTag = true;
                    for ($i=0; $i < sizeof($preOutCards)/4 - 1; $i++) { 
                        if($temp1[$j+$i+1] - $temp1[$j+$i] != 1){
                            $haveTag = false;
                            break;
                        }
                    }
                    if($haveTag){
                        $gp = array();
                        for ($i=0; $i < sizeof($preOutCards)/4; $i++) { 
                            $gp[] = $temp1[$j+$i];
                        }
                        $groupBase[] = $gp;
                    }
                }
                // var_dump( $groupBase );

                for ($i=0; $i < sizeof($groupBase); $i++) { 
                    $group = array();
                    for ($q=0; $q < sizeof($groupBase[$i]); $q++) { 
                         $list = $cardsList;
                        $this->sortCardsASC($list);
                        $delcardCount = 0;
                         for ($j=0; $j < sizeof($list); $j++) { 
                            if($groupBase[$i][$q] == $this->getCardValue($list[$j])){
                                $group[] = $list[$j];
                               // unset($list[$j]);
                                $delcardCount++;
                                if($delcardCount >=3)break;
                            }
                        }
                    }
                    $temp[] = $group;
                }

                $resultData = $temp;



                $resData = array();
                if(sizeof($resultData) > 0){
                    for ($i=0; $i < sizeof($resultData); $i++) { 
                        $res = array();
                        $isHave = $this->getDanListByPlane($cardsList,$resultData[$i],$res);
                        if($isHave){
                            for ($w=0; $w < sizeof($res); $w++) { 
                                $resultData[$i][] = $res[$w];
                            }
                        }else{
                            $resultData[$i] = array();
                        }
                    }
                    for ($i=0; $i < sizeof($resultData); $i++) { 
                        if(sizeof($resultData[$i])>0){
                            $resData[] = $resultData[$i];
                        }
                    }
                }
                $resultData = $resData;

        }
    }
    $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}

//取plane-2
public function getPlaneDaiDui($cardsList,$preOutCards=array(),&$resultData){
     $resultData = array();
    if(sizeof($preOutCards) >= 10 && sizeof($preOutCards)%5==0 && sizeof($cardsList) >= sizeof($preOutCards)){

        $valCount = $this->getCardsvalueCount($preOutCards);
        foreach ($valCount as $val=> $count) {
            if($count == 3){
                    $pre3tiao[] = $val;
            }
        }
         $this->sortValueASC($pre3tiao);
        $preCardValue = $pre3tiao[0];

         $temp = array();
         $temp1 = array();
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($val > $preCardValue && $val != 15){
                if($count >= 3){
                    $temp1[] = $val;
                }
            }
        }
        //大牌的数量比sizeof($preOutCards)少
        //连对最后一张是A表示最大的
        if(sizeof($temp1)>=(sizeof($preOutCards)/5) || $this->getCardValue($preOutCards[sizeof($preOutCards)-1]) != 14){
                $list = $cardsList;
                $this->sortValueASC($temp1);
                $groupBase = array();
                for ($j=0; $j < sizeof($temp1)-(sizeof($preOutCards)/5)+1; $j++) { 
                    $haveTag = true;
                    for ($i=0; $i < sizeof($preOutCards)/5 - 1; $i++) { 
                        if($temp1[$j+$i+1] - $temp1[$j+$i] != 1){
                            $haveTag = false;
                            break;
                        }
                    }
                    if($haveTag){
                        $gp = array();
                        for ($i=0; $i < sizeof($preOutCards)/5; $i++) { 
                            $gp[] = $temp1[$j+$i];
                        }
                        $groupBase[] = $gp;
                    }
                }

                for ($i=0; $i < sizeof($groupBase); $i++) { 
                    $group = array();
                    for ($q=0; $q < sizeof($groupBase[$i]); $q++) { 
                         $list = $cardsList;
                        $this->sortCardsASC($list);
                        $delcardCount = 0;
                         for ($j=0; $j < sizeof($list); $j++) { 
                            if($groupBase[$i][$q] == $this->getCardValue($list[$j])){
                                $group[] = $list[$j];
                               // unset($list[$j]);
                                $delcardCount++;
                                if($delcardCount >=3)break;
                            }
                        }
                    }
                    $temp[] = $group;
                }

                $resultData = $temp;

                $resData = array();
                if(sizeof($resultData) > 0){
                    for ($i=0; $i < sizeof($resultData); $i++) { 
                        $res = array();
                        $isHave = $this->getDuiListByPlane($cardsList,$resultData[$i],$res);
                        if($isHave){
                            for ($w=0; $w < sizeof($res); $w++) { 
                                $resultData[$i][] = $res[$w];
                            }
                        }else{
                            $resultData[$i] = array();
                        }
                    }
                    for ($i=0; $i < sizeof($resultData); $i++) { 
                        if(sizeof($resultData[$i])>0){
                            $resData[] = $resultData[$i];
                        }
                    }
                }
                $resultData = $resData;

        }
    }
    $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}

public function getDanListByPlane($cardsList,$plane,&$resultData){
        $resultData = array();
        $this->sortCardsASC($cardsList);
        $temp = array();
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($count == 1){
                for ($i=0; $i < sizeof($cardsList); $i++) { 
                    if ($val == $this->getCardValue($cardsList[$i])) {
                        $temp[] = $cardsList[$i];
                    }
                }
            }
        }
        foreach ($valCount as $val=> $count) {
            if($count == 2){
                 for ($i=0; $i < sizeof($cardsList); $i++) { 
                    if ($val == $this->getCardValue($cardsList[$i])) {
                        $temp[] = $cardsList[$i];
                    }
                }
            }
        }
        foreach ($valCount as $val=> $count) {
            if($count == 3){
                 for ($i=0; $i < sizeof($cardsList); $i++) { 
                    if ($val == $this->getCardValue($cardsList[$i])) {
                        $temp[] = $cardsList[$i];
                    }
                }
            }
        }
        foreach ($valCount as $val=> $count) {
            if($count == 4){
                 for ($i=0; $i < sizeof($cardsList); $i++) { 
                    if ($val == $this->getCardValue($cardsList[$i])) {
                        $temp[] = $cardsList[$i];
                    }
                }
            }
        }

        $count = sizeof($plane)/3;
        for ($i=0; $i < sizeof($plane); $i++) { 
            $this->initIndex($temp);
            for ($j=0; $j < sizeof($temp); $j++) { 
                if($temp[$j] == $plane[$i]){
                    unset($temp[$j]);
                    break;
                }
            }
        }
        $this->initIndex($temp);
        if(sizeof($temp) >= $count){
            for ($i=0; $i < $count; $i++) { 
                $resultData[] = $temp[$i];
            }
            return true;
        }else{
            return false;
        }

}


public function getDuiListByPlane($cardsList,$plane,&$resultData){
    $resultData = array();

    $this->sortCardsASC($cardsList);
    
    for ($i=0; $i < sizeof($plane); $i++) { 
        $this->initIndex($cardsList);
        for ($j=0; $j < sizeof($cardsList); $j++) { 
            $value1 = $this->getCardValue($cardsList[$j]);
            $value2 = $this->getCardValue($plane[$i]);
            if($value1 == $value2){
                unset($cardsList[$j]);
                break;
            }
        }
    }

    $count = sizeof($plane)/3;
    if ($cardsList >= $count*2) {
        $temp = $this->combination($cardsList,$count*2);
        $resultData = $temp['0'];
        return true;
    }else{
        return false;
    }

}

//取顺子
public function getOrder($cardsList,$preOutCards=array(),&$resultData){
    $resultData = array();
    if(sizeof($preOutCards) >= 5 && sizeof($cardsList) >= sizeof($preOutCards)){
        $this->sortCardsASC($preOutCards);
        $preCardValue = $this->getCardValue($preOutCards[0]);

        $temp = array();
        $temp1 = array();
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($val > $preCardValue && $val!=1&&$val!=2&&$val!=15){
                $temp1[] = $val;
            }
        }

        if(sizeof($temp1) >= sizeof($preOutCards)){
            $groupBase = array();
                $this->sortValueASC($temp1);
                for ($i=0; $i < sizeof($temp1) - sizeof($preOutCards) + 1; $i++) { 
                    $haveTag = true;
                    for ($j=0; $j < sizeof($preOutCards)-1; $j++) { 
                        if($temp1[$j+$i+1] - $temp1[$j+$i] != 1){
                                $haveTag = false;
                                break;
                            }
                    }
                    if($haveTag){
                        $gp = array();
                        for ($q=0; $q < sizeof($preOutCards); $q++) { 
                            $gp[] = $temp1[$i+$q];
                        }
                        $groupBase[] = $gp;
                    }
                }

            for ($i=0; $i < sizeof($groupBase); $i++) { 
                $group = array();
                for ($q=0; $q < sizeof($groupBase[$i]); $q++) { 
                     $list = $cardsList;
                    $this->sortCardsASC($list);
                    $delcardCount = 0;
                     for ($j=0; $j < sizeof($list); $j++) { 
                        if($groupBase[$i][$q] == $this->getCardValue($list[$j])){
                            $group[] = $list[$j];
                            //unset($list[$j]);
                            break;
                        }
                    }
                }
                $temp[] = $group;
            }


            $resultData = $temp;
        }
    }
    $this->isHaveBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}

//取炸弹
public function getBomb($cardsList,$preOutCards=array(),&$resultData){
    $resultData = array();
     if(sizeof($preOutCards) == 4 && sizeof($cardsList) >= sizeof($preOutCards)){
        $preCardColor = $this->getCardColor($preOutCards[0]);
        $preCardValue = $this->getCardValue($preOutCards[0]);

         $temp = array();
         $temp1 = array();
        
        $this->sortCardsASC($cardsList);
        $valCount = $this->getCardsvalueCount($cardsList);
        foreach ($valCount as $val=> $count) {
            if($val > $preCardValue){
                if($count == 4){
                    $temp1[] = $val;
                }
            }
        }

        $list = $cardsList;
        for ($i=0; $i < sizeof($temp1); $i++) { 
            $group = array();
            $this->sortCardsASC($list);
             for ($j=0; $j < sizeof($list)-3; $j++) { 
                if($temp1[$i] == $this->getCardValue($list[$j]) && $temp1[$i] == $this->getCardValue($list[$j+1])&& $temp1[$i] == $this->getCardValue($list[$j+2])&& $temp1[$i] == $this->getCardValue($list[$j+3])){
                    $group[] = $list[$j];
                    $group[] = $list[$j+1];
                    $group[] = $list[$j+2];
                    $group[] = $list[$j+3];
                    unset($list[$j]);
                    unset($list[$j+1]);
                    unset($list[$j+2]);
                    unset($list[$j+3]);
                    break;
                }
            }
            $temp[] = $group;
        }

        $resultData = $temp;
    }
    
    $this->sortCards($cardsList);
    if($this->getCardValue($cardsList[0])==2&&$this->getCardValue($cardsList[1])==1){
        $resultData[] = array($cardsList[0],$cardsList[1]);
    }
    // $this->isHaveKingBomb($cardsList,$resultData);
    return (sizeof($resultData)>0)?true:false;
}


public function isHaveBomb($cardsList,&$resultData){
    $resTag = false;
    $this->sortCards($cardsList);
    $valCount = $this->getCardsvalueCount($cardsList);
    foreach ($valCount as $val=> $count) {
        if($count == 4){
            $resTag = true;
            $group = array();
            for ($i=0; $i < sizeof($cardsList); $i++) { 
                if($this->getCardValue($cardsList[$i]) == $val){
                    $group[] = $cardsList[$i];
                }
            }
            $resultData[] = $group;
        }
    }
    if($this->getCardValue($cardsList[0])==2&&$this->getCardValue($cardsList[1])==1){
        $resultData[] = array($cardsList[0],$cardsList[1]);
         $resTag = true;
    }
    return  $resTag;

}
public function isHaveKingBomb($cardsList,&$resultData){
    $resTag = false;
    $this->sortCards($cardsList);
    $res = array();
    foreach ($cardsList as $key => $card) {
        if ($this->getCardValue($card) == 14) {
            $res[] = $card;
        }
    }
    if (count($res) == 3) {
        $resultData[] = $res;
        $resTag = true;
    }
}


}
