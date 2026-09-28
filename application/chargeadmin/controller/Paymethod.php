<?php

/**
 * Created by PhpStorm.
 * User: wujunyuan
 * Date: 2017/7/3
 * Time: 13:19
 * 游戏大厅控制器，继承Common，作用是从Common中统一控制用户登录
 */

namespace app\chargeadmin\controller;

use think\Db;
use think\Controller;
use think\Session;
class Paymethod extends Controller
{
    //如果要改appid还要去index控制器里改一下
    private $app_id = "fc13a48e713f57c407413346a7efbb63";//微派分配的appId,联系运营人员获取，实际项目中请替换真实appId
    // private $callback_url = "http://www.wanghaogame.cn:8080/admin.php/paymethod/payresult";//支付成功后跳转的商户页面(用户看到的页面)
    private $callback_url = "http://jspay.wiipay.cn/1/jspay/result.do";
    private $channel_id = "default";//渠道编号
   
    private $version = "2.0"; //版本号，默认填写2.0即可，必填项
    
    private $key = "jfcsaiyp8dcu6p9clv1hmebgl84wxql8";//签名所需key,联系运营人员获取

    private $type=2;//1:微派支付2：易富通支付
    //易富通支付参数
    //密匙
    private $compkey="0470091533266bljWShI";
    //商户ID
    private $p1_yingyongnum="70018094870701";
   
    //显示充值界面
    public function index()
    {
        // if (!Session::has('uid')) {
        //    $isInGame=0;
        // }else{
        //     $isInGame=1;
        // }
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
        }else{
            // if($userinfo['parent_id']==0){
            //     $ret['award']=0;
            // }
        }

