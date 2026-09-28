<?php
define("HEADURL", "127.0.0.1/chargeadmin.php/Savegamehead"); //头像请求TP


class HttpManager
{

    //静态变量保存全局实例
    private static $_instance = null;
    //私有构造函数，防止外界实例化对象
    private function __construct() {
    }
    //私有克隆函数，防止外办克隆对象
    private function __clone() {
    }
    //静态方法，单例统一访问入口
    static public function getInstance() {
        if (is_null ( self::$_instance ) || isset ( self::$_instance )) {
            self::$_instance = new self ();
        }
        return self::$_instance;
    }


    public function payment($data)
    {

        $res = $this->httpPost($data,PAYURL);
        // $res = $this->httpPost($data,CHECK_LOCK_TBEANS_URL);
        $res = json_decode($res,true);
        return $res;
    }
    public function dealHeadUrl($uid,$url)
    {
        $data['uid'] = $uid;
        $data['gamename'] = 'Mahua';
        $data['url'] = $url;
        
        $res = $this->httpPost($data,HEADURL);
        // $res = $this->httpPost($data,CHECK_LOCK_TBEANS_URL);

        return json_decode($res,true);
    }
    public function httpPost($data = array(),$url){

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        // post数据
        curl_setopt($ch, CURLOPT_POST, 1);
        // post的变量
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }

}
