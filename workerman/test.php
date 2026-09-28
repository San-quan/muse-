<?php

use Workerman\Worker;
use Workerman\Lib\Timer;

include __DIR__ . '/vendor/autoload.php';

// $tp_server = "http://127.0.0.1/";
$tp_server = "http://192.168.3.4:8088/";

$time_click  = array(
    'gameready' => 5,
    'gamefree'  => 5,
    'game_xiazhu' => 10,
    'game_open' => 10,
    'game_computer' => 4,
    'game_disband'  =>60,
     );


//$tp_server = "http://127.0.0.1:82/";
//创建一个变量存放所有房间
$connection_all = [];
$room_all = [];
$timer_all = [];

//0 游戏开始倒计时
//1 游戏空闲状态
//2 下注时间
//3 开牌时间
//4 结算时间



//创建一个Worker监听127.0.0.1:8000, 使用websocket协议通讯  
$ws_worker = new Worker("websocket://0.0.0.0:2130");
//启动4个进程对外提供服务  
$ws_worker->count = 4;
$ws_worker->onConnect = function($connection) use($ws_worker, &$connection_all,&$room_all) {
    echo "\n" . $connection->getRemoteIp() . "has connected Server\n";
    //var_dump(['connect init'=>$room_all]);
};

//当接收到客户端发来的数据后显示数据并回发到客户端  
$ws_worker->onMessage = function($connection, $data) use ($ws_worker, &$connection_all,&$room_all,&$timer_all) {

    //$baseUrl = "192.168.3.13";
    $ip = $connection->getRemoteIp();
    if ($ip == '127.0.0.1') {
        $data = str_replace('\\"', '"', str_replace('\r\n', '', $data));
        $data = ltrim($data, '"');
        $data = rtrim($data, '"');
    }
    //echo "\n receive {$ip} de message\n";

    //解析数据
    $dataInfo = json_decode($data, true);
//var_dump(['datainfo'=>$dataInfo]);

    if (isset($dataInfo['uid']))
        $connection_all[$dataInfo['uid']] = $connection->id; //保存连接  

        //数据分发
    if ($dataInfo && isset($dataInfo['operation'])) {
        switch ($dataInfo['operation']) {
            //玩家进入房间，把房间基本信息发给玩家-----------------------------------------------------------------
            case "serverinfo"://进入房间
                echo "-------------------[serverinfo]---------------------------\n";
                var_dump($room_all);
                echo "-------------------[serverinfo]---------------------------\n";
            case "EnterRoom"://进入房间
                echo "[EnterRoom] UID: {$dataInfo['uid']}\n";

                //一个用户加入之前需要先判断他是否在其他房间
                $isInCurRoom = isUserInRoom($dataInfo['uid'],$dataInfo['roomid']);
                $isInCurOtherRoom = isUserInOtherRoom($dataInfo['uid'],$dataInfo['roomid']);
                //1、首先确定房间信息是否存在，0/1 从room表取或者从内存取
                $roomInfo  = getRoomInfoByCurServer($dataInfo['roomid']);
                if ($roomInfo != null) {
                    $curData['roominfo'] =  $roomInfo ;
                }else{

                    //房间不存在的情况为该玩家创建房间，
                    if($isInCurOtherRoom>0){
                        if($isInCurOtherRoom == 1){ //可更换房间
                            $joinReault = joinIntoNewRoom($dataInfo['uid'],$dataInfo['roomid'],true);
                            //换房不成功
                            if (!$joinReault) {
                                    $curData['wsoperate_server'] = "JoinRoomFailure_s";
                                    $curData['state_desc'] = "加入房间失败，请重试！";
                                    $connection->send(json_encode($curData));
                            }
                        }else if($isInCurOtherRoom == 2){ //不可换房
                            $curData['wsoperate_server'] = "ForbidJoinRoom_s";
                            $curData['jointype'] = 1;//不允许创建房间；
                            $curData['state_desc'] = "你正在其他房间中玩牌，不能加入此房间！";
                            $connection->send(json_encode($curData));
                        }
                        return;
                    }

                    $httpData_roomInfo = getRoomInfoFromRoom($dataInfo['roomid']);
                    //var_dump(['httpData_roomInfo'=>$httpData_roomInfo]);
                    if (!isset($httpData_roomInfo['id'])) {
                        //房间不存在
                        echo "room is not find\n";
                        break;
                    }else{
                        $roomInfo = $httpData_roomInfo;
                        $room_all[$roomInfo['id']]['roominfo'] = $httpData_roomInfo;
                    }
                }

                //2、确定玩家信息是否存在
                if ($isInCurRoom) {
                   $room_all[$roomInfo['id']]['roomusers'][$dataInfo['uid']]['online'] = 1;

                    //先发送断线重连数据，然后再广播该玩家的重连消息
                    $curData['wsoperate_server'] = "EnterRoom_s";
                    $curData['roominfo'] = $room_all[$roomInfo['id']]['roominfo'];
                    $curData['usersinfo'] =  $room_all[$roomInfo['id']]['roomusers'] ;
                    $connection->send(json_encode($curData));

                   //广播，断线重连消息
                    $uData['wsoperate_server'] = "ReconnectBackRoom_s";
                    $uData['uid'] = $dataInfo['uid'];
                    $uData['seatid'] = $room_all[$roomInfo['id']]['roomusers'][$dataInfo['uid']]['sit'];
                    send2room($roomInfo['id'],$uData);

                }else if($isInCurOtherRoom>0){
                    if($isInCurOtherRoom == 1){ //可更换房间
                        $joinReault = joinIntoNewRoom($dataInfo['uid'],$dataInfo['roomid']);
                        //换房不成功
                        if (!$joinReault) {
                                $curData['wsoperate_server'] = "JoinRoomFailure_s";
                                $curData['state_desc'] = "加入房间失败，请重试！";
                                $connection->send(json_encode($curData));
                        }
                    }else if($isInCurOtherRoom == 2){ //不可换房
                        $curData['wsoperate_server'] = "ForbidJoinRoom_s";
                        $curData['jointype'] = 2;//不允许加入房间；
                        $curData['state_desc'] = "你正在其他房间中玩牌，不能加入此房间！";
                        $connection->send(json_encode($curData));
                    }
                }else{//没有数据
                    $userInfo  = getUserInfoFromMemberByInit($dataInfo['uid']);
                    if (!isset($userInfo['id']))break;
                    //直接进入房间，作为旁观者
                    $room_all[$roomInfo['id']]['roomusers'][$userInfo['id']]['info'] = $userInfo;
                    $room_all[$roomInfo['id']]['roomusers'][$userInfo['id']]['online'] = 1;
                    $room_all[$roomInfo['id']]['roomusers'][$userInfo['id']]['sit'] = 0; 

                    $curData['wsoperate_server'] = "EnterRoom_s";
                    $curData['roominfo'] = $room_all[$roomInfo['id']]['roominfo'];
                    $curData['usersinfo'] =  $room_all[$roomInfo['id']]['roomusers'] ;
                    //进入房间成功消息
                    $connection->send(json_encode($curData));

                }
                break;
            case "SitDown"://---
                echo "[SitDown] UID: {$dataInfo['uid']}\n";
                if(!isset($dataInfo['index']))break;

                //其他玩家需要询问加入，
                $curData['wsoperate_server'] = "PrepareJoinRoom_s";
                //1、判断身上的钻石够不够，
                if (isMoneyEnough($dataInfo['uid'])>0) {
                    $curData['state'] = 1;
                    $curData['state_desc'] = "坐下将扣除相应数量的钻石，是否同意？";
                    $curData['usersinfo'] =  $room_all[$dataInfo['roomid']]['roomusers'] ;
                }else{
                    $curData['state'] = 2;
                    $curData['state_desc'] = "钻石不足，请充值！";
                }

                //var_dump($curData);
                $connection->send(json_encode($curData));

                break;
            case "JoinRoom"://加入房间--------------------------------------------------------------------------------
                echo "[JoinRoom] UID: {$dataInfo['uid']}\n";
                // //房主禁用，玩家才需要加入
                // $roomInfo  = getRoomInfoByCurServer($dataInfo['roomid']);
                if (!isset($dataInfo['index'])||!($dataInfo['index']>0&&$dataInfo['index']<10)) {
                    break;
                }

                //判断位置有没有被占
                foreach ( $room_all[$dataInfo['roomid']]['roomusers'] as $uid => $info) {
                    if($info['sit'] == $dataInfo['index']){
                        $curData['wsoperate_server'] = "SitDown_s";
                        $curData['desc'] =  "该座位已被锁定";
                        //坐下成功消息
                        $connection->send(json_encode($curData));
                        return;
                    }
                }


                if (costMoney($dataInfo['uid'])) {
                        $userInfo  = getUserInfoFromMemberByInit($dataInfo['uid']);
                        $room_all[$dataInfo['roomid']]['roomusers'][$userInfo['id']]['info'] = $userInfo;
                        $room_all[$dataInfo['roomid']]['roomusers'][$userInfo['id']]['online'] = 1;
                        $room_all[$dataInfo['roomid']]['roomusers'][$userInfo['id']]['sit'] = $dataInfo['index'];
                        //先坐下
                        // $curData['wsoperate_server'] = "SitDown_s";
                        // $curData['roominfo'] =  $room_all[$dataInfo['roomid']]['roominfo'];
                        // $curData['usersinfo'] =  $room_all[$dataInfo['roomid']]['roomusers'] ;
                        // //坐下成功消息
                        // $connection->send(json_encode($curData));
                        $curData['wsoperate_server'] = "SitDown_All_s";
                        $curData['state_desc'] = "玩家进入";
                        $curData['usersinfo'] =  $room_all[$dataInfo['roomid']]['roomusers'][$userInfo['id']];
                        send2room($dataInfo['roomid'],$curData);
                }
                break;
            case "GameReady":
                echo "[GameReady] UID: {$dataInfo['uid']}\n";
                 gameReady($dataInfo['uid'],$dataInfo['roomid']);
                break;
            case "GameBet":
                echo "[GameBet] UID: {$dataInfo['uid']}\n";
                 gameBetAction($dataInfo);
                break;
            case "GameDisband":
                echo "[GameDisband] UID: {$dataInfo['uid']}\n";
                gameDisband($dataInfo['uid'],$dataInfo['roomid']);
                break;
            case "GameDisbandResponse":
            var_dump($dataInfo);
                echo "[GameDisbandResponse] UID: {$dataInfo['uid']}\n";
                if (!isset($dataInfo['type'])) {
                    return;
                }
                gameDisbandResponse($dataInfo['uid'],$dataInfo['roomid'],$dataInfo['type']);
                break;
            case "ApplyBanker":
                echo "[ApplyBanker] UID: {$dataInfo['uid']}\n";
                applyBankerAction($dataInfo['uid'],$dataInfo['roomid']);
                break;
            //----------------------------------------------------------------------
            //独立协议，非游戏内
            case "FindMyRoom":
                    echo "[FindMyRoom] UID: {$dataInfo['uid']}\n";
                {
                    $curData['wsoperate_server'] = "FindMyRoom_s";
                    $roomId = getRoomIdByUserId($dataInfo['uid']);
                    if ($roomId != -1) {
                        $curData['roomdata'] = getRoomInfoByCurServer($roomId);
                    }
                    $curData['roomid'] = $roomId;
                    //坐下成功消息
                    $connection->send(json_encode($curData));
                }
                break;
            //----------------------------------------------------------------------
            default:
                break;

        }
    }
};