        // var_dump($ret);exit;
        // $userinfo=model('users')->where("id=667040")->find();
        // $this->assign('isingame',$isInGame);
        $this->assign('userinfo',$userinfo);
        $this->assign('memberid',$uid);
        $this->assign('appid',$this->app_id);
        $this->assign('goodsInfo',$ret);
        $this->assign('type',$this->type);
        if($this->type==1){
            return $this->fetch('index/indexShopNew');
        }else{
            $this->redirect(url('paymethod/YFTPayPage',"uid=".$uid."&goodsID=".$goodsID));
        }
        
    }

     public function YFTPayPage()
    {
        // if (!Session::has('uid')) {
        //    $isInGame=0;
        // }else{
        //     $isInGame=1;
        // }
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
        }else{
            // if($userinfo['parent_id']==0){
            //     $ret['award']=0;
            // }
        }
        // $ret['diamond']=$ret['diamond']+$ret['award'];
        // var_dump($ret);exit;
        // $userinfo=model('users')->where("id=667040")->find();
        // $this->assign('isingame',$isInGame);
        $this->assign('userinfo',$userinfo);
        $this->assign('memberid',$uid);
        $this->assign('appid',$this->app_id);
        $this->assign('goodsInfo',$ret);
        $this->assign('type',$this->type);
        
        return $this->fetch('index/indexShopYFT');
        
        
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
    //ajax请求支付参数
    public function goodsPayInfo(){
        $goodsID=input('goodsID');
        $ret=Db::name("goods")->where('id='.$goodsID)->find();
        $memberID=input('memberid');
        // $memberID=667087;
        // $goodsID=1;
        $data['body']=$ret['name'];//商品名称，必填项，请勿包含敏感词
        $data['app_id']=$this->app_id;
        $data['out_trade_no']=$this->genPayId();//商户单号，确保不重复，如想透传更多参数信息，建议以Json-->String->Base64编码后传输，必填项
        $data['channel_id']=$this->channel_id;
        $data['total_fee']=$ret['price'];//商品价格(单位:元)，必填项
        $data['version']=$this->version;
        $data['callback_url']=$this->callback_url;
         // if ($data['totalfee']==0.01) {
         //           $data['totalfee']=100;
         //    }
        // if ($data['price']==0.1) {
        //     $data['price']=100;
        // }
        // var_dump($data['callback']);
        //本签名示例，仅为了演示，实际项目中为了安全考虑，请勿将key对外。字符串拼接规则为，参与签名的参数，按字母序key=value方式然后加上key进行md5,最后sign转大写
        ksort($data);//按字母序
    $pre_str = implode('&', array_map(
        function ($v, $k) { return sprintf("%s=%s", $k, $v); },
        $data,
        array_keys($data)
    ));
    // var_dump($pre_str);
    $preSign = $pre_str.$this->key;

    $sign = strtoupper(md5($preSign));
        // $sign_prep = "app_id=".$this->app_id."&body=".$data['body']."&callback_url=".$this->callback_url."&channel_id="
        // .$this->channel_id."&out_trade_no=".$data['outtradeno']."&total_fee=".$data['totalfee']."&version=".$this->version.$this->key;
        $data['sign']=$sign;
        $result=json_encode($data);


    //print_r($pre_arr);
   
    

        $tmp=model("users")->where("id=".$memberID)->find();
        $backup['openid']=$tmp['openid'];
        $backup['cost']=$data['total_fee'];
        $backup['uid']=$tmp['id'];
        // if ($data['total_fee']==0.01) {
        //     $backup['cost']=10;
        // }
        $backup['createtime']=date('Y-m-d H:i:s',time());
        $backup['ordernumber']=$data['out_trade_no'];
        $backup['goodsID']=$ret['id'];
        $backup['diamond']=$ret['diamond'];
        $backup['award']=$ret['award'];
        if($tmp['parent_id']==0){
            $backup['award']=0;
        }
        $user=model('users')->where('id='.$memberID)->find();
        if ($user['parent_id']!=0) {
            $charge=Db::name("agent")->where('id='.$user['parent_id'])->find();
            
            if($charge['parentID']==0){
                $backup['preprepercent']=0;
                $backup['prepercent']=0;
                $backup['percent']=100;
            }else{
                $backup['percent']=$charge['percent'];
                $temp=Db::name("agent")->where('id='.$charge['parentID'])->find();
               
                if($temp['parentID']==0){
                    $backup['prepercent']=100;
                    $backup['preprepercent']=0;
                }else{
                     $backup['prepercent']=$temp['percent'];
                    $temp2=Db::name("agent")->where('id='.$temp['parentID'])->find();
                    if($temp2['parentID']==0){
                        $backup['preprepercent']=100;
                    }else{
                        $backup['preprepercent']=$temp2['percent'];
                    }
                    
                }
            } 
        }else{
            $charge=Db::name("agent")->where('parentID=0')->find();
            $backup['preprepercent']=0;
            $backup['prepercent']=0;
            $backup['percent']=100;
        }
        
        
        $backup['aid']=$charge['id'];
        $backup['status']=6;
        $backup['sign']=$data['sign'];
        $backup['paiType']="wpWx";
        $judge=Db::name("web_playerorder")->where('sign="'.$data['sign'].'"')->find();
        if ($judge=='') {
            $ret=Db::name("web_playerorder")->insert($backup);
        }
         echo $result;
    }
    //充值回调函数
    /*
    status:1成功，0失败，2用户已经支付，3计费已暂停，4网络异常、获取不到支付参数等，5用户取消支付 6未处理
    */
    public function payCallback()
    {
        $data['orderNo']=input('orderNo');
        // $data['status']=input('status');
        $data['price']=input('price');
        $data['localOrderNo']=input('cpparam');
        $data['time']=strtotime(input('time'));
        $data['paiType']="WP".input('synType');
        $data['sign']=input('sign');
        switch (input('status')) {
            case 'success':
                $data['status']=1;
                break;
            case 'fail':
                $data['status']=0;
                break;
            case 'pass':
                $data['status']=2;
                break;
            case 'pause':
                $data['status']=3;
                break;
            case 'error':
                $data['status']=4;
                break;
            case 'cancel':
                $data['status']=5;
                break;
        }
        $ret=Db::name("web_playerorder")->where("ordernumber='".$data['localOrderNo']."'")->find();
        // var_dump($ret);
        $goodsInfo=Db::name("goods")->where("id=".$ret['goodsID'])->find();
        $this->updateDataBase($data,$goodsInfo);
    }
    public function updateDataBase($data,$goodsInfo){
        // var_dump($goodsInfo);
        $ret=Db::name("web_final_order")->where('orderNo="'.$data['orderNo'].'"')->find();
        $judge=true;
        if ($ret=='') {
           $judge=Db::name("web_final_order")->insert($data); 
        }else{
            // echo '该订单已存在';
            $judge=false;
        }
       if ($judge) {
           // $diamond=Db::name("goods")->where('price='.$data['price'])->find();
           // if ($data['price']==0.01) {
           //         $data['price']=10;
           //      }
           
           $ordinfo=Db::name("web_playerorder")->where('ordernumber="'.$data['localOrderNo'].'"')->find();
           $savedmd['cards']=intval($ordinfo['diamond'])+intval($ordinfo['award']);
         
          
           if ($data['status']==1) {
            //将每个代理的赚的钱存在agent_ncome表
            
                
              
            
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
               echo 'success';
           }else{
                echo '添加钻石失败';
           }
       }else{
            // echo '写入失败';
       }
    }
}
    public function payResult()
    {
         
        $ordernumber=input('out_trade_no');
        $status=input('trade_status');
        switch ($status) {
            case 'success':
                $data['status']=1;
                break;
            case 'fail':
                $data['status']=0;
                break;
            case 'pass':
                $data['status']=2;
                break;
            case 'pause':
                $data['status']=3;
                break;
            case 'error':
                $data['status']=4;
                break;
            case 'cancel':
                $data['status']=5;
                break;
        }
        $this->assign('status',$data['status']);
        return $this->fetch();
        
    }


    //易富通支付接口
    public function getYFTZFBgoods(){
        $goodsID=input('goodsID');
        $ret=Db::name("goods")->where('id='.$goodsID)->find();
        $memberID=input('memberid');
        // $memberID=667087;
        $type=input('type');

        // $compkey           = "047009132409ZKZjOGUl";        //商户密钥
        // $data['p1_yingyongnum']    = "70018072016901";          //商户应用号  
         $compkey           = $this->compkey;        //商户密钥
        $data['p1_yingyongnum']    = $this->p1_yingyongnum;          //商户应用号               
        $data['p2_ordernumber']        = $this->genPayId();      //商户订单号
        $data['p3_money']          = $ret['price'];            //商户订单金额，保留两位小数
        // $data['p3_money']          = 1; 
        $data['p6_ordertime']      = date("YmdHis", time());            //商户订单时间
        $data['p7_productcode']    = "ZFBZZWAP";                //产品支付类型编码
        // $data['p7_productcode']    = "WXZZWAPZZSM";
        $data['presign']           = $data['p1_yingyongnum']."&".$data['p2_ordernumber']."&".$data['p3_money']."&".$data['p6_ordertime']."&".$data['p7_productcode']."&".$compkey;
        $data['p8_sign']           = md5($data['presign']);             //订单签名
        $data['p9_signtype']           = "1";                   //签名方式
        $data['p10_bank_card_code'] = "";                       //银行卡或卡类编码
        $data['p11_cardtype']      = "";                        //商户支付银行卡类型id
        $data['p12_channel']       = "";                        //商户支付银行卡类型长度
        $data['p13_orderfailertime']    = "";                       //订单失效时间
        $data['p14_customname']       = $memberID;       //商户游戏账号            
        $data['p15_customcontact']    = "";                     //商户联系内容
        $data['p16_customip']      = "192_168_0_253";           //付款ip地址
        $data['p17_product']       = $ret['name'];                 //商户名称
        $data['p18_productcat']    = "钻石";                        //商品种类
        $data['p19_productnum']        = $ret['diamond'];                        //商品数量
        $data['p20_pdesc']                = "";                     //商品描述
        $data['p21_version']               = "";                        //对接版本
        $data['p22_sdkversion']    = "";                        //SDK版本
        $data['p23_charset']      = "UTF-8";                   //编码格式
        $data['p24_remark']        = "";                        //备注
        $data['p25_terminal']      = $type;                   //商户终端设备值
        // 终端设备值1 pc 2 ios  3 安卓
        $data['p26_ext1']              = "";                    //预留参数
        $data['p27_ext2']              = "";                        //预留参数
        $data['p28_ext3']              = "";                        //预留参数
        $data['p29_ext4']              = "";                        //预留参数

        // var_dump($data);
        $tmp=model("users")->where("id=".$memberID)->find();
        $backup['openid']=$tmp['openid'];
        $backup['cost']=$ret['price'];
        $backup['uid']=$tmp['id'];
        // if ($data['total_fee']==0.01) {
        //     $backup['cost']=10;
        // }
        $backup['createtime']=date('Y-m-d H:i:s',time());
        $backup['ordernumber']=$data['p2_ordernumber'];
        $backup['goodsID']=$ret['id'];
        $backup['diamond']=$ret['diamond'];
        $backup['award']=$ret['award'];
        
    
    
        $backup['status']=6;
        $backup['sign']=$data['p8_sign'];
        $backup['paiType']="YFT";
        $judge=Db::name("web_playerorder")->where('sign="'.$data['p8_sign'].'"')->find();
        if ($judge=='') {
            $ret=Db::name("web_playerorder")->insert($backup);
        }
        echo json_encode($data);
    }
    public function getYFTWXgoods(){
        $goodsID=input('goodsID');
        $ret=Db::name("goods")->where('id='.$goodsID)->find();
        $memberID=input('memberid');
        // $memberID=667087;
        $type=input('type');

        // $compkey           = "047009132409ZKZjOGUl";        //商户密钥
        // $data['p1_yingyongnum']    = "70018072016901";          //商户应用号  
         $compkey           = $this->compkey;        //商户密钥
        $data['p1_yingyongnum']    = $this->p1_yingyongnum;          //商户应用号               
        $data['p2_ordernumber']        = $this->genPayId();      //商户订单号
        $data['p3_money']          = $ret['price'];            //商户订单金额，保留两位小数
        // $data['p3_money']          = 1; 
        $data['p6_ordertime']      = date("YmdHis", time());            //商户订单时间
        // $data['p7_productcode']    = "ZFBZZWAP";                //产品支付类型编码
        $data['p7_productcode']    = "WXZZWAPZZSM";
        $data['presign']           = $data['p1_yingyongnum']."&".$data['p2_ordernumber']."&".$data['p3_money']."&".$data['p6_ordertime']."&".$data['p7_productcode']."&".$compkey;
        $data['p8_sign']           = md5($data['presign']);             //订单签名
        $data['p9_signtype']           = "1";                   //签名方式
        $data['p10_bank_card_code'] = "";                       //银行卡或卡类编码
        $data['p11_cardtype']      = "";                        //商户支付银行卡类型id
        $data['p12_channel']       = "";                        //商户支付银行卡类型长度
        $data['p13_orderfailertime']    = "";                       //订单失效时间
        $data['p14_customname']       = $memberID;       //商户游戏账号            
        $data['p15_customcontact']    = "";                     //商户联系内容
        $data['p16_customip']      = "192_168_0_253";           //付款ip地址
        $data['p17_product']       = $ret['name'];                 //商户名称
        $data['p18_productcat']    = "钻石";                        //商品种类
        $data['p19_productnum']        = $ret['diamond'];                        //商品数量
        $data['p20_pdesc']                = "";                     //商品描述
        $data['p21_version']               = "";                        //对接版本
        $data['p22_sdkversion']    = "";                        //SDK版本
        $data['p23_charset']      = "UTF-8";                   //编码格式
        $data['p24_remark']        = "";                        //备注
        $data['p25_terminal']      = $type;                   //商户终端设备值
        // 终端设备值1 pc 2 ios  3 安卓
        $data['p26_ext1']              = "";                    //预留参数
        $data['p27_ext2']              = "";                        //预留参数
        $data['p28_ext3']              = "";                        //预留参数
        $data['p29_ext4']              = "";                        //预留参数

        // var_dump($data);
        $tmp=model("users")->where("id=".$memberID)->find();
        $backup['openid']=$tmp['openid'];
        $backup['cost']=$ret['price'];
        $backup['uid']=$tmp['id'];
        // if ($data['total_fee']==0.01) {
        //     $backup['cost']=10;
        // }
        $backup['createtime']=date('Y-m-d H:i:s',time());
        $backup['ordernumber']=$data['p2_ordernumber'];
        $backup['goodsID']=$ret['id'];
        $backup['diamond']=$ret['diamond'];
        $backup['award']=$ret['award'];
        
    
    
        $backup['status']=6;
        $backup['sign']=$data['p8_sign'];
        $backup['paiType']="YFT";
        $judge=Db::name("web_playerorder")->where('sign="'.$data['p8_sign'].'"')->find();
        if ($judge=='') {
            $ret=Db::name("web_playerorder")->insert($backup);
        }
        echo json_encode($data);
    }
    public function YFTNotify(){
        $compkey = $this->compkey;        

        $p1_yingyongnum = input('p1_yingyongnum');               
        $p2_ordernumber  = input('p2_ordernumber');
        $p3_money           = input('p3_money');
        $p4_zfstate           = input('p4_zfstate');
        $p5_orderid          = input('p5_orderid');
        $p6_productcode  = input('p6_productcode');
        $p7_bank_card_code=input('p7_bank_card_code');
        $p8_charset         = input('p8_charset');
        $p9_signtype       = input('p9_signtype');
        $p10_sign            = input('p10_sign');
        $p11_pdesc         = input('p11_pdesc');
        
        $presign = $p1_yingyongnum."&".$p2_ordernumber."&".$p3_money."&".$p4_zfstate."&".$p5_orderid."&".$p6_productcode."&".$p7_bank_card_code."&".$p8_charset."&".$p9_signtype."&".$p11_pdesc."&".$compkey;
        // echo $presign."<br/>";
        $sign =strtoupper(md5($presign));

   if ($sign == input('p10_sign')&&input('p4_zfstate') == "1")
        {
            $data['orderNo']=$p5_orderid;
            // $data['status']=input('status');
            $data['status']=input('p4_zfstate');
            $data['price']=$p3_money;
            $data['localOrderNo']=$p2_ordernumber;
            $data['time']=time();
            if($p6_productcode=="ZFBZZWAP"){
                $data['paiType']="YFTAlipay";
            }else{
                $data['paiType']=$p6_productcode;
            }
            // $data['paiType']="WP".input('synType');
            $data['sign']=$p10_sign;
            
            $ret=Db::name("web_playerorder")->where("ordernumber='".$data['localOrderNo']."'")->find();
            // var_dump($ret);
            $goodsInfo=Db::name("goods")->where("id=".$ret['goodsID'])->find();

       
            $this->updateDataBase($data,$goodsInfo);

         }

    }
}
