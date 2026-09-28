<?php
/**
 * Created by PhpStorm.
 * User: 10510
 * Date: 2017/6/26
 * Time: 21:17
 * 定义游戏规则配置数据格式如下
 * 底分：score【1,3,5,10,20】
 * 规则、牌型倍数：rule【1,2】，types【1,2,3】
 * 房卡游戏局数：gamenum【10:1,20:2】
 * 固定上庄：openroom【0,100,300,500】
 */
class douniu
{

    /**
     * @var array|初始化纸牌数据
     */
    private $cards = array();


    /**
     * douniu constructor.
     * 构造函数
     * @param $cards  初始化纸牌数据
     */
    public function __construct($cards = array())
    {
        //* bool false 是无牛   1-9牛几  0牛牛 11顺子 12同花 13葫芦 14五小牛 15五花牛 16炸弹牛 17 同花顺
        if (empty($cards)) {
            //产生一个长度为52的自然数组，代表52张牌
            $this->cards = range(1, 52);
            //将52张牌的顺序打乱，相当于洗牌
            // $this->cards[0]=5;
            // $this->cards[1]=10;
            // $this->cards[2]=14;
            // $this->cards[3]=22;
            // $this->cards[4]=18;
            // $this->cards[5]=13;
            // $this->cards[6]=17;
            // $this->cards[7]=21;
            // $this->cards[8]=29;
            // $this->cards[9]=25;
            // $this->cards[10]=22;
            // $this->cards[11]=26;
            // $this->cards[12]=30;
            // $this->cards[13]=38;
            // $this->cards[14]=42;
            shuffle($this->cards);
            // var_dump($this->cards);
        } else {
            $this->cards = $cards;
        }

    }

    /**
     * 发牌 你你你
     */
    public function create()
    {
        $array = array();
        $cards = $this->cards;
        $i = 0;
        foreach ($cards as $k => $v) {
            if ($i < 5) {
                $array[] = $cards[$k];
                unset($cards[$k]);
            }

            $i++;
        }
        $this->cards = $cards;
        //测试

        // $array=array(42,41,44,47,50);
        return $array;

    }

    /**
     * 传入纸牌编号返回当前纸牌的点数
     * @param $i 纸牌序号
     * @return float|int
     */
    public function getscore($i)
    {
        return ceil($i / 4) < 10 ? ceil($i / 4) : 10;
    }
    /**
     * 传入纸牌编号返回当前纸牌的点数
     * @param $i 纸牌序号
     * @return float|int
     */
    public function getscoreorigin($i)
    {
        return ceil($i / 4);
    }
    /**
     * 传入纸牌编号，返回当前纸牌的名称
     * @param $i 纸牌序号
     * @return string
     */
    public function getcardname($i)
    {
        $name = array('方块 <span style="color:#f00;">♦</span> ', '草花 ♣ ', '红桃 <span style="color:#f00;">♥</span> ', '黑桃 ♠ ');
        $num = array('A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K');
        $namekey = ($i % 4) > 0 ? ($i % 4 - 1) : 3;
        $numkey = ceil($i / 4) - 1;
        return $name[$namekey] . $num[$numkey];
    }

    /**
     * 从传入数组中任意取出三个元素进行组合，返回所有可能
     * @param $a 原数组
     * @param $m 取出组合个数
     * @return array 返回数组
     */
    public function combination($a, $m)
    {
        $r = array();
        $n = count($a);
        if ($m <= 0 || $m > $n) {
            return $r;
        }
        for ($i = 0; $i < $n; $i++) {
            $t = array($a[$i]);
            if ($m == 1) {
                $r[] = $t;
            } else {
                $b = array_slice($a, $i + 1);
                $c = $this->combination($b, $m - 1);
                foreach ($c as $v) {
                    $r[] = array_merge($t, $v);
                }
            }
        }
        return $r;
    }

    /**
     * 计算牛的组合 aakel
     * @param array $cards
     * @return array
     */
    public function niucount($cards = array())
    {
        $count = array();
        $arr = $this->combination($cards, 3);
        foreach ($arr as $k => $v) {
            $sum = $this->getscore($v[0]) + $this->getscore($v[1]) + $this->getscore($v[2]);
            if ($sum % 10 == 0) {
                $count[] = $v;
            }
        }
        return $count;
    }


    public function getniuname($cards = array()){
        $ret = $this->getniu2($cards);
        if($ret === 0){
            return 10;
        }
        if($ret > 0){
            return $ret;
        }
        if($ret === false){
            return 0;
        }
    }

    public function getmax($cards){
        $ret = array();
        foreach($cards as $k => $v) {
            $namescore = (($v % 4) > 0 ? ($v % 4 - 1) : 3) + 1;
            $keyscore = $this->getscoreorigin($v);
            $ret[] = $namescore + $keyscore*$keyscore;
        }
        return max($ret);
    }

    public function ret($cards){
        //获取牛的类型
        $type = $this->getniuname($cards);
        if($type !== false){
            $type += 13;
            $type = $type*$type*$type*$type;
        }
        $ret = $type + $this -> getmax($cards);

        return $ret;
    }

