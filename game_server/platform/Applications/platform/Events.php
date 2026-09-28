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

/**
 * 用于检测业务代码死循环或者长时间阻塞等问题
 * 如果发现业务卡死，可以将下面declare打开（去掉//注释），并执行php start.php reload
 * 然后观察一段时间workerman.log看是否有process_timeout异常
 */
//declare(ticks=1);

// 自动加载类
require_once __DIR__ . '/../../vendor/autoload.php';
//require_once __DIR__ . '/../../vendor/mysql-master/src/Connection.php';
//require_once __DIR__ . '/base/config.php';



require_once __DIR__ . '/platform/PlatformDB.php';
require_once __DIR__ . '/platform/Platform.php';
require_once __DIR__ . '/platform/PlayerManager.php';
require_once __DIR__ . '/platform/MessageDefine.php';

use \GatewayWorker\Lib\Gateway;

/**
 * 主逻辑
 * 主要是处理 onConnect onMessage onClose 三个方法
 * onConnect 和 onClose 如果不需要可以不用实现并删除
 */
class Events
{


    public static function onWorkerStart($businessWorker)
    {
      date_default_timezone_set('Asia/Shanghai');
       echo "[HunzuGame PlatFrom Start] \n";
       PlatformDB::getInstance()->initDB();
    }

    public static function onWorkerStop($businessWorker)
    {
       echo "[HunzuGame PlatFrom Stop]\n";
    }

    /**
     * 当客户端连接时触发
     * 如果业务不需此回调可以删除onConnect
     * 
     * @param int $client_id 连接id
     */
    public static function onConnect($client_id)
    {
      //发送游戏消息
      PlayerManager::getInstance()->onConnectMessage($client_id);
        // 向当前client_id发送数据 
       // Gateway::sendToClient($client_id, "Hello $client_id\r\n");
        // 向所有人发送
    }
    
   /**
    * 当客户端发来消息时触发
    * @param int $client_id 连接id
    * @param mixed $message 具体消息
    */
   public static function onMessage($client_id, $message)
   {
        //first parse Data
        $data = json_decode($message, true);
        if (!is_null($data)){
          
          $MainID = isset($data['mainid'])?$data['mainid']:"";
          $msg =  isset($data['msg'])?$data['msg']:"";

            // 如果没有$_SESSION['uid']说明客户端没有登录
          if($MainID == PT_PING )
          {
            //心跳包
            //echo "ping \n";
          }else if(!PlayerManager::getInstance()->getUserSession($client_id))
          {
              // 消息类型不是登录视为非法请求，关闭连接
              if($MainID == PT_LOGIN)
              {
                 PlayerManager::getInstance()->onLoginMessage($client_id, $msg);
              }else{
                Gateway::closeClient($client_id);
              }
          }else{
              Platform::getInstance()->onSocketMessage($client_id,$MainID,$msg);
          }
        }else{
          Gateway::closeClient($client_id);
        }
   }

   public static function sendMessage($client_id,$data)
   {
        Gateway::sendToClient($client_id, $data);
   }
   /**
    * 当用户断开连接时触发
    * @param int $client_id 连接id
    */
   public static function onClose($client_id)
   {
        PlayerManager::getInstance()->clearUserByOffLine($client_id);
   }
}
