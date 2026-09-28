<?php
// +---------------------------------------------------------------------------
// +----------------------------------------------------------------------
// | Desc: 房间基本协议
// +----------------------------------------------------------------------
// |房间协议
define("GR_LOGIN", "login");
define("GR_ENTER", "enter");
define("GR_COMEIN", "comein");
define("GR_COMEOUT", "comeout");
define("GR_SITDOWN", "sitdown");
define("GR_SITUP", "situp");
define("GR_DISMISS", "dismiss");
define("GR_DISMISS_REG", "dismiss_reg");
define("GR_DISMISS_RESULT", "dismiss_result");
define("GR_CLICKTIME", "clicktime");
define("GR_CHAT", "chatmessage");
define("GR_CHAT_ANI", "chatanimessage");
define("GR_OBTAINLOCATION", "obtainlocation");
define("GR_GETLOCATION", "getlocation");
// +--------------------------------
// | 游戏状态协议
define("GR_GAMEWAIT", "gamewait");
define("GR_GAMEREADY", "gameready");
define("GR_GAMEREADYREG", "gamereadyreg");
define("GR_GAMEREADYRESULT", "gamereadyresult");
define("GR_GAMESTART", "gamestart");
define("GR_GAME_DIZHU", "gamedizhu");
define("GR_GAME_DIZHU_REG", "gamedizhureg");
define("GR_GAME_DIZHU_RESULT", "gamedizhuresult");
define("GR_GAME_DOUBLE_RANK", "gamedoublerank");
define("GR_GAME_SEND_CARDS", "gamesendcards");
define("GR_GAME_OUT_CARD", "gameoutcard");
define("GR_GAME_OUT_CARD_REG", "gameoutcardreg");
define("GR_GAME_PEOPLE_END", "gamepeopleend");
define("GR_GAME_PASS", "gamepass");
define("GR_GAMEEND", "gameend");
define("GR_GAMEOVER", "gameover");


// +---------------------------------------------------------------------------
// +---------------------------------------------------------------------------
// | 游戏主框架定时器类型
// +---------------------------------------------------------------------------
define("CLICK_NAME_UPDATE", "update");

define("CLICK_NAME_ROOM_LIFE", "roomlife");
define("CLICK_VALUE_ROOM_LIFE", 900); //3600

define("CLICK_NAME_MAX_LIFE", "maxlife");
define("CLICK_VALUE_MAX_LIFE", 21600); //24小时

// +----------------------------------------------------------------------
// | Desc: 游戏系统常量
// | Desc: 游戏内全局常量
// +----------------------------------------------------------------------
define('ALLMEMBER_COUNT', 30);


define('PAYMODE_BANKER', 1);
define('PAYMODE_AA', 2);

 //支付费率
define('PAYMODE_BANKER_COAST', 200);
define('PAYMODE_AA_COAST', 40);




?>