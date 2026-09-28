<?php
namespace app\chargeadmin\controller;

use think\Controller;
use think\Db;
use think\Validate;
use think\Session;
use think\Loader;

class Player extends Common
{
    public function index()
    {

        strtotime(input('start'))?$data['start']=input('start'):$data['start']='';
        strtotime(input('end'))?$data['end']=input('end'):$data['end']='';
        $data['uid']=input('uid');

        // var_dump($data);exit;
        if($data['uid']!=''&&is_numeric($data['uid'])){
            $data['state']=1;
        }else if(strtotime($data['start'])||strtotime($data['end'])){
            $data['state']=2;
            if($data['start']==''&&$data['end']!=''){
                $data['end']=strtotime($data['end']);
                $data['end']=date('Y-m-d H:i:s',$data['end']);
                $data['start']='1970-01-01 00:00:00';
            }
            if($data['end']==''&&$data['start']!=''){
                $data['start']=strtotime($data['start']);
                $data['start']=date('Y-m-d H:i:s',$data['start']);
                $data['end']=date("Y-m-d H:i:s",time());
            }
        }else{
            $data['state']=0;
        }
        
        $ret=model('users')->getUsersList($data);
        // var_dump($ret->render());exit;
        // var_dump($ret);exit;
        $this->assign('data',$data);
        $this->assign('ret',$ret);
		return $this->fetch();
    }
    public function turnToBlack(){
        $data['isblack']=input('isblack');
        $data['uid']=input('uid');
        // echo 1;
        if(!is_numeric($data['isblack'])||!is_numeric($data['uid']))return;
        model('users')->turnToBlack($data);
        if($data['isblack']==0){
            echo 1;
        }else{
            echo 0;
        }
        // echo 1;
        // echo json_encode($state);
        // echo $state;
    }
    //充值列表
    public function chargeList(){
       $data=array();
        strtotime(input('start'))?$data['start']=input('start'):$data['start']='';
        strtotime(input('end'))?$data['end']=input('end'):$data['end']='';
        $data['uid']=input('uid');
        $data['id']=input('uid');
        if(!is_numeric($data['uid'])){
            $data['uid']='';
        }
        if($data['end']==''||$data['start']==''){
            $data['end']=date("Y-m-d H:i:s",time());
            $data['start']=date("Y-m-d 00:00:00",time());
        }
        if($data['uid']!=''){
            $data['uid']=model('users')->field('openid')->where("id=".$data['id'])->find();
            $data['uid']=$data['uid']['openid'];
        }
        $ret=model('playerorder')->getPlayerRechargeList($data);
        // var_dump($ret);
        $this->assign('data',$data);
        $this->assign('ret',$ret);
        return $this->fetch();
    }
    //获取订单详情
    public function dingdanXiangqing(){
         $id=input('id');
        if($id==''||!is_numeric($id)){
            $data['state']=0;
            $data['desc']="数据有误，请刷新后重试";
        }else{
            $data['state']=1;
            $ret=model('playerorder')->getDingdanDetail($id);
            switch($ret['status']){
                case 1:
                    $state="成功";
                    break;
               
                default:
                    $state="失败";
                    break;

            }
            // var_dump($ret);
            $data['desc']='<div class="block">
                <label class="control-label">ID:</label>
                '.$ret["id"].'
              </div>
              <div class="block">
                <label class="control-label">玩家ID:</label>
                '.$ret["uid"].'
              </div>
              <div class="block">
                <label class="control-label">订单号:</label>
                '.$ret["localOrderNo"].'
              </div>
              <div class="block">
                <label class="control-label">金额(元):</label>
                '.$ret["price"].'
              </div>
              <div class="block">
                <label class="control-label">钻石数(个):</label>
               '.$ret["diamond"].'
              </div>
              <div class="block">
                <label class="control-label">赠送数(个):</label>
                '.$ret["award"].'
              </div>
              <div class="block">
                <label class="control-label">创建时间:</label>
                '.date("Y-m-d H:i:s",$ret["time"]).'
              </div>
                <div class="block">
                <label class="control-label">订单状态:</label>
                '.$state.'
              </div>
              ';
        }
        // dump($ret);
        $data=json_encode($data);
        echo $data;
    }
    //平台收支明细查询
    public function rechargeDetail(){

        $roomid=input('roomid');
        if($roomid==''||!is_numeric($roomid)){
            $data['state']=0;
            $data['desc']="数据有误，请刷新后重试";
        }else{
            $data['state']=1;
            $ret=model('playerorder')->getRechargeDetail($roomid);
            // switch($ret['status']){
            //     case 1:
            //         $state="成功";
            //         break;
            //     case 2:
            //         $state="取消";
            //         break;
            //     case 3:
            //         $state="失败";
            //         break;
            //     default:
            //         $state="未知";
            //         break;
            // }
        
            $data['desc']=
            '<table cellpadding="5px" width="100%">
                <tr>
                    <th>玩家ID</th>
                    <th>玩家昵称</th>
                    <th>消耗钻石</th>
                    <th>职能</th>
                </tr>
            ';
            // var_dump($ret);
            $count=count($ret);
            foreach ($ret as $key => $value) {
                if($value['roomowner']==$value['uid']){
                    $job='房主';
                }else{
                    $job='房客';
                }
                $data['desc'].='
                    <tr>
                        <td>'.$value['uid'].'</td>
                        <td>'.$value['nickname'].'</td>';
                if($value['coast']<0){
                    $value['coast']*=-1;
                    $value['coast']='退还'.$value['coast'];
                }
                if($value['cardsmode']==1){
                    $data['desc'].='<td>'.$value['coast'].'(付费钻石)</td>';
                }else{
                    $data['desc'].='<td>'.$value['coast'].'(免费钻石)</td>';
                }
                $data['desc'].='<td>'.$job.'</td>
                    </tr>
                ';
            }
            $data['desc'].='</table>';
        }
        $data=json_encode($data);
        echo $data;
    }