$ws_worker->onClose = function($connection) use($ws_worker, &$connection_all, &$timer_all,&$room_all) {

    echo "{$connection->id} is offline\n";
    //uid
    $conn_key = array_search($connection->id, $connection_all);
    $resultData['uid'] = $conn_key;
    //先确定，该用户所在的房间
    $roomId = getRoomIdByUserId($conn_key);

    //-1为该用户还没有坐下。直接离开
    if ($roomId == -1)return;

    //更新离线标志
    updateUserStatus($conn_key,$roomId,0);
    //通知房间中的所有用户
    if($roomId != null){
        $resultData['wsoperate_server'] = "UserOffLine_s";
        $resultData['uid'] = $conn_key;
        $roomUsersInfo = $room_all[$roomId]['roomusers'];
        if (is_array($roomUsersInfo)) {
           foreach ($roomUsersInfo as $key => $value) {
            if ($conn_key != $key &&isset($connection_all[$key]) && isset($ws_worker->connections[$connection_all[$key]]))
                $ws_worker->connections[$connection_all[$key]]->send(json_encode($resultData));
           }
        }
    }

    if ($conn_key) {
        $connection_all[$conn_key] = '';
        unset($connection_all[$conn_key]);
        $key = null;
        unset($conn_key);
    }
    //echo "\nonClose触发操作结束：\n";
};

