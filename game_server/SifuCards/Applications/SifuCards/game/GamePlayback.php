<?php


// 自动加载类
require_once __DIR__ . '/SifuCards.php';
require_once __DIR__ . '/PlayerManager.php';
require_once __DIR__ . '/MessageDefine.php';

define("PB_ROOMMESSAGE", "roommessage");
define("PB_USERSMESSAGE", "usersmessage");
define("PB_GAMEMESSAGE", "gamemessage");

class GamePlayBack
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

    //-------------------------------------------保存游戏中数据的逻辑-------------------------------------------
    public function saveRoomMessage($gamename,$roompwd,$playground,$roomowner,$rule)
    {
        $rule = serialize($rule);
        GameDB::getInstance()->saveRoomMessage($gamename,$roompwd,$playground,$roomowner,$rule);
    }
    
    public function saveUsersMessage($roompwd,$playground,$userList)
    {
      $recordId = GameDB::getInstance()->getRecordId($roompwd,$playground);
      if ($recordId == -1) {
        echo "保存用户数据错误";
        return;
      }
      foreach ($userList as $uid => $info) {
        GameDB::getInstance()->saveUsersMessage($recordId,$uid,$info['seatno'],$info['headurl'],$info['score'],$info['nickname']);
      }
    }

    public function saveGameMessage($roompwd,$playground,$datatype,$data)
    {
      /*
        datatype 
        1 发牌数据;2 轮到出牌;3 出牌结果;4 出牌结束;5 单局结算;6 总结算;
      */
      $recordId = GameDB::getInstance()->getRecordId($roompwd,$playground);
      if ($recordId == -1) {
        echo $roompwd.'房间'.'第'.$playground."局保存游戏数据错误\n";
        return;
      }
      GameDB::getInstance()->saveGameMessage($recordId,$datatype,json_encode($data),$playground);
    }

    //-------------------------------------------回放游戏逻辑-------------------------------------------
    public function getRoomMessage($uid,$roompwd,$playground)
    {
      $recordId = GameDB::getInstance()->getRecordId($roompwd,$playground);
      if ($recordId == -1) {
        $data['code'] = 1;
        $data['desc'] = '请求信息有误';
        PlayerManager::getInstance()->sendMsgByClientId($uid,PB_ROOMMESSAGE,$data);
      }else{
        $data = GameDB::getInstance()->getRoomMessage($recordId);
        $data['rule'] = unserialize($data['rule']);
        PlayerManager::getInstance()->sendMsgByClientId($uid,PB_ROOMMESSAGE,$data);
        $this->getUsersMessage($uid,$recordId);
      }
    }

    public function getUsersMessage($uid,$recordId)
    {
      $data = GameDB::getInstance()->getUsersMessage($recordId);
      $uInfo = array();
      foreach ($data as $key => $value) {
        $uInfo[$value['deskStation']] = $value;
        unset($uInfo[$value['deskStation']]['deskStation']);
      }
      $res['playerlist'] = $uInfo;
      $res['uid'] = PlayerManager::getInstance()->getUid($uid);
      PlayerManager::getInstance()->sendMsgByClientId($uid,PB_USERSMESSAGE,$res);
      $this->getGameMessage($uid,$recordId);
    }

    public function getGameMessage($uid,$recordId)
    {
      /*
        datatype 
        1 发牌数据;2 轮到出牌;3 出牌结果;4 出牌结束;5 单局结算;6 总结算;7 发起解散;8 响应解散;9 解散结果;
      */
      $data = GameDB::getInstance()->getGameMessage($recordId);

      $sendData = array();
      $sendtime = 0;
      foreach ($data as $key => $value) {
        $data[$key]['jsonData'] = json_decode($data[$key]['jsonData']);
        $sendData[] = $data[$key];

        if (count($sendData) >= 10) {
          $sendtime++;
          if ($sendtime * 10 >= count($data)) {
            $res['code'] = 1;
          }else{
            $res['code'] = 0;
          }
          $res['data'] = $sendData;
          PlayerManager::getInstance()->sendMsgByClientId($uid,PB_GAMEMESSAGE,$res);
          $sendData = array();
        }
      }
      if (count($sendData) < 10) {
        $res['code'] = 1;
        $res['data'] = $sendData;
        PlayerManager::getInstance()->sendMsgByClientId($uid,PB_GAMEMESSAGE,$res);
      }
    }

}