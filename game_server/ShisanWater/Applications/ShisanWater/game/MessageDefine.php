<?php

// +----------------------------------------------------------------------
// | Author: HunZuGame
// +----------------------------------------------------------------------

define("GAMENAME", "ShisanWater");
define("GAME_SERVER_NAME", 20180001);
define("GAMEVERSION", "1.0.1");
define("GR_PING", "ping");
// +---------------------------------------------------------------------------
// +----------------------------------------------------------------------
// | Desc: 游戏内协议
// +----------------------------------------------------------------------
// +--------------------------------
// | 游戏状态协议
// define("GR_GAMEWAIT", "gamewait");
// define("GR_GAMEREADY", "gameready");
define("GR_GAMEREADYREG", "gamereadyreg");
define("GR_GAMEREADYRRESULT", "gamereadyresult");
define("GR_GAMEROWNER_START", "gameownerstart");
define("GR_GAMESTART", "gamestart");
define("GR_GAMEEND", "gameend");
define("GR_GAMEOVER", "gameover");
// +--------------------------------
// | 游戏逻辑协议
// define("GR_GAME_QIANG_ZHUANG", "gameqiangzhuang");
// define("GR_GAME_QIANG_ZHUANG_REG", "gameqiangzhuangreg");
// define("GR_GAME_QIANG_RESULT", "gameqiangzhuangresult");
// define("GR_GAME_SURE_RANK", "gamesurerank");
// define("GR_GAME_SURE_RANK_REG", "gamesurerankreg");

define("GR_GAME_SEND_CARDS", "gamesendcards");
define("GR_GAME_OUT_CARDS", "gameoutcards");
define("GR_GAME_COMPARE_CARDS", "gamecomparecards");
define("GR_GAME_SPECIALTYPE_OPERATE", "specialoperate");







// +---------------------------------------------------------------------------
// +---------------------------------------------------------------------------
// | 游戏主框架定时器类型
// +---------------------------------------------------------------------------
// define("CLICK_NAME_UPDATE", "update");

// define("CLICK_NAME_ROOM_LIFE", "roomlife");
// define("CLICK_VALUE_ROOM_LIFE", 1500); //3600

define("CLICK_NAME_WAITSTART", "waitstart");
define("CLICK_VALUE_WAITSTART", 2);

define("CLICK_NAME_STARTTING", "startting");
define("CLICK_VALUE_STARTTING", 2);

define("CLICK_NAME_END", "gameend");
define("CLICK_VALUE_END", 1);

// define("CLICK_NAME_DISMISS", "dismiss");
// define("CLICK_VALUE_DISMISS", 120);

// +--------------------------------------
//|游戏逻辑定时器类型

define("CLICK_NAME_QIANGZHUANG", "gameqiangzhuang");
define("CLICK_VALUE_QIANGZHUANG", 5);

define("CLICK_NAME_QIANGZHUANG_WAIT", "gameqiangzhuangwait");
define("CLICK_VALUE_QIANGZHUANG_WAIT", 3);

define("CLICK_NAME_SURERANK", "gamesurerank");
define("CLICK_VALUE_SURERANK", 5);

define("CLICK_NAME_SENDCARDS", "sendcards");
define("CLICK_VALUE_SENDCARDS", 60);

define("CLICK_NAME_COMPARECARDS_UNIT", "comparecards");
define("CLICK_VALUE_COMPARECARDS_UNIT", 3);

// +----------------------------------------------------------------------
// | Desc: 游戏系统常量
// | Desc: 游戏内全局常量
// +----------------------------------------------------------------------
// define('ALLMEMBER_COUNT', 30);

define('GAMEMODE_NORMAL_SSW', 1);
define('GAMEMODE_SPECIAL_SSW', 2);

define('PAYMODE_BANKER_SSW', 1);
define('PAYMODE_AA_SSW', 100);

// define('PLAYMODE_TONGBI_SSW', 1);
// define('PLAYMODE_BANKER_SSW', 2);

 //支付费率
// define('PAYMODE_BANKER_COAST', 200);
// define('PAYMODE_AA_COAST', 40);


// +-------------------------------------------------------------------
// | Desc: 其他
// +----------------------------------------------------------------------
//马牌数据
define('MA_CARD_1', 0x05);
define('MA_CARD_2', 0x0A);
define('MA_CARD_3', 0x0E);




?>