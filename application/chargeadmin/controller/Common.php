<?php 
namespace app\chargeadmin\controller;
use think\Db;
use think\Controller;
use think\Request;
use think\Session;
class Common extends Controller
{

	public $memberinfo;
	public $controller;
	public $mod;
	public function __construct(Request $request){
		parent::__construct();
		//用户没有登录，让他去登录
		if(!Session::has('userid')){
			//跳转到登录页面
			$this->redirect(url('Login/index'));
		}
		//获取当前控制器的名字
        $this->controller = strtolower($request->controller());
        $this->mod = strtolower($request->module());
		$id['id'] = Session::get('userid');
        $member = Db::name('agent') -> where($id)->find();
        if(!$member){
            $this->redirect(url('Login/logout'));
        }
        $this->memberinfo = $member;
        // var_dump($member);exit;
        
        $this->assign('memberinfo', $member);
	}
}
 ?>