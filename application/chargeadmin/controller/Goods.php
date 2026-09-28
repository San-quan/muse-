<?php
namespace app\chargeadmin\controller;

use think\Controller;
use think\Db;
use think\Validate;
use think\Session;
use think\Loader;

class Goods extends Common
{
    public function index()
    {
      $goodtype=input('goodtype')?input('goodtype'):'';
      $condition=['goodtype'=>$goodtype];
      $ret=model('goods')->getGoodsList();
      $this->assign('ret',$ret);
      $this->assign('condition',$condition);
      return $this->fetch();
    }
    //商品详情
    public function goodinfo(){
   	  $gid=input('gid')?input('gid'):'';
      if($gid!=''&&is_numeric($gid)){
        $ret=model('goods')->where('id='.$gid)->find();
        $this->assign('goodData',$ret);
      }
      $this->assign('gid',$gid);
      return $this->fetch('goods/goodinfo');
    }
    
    public function editGoods(){
      $gid=input('gid')?input('gid'):'';

      $price=input('price')?input('price'):'';
      $diamond=input('diamond')?input('diamond'):'';
      $award=input('award')?input('award'):'';
      $name=input('name')?input('name'):'';

      $state=false;
      $desc='';

      if($price==''||!is_numeric($price)||$price<0){
        $desc='商品价格必须是非负整数';
      }elseif($diamond==''||!is_numeric($diamond)||$diamond<=0){
        $desc='商品数量比赛是正整数';
      }elseif($award!=''&&(!is_numeric($award)||$award<0)){
        $desc='赠送数量必须是正整数';
      }elseif($name==''){
        $desc='商品名称不能为空';
      }else{
        $data=[];
        $data['price']=$price;
        $data['diamond']=$diamond;
        $data['award']=$award;
        $data['name']=$name;
        if($gid!=''){
          $res=Db::table('goods')->where(['id'=>['eq',$gid]])->update($data);
        }else{
          $res=Db::table('goods')->insert($data);
        }
        
        if($res){
          $state=true;
          $desc='操作成功';
        }else{
          $desc='数据未发生改变';
        }
      }

      $ret=[
        'state'=>$state,
        'desc'=>$desc
      ];
      echo json_encode($ret);
    }

    public function delGoods(){
      $id=input('id')?input('id'):'';
      $res=Db::table('goods')->where(['id'=>['eq',$id]])->delete();
      echo $res;
    }

    public function song(){
      $songList=Db::table('signinsong')->alias('t1')
        ->join('goods t2','t1.goodsid=t2.id','left')
        ->field('t1.*,t2.name')
        ->select();
      if(!$songList){
        $songList=[];
      }
      $goodsList=Db::table('goods')->select();
      $this->assign('songList',$songList);
      $this->assign('goodsList',$goodsList);
      return $this->fetch();
    }

    public function getSongDay(){
      $songDay=Db::table('signinsong')->count();
      echo json_encode($songDay);
    }

    public function ajaxAddSong(){
      // $continuityDay=input('continuityDay')?input('continuityDay'):'';
      $continuityDay=Db::table('signinsong')->count();
      $continuityDay=(int)$continuityDay+1;
      $goodsid=input('goodsid')?input('goodsid'):'';
      $res=Db::table('signinsong')->insert(['continuityDay'=>$continuityDay,'goodsid'=>$goodsid]);
      $state=false;
      $desc='';
      if($res){
        $state=true;
        $desc='添加成功';
      }else{
        $desc='添加失败';
      }
      $ret=['state'=>$state,'desc'=>$desc];
      echo json_encode($ret);
    }

    public function ajaxSaveSong(){
      $continuityDay=input('continuityDay')?input('continuityDay'):'';
      $goodsid=input('goodsid')?input('goodsid'):'';
      $state=false;
      $desc='';
      $res=Db::table('signinsong')->where(['continuityDay'=>['eq',$continuityDay]])->update(['goodsid'=>$goodsid]);
      if($res){
        $state=true;
        $desc='设置成功';
      }else{
        $desc='设置失败';
      }
      $ret=['state'=>$state,'desc'=>$desc];
      echo json_encode($ret);
    }

    public function ajaxDelSong(){
      $continuityDay=Db::table('signinsong')->count();
      $state=false;
      $desc='';
      $res=Db::table('signinsong')->where(['continuityDay'=>['eq',$continuityDay]])->delete();
      if($res){
        $desc='删除成功';
        $state=true;
      }else{
        $desc='删除失败';
      }
      $ret=['state'=>$state,'desc'=>$desc];
      echo json_encode($ret);
    }
}
