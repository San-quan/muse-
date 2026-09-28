<?php 


//初始化日志
namespace app\happymahua\controller;

use think\Controller;
use think\Loader;
use think\Db;
use think\Session;
ini_set('date.timezone','Asia/Shanghai');
Loader::import("extend.wxpay.Api");
Loader::import("extend.wxpay.JsApiPay");
Loader::import('extend.wxpay.log');
// Loader::addClassMap('app\extend\wxpay','..\extend\wxpay\WxPay.JsApiPay.php');
// Loader::addClassMap('app\extend\wxpay','..\extend\wxpay\WxPay.Api.php');
// namespace \Org\Util\Log::Init($logHandler, 15);;
// require_once 'log.php';
class Wxpay extends Controller
{
    
    // public function __construct()
    // {
    //     ini_set('date.timezone','Asia/Shanghai');
       
    // }
    //打印输出数组信息
    // function printf_info($data)
    // {
    //     foreach($data as $key=>$value){
    //         echo "<font color='#00ff55;'>$key</font> : $value <br/>";
    //     }
    // }
    public function index(){
      // Loader::import('extend.wxpay.log');
       
       if (!Session::has('openid')) {
           $isInGame=0;
           $this->redirect(url('Login/index'));
        }else{
            $isInGame=1;
        }
        $ret=Db::name("goods")->select();
        // var_dump($ret);exit;
        $userinfo=Db::name('users')->where("openid='".Session::get('openid')."'")->find();
        // var_dump(Session::get('openid'));exit;
        // $userinfo=$userinfo->toArray();
        // var_dump($userinfo);exit;
        $this->assign('isingame',$isInGame);
        $this->assign('useInfo',$userinfo);
        $this->assign('oid',Session::get('openid'));
        $this->assign('memberid',Session::get('member_id'));
        $this->assign('goodslist',$ret);
        $jsApiParameters='';
        $editAddress='';
        $this->assign('jsApiParameters',$jsApiParameters);
        $this->assign('editAddress',$editAddress);
        return $this->fetch('index/indexShopNew');
    }
    // public function wxpay($openId,$goods,$order_sn,$total_fee,$attach){
    public function wxpay()
    {
      
      $openId=input('openid');
      $attach=$this->genPayId(18);
      $total_fee=input('zuanshi');
      $goodsID=input('goodsid');
      $body="钻石";
      
      // $total_fee='2';
      $order_sn=\WxPayConfig::MCHID.date("YmdHis");
      $logHandler= new \CLogFileHandler("static/logs/".date('Y-m-d').'.log');
       // vendor("WxPay.Api"); 
       // vendor("WxPay.JsApiPay");
       // vendor("log");
       // $log=Log::Init($logHandler, 15);
       $log = \Log::Init($logHandler, 15);
       //①、获取用户openid
       $tools = new \JsApiPay();
       // $openId = $tools->GetOpenid();
       if(empty($openId)) $openId = $tools->GetOpenid();
       if (!isset($openId)) {
           $url="http://".$_SERVER['HTTP_HOST']."/game.php";
           Header("Location:$url"); 
           return;
       }
       //②、统一下单
       $input = new \WxPayUnifiedOrder();
       $input->SetBody($body);
       $input->SetAttach($attach);
       $input->SetOut_trade_no($order_sn);
       // $input->SetOut_trade_no(\WxPayConfig::MCHID.date("YmdHis"));
       $input->SetTotal_fee($total_fee);
       $input->SetTime_start(date("YmdHis"));
       $input->SetTime_expire(date("YmdHis", time() + 600));
       $input->SetGoods_tag("紫碧罗商品");
       $input->SetNotify_url("http://".$_SERVER['HTTP_HOST']."/game.php/wxpay/notify");
       $input->SetTrade_type("JSAPI");
       $input->SetOpenid($openId);
       $order = \WxPayApi::unifiedOrder($input);
       // echo '<font color="#f00"><b>统一下单支付单信息</b></font><br/>';
       // printf_info($order);
       $jsApiParameters = $tools->GetJsApiParameters($order);

       //获取共享收货地址js函数参数
       $editAddress = $tools->GetEditAddressParameters();
       $uid=Db::name("users")->where('openid="'.$openId.'"')->find();
       // var_dump($uid['id']);

       $diamond=Db::name("goods")->where('id='.$goodsID)->find();
       $backupOreder['openid']=$openId;
       $backupOreder['cost']=$total_fee/100;
       $backupOreder['ordernumber']=$order_sn;
       $backupOreder['createtime']=date("Y-m-d H:i:s",time());
       $backupOreder['paiType']="weixin";
       $backupOreder['status']=6;
       $backupOreder['goodsID']=$goodsID;
       // var_dump(json_decode($jsApiParameters));
       $backupOreder['sign']=json_decode($jsApiParameters)->paySign;
       $backupOreder['diamond']=$diamond['diamond'];
       $backupOreder['award']=$diamond['award'];
       $backupOreder['uid']=$uid['id'];
       Db::name("web_playerorder")->insert($backupOreder); 
       echo $jsApiParameters;
      // $this->error("jsApiParameters"); 
       //③、在支持成功回调通知中处理成功之后的事宜，见 notify.php
       /**
        * 注意：$data['jsApiParameters']=json_decode($jsApiParameters);
        *$data['editAddress']=json_decode($editAddress);
        * 1、当你的回调地址不可访问的时候，回调通知会失败，可以通过查询订单来确认支付是否成功
        * 2、jsapi支付时需要填入用户openid，WxPay.JsApiPay.php中有获取openid流程 （文档可以参考微信公众平台“网页授权接口”，
        * 参考http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html）
        */ 
       // // $data['jsApiParameters']=$jsApiParameters;
       // // $data['editAddress']=$editAddress;
       // // $data=json_encode($data);
       // // echo $data;
       // if (!Session::has('member_id')) {
       //     $isInGame=0;
       //  }else{
       //      $isInGame=1;
       //  }
       //  $ret=Db::name("goods")->select();
       //  // var_dump($ret);exit;
       //  $userinfo=Db::name('member')->where("id=".Session::get('member_id'))->find();
       //  // var_dump($userinfo);exit;
       //  $this->assign('isingame',$isInGame);
       //  $this->assign('useInfo',$userinfo);
       //  $this->assign('memberid',Session::get('member_id'));
       //  $this->assign('goodslist',$ret);
       // $this->assign('jsApiParameters',$jsApiParameters);
       // $this->assign('editAddress',$editAddress);
       // return $this->fetch('index/indexShopNew');
         
    }

