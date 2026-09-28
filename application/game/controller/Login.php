<?php
/**
 * Created by PhpStorm.
 * User: wujunyuan
 * Date: 2017/7/3
 * Time: 13:27
 */

namespace app\game\controller;


use think\Controller;
use Hooklife\ThinkphpWechat\Wechat;
use think\Session;
use think\Request;
class Login extends Controller
{
    // public $hostname="http://127.0.0.1:81/TaiziGame/index.php";
    // public $hostname="http://192.168.3.9:8099/TaiziGame/index.php";
   
    /**
     *显示用户登录界面
     */
    public function index()
    {
        $this->weixin();
    }
    public function weixin(){
        // 本机调试旁路：URL 带 uid+roompwd，或 host 为 127.0.0.1/localhost 时，用 uid 当 openid 进桌，不跳微信授权
        $req_host = isset($_SERVER['HTTP_HOST']) ? strval($_SERVER['HTTP_HOST']) : '';
        $is_local_host = (strpos($req_host, '127.0.0.1') === 0 || strpos($req_host, 'localhost') === 0);
        $uid_arg = intval(input('uid'));
        $room_arg = trim(strval(input('roompwd')));
        if ($is_local_host || ($uid_arg > 0 && $room_arg !== '')) {
            $local_openid = strval($uid_arg > 0 ? $uid_arg : 1);
            Session::set('openid', $local_openid);
            Session::set('nickname', 'local' . $local_openid);
            Session::set('headurl', '');
            $jump = 'http://' . $_SERVER['HTTP_HOST'] . '/game/happymahua/index.php?uid=' . $local_openid;
            if ($room_arg !== '') { $jump .= '&roompwd=' . $room_arg; }
            $this->redirect($jump);
            return;
        }
        //使用微信登录，直接跳转到微信授权地址，这里要用微信的开发包了
        $url = Wechat::app()->oauth->scopes(['snsapi_userinfo'])->redirect() -> getTargetUrl();
        $this->redirect($url);
    }

    /**
     * 处理用户登录
     * 接收数据，然后验证
     */
    public function dologin()
    {

    }

    /**
     * 微信登录，这里发起微信登录请求，要设置一个回调地址
     */
    public function weixinlogin()
    {

    }

    /**
     * 微信登录回调地址，这里获取微信传回来的数据，然后查询数据库，验证用户信息登录
     */
    public function filterNickname($nickname)
     
    {
        $nickname = preg_replace('/[\x{1F600}-\x{1F64F}]/u', '', $nickname);
        $nickname = preg_replace('/[\x{1F300}-\x{1F5FF}]/u', '', $nickname);
        $nickname = preg_replace('/[\x{1F680}-\x{1F6FF}]/u', '', $nickname);
        $nickname = preg_replace('/[\x{2600}-\x{26FF}]/u', '', $nickname);
        $nickname = preg_replace('/[\x{2700}-\x{27BF}]/u', '', $nickname);
        $nickname = str_replace(array('"','\''), '', $nickname);
     
        $nickname = addslashes(trim($nickname));
        $nickname = preg_replace_callback( '/./u',
            function (array $match) {
                return strlen($match[0]) >= 4 ? '' : $match[0];
            },$nickname);

        return $nickname;//addslashes(trim($nickname));
    }
    public function weixinloginback()
    {
        $user = Wechat::app()->oauth->user();
        $ret = $user->toArray();
        //数据模型
        Session::set('openid', $ret['id']);
        Session::set('nickname', $ret['nickname']);
        Session::set('headurl', $ret['avatar']);
        $gamename='ChuiNiu';
        switch(Session::get('game')){
            case 'chuiniu':
                $gamename='ChuiNiu';
                break;
            case 'xilaile':
                $gamename='xilaile';
                break;
            case 'niudaxia':
                $gamename='niudaxia';
                break;
            case 'happymahua':
                $gamename='happymahua';
                break;
            case 'happymahuanew':
                $gamename='happymahuanew';
                break;
            case 'zhajinhua':
                $gamename='zhajinhua';
                break;
            case 'eightshisan':
                $gamename='eightshisan';
                break;
            case 'pphsuoha':
                $gamename='pphsuoha';
                break;
            case 'redfox':
                $gamename='redfox';
                break;
            case 'taizi':
                $gamename='taizi';
                break;
            case 'touwangzhenba':
                $gamename='touwangzhenba';
                break;
            case 'pinshiniu':
                $gamename='pinshiniu';
                break;
            case 'huanleshisan':
                $gamename='huanleshisan';
                break;
            case 'smallddz':
                $gamename='smallddz';
                break;
            case 'heji':
                $gamename='heji';
                break;
            default:
                $gamename='happymahua';
                break;
        }
        if(Session::has('gametype')&&Session::has('pwd')&&Session::get('gametype')!=''&&Session::get('pwd')!=''){
            $pwd=Session::get('pwd');
            $gametype=Session::get('gametype');
            Session::set('gametype','');
            Session::set('pwd','');
            $this->redirect( 'http://' . $_SERVER['HTTP_HOST'] .'/game/'.$gamename.'/index.php?gametype='.$gametype.'&pwd='.$pwd.'&invitecode='.Session::get('invitecode'));
        }else{
            $this->redirect( 'http://' . $_SERVER['HTTP_HOST'] .'/game/'.$gamename.'/index.php?invitecode='.Session::get('invitecode'));
        }
        // $this->redirect('http://' . $_SERVER['HTTP_HOST'] .'/ChuiNiu/index.php?invitecode='.Session::get('invitecode'));
        
        
    }