    //展现充值钻石页面
    public function addZuanshi(){
        if($this->memberinfo['parentID']!=0){
            return;
        }
        input('uid')?$uid=input('uid'):$uid='';
        $ret=model('users')->getOneUserByUid($uid);
        //dump($ret);
        if(is_array($ret)&&sizeof($ret)>0){
            $this->assign('ret',$ret);
        }else{
            $this->assign('ret',"");
        }
        
        //  var_dump($ret);
        // exit;
        return $this->fetch();
    }
    //获取需要充值的玩家数据
    public function ajaxAddzuanshi(){
        if($this->memberinfo['parentID']!=0){
            return;
        }
        $data['uid']=input('uid');
        $data['cards']=input('zuanshi');
        $state=false;
        $desc='';
        if(!is_numeric($data['cards'])||$data['cards']<=0){
            $desc='充值钻石数请输入正整数';
        }else{
            $res=model('users')->addzuanshi($data);
            if($res){
                $state=true;
                $desc='充值成功';
            }else{
                $desc='玩家ID有误';
            }
        }
        $ret['state']=$state;
        $ret['desc']=$desc;
        echo json_encode($ret);
    }
    //展现充值记录页面
    public function zuanshiHistory(){
        if($this->memberinfo['parentID']!=0){
            return;
        }
        $data=array();
        strtotime(input('start'))?$data['start']=input('start'):$data['start']='';
        strtotime(input('end'))?$data['end']=input('end'):$data['end']='';
        $data['uid']=input('uid');
        if(!is_numeric($data['uid'])){
            $data['uid']='';
        }
        if($data['end']==''||$data['start']==''){
            $data['end']=date("Y-m-d H:i:s",time());
            $data['start']=date("Y-m-d",time());
            $data['start']=strtotime($data['start']);
            $data['start']=date('Y-m-d H:i:s',$data['start']);
        }
        $ret=model('Users')->getZuanshiHistory($data);
        $this->assign('data',$data);
        $this->assign('ret',$ret);
        return $this->fetch('player/zuanshihistory');
    }

}