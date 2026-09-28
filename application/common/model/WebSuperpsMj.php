<?php
namespace app\common\model;
use think\Model;

class WebSuperpsMj extends Model{
	protected $table = 'web_super_power_hangmaj';
	//获取后台玩家信息
	public function getSuperList(){
		$ret= $this->field("uid")->select();
		if($ret!=''){
			$data['state']=true;
			$judge='0';
			// var_dump($ret);
			foreach ($ret as $value) {
				
					$judge.=",".$value['uid'];
				
							
			}
			// var_dump($judge);exit;
			$data['data']=model('users')->getSusers($judge);
		}else{
			$data['state']=false;
		}
		// var_dump($data['data']);exit;
		return $data;
	}	
	public function addSuper($data){
		$this->insert(array("uid"=>$data,"rank"=>10));
	}
	public function deleteSuper($data){
		$this->where('uid='.$data)->delete();
	}
	//判断玩家是否已被添加
	public function checkUsers($uid){
		$ret=$this->where('uid='.$uid)->find();
		if($ret==''){
			return true;
		}else{
			return false;
		}
	}
	public function getSuperData($uid){
		$ret=$this->alias('a')->join('users b','a.uid=b.id','left')->field('a.*,b.nickname')->where('a.uid='.$uid)->find();
		return $ret;
	}
	public function editSuper($uid,$rank){
		$data['rank']=$rank;
		$ret=$this->save( $data , array('uid'=>$uid));
		return $ret;
	}
}
?>