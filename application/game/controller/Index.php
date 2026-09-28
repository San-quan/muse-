<?php


namespace app\game\controller;

use think\Db;
use think\Controller;
use think\Session;

class Index extends Common
{
    //$powertag 0/1 代理授权验证 不需要/需要
    private $powerTagSwitch = 0;


    /**
     * 显示游戏大厅界面
     */
    public function index()
    {

        //model('room') -> accounttemp(2);
        //echo '这里游戏大厅';
        //return $this->fetch();
        // $redbag=Db::query("select * from t_redbag where create_id=".$this->memberinfo['id']." and status=0");
        // foreach ($redbag as $k => $v) {
        //     if (time()-$v['create_time']>=600) {
        //         Db::query("update t_member set cards=cards+".$v['cards_num']." where id=".$this->memberinfo['id']);
        //         Db::query("update t_redbag set status=2 receive_id=".$this->memberinfo['id']." receive_time=".time()." where id=".$v['id']);
        //     }
        // }
        // $room=Db::query("select playcount,open_time,rule from t_room where member_id=".$this->memberinfo['id']." and playcount=1");
        // // var_dump($room);exit;
        // foreach ($room as $k => $v) {
        //     if (time()-$v['open_time']>=20) {
        //         $gamenum = explode(':',  unserialize($v['rule'])['gamenum']);
        //        Db::query("delete from t_room where id=".$v['id']);
        //        // Db::query("delete");
        //     }
        // }
        
       $this->redirect('http://' . $_SERVER['HTTP_HOST'] .'/game/happymahua/index.php?invitecode='.Session::get('invitecode'));
        // $this->redirect('http://www.xiaojiugame.com/ChuiNiu/index.php?invitecode='.Session::get('invitecode'));
        // $this->redirect('http://hhhy.wyx1818.xyz/RedFoxEui/index.php');
        // $this->redirect('http://nn.huangfeng8.top/RedFoxEui/index.php');
    }
    public function index9()
    {
        //model('room') -> accounttemp(2);
        //echo '这里游戏大厅';
        return $this->fetch();
    }
    public function index69()
    {
        // var_dump($this->memberinfo);
        //验证玩家是否已被授权
        // $this->assign('powertag',1);
        // if($this->powerTagSwitch){
        //     $haveInGroup = DB::query("select * from t_groups where account_id=:account_id ", ['account_id' => $this->memberinfo['id']]);
        //     if(!isset($haveInGroup[0])){
        //         $inviterInfo = DB::query("select * from t_accounts where account=:account", ['account' => $this->memberinfo['id']]);
        //         if(!isset($inviterInfo[0])){
        //             $this->assign('powertag',0);
        //         }
        //     }
        // }



        // $redbag=Db::query("select * from t_redbag where create_id=".$this->memberinfo['id']." and status=0");
        // foreach ($redbag as $k => $v) {
        //     if (time()-$v['create_time']>=600) {
        //         Db::query("update t_member set cards=cards+".$v['cards_num']." where id=".$this->memberinfo['id']);
        //         Db::query("update t_redbag set status=1,receive_id=".$this->memberinfo['id'].",receive_time=".time()." where id=".$v['id']);
        //     }
        // }
        // $sql=Db::getLastsql();
        // var_dump($sql);exit;
        // $room=Db::query("select id,playcount,open_time,rule,islock from t_room where member_id=".$this->memberinfo['id']." and playcount=1 and islock=0");
        // foreach ($room as $k => $v) {
        //     if ((time()-$v['open_time'])>=600) {
        //         $gamenum = explode(':',unserialize($v['rule'])['gamenum']);
        //         Db::query("update t_member set cards=cards+".$gamenum[1]." where id=".$this->memberinfo['id']);
        //         Db::query("delete from t_room where id=".$v['id']);
        //     }
        // }

        $notice=Db::query("select msg from t_message where type='notice'");
        //model('room') -> accounttemp(2);
        //echo '这里游戏大厅';

        $this->assign('notice',$notice[0]['msg']);
        $this->assign('useInfo',$this->memberinfo);
        return $this->fetch('xianqu');
    }
    //新的大厅界面
    // public function indexXin(){
    //      //验证玩家是否已被授权
    //     $this->assign('powertag',1);
    //     if($this->powerTagSwitch){
    //         $haveInGroup = DB::query("select * from t_groups where account_id=:account_id ", ['account_id' => $this->memberinfo['id']]);
    //         if(!isset($haveInGroup[0])){
    //             $inviterInfo = DB::query("select * from t_accounts where account=:account", ['account' => $this->memberinfo['id']]);
    //             if(!isset($inviterInfo[0])){
    //                 $this->assign('powertag',0);
    //             }
    //         }
    //     }
    //     $this->assign('useInfo',$this->memberinfo);
    //     return $this->fetch();
    // }
    //商店界面
    public function indexShop(){
        return $this->redirect(url('wxpay/index'));

    }
    
