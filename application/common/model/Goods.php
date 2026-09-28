<?php
namespace app\common\model;
use think\Model;

class Goods extends Model{
	//获取商品列表
	public function getGoodsList(){
		return $this->select();
	}
}