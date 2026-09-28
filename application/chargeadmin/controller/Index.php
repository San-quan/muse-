<?php
namespace app\chargeadmin\controller;

use think\Controller;
use think\Db;
use think\Validate;
use think\Session;
use think\Loader;

class Index extends Common
{
    public function index()
    {
        // $inviteUrl="http://cuiniu.huangfeng4.top/game.php?type=".$this->memberinfo['invite'];
        $gameurl =  'http://h55.fenhao11.com/';
        $inviteUrl=$gameurl."game.php?invitecode=".$this->memberinfo['invite'];
        $inviteUrlXL=$gameurl."xlgame.php?invitecode=".$this->memberinfo['invite'];
    	$user=model('users');
    	$ret['usersNum']=$user->getUsersNum();
    	$ret['roomsNum']=model('rooms')->getRoomsNum($this->memberinfo);
    	// $ret['todayCoastCards']=model('usercoastrecord')->getCoastCardsNum();
        if($this->memberinfo['parentID']==0) {
            $ret['todayCoastMoneyCards']=Db::table('usercoastrecord')->alias('t1')
            ->where([
                't1.costtime'=>['gt',strtotime(date('Y-m-d'))],
                't1.cardsmode'=>['eq',1]
            ])->sum('coast');
        }else{
            $ret['todayCoastMoneyCards']=Db::table('usercoastrecord')->alias('t1')
            ->join('rooms t3','t3.roompwd=t1.roompwd','left')
            ->where([
                't1.costtime'=>['gt',strtotime(date('Y-m-d'))],
                't1.cardsmode'=>['eq',1],
              
                't3.invitecode'=>['eq',$this->memberinfo['invite']]
            ])->sum('t1.coast');
            // var_dump($ret['todayCoastMoneyCards']);
        }
        
        if(!$ret['todayCoastMoneyCards']){
            $ret['todayCoastMoneyCards']=0;
        }
        

        if($this->memberinfo['parentID']==0) {
            $ret['todayCoastFreeCards']=Db::table('usercoastrecord')->alias('t1')
            
            ->where([
                't1.costtime'=>['gt',strtotime(date('Y-m-d'))],
                't1.cardsmode'=>['eq',2]])->sum('coast');
                
        }else{
            $ret['todayCoastFreeCards']=Db::table('usercoastrecord')->alias('t1')
            ->join('rooms t3','t3.roompwd=t1.roompwd','left')
            ->where([
                't1.costtime'=>['gt',strtotime(date('Y-m-d'))],
                't1.cardsmode'=>['eq',2],
              
                't3.invitecode'=>['eq',$this->memberinfo['invite']]
            ])->sum('t1.coast');
            // var_dump($ret['todayCoastMoneyCards']);
        }
        if(!$ret['todayCoastFreeCards']){
            $ret['todayCoastFreeCards']=0;
        }
    	$ret['lossTotal']=model('LossTotal')->gettotalData();
    	$ret['onlineRooms']=model('rooms')->getOnlineRoomsNum();
        $ret['newPlayer']=model('users')->getTodayNewPlayers();
        $ret['surplusCards']=model('users')->getSurplusCards();
        $ret['freeze']=Db::table('web_tixianorder')->where('uid='.$this->memberinfo['id']." and status=2")->sum("cashnum");
        $ret['payCoastChat']=Db::table('userschatcoastrecord')->where("cardsmode=1")->sum("coast");
        $ret['freeCoastChat']=Db::table('userschatcoastrecord')->where("cardsmode=2")->sum("coast");

        $ret['dailimoney'] = Db::table('agent_ncome')->where("aid != 1")->sum("obtain");
        $ret['dailitixian'] = Db::table('web_tixianorder')->where("uid != 1 and status = 1")->sum("cashnum");

        $ret['todayIncome']=Db::table('web_final_order')->where('time>'. strtotime(date('Y-m-d')))->sum('price');
        $ret['todayIncome']==''?$ret['todayIncome']=0:$ret['todayIncome']=$ret['todayIncome'];
    	// var_dump($res);exit;
        $ret['freeze']==''?$ret['freeze']='0.00':$ret['freeze']=$ret['freeze'];
        $ret['inviteUrl']=$inviteUrl;
        $ret['inviteUrlXL']=$inviteUrlXL;
        $ret['chongzhi']=Db::table('web_final_order')->where(['status'=>['eq',1]])->sum('price');
        if(!$ret['chongzhi']){
            $ret['chongzhi']='0.00';
        }
        //我的上级代理
        switch($this->memberinfo['level']){
            case '0': $ret['levelname']='总代理'; break;
            case '1': $ret['levelname']='一级'; break;
            case '2': $ret['levelname']='二级'; break;
            case '3': $ret['levelname']='三级'; break;
        }
        if($this->memberinfo['level'] > 0){
            $ret['parent']=model('agent')->where('id='.$this->memberinfo['parentID'])->find();
        }
    	$this->assign('ret',$ret);
        if($this->memberinfo['parentID']==0){
            return $this->fetch();
        }else{
            return $this->fetch('indexfen');
        }
		
    }
    public function lossDetail(){
        $data['start']=input('start');
        $data['end']=input('end');
        $data['type']=input('type');
        if($data['start']==''&&$data['end']!=''){
            $data['start']='1970-01-01 00:00:00';
        }
        if($data['end']==''&&$data['start']!=''){
            $data['end']=date("Y-m-d H:i:s",time());
        }
        $ret=model('LossDetail')->getlossDetail($data);
        // var_dump($ret);exit;
        $this->assign('data',$data);
        $this->assign('ret',$ret);
        return $this->fetch();
    }
    //退出登录
    public function loginOut(){
        Session::delete('userid');
        $this->redirect('Login/index');
    }
    //通知
    public function message(){
        if($this->memberinfo['parentID']!=0)return;
        $ret=Db::table('message')->where('type=\'notice\'')->find();
        // var_dump($ret);
        $this->assign("ret",$ret);
        return $this->fetch();
    }
    //客服
    public function kefu(){
        if($this->memberinfo['parentID']!=0)return;
        $ret=Db::table('message')->where('type=\'notice\'')->find();
        // var_dump($ret);
        $this->assign("ret",$ret);
        return $this->fetch();
    }
    public function editMessage(){
        if($this->memberinfo['parentID']!=0)return;
        $msg=input('msg');
        if($msg!=''){
            Db::table('message')->where('type=\'notice\'')->update(['msg'=>$msg]);
            echo 1;
        }
    }
    public function editKefu(){
        if($this->memberinfo['parentID']!=0)return;
        $kefu=input('kefu');
        if($kefu!=''){
            Db::table('message')->where('type=\'notice\'')->update(['kefu'=>$kefu]);
            echo 1;
        }
    }

