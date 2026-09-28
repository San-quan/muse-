<?php 
error_reporting(E_ALL); ini_set('display_errors', 1);
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
use \GatewayWorker\Register;

// 自动加载类
require_once __DIR__ . '/../../vendor/autoload.php';

// register 必须是text协议
echo "creating Register...\n";
$register = new Register('text://0.0.0.0:1281');
echo "Register created, about to runAll\n";

// 如果不是在根目录启动，则运行runAll方法
if(!defined('GLOBAL_START'))
{
    try {
        Worker::runAll();
    } catch (Throwable $e) {
        echo "runAll ERROR: " . $e->getMessage() . "\n";
        echo $e->getTraceAsString() . "\n";
    }
}
echo "after runAll\n";
