<?php 


//初始化日志
namespace app\happymahua\controller;

use think\Controller;
use think\Loader;
use think\Db;
use think\Session;
ini_set('date.timezone','Asia/Shanghai');


class Shbpay extends Controller
{
    //易付宝支付函数及变量
    // 商户号
private $merchantNumber = 'API0100005402003281';

// 支付网关
private $gateway_url = 'https://www.shbapi.com/api/unified/payment';
//网关支付URL
private $gateway_card_url = 'http://39.108.134.13:10015/api/card/payment?context=';
//快捷支付URL
private $gateway_quick_url = 'http://39.108.134.13:10015/api/quick/payment?context=';

//商户私钥 rsa_private_key.pem
private $my_private_key = '-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCleO3msnZweJB83IXP3QJBmxs4r+Y0cKoJKH9IIq1dOOh23iV4
tUcB5IAqTbnqpZAaKWi8dBTc0v8YyQg3Nr6baCF1aJz+AsvAIeAa2XBdvQt4H/pp
CuKkeqLi93Es/R7vue4ohid/869p32q2yHslHpaSKrCXd1cjC2ygcm3AIQIDAQAB
AoGAHYp9TlZF9sZPZTspWHaoVHYQYgplGq+Sa5gjQQmP0bi7J515KxeR2bClgOfn
bRCprUH/RMWkg9fXWuFo6hKH7IPW9GAFw/M39rXmK6wUWHFmkPxlPbOmbK6THVy+
MAU966OShPTqEhzC02RGBFWHkvtWHmcA9KxBlzUPuHxP/8ECQQCqTCFjjMwb4JOC
BD/jLi7QR1rAXZOv003R75OZT1EOHIU9hEvJD7hVfF0AzgXLlE+GqiYB1+FmnPUb
lVYpp2gFAkEA+L8uO6E362JWEZ4H5hESh5zwwqNaBMLWaxb/jSQeMyVnvXtxRlkB
JSMH0CPmCSgdNbNSDbqcZSLHepX3I2R+bQJBAIMWt1z6NOQAq4uZ2dP26PJK+wC5
B8aA0ZaY5PVOqQZDzgzcmbnb7/leEflcnfln4Q+4SimBFHD4wXTKL9lAlEECQBkH
E13IkNnMISDQp7bMTPL8JXVP/kSwXeaUf83xrmAzCUcVXoZXejgEWErm8cRGFvpK
Op1LA2VhpHR/FkinWdkCQQCNYcM9KDCv+4m/TvqGYhWyq7rqrQ2osijoBGL8MHZP
WLX/A6CyPH0zhtsCaBUaq1+c9V+yrT7WSNfpUB4MWyGR
-----END RSA PRIVATE KEY-----';


// 速汇宝公钥
private $shbapi_public_key = '-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrn57jG1EC2vq4m2HZToZEx7ZI
aPp2XfkGVXXMNpk5gJxsbgKa2Q429pidmyj5oA0JIEzYWojwKXF8c9cl1J95y15d
LT9/CJVbpDzAciuKJYLet2fQufrJMCKdY7sJdympwADEPmbOfsnw61WCRZnabWU3
Ke1O8JM2Gd+2OW4guwIDAQAB
-----END PUBLIC KEY-----';
    // 根据密钥对数据签名生成sign
private function sign($data, $mch_key) {
  $str = '';
  ksort($data, SORT_STRING);
  foreach($data as $k => $v) {
    if ( $v === '' || $v === null || $k === 'sign' ) {
      continue;
    }
    $str .= $k . '=' . $v . '&';
  }

  $str .= 'key=' . $mch_key;
  return md5($str);
}

// 提交post请求
private function post_json($url, $post) {
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
  curl_setopt($ch, CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
  curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
  $s = curl_exec($ch);
  curl_close($ch);
  return $s;
}

// 提交post请求
private function post_jsonfile($url,$file,$post) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $file);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: multipart/form-data']);
    $s = curl_exec($ch);
    curl_close($ch);
    return $s;
}


