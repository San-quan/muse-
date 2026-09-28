<?php

/**
 * Created by PhpStorm.
 * User: wujunyuan
 * Date: 2017/7/3
 * Time: 13:20
 * 这里定义的是整个游戏的入口
 */
namespace app\game\controller;

use think\Db;
use think\Controller;
use think\Request;
use think\Session;
use Hooklife\ThinkphpWechat\Wechat;
class Common extends Controller
{
    protected $memberinfo = array();
    /*
        $gameType游戏种类
    */
    protected $gameType=array('baijiale'=>8000,'6niuniu'=>8001,'9niuniu'=>8002,'12niuniu'=>8003);
    /*
        $distime二十局牛牛解散时间单位分钟
        $distime十局牛牛解散时间
    */
    protected $distime=20;
    protected $distime2=10;
    protected $judge=true;

    public function __construct()
    {
        $request = Request::instance();
        parent::__construct($request);
        Session::set('invitecode',input('invitecode'));
        // 本机调试旁路：URL 带 uid+roompwd，或 host 为 127.0.0.1/localhost 时，用 uid 当 openid，不跳微信授权
        $req_host = isset($_SERVER['HTTP_HOST']) ? strval($_SERVER['HTTP_HOST']) : '';
        $is_local_host = (strpos($req_host, '127.0.0.1') === 0 || strpos($req_host, 'localhost') === 0);
        $uid_arg = intval(input('uid'));
        $room_arg = trim(strval(input('roompwd')));
        if (!Session::has('openid') && ($is_local_host || ($uid_arg > 0 && $room_arg !== ''))) {
            $local_openid = strval($uid_arg > 0 ? $uid_arg : 1);
            Session::set('openid', $local_openid);
            Session::set('nickname', 'local' . $local_openid);
            Session::set('headurl', '');
        }
        //用户没有登录，让他去登录
        if (!Session::has('openid')) {
            //跳转到登录页面
            Session::set('jumpurl',$request -> url());
            $this->redirect(url('Login/index'));
        }
        // else{
        //     $this->redirect('http://192.168.3.9:8080/RedFoxEui/index.php');
        //     // $this->redirect('http://nn.huangfeng8.top/RedFoxEui/index.php');
        // }
        // if(intval(input('give5')) > 0){
        //     header('location:http://wpa.qq.com/msgrd?v=3&uin=1051033780&site=qq&menu=yes');
        // }
        // if(intval(input('give55')) > 0){
        //     $map['id'] = Session::get('member_id');
        //     Db::name('member') -> where($map)->update(array('cards' => 5));
        // }
        if(Session::has('jumpurl')){
            $jumpurl = Session::get('jumpurl');
            // var_dump($jumpurl);exit;
            Session::set('jumpurl',null);
            $this->redirect($jumpurl);
        }
        //用户的所有信息
        $map['openid'] = Session::get('openid');
        $member = Db::name('users') -> where($map)->find();
        // var_dump($member);exit;
        // if(!$member){
        //     $this->redirect(url('Login/logout'));
        // }
        $this->memberinfo = $member;
        $this->assign('memberinfo', $member);
         // model('room')->niudisabled($this->memberinfo['id']);
        // $this->judge=model('room')->isdisroom($member['id'],$this->distime,$this->distime2);
        // $this->gameType=array('6niuniu'=>8001,'9niuniu'=>8002,'12niuniu'=>8003);
        //生成js签名
        // $jsconfig = Wechat::app() -> js ->config(array('onMenuShareQQ', 'onMenuShareWeibo','onMenuShareTimeline', 'onMenuShareAppMessage'),false);
        // $this->assign('jsconfig', $jsconfig);

    }
}
