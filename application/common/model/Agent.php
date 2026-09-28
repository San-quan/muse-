<?php
namespace app\common\model;
use think\Model;
use think\Db;

class Agent extends Model{
	
	/*数据唯一验证，登录名不可以重复*/
	 protected $validate = array(
	     'rule' => array('username' => 'unique:user|require'),
	 	 'msg' => array('username.unique' => '用户名已经存在！','username.require' => '请填写用户名！')
    ); 
	
	
	//获取代理收支明细
	public function getShouzhiDetail($data){
		$where='';
		$where.=' t1.addTime between '.$data['start'].' and '.$data['end'];
		if($data['aid']!=''){
			$where.=" and t1.aid=".$data['aid'];
		}
		return Db::name('agent_ncome')->alias('t1')
			->join('agent t2','t1.aid=t2.id','left')
			->field('t1.*,t2.nickname')
			->where($where)
			->order('addTime desc')
			->paginate(10,false,['query'=>request()->param()]);
	}

	//获取付费钻石的总收入，不包括免费钻石
	public function getTotal($data){
		// $where=[];
		// $where['t1.costtime']=['between',[$data['start'],$data['end']]];
		// // $where['t1.cardsmode']=['eq',1];
		// if($data['aid']){
		// 	$where['t2.aid']=['eq',$data['aid']];
		// }
		$where=[];
		$where['addTime']=['between',[$data['start'],$data['end']]];
		// $where['t1.cardsmode']=['eq',1];
		if($data['aid']){
			$where['aid']=['eq',$data['aid']];
		}
		// $total=Db::table('usercoastrecord')->alias('t1')->join('agent_ncome t2','t1.roompwd=t2.roomid','left')->where($where)->sum('coast');
		$total=Db::table('agent_ncome')->where($where)->sum('obtain');
		$total=$total?number_format($total,2):number_format(0,2);
		return $total;
	}

	public function checkInvite($invite){
		// $ret=$this->where("invite='".$invite."'")->find();

		// if(count($ret)==0){
		// 	return false;
		// }else{
		// 	return $ret;
		// }
		$ret=$this->where("invite='".$invite."'")->find();
		$heightest=$this->where('parentID=0')->find();
		if($ret==''){
			return false;
		}else{
			if($ret['level']<3){
				if($ret['parentID']==0){
					return $ret;
				}else{
					if($ret['percent']>10){
						return $ret;
					}else{
						return false;
					}
				}
				
			}else{
				return false;
			}
		}
	}	
	public function checklogin($data)
	{
		// $map['username'] = $data['username'];
		if(empty($data['username'])){
			$error['desc'] = '用户名不能为空！';
			$error['state']=false;
			return $error;
		}
		if(empty($data['password'])){
			$error['desc'] = '密码不能为空';
			$error['state']=false;
			return $error;
		}
		$map['username']=$data['username'];
		$ret = $this->where($map) -> find();
		if($ret){
			$ret = $ret -> toArray();
			if($ret['status'] == 0){
				$error['desc'] = '用户已禁用！';
				$error['state']=false;
				return $error;
			}
			if($ret['status'] == 2){
				$error['desc'] = '用户待审核！';
				$error['state']=false;
				return $error;
			}
			if($ret['status'] == 3){
				$error['desc'] = '用户申请已经被拒绝！';
				$error['state']=false;
				return $error;
			}
			if($ret['password'] != $data['password']){
				$error['desc'] = '密码错误请重新输入！';
				$error['state']=false;
				return $error;
			}
			//记录最后登录时间
			$update['lastlogintime'] = time();
			$this-> save($update, array('id' => $ret['id']));
			$error['state']=true;
			$error['desc']=$ret;
			return $error;
		}else{
			$error['desc'] = '该用户不存在';
			$error['state']=false;
			return $error;
		}
	}
	public function getAllAgents($data){
		if($data['aid']==''){
			return $this->where('status<>2 or status <>3')->paginate(10,false,['query'=>request()->param()]);
		}else{
			return $this->where('id='.$data['aid'])->paginate(10,false,['query'=>request()->param()]);
		}
		
	}
	public function getMyAgents($myid){
		// if($data['aid']==''){//'parentID='.$data['myid']
		// 	return $this->where(array(
		// 		'parentID'=>array('eq',$data['myid']),
		// 		'status'=>array('eq',1)
		// 	))->paginate(10,false,['query'=>request()->param()]);
		// }else{//'id='.$data['aid'].' and parentID='.$data['myid']
			return $this->where(array(
				'parentID'=>array('eq',$myid),
				'status'=>array('eq',1),
				// 'id'=>array('eq',$data['aid'])
			))->paginate(10,false,['query'=>request()->param()]);
		// }
		
	}
	//拉黑或恢复代理 同意 拒绝
	public function turnToBlack($data){
		// $data['isblack']==1?$state=0:$state=1;
		if($data['isblack']==3){
			$this->where('id='.$data['uid'].' and parentID<>0')->delete();
		}else{
			$this->where('id='.$data['uid'].' and parentID<>0')->update(['status'=>$data['isblack']]);
		}
		
	}
	//获取代理申请列表
	public function getApplyList($agentID){//'status=2 or status=3','parentID='.$agentID
		return $this->where(array(
			'status'=>array('in','2,3'),
			'parentID'=>array('eq',$agentID)
		))->order("createtime desc")->paginate(10,false,['query'=>request()->param()]);
	}
}