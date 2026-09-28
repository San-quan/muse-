<?php
namespace app\common\model;
use think\Model;
use think\Db;

class Users extends Model{
	//玩家总数
	public function getUsersNum(){
		return $ret=$this->count();
		// var_dump($ret);exit;
	}
	//今日新增玩家
	public function getTodayNewPlayers(){
		return $ret=$this->where("reg_time>".strtotime(date("Y-m-d",time())))->count();
	}
	//平台剩余未消耗房卡数
	public function getSurplusCards(){
		return $ret=$this->sum('cards');
	}
	//获取玩家列表
	public function getUsersList($data){

		if($data['state']==0){

			return $ret=$this->paginate(10);
		}else if($data['state']==1){
			return $ret=$this->where("id=".$data['uid'])->paginate(10,false,['query'=>request()->param()]);
		}else if($data['state']==2){
			return $ret=$this->where("reg_time between ".strtotime($data['start'])." and ".strtotime($data['end']))->paginate(10,false,['query'=>request()->param()]);
		}
	}
	//拉黑或恢复玩家
	public function turnToBlack($data){
		// $data['isblack']==1?$state=0:$state=1;
		$this->where('id='.$data['uid'])->update(['status'=>$data['isblack']]);
	}


	public function checkUsers($uid){
		$res=$this->where('id='.$uid)->find();
		if($res==''){
			return false;
		}else{
			return true;
		}
	}
	//获取指定id玩家信息
	public function getSusers($uidStr){
		$ret=$this->where("id in (".$uidStr.")")->select();
		return $ret;
	}
	//获取玩家充值总数
	public function getAllusersMoney($data){
		if($data['parentID']==0){
			return Db::name('web_final_order')->where('status=1')->sum('price');
		}else{
			return Db::name('web_final_order')->alias('t1')->join("web_playerorder t2",'t1.orderNo=t2.orderNo','LEFT')->where('t2.aid='.$data['id'])->sum('t1.price');
		}
	}	
	//获取绑定玩家列表
	public function getBindUsersList($data,$member){

		if($data['state']==0){
			return $ret=$this->where(" parent_id=".$member['id'])->paginate(10);
		}else if($data['state']==1){
			return $ret=$this->where(" parent_id=".$member['id']." and id=".$data['uid'])->paginate(10,false,['query'=>request()->param()]);
		}else if($data['state']==2){
			return $ret=$this->where(" parent_id=".$member['id']." and reg_time between ".strtotime($data['start'])." and ".strtotime($data['end']))->paginate(10,false,['query'=>request()->param()]);
		}
	}
	//获取一个玩家信息
	public function getOneUserByUid($uid=''){
		if($uid!=''&&is_numeric($uid)){
			return $ret=Db::name('Users')->alias('a')->join('agent b','a.agency_id=b.id')->field('a.*,b.nickname as agentname')->find($uid);
		}else{
			return $ret=array();
		}
	}
	//充值钻石
	public function addzuanshi($data){
		$ret=$this->where('id='.$data['uid'])->setInc('cards',$data['cards']);
		if(!$ret){
			return false;
		}else{
			$ret=$this->where('id='.$data['uid'])->setInc('freecards',$data['cards']);
			if(!$ret){
				return false;
			}
		}
		$userdata=$this->getOneUserByUid($data['uid']);
		$createtime=time();
		$data=array(
			'aid'=>$userdata['agency_id'],
			'uid'=>$userdata['id'],
			'zuanNum'=>$data['cards'],
			'createtime'=>$createtime
		);
		$sql="insert into web_zuanshi_history (aid,uid,zuanNum,createtime) values (".$data['aid'].",".$data['uid'].",".$data['zuanNum'].",".$data['createtime'].")";
		$sql2="insert into web_loss_complement (total,createTime) values (".$data['zuanNum'].",".$data['createtime'].")";
		$this->execute($sql2);
		$lossTotal=$this->table('web_loss_total')->select();
		$lossTotal=$lossTotal[0]['loss'];
		$this->table('web_loss_total')->where(array('loss'=>array('eq',$lossTotal)))->setInc('loss',$data['zuanNum']);
		$this->table('web_loss_detail')->insert(array(
			'uid'=>$data['uid'],
			'type'=>4,
			'createTime'=>$data['createtime'],
			'coast'=>$data['zuanNum'],
		));
		return $this->execute($sql);
		// return model('web_zuanshi_history').add($data);
		// return true;
	}
	public function getZuanshiHistory($data){
		$where=array();
		$data['start']=strtotime($data['start']);
        $data['end']=strtotime($data['end']);
		if($data['start']!=''&&$data['end']!=''){
		 	$where['t1.createtime']=array('between',array($data['start'],$data['end']));
		}
		if($data['uid']!=''){
		 	$where['t1.uid']=array('eq',$data['uid']);
		}
		// var_dump($data);exit;
		return Db::table('web_zuanshi_history')->alias('t1')->join('users t2','t1.uid=t2.id','LEFT')->join('agent t3','t2.agency_id=t3.id','LEFT')->where($where)->field('t1.*,t2.nickname as usernickname,t3.nickname as agentnickname')->order('createtime desc')->paginate(10,false,['query'=>request()->param()]);
		//paginate(10,false,['query'=>request()->param()])
	}

}