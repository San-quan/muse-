<?php


namespace app\happymahua\controller;

use think\Db;
use think\Controller;
use think\Session;

class Index extends Common
{

    /**
     * 显示游戏大厅界面
     */
    public function index()
    {
    	
        $this->redirect( 'http://' . $_SERVER['HTTP_HOST'] .'/game/happymahua/index.php?invitecode='.Session::get('invitecode'));
    }
   
}
