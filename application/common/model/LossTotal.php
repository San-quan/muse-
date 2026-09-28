<?php
namespace app\common\model;
use think\Model;

class LossTotal extends Model{
	 protected $table = 'web_loss_total';
	public function gettotalData(){
		 $ret=$this->select();
		 if(count($ret)==0){
		 	return 0;
		 }
		 return $ret[0]['loss'];
		// var_dump($ret);exit;
	}
}