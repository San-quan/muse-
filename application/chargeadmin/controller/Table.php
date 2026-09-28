<?php
namespace app\chargeadmin\controller;

use think\Controller;
use think\Db;
use think\Validate;
use think\Session;
use think\Loader;

class Table extends Common
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
                $data['end']=strtotime($data['end']);
                $data['end']=date('Y-m-d H:i:s',$data['end']);
                $data['start']='1970-01-01 00:00:00';
            }
            if($data['end']==''&&$data['start']!=''){
                $data['start']=strtotime($data['start']);
                $data['start']=date('Y-m-d H:i:s',$data['start']);
                $data['end']=date("Y-m-d H:i:s",time());
            }
        }
        if($this->memberinfo['parentID']==0){
            $data['invite']="";
        }else{
            $data['invite']=$this->memberinfo['invite'];
        }
    	$ret=model('rooms')->getRooms($data);
    	$this->assign('ret',$ret);
        $this->assign('data',$data);
		return $this->fetch();
    }
    public function getRoomDetail(){
        $pwd=input('pwd');
        // $pwd=924281;
        $data=array();
        $ret=model('rooms')->getRoomDetail($pwd);
        if($ret&&count($ret)!=0){
            $data['state']=1;
            //循环局数
            for($i=1;$i<$ret[count($ret)-1]['playground']+1;$i++){
                for($j=0;$j<count($ret);$j++){
                    if($ret[$j]['playground']==$i){
                        //$data['data'][局数][人数]
                        $data['data'][$i][]=$ret[$j];
                    }
                }
            }
            //获取当前局玩家最多的时候是哪一句
            $maxPlayer=0;
            $maxIndex=1;
            for($i=1;$i<=count($data['data']);$i++){
                if(count($data['data'][$i])-$maxPlayer>0){
                    $maxPlayer=count($data['data'][$i]);
                    $maxIndex=$i;
                }
            }
            //获取玩家姓名
            $name='';
            $total=array();
            for($i=0;$i<$maxPlayer;$i++){
                //'.substr($data['data'][$maxIndex][$i]['nickname'],0,5).'
                $name=$name.'<th style="width:60px;overflow:hidden;text-overflow:ellipsis;"><span style="width:100%;overflow:hidden;">'.($data['data'][$maxIndex][$i]['nickname']).'</span></th>';
                $total[$i]=0;
            }
            // //将玩家的分数按局数分组整理
            $detail='';
            for($i=0;$i<count($data['data']);$i++){
                
                $detail=$detail.'<tr><td>第'.($i+1).'局</td>';
                for($j=0;$j<$maxPlayer;$j++){
                    if($j<count($data['data'][$i+1])){
                        $data['data'][$i+1][$j]['score']<0?$style='style="color:red;text-align:center;"':$style='style="color:green;text-align:center;"';
                        $detail=$detail.'<td '.$style.'>'.$data['data'][$i+1][$j]['score'].'</td>';
                        $total[$j]+=$data['data'][$i+1][$j]['score'];
                    }else{
                        $detail=$detail.'<td style="color:red;text-align:center;">—</td>';
                    }
                    
                }
                $detail=$detail.'</tr>';
            }
            //生成玩家总分的td
            $strTotal='<tr><td>总计</td>';
            for($i=0;$i<count($total);$i++){
                $total[$i]<0?$style='style="color:red;text-align:center;"':$style='style="color:green;text-align:center;"';
                $strTotal=$strTotal.'<td '.$style.'>'.$total[$i].'</td>';
            }
            $strTotal=$strTotal.'</tr>';
            $detail=$detail.$strTotal;
            $data['html']='<table class="table table-striped b-t text-small" style="width:100%;max-width:none;">
                <thead>
                  <tr>
                    <th style="width:60px;">局数</th>'.$name.'
                  </tr>
                </thead>
                <tbody>
                    '.$detail.'
                </tbody>
              </table>';
        }else{
            $data['state']=0;
        }
        echo json_encode($data);
    }

    public function get_brief_str($str, $max_length) { 
       strlen($str) . ""; 
      if (strlen($str) > $max_length) { 
        $check_num = 0; 
        for ($i = 0; $i < $max_length; $i++) { 
          if (ord($str[$i]) > 128) 
            $check_num++; 
        } 
        if ($check_num % 3 == 0) 
          $str = substr($str, 0, $max_length) . ".."; 
        else
          if ($check_num % 3 == 1) 
            $str = substr($str, 0, $max_length +2) . ".."; 
          else
            if ($check_num % 3 == 2) 
              $str = substr($str, 0, $max_length +1) . ".."; 
      } 
      return $str; 
    }

    public function delroom(){
        $roompwd=input('roompwd')?input('roompwd'):'';
        $roomowner=input('roomowner')?input('roomowner'):'';
        $start=input('start')?input('start'):'';
        $end=input('end')?input('end'):'';
        if($start==''){
            $start=date('Y-m-d 00:00:00');
        }
        if($end==''){
            $end=date('Y-m-d H:i:s');
        }
        $condition=[
            'roompwd'=>$roompwd,
            'roomowner'=>$roomowner,
            'start'=>$start,
            'end'=>$end
        ];
        $where=[];
        $where['t1.createtime']=['between',[strtotime($start),strtotime($end)]];
        $where['t1.gameover']=['eq',0];
        if($roompwd!=''){
            $where['t1.roompwd']=['eq',$roompwd];
        }
        if($roomowner!=''){
            $where['t1.roomowner']=['eq',$roomowner];
        }
        $roomlist=Db::table('rooms')->alias('t1')
            ->join('users t2','t1.roomowner=t2.id','left')
            ->where($where)->field('t1.*,t2.nickname')
            ->paginate(10,false,['query'=>request()->param()]);
        $this->assign('condition',$condition);
        $this->assign('roomlist',$roomlist);
        return $this->fetch();
    }

    public function games(){
        $games=Db::table('room_info')->paginate(10,false,['query'=>request()->param()]);
        $this->assign('games',$games);
        return $this->fetch();
    }

    public function ajaxGetGameInfo(){
        $id=input('id')?input('id'):'';
        $gameInfo=Db::table('room_info')->find($id);
        echo json_encode($gameInfo);
    }

    public function ajaxEditGame(){
        $id=input('id')?input('id'):'';
        $gamename=input('gamename')?input('gamename'):'';
        $state=input('state')?input('state'):'';
        $gameorder=input('gameorder')?input('gameorder'):'';
        $message=input('message')?input('message'):'';
        $status=false;
        $desc='';
        if($gamename==''){
            $desc='游戏名不能为空';
        }elseif($state==''){
            $desc='请选择游戏状态';
        }elseif($gameorder==''||!is_numeric($gameorder)){
            $desc='游戏排名不能为空';
        }else{
            $data=[
                'gamename'=>$gamename,
                'state'=>(int)$state,
                'gameorder'=>(int)$gameorder,
                'message'=>$message,
            ];
            $res=Db::table('room_info')->where(['id'=>['eq',$id]])->update($data);
            if($res){
                $status=true;
                $desc='修改成功';
            }else{
                $desc='修改失败';
            }
        }
        $ret=[
            'status'=>$status,
            'desc'=>$desc
        ];
        echo json_encode($ret);
    }

    public function ajaxAddGame(){
        $gamename=input('gamename')?input('gamename'):'';
        $state=input('state')?input('state'):'';
        $gameorder=input('gameorder')?input('gameorder'):'';
        $message=input('message')?input('message'):'';
        $status=false;
        $desc='';
        if($gamename==''){
            $desc='游戏名不能为空';
        }elseif($state==''){
            $desc='请选择游戏状态';
        }elseif($gameorder==''||!is_numeric($gameorder)){
            $desc='游戏排序不能为空';
        }else{
            $data=[
                'gamename'=>$gamename,
                'state'=>$state,
                'gameorder'=>$gameorder,
                'message'=>$message
            ];
            $res=Db::table('room_info')->insert($data);
            if($res){
                $status=true;
                $desc='添加成功';
            }else{
                $desc='添加失败';
            }
        }
        $ret=['status'=>$status,'desc'=>$desc];
        echo json_encode($ret);
    }

    public function ajaxDelGame(){
        $id=input('id')?input('id'):'';
        $res=Db::table('room_info')->where(['id'=>['eq',$id]])->delete();
        if($res){
            $ret=['status'=>true,'desc'=>'删除成功'];
        }else{
            $ret=['status'=>false,'desc'=>'删除失败'];
        }
        echo json_encode($ret);
    }

}
