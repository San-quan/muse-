<?php
/**
 * Created by PhpStorm.
 * User: 10510
 * Date: 2017/6/26
 * Time: 21:17
 */
class baijiale
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
        if (empty($cards)) {
            //产生一个长度为52的自然数组，代表52张牌
            $this->cards = range(1, 52);
            //将52张牌的顺序打乱，相当于洗牌
            shuffle($this->cards);
        } else {
            $this->cards = $cards;
        }

    }

    /**
     * 生成一副百家乐牌型
     */
    public function create()
    {

        //将52张牌的顺序打乱，相当于洗牌
        shuffle($this->cards);

        
        $z_array = array();
        $x_array = array();
        $cards = $this->cards;

        //先发两张牌
        $i = 0;
        foreach ($cards as $k => $v) {
            if ($i < 4) {
                if ($i%2==1) {
                    $z_array[] = $cards[$k];
                }else{
                    $x_array[] = $cards[$k];
                }
            }
            $i++;
        }

        $zdian = $this->getDian($z_array);
        $xdian = $this->getDian($x_array);

        $winMark = array(
            'zhuang'=>false,
            'xian'=>false,
            'zhuangdui'=>false,
            'xiandui'=>false,
            'he'=>false,
        );
        //天王
        $xdian_end = $xdian;
        $zdian_end = $zdian;
        if (!($zdian==8||$zdian==9||$xdian==8||$xdian==9)){
            $z_bu_must = true;
            $x_bu_must = true;

            if ($xdian == 6||$xdian == 7) {
                $x_bu_must = false;
                if ($zdian > 5) {
                    $z_bu_must = false;
                }
            }

            if($x_bu_must){
                $x_bu = $cards[4];
                 if ($zdian == 3) {
                    if ($this->getscore($x_bu) == 8) {
                        $z_bu_must = false;
                    }
                }else if ($zdian == 4) {
                    if ($this->getscore($x_bu) == 1||$this->getscore($x_bu) == 8||$this->getscore($x_bu) == 9||$this->getscore($x_bu) == 0) {
                        $z_bu_must = false;
                    }
                }else  if ($zdian == 5) {
                    if ($this->getscore($x_bu) == 1||$this->getscore($x_bu) ==2||$this->getscore($x_bu) ==3||$this->getscore($x_bu) == 8||$this->getscore($x_bu) == 9||$this->getscore($x_bu) == 0) {
                        $z_bu_must = false;
                    }
                }else if($zdian == 6){
                    if ($this->getscore($x_bu) != 6||$this->getscore($x_bu) != 7) {
                        $z_bu_must = false;
                    }
                }else if($zdian == 7){
                    $z_bu_must = false;
                }

            }

            if ($x_bu_must) {
                $x_array[] = $cards[4];
                $xdian_end = $this->getDian($x_array);
                if($z_bu_must){
                    $z_array[] = $cards[5];
                    $zdian_end = $this->getDian($z_array);
                }
            }else if ($z_bu_must) {
                $z_array[] = $cards[4];
                $zdian_end = $this->getDian($z_array);
            }
        }

        if($zdian_end>$xdian_end){
            $winMark['zhuang'] = true;
        }else if($zdian_end<$xdian_end){
            $winMark['xian'] = true;
        }else{
            $winMark['he'] = true;
        }
        if ($this->getDuiTag($z_array))$winMark['zhuangdui'] = true;
        if ($this->getDuiTag($x_array))$winMark['xiandui'] = true;



        $cardData['z_card'] = $z_array;
        $cardData['x_card'] = $x_array;
        $cardData['z_dian'] = $zdian;
        $cardData['x_dian'] = $xdian;
        $cardData['z_dian_end'] = $zdian_end;
        $cardData['x_dian_end'] = $xdian_end;
        $cardData['winmark'] = $winMark;

        return $cardData;

    }

    /**
     * 传入数组，是否为对
     * @param cards 纸牌
     * @return bool
     */
    public function getDuiTag($cards)
    {
        if(ceil($cards[0]/4) == ceil($cards[1]/4)){
            return true;
        }
        return false;
    }

    /**
     * 传入数组，返回点数
     * @param cards 纸牌
     * @return int
     */
    public function getDian($cards)
    {
        $count = 0;
        foreach ($cards as $key => $value) {
            $count += $this->getscore($value);
        }
        return $count%10;
    }


    /**
     * 传入纸牌编号返回当前纸牌的点数
     * @param $i 纸牌序号
     * @return float|int
     */
    public function getscore($i)
    {
        return ceil($i / 4) < 10 ? ceil($i / 4) : 0;
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

  
}