    public function notify()
    {

            // $order_id="fsdfesseg";
            // $order_sn="123456";
            // $openid="o_Uikwgw_ECDiMDgjctUrQloWcro";
            // $total_fee=10000;
            // $data_sign="77w7";
            // $this->updateDB($order_id,$order_sn,$openid,$total_fee,$data_sign); exit;
            $xml = file_get_contents("php://input"); 
          // 这句file_put_contents是用来查看服务器返回的XML数据 测试完可以删除了  
          // file_put_contents('static/logs/log.txt',$xml,FILE_APPEND);  
//             $xml="<xml><appid><![CDATA[wx739738a6fc49cf29]]></appid>
// <attach><![CDATA[IFMWFjcGjCvq4v88Ya1518333747]]></attach>
// <bank_type><![CDATA[CFT]]></bank_type>
// <cash_fee><![CDATA[1]]></cash_fee>
// <fee_type><![CDATA[CNY]]></fee_type>
// <is_subscribe><![CDATA[Y]]></is_subscribe>
// <mch_id><![CDATA[1493196192]]></mch_id>
// <nonce_str><![CDATA[ojwvp5gj0jcmb8n3i6nxktlodx97wf7k]]></nonce_str>
// <openid><![CDATA[o_Uikwgw_ECDiMDgjctUrQloWcro]]></openid>
// <out_trade_no><![CDATA[149319619220180211152227]]></out_trade_no>
// <result_code><![CDATA[SUCCESS]]></result_code>
// <return_code><![CDATA[SUCCESS]]></return_code>
// <sign><![CDATA[CF06BBB9DD9AFE9E33DA7A2D0BD8DD28]]></sign>
// <time_end><![CDATA[20180211152232]]></time_end>
// <total_fee>1</total_fee>
// <trade_type><![CDATA[JSAPI]]></trade_type>
// <transaction_id><![CDATA[4200000071201802110881632608]]></transaction_id>
// </xml>";
          //将服务器返回的XML数据转化为数组  
          // $data = json_decode(json_encode(simplexml_load_string($xml,'SimpleXMLElement',LIBXML_NOCDATA)),true);  
          $data = $this->xmlToArray($xml);  
          // 保存微信服务器返回的签名sign  
          $data_sign = $data['sign'];  
          // sign不参与签名算法  
          unset($data['sign']);  
          $sign = $this->makeSign($data);  
            // file_put_contents('static/logs/log2.txt',$data,FILE_APPEND);
          // 判断签名是否正确  判断支付状态  
          if ( ($sign===$data_sign) && ($data['return_code']=='SUCCESS') && ($data['result_code']=='SUCCESS') ) {  
              $result = $data;  
              // 这句file_put_contents是用来查看服务器返回的XML数据 测试完可以删除了  
              // file_put_contents('static/logs/log1.txt',$result,FILE_APPEND);   
                
              //获取服务器返回的数据  
              $order_sn = $data['out_trade_no'];  //订单单号  
              $order_id = $data['attach'];        //附加参数,选择传递订单ID   
              $openid = $data['openid'];          //付款人openID  
              $total_fee = $data['total_fee'];    //付款金额  
                
               
              //更新数据库  
              $this->updateDB($order_id,$order_sn,$openid,$total_fee,$data_sign);  
          }else{  
              $result = false;  
          }  
          // 返回状态给微信服务器  
          if ($result) {  
              $str='<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>';  
          }else{  
              $str='<xml><return_code><![CDATA[FAIL]]></return_code><return_msg><![CDATA[签名失败]]></return_msg></xml>';  
          }  
          echo $str;  
          // return $result;  
    }
    /** 
     * 将xml转为array 
     * @param  string   $xml xml字符串或者xml文件名 
     * @param  bool     $isfile 传入的是否是xml文件名 
     * @return array    转换得到的数组 
     */  
    protected function xmlToArray($xml,$isfile=false){     
        //禁止引用外部xml实体  
        libxml_disable_entity_loader(true);  
        if($isfile){  
            if(!file_exists($xml)) return false;  
            $xmlstr = file_get_contents($xml);  
        }else{  
            $xmlstr = $xml;  
        }  
        $result= json_decode(json_encode(simplexml_load_string($xmlstr, 'SimpleXMLElement', LIBXML_NOCDATA)), true);          
        return $result;  
    }  
    protected function makeSign($data){  
        //获取微信支付秘钥  
        // require_once APP_ROOT."/Api/wxpay/lib/WxPay.Api.php";  
        $key = \WxPayConfig::KEY;  
        // 去空  
        $data=array_filter($data);  
        //签名步骤一：按字典序排序参数  
        ksort($data);  
        $string_a=http_build_query($data);  
        $string_a=urldecode($string_a);  
        //签名步骤二：在string后加入KEY  
        //$config=$this->config;  
        $string_sign_temp=$string_a."&key=".$key;  
        //签名步骤三：MD5加密  
        $sign = md5($string_sign_temp);  
        // 签名步骤四：所有字符转为大写  
        $result=strtoupper($sign);  
        return $result;  
    } 
    protected function updateDB($order_id,$order_sn,$openid,$total_fee,$data_sign)
    {


         // file_put_contents('static/logs/log1.txt',"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++",FILE_APPEND);
        $ret=Db::name("web_playerorder")->where('orderNo="'.$order_id.'"')->find();
        $data['sign']=$data_sign;
        $data['localOrderNo']=$order_sn;
        $data['orderNo']=$order_id;
        $data['price']=$total_fee/100;
        // if ($data['cost']==0.01) {
        //     $data['cost']=10;
        // }
        // var_dump($data);
        $data['status']=1;
        $data['time']=time();
        $data['paiType']='WeiXin';
        $diamond=Db::name("goods")->where('price='.$data['price'])->find();
      
    
        $judge=true;
        if ($ret=='') {
          // var_dump("expression");
          // $backupOreder['openid']=$openId;
          $backupOreder['orderNo']=$order_id;
           $backupOreder['status']=1;
          
           Db::name("web_playerorder")->where("ordernumber='".$order_sn."'")->update($backupOreder); 
           $judge=Db::name("web_final_order")->insert($data); 
           // var_dump($judge);
        }else{
            return;
        }

       if ($judge) {
          
           
              $savedmd['cards']=intval($diamond['diamond'])+intval($diamond['award']);
              
           
           
                    
              Db::name("users")->where('openid="'.$openid.'"')->setInc('paycards',$diamond['diamond']);
              Db::name("users")->where('openid="'.$openid.'"')->setInc('freecards',$diamond['award']);
              Db::name("users")->where('openid="'.$openid.'"')->setInc('cards',$savedmd['cards']);
               
               // var_dump($savedmd);
           
       }
    }
     public function genPayId($length = 7) {

        $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $password = "";
        for ( $i = 0; $i < $length; $i++ ){
            $password .= $chars[ mt_rand(0, strlen($chars) - 1) ];
        }
        $password.=time();
        return $password;
    }

}
?>