//运行worker  
$ws_worker->runAll();

//向房间广播一条消息
function send2room($roomid, $msg) {//
    global $ws_worker, $connection_all,$room_all;
    $roomUsersInfo =  $room_all[$roomid]['roomusers'];
    if (is_array($roomUsersInfo)) {
        foreach ($roomUsersInfo as $key => $value) {
            if (isset($connection_all[$key])&&isset($ws_worker->connections[$connection_all[$key]]))
                $ws_worker->connections[$connection_all[$key]]->send(json_encode($msg));
        }
    }
}


function gameDisband($uid,$roomid){
    global $room_all,$timer_all,$time_click;

    if($room_all[$roomid]['roominfo']['gamestatus'] == 0){
        if ($uid == $room_all[$roomid]['roominfo']['member_id']) {
            gameDiabandOver($roomid);
        }
    }else{
        if (isset($timer_all[$roomid][5]))return;
        $timer_all[$roomid][5] = Timer::add($time_click['game_disband'], 'gameDisbandCallBack', [$roomid, $timer_all], false);
        $room_all[$roomid]['roominfo']['disbandstatus'][$uid] = 1;

        $curData['wsoperate_server'] = "gameDisband_s";
        $curData['uid'] =  $uid;
        $curData['desc'] =  "用户发起了解散请求";
        $curData['disbandlist'] = $room_all[$roomid]['roominfo']['disbandstatus'];
        send2room($roomid,$curData);

    }


     

}
function gameDisbandCallBack($roomid){
    gameDiabandOver($roomid);
}
function gameDisbandResponse($uid,$roomid,$type){
    global $room_all,$timer_all;


    $disbandCount = 0;
    foreach ($room_all[$roomid]['roominfo']['disbandstatus'] as $uid => $val) {
        if ($val == 1) {
             $disbandCount++;
        }
    }
    $sitCount = 0;
    foreach ($room_all[$roomid]['roomusers'] as $uid => $info) {
        if($info['sit']>0)$sitCount++;
    }


    if ($type == 2) { //拒绝
        if (isset($timer_all[$roomid][5])){
            Timer::del($timer_all[$roomid][5]);
            unset($timer_all[$roomid][5]);
        }
        $room_all[$roomid]['roominfo']['disbandstatus'][$uid]=2;

        $curData['wsoperate_server'] = "gameDisbandResponse_s";
        $curData['uid'] =  $uid;
        $curData['disbandCount'] = $disbandCount;
        $curData['sitCount'] = $sitCount;
        $curData['desc'] =  "用户拒绝解散";
        $curData['disbandlist'] = $room_all[$roomid]['roominfo']['disbandstatus'];
        $curData['type'] = $type;
        send2room($roomid,$curData);

        $room_all[$roomid]['roominfo']['disbandstatus'] = [];
    }else if($type == 1){
        $room_all[$roomid]['roominfo']['disbandstatus'][$uid] = 1;

        $disbandCount++;

        $curData['wsoperate_server'] = "gameDisbandResponse_s";
        $curData['uid'] =  $uid;
        $curData['disbandCount'] = $disbandCount;
        $curData['sitCount'] = $sitCount;
        $curData['desc'] =  "用户同意解散请求";
        $curData['disbandlist'] = $room_all[$roomid]['roominfo']['disbandstatus'];
        $curData['type'] = $type;
        send2room($roomid,$curData);


        if ($disbandCount == $sitCount) {
            gameDiabandOver($roomid,1);
        }

    }

}
function applyBankerAction($uid,$roomid){
    global $room_all;
    $res['status'] = 1;
    $res['desc'] = "申请成功";
    $res['wsoperate_server'] = "ApplyBanker_s";
    $res['uid'] =  $uid;
    if (count($room_all[$roomid]['roominfo']['bankerlist'])>0) {
        foreach ($room_all[$roomid]['roominfo']['bankerlist'] as $userid) {
            if ($userid == $uid) {
                $res['status'] = 2;
                $res['desc'] = "请勿重复申请";
                break;
            }
        }
    }else{
        $room_all[$roomid]['roominfo']['bankerlist'][] = $uid;
    }

    send2room($roomid,$res);
}

