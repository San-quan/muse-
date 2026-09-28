<?php
namespace app\chargeadmin\controller;

use think\Controller;
use think\Db;
use think\Validate;
use think\Session;
use think\Loader;

class Daili extends Common
{
    public function index()
    {

        $data['type']=''; 
        $data['start']='';
        $data['end']='';
        $data['roompwd']='';
        $data['userID']='';
        // if(input('roompwd')!=''&&is_numeric(input('roompwd'))){
        //     $data['roompwd']=input('roompwd');
        //     $data['state']=1;
        // }else if(input('userID')!=''&&is_numeric(input('userID'))){
        //     $data['userID']=input('userID');
        //     $data['state']=2;
        // }else{
        //     $data['state']=3;
        //     $data['start']=input('start');
        //     $data['end']=input('end');
        //     $data['type']=input('type');
        //     if($data['start']==''&&$data['end']!=''){
        //         $data['start']='1970-01-01 00:00:00';
        //     }
        //     if($data['end']==''&&$data['start']!=''){
        //         $data['end']=date("Y-m-d H:i:s",time());
        //     }
        // }
        if(input('roompwd')!=''&&is_numeric(input('roompwd'))){
            $data['roompwd']=input('roompwd');
            $data['state']=1;
        }else{
            if(input('userID')!=''&&is_numeric(input('userID'))){
                $data['userID']=input('userID');
            }
            // var_dump(input('userID'));exit;
            $data['state']=2;
            $data['start']=input('start');
            $data['end']=input('end');
            $data['type']=input('type');
            if($data['start']==''&&$data['end']!=''){
                $data['start']='1970-01-01 00:00:00';
            }
            if($data['end']==''&&$data['start']!=''){
                $data['end']=date("Y-m-d H:i:s",time());
            }
        }
    	$ret=model('rooms')->getRooms($data);
        
    	$this->assign('ret',$ret);
        $this->assign('data',$data);
		return $this->fetch();
    }

    public function dailiShouzhi(){
      $data['start']=input('start');
      $data['end']=input('end');
      $data['aid']=input('aid');
      if($data['end']==''||$data['start']==''){
        $data['end']=time();
        $data['start']=strtotime(date("Y-m-d",time()));
      }else{
        $data['end']=strtotime($data['end']);
        $data['start']=strtotime($data['start']);
      }
      if($this->memberinfo['parentID']!=0){
        $data['aid']=$this->memberinfo['id'];
      }

      $ret=model('agent')->getShouzhiDetail($data);
      $total=model('agent')->getTotal($data);
      $heightest=Db::name('agent')->where('parentID=0')->find();
      // $total=0;
      // dump($ret);exit;
      // foreach ($ret as $key => $value) {
      //   if($ret[$key]['cardsmode']==1){
      //     $total+=$ret[$key]['obtain'];
      //   }
      // }
      $this->assign('total',$total);
      $this->assign('heightest',array());
      $this->assign('data',$data);
      $this->assign('ret',$ret);

//       foreach ($ret as $key => $value) {
//         dump($value);
//       }
// die;
      return $this->fetch();
    }