    public function loopimg(){
        $loopList=Db::table('platformphoto')->paginate(10,false,['query'=>request()->param()]);
        $this->assign('loopList',$loopList);
        return $this->fetch();
    }

    public function ajaxAddLoop(){
        $title=input('title')?input('title'):'';
        $content=request()->file('content');
        $recommend=input('recommend')?input('recommend'):'';
        $state=false;
        $desc='';
        if(!$content){
            $desc='图片不能为空';
        }elseif($recommend==''||!is_numeric($recommend)){
            $desc='图片排序不能为空';
        }else{
            $info=$content->move(ROOT_PATH . 'static' . DS . 'uploads');
            if(!$info){
                $desc='图片上传失败';
            }else{
                $content=$info->getSaveName();
                $content=str_replace('\\','/',$content);
                $data=[
                    'title'=>$title,
                    'content'=>$content,
                    'recommend'=>$recommend,
                    'addtime'=>time()
                ];
                $res=Db::table('platformphoto')->insert($data);
                if($res){
                    $state=true;
                    $desc='添加成功';
                }else{
                    $desc='添加失败';
                }
            }
        }
        $ret=[
            'state'=>$state,
            'desc'=>$desc
        ];
        echo json_encode($ret);
    }

    public function ajaxDelLoop(){
        $id=input('id')?input('id'):'';
        $loop=Db::table('platformphoto')->find($id);
        $loopPath=$loop['content'];
        if(file_exists(ROOT_PATH . 'static' .DS.'uploads'. DS .$loopPath)){
            unlink(ROOT_PATH . 'static' .DS.'uploads'. DS .$loopPath);
        }
        $res=Db::table('platformphoto')->where(['id'=>['eq',$id]])->delete();
        if($res){
            $ret=['state'=>true,'desc'=>'删除成功'];
        }else{
            $ret=['state'=>false,'desc'=>'删除失败'];
        }
        echo json_encode($ret);
    }
}