    /**
     * bool false 是无牛   1-9牛几  0牛牛  10五花牛   11炸弹牛   12小牛牛
     * @param $cards 5张纸牌的数组
     * @return mixed
     */
    public function getniu($cards)
    {

        //是否五小
        $ismin = true;
        //是否五花
        $ismax = true;
        //是否炸弹
        $isbomb = false;
        $isbombcount = array();
        $totalscore = 0;
        foreach($cards as $k => $v){
            if($this->getscore($v) > 5){
                //五小不成立
                $ismin = false;
            }
            if($this->getscoreorigin($v) <= 10){
                //五花牛不成立
                $ismax = false;
            }
            $totalscore += $this->getscore($v);
            $isbombcount[] = (int)$this->getscoreorigin($v);
        }


        $isbombarr = array_count_values($isbombcount);
        if(max($isbombarr) >= 4){
            $isbomb = true;
        }
        if($ismin && $totalscore < 10){
            return 13;
        }
        if($isbomb){
            return 12;
        }
        if($ismax){
            return 11;
        }

        $return = array();
        $count = $this->niucount($cards);
        foreach ($count as $k => $v) {
            $ret = array_diff($cards, $v);
            $socre = 0;
            foreach($ret as $val){
                $socre += $this->getscore($val);
            }
            $return[] =  $socre%10;
        }
        if(count($return) > 0){
            return max($return);
        }
        return false;
    }




public function isShunZi($cardValues){
        $isbombcount = array();
        $totalscore = 0;
        foreach($cardValues as $k => $v){
            $isbombcount[] = (int)$this->getscoreorigin($v);
        }

        $isbombarr = array_count_values($isbombcount);
        // var_dump($isbombcount);
        foreach ($isbombarr as $key => $value) {
            if ($value > 1)return false;
        }
        //冒泡
        for($k=1;$k<5;$k++){
            for($j=0;$j<5-$k;$j++){
                if($isbombcount[$j]>$isbombcount[$j+1]){
                    $temp =$isbombcount[$j+1];
                    $isbombcount[$j+1] =$isbombcount[$j] ;
                    $isbombcount[$j] = $temp;
                }
            }
        }
        // var_dump($isbombcount);
        if ($isbombcount[0] != 1) {
            //判断连续牌
             for($k=1;$k<5;$k++){
                if ($isbombcount[$k]-$isbombcount[$k-1] != 1) {
                    return false;
                }
             }
        }else{
            //第二张牌必定是10
            if ($isbombcount[1] == 10) {
                for($k=2;$k<5;$k++){
                        if ($isbombcount[$k]-$isbombcount[$k-1] != 1) {
                            return false;
                        }
                }
            }else{
                return false;
            }
        }


    return true;
}

public function isTonghua($cardValues){

    $firstHua = ($cardValues[0] % 4) > 0 ? ($cardValues[0] % 4 - 1) : 3;
    foreach ($cardValues as $key => $value) {
        if ($firstHua != (($value % 4) > 0 ? ($value % 4 - 1) : 3)) {
            return false;
        }
    }
    return true;
}

 /*** bool false 是无牛   1-9牛几  0牛牛  11五花牛   12炸弹牛   13小牛牛
     * bool false 是无牛   1-9牛几  0牛牛 11顺子 12同花 13葫芦 14五小牛 15五花牛 16炸弹牛 17 同花顺
     * @param $cards 5张纸牌的数组
     * @return mixed
     */
    public function getniu2($cards)
    {
        //是否顺子
        $isShun = true;
        //是否葫芦
        $isHuLu = true;
        //是否五小
        $ismin = true;
        //是否五花
        $is5Hua = true;
        //是否炸弹
        $isbomb = true;
        //是否同花
        $isTonghua = true;




        $isbombcount = array();
        $totalscore = 0;
        foreach($cards as $k => $v){
            if($this->getscore($v) > 5){
                //五小不成立
                $ismin = false;
            }
            if($this->getscoreorigin($v) <= 10){
                //五花牛不成立
                $is5Hua = false;
            }
            $totalscore += $this->getscore($v);
            $isbombcount[] = (int)$this->getscoreorigin($v);
        }

        // var_dump($is5Hua);
        $isbombarr = array_count_values($isbombcount);
        if(!(max($isbombarr) == 4)){
            $isbomb = false;
        }
        if(!((max($isbombarr)==3 && min($isbombarr) == 2)||(max($isbombarr)==2 && min($isbombarr) == 3))){
            $isHuLu = false;
        }


        if (!$this->isShunZi($cards)) {
             $isShun = false;
        }
        if (!$this->isTonghua($cards)) {
             $isTonghua = false;
        }
        // var_dump($isShun);
        if($isShun){
            if ($isTonghua) {
                return 17;
            }
        }
        if($isbomb){
            return 16;
        }
        if($is5Hua){
            return 15;
        }
        if($ismin && $totalscore < 10){
            return 14;
        }
        if($isHuLu){
            return 13;
        }

        if (!$isShun) {
            if ($isTonghua) {
                return 12;
            }
        }
        if($isShun){
            if (!$isTonghua) {
                return 11;
            }
        }
       
        

        $return = array();
        $count = $this->niucount($cards);
        foreach ($count as $k => $v) {
            $ret = array_diff($cards, $v);
            $socre = 0;
            foreach($ret as $val){
                $socre += $this->getscore($val);
            }
            $return[] =  $socre%10;
        }
        // var_dump($return);
        if(count($return) > 0){
            return max($return);
        }
        return false;
    }




}
