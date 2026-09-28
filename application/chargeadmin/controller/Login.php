<?php
namespace app\chargeadmin\controller;

use think\Controller;
use think\Db;
use think\Validate;
use think\Session;
use think\Loader;

class Login extends Controller
{
    public function index()
    {
      // var_dump(time());exit;
      $user=model('agent');
   		$data['username'] = input('username');
        $data['password'] = md5(input('password'));
        $ret = $user -> checklogin($data);
		  return $this->fetch();
    }
    //登陆校验
    public function login(){
   		$user=model('agent');
   		$data['username'] = input('username');
      $data['password'] = md5(input('password'));
      $ret = $user -> checklogin($data);
      if($ret['state']){
  			//设置会话标识
  			//dump($ret['id']);
  			Session::set('userid',$ret['desc']['id']); 
  			//设置$_SESSION['userid'] = $ret['id'];
  			$res['state']=1;
  			$res['desc']="登陆成功";
      }else{
        $res['state']=0;
			  $res['desc']=$ret['desc'];
      }
   		echo json_encode($res);

    }
    

}
