<?php

// +----------------------------------------------------------------------
// | Author: HunZuGame
// +----------------------------------------------------------------------

define("GAMENAME", "Doudz");
define("GAME_SERVER_NAME", 20180004);
define("GAMEVERSION", "1.0.1");
define("GR_PING", "ping");
// +---------------------------------------------------------------------------
// +----------------------------------------------------------------------
// | Desc: 游戏内协议
// +----------------------------------------------------------------------

// // +--------------------------------
// // | 游戏逻辑协议
// define("GR_GAME_ZHUANG", "gamezhuang");
// define("GR_GAME_ZHUANG_REG", "gamezhuangreg");
// //define("GR_GAME_QIANG_RESULT", "gameqiangzhuangresult");
// define("GR_GAME_SURE_RANK", "gamesurerank");
// define("GR_GAME_SURE_RANK_REG", "gamesurerankreg");

// define("GR_GAME_SEND_CARDS", "gamesendcards");
// define("GR_GAME_COMPUTER_CARDS", "gamecomputercards");
// //define("GR_GAME_COMPARE_CARDS", "gamecomparecards");
// +---------------------------------------------------------------------------
// | 游戏主框架定时器类型
// +---------------------------------------------------------------------------
define("CLICK_NAME_START", "gamestart");
define("CLICK_VALUE_START", 5);

define("CLICK_NAME_READY", "gameclickready");
define("CLICK_VALUE_READY", 5);

define("CLICK_NAME_DIZHU", "gameclickdizhu");
define("CLICK_VALUE_DIZHU", 5);

define("CLICK_NAME_DOUBLE_RANK", "gameclickdoublerank");
define("CLICK_VALUE_DOUBLE_RANK", 5);

define("CLICK_NAME_UPSET_SEATNO", "gameupsetseatno");
define("CLICK_VALUE_UPSET_SEATNO", 1);

define("CLICK_NAME_SEND_CARD", "gameclicksendcard");
define("CLICK_VALUE_SEND_CARD", 3);

define("CLICK_NAME_OUT_CARD", "gameclickoutcard");
define("CLICK_VALUE_OUT_CARD", 15);

define("CLICK_NAME_END", "gameend");
define("CLICK_VALUE_END", 5);

define("CLICK_NAME_DISMISS", "dismiss");
define("CLICK_VALUE_DISMISS", 60);



// +----------------------------------------------------------------------
// | Desc: 游戏系统常量
// | Desc: 游戏内全局常量
// +----------------------------------------------------------------------


define('DZ_WAIT_DIZHU', 0);
define('DZ_BU_JIAO_DIZHU', 1);
define('DZ_BU_QIANG_DIZHU', 2);
define('DZ_JIAO_DIZHU', 3);
define('DZ_QIANG_DIZHU', 4);

define('DZ_JIAOFEN_1_DIZHU', 5);
define('DZ_JIAOFEN_2_DIZHU', 6);
define('DZ_JIAOFEN_3_DIZHU', 7);
?>