private function getimg($url){

    $aext = explode('.', $url);

    $source=file_get_contents($url);
    return $source;
}


// 记录日志
private function mylog($str) {
  // if ( is_array($str) || is_object($str) ) {
  //   $str = var_export($str, true);
  // }

  // $str = date('Y-m-d H:i:s') . "\t" . $str . "\r\n";

  // $r = @file_put_contents('static/logs/log.txt', $str, FILE_APPEND);
  // if ( !$r ) {
  //   @unlink('log.txt');
  //   @file_put_contents('static/logs/log.txt', $str);
  // }
}


// 私钥计算sign
private function rsa_private_sign($originalData, $key) {
  $encryptData = null;
  $pi_key = openssl_pkey_get_private($key);
  openssl_sign($originalData, $encryptData, $pi_key, OPENSSL_ALGO_MD5);
  openssl_free_key($pi_key);
  $encryptData = base64_encode($encryptData);
  return $encryptData;
}

// 私钥加密
private function rsa_public_encrypt($str, $key) {
  $pi_key = openssl_pkey_get_public($key);
  $lists = str_split($str, 117);
  foreach($lists as &$v) {
    openssl_public_encrypt($v, $v, $pi_key);
  }
  openssl_free_key($pi_key);
  $lists = implode('', $lists);
  $lists = base64_encode($lists);
  return $lists;
}