    public function addAgentPage(){
        $all=model('agent')->where("parentID=0")->find();
        if($this->memberinfo['level']==3){
            return;
        }
        return $this->fetch();
    }
    public function addAgent(){
        // $all=Db::table('agent')->where("parentID=0")->find();
        if($this->memberinfo['level']==3){
            return;
        }
        $desc="";
        input('username')==''?$desc="用户名不能为空":$data['username']=input("username");
        input('password')==''?$desc="密码不能为空":$data['password']=input("password");
        input('repeatPassword')==''?$desc="确认密码不能为空":$repeatPassword=input("repeatPassword");
        input('phone')==''?$desc="手机号不能为空":$data['phone']=input("phone");
        input('realname')==''?$desc="真实姓名不能为空":$data['name']=input("realname");
        input('uid')==''?$desc="玩家ID不能为空":$data['uid']=input("uid");
        input('wxid')==''?$desc="微信号不能为空":$data['wxid']=input('wxid');
        input('level')==''?$desc="代理级别不能为空":$data['level']=input('level');
        input('percent')==''?$desc="分成比例不能为空":$data['percent']=input('percent');
        $data['lastLoginTime']=time();
        $data['email']='123@123';
        $data['nickname']=$data['name'];
        $mod=model('agent');
$hasUserID=model('users')->find($data['uid']);
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
      }else if(!$hasUserID){
        $res['state']=7;
        $res['desc']="玩家ID不存在";
        $res=json_encode($res);
        echo $res;
      }else if(strlen($data['phone'])!=11){
        $res['state']=4;
        $res['desc']="请输入正确的手机号";
        $res=json_encode($res);
        echo $res;
       }else if($data['uid']!=0&&!is_numeric($data['uid'])){
        $res['state']=4;
        $res['desc']="请输入正确的用户ID";
        $res=json_encode($res);
        echo $res;
       }else if(!in_array($data['level'], array(1,2,3)) || $data['level']<=$this->memberinfo['level']){
        $res['state']=4;
        $res['desc']="代理等级有误";
        $res=json_encode($res);
        echo $res;
       }else if($this->memberinfo['level']!=0&&$data['percent']>=$this->memberinfo['percent']){
        $res['state']=4;
        $res['desc']="分成比例不能大于当前代理";
        $res=json_encode($res);
        echo $res;
       }else{
          $data['status']=1;
          $data['createtime']=time();
          $data['password']=md5($data['password']);
          $data['parentID']=$this->memberinfo['id'];
          $data['invite']=$this->createInvite();
          
          $judge=$mod->where('username="'.$data['username'].'"')->find();
          if ($judge!='') {
            $res['state']=6;
            $res['desc']="该用户名已存在";
          }else{
            // var_dump($data);exit;
            $ret=model('agent')->insert($data);
            if ($ret) {
                $res['state']=1;
                $res['desc']="添加成功";
                
            }else{
                $res['state']=5;
                $res['desc']="添加失败";
                
            }

          }
          $res=json_encode($res);
          echo $res;
      }
    }
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
    //代理列表
    public function agentList(){
      if($this->memberinfo['parentID']!=0){
        return;
      }
      $data['aid']=input('aid');
      $ret=model('agent')->getAllAgents($data);
      foreach ($ret as $key => $value) {
        // var_dump($ret[$key]['parentID']);
        if ($ret[$key]['parentID']!=0) {
            $a=model('agent')->where('id='.$ret[$key]['parentID'])->field('name')->find();
            $ret[$key]['upName']=$a['name'];
        }else{
            $ret[$key]['upName']='';
        }
        // var_dump(model('agent')->where('id='.$ret[$key]['parentID'])->field('name')->find());
      }
      $this->assign('ret',$ret);
      $this->assign('data',$data);
      return $this->fetch();
    }
    //我的代理
    public function myAgentList(){
      if($this->memberinfo['level']==3) return;
      // $data['aid']=input('aid');
      $myid=$this->memberinfo['id'];
      $ret=model('agent')->getMyAgents($myid);
      $this->assign('ret',$ret);
      $this->assign('myid',$myid);
      // dump($ret);
      return $this->fetch();
    }
    //$data['isblack']拉黑0 同意1 拒绝3 恢复1
     public function turnToBlack(){
        $data['isblack']=input('isblack');
        $data['uid']=input('uid');
        
        if(!is_numeric($data['isblack'])||!is_numeric($data['uid']))return;
        // dump($data);
        model('agent')->turnToBlack($data);
        if($data['isblack']==0){
            $state=1;
        }else if($data['isblack']==3){
            $state=3;
        }else{
          $state=0;
        }
        echo json_encode($state);
    }
    //获取代理详情
    public function getAgentDetail(){
        $aid=input('aid');
        if($aid!=''&&is_numeric($aid)){
            $ret=Db::table('agent')->where('id='.$aid)->find();
            if($ret!=''){
              $data['state']=1;
              $data['html']='<div class="block">
                <label class="control-label">用户名:</label>
                <input type="text" disabled placeholder="请输入用户名" id="username" value="'.$ret["username"].'" name="username" class="form-control">
              </div>
              <div class="block">
                <label class="control-label">真实姓名:</label>
                <input type="text" placeholder="请输入姓名" id="realname" value="'.$ret["name"].'" name="realname" class="form-control">
              </div>
              <div class="block">
                <label class="control-label">密码:</label>
                <input type="password" placeholder="若不需修改则为空" id="password" name="password" class="form-control">
              </div>
              <div class="block">
                <label class="control-label">手机号:</label>
                <input type="text" id="phone" name="phone" value="'.$ret["phone"].'" placeholder="请输入手机号" class="form-control">
              </div>

              <div class="block">
                <label class="control-label">玩家ID:</label>
                <input type="text" id="uid" name="uid" value="'.$ret["uid"].'" placeholder="请输入手机号" class="form-control">
              </div>
              <div class="block">
                <label class="control-label">微信号:</label>
                <input type="text" id="wxid" name="wxid" value="'.$ret["wxid"].'" placeholder="请输入微信号" class="form-control">
              </div>
              <div class="block">
                <label class="control-label">代理级别:</label>
                <select class="input-small inline form-control" id="level" name="level" >';
                $level=$this->memberinfo['level'];
                if(in_array($level, array(0))){
                  if($ret['level']==1){
                    $data['html'].='<option value="1" selected>一级</option>';
                  }else{
                    $data['html'].='<option value="1">一级</option>';
                  }
                  
                }
                if(in_array($level, array(0,1))){
                  if($ret['level']==2){
                    $data['html'].='<option value="2" selected>二级</option>';
                  }else{
                    $data['html'].='<option value="2">二级</option>';
                  }
                  
                }
                if(in_array($level, array(0,1,2))){
                  if($ret['level']==3){
                    $data['html'].='<option value="3" selected>三级</option>';
                  }else{
                    $data['html'].='<option value="3">三级</option>';
                  }
                  
                }
                $temp='';
                if($ret['parentID']==0){
                  $temp="disabled";
                }else{
                  $temp='';
                }
                $data['html'].='</select>
              </div>
              <div class="block">
                <label class="control-label">提现比例:</label>
                <input type="text" id="percent" '.$temp.' name="percent" value="'.$ret["percent"].'" placeholder="请输入手机号" class="form-control">
              </div>
              <div class="block">
                <label class="control-label">邀请码:</label>
                <input type="text"  value="'.$ret["invite"].'" placeholder="请输入邀请码" disabled class="form-control">
              </div><input type="hidden" id="agentID" value="'.$aid.'">
                <input type="hidden" id="preUsername" value="'.$ret["username"].'">
                <input type="hidden" id="prePercent" value="'.$ret["percent"].'">
              ';
            }else{
              $data['state']=0;
              $data['html']="代理id有误请刷新后重试";
            }
            // var_dump($data);
            $data=json_encode($data);
            echo json_encode($data);
        }
    }
    public function editAgent(){
      $desc="";
      

      input('phone')==''?$desc="手机号不能为空":$data['phone']=input("phone");
      input('realname')==''?$desc="真实姓名不能为空":$data['name']=input("realname");
      input('uid')==''?$desc="玩家ID不能为空":$data['uid']=input("uid");
      input('wxid')==''?$desc="微信号不能为空":$data['wxid']=input("wxid");
      $data['nickname']=$data['name'];
      $hasUserID=model('users')->find($data['uid']);
      // if($hasUserID){
        $agent=model('agent')->where("id=".input('aid'))->find();
        $preAgert=model('agent')->where("id=".$agent['parentID'])->find();
      // }
      if(input('password')!=''){
          $data['password']=md5(input('password'));
      }
      if(input("percent")!=''){
        $data['percent']=input("percent");
      }
      
      if(input("level")!=''){
        $data['level']=input("level");
      }
      $mod=model('agent');
      if($desc!=''){
          $res['desc']=$desc;
          $res=json_encode($res);
          echo $res;
      }else if(!$hasUserID){
        $res['state']=7;
        $res['desc']="玩家ID不存在";
        $res=json_encode($res);
        echo $res;
      }else if(input("percent")!=''&&$data['percent']>$preAgert['percent']){
          $res['desc']="提现比例不能大于上级代理的比例";
          $res=json_encode($res);
          echo $res;
       }else if(strlen($data['phone'])!=11){
          $res['desc']="请输入正确的手机号";
          $res=json_encode($res);
          echo $res;
       // }else if(!is_numeric($data['uid'])){
       //    $res['desc']="请输入正确的用户ID";
       //    $res=json_encode($res);
       //    echo $res;
       }else{
          $judge='';
          if(input('username')!=''){
             $judge=$mod->where('username="'.$data['username'].'"')->find();
          }
          if ($judge!='') {
     
            $res['desc']="该用户名已存在";
          }else{
            // var_dump($data);exit;
            $ret=model('agent')->where('id='.input('aid'))->update($data);
            // if(input('percent')!=''){
            //   $history['uid']=input('aid');
            //   $history['percent']=input('percent');
            //   $history['updatetime']=time();
            //   Db::table("rebatehistory")->insert($history);
            // }
            if ($ret) {
                $res['desc']="修改成功";
            }else{
                $res['desc']="数据未发生改变";
            }
          }
        // var_dump($data);exit;

        $res=json_encode($res);
        echo $res;
      }
    }
    //获取代理申请列表
    public function getApplyList(){
      $agentID=$this->memberinfo['id'];
      $ret=model('agent')->getApplyList($agentID);
      $this->assign('ret',$ret);
      return $this->fetch();
    }
}
