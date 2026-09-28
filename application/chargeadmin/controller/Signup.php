<?php
namespace app\chargeadmin\controller;

use think\Controller;
use think\Db;
use think\Validate;
use think\Session;
use think\Loader;

class signup extends Controller
{
    public function index()
    {
    	// $mod=model('agent');
    	// $isHaveInvite=$mod->checkInvite("123");
		return $this->fetch();
    }
    //$state:0有参数为空 1申请成功 2两次输入密码不一致 3该邀请吗不存在 4.请输入正确的手机号 5.申请失败，发生了未知的错误 6.用户名已存在
    public function applyAgent()
    {
    	$desc="";
    	input('username')==''?$desc="用户名不能为空":$data['username']=input("username");
    	input('password')==''?$desc="密码不能为空":$data['password']=input("password");
    	input('repeatPassword')==''?$desc="确认密码不能为空":$repeatPassword=input("repeatPassword");
    	input('phone')==''?$desc="手机号不能为空":$data['phone']=input("phone");
    	input('invite')==''?$desc="邀请码不能为空":$data['invite']=input("invite");
    	input('realname')==''?$desc="真实姓名不能为空":$data['name']=input("realname");
      $data['nickname']=$data['name'];
      input('uid')==''?$desc="玩家ID":$data['uid']=input("uid");
      input('wxid')==''?$desc="微信号不能为空":$data['wxid']=input("wxid");
		$mod=model('agent');
		$isHaveInvite=$mod->checkInvite($data['invite']);
    $usersMod=model('users');
    $hasUserID=$usersMod->find($data['uid']);

      if($desc!=''){
      	$res['state']=0;
      	$res['desc']=$desc;
      	$res=json_encode($res);
      	echo $res;
      }else if($data['password']!=$repeatPassword){
      	$res['state']=2;
      	$res['desc']="两次输入密码不一致";
      	$res=json_encode($res);
      	echo $res;
      	
      }else if($isHaveInvite==false){
      	$res['state']=3;
      	$res['desc']="该邀请码不存在或级别不够";
      	$res=json_encode($res);
      	echo $res;	
      }else if(strlen($data['phone'])!=11){
      	$res['state']=4;
      	$res['desc']="请输入正确的手机号";
      	$res=json_encode($res);
      	echo $res;
       }else if($data['uid']!='' && !is_numeric($data['uid'])){
        $res['state']=4;
        $res['desc']="请输入正确的玩家ID";
        $res=json_encode($res);
        echo $res;
       }else{
        $data['status']=2;
        $data['createtime']=time();
        
        $data['password']=md5($data['password']);
        $data['parentID']=$isHaveInvite['id'];
        $data['invite']=$this->createInvite();
        $judge=$mod->where('username="'.$data['username'].'"')->find();
        if ($judge!='') {
          $res['state']=6;
          $res['desc']="该用户名已存在";
        }else if(!$hasUserID){
          $res['state']=7;
          $res['desc']="玩家ID不存在";
        }else{
          // var_dump($data);exit;
          // $data['minCash']=100;
          // $temp=Db::table('agent')->where("invite='".$data['invite']."'")->find();
          $data['nickname']= $data['name'];
          $data['lastLoginTime']=time();
          $data['email']="123@123";
          // var_dump($isHaveInvite);
          if($isHaveInvite['parentID']==0){
            $data['percent']=60;
          }else{
            $data['percent']=$isHaveInvite['percent']-10;
          }
          
          $data['level']=$isHaveInvite['level']+1;
          $ret=model('agent')->insert($data);
          $userId = model('agent')->getLastInsID();
          $history['uid']=$userId;
          $history['percent']=$data['percent'];
          $history['updatetime']=time();

          
          Db::table("web_rebatehistory")->insert($history);
          // var_dump(model('agent')->getError());exit;
          if ($ret) {
              $res['state']=1;
              $res['desc']="申请成功";
          }else{
              $res['state']=5;
              $res['desc']="申请失败";
          }

        }
	      $res=json_encode($res);
	      echo $res;
      }
    }
    //生成不重复的邀请码
    public function createInvite($length = 4) {

        $chars = '0123456789';
        $password = "";
        for ( $i = 0; $i < $length; $i++ ){
            $password .= $chars[ mt_rand(0, strlen($chars) - 1) ];
        }
        $ret=model('agent')->checkInvite($password);
        if($ret!=false){
          $this->createInvite();
        }else{
          return $password;
        }
        // $password.=time();
    }
    
}
