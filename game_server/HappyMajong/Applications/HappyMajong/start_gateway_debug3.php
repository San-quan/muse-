<?php 
error_reporting(E_ALL); ini_set('display_errors', 1);
$logFile = 'C:/devtmp/gateway_trace.log';
@file_put_contents($logFile, date('[Y-m-d H:i:s]') . " === start ===\n", FILE_APPEND);
register_shutdown_function(function() use ($logFile) {
    $err = error_get_last();
    $msg = date('[Y-m-d H:i:s]') . " shutdown";
    if ($err) { $msg .= " last_error=" . var_export($err, true); }
    file_put_contents($logFile, $msg . "\n", FILE_APPEND);
});
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

$gateway->router = function($worker_connections, $client_connection, $cmd, $buffer)
{
    if (!isset($client_connection->businessworker_address) || !isset($worker_connections[$client_connection->businessworker_address])) {
        $keys = array_keys($worker_connections);
        $client_connection->businessworker_address = $keys[array_rand($keys)];
    }
    return $worker_connections[$client_connection->businessworker_address];
};

$gateway->onWorkerStart = function($worker) use ($logFile) {
    file_put_contents($logFile, date('[Y-m-d H:i:s]') . " onWorkerStart workerId=" . $worker->id . " pid=" . getmypid() . "\n", FILE_APPEND);
};
$gateway->onWorkerStop = function($worker) use ($logFile) {
    file_put_contents($logFile, date('[Y-m-d H:i:s]') . " onWorkerStop workerId=" . $worker->id . "\n", FILE_APPEND);
};
$gateway->onConnect = function($c) use ($logFile) {
    file_put_contents($logFile, date('[Y-m-d H:i:s]') . " onConnect id=".$c->id."\n", FILE_APPEND);
    echo "onConnect id=".$c->id."\n";
};
$gateway->onClose = function($c) use ($logFile) {
    file_put_contents($logFile, date('[Y-m-d H:i:s]') . " onClose id=".$c->id."\n", FILE_APPEND);
    echo "onClose id=".$c->id."\n";
};

if(!defined('GLOBAL_START')) {
    echo "runAll\n";
    file_put_contents($logFile, date('[Y-m-d H:i:s]') . " before runAll\n", FILE_APPEND);
    Worker::runAll();
    file_put_contents($logFile, date('[Y-m-d H:i:s]') . " after runAll\n", FILE_APPEND);
    echo "runAll returned\n";
}
