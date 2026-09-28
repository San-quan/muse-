<?php
namespace app\chargeadmin\controller;

use think\Controller;
use think\Db;
use think\Validate;
use think\Session;
use think\Loader;

class Myaccount extends Common
{
	//最小提现金额
    private $min=100;
    public function index()
    {
    	
		return $this->fetch();
    }
    public function changePd(){

    	// $this->assign('ret',$ret);
        return $this->fetch();
    }
    public function tixianApply(){
    	// $ret=Db::
    	$this->assign('min',$this->min);
    	return $this->fetch();
    } 
    //提现申请
    //status 2待审核 1提现成功 0提现已被拒绝
    public function applyCash(){
    	$mycash=(int)(input('mycash'));
        $bank = input('bank');
        $name = input('name');
        $number = input('number');
        $phone = input('phone');
    	$data['desc']='';
    	if($mycash=='')$data['desc']="提现金额不能为空";
    	if(!is_numeric($mycash))$data['desc']="请输入合法的提现金额";
    	if($mycash>$this->memberinfo['mycash'])$data['desc']="可提现金额不足";
    	if($mycash<$this->min)$data['desc']="提现金额小于最小提现金额";
        if ($bank == '' || $name == '' || $number == '') {
            $data['desc']="信息不能为空";
        }
        if (strlen($phone) != 11) {
            $data['desc']="请输入正确联系方式";
        }
    	if($data['desc']!=''){
    		$data['state']=0;
    		$data=json_encode($data);
    		echo $data;
    	}else{
            $insert['cashnum']=$mycash;
            $insert['bank']=$bank;
            $insert['name']=$name;
            $insert['number']=$number;
    		$insert['phone']=$phone;
    		$insert['createtime']=time();
    		$insert['uid']=$this->memberinfo['id'];
            //审核状态，1：同意，0：拒绝
            
            if($this->memberinfo['level']==0){
                $insert['status']=1;
                $insert['cashmethod']=1;
            }else{
                $insert['status']=2;
            }
    		  
    		// 启动事务
			Db::startTrans();
			try{
			    $a = Db::table('web_tixianorder')->insert($insert);
                // if($this->memberinfo['level']==0){
                    model('agent')->where('id='.$this->memberinfo['id'])->setDec('mycash',$mycash);
                    model('agent')->where('id='.$this->memberinfo['id'])->setInc('hadcash',$mycash);
                    $data['desc']="提现申请成功";
                // }else{
                //     $data['desc']="提现申请成功，正在等待审核";
                // } 
			    //提交事务
			    Db::commit();
			} catch (\Exception $e) {
			    // 回滚事务
			    Db::rollback();
			    $data['state']=0;
    		  	$data['desc']="提现申请失败，请重试";
			}
			$data=json_encode($data);
    		echo $data;
    	}
    }
    //提现申请列表
    public function applyCashList(){
    	if($this->memberinfo['parentID']!=0)return;

        $cashMethod1=Db::name('web_tixianorder')->where('status=2')->order('status desc')->order('id desc')->paginate(10);
        $cashMethod=$cashMethod1->toArray();
        $cashMethod=$cashMethod['data'];
        for($i=0;$i<count($cashMethod);$i++) {
            $cashMethod[$i]['nickname']=Db::name('agent')->where('id='.$cashMethod[$i]['uid'])->value('name');
        }
        $this->assign('data',$cashMethod);
        $this->assign('ret',$cashMethod1);

        return $this->fetch('myaccount/applycashlist');

    }
    //提现历史记录
    public function cashHistory(){
    	if($this->memberinfo['parentID']!=0)return;
    	$data['aid']='';
    	if(input('aid')!=''&&is_numeric(input('aid'))){
            $data['aid']=input('aid');
        }
        $data['start']=input('start');
        $data['end']=input('end');
        if($data['start']==''&&$data['end']!=''){
            $data['start']='1970-01-01 00:00:00';
        }
        if($data['end']==''&&$data['start']!=''){
            $data['end']=date("Y-m-d H:i:s",time());
        }

        $where='';

        if($data['aid']!=''&&is_numeric($data['aid'])){
        	$where.=" t1.uid=".$data['aid'];
        }
        if($data['start']!=''&&$data['end']!=''){
        	$where==''?$where.=" t1.createtime between ".strtotime($data['start'])." and ".strtotime($data['end']):$where.=" and t1.createtime between ".strtotime($data['start'])." and ".strtotime($data['end']);
        }
        if($where==''){
        	$ret=Db::table('web_tixianorder')->alias('t1')->join('agent t2','t1.uid = t2.id','LEFT')->field(" t1.id,t1.cashnum,t1.createtime,t1.status,t2.name,t1.bank,t1.name,t1.phone,t1.number")->order('createtime desc')->paginate(10,false,['query'=>request()->param()]);
        }else{
        	$ret=Db::table('web_tixianorder')->alias('t1')->join('agent t2','t1.uid = t2.id','LEFT')->where($where)->field(" t1.id,t1.cashnum,t1.createtime,t1.status,t2.name,t1.bank,t1.name,t1.phone,t1.number")->order('createtime desc')->paginate(10,false,['query'=>request()->param()]);
        }
    	

    	$this->assign("ret",$ret);
    	$this->assign('data',$data);
    	return $this->fetch();
    }
    public function myCashHistory(){
        
        $data['start']=input('start');
        $data['end']=input('end');
        if($data['start']==''&&$data['end']!=''){
            $data['start']='1970-01-01 00:00:00';
        }
        if($data['end']==''&&$data['start']!=''){
            $data['end']=date("Y-m-d H:i:s",time());
        }

        $where='';

       
        if($data['start']!=''&&$data['end']!=''){
            $where==''?$where.=" createtime between ".strtotime($data['start'])." and ".strtotime($data['end']):$where.=" and createtime between ".strtotime($data['start'])." and ".strtotime($data['end']);
        }
        if($where==''){
            $ret=Db::table('web_tixianorder')->where('uid='.$this->memberinfo['id'])->order('createtime desc')->field(" id,cashnum,createtime,status,bank,name,phone,number")->paginate(10,false,['query'=>request()->param()]);
        }else{
            $ret=Db::table('web_tixianorder')->where('uid='.$this->memberinfo['id'])->where($where)->order('createtime desc')->field(" id,cashnum,createtime,status,bank,name,phone,number")->paginate(10,false,['query'=>request()->param()]);
        }
        

        $this->assign("ret",$ret);
        $this->assign('data',$data);
        return $this->fetch();
    }

