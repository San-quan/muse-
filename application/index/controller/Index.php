<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
use think\Validate;
use think\Session;
use think\Loader;

class Index extends Common
{
    public function index()
    {
    	echo "stringada";die;
		 header('location:game.php');
    }
}