function gameReady($uid,$roomid){
    global $room_all,$timer_all,$time_click;

    //设置玩家准备
    if($room_all[$roomid]['roomusers'][$uid]['sit']==0||$room_all[$roomid]['roomusers'][$uid]['info']['gamestatus']>1)return;
    $room_all[$roomid]['roomusers'][$uid]['info']['gamestatus'] = 1;//玩家状态，游戏准备

    //广播准备消息
    $curData['wsoperate_server'] = "GameReady_s";
    $curData['uid'] =  $uid;
    send2room($roomid,$curData);

    if ( $room_all[$roomid]['roominfo']['gamestatus']==0) {

        $users = $room_all[$roomid]['roomusers'];
        $userCount = 0;
        foreach ($users as $user) {
                if ($user['info']['gamestatus']==1) {
                    $userCount++;
                }
        }


        //>=2个玩家，就准备倒计时开始游戏
        if($userCount ==2 ||$userCount > 2){

                if (count($users) > $userCount) {
                    if (isset($timer_all[$roomid][0])) {
                        return;
                    }
                    //倒计时开始
                     $timer_all[$roomid][0]= Timer::add($time_click['gameready'], 'gameReadyCallBack', [$roomid, $timer_all], false);
                     //发送消息
                    $curData['wsoperate_server'] = "GameTimeType_s";
                    $curData['type'] = 1;
                    $curData['time'] = $time_click['gameready'];
                    $curData['desc'] =  '游戏开始时间';
                    $curData['data'] =  '';
                    send2room($roomid,$curData);

                }else if(count($users) == $userCount){
                    if (isset($timer_all[$roomid][0])) {
                        Timer::del($timer_all[$roomid][0]);
                        unset($timer_all[$roomid][0]);
                    }
                    //游戏未开始的状态才能开始
                    if ( $room_all[$roomid]['roominfo']['gamestatus'] == 0) {
                        gameStart($roomid);
                    }
                    
                }
        }
        
    }
   
}
function gameStart($roomid){
    global $room_all,$timer_all,$time_click;
    if ($room_all[$roomid]['roominfo']['gamestatus'] > 0)return;

    if (isset($timer_all[$roomid][0])) {
        Timer::del($timer_all[$roomid][0]);
        unset($timer_all[$roomid][0]);
    }

//游戏进入空闲时间
    gameFree($roomid);

    //确定庄家
    setBankerAction($roomid);

}

function gameFree($roomid){
    global $room_all,$timer_all,$time_click;

//游戏进入空闲时间
    $room_all[$roomid]['roominfo']['gamestatus'] = 1;//房间状态，游戏开始
    $timer_all[$roomid][1] = Timer::add($time_click['gamefree'], 'gameFreeCallBack', [$roomid, $timer_all], false);

    //发送消息
    $curData['wsoperate_server'] = "GameTimeType_s";
    $curData['type'] = 2;
    $curData['time'] = $time_click['gamefree'];
    $curData['desc'] =  '游戏空闲时间';
    $curData['data'] =  '';
    send2room($roomid,$curData);

    //此时清除房间数据
    //筹码数据
    $room_all[$roomid]['roominfo']['betdetail'] = '';
    $room_all[$roomid]['roominfo']['bet'] = '';
    //牌数据
    $room_all[$roomid]['roominfo']['carddata'] = '';
    $room_all[$roomid]['roominfo']['playcount']++;
}