    //总代理处理提现审核
    // public function applyMethod(){
    //     //tixianorder的id
    //     $lid=input('lid');
    //     //是否同意申请
    //     $cashMethod=input('isagree');
    //     //uid
    //     $uid=input('uid');
    //     if($cashMethod==1){
    //         $status=1;
    //     }else{
    //         $status=2;
    //     }
    //     $data=array(
    //         'cashMethod'=>$cashMethod,
    //         'status'=>$status
    //     )
    //     $sql='update tixianorder set cashMethod='.$cashMethod.',status='.$status.' where id='.$lid;
    //     $ret=Db::execute($sql);
    //     if()
    //         echo json_encode('操作成功');
        
    // }
    public function applyMethod(){
        $lid=input('lid');
        $isagree=input('isagree');
        $uid=input('uid');
        if($uid==''||$lid==''||$isagree==''){
            $ret['state']=0;
            $ret['desc']="参数为空请刷新后重试";
        }else{
            if($isagree==1||$isagree==0){
                //申请的代理
                $a=Db::name("agent")->where("id=".$uid)->find();
                //申请记录
                $t=Db::name("web_tixianorder")->where('id='.$lid)->find();
                if($a==''||$t==''){
                    $ret['state']=0;
                    $ret['desc']="参数为空请刷新后重试";
                }else{
                    Db::name("web_tixianorder")->where('id='.$lid)->update(array('status' =>$isagree));
// dump($t['cashnum']);
                    $backup['uid']=$t['uid'];
                    $backup['cashnum']=$t['cashnum'];
                    $backup['time']=time();
                    if($isagree==1){
                        // Db::name("agent")->where("id=".$uid)->setInc("hadcash",$t['cashnum']);
                        Db::name("web_success_tixian")->insert($backup);
                    }else{
                        Db::name("agent")->where("id=".$uid)->setInc("mycash",$t['cashnum']);
                        Db::name("web_fail_tixian")->insert($backup);
                    }
                    $ret['state']=1;
                    $ret['desc']="操作成功";
                }
            }else{
                $ret['state']=0;
                $ret['desc']="参数为空请刷新后重试";
            }
            
        }
        echo json_encode($ret);
    }
}
