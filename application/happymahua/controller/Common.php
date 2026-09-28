<?php

/**
 * Created by PhpStorm.
 * User: wujunyuan
 * Date: 2017/7/3
 * Time: 13:20
 * 这里定义的是整个游戏的入口
 */
namespace app\happymahua\controller;

use think\Db;
use think\Controller;
use think\Request;
use think\Session;
use Hooklife\ThinkphpWechat\Wechat;
class Common extends Controller
{

    public function __construct()
    {
        $request = Request::instance();
        parent::__construct($request);
        Session::set('invitecode',input('invitecode'));
        Session::set('gametype',input('gametype'));
        Session::set('pwd',input('pwd'));
        Session::set('game','happymahua');
        //用户没有登录，让他去登录
        if (!Session::has('openid')) {
            //跳转到登录页面
            Session::set('jumpurl',$request -> url());
            $this->redirect(url('Login/index'));
        }

        //用户的所有信息
        $map['openid'] = Session::get('openid');
        $member = Db::name('users') -> where($map)->find();

        $this->memberinfo = $member;
        $this->assign('memberinfo', $member);


    }
}
