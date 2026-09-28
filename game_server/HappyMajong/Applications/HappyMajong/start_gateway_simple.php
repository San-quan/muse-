<?php 
/**
 * Minimal Gateway for testing — NO GameWorkMap dependencies
 */
error_reporting(E_ALL); ini_set('display_errors', 1);
use \Workerman\Worker;
use \GatewayWorker\Gateway;
require_once __DIR__ . '/../../vendor/autoload.php';

$gateway = new Gateway("websocket://0.0.0.0:8281");
$gateway->name = 'MJGateway';
$gateway->count = 1;
$gateway->lanIp = '127.0.0.1';
$gateway->startPort = 4271;
$gateway->registerAddress = '127.0.0.1:1281';
$gateway->pingInterval = 10;
$gateway->pingNotResponseLimit = 2;
$gateway->pingData = '{"mainid":"ping"}';

$gateway->onWorkerStart = function($worker) {
    @file_put_contents('C:/devtmp/wm_gw_simple_trace.log', date('[Y-m-d H:i:s]')." onWorkerStart pid=".getmypid()."\n", FILE_APPEND);
};
$gateway->onConnect = function($c) {
    @file_put_contents('C:/devtmp/wm_gw_simple_trace.log', date('[Y-m-d H:i:s]')." onConnect id=".$c->id." ip=".$c->getRemoteIp()."\n", FILE_APPEND);
};
$gateway->onClose = function($c) {
    @file_put_contents('C:/devtmp/wm_gw_simple_trace.log', date('[Y-m-d H:i:s]')." onClose id=".$c->id."\n", FILE_APPEND);
};

if(!defined('GLOBAL_START')) {
    Worker::runAll();
}
