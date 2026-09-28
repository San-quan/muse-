<?php
namespace app\common\model;
use think\Model;

class LossDetail extends Model{
	 // protected $table = 'loss_total';
	 // 获取亏损详情@param:type:1.新玩家赠送的 2，充值赠送的 3，活动赠送的
	public function getlossDetail($data){
		$where='';
		 if($data['start']!=''&&$data['end']!=''){
		 	$where=$where." createtime between ".strtotime($data['start'])." and ".strtotime($data['end']);
		 }
		 if($data['type']!=''){
		 	$where==''?$where=$where." type=".$data['type']:$where=$where." and type=".$data['type'];
		 }
		return $this->where($where)->paginate(10,false,['query'=>request()->param()]);
		 
	}
}