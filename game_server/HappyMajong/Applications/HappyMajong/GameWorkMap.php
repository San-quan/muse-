<?php
require_once __DIR__ . '/../../vendor/mysql-master/src/Connection.php';
class GameWorkMap
{

    //静态变量保存全局实例
    private static $_instance = null;
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
    //私有构造函数，防止外界实例化对象
    private function __construct() {
         self::$_workToRoomList=array();
         self::$_connectionRouterStatus=array();
         $this->initDB();
    }
    private static $db = null;
    public function initDB(){
       if( self::$db == null){
            //echo "[GameWorkMap DB success]\n";
            self::$db = new \Workerman\MySQL\Connection('127.0.0.1', '3306', 'root', '', 'game735');
            // self::$db = new \Workerman\MySQL\Connection('rm-bp1qf4ol5816z28z5.mysql.rds.aliyuncs.com', '3306', 'hunzugame', 'bd7839a3d823204d', 'jiagecai');
        }
    }

    //===========================GateWayWorker========================================
    /**
     * 房间所在的进程 映射表
     * @var array
     */
    public static $_workToRoomList=array();
    /**
     * 每个链接是否被标记过路由
     * @var array
     */
    public static $_connectionRouterStatus=array();
    /**
     *  设置链接 的路由标志
     * @var int
    */
    public function setConnectRouterStatus($connectionID,$workerID){
        if (!isset(self::$_connectionRouterStatus[$connectionID])) {
            self::$_connectionRouterStatus[$connectionID] = $workerID;
        }
    }
    /**
     *  获取链接 的路由标志
     * @var int
    */
    public function getConnectRouterStatus($connectionID){
        return isset(self::$_connectionRouterStatus[$connectionID])?true:false;
    }
    /**
     *  清除链接 的路由标志
     * @var int
    */
    public function clearConnectRouterStatus($connectionID){
        if (isset(self::$_connectionRouterStatus[$connectionID])) {
             unset(self::$_connectionRouterStatus[$connectionID]);
        }
    }
    /**
     *  获取房间号所在的进程ID
     * @var string
    */
    public function getWorkerIdByRoomPwd($roompwd){
        if (isset(self::$_workToRoomList[$roompwd])) {
            return self::$_workToRoomList[$roompwd];
        }else {
            return $this->getWorkerIdByRoomPwdInMysql($roompwd);
        }
        
    }
    /**
     *  在数据库中获取房间号所在的进程ID
     * @var string
     * @return -1 数据库中表示没有改房间的映射关系
    */
    public function getWorkerIdByRoomPwdInMysql($roompwd){
        $sql = "SELECT * FROM `businessworkermap` WHERE roompwd='".$roompwd."'";
        $map =self::$db->row($sql);
        if (is_array($map)&&isset($map['workerid'])) {
            self::$_workToRoomList[$roompwd] = $map['workerid'];
            return $map['workerid'];
        }else{
           return -1;
        }
    }


    public function is_json($string) { 
        json_decode($string,true);
        return (json_last_error() == JSON_ERROR_NONE);
    }

    //添加房间记录
    public function addBusinessWorkerMap($workerID,$roompwd){
        $sql = "SELECT * FROM `businessworkermap` WHERE roompwd='".$roompwd."'";
        $map =self::$db->row($sql);
        if (is_array($map)&&isset($map['roompwd'])) {
            $sql = "UPDATE `businessworkermap` SET workerid =  ".$workerID." WHERE roompwd='".$roompwd."'";
            self::$db->query($sql);
        }else{
             self::$db->insert('businessworkermap')->cols(array(
                'workerid' => $workerID,
                'roompwd' => $roompwd,
            ))->query();

        }



    }

    //清除房间映射记录
    public function clearBusinessWorkerMap($workerID){
         $sql = "DELETE FROM `businessworkermap`  WHERE workerid=".$workerID;
        self::$db->query($sql);
    }

}