// 私钥解密
private function rsa_private_decrypt($str, $key) {
  $str = base64_decode($str);
  $pi_key = openssl_pkey_get_private($key);
  $lists = str_split($str, 128);
  $results = [];
  foreach($lists as $v) {
    $r = null;
    openssl_private_decrypt($v, $r, $pi_key);
    $results[] = $r;
  }
  $results = implode('', $results);
  return $results;
}
 
    public function index(){
     $uid=input('uid');
        if($uid==''){
            $uid=-1;
        }
        $goodsID=input('goodsID');
        if($goodsID==''){
            $goodsID=1;
        }
        // $uid=667040;
        $ret=Db::name("goods")->where('id='.$goodsID)->find();

        $userinfo=Db::name('users')->where('id='.$uid)->find();
        if($userinfo==''){
            $userinfo['id']=-1;
            $userinfo['nickname']='';
        }

        // var_dump($ret);exit;
        // $userinfo=model('users')->where("id=667040")->find();
        // $this->assign('isingame',$isInGame);
        $this->assign('userinfo',$userinfo);
        $this->assign('memberid',$uid);
     
        $this->assign('goodsInfo',$ret);

      
            return $this->fetch('index/SHBshop');
      } 
    // public function wxpay($openId,$goods,$order_sn,$total_fee,$attach){
    public function shbpay()
    {
      
      $uid=input('uid');
      $goodsID=input('goodsId');
      //0：微信，1：支付宝
      $type=input('type');
      // $attach=$this->genPayId(18);
      // $total_fee=input('zuanshi');
      // 支付通道

      $channelMapped = 'PAY_SYB';

      // 支付类型
      if($type==0){
        $defrayalType = 'WECHAT_JSAPI';
        $backup['paiType']="SHBWX";
      }else if($type==1){
        $defrayalType = 'ALI_NATIVE';
        $backup['paiType']="SHBAL";
      }else{
        $defrayalType = 'WECHAT_JSAPI';
        $backup['paiType']="SHBWX";
      }
     
      $goodsInfo=Db::name("goods")->where('id='.$goodsID)->find();
      
      // 单号
      $merchantOrderNumber = $this->genPayId();

      // 金额(单位:分)
      $tradeAmount = $goodsInfo['price']*100;

      // 后台通知接口地址
      $notify_url = 'http://' . $_SERVER['HTTP_HOST']. '/game.php/Shbpay/notify';
      // 前台跳转地址
      $result_url = 'http://' . $_SERVER['HTTP_HOST'] . '/game.php';

      

      $data = array();

      $data['businessHead'] = array();
      $data['businessHead']['charset'] = '00';
      $data['businessHead']['version'] = 'V1.0.0';
      $data['businessHead']['method'] = 'unifiedPayment';
      $data['businessHead']['merchantNumber'] = $this->merchantNumber;
      $data['businessHead']['requestTime'] = date('Ymdhis');
      $data['businessHead']['signType'] = '';
      $data['businessHead']['sign'] = '';

      $data['businessContext'] = array();
      $data['businessContext']['defrayalType'] = $defrayalType;
      $data['businessContext']['subMerchantNumber'] = $this->merchantNumber;
      $data['businessContext']['channelMapped'] = $channelMapped;
      $data['businessContext']['merchantOrderNumber'] = $merchantOrderNumber;
      $data['businessContext']['tradeCheckCycle'] = 'T1';
      $data['businessContext']['orderTime'] = date('Ymdhis');
      $data['businessContext']['currenciesType'] = 'CNY';
      $data['businessContext']['tradeAmount'] = $tradeAmount;
      $data['businessContext']['commodityBody'] = '商品信息';
      $data['businessContext']['commodityDetail'] = '商品详情';
      $data['businessContext']['commodityRemark'] = '商品备注';
      $data['businessContext']['returnUrl'] = $result_url;
      $data['businessContext']['notifyUrl'] = $notify_url;
      $data['businessContext']['terminalId'] = '';
      $data['businessContext']['terminalIP'] = '127.0.0.1';
      $data['businessContext']['userId'] = '';
      $data['businessContext']['remark'] = '';
      $data['businessContext']['attach'] =  $merchantOrderNumber;

      ksort($data['businessContext']);

      // 计算sign s
      $originalData = json_encode($data['businessContext'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
      $data['businessHead']['sign'] = $this->rsa_private_sign($originalData, $this->my_private_key);
      if ( !$data['businessHead']['sign'] ) {
          echo '计算签名失败';
          die;
      }
      // 计算sign e
      
      

      // 加密 s
      $originalData = json_encode($data);
      $encryptData = $this->rsa_public_encrypt($originalData, $this->shbapi_public_key);
      $post = '{"context":"'.$encryptData.'"}';
      // 加密 e


      $s = $this->post_json($this->gateway_url, $post);

      if ( !$s ) {
          echo '接口请求失败';
          die;
      }

      $result = @json_decode($s, true);
      
      if ( @$result['message']['code'] != '200' ) {
          echo @$result['message']['content'] ?: '未知错误';
          die;
      }

      $result = $this->rsa_private_decrypt($result['context'], $this->my_private_key);
      $result = @json_decode($result, true);
      if ( !$result ) {
          echo '解密失败';
          die;
      }
      //生成预生成订单插入数据库
      
      $tmp=model("users")->where("id=".$uid)->find();
      $backup['openid']=$tmp['openid'];
      $backup['cost']=$goodsInfo['price'];
      $backup['uid']=$tmp['id'];
      $backup['createtime']=date('Y-m-d H:i:s',time());
      $backup['ordernumber']=$merchantOrderNumber;
      $backup['goodsID']=$goodsInfo['id'];
      $backup['diamond']=$goodsInfo['diamond'];
      $backup['award']=$goodsInfo['award'];
      
  
  
      $backup['status']=6;
      $backup['sign']=$data['businessHead']['sign'];
      $judge=Db::name("web_playerorder")->where('sign="'.$data['businessHead']['sign'].'"')->find();
      if ($judge=='') {
          Db::name("web_playerorder")->insert($backup);
      }

      // url
      $content = $result['businessContext']['content'];

   
      
    if($type==0){
        echo json_encode(urlencode($content));
      }else if($type==1){
        echo json_encode($content);
      }else{
        echo json_encode(urlencode($content));
      }
      // $this->redirect($content);
      // echo '<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">';
      // echo '生成二维码或跳转到该地址即可发起支付：<br>';
      // echo '手机访问：<a href="'.$content.'" target="_blank">'.htmlspecialchars($content).'</a><br/>';
      // echo '或手机扫二维码：<img src="https://api.qrserver.com/v1/create-qr-code/?size=210x210&data='.urlencode($content).'" />';
         
    }
   

    public function notify()
    {
        $data = file_get_contents('php://input');

        $this->mylog('收到通知：' . $data);
        // file_put_contents('static/logs/log.txt',$data,FILE_APPEND);  
        $result = @json_decode($data, true);
        if ( !$result ) {
          echo '没有收到任何内容';
          die;

        } else if ( @$result['message']['code'] != '200' ) {
          echo @$result['message']['content'] ?: '未知错误';
          die;
        }

        $result = $this->rsa_private_decrypt($result['context'], $this->my_private_key);

        $this->mylog('收到通知-解密：' . $result);

        $result = @json_decode($result, true);
        if ( !$result ) {
          $this->mylog('解密失败：' . $result);
          echo '解密失败';
          
          die;

        } else if ( @$result['businessContext']['orderStatus'] != 'SUC' ) {
          $this->mylog('解密失败：' . $result);
          echo '订单状态非SUC';
          
          die;
        }
        // 订单金额
        $tradeAmount = $result['businessContext']['tradeAmount'];

        // 商户单号
        $merchantOrderNumber = $result['businessContext']['merchantOrderNumber'];

        // 速汇宝单号
        $shbOrderNumber = $result['businessContext']['shbOrderNumber'];

        // TODO 商户处理订单
        $saveData['orderNo']=$shbOrderNumber;
        $saveData['status']=1;
        $saveData['price']=$tradeAmount/100;
        $saveData['localOrderNo']=$result['businessContext']['attach'];
        $saveData['time']=strtotime($result['businessContext']['paymentTime']);
        if($result['businessContext']['defrayalType']=="ALI_NATIVE"){
            $saveData['paiType']="SHBAL";
        }else{
            $saveData['paiType']="SHBWX";
        }
   
 
        $ret=Db::name("web_playerorder")->where("ordernumber='".$saveData['localOrderNo']."'")->find();
      
        $saveData['sign']=$result['businessHead']['sign'];
        $goodsInfo=Db::name("goods")->where("id=".$ret['goodsID'])->find();
     
        $this->updateDataBase($saveData,$goodsInfo);
           
    }
    
    public function updateDataBase($data,$goodsInfo){
        // var_dump($goodsInfo);
        $this->mylog('存储数据库：');

        $ret=Db::name("web_final_order")->where('orderNo="'.$data['orderNo'].'"')->find();
        $judge=true;
        if ($ret=='') {
           $judge=Db::name("web_final_order")->insert($data); 
        }else{
            // echo '该订单已存在';
            $judge=false;
        }
       if ($judge) {
      
           
           $ordinfo=Db::name("web_playerorder")->where('ordernumber="'.$data['localOrderNo'].'"')->find();
           $savedmd['cards']=intval($ordinfo['diamond'])+intval($ordinfo['award']);
         
          
          if ($data['status']==1) {
             $backup['status']=$data['status'];
             $backup['sign']=$data['sign'];
             $backup['orderNo']=$data['orderNo'];
             $backup['paiType']=$data['paiType'];
             Db::name("web_playerorder")->where('ordernumber="'.$data['localOrderNo'].'"')->update($backup);
             $result=true;
             $result=model('users')->where("openid='".$ordinfo['openid']."'")->setInc('paycards',intval($ordinfo['diamond']));
             $result=model('users')->where("openid='".$ordinfo['openid']."'")->setInc('freecards',intval($ordinfo['award']));
             $result=model('users')->where("openid='".$ordinfo['openid']."'")->setInc('cards',$savedmd['cards']);
             
             if ($result) {
                 echo 'SUC';
             }else{
                  echo '添加钻石失败';
             }
           }else{
                // echo '写入失败';
           }
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
