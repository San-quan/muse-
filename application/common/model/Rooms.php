<?php
namespace app\common\model;
use think\Model;
use think\Db;

class Rooms extends Model{
	//今日开房数
	public function getRoomsNum($data){
		if($data['parentID']==0){
			return $ret=$this->where("createtime>".strtotime(date("Y-m-d",time())))->count();
		}else{
			return $ret=$this->where("createtime>".strtotime(date("Y-m-d",time()))." and invitecode=".$data['invite'])->count();
		}
		
		// var_dump($ret);exit;
	}
	//在线房间数
	public function getOnlineRoomsNum(){
		return $ret=$this->where("gameover=0")->count();
	}
	//$data['type']=1:在线桌子2：未开始3：游戏中4：已结束
	public function getRooms($data){
		// $where='';
		// if($data['state']==1){
		// 	return Db::table('rooms')->alias('t1')->join('users t2','t1.roomowner = t2.id','LEFT')->where('t1.roompwd='.$data['roompwd'])->paginate(10,false,['query'=>request()->param()]);
		// }else if($data['state']==2){
		// 	return Db::table('rooms')->alias('t1')->join('users t2','t1.roomowner = t2.id','LEFT')->where('t1.roomowner='.$data['userID'])->paginate(10,false,['query'=>request()->param()]);
		// }else{
		// 	if($data['start']!=''&&$data['end']!=''){
		// 	 	$where=$where." createtime between ".strtotime($data['start'])." and ".strtotime($data['end']);
		// 	}
		// 	if($data['type']!=''&&is_numeric($data['type'])){
		// 		switch ($data['type']) {
		// 			case 1:
		// 				$where==''?$where=$where." gameover=0":$where=$where." and gameover=0";
		// 				break;
		// 			case 2:
		// 				$where==''?$where=$where." gameover=0 and playground=0":$where=$where." and gameover=0 and playground=0";
		// 				break;
		// 			case 3:
		// 				$where==''?$where=$where." gameover=0 and playground>0":$where=$where." and gameover=0 and playground>0";
		// 				break;
		// 			case 4:
		// 				$where==''?$where=$where." gameover=1":$where=$where." and gameover=1";
		// 				break;
				
		// 		}	
		//  	}
		//  	return Db::table('rooms')->alias('t1')->join('users t2','t1.roomowner = t2.id','LEFT')->where($where)->paginate(10,false,['query'=>request()->param()]);
		// }
		
		$where='';
		if($data['state']==1){
			return Db::table('rooms')->alias('t1')->join('users t2','t1.roomowner = t2.id','LEFT')->where('t1.roompwd='.$data['roompwd'])->paginate(10,false,['query'=>request()->param()]);
		}else{
			if($data['start']!=''&&$data['end']!=''){
			 	$where=$where." createtime between ".strtotime($data['start'])." and ".strtotime($data['end']);
			}
			if($data['type']!=''&&is_numeric($data['type'])){
				switch ($data['type']) {
					case 1:
						$where==''?$where=$where." gameover=0":$where=$where." and gameover=0";
						break;
					case 2:
						$where==''?$where=$where." gameover=0 and playground=0":$where=$where." and gameover=0 and playground=0";
						break;
					case 3:
						$where==''?$where=$where." gameover=0 and playground>0":$where=$where." and gameover=0 and playground>0";
						break;
					case 4:
						$where==''?$where=$where." gameover=1":$where=$where." and gameover=1";
						break;
				
				}	
		 	}
		 	if($data['userID']!=''&&is_numeric($data['userID'])){
				$where==''?$where=$where." t1.roomowner=".$data['userID']:$where=$where." and t1.roomowner=".$data['userID'];
		 	}
		 	if($data['invite']!=''){
		 		$where==''?$where=$where." t1.invitecode='".$data['invite']."'":$where=$where." and t1.invitecode='".$data['invite']."'";
		 	}
		 	return Db::table('rooms')->alias('t1')->join('users t2','t1.roomowner = t2.id','LEFT')->where($where)->order('createtime desc')->paginate(10,false,['query'=>request()->param()]);
		}
	}
	public function getRoomDetail($pwd){
		if(!is_numeric($pwd))return false;
		return Db::table("roomgroundrecord")->alias('t1')->join('users t2','t1.uid=t2.id','LEFT')->where("t1.roompwd=".$pwd)->order('t1.playground asc,t2.id desc')->field('t2.nickname,t1.score,t1.playground')->select();
	}
}