    public function doAdd()
    {
        $id=input('id');
        // var_dump($id);exit;
        if ($this->memberinfo['parent_id']==$id) {
            $msg='您已经是该代理下的玩家';
        }
        if ($this->memberinfo['parent_id']!=0) {
           $msg='您已经拥有代理';
        }
        if ($this->memberinfo['parent_id']!=$id&&$this->memberinfo['parent_id']==0) {
           $ret=model('users')->where('openid="'.$this->memberinfo['openid'].'"')->update(['parent_id'=>input('id')]);
           // var_dump($ret);exit;
           if ($ret) {
               $msg='添加成功';
           }else{
               $msg='添加失败';
           }
        }
        
        $this->assign('data',$msg);
        return $this->fetch();
    }
    public function zhanji()
    {   

        $history = Db::query('SELECT sum(t1.num) as bet_count,t2.id as room_id,t2.room_num,t2.rule,t2.taipaitime as etime FROM `t_moneydetailrank` as t1 left join t_room as t2 on t1.room_id=t2.id where t1.member_id=? GROUP BY t1.room_id ORDER BY taipaitime desc limit 0,10', [$this->memberinfo['id']]);
        $result['shierren']=array();
        $result['liuren']=array();
        foreach ($history as $key => $v) {
            if (isset(unserialize($v['rule'])['roomkind'])) {
                $type=unserialize($v['rule'])['roomkind'];
                $v['type']=intval($type) ;
                $v['etime']=date("m-d H:i",$v['etime']);
                if (unserialize($v['rule'])['roomkind']==12) {
                    $result['shierren'][]=$v;
                }else if(unserialize($v['rule'])['roomkind']==6){
                    $result['liuren'][]=$v;
                }
                
                
            }
        }
        // var_dump($result);exit;
        $bjlhis=Db::query("select sum(bet_count) as bet_count,member_id,room_id,finishtime as etime from t_baijiale_history_detail where member_id=".$this->memberinfo['id']." group by room_id order by etime desc limit 0,10");
        // $bjlhis=Db::query("select sum(bet_count) as bet_count,member_id,room_id,finishtime as etime from t_baijiale_history_detail where member_id=1318 group by room_id order by etime desc limit 0,10");
        $bjlres=array();
        foreach ($bjlhis as $key => $v) {
            // $v['type']=intval($type) ;
            $v['etime']=date("m-d H:i",$v['etime']);
            $bjlres[]=$v; 
        }
        // var_dump($bjlhis);exit;
        $result=json_encode($result);
        $bjlres=json_encode($bjlres);
        $this->assign('niuhis',$result);
        $this->assign('bjlhis',$bjlres);
        $this->assign('useInfo',$this->memberinfo);
        return $this->fetch('baijiale/zhanji');
    }
    public function faxian(){
       
        $ss=Db::name('joinhistory')->where('uid='.$this->memberinfo['id'].' and gametype='.$this->gameType['6niuniu'].' or gametype='.$this->gameType['12niuniu'])->order('joinTime desc')->find();
        // var_dump($ss);exit;
         $ret=model('room')->where('id='.$ss['roomid'].' and playcount<>0')->find();
        // var_dump($this->memberinfo);exit;
        $rule=unserialize($ret['rule']);
        // var_dump($rule['gametype']);exit;
        $res=[];
        $res['id']=$ss['roomid'];
        $res['gametype']=$ret['gametype'];
        switch ($rule['gametype']) {
            case '6':
                $res['type']='轮庄';
                break;
            case '4':
                $res['type']='抢庄';
                break;
            case '2':
                $res['type']='固定庄';
                break;

        }
        $res['room_num']=$ret['room_num'];
        $res['rule']=$rule['rule'];
        $res=json_encode($res);
        // var_dump($res);exit;
        $this->assign('useInfo',$this->memberinfo);
        $this->assign('room',$res);
        return $this->fetch();
    }
    public function bjlfaxian(){
        $roomid=input('roomid');
        $ret=model('room')->where('id='.$roomid)->find();
        // var_dump(unserialize($ret['rule']));exit;
        if ($ret=='') {
            $rule='';
        }else{
            $rule['type']=unserialize($ret['rule'])['rule'];
        }
        $rule['room_num']=$ret['room_num'];

        // var_dump($rule);
        echo json_encode($rule);
    }




    public function bjlHoutai(){

        $isHavePower=Db::name("baijiale_power")->where('uid='.$this->memberinfo['id'])->find();
       
        
        if($isHavePower!=''){
            $sql = "SELECT t1.roompwd,t1.gameName,t2.playground  FROM usercoastrecord as t1 LEFT JOIN rooms as t2 ON t1.roompwd = t2.roompwd WHERE t1.uid =".$this->memberinfo['id']." AND t1.coast > 0 AND t2.gameover=0 AND t1.gameName='Baijiale' GROUP BY roompwd ORDER BY t1.costtime DESC LIMIT 20";
            // $sql = "SELECT t1.roompwd,t1.gameName,t2.playground  FROM usercoastrecord as t1 LEFT JOIN rooms as t2 ON t1.roompwd = t2.roompwd WHERE t1.uid =".$this->memberinfo['id']." AND t1.coast > 0 AND t1.gameName='Baijiale' GROUP BY roompwd ORDER BY t1.costtime DESC LIMIT 20";
            $res=Db::query($sql);
            // var_dump($res);
            $this->assign('list',$res);
            return $this->fetch();
            // var_dump($isHavePower);
        }else{
            redirect(url("index/index"));
        }
        
    }
    public function bjlHtDetail(){
        $pwd=input('pwd');
        $isHavePower=Db::name("baijiale_power")->where('uid='.$this->memberinfo['id'])->find();
       
        
        if($isHavePower!=''){
            $res=Db::name("bjl_roomdata")->where("roompwd=".$pwd)->find();
            $detail=json_encode(unserialize($res['roomData']));

            $this->assign('detail',$detail);
            return $this->fetch();
        }else{
            redirect(url("index/index"));
        }
        
    }
}
