<?php
namespace app\common\model;
use think\Model;
use think\Db;
class Playerorder extends Model{
	//玩家充值列表
	public function getPlayerRechargeList($data){
		$where='';
		if($data['start']!=''&&$data['end']!=''){
		 	$where=$where." t1.createtime between ".strtotime($data['start'])." and ".strtotime($data['end']);
		}else{
			
		}
		if($data['uid']!=''){
		 	$where==''?$where=$where." t1.openid='".$data['uid']."'":$where=$where." and t1.openid='".$data['type']."'";
		}
		return Db::table('web_playerorder')->alias('t1')->join('users t2','t1.openid=t2.openid','LEFT')->where($where)->field('t1.*,t2.nickname')->order('id desc')->paginate(10,false,['query'=>request()->param()]);
	}
	public function getRechargeDetail($roomid){
		return Db::table('usercoastrecord')->alias('t1')
			->join('users t2','t1.uid=t2.id','LEFT')
			->join('rooms t3','t1.roompwd=t3.roompwd','left')
			->where('t1.roompwd='.$roomid)
			->field('t1.*,t2.nickname,t3.roomowner')
			->select();
	}
}