    public function updateUserData($uid,$nick,$avatar){
        $db = model('users');
        $res = $this->getImage($avatar,"./static/avatar",$uid.".png",true);
            $up = array(
                    'nickname'=>$nick,
                    'photo'=>$res['save_path']
                        );
        $db->where(array('id'=>$uid))->update($up);
    }
    // public function tete(){
    //     $ret['avatar']='http://wx.qlogo.cn/mmopen/ajNVdqHZLLDjp3l8JzvD4FX69yLz6xtj4zqia2u3CqQB9X8OVSSG9p5GWlEYN7HGYZPnS8flySo2zXKIWK5MEkg/0';
    //     $data['openid']="visitor_884";
    //     $this->GrabImage($ret['avatar'],$data['openid']);
    // }
    public function GrabImage($url,$name) {
        $header = array(   
         'User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:45.0) Gecko/20100101 Firefox/45.0',    
         'Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',    
         'Accept-Encoding: gzip, deflate',);
         // $url='http://wx.qlogo.cn/mmopen/ajNVdqHZLLDjp3l8JzvD4FX69yLz6xtj4zqia2u3CqQB9X8OVSSG9p5GWlEYN7HGYZPnS8flySo2zXKIWK5MEkg/0';
         $curl = curl_init();curl_setopt($curl, CURLOPT_URL, $url);curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
         curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);curl_setopt($curl, CURLOPT_ENCODING, 'gzip');
         curl_setopt($curl, CURLOPT_HTTPHEADER, $header);$data = curl_exec($curl);$code = curl_getinfo($curl, CURLINFO_HTTP_CODE);curl_close($curl);
         if ($code == 200) {//把URL格式的图片转成base64_encode格式的！    
         $imgBase64Code = "data:image/jpeg;base64," . base64_encode($data);
         }
         $img_content=$imgBase64Code;//图片内容
         //echo $img_content;exit;
         if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $img_content, $result))
         { 
            $type = $result[2];//得到图片类型png?jpg?gif? 
            $new_file = "./static/wxhead/".$name.".{$type}"; 
            if (file_put_contents($new_file, base64_decode(str_replace($result[1], '', $img_content))))
            {  
                // echo '新文件保存成功：', $new_file; 
                return $type;
            }
        }
    } 
    
    public function youke(){
        $db = model('users');
        $openid = time();
        $nickname = "Hz".rand(1000,9999);
        $headurl = "http://wx.qlogo.cn/mmopen/vi_32/8AltZyhRCsoiaVgyvxibGR7IzDa3SbCYK5GUyrjVQws69AcrQoItVKBlYhMdGKlPicaSzDknrGeeTbXdOUCWpy3qg/0";
        $data = array(
                    'openid'=>$openid,
                    'nickname'=>$nickname,
                    'photo'=>'',
                    'status'=>1,
                    'score'=>0,
                    'money'=>0,
                    'vcoin'=>0,
                    'cards'=>1000,
                    'freecards'=>1000,
                    'level'=>0,
                    'online'=>1,
                    'agency_id'=>1,
                    'reg_time'=>time(),
                    'login_time'=>time()
                    );
        $memberid = $db->insert($data);
        if($memberid){
            $uid = $db ->getLastInsID();
            $this->updateUserData($uid,$nickname,$headurl);
        }else{
            $this->error($db -> getError());
        }

        if($uid!=-1){
            $member = $db->where(array('id'=>$uid))->find();
            $member = $member -> toArray();
            Session::set('openid', $openid);
            Session::set('nickname', $member['nickname']);
            Session::set('headurl', $member['photo']);
            //$this->redirect('http://hhhy.wyx1818.xyz/RedFoxEui/index.php');
            // $this->redirect('http://happy.mahua0.top/MahuaGame/index.php?invitecode='.Session::get('invitecode'));
            // $this->redirect('http://192.168.3.9:8096/MahuaGame/index.php?invitecode='.Session::get('invitecode'));

            if(Session::has('gametype')&&Session::has('pwd')&&Session::get('gametype')!=''&&Session::get('pwd')!=''){
                $this->redirect( 'http://' . $_SERVER['HTTP_HOST'] .'/TaiziGame/index.php?gametype='.Session::get('gametype').'&pwd='.Session::get('pwd').'&invitecode='.Session::get('invitecode'));
            }else{
                $this->redirect( 'http://' . $_SERVER['HTTP_HOST'] .'/TaiziGame/index.php?invitecode='.Session::get('invitecode'));
            }
            
        }else{
            echo "无法获取玩家数据";
        }
    }

    // /**
    //  * 退出登录
    //  */
    // public function logout(){
    //     Session::set('openid', NULL);
    //     $this->redirect(url('Index/index'));
    // }



    // public function test(){
    //     Session::set('member_id', input('id'));
    //     $this->redirect(url('Index/index'));
    // }

    // public function comeout()
    // {
    //     //进入房间的ID
    //     $memberid = input('id');
    //     $db = model('member');
    //     $db->comeout(array('id' => $memberid));
    // }




    public function getImage($url,$save_dir='',$filename='',$type=0){
            if(trim($url)==''){
                return array('file_name'=>'','save_path'=>'','error'=>1);
            }
            if(trim($save_dir)==''){
                $save_dir='./';
            }
            if(trim($filename)==''){//保存文件名
                $ext=strrchr($url,'.');
                if($ext!='.gif'&&$ext!='.jpg'&&$ext!='.png'&&$ext!='.jpeg'){
                    return array('file_name'=>'','save_path'=>'','error'=>3);
                }
                $filename=time().rand(0,10000).$ext;
            }
            if(0!==strrpos($save_dir,'/')){
                $save_dir.='/';
            }
            //创建保存目录
            if(!file_exists($save_dir)&&!mkdir($save_dir,0777,true)){
                return array('file_name'=>'','save_path'=>'','error'=>5);
            }
            //获取远程文件所采用的方法
            if($type){
                $ch=curl_init();
                $timeout=5;
                curl_setopt($ch,CURLOPT_URL,$url);
                curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
                curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout);
                $img=curl_exec($ch);
                curl_close($ch);
            }else{
                ob_start();
                readfile($url);
                $img=ob_get_contents();
                ob_end_clean();
            }
            //$size=strlen($img);
            //文件大小
            $fp2=@fopen($save_dir.$filename,'a');
            fwrite($fp2,$img);
            fclose($fp2);
            unset($img,$url);
            return array('file_name'=>$filename,'save_path'=>$save_dir.$filename,'error'=>0);
        }



}