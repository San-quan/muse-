<?php 
/**
 * This file is part of workerman.
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the MIT-LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @author walkor<walkor@workerman.net>
 * @copyright walkor<walkor@workerman.net>
 * @link http://www.workerman.net/
 * @license http://www.opensource.org/licenses/mit-license.php MIT License
 */
use \Workerman\Worker;
use \Workerman\WebServer;
use \GatewayWorker\Gateway;
use \GatewayWorker\BusinessWorker;
use \Workerman\Autoloader;

// 自动加载类
require_once __DIR__ . '/../../vendor/autoload.php';

// gateway 进程，这里使用Text协议，可以用telnet测试
$gateway = new Gateway("websocket://0.0.0.0:8281");
// gateway名称，status方便查看
$gateway->name = 'MJGateway';
// gateway进程数
$gateway->count = 1;
// 本机ip，分布式部署时使用内网ip
$gateway->lanIp = '127.0.0.1';
// 内部通讯起始端口，假如$gateway->count=4，起始端口为4000
// 则一般会使用4000 4001 4002 4003 4个端口作为内部通讯端口 
$gateway->startPort = 4271;
// 服务注册地址
$gateway->registerAddress = '127.0.0.1:1281';

// 心跳间隔
$gateway->pingInterval = 10;
$gateway->pingNotResponseLimit = 2;
// 心跳数据
$gateway->pingData = '{"mainid":"ping"}';


$gateway->router = function($worker_connections, $client_connection, $cmd, $buffer)
{

    if($cmd == 3){
        if(!GameWorkMap::getInstance()->getConnectRouterStatus($client_connection->id)){
            if(GameWorkMap::getInstance()->is_json($buffer)){
                $jsonData = json_decode($buffer,true);
                if(isset($jsonData['msg']['roompwd']) && $jsonData['msg']['roompwd']!=''){
                    //获取该房间所在的进程
                    $workID = GameWorkMap::getInstance()->getWorkerIdByRoomPwd($jsonData['msg']['roompwd']);
                    if($workID != -1){
                        foreach ($worker_connections as $key => $value) {
                            $cRouter = explode(':',$key);
                            if($cRouter[2] == $workID){
                                $client_connection->businessworker_address = $key;
                                GameWorkMap::getInstance()->setConnectRouterStatus($client_connection->id,$cRouter[2]);
                               // var_dump(GameWorkMap::$_connectionRouterStatus);
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
     // 临时给客户端连接设置一个businessworker_address属性，用来存储该连接被绑定的worker进程下标
    if (!isset($client_connection->businessworker_address) || !isset($worker_connections[$client_connection->businessworker_address])) {
        $client_connection->businessworker_address = array_rand($worker_connections);
        $cRouter = explode(':',$client_connection->businessworker_address);
        GameWorkMap::getInstance()->setConnectRouterStatus($client_connection->id,$cRouter[2]);
       // var_dump(GameWorkMap::$_connectionRouterStatus);
    }
    return $worker_connections[$client_connection->businessworker_address];
};

/* 
// 当客户端连接上来时，设置连接的onWebSocketConnect，即在websocket握手时的回调
*/
$gateway->onConnect = function($connection)
{
   // echo "----> onConnect connectionID:".$connection->id."\n";
    // $connection->onWebSocketConnect = function($connection , $http_header)
    // {
    //     echo "onConnect connectionID:"$connection->id;
    //     // 可以在这里判断连接来源是否合法，不合法就关掉连接
    //     // $_SERVER['HTTP_ORIGIN']标识来自哪个站点的页面发起的websocket链接
    //     // if($_SERVER['HTTP_ORIGIN'] != 'http://kedou.workerman.net')
    //     // {
    //     //     $connection->close();
    //     // }
    //     // onWebSocketConnect 里面$_GET $_SERVER是可用的
    //     // var_dump($_GET, $_SERVER);
    // };
};  

$gateway->onClose = function($connection)
{
    //echo "----> onClose connectionID:".$connection->id."\n";
    GameWorkMap::getInstance()->clearConnectRouterStatus($connection->id);
    // $connection->onWebSocketConnect = function($connection , $http_header)
    // {
    //     echo "connectionID:"$connection->id;
    //     // 可以在这里判断连接来源是否合法，不合法就关掉连接
    //     // $_SERVER['HTTP_ORIGIN']标识来自哪个站点的页面发起的websocket链接
    //     // if($_SERVER['HTTP_ORIGIN'] != 'http://kedou.workerman.net')
    //     // {
    //     //     $connection->close();
    //     // }
    //     // onWebSocketConnect 里面$_GET $_SERVER是可用的
    //     // var_dump($_GET, $_SERVER);
    // };
};

// 如果不是在根目录启动，则运行runAll方法
if(!defined('GLOBAL_START'))
{
    Worker::runAll();
}

