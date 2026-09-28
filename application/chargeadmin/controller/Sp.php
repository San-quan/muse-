<?php
namespace app\chargeadmin\controller;

use think\Controller;
use think\Db;
use think\Validate;
use think\Session;
use think\Loader;
use think\Request;

class Sp extends Controller
{
    public function __construct(Request $request){
        parent::__construct();
        

        $this->controller = strtolower($request->controller());
        $this->mod = strtolower($request->module());
        $id['id'] = Session::get('userid');
        $member = Db::name('agent') -> where($id)->find();
    
        $this->memberinfo = $member;
        // var_dump($member);exit;
        
        $this->assign('memberinfo', $member);
    }
    public function index()
    {
        // $this->redirect(url('Sp/historyScoreList'));
        // exit();
        $ret=model('WebSuperps')->getSuperList();
        // if($ret['state']){
        //     $data['state']=true;
        // }else{
        //     $data['state']=false;
        // }
        // var_dump($ret);exit;
        $this->assign('data',$ret);
        return $this->fetch();
        // 
    }
    /*
       $data['state']:0：ID不能为空。1：请输入正确的ID ,2:成功,3:id已被添加
     */
    public function add(){
        $uid=input('uid');
        $data['state']=0;
        if($uid==''){
            $data['state']=0;
        }else if(!is_numeric($uid)){
            $data['state']=1;
        }else{
            if(model('users')->checkUsers($uid)){
                if(!model('webSuperps')->checkUsers($uid)){
                    $data['state']=3;
                }else{
                    $data['state']=2;
                    model('webSuperps')->addSuper($uid);
                }
            }else{
                 $data['state']=1;
            }
        }
        // var_dump($data);
        echo json_encode($data);
        
    }
    public function deleteSP(){
        $uid=input('uid');
        if($uid==''){
            $data['state']=0;
        }else if(!is_numeric($uid)){
            $data['state']=1;
        }else{
            if(model('webSuperps')->checkUsers($uid)){
                $data['state']=3;
            }else{
                $data['state']=2;
                model('webSuperps')->deleteSuper($uid);
            }
        }
        // var_dump($data);
        echo json_encode($data);
    }
    public function editData(){
        $uid=input('uid');
        $data=model('webSuperps')->getSuperData($uid);
        echo json_encode($data);
    }
    public function doEditSP(){
        $uid=input('uid');
        $rank=input('rank');
        $uid=(int)($uid);
        $rank=(int)($rank);
        $state=false;
        $desc='';
        if(!is_numeric($rank)||$rank<0||$rank>100){
            $desc='概率请输入0到100之间的正整数';
        }else{
            $ret=model('web_superps')->editSuper($uid,$rank);
            if($ret){
                $desc='修改成功';
                $state=true;
            }else{
                $desc='数据未发生变化';
            }
        }
        $res['state']=$state;
        $res['desc']=$desc;
        return $res;
    }

    //历史战绩
    public function historyScoreList(){
        $uid=input('uid') ? input('uid') : '';
        $today=date('Y-m-d',time());
        $today=strtotime($today);
        $today=date('Y-m-d H:i:s',$today);
        $where=array();
        $start=input('start') ? input('start') : $today;
        $end=input('end') ? input('end') : date('Y-m-d H:i:s');
        $gamename=input('gamedata') ? input('gamedata') : '';
        if($uid!=''){
            $where['uid']=array('eq',$uid);
        }
        if ($gamename != '') {
            $gamedata = Db::table('room_info')->where("id=$gamename")->find();
            $where['gamename']=array('eq',$gamedata['gamename']);
        }
        $where['createtime']=array('between',array(strtotime($start),strtotime($end)));
        $data=Db::table('roomrecord')->alias('a')
            ->join('users b','a.uid=b.id','left')
            ->field('a.*,b.nickname')
            ->where($where)
            ->order('createtime desc')
            ->paginate(10,false,['query'=>request()->param()]);
        $dataObj=$data;
        $data=$data->toArray();
        $ret['count']=Db::table('roomrecord')->where($where)->count();
        $ret['sum']=Db::table('roomrecord')->where($where)->sum("score");
        $ret['state']=true;
        $ret['dataObj']=$dataObj;
        $ret['data']=$data['data'];
        $ret['where']=array(
            'uid'=>$uid,
            'start'=>$start,
            'end'=>$end
        );
        $gamedata = Db::table('room_info')->select();
        $this->assign('gamename',$gamename);
        $this->assign('ret',$ret);
        $this->assign('gamedata',$gamedata);
        return $this->fetch("sp/historyScoreList");
    }

    
}
