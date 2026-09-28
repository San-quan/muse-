<?php
namespace app\common\model;
use think\Model;

class Usercoastrecord extends Model{
	public function getCoastCardsNum(){
		return $ret=$this->where([
			'costtime'=>['gt',strtotime('Y-m-d',time())],
			'cardsmode'=>['eq',1]
		])->sum('coast');
		// var_dump($ret);exit;
	}
}