function setBankerAction($roomid){
    global $room_all;
    if (count($room_all[$roomid]['roominfo']['bankerlist'])>0) {
        $room_all[$roomid]['roominfo']['setbanker'] = $room_all[$roomid]['roominfo']['bankerlist'][0];
    }else{
         $count = 0;
         $userList = [];
        foreach ($room_all[$roomid]['roomusers'] as $uid => $udata) {
            if ($udata['sit'] > 0) {
                $userList[] = $uid;
                $count++;
            }
        }

        if($room_all[$roomid]['roominfo']['setbanker']==0||$room_all[$roomid]['roominfo']['setbanker']==null){
            $room_all[$roomid]['roominfo']['setbanker'] = $userList[0];
        }else{
            for ($i=0; $i < $count; $i++) { 
                if($userList[$i] ==  $room_all[$roomid]['roominfo']['setbanker']){
                    if ($i < $count-1) {
                        $room_all[$roomid]['roominfo']['setbanker'] = $userList[$i+1];
                    }else{
                        $room_all[$roomid]['roominfo']['setbanker'] = $userList[0];
                    }
                    break;
                }
            }
        }
    }

    //发送庄家
    $bankerData['wsoperate_server'] = "SendBankeerInfo_s";
    $bankerData['uid'] = $room_all[$roomid]['roominfo']['setbanker'];
    $bankerData['data'] = $room_all[$roomid]['roomusers'][$bankerData['uid']];
    send2room($roomid,$bankerData);
}

function gamefinish($roomid){
    global $room_all;
    $room_all[$roomid]['roominfo']['gamestatus'] = 1;//房间状态，游戏未开始

    //清除上庄列表的第一个玩家
    if(count($room_all[$roomid]['roominfo']['bankerlist'])>0){
        array_shift($room_all[$roomid]['roominfo']['bankerlist']);
    }

    //发送消息
    $curData['wsoperate_server'] = "GameFinish_s";
    $curData['data'] = ''; ;
    send2room($roomid,$curData);
}

function gameOver($roomid){
    global $room_all,$timer_all;


    //这里进行牌局结算

    $curData['wsoperate_server'] = "GameOver_s";
    $curData['data'] =  '';
    send2room($roomid,$curData);

    //存储房间数据
    setGameOver($roomid);

    //清除房间
    if (isset($room_all[$roomid])) {
        unset($room_all[$roomid]);
    }
    //清除定时器
    if (isset($timer_all[$roomid][0])) {
        Timer::del($timer_all[$roomid][0]);
        unset($timer_all[$roomid][0]);
    }
    if (isset($timer_all[$roomid][1])) {
        Timer::del($timer_all[$roomid][1]);
        unset($timer_all[$roomid][1]);
    }
     if (isset($timer_all[$roomid][2])) {
        Timer::del($timer_all[$roomid][2]);
        unset($timer_all[$roomid][2]);
    }
     if (isset($timer_all[$roomid][3])) {
        Timer::del($timer_all[$roomid][3]);
        unset($timer_all[$roomid][3]);
    }
    if (isset($timer_all[$roomid][4])) {
        Timer::del($timer_all[$roomid][4]);
        unset($timer_all[$roomid][4]);
    }
    if (isset($timer_all[$roomid][5])) {
        Timer::del($timer_all[$roomid][5]);
        unset($timer_all[$roomid][5]);
    }
}

function gameDiabandOver($roomid,$type=0){
    global $room_all,$timer_all;


    //这里进行牌局结算

    $curData['wsoperate_server'] = "GameDisbandOver_s";
     $curData['type'] = $type;
    send2room($roomid,$curData);
    //存储房间数据
    setGameOver($roomid);

    //清除房间
    if (isset($room_all[$roomid])) {
        unset($room_all[$roomid]);
    }
    //清除定时器
    if (isset($timer_all[$roomid][0])) {
        Timer::del($timer_all[$roomid][0]);
        unset($timer_all[$roomid][0]);
    }
    if (isset($timer_all[$roomid][1])) {
        Timer::del($timer_all[$roomid][1]);
        unset($timer_all[$roomid][1]);
    }
     if (isset($timer_all[$roomid][2])) {
        Timer::del($timer_all[$roomid][2]);
        unset($timer_all[$roomid][2]);
    }
     if (isset($timer_all[$roomid][3])) {
        Timer::del($timer_all[$roomid][3]);
        unset($timer_all[$roomid][3]);
    }
    if (isset($timer_all[$roomid][4])) {
        Timer::del($timer_all[$roomid][4]);
        unset($timer_all[$roomid][4]);
    }
    if (isset($timer_all[$roomid][5])) {
        Timer::del($timer_all[$roomid][5]);
        unset($timer_all[$roomid][5]);
    }
}

function gameFreeCallBack($roomid){
    global $room_all,$timer_all,$time_click;

    if (isset($timer_all[$roomid][1])) {
        Timer::del($timer_all[$roomid][1]);
        unset($timer_all[$roomid][1]);
    }


    //游戏进入下注时间
    $room_all[$roomid]['roominfo']['gamestatus'] = 2;//房间状态，游戏开始
    $timer_all[$roomid][2] = Timer::add($time_click['game_xiazhu'], 'gameXiazhuCallBack', [$roomid, $timer_all], false);

        //发送消息
    $curData['wsoperate_server'] = "GameTimeType_s";
    $curData['type'] = 3;
    $curData['time'] = $time_click['game_xiazhu'];
    $curData['desc'] =  '游戏下注时间';
    $curData['data'] =  '';
    send2room($roomid,$curData);
}
function gameXiazhuCallBack($roomid){
    global $room_all,$timer_all,$time_click;

    if (isset($timer_all[$roomid][2])) {
        Timer::del($timer_all[$roomid][2]);
        unset($timer_all[$roomid][2]);
    }

    //游戏进入发牌时间
    $room_all[$roomid]['roominfo']['gamestatus'] = 3;//房间状态，游戏开始
    $timer_all[$roomid][3] = Timer::add($time_click['game_open'], 'gameOpenCallBack', [$roomid, $timer_all], false);

        //发送消息
    $curData['wsoperate_server'] = "GameTimeType_s";
    $curData['type'] = 4;
    $curData['time'] = $time_click['game_open'];
    $curData['desc'] =  '游戏开牌时间';
    $curData['data'] =  '';
    send2room($roomid,$curData);

//当前座位上的玩家列表
    // $userlist = [];
    // foreach ($room_all[$roomid]['roomusers'] as $uid => $info) {
    //     if($info['sit'] > 0){
    //         $userlist[] = $uid;
    //     }
    // }

    $room_all[$roomid]['roominfo']['carddata'] =  sendCard($roomid,$room_all[$roomid]['roominfo']['playcount']);

//发牌
    $cardData['wsoperate_server'] = "SendCard_s";
    $cardData['carddata'] =  $room_all[$roomid]['roominfo']['carddata'];
    send2room($roomid,$cardData);

}

function gameOpenCallBack($roomid){
    global $room_all,$timer_all,$time_click;

    if (isset($timer_all[$roomid][3])) {
        Timer::del($timer_all[$roomid][3]);
        unset($timer_all[$roomid][3]);
    }

     //游戏进入结算时间
    $room_all[$roomid]['roominfo']['gamestatus'] = 4;//房间状态，游戏开始
    $timer_all[$roomid][4] = Timer::add($time_click['game_computer'], 'gameComputerCallBack', [$roomid, $timer_all], false);

    //这里进行单局结算
    $resData =  writeToDb($roomid,  $room_all[$roomid]['roominfo']);

    if (is_array($resData)&&isset($resData['bankerdata'])&&is_array($resData['bankerdata'])&&isset($resData['usersdata'])&&is_array($resData['usersdata'])) {
        foreach ($resData['usersdata'] as $uid => $info) {
            $room_all[$roomid]['roomusers'][$uid]['info']['score'] += isset($resData['usersdata'][$uid]['count'])?$resData['usersdata'][$uid]['count']:0;
        }
        $room_all[$roomid]['roomusers'][$resData['bankerdata']['uid']]['info']['score'] += isset($resData['bankerdata']['count'])?$resData['bankerdata']['count']:0;
    }


    //发送消息
    $curData['wsoperate_server'] = "GameTimeType_s";
    $curData['type'] = 5;
    $curData['time'] = $time_click['game_open'];
    $curData['desc'] =  '游戏结算时间';
    $curData['data'] =  $resData;
    send2room($roomid,$curData);

}


function gameComputerCallBack($roomid){
    global $room_all,$timer_all,$time_click;

    if (isset($timer_all[$roomid][4])) {
        Timer::del($timer_all[$roomid][4]);
        unset($timer_all[$roomid][4]);
    }

    $rule = unserialize($room_all[$roomid]['roominfo']['rule']);
    //本轮游戏结算
    gamefinish($roomid);
    if ($room_all[$roomid]['roominfo']['playcount']>= (int)$rule['gamenum']) {
        gameOver($roomid);
    }else{
       //游戏进入空闲时间
        gameFree($roomid);

        //确定庄家
        setBankerAction($roomid);
    }

}

function gameReadyCallBack($roomid){
    gameStart($roomid);
}

function gameBetAction($data){
    global $room_all;

    //庄家不能下注
    if ($data['uid'] == $room_all[$data['roomid']]['roominfo']['setbanker'])return;

    if ($room_all[$data['roomid']]['roominfo']['gamestatus'] == 2) {
        if (!isset($data['bettype'])||!isset($data['bet']))return;

        //更新记录
        $room_all[$data['roomid']]['roominfo']['betdetail'][$data['uid']][$data['bettype']][] = $data['bet'];

        if (!isset($room_all[$data['roomid']]['roominfo']['bet'][$data['bettype']]['count'])) {
            $room_all[$data['roomid']]['roominfo']['bet'][$data['bettype']]['count'] = 0;
        }
        if (!isset($room_all[$data['roomid']]['roominfo']['bet'][$data['bettype']][$data['uid']])) {
            $room_all[$data['roomid']]['roominfo']['bet'][$data['bettype']][$data['uid']] = 0;
        }
        $room_all[$data['roomid']]['roominfo']['bet'][$data['bettype']]['count'] += $data['bet'];
        $room_all[$data['roomid']]['roominfo']['bet'][$data['bettype']][$data['uid']] += $data['bet'];


        $curData['wsoperate_server'] = "GameBet_s";
        $curData['uid'] = $data['uid'];
        $curData['seatindex'] = $room_all[$data['roomid']]['roomusers'][$data['uid']]['sit'];
        $curData['bettype'] = $data['bettype'];
        $curData['bet'] =  $data['bet'];
        $curData['betsarea']['betinfo'] = $room_all[$data['roomid']]['roominfo']['bet'][$data['bettype']];
        send2room($data['roomid'],$curData);
    }
}

function writeToDb($roomid, $roomdata){

    global $tp_server;
    $url = $tp_server . "game.php/Baijiale/writeToDb";
    $data = https_post(['roomid' =>$roomid,'playcount'=>$roomdata['playcount'],'carddata'=>json_encode($roomdata['carddata']),'bankerID'=>$roomdata['setbanker'],'userBetList'=>json_encode($roomdata['bet'])], $url);
    $data=json_decode($data,true);
    return  $data;
}

function costMoney($uid){
    global $tp_server;
    $url = $tp_server . "game.php/Baijiale/costMoney";
    $data = https_post(['uid' =>$uid], $url);
    $data=json_decode($data,true);
    //var_dump($data);
    return  $data['tag'];
}


function isMoneyEnough($uid){
    global $tp_server;
    $url = $tp_server . "game.php/Baijiale/isMoneyEnough";
    $data = https_post(['uid' =>$uid], $url);
    $data=json_decode($data,true);
    //var_dump($data);
    return  $data['tag'];
}

function setGameOver($roomid){
    global $tp_server;
    $url = $tp_server . "game.php/Baijiale/gameOver";
    $data = https_post(['roomid' =>$roomid], $url);
    $data=json_decode($data,true);
    //var_dump($data);
    return  $data['tag'];
}

function getRoomInfoFromRoom($roomId){
    global $tp_server;
    $url = $tp_server . "game.php/Baijiale/getRoomInfo";
    $roomInfo = https_post(['roomid' =>$roomId], $url);
    // var_dump(['roomInfo666' => json_decode($roomInfo,true)]);

    $roomInfo = json_decode($roomInfo,true);
    $roomInfo['gamestatus'] = 0;
    $roomInfo['playcount'] = 0;
    $roomInfo['bankerlist'] = []; //上庄列表
    $roomInfo['setbanker'] = 0;
    $roomInfo['carddata'] = [];
    $roomInfo['disbandstatus'] = [];

    return $roomInfo;
}

function getRoomInfo($roomId){
    global $tp_server, $room_all;
    $roomInfo = null;
    foreach ($room_all as $room_id => $room) {
        if ($room_id == $roomId) {
            $roomInfo = $room;
            break;
        }
    }
    //如果还没有加载房间信息，就去room表中查询
    if($roomInfo == null){
        $url = $tp_server . '/game.php/Baijiale/getRoomInfo';
        $room = https_post(['room_id' => $roomId], $url);
        $roomInfo = $room;
    }
    //var_dump(['RoomInfo' => $room]);
    return $roomInfo;
}
function getRoomInfoByCurServer($roomId){
    global $room_all;
    //$roomInfo = null;
    foreach ($room_all as $room_id => $room) {
        if ($room_id == $roomId) {
            $roomInfo = $room;
            break;
        }
    }
    //var_dump(['RoomInfo' => $roomInfo]);
    return isset($roomInfo['roominfo'])?$roomInfo['roominfo']:null;
}

function isUserInRoom($uid,$roomId){
    global $room_all;
    $isHave = false;
    foreach ($room_all as $room_id => $room) {
        if ($room_id == $roomId && isset($room['roomusers'])) {
                foreach ($room['roomusers'] as $userid => $userinfo) {
                        if($userid == $uid){
                            $isHave = true;
                            break;
                        }
                }
            break;
        }
    }
    return  $isHave;
}

//return 0/1/2 无/存在且可退房/存在不可退房
function isUserInOtherRoom($uid,$roomId){
    global $room_all;
    $isHave = 0;
    foreach ($room_all as $room_id => $room) {
        if ($room_id != $roomId && isset($room['roomusers'])) {
            foreach ($room['roomusers'] as $userid => $userinfo) {
                if($userid == $uid){
                    $isHave = 1;
                    //游戏开始状态
                    if ($room['roominfo']['gamestatus']>0) {
                        $isHave = 2;
                    }
                    break;
                }
            }
        }else{
            continue;
        }
    }
    return  $isHave;
}

function joinIntoNewRoom($uid,$roomId,$iscreate=false){
 global $ws_worker, $connection_all, $room_all;
    foreach ($room_all as $room_id => $room) {
        if ($room_id != $roomId && isset($room['roomusers'])) {
            foreach ($room['roomusers'] as $userid => $userinfo) {
                if($userid == $uid){
                    //游戏未开始状态
                    if ($room['roominfo']['gamestatus'] == 0) {
                        $userData = $userinfo;

                        //-----------------老房间消息-----------------------------
                        //清理数据
                        $room_all[$room_id]['roomusers'][$userid]='';
                        unset($room_all[$room_id]['roomusers'][$userid]);
                        //然后通知该房间的人，有人跑了
                        $curData['wsoperate_server'] = "RunAway_s";
                        $curData['uid'] =  $userid;
                        send2room($room_id,$curData);

                        //------------------新房间消息----------------------------
                        //需要初始化对应的数据
                        $userData['info']['gamestatus'] = 0;
                        $userData['sit'] = 0;
                        $userData['online'] = 1;
                        $room_all[$roomId]['roomusers'][$userid] = $userData;

                        //如果是创建房间，那么这里需要加载房间数据
                        if ($iscreate) {
                            $httpData_roomInfo = getRoomInfoFromRoom($roomId);
                            if (!isset($httpData_roomInfo['id'])) {
                                //房间不存在
                                echo "{$roomId} is not find\n";
                                break;
                            }else{
                                $room_all[$roomId]['roominfo'] = $httpData_roomInfo;
                            }
                        }
                        

                        //在新房间坐下的消息
                        $curNewData['wsoperate_server'] = "EnterRoom_s";
                        $curNewData['roominfo'] =  $room_all[$roomId]['roominfo'];
                        $curNewData['usersinfo'] =  $room_all[$roomId]['roomusers'] ;
                        //房主创建成功消息
                        $ws_worker->connections[$connection_all[$userid]]->send(json_encode($curNewData));

                        // $curSitDownData['wsoperate_server'] = "SitDown_All_s";
                        // $curSitDownData['state_desc'] = "玩家进入";
                        // $curSitDownData['usersinfo'] =  $userData;
                        // send2room($roomId,$curSitDownData);


                        return true;
                    }
                    break;
                }
            }
        }else{
            continue;
        }
    }
    return  false;
}

function getUserInfoFromMemberByInit($uid){
    global $tp_server;
    $url = $tp_server . '/game.php/Baijiale/getUserInfo';
    $user = https_post(['uid' => $uid], $url);
    //相关参数需要初始化
    $user = json_decode($user,true);
    $user['gamestatus'] = 0;
    $user['score'] = 0;
    return $user;

}
function getRoomIdByUserId($uid){
    global $room_all;
    if (!is_array($room_all))return -1;
    foreach ($room_all as $room_id => $room) {
        if (!isset($room['roomusers'])||!is_array($room['roomusers']))continue;
       foreach ($room['roomusers'] as $userid => $userinfo) {

                if($userid == $uid){
                   return $room_id;
                }
            }
    }
    return -1;
}
function updateUserStatus($uid,$roomId,$status){
    global $room_all;
    if(isset($room_all[$roomId])){
        $roomInfo = $room_all[$roomId]['roomusers'];
        foreach ($roomInfo as $key => $value) {
            if ($key == $uid){
                    $room_all[$roomId]['roomusers'][$key]['online'] = $status;
                    break;
                }
        }
    }
}

function sendCard($roomid,$playcount){
    global $tp_server;
    $url = $tp_server . '/game.php/Baijiale/sendCard';
    $cardInfo = https_post(['roomid' => $roomid,'playcount'=>$playcount-1], $url);
    //相关参数需要初始化
    $cardInfo = json_decode($cardInfo,true);
    return $cardInfo;
}


function https_post($data, $url) {
//echo $url;
//$url = 'http://127.0.0.1:82/game.php/Baijiale/getRoomInfo';
// var_dump($data);
$ch = curl_init();
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_URL, $url);

$response = curl_exec($ch); // 已经获取到内容，没有输出到页面上。
curl_close($ch);
return $response;

// $ch = curl_init();
//     curl_setopt($ch, CURLOPT_POST, 1);
//     curl_setopt($ch, CURLOPT_URL, $url);
//     curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
//     curl_setopt($ch, CURLOPT_TIMEOUT, 20); // 设置超时限制防止死循环
//     curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//         'Content-Type: application/json; charset=utf-8')
//     );
//     ob_start();
//     curl_exec($ch);
//     if (curl_errno($ch)) {
//         return curl_error($ch); //捕抓异常
//     }
//     $return_content = ob_get_contents();
//     ob_end_clean();
//     curl_close($ch);
//     return $return_content;
}
