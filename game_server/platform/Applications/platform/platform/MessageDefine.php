<?php

// +----------------------------------------------------------------------
// | Author: HunZuGame
// +----------------------------------------------------------------------

//游戏定义
define("ShisanWater", 'ShisanWater');
define("HangzhouMajong", 'HangzhouMajong');
define("SifuCards", 'SifuCards');
define("Doudz", 'Doudz');
define("Runfast", "Runfast");
define("GAME_VERSION", 1);

// ==== Telegram Mini App 登录（与子服 HappyMajong MessageDefine 保持同一套取值）====
define("TG_BOT_TOKEN", "");            // 占位：填入 BotFather 拿到的 bot token
define("TG_AUTH_MAX_AGE_SEC", 86400);  // initData 有效期（秒），按文档默认 86400

// +----------------------------------------------------------------------






// +----------------------------------------------------------------------
// | Desc: 大厅协议
// +----------------------------------------------------------------------
define("PLATFORM", 1);
define("PT_PING", "ping");
define("PT_GAMEINFO", "gameinfo");
// +----------------------------------------------------------------------
define("PT_LOGIN", "login");
define("PT_CREATEROOM", "createroom");
define("PT_ENTERROOM", "enterroom");
define("PT_BINDCODE", "bindcode");
define("PT_BINDCODE_ACTION", "bindcodeaction");

define("PT_FIGHTING", "fightrecord");
define("PT_FIGHTING_CLUB", "fightrecordclub");
define("PT_FIGHTING_ROOM", "fightrecordroom");
define("PT_FIGHTING_ROOM_DETAIL", "fightrecordroomdetail");
define("PT_FIND", "findrecord");
define("PT_PAYORDER_LIST", "payorderlist");
define("PT_GOODSLIST", "goodslist");
define("PT_SIGNIN", "signin");
define("PT_SIGNREG", "signinreg");
define("PT_PAYMENT", "payment");
define("PT_USERCARDS", "usercards");
define("PT_SENDSMS", "sendsms");
define("PT_CHECKCODE", "checkcode");
// +----------------------------------------------------------------------
// | Desc: 俱乐部协议
// +----------------------------------------------------------------------
define("PT_CLUB_CREATE", 		"clubcreate");
define("PT_CLUB_JOIN", 			"clubjoin");
define("PT_CLUB_LIST", 			"club_list");
define("PT_CLUB_ROOM_LIST", 	"club_room_list");
define("PT_CLUB_PEOPLE_LIST", 	"club_people_list");
define("PT_CLUB_APPLY", 		"club_apply");
define("PT_CLUB_APPLY_LIST", 	"club_apply_list");
define("PT_CLUB_LAHEI", 		"club_lahei");
define("PT_CLUB_LAHEI_LIST", 	"club_lahei_list");
define("PT_CLUB_PEOPLE_DELETE", "club_people_delete");
define("PT_CLUB_DISABLE", 		"club_disable");
define("PT_CLUB_FREEPAY", 		"club_freepay");

 //俱乐部上限
define('CLUB_CREATE_LIMIT', 20);
define('CLUB_JOIN_LIMIT', 10);
define('CLUB_PEOPLE_LIMIT', 100);


// +----------------------------------------------------------------------
// define("PLATFORM", 1);
// define("GAMEDESK", 1);
// +----------------------------------------------------------------------

// +----------------------------------------------------------------------
// | Desc: 游戏内全局常量
define('GAMEMODE_NORMAL_SSW', 1);
define('GAMEMODE_SPECIAL_SSW', 2);

define('PAYMODE_BANKER_SSW', 1);
define('PAYMODE_AA_SSW', 2);

define('PLAYMODE_TONGBI_SSW', 1);
define('PLAYMODE_BANKER_SSW', 2);

 //支付费率
define('PAYMODE_AA_COAST', 100);
define('PAYMODE_AA_COAST_HappyMajong', 100);
define('PAYMODE_AA_COAST_SifuCards', 100);





?>