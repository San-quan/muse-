<?php

// +----------------------------------------------------------------------
// | Author: HunZuGame
// +----------------------------------------------------------------------

define("GAMENAME", "HangzhouMajong");
define("GAME_SERVER_NAME", 20180710);
define("GAMEVERSION", "1.0.1");
define("GR_PING", "ping");
define("GR_PLAYBACK", "playback");
// +---------------------------------------------------------------------------
// +----------------------------------------------------------------------
// | Desc: 游戏内常量
// +----------------------------------------------------------------------
define("GR_CONST_CARD_MAX", 136);
define("GR_CONST_MAX_INDEX", 42);
define("GR_CONST_MAX_COUNT", 14);

define("GR_FACE_UP_COUNT", 2);
define("GR_BASE_SCORE", 1000);
define("GR_BASE_SCORE_MIN", 1000);
define("GR_BASE_SCORE_MAX", 100000);
define("GR_BASE_SCORE_STEP", 1000);
define("GR_PAO_MIN", 0);
define("GR_PAO_MAX", 10);
define("GR_ZIMO_TAX_RATE", 0.05);
define("GR_MODE_ROOM_CARD", "room_card");
define("GR_MODE_RAKE", "rake");
define("GR_ROOM_MAX_HANDS", 8);
define("GR_REDEAL_MAX_PER_HAND", 3);
define("GR_DISCARD_TIMEOUT_SEC", 15);
define("GR_CLAIM_TIMEOUT_SEC", 5);
define("GR_FACEUP_EMPTY_KONG", false);
define("GR_OPENING_FLIP_KONG", false);
define("GR_DEALER_OPENING_AN_GANG", false);
define("GR_REDEAL_COUNTS_AS_HAND", false);
define("GR_REDEAL_RESELECT_PAO", false);
define("GR_CHAIN_KONG", true);
define("GR_ROB_KONG_SCOPE", "bu_only");
define("GR_WALL_END_NO_KONG", "liuju");
define("GR_TIANHU_STACK_PATTERNS", true);
define("GR_QIDUI_ALLOW_QUAD", true);
define("GR_SEAT_ENTRY_MUL", 30);
define("GR_RECHARGE_REMIND_MUL", 5);
define("GR_STOP_PLAY_MUL", 1);
define("GR_IDLE_RECLAIM_SEC", 600);
define("GR_OFFLINE_RECONNECT_SEC", 120);
define("GR_DISSOLVE_OFFLINE_AGREE_SEC", 120);

// ==== 测试专用：指定发牌开关（默认关；仅用于凑测试现场，用完置回 false）====
define("GR_TEST_FORCE_DECK", true);

// ==== Telegram Mini App 登录 ====
define("TG_BOT_TOKEN", "");            // 占位：填入 BotFather 拿到的 bot token
define("TG_AUTH_MAX_AGE_SEC", 86400);  // initData 有效期（秒），按文档默认 86400

// +----------------------------------------------------------------------
// | Desc: 游戏内协议
// +----------------------------------------------------------------------
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
define("GR_GAME_MJ_ZHUANG", "game_mj_zhuang");
define("GR_GAME_MJ_SEND_HANDCARDS", "game_mj_sendhandcards");
define("GR_GAME_MJ_SEND_CARDS", "game_mj_sendcards");
define("GR_GAME_MJ_TOUCH_CARDS", "game_mj_touchcards");
define("GR_GAME_MJ_OUT_CARDS_REG", "game_mj_outcardsreg");
define("GR_GAME_MJ_OUT_CARDS", "game_mj_outcards");
define("GR_GAME_MJ_OUT_CARDS_DATA", "game_mj_outcardsdata");
define("GR_GAME_MJ_OPERATE_NOTIFY", "game_mj_operatenotify");
define("GR_GAME_MJ_OPERATE_REG", "game_mj_operatereg");
define("GR_GAME_MJ_OPERATE_RESULT", "game_mj_operateresult");
define("GR_GAME_MJ_TING_NOTICE", "game_mj_tingnotice");
define("GR_GAME_MJ_HU_NOTICE", "game_mj_hunotice");
define("GR_GAME_MJ_CALCULATION", "game_mj_calculation");
define("GR_GAME_MJ_HANDCARDS", "game_mj_handcards");

define("GR_GAME_MJ_CAI_PIAO", "game_mj_caipiao");

// 测试专用：指定发牌（默认关闭，见 GR_TEST_FORCE_DECK）
define("GR_GAME_MJ_SET_DECK", "game_mj_set_deck");

define("GR_GAME_MJ_FACE_UP", "game_mj_face_up");
define("GR_GAME_MJ_PICK_FLIP", "game_mj_pick_flip");
define("GR_GAME_MJ_FLIP_ZIMO", "game_mj_flip_zimo");
define("GR_GAME_MJ_FLIP_DISCARD", "game_mj_flip_discard");
define("GR_GAME_MJ_FLIP_KONG", "game_mj_flip_kong");
define("GR_GAME_MJ_FACE_UP_REFILL", "game_mj_face_up_refill");
define("GR_GAME_MJ_SET_PAO", "game_mj_set_pao");
define("GR_GAME_MJ_SEATS_SHUFFLED", "game_mj_seats_shuffled");
define("GR_GAME_MJ_AUTO_PLAY", "game_mj_auto_play");
// v1.20 2.8：客户端取消超时托管
define("GR_GAME_MJ_CANCEL_AUTO_PLAY", "game_mj_cancel_auto_play");
define("GR_GAME_MJ_ACTION_PROMPT", "game_mj_action_prompt");
define("GR_GAME_MJ_HAND_END", "game_mj_hand_end");

// v1.20 2.9 精确手牌张数校验：拒绝码与错误通知协议
define("GR_ERR_HAND_COUNT", "HAND_COUNT");
// v1.20 2.11 碰后不能打出刚碰的那张：拒绝码
define("GR_ERR_PENG_TILE_DISCARD", "PENG_TILE_DISCARD");
define("GR_GAME_MJ_ERR_NOTIFY", "game_mj_err_notify");

define("GR_GAME_MJ_GET_CONTROL", "game_mj_getcontrol");
define("GR_GAME_MJ_CONTROL", "game_mj_control");



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
define("CLICK_VALUE_STARTTING", 0.5);

define("CLICK_NAME_END", "gameend");
define("CLICK_VALUE_END", 1);

// define("CLICK_NAME_DISMISS", "dismiss");
// define("CLICK_VALUE_DISMISS", 120);

// +--------------------------------------
//|游戏逻辑定时器类型

define("CLICK_NAME_ZHUANG", "zhuangjia");
define("CLICK_VALUE_ZHUANG", 1);

define("CLICK_NAME_UPSET_SEATNO", "gameupsetseatno");
define("CLICK_VALUE_UPSET_SEATNO", 1);


define("CLICK_NAME_SENDHANDCARDS", "sendhandcards");
define("CLICK_VALUE_SENDHANDCARDS", 0.5);

define("CLICK_NAME_SENDCARDS", "sendcards");
define("CLICK_VALUE_SENDCARDS", 0.5);

define("CLICK_NAME_OUTCARDS", "outcards");
define("CLICK_VALUE_OUTCARDS", 15);

define("CLICK_NAME_WAITCLAIM", "waitclaim");
define("CLICK_VALUE_WAITCLAIM", 5);

define("CLICK_NAME_FLIPCHOOSE", "flipchoose");
define("CLICK_VALUE_FLIPCHOOSE", 15);

define("CLICK_NAME_SEL_PAO", "selpao");
define("CLICK_VALUE_SEL_PAO", 15);
// +----------------------------------------------------------------------
// | Desc: 游戏系统常量
// | Desc: 游戏内全局常量
// +----------------------------------------------------------------------
// define('ALLMEMBER_COUNT', 30);

define('GAMEMODE_NORMAL_SSW', 1);
define('GAMEMODE_SPECIAL_SSW', 2);

define('PAYMODE_BANKER_SSW', 1);
define('PAYMODE_AA_SSW', 2);

// define('PLAYMODE_TONGBI_SSW', 1);
// define('PLAYMODE_BANKER_SSW', 2);

 //支付费率
// define('PAYMODE_BANKER_COAST', 200);
// define('PAYMODE_AA_COAST', 40);


// +-------------------------------------------------------------------
// | Desc: 其他
// +----------------------------------------------------------------------





?>