<?php
// 本机调试：URL 带 uid 时按 uid 隔离 session，四个窗口各自独立 openid，不共用一个 session
$uid_q = isset($_GET['uid']) ? intval($_GET['uid']) : 0;
if ($uid_q > 0) { @session_id('hzmjlocal' . $uid_q); }
session_start();
// roompwd 与 pwd 等价，URL 用 pwd=888888 时同样识别为「已指定房间」
$rpwd_q = isset($_GET['roompwd']) ? trim(strval($_GET['roompwd'])) : (isset($_GET['pwd']) ? trim(strval($_GET['pwd'])) : '');
// 本机调试旁路：URL 带 uid+roompwd，或 host 为 127.0.0.1/localhost 时，不走微信 OAuth，直接用 uid 当 openid
$host_q = isset($_SERVER['HTTP_HOST']) ? strval($_SERVER['HTTP_HOST']) : '';
$is_local_host_q = (strpos($host_q, '127.0.0.1') === 0 || strpos($host_q, 'localhost') === 0);
$local_bypass_q = ($is_local_host_q || ($uid_q > 0 && $rpwd_q !== ''));
if ($uid_q > 0) {
    $db = new mysqli('127.0.0.1', 'root', '', 'game735', 3306);
    if (!$db->connect_error) {
        $db->set_charset('latin1');
        $uid_q_sql = intval($uid_q);
        $r = $db->query("SELECT id,openid,nickname,photo FROM users WHERE id=$uid_q_sql LIMIT 1");
        if ($r && $row = $r->fetch_assoc()) {
            if (empty($_SESSION['think'])) $_SESSION['think'] = [];
            $_SESSION['think']['openid']   = strval($row['openid']);
            $_SESSION['think']['nickname'] = strval($row['nickname']);
            $_SESSION['think']['headurl']  = strval($row['photo'] ? $row['photo'] : '');
            $_SESSION['think']['uid']      = intval($row['id']);
        }
        $db->close();
    }
}
// 本机旁路兜底：带 uid 但库里没查到/或者说 openid 为空时，用 uid 当 openid，避免前端把 oid 填成 -1 后跳微信
if ($local_bypass_q && $uid_q > 0 && empty($_SESSION['think']['openid'])) {
    if (empty($_SESSION['think'])) $_SESSION['think'] = [];
    $_SESSION['think']['openid']   = strval($uid_q);
    $_SESSION['think']['nickname'] = 'local' . $uid_q;
    $_SESSION['think']['headurl']  = '';
    $_SESSION['think']['uid']      = intval($uid_q);
}
// 本机调试：URL 带 uid+pwd 时，把 uid/pwd/gametype 记入 session 与 cookie。
// 记 cookie 的原因：session_id 按 uid 隔离（hzmjlocal<uid>），当页面被跳成「只剩 invitecode=」时 URL 已无 uid，
// 那次请求用的是另一个 session，读不到 local_uid/local_pwd，只能靠 cookie 兜底还原。
$gt_q = isset($_GET['gametype']) ? trim(strval($_GET['gametype'])) : '';
if ($uid_q > 0 && $rpwd_q !== '') {
    $_SESSION['local_uid'] = intval($uid_q);
    $_SESSION['local_pwd'] = $rpwd_q;
    if ($gt_q !== '') { $_SESSION['local_gametype'] = $gt_q; }
    $ck_exp = time() + 86400;
    @setcookie('hzmj_local_uid',      strval(intval($uid_q)), $ck_exp, '/');
    @setcookie('hzmj_local_pwd',      rawurlencode($rpwd_q),  $ck_exp, '/');
    @setcookie('hzmj_local_gametype', rawurlencode($gt_q),    $ck_exp, '/');
}
// 本机调试：当前 URL 只剩 invitecode（没有 uid、没有 pwd），而本机此前带 uid+pwd 访问过，
// 就用 session/cookie 里记下的 uid+pwd+gametype 立刻 302 跳回，避免停在大厅进不了房。
$only_invite_q = (isset($_GET['invitecode']) && $uid_q <= 0 && $rpwd_q === '');
if ($only_invite_q) {
    $lu = !empty($_SESSION['local_uid']) ? intval($_SESSION['local_uid'])
        : (isset($_COOKIE['hzmj_local_uid']) ? intval($_COOKIE['hzmj_local_uid']) : 0);
    $lp = !empty($_SESSION['local_pwd']) ? strval($_SESSION['local_pwd'])
        : (isset($_COOKIE['hzmj_local_pwd']) ? rawurldecode(strval($_COOKIE['hzmj_local_pwd'])) : '');
    $lg = !empty($_SESSION['local_gametype']) ? strval($_SESSION['local_gametype'])
        : (isset($_COOKIE['hzmj_local_gametype']) ? rawurldecode(strval($_COOKIE['hzmj_local_gametype'])) : '');
    if ($lu > 0 && $lp !== '') {
        $back_q = '/game/happymahua/index.php?uid=' . $lu . '&pwd=' . rawurlencode($lp)
            . ($lg !== '' ? '&gametype=' . rawurlencode($lg) : '');
        header('Location: ' . $back_q, true, 302);
        exit;
    }
}
?>

<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
<script id="local-jump-guard">
/* 本机调试跳转守卫 v2（放在 <head> 最前，早于 Egret/main.min 一切脚本，同步安装）。
   目的：本机（host=127.0.0.1/localhost，或 URL 带 uid+pwd）时，
   拦截「把地址改成只剩 invitecode=」的 location.replace / location.assign，
   一律改回当前页并保留 uid、pwd、gametype。线上（非本机）不生效。
   注意：location.href= 赋值属 Location 的 unforgeable 属性，JS 层无法拦截；
        但压缩代码中这些跳转均走 location.replace，已被本守卫覆盖。 */
(function(){
    try{
        var qs=null;
        try{ qs=new URLSearchParams(location.search); }catch(e){ qs=null; }
        if(!qs) return;
        var uid=parseInt(qs.get('uid'),10); if(isNaN(uid)||uid<0) uid=0;
        var pwd=(qs.get('roompwd')||qs.get('pwd')||'')+'';
        var gt=(qs.get('gametype')||'')+'';
        var host=location.hostname;
        var isLocal=(host==='127.0.0.1'||host==='localhost')||(uid>0&&pwd!=='');
        if(!isLocal) return;
        function keepUrl(){
            var q=[]; if(uid>0)q.push('uid='+uid);
            if(gt)q.push('gametype='+gt);
            if(pwd)q.push('pwd='+encodeURIComponent(pwd));
            return location.pathname+(q.length?('?'+q.join('&')):'');
        }
        // 命中条件：目标串含 invitecode= 且不含 uid=  —— 即「只剩 invitecode」的跳转
        function isInviteOnly(u){
            if(typeof u!=='string') return false;
            if(u.indexOf('invitecode=')<0) return false;
            return u.indexOf('uid=')<0;
        }
        var __at=0;
        try{ __at=parseInt(sessionStorage.getItem('__fu_guard_at')||'0',10)||0; }catch(e){}
        // 5 秒内重复触发视为刷新死循环：放弃本次跳转（原地不动）
        function loopBlocked(){
            var now=(new Date()).getTime();
            if(now-__at<5000) return true;
            __at=now;
            try{ sessionStorage.setItem('__fu_guard_at',String(now)); }catch(e){}
            return false;
        }
        var _replace=location.replace, _assign=location.assign;
        try{
            location.replace=function(u){
                if(isInviteOnly(u)){ if(loopBlocked()) return; return _replace.call(location,keepUrl()); }
                return _replace.call(location,u);
            };
        }catch(e){}
        try{
            location.assign=function(u){
                if(isInviteOnly(u)){ if(loopBlocked()) return; return _assign.call(location,keepUrl()); }
                return _assign.call(location,u);
            };
        }catch(e){}
        try{ console.log('[guard] installed, keep=' + keepUrl()); }catch(e){}
    }catch(e){}
})();
</script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>加个菜</title>
    <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="full-screen" content="true" />
    <meta name="screen-orientation" content="portrait" />
    <meta name="x5-fullscreen" content="true" />
    <meta name="360-fullscreen" content="true" />
    <style>
        html, body {
            -ms-touch-action: none;
            background: white;
            /*background-image: url(./resource/assets/public/waitConnect.png);*/
            background-image:url(./resource/assets/public/loading/hall/loading_BG.png);
            background-size:100% 100%;
            padding: 0;
            border: 0;
            margin: 0;
            height: 100%;
            text-align:center;
        }
    </style>
    <style id="faceup-inject-style">
        #faceUpBox{position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:2147483645;display:none;flex-direction:column;gap:14px;align-items:center;justify-content:center;padding:18px 28px;border-radius:20px;background:rgba(0,0,0,0.55);backdrop-filter:blur(4px);border:2px solid rgba(255,220,140,0.25);text-align:center;pointer-events:none;}
        /* 只让浮层自身可点，其余区域点击穿透到 canvas 手牌 */
        #faceUpBox .fu-card,#faceUpBox .fu-btn,#faceUpBox #fuCard0,#faceUpBox #fuCard1,#faceUpBox #fuZimoBtn,#faceUpBox #fuDiscardBtn{pointer-events:auto;}
        #faceUpBox .fu-cards{display:flex;gap:26px;align-items:center;justify-content:center;}
        #faceUpBox .fu-card{position:relative;width:73px;height:109px;border-radius:6px;background:#3a2a1a;box-shadow:0 4px 12px rgba(0,0,0,.55);cursor:pointer;user-select:none;display:flex;align-items:center;justify-content:center;color:#e8dcc8;font-size:14px;font-weight:700;letter-spacing:1px;background-repeat:no-repeat;background-position:center;transition:transform .12s ease;}
        #faceUpBox .fu-card.disabled{cursor:not-allowed;opacity:.6;box-shadow:none;}
        #faceUpBox .fu-card.clickable:hover{transform:translateY(-6px) scale(1.06);}
        #faceUpBox .fu-card.picked{outline:5px solid #ff7f24;outline-offset:2px;}
        #faceUpBox .fu-info{color:#fff;font-size:16px;line-height:1.6;width:100%;text-align:center;display:block;margin:0 auto 10px auto;}
        #faceUpBox .fu-actions{display:flex;gap:20px;align-items:center;justify-content:center;display:inline-block;text-align:center;*display:inline;zoom:1;margin-top:4px;}
        #faceUpBox .fu-btn{padding:14px 34px;border-radius:10px;border:none;font-weight:800;font-size:22px;cursor:pointer;min-width:130px;display:inline-block;vertical-align:middle;margin:0 10px;}
        #faceUpBox .fu-btn.zimo{background:linear-gradient(180deg,#ff7f24,#e35d0f);color:#fff;box-shadow:0 3px 10px rgba(255,127,36,0.5);background:#ff7f24\9;}
        #faceUpBox .fu-btn.discard{background:linear-gradient(180deg,#f5d26b,#d6a82b);color:#3a2200;box-shadow:0 3px 10px rgba(214,168,43,0.5);background:#f5d26b\9;}
        #faceUpBox .fu-btn:disabled{opacity:.45;cursor:not-allowed;filter:grayscale(.4);box-shadow:none;filter:alpha(opacity=45)\9;}
        #faceUpBox .fu-stage{color:#ffefb0;font-weight:800;font-size:18px;}
        #faceUpBox .fu-timer{color:#ffe28a;font-weight:900;font-size:20px;}
        #fuDebugInfo{position:fixed;left:16px;top:120px;z-index:2147483644;background:rgba(0,0,0,0.45);color:#fff;padding:12px 16px;border-radius:10px;font-size:13px;line-height:1.9;display:none;pointer-events:none;}
        #fuDebugInfo b{color:#ffefb0;}
    </style>
</head>

<body>
    <div id="faceUpBox">
        <div class="fu-info">
            <div>翻屁股明牌 <span class="fu-stage" id="fuStage">等待</span></div>
            <div id="fuSubInfo" style="color:#ddd;font-size:13px;"></div>
            <div>剩余 <span class="fu-timer" id="fuTimer">-</span> 秒</div>
            <div id="fuTurnInfo" style="color:#9fe8ff;font-size:15px;font-weight:700;"></div>
        </div>
        <div class="fu-cards">
            <div class="fu-card disabled" id="fuCard0" data-idx="0">未亮</div>
            <div class="fu-card disabled" id="fuCard1" data-idx="1">未亮</div>
        </div>
        <div class="fu-actions" id="fuActions" style="display:none;">
            <button class="fu-btn zimo" id="fuZimoBtn" disabled>自摸</button>
            <button class="fu-btn discard" id="fuDiscardBtn" disabled>打出</button>
        </div>
    </div>
    <div id="fuDebugInfo"></div>
    <div style="margin: auto;width: 100%;height: 100%;" class="egret-player"
         data-entry-class="Main"
         data-orientation="landscape"
         data-scale-mode="exactFit"
         data-frame-rate="60"
         data-content-width="1080"
         data-content-height="640"
         data-show-paint-rect="false"
         data-multi-fingered="2"
         data-show-fps="false" data-show-log="false"
         data-show-fps-style="x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9">
    </div>
    <!--<img src="./resource/assets/public/loading.gif" id="loading" style="margin-top:320px;width:30px;height:30px;" >-->
    <input type="hidden" id="oid" value="<?php  if(isset($_SESSION['think']['openid'])){echo $_SESSION['think']['openid'];}else{echo "-1";} ?>">
    <input type="hidden" id="nickname" value="<?php echo $_SESSION['think']['nickname'] ?>">
    <input type="hidden" id="headurl" value="<?php echo $_SESSION['think']['headurl'] ?>">
<script>
    var loadScript = function (list, callback) {
        var loaded = 0;
        var loadNext = function () {
            loadSingleScript(list[loaded], function () {
                loaded++;
                if (loaded >= list.length) {
                    callback();
                }
                else {
                    loadNext();
                }
            })
        };
        loadNext();
    };

    var loadSingleScript = function (src, callback) {
        var s = document.createElement('script');
        s.async = false;
        s.src = src;
        s.addEventListener('load', function () {
            s.parentNode.removeChild(s);
            s.removeEventListener('load', arguments.callee, false);
            callback();
        }, false);
        document.body.appendChild(s);
    };

    var xhr = new XMLHttpRequest();
    xhr.open('GET', './manifest.json?v=' + Math.random(), true);
    xhr.addEventListener("load", function () {
        var manifest = JSON.parse(xhr.response);
        var list = manifest.initial.concat(manifest.game);
        loadScript(list, function () {
            /**
             * {
             * "renderMode":, //Engine rendering mode, "canvas" or "webgl"
             * "audioType": 0 //Use the audio type, 0: default, 2: web audio, 3: audio
             * "antialias": //Whether the anti-aliasing is enabled in WebGL mode, true: on, false: off, defaults to false
             * "calculateCanvasScaleFactor": //a function return canvas scale factor
             * }
             **/
             egret.ImageLoader.crossOrigin = "anonymous";
            egret.runEgret({ renderMode: "webgl", audioType: 0, calculateCanvasScaleFactor:function(context) {
                var backingStore = context.backingStorePixelRatio ||
                    context.webkitBackingStorePixelRatio ||
                    context.mozBackingStorePixelRatio ||
                    context.msBackingStorePixelRatio ||
                    context.oBackingStorePixelRatio ||
                    context.backingStorePixelRatio || 1;
                return (window.devicePixelRatio || 1) / backingStore;
            }});
        });
    });
    xhr.send(null);
</script>

<div id="divImage" style="background: #373737;display:none;text-align:center;z-index:99;width:100%;height:100%;position: absolute;">
    <div style="position:absolute;top:2%;color: #ffffff;display:block;text-align:center;width: 100%;">
        <span style="display:block;font-size: 25px ">长按图片发送给朋友</span><br/>
        <img src="" alt="" id="shareImage" style="width: 100%;">
    </div>
    <img src="./resource/assets/public/common_ic_guanbi.png" onclick="isHidden('divImage')"  alt="" style="width:40px;height:40px;position:absolute;right:1%;top:2%;">
</div>

<script>
    ///这里添加点击 X 按钮关闭
    function isHidden(idtext) {
        var vDiv = document.getElementById(idtext);
        vDiv.style.display = 'none';
    }
    function getoid(){
        var oid=document.getElementById("oid").value;
        return oid;
    }
    function getname(){
        var oid=document.getElementById("nickname").value;
        return oid;
    }
    function gethead(){
        var oid=document.getElementById("headurl").value;
        return oid;
    }
</script>
<script>
 var jsApiParameters='';
  function jsApiCall()
  {
    WeixinJSBridge.invoke(
      'getBrandWCPayRequest',
      jsApiParameters,
      function(res){
        WeixinJSBridge.log(res.err_msg);
        var a = new HallLogic();//去掉 a 的类型
        a.myzuanshi();
        if (res.err_msg=="get_brand_wcpay_request:ok") {
          
         
          alert('支付成功');
        }else if(res.err_msg=="get_brand_wcpay_request:fail"){
         
           alert('支付失败');
        }else if(res.err_msg=="get_brand_wcpay_request:cancel"){
          
           alert('支付取消');
        }
        
      }
    );
  }

  function callpay()
  {
    // alert('2');
    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
        }
    }else{
        jsApiCall();
    }
  }

  function confirmPay(data)
  {
        //jsApiParameters=data;
        //callpay();
    /*	window.location.href="http://jgczf.y0rcv.cn/home?userId="+data.userid+"&goodsID="+data.goodsid;*/
    window.location.href="http://h55.fenhao11.com/sh_pay/index.php?userId="+data.userid+"&goodsID="+data.goodsid;
  }
  </script>

<script id="faceup-inject-script">
(function(){
    var WS = (typeof window.WebSocket !== 'undefined') ? window.WebSocket : null;
    if (!WS) return;

    var __QS = null;
    try{ __QS = new URLSearchParams(location.search); }catch(e){ __QS = null; }
    var __URLUID = __QS ? parseInt(__QS.get('uid'), 10) : 0;
    if (isNaN(__URLUID) || __URLUID < 0) __URLUID = 0;

    // URL 里 pwd 与 roompwd 等价：任一存在即表示「已指定房间」，只加入、禁止建房
    var __URLPWD = __QS ? ((__QS.get('roompwd') || __QS.get('pwd') || '') + '') : '';

    // 本机调试标记：host 为 127.0.0.1/localhost，或 URL 同时带 uid+pwd 时生效。
    // 供 main.min 末尾的「跳转守卫」判断：本机调试禁止跳 invitecode=、禁止清掉 uid/pwd/gametype。
    var __LOCAL_HOST = (location.hostname === '127.0.0.1' || location.hostname === 'localhost');
    window.__LOCAL_DEBUG__    = __LOCAL_HOST || (__URLUID > 0 && __URLPWD !== '');
    window.__LOCAL_UID__      = __URLUID;
    window.__LOCAL_PWD__      = __URLPWD;
    window.__LOCAL_GAMETYPE__ = __QS ? (__QS.get('gametype') || '') : '';

    // 身份：只认当前 URL 的 uid，忽略 PHP session 里旧的 openid
    var __LOCAL_OPENID   = (__URLUID > 0) ? ('local_' + __URLUID) : '';
    var __LOCAL_NICKNAME = (__URLUID > 0) ? ('local' + __URLUID) : '';
    function applyLocalIdentity(){
        try{
            if (!__LOCAL_OPENID) return;
            var oidEl = document.getElementById('oid');
            if (oidEl) oidEl.value = __LOCAL_OPENID;
            var nickEl = document.getElementById('nickname');
            if (nickEl) nickEl.value = __LOCAL_NICKNAME;
        }catch(e){}
    }
    // hidden#oid / #nickname 在注入脚本之前已解析，立即覆盖 PHP session 渲染出来的旧值
    applyLocalIdentity();
    if (document.readyState !== 'complete'){
        document.addEventListener('DOMContentLoaded', applyLocalIdentity, false);
    }

    var State = {
        roompwd: __URLPWD,
        uid: __URLUID,
        mySeat: -1,
        faceUp: [-1,-1],
        faceUpPhase: 0,
        faceUpUser: -1,
        faceUpHuIdx: [],
        pickIdx: -1,
        pickCard: -1,
        canHu: false,
        timerId: null,
        timerEndAt: 0,
        waitAfterPick: false,
        pickPending: false,
        context: '',
        // v1.20 2.11：本地倒计时（不等服务器心跳）
        lastDrawnTile: -1,       // 最近摸/选的牌（mainid game_mj_touchcards）
        handTiles: [],           // 本人暗手牌 byte 列表（本地超时代打"最右一张"用）
        outTimerId: null,        // 出牌本地倒计时句柄
        outEndAt: 0,
        outToken: 0,             // 出牌轮次令牌，防陈旧定时器误触发
        claimTimerId: null,      // 碰/杠/胡窗口本地倒计时句柄
        claimEndAt: 0,
        claimToken: 0,
        claimMask: 0,
        claimCard: 0,
        autoPlayOn: {},          // seatno -> true（来自 game_mj_auto_play 广播）
        seatsList: [],           // 最近一次 game_mj_seats_shuffled 的座位表，用于座次识别加固
        forbidTile: -1           // 碰后禁打张（镜像服务端 m_forbidDiscard，只禁刚碰的那一张）
    };

    function parseMJCard(b){
        var byte = b >>> 0;
        var s = (byte >> 4) & 0x0F;
        var n = byte & 0x0F;
        var suitMap = {0:'wan',1:'tiao',2:'tong',3:'zi'};
        var suitZh  = {0:'万',1:'条',2:'筒',3:'字'};
        var numZh   = {1:'一',2:'二',3:'三',4:'四',5:'五',6:'六',7:'七',8:'八',9:'九'};
        var ziZh    = {1:'东',2:'南',3:'西',4:'北',5:'中',6:'發',7:'白'};
        var cls = 's-' + (suitMap[s] || 'unk');
        var dispS, dispN;
        if (s === 3){
            dispS = ziZh[n] || ('字'+n);
            dispN = '';
        } else if (n >= 1 && n <= 9){
            dispS = numZh[n];
            dispN = suitZh[s];
        } else {
            dispS = '?'; dispN = '';
        }
        return {cls:cls, dispS:dispS, dispN:dispN, suit:s, num:n, byte:byte};
    }

    // 明牌外观：与客户端 getMajiangCard(position.bottom) 一致的「牌字节 -> 图集帧名」映射
    //   color 0x00 万 -> ownw_N    0x10 条 -> owntiao_N
    //   0x20 筒 -> owntong_N       0x30 字 -> ownfeng_N   （N = 低 4 位 1..9）
    // 手牌用的就是这批 own*_N 帧，等同手牌外观/尺寸
    function cardFrameName(t){
        t = t|0;
        if (t <= 0 || t >= 64) return null;   // 0x40+ 不是麻将牌
        var v = 15 & t, c = 240 & t;
        if (v < 1 || v > 9) return null;
        if (c === 0)  return 'ownw_'    + v;
        if (c === 16) return 'owntiao_' + v;
        if (c === 32) return 'owntong_' + v;
        if (c === 48) return 'ownfeng_' + v;
        return null;
    }

    var CARD_SCALE = 1.0;                 // own 帧原生 73x109，与手牌同尺寸
    var CARD_FALLBACK_W = 73, CARD_FALLBACK_H = 109;
    var PaiRes = {
        atlas: './resource/assets/majiang/MJCard.png',
        json:  './resource/assets/majiang/MJCard.json',
        natW: 0, natH: 0,
        frames: null,
        ready: false
    };
    (function loadPaiRes(){
        try{
            var im = new Image();
            im.onload = function(){
                PaiRes.natW = im.naturalWidth || 0;
                PaiRes.natH = im.naturalHeight || 0;
                PaiRes.ready = PaiRes.natW > 0;
                renderCards();
            };
            im.src = PaiRes.atlas;
        }catch(e){}
        try{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', PaiRes.json, true);
            xhr.onload = function(){
                try{
                    var j = JSON.parse(xhr.responseText);
                    PaiRes.frames = (j && j.frames) ? j.frames : null;
                }catch(e){}
                renderCards();
            };
            xhr.send(null);
        }catch(e){}
    })();

    function applyCardFace(card, i){
        var byte = (State.faceUp && State.faceUp[i] > 0) ? (State.faceUp[i]|0) : 0;
        var fname = byte > 0 ? cardFrameName(byte) : null;
        var fr = (fname && PaiRes.frames) ? PaiRes.frames[fname] : null;
        if (fr && PaiRes.ready){
            var k = CARD_SCALE;
            card.style.width  = Math.max(1, Math.round(fr.w * k)) + 'px';
            card.style.height = Math.max(1, Math.round(fr.h * k)) + 'px';
            card.style.backgroundImage    = "url('" + PaiRes.atlas + "')";
            card.style.backgroundSize     = Math.round(PaiRes.natW * k) + 'px ' + Math.round(PaiRes.natH * k) + 'px';
            card.style.backgroundPosition = (-Math.round(fr.x * k)) + 'px ' + (-Math.round(fr.y * k)) + 'px';
            card.textContent = '';
            return;
        }
        card.style.backgroundImage = 'none';
        card.style.backgroundSize = '';
        card.style.backgroundPosition = '';
        card.style.width  = Math.round(CARD_FALLBACK_W * CARD_SCALE) + 'px';
        card.style.height = Math.round(CARD_FALLBACK_H * CARD_SCALE) + 'px';
        if (byte > 0){
            var p = parseMJCard(byte);
            card.textContent = p.dispS + (p.dispN || '');
        } else {
            card.textContent = '未亮';
        }
    }

    var DEBUG = (function(){
        try{
            var s = new URLSearchParams(location.search);
            return s.get('debug') === '1' || s.get('debug') === 'true';
        }catch(e){ return false; }
    })();

    function $(id){return document.getElementById(id);}
    function renderDebug(){
        if (!DEBUG) return;
        var d = $('fuDebugInfo'); if (!d) return;
        d.style.display = 'block';
        var r = [];
        r.push('<b>DEBUG overlay</b>');
        r.push('<br>roompwd: <span style="color:#ffd">' + (State.roompwd || '(空)') + '</span>');
        r.push('<br>uid: ' + State.uid + ' &nbsp; mySeat: ' + State.mySeat);
        r.push('<br>faceUp: [' + State.faceUp.join(', ') + ']');
        r.push('<br>phase: ' + State.faceUpPhase + ' &nbsp; faceUpUser: ' + State.faceUpUser);
        r.push('<br>huIdx: [' + State.faceUpHuIdx.join(',') + ']');
        r.push('<br>pickIdx: ' + State.pickIdx + ' &nbsp; pickCard: 0x' + (State.pickCard>0 ? State.pickCard.toString(16) : '-'));
        r.push('<br>canHu: ' + State.canHu + ' &nbsp; waitAfterPick: ' + State.waitAfterPick);
        r.push('<br>context: ' + (State.context || '-'));
        try{
            var arr = __WSOrigCon && __WSOrigCon.instances ? __WSOrigCon.instances : [];
            r.push('<br>wsCount: ' + arr.length + (window.__wsLast ? ' (有)' : ' (无)'));
        }catch(e){}
        d.innerHTML = r.join('');
    }
    function hideAll(){
        if ($('faceUpBox')) $('faceUpBox').style.display = 'none';
        renderDebug();
    }
    function showBox(){
        if ($('faceUpBox')) $('faceUpBox').style.display = 'flex';
        renderDebug();
    }
    function stopTimer(){
        if (State.timerId){clearInterval(State.timerId);State.timerId=null;}
        if ($('fuTimer')) $('fuTimer').textContent = '-';
    }
    function startTimer(sec, onZero){
        stopTimer();
        State.timerEndAt = Date.now() + (sec|0)*1000;
        if ($('fuTimer')) $('fuTimer').textContent = String(sec|0);
        State.timerId = setInterval(function(){
            var left = Math.max(0, Math.ceil((State.timerEndAt - Date.now())/1000));
            if ($('fuTimer')) $('fuTimer').textContent = String(left);
            if (left <= 0){
                stopTimer();
                if (typeof onZero === 'function'){ try{ onZero(); }catch(e){} }
            }
        }, 250);
    }

    // v1.20 2.11：出牌/碰杠胡本地倒计时——一律以客户端本地时钟走秒，不等服务器心跳。
    // 本地到 0 即发送对应动作（出牌则打刚摸的那张；碰杠胡则能胡即胡、否则过）。
    // 服务端仍以自身 15/5 秒超时为准，两边谁先到谁生效；重复包由服务端忽略。
    // v1.20 2.12：出牌/碰杠胡倒计时同步刷新浮层「剩余」秒数；翻牌回合仍由 startTimer 负责，
    // 所以这两个 stop 只在翻牌计时器未运行时才把「剩余」清回 "-"。
    function setFuTimerText(v){ if ($('fuTimer')) $('fuTimer').textContent = String(v); }
    function stopOutTimer(){
        if (State.outTimerId){ clearInterval(State.outTimerId); State.outTimerId = null; }
        State.outToken++;
        if (!State.timerId) setFuTimerText('-');
    }
    function stopClaimTimer(){
        if (State.claimTimerId){ clearInterval(State.claimTimerId); State.claimTimerId = null; }
        State.claimToken++;
        if (!State.timerId) setFuTimerText('-');
    }
    function startOutTimer(sec){
        stopOutTimer();
        var token = State.outToken;
        State.outEndAt = Date.now() + (sec|0)*1000;
        setFuTimerText(sec|0);
        State.outTimerId = setInterval(function(){
            if (token !== State.outToken){ stopOutTimer(); return; }
            setFuTimerText(Math.max(0, Math.ceil((State.outEndAt - Date.now())/1000)));
            if (Date.now() >= State.outEndAt){
                stopOutTimer();
                onLocalOutcardTimeout();
            }
        }, 250);
    }
    // 座次识别加固：uid 已知但 mySeat 未定（login / seats_shuffled 丢包）时，用最近座位表再匹配一次
    function tryResolveSeat(){
        if (State.mySeat > 0 || State.uid <= 0) return;
        var list = State.seatsList || [];
        for (var i=0;i<list.length;i++){
            var s = list[i];
            if (!s) continue;
            var seatNo = (typeof s.seatno === 'number') ? (s.seatno|0) : ((i+1)|0);
            if ((s.uid|0) === State.uid){ State.mySeat = seatNo; return; }
        }
    }
    function onLocalOutcardTimeout(){
        if (State.mySeat <= 0 || !State.roompwd) return;
        var ft = State.forbidTile|0;             // 碰后禁打张：只跳过刚碰的那张
        var tile = State.lastDrawnTile|0;
        if (tile === ft) tile = 0;               // 刚摸/选的牌若恰是禁打张，改从手牌另选
        if (tile <= 0){
            // 无刚摸牌（碰/杠后出牌或庄家起手）：对齐服务端 pickAutoDiscardTile 兜底，打手牌最右一张（byte 最大）
            var ht = State.handTiles || [];
            for (var i=0;i<ht.length;i++){ var b = ht[i]|0; if (b === ft) continue; if (b > tile) tile = b; }
        }
        if (tile > 0){
            window.__FU_send('game_mj_outcardsreg', {roompwd: State.roompwd, data: tile});
        }
    }
    function startClaimTimer(sec, mask, card){
        stopClaimTimer();
        var token = State.claimToken;
        State.claimMask = mask|0;
        State.claimCard = card|0;
        State.claimEndAt = Date.now() + (sec|0)*1000;
        setFuTimerText(sec|0);
        State.claimTimerId = setInterval(function(){
            if (token !== State.claimToken){ stopClaimTimer(); return; }
            setFuTimerText(Math.max(0, Math.ceil((State.claimEndAt - Date.now())/1000)));
            if (Date.now() >= State.claimEndAt){
                stopClaimTimer();
                onLocalClaimTimeout();
            }
        }, 250);
    }
    function onLocalClaimTimeout(){
        if (!State.roompwd) return;
        var mask = State.claimMask|0;
        var card = State.claimCard|0;
        if ((mask & 0x40) > 0){
            // WIK_CHI_HU：能胡即胡（自摸/点炮/抢杠，与服务端超时裁决一致）
            window.__FU_send('game_mj_operatereg', {roompwd: State.roompwd, cards: card, action: 0x40});
        } else if (mask != 0){
            // 只算过：不碰、不杠、不吃
            window.__FU_send('game_mj_operatereg', {roompwd: State.roompwd, cards: card, action: 0});
        }
    }
    function onLocalFlipTimeout(){
        if (!State.roompwd || State.faceUpPhase !== 1) return;
        var idx = (Array.isArray(State.faceUpHuIdx) && State.faceUpHuIdx.length > 0) ? (State.faceUpHuIdx[0]|0) : 0;
        State.pickIdx = idx;
        if (State.faceUp && State.faceUp[idx] > 0) State.pickCard = State.faceUp[idx]|0;
        State.pickPending = true;
        renderCards();
        window.__FU_send('game_mj_pick_flip', {roompwd: State.roompwd, idx: idx});
    }
    function renderCards(){
        for (var i=0;i<2;i++){
            var card = $('fuCard'+i);
            if (!card) continue;
            applyCardFace(card, i);
            card.classList.remove('clickable','disabled','picked');
            var myTurn = (State.faceUpPhase===1 && State.faceUpUser===State.mySeat && State.mySeat>0 && !State.waitAfterPick && !State.pickPending);
            if (myTurn){
                card.classList.add('clickable');
                card.style.pointerEvents = 'auto';
            } else {
                card.classList.add('disabled');
                card.style.pointerEvents = 'none';
            }
            if (i === State.pickIdx){
                card.classList.add('picked');
            }
        }
        var st = $('fuStage');
        if (!st) { renderDebug(); return; }
        if (State.faceUp.length===0 || (State.faceUp[0]<=0 && State.faceUp[1]<=0)){
            st.textContent = '等待';
            hideAll();
            renderDebug();
            return;
        }
        showBox();
        if (State.waitAfterPick){
            st.textContent = '已选，请胡/出';
        } else if (State.pickPending){
            st.textContent = '已选，等待…';
        } else if (State.context){
            st.textContent = (State.context === 'AFTER_GANG' ? '杠后翻牌' : (State.context === 'OPENING' ? '开局翻牌' : '翻屁股'));
        } else {
            st.textContent = State.faceUpPhase ? ((State.faceUpUser===State.mySeat) ? '请选择' : '等待选择') : '已亮';
        }
        var sub = $('fuSubInfo');
        if (sub) sub.textContent = State.context ? ('上下文: ' + State.context) : '';
        renderActions();
        renderDebug();
    }
    function renderActions(){
        var box = $('fuActions');
        var btnZ = $('fuZimoBtn');
        var btnD = $('fuDiscardBtn');
        if (!box || !btnZ || !btnD) return;
        if (State.waitAfterPick && !State.pickPending && State.mySeat===State.faceUpUser){
            box.style.display = 'flex';
            btnZ.disabled = !State.canHu;
            btnD.disabled = !(State.pickCard>0);
        } else {
            box.style.display = 'none';
            btnZ.disabled = true;
            btnD.disabled = true;
        }
        renderDebug();
    }
    function setFaceUp(arr){
        if (!Array.isArray(arr)) return;
        State.faceUp = [-1,-1];
        for (var i=0;i<arr.length && i<2;i++){
            State.faceUp[i] = (arr[i] === null || arr[i] === undefined) ? -1 : (arr[i]|0);
        }
        renderCards();
    }
    function refillFaceUp(data){
        if (!data) return;
        if (Array.isArray(data.faceUpNow)){ setFaceUp(data.faceUpNow); return; }
        if (typeof data.idx === 'number' && (data.newTile!==undefined && data.newTile!==null)){
            var i = data.idx|0; if (i>=0 && i<2) State.faceUp[i] = data.newTile|0;
        }
        renderCards();
    }
    function isFlipPrompt(p){
        if (!p || typeof p !== 'object') return false;
        if (p.action === 'FLIPCHOOSE') return true;
        if (p.context === 'OPENING' || p.context === 'AFTER_GANG') return true;
        if (typeof p.canZimo !== 'undefined' || typeof p.canDiscard !== 'undefined') return true;
        if (Array.isArray(p.huIdx)) return true;
        return false;
    }
    function handleActionPrompt(p){
        if (!isFlipPrompt(p)) return;
        // 该包由服务端 sendMsgToUser 直发本人，其 seatno 即本人座位
        var seat = -1;
        if (typeof p.seatno === 'number') seat = p.seatno|0;
        else if (typeof p.seat === 'number') seat = p.seat|0;
        if (seat > 0){
            State.faceUpUser = seat;
            State.mySeat = seat;
        }
        if (p.context) State.context = String(p.context);
        if (Array.isArray(p.huIdx)) State.faceUpHuIdx = p.huIdx.slice();

        if (typeof p.pickCard !== 'undefined' && p.pickCard !== null && (p.pickCard|0) > 0){
            // 杠后选翻已改为普通摸牌：不再进入「必须自摸 / 打出」确认回合
            State.pickCard = p.pickCard|0;
            State.pickPending = false;
            State.waitAfterPick = false;
            State.canHu = false;
        } else {
            // 进入翻牌选择回合：两张明牌可点
            State.faceUpPhase = 1;
            State.pickPending = false;
            State.waitAfterPick = false;
            State.pickIdx = -1; State.pickCard = -1;
            State.canHu = !!p.canZimo;
            var __fuSec = p.timeoutSec ? (p.timeoutSec|0) : (p.timeout ? (p.timeout|0) : 15);
            // 本地到 0 自动选翻（能胡取胡位，否则取 0），与服务端 onFlipChooseTimeout 一致
            startTimer(__fuSec, onLocalFlipTimeout);
        }
        renderCards();
    }
    function endFlipPhase(){
        State.faceUpPhase = 0;
        State.faceUpUser = -1;
        State.waitAfterPick = false;
        State.pickPending = false;
        State.pickIdx = -1; State.pickCard = -1;
        State.canHu = false;
        State.context = '';
        stopTimer();
        stopOutTimer();
        stopClaimTimer();
        renderCards();
    }
    function handlePickFlip(p){
        if (!p) return;
        if (typeof p.pickIdx === 'number'){
            State.pickIdx = p.pickIdx|0;
            State.pickCard = (p.pickCard!==undefined && p.pickCard!==null) ? p.pickCard|0 : -1;
        }
        if (typeof p.seatno === 'number') State.faceUpUser = p.seatno|0;
        if (Array.isArray(p.faceUpNow)) setFaceUp(p.faceUpNow);
        // 杠后选翻已改为普通摸牌：选完不再进入「必须自摸 / 打出」回合
        State.pickPending = false;
        State.waitAfterPick = false;
        renderCards();
    }
    function resetAll(){
        State.faceUp = [-1,-1];
        State.faceUpPhase = 0;
        State.faceUpUser = -1;
        State.faceUpHuIdx = [];
        State.pickIdx = -1;
        State.pickCard = -1;
        State.canHu = false;
        State.waitAfterPick = false;
        State.pickPending = false;
        State.context = '';
        stopTimer();
        renderCards();
    }

    var CMD_TO_MAINID = {
        100:'gamestart', 101:'gameend', 102:'gameover',
        105:'game_mj_seats_shuffled',
        108:'login', 109:'playback',
        110:'game_mj_zhuang',
        115:'game_mj_sendhandcards', 116:'game_mj_handcards', 117:'game_mj_sendcards',
        120:'game_mj_face_up',
        121:'game_mj_face_up_refill',
        122:'game_mj_action_prompt',
        123:'game_mj_pick_flip',
        124:'game_mj_flip_zimo',
        125:'game_mj_flip_discard',
        126:'game_mj_flip_kong',
        128:'game_mj_set_pao',
        129:'game_mj_auto_play',
        130:'game_mj_hand_end',
        131:'game_mj_calculation',
        140:'game_mj_outcardsreg', 141:'game_mj_outcards', 142:'game_mj_outcardsdata',
        150:'game_mj_operatenotify', 151:'game_mj_operatereg', 152:'game_mj_operateresult',
        160:'game_mj_touchcards', 161:'game_mj_tingnotice', 162:'game_mj_hunotice',
        170:'game_mj_caipiao',
        180:'game_mj_getcontrol', 181:'game_mj_control'
    };
    var MAINID_TO_CMD = null;
    function normalizeMainid(raw){
        if (!raw || typeof raw !== 'object') return '';
        var mid = (raw.mainid !== undefined && raw.mainid !== null) ? raw.mainid : raw.cmd;
        if (mid === undefined || mid === null) mid = raw.MainID;
        if (typeof mid === 'string') return mid.length > 0 ? mid : '';
        if (typeof mid === 'number'){
            var s = CMD_TO_MAINID[mid|0];
            return (typeof s === 'string' && s.length > 0) ? s : String(mid);
        }
        return '';
    }
    function resolveCmdValue(mainidStr){
        if (typeof mainidStr !== 'string' || mainidStr.length === 0) return null;
        if (!MAINID_TO_CMD){
            MAINID_TO_CMD = {};
            var keys = Object.keys(CMD_TO_MAINID);
            for (var i=0;i<keys.length;i++){ MAINID_TO_CMD[CMD_TO_MAINID[keys[i]|0]] = (keys[i]|0); }
        }
        var v = MAINID_TO_CMD[mainidStr];
        return (typeof v === 'number') ? v : null;
    }

    // Telegram Mini App：取原始 initData 字符串（不改写、不自算 hash）
    function getTgInitData(){
        try{
            if (window.Telegram && window.Telegram.WebApp && typeof window.Telegram.WebApp.initData === 'string'){
                return window.Telegram.WebApp.initData;
            }
        }catch(e){}
        return '';
    }
    // 仅在大厅登录包（mainid=login）与进房包（mainid=enter）里附加 msg.initData；
    // 无 Telegram 环境时返回原包，保持旧 openid 登录/进房路径
    function withTgInitData(payloadStr){
        try{
            var initData = getTgInitData();
            if (!initData) return payloadStr;
            var obj = JSON.parse(payloadStr);
            if (!obj || typeof obj !== 'object') return payloadStr;
            var mid = normalizeMainid(obj);
            if (mid !== 'enter' && mid !== 'login') return payloadStr;
            if (!obj.msg || typeof obj.msg !== 'object') obj.msg = {};
            if (!obj.msg.initData) obj.msg.initData = initData;
            return JSON.stringify(obj);
        }catch(e){ return payloadStr; }
    }

    function onServerPkt(raw){
        if (!raw || typeof raw !== 'object') return;
        var mid = normalizeMainid(raw);
        var d = (raw.data !== undefined) ? raw.data : (raw.body || raw.params || {});
        if (!mid) return;
        if (mid === 'login'){
            // 服务端登录回包：userinfo.id 即 uid
            if (d && d.userinfo && d.userinfo.id) State.uid = d.userinfo.id|0;
        } else if (mid === 'game_mj_seats_shuffled'){
            var seats = (d && d.seats) ? d.seats : null;
            if (seats){
                var list = [];
                if (Array.isArray(seats)) list = seats;
                else { for (var k in seats){ if (Object.prototype.hasOwnProperty.call(seats, k)) list.push(seats[k]); } }
                State.seatsList = list;
                for (var i=0;i<list.length;i++){
                    var s = list[i];
                    if (!s) continue;
                    var seatNo = (typeof s.seatno === 'number') ? (s.seatno|0) : ((i+1)|0);
                    if (State.uid > 0 && (s.uid|0) === State.uid){ State.mySeat = seatNo; break; }
                }
                renderCards();
            }
        } else if (mid === 'game_mj_face_up'){
            if (d){
                if (Array.isArray(d.faceUp)) setFaceUp(d.faceUp);
                if (typeof d.seatno === 'number') State.faceUpUser = d.seatno|0;
                if (Array.isArray(d.huIdx)) State.faceUpHuIdx = d.huIdx.slice();
                var ph = (d.phase === 1 || d.phase === true) ? 1 : 0;
                State.faceUpPhase = ph;
                if (ph === 0){
                    State.waitAfterPick = false;
                    State.pickPending = false;
                    State.pickIdx = -1;
                    State.pickCard = -1;
                    State.canHu = false;
                    stopTimer();
                }
                renderCards();
            }
        } else if (mid === 'game_mj_face_up_refill'){
            refillFaceUp(d || {});
        } else if (mid === 'game_mj_action_prompt'){
            handleActionPrompt(d || {});
        } else if (mid === 'game_mj_pick_flip'){
            handlePickFlip(d || {});
        } else if (mid === 'game_mj_touchcards'){
            // 记录刚摸/刚选的牌，供出牌本地倒计时到 0 时"打刚摸的那张"
            if (Array.isArray(d) && d.length > 0 && (d[0]|0) > 0){
                State.lastDrawnTile = d[0]|0;
                if (!Array.isArray(State.handTiles)) State.handTiles = [];
                State.handTiles.push(State.lastDrawnTile);
            }
        } else if (mid === 'game_mj_sendhandcards'){
            // 首次发牌：整副手牌覆盖，供本地超时兜底取"最右一张"
            if (Array.isArray(d)) State.handTiles = d.map(function(v){ return v|0; });
        } else if (mid === 'game_mj_outcards'){
            // 出牌轮：广播包。本人座次则启动本地 15 秒倒计时；他人座次则清本地表
            var sn = (d && typeof d.seatno === 'number') ? (d.seatno|0) : -1;
            tryResolveSeat();   // 座次识别加固：避免 mySeat 未定导致本人出牌轮被漏判
            if ($('fuTurnInfo')) $('fuTurnInfo').textContent = (sn > 0) ? ('该座位 ' + sn + ' 出牌') : '出牌';
            stopClaimTimer();
            if (sn >= 0 && sn === State.mySeat){
                if (d && (d.opening|0)){
                    // 开局庄家首张：服务端不发摸牌，用已有手牌里最大那张作为"刚摸牌"标记，
                    // 保证点牌/超时都能打出（手牌不变）
                    var mx = 0, ht = State.handTiles || [];
                    for (var hi=0; hi<ht.length; hi++){ var hb = ht[hi]|0; if (hb > mx) mx = hb; }
                    State.lastDrawnTile = (mx > 0) ? mx : -1;
                } else {
                    State.lastDrawnTile = -1;   // 新的一轮，等待 touchcards 重新写入
                }
                var tsec = (d && (d.timeoutSec|0)) ? (d.timeoutSec|0) : 15;
                startOutTimer(tsec);
            } else {
                stopOutTimer();
            }
        } else if (mid === 'game_mj_operatenotify'){
            // 碰/杠/胡窗口：仅直发本人；启动本地倒计时，到 0 过（能胡则胡）
            var omask = (d && typeof d.cbActionMask === 'number') ? (d.cbActionMask|0) : 0;
            var ocard = (d && typeof d.cbActionCard === 'number') ? (d.cbActionCard|0) : 0;
            var osec = (d && (d.timeoutSec|0)) ? (d.timeoutSec|0) : 5;
            if ($('fuTurnInfo')) $('fuTurnInfo').textContent = '等待操作';
            stopOutTimer();
            if (omask != 0) startClaimTimer(osec, omask, ocard);
            else stopClaimTimer();
        } else if (mid === 'game_mj_operateresult' || mid === 'game_mj_outcardsdata' || mid === 'game_mj_handcards'){
            // 动作已裁决/已出牌/手牌更新：清本地倒计时，避免陈旧定时器误发
            if (mid === 'game_mj_operateresult'){
                // 自己碰牌：镜像服务端 m_forbidDiscard，记录禁打张并同步移除被碰掉的两张
                var ru = (d && typeof d.wOperateUser === 'number') ? (d.wOperateUser|0) : -1;
                var rc = (d && typeof d.cbOperateCode === 'number') ? (d.cbOperateCode|0) : 0;
                var rt = (d && typeof d.cbOperateCard === 'number') ? (d.cbOperateCard|0) : 0;
                tryResolveSeat();
                if (ru > 0 && ru === State.mySeat && rc === 8 && rt > 0){   // WIK_PENG：碰后禁打该张
                    State.forbidTile = rt;
                    if (Array.isArray(State.handTiles)){
                        for (var ri=0; ri<2; ri++){
                            var rx = State.handTiles.indexOf(rt);
                            if (rx >= 0) State.handTiles.splice(rx,1);
                        }
                    }
                } else if (ru > 0 && ru === State.mySeat){
                    State.forbidTile = -1;
                }
            }
            stopClaimTimer();
            if (mid !== 'game_mj_operateresult') stopOutTimer();
            if (mid === 'game_mj_handcards'){
                // 手牌快照：整副覆盖
                if (Array.isArray(d)) State.handTiles = d.map(function(v){ return v|0; });
            } else if (mid === 'game_mj_outcardsdata'){
                // 出牌广播 array(seatno => card)：本人出牌则本地移除该张
                if (d && typeof d === 'object' && Array.isArray(State.handTiles)){
                    for (var osn in d){
                        if (!Object.prototype.hasOwnProperty.call(d, osn)) continue;
                        if ((osn|0) === State.mySeat){
                            var oi = State.handTiles.indexOf(d[osn]|0);
                            if (oi >= 0) State.handTiles.splice(oi, 1);
                            State.forbidTile = -1;   // 成功出牌后解除碰后禁打
                        }
                    }
                }
            }
        } else if (mid === 'game_mj_auto_play'){
            // 托管状态广播（仅用于展示/调试）
            if (d && typeof d.seatno === 'number'){
                var asn = d.seatno|0;
                if (d.on) State.autoPlayOn[asn] = true; else delete State.autoPlayOn[asn];
            }
        } else if (mid === 'game_mj_calculation' || mid === 'game_mj_hand_end' || mid === 'gamestart' || mid === 'gameend' || mid === 'gameover'){
            resetAll();
        }
    }

    function onClientPkt(raw){
        if (!raw || typeof raw !== 'object') return;
        var mid = normalizeMainid(raw);
        var m = (raw.msg !== undefined) ? raw.msg : (raw.body || raw.params || {});
        if (!m || typeof m !== 'object') return;
        if (m.roompwd && typeof m.roompwd === 'string' && m.roompwd.length > 0) State.roompwd = m.roompwd;
        if ((mid === 'enter' || mid === 'gamereadyreg' || mid === 'login') && m.uid){
            State.uid = m.uid|0;
            if (State.mySeat<=0){
                if (typeof m.seatno === 'number') State.mySeat = m.seatno|0;
                else if (typeof m.seat === 'number') State.mySeat = m.seat|0;
            }
        }
        // v1.20 2.11：本人主动操作即清本地倒计时（服务端同样会清零超时连击并退出托管）
        if (mid === 'game_mj_operatereg') stopClaimTimer();
        else if (mid === 'game_mj_outcardsreg') stopOutTimer();
        else if (mid === 'game_mj_pick_flip' || mid === 'game_mj_flip_zimo' || mid === 'game_mj_flip_discard' || mid === 'game_mj_flip_kong') stopTimer();
    }

    // --- WS prototype hooks ---
    var origSend = WS.prototype.send;
    var pktId = 0;
    WS.prototype.send = function(payload){
        try{
            var str = (typeof payload === 'string') ? payload : ((typeof Blob !== 'undefined' && payload instanceof Blob) ? null : (typeof ArrayBuffer !== 'undefined' && (payload instanceof ArrayBuffer || (payload.buffer && payload.buffer instanceof ArrayBuffer)) ? (function(){try{return new TextDecoder('utf-8').decode(payload);}catch(e){return null;}})() : null));
            if (str){
                try{ var obj = JSON.parse(str); onClientPkt(obj); }catch(e){}
            }
        }catch(e){}
        return origSend.apply(this, arguments);
    };
    function hookMsg(ev){
        try{
            var data = ev.data;
            var str = (typeof data === 'string') ? data : null;
            if (!str && (typeof Blob !== 'undefined' && data instanceof Blob)){
                try{
                    var fr = new FileReader();
                    fr.onload = function(){ try{ onServerPkt(JSON.parse(fr.result)); }catch(e){} };
                    fr.readAsText(data);
                }catch(e){}
                return;
            }
            if (str){ try{ onServerPkt(JSON.parse(str)); }catch(e){} }
        }catch(e){}
    }
    var OrigWS = WS;
    var __WSOrigCon = OrigWS;
    try{ console.log('[FU] inject loaded uid=' + __URLUID); }catch(e){}
    OrigWS = function(){
        var inst;
        try{
            if (arguments.length > 1) inst = new (Function.prototype.bind.apply(__WSOrigCon, [null].concat(Array.prototype.slice.call(arguments))))();
            else inst = new __WSOrigCon(arguments[0]);
        }catch(e){ throw e; }
        if (!__WSOrigCon.instances) __WSOrigCon.instances = [];
        __WSOrigCon.instances.push(inst);
        window.__wsLast = inst;
        inst.addEventListener('close', function(){
            try{
                var arr = __WSOrigCon.instances;
                var i = arr.indexOf(inst); if (i>=0) arr.splice(i,1);
            }catch(e){}
        });
        inst.addEventListener('message', hookMsg, false);
        return inst;
    };
    OrigWS.prototype = __WSOrigCon.prototype;
    window.WebSocket = OrigWS;
    if (window.MozWebSocket){ try{ window.MozWebSocket = OrigWS; }catch(e){} }

    (function hookSendOnce(){
        try{
            var OrigSend = __WSOrigCon.prototype.send;
            __WSOrigCon.prototype.send = function(payload){
                var pkt = null;
                var sendPayload = payload;
                try{
                    if (typeof payload === 'string'){
                        pkt = JSON.parse(payload);
                        // URL 指定房间时：禁止建房，并把进房包 roompwd 强制为 URL 里的房间号
                        if (pkt && typeof pkt === 'object' && __URLPWD){
                            var __mid0 = normalizeMainid(pkt);
                            if (__mid0 === 'createroom'){
                                try{ onClientPkt(pkt); }catch(e){}
                                return;   // 只加入既有房间，不再创建新房间
                            }
                            if (__mid0 === 'enter' && pkt.msg && typeof pkt.msg === 'object'){
                                pkt.msg.roompwd = __URLPWD;
                            }
                        }
                        // 进房包身份：只认 URL uid，强制 openid/nickname，覆盖 session 旧 openid（防不同窗口互踢）
                        if (pkt && typeof pkt === 'object' && __LOCAL_OPENID){
                            var __mid1 = normalizeMainid(pkt);
                            if (__mid1 === 'enter'){
                                if (!pkt.msg || typeof pkt.msg !== 'object') pkt.msg = {};
                                pkt.msg.openid   = __LOCAL_OPENID;
                                pkt.msg.nickname = __LOCAL_NICKNAME;
                                console.log('[enter] openid=' + pkt.msg.openid + ' nickname=' + pkt.msg.nickname + ' roompwd=' + (pkt.msg.roompwd || ''));
                            }
                        }
                        // 进房包附加 Telegram initData（无 TG 环境返回原包）
                        sendPayload = withTgInitData(JSON.stringify(pkt));
                    }
                    else if (typeof Blob !== 'undefined' && payload instanceof Blob){
                        (function(blob){
                            var fr = new FileReader();
                            fr.onload = function(){ try{ onClientPkt(JSON.parse(fr.result)); }catch(e){} };
                            fr.readAsText(blob);
                        })(payload);
                        pkt = null;
                    }
                    if (pkt) onClientPkt(pkt);
                }catch(e){ pkt = null; }
                return OrigSend.call(this, sendPayload);
            };
        }catch(e){}
    })();
    window.__FU_send = function(mainid, msg){
        try{
            var obj = {mainid: mainid, msg: msg};
            var str = JSON.stringify(obj);
            var arr = __WSOrigCon.instances;
            if (Array.isArray(arr) && arr.length > 0){
                for (var i=arr.length-1;i>=0;i--){ try{ __WSOrigCon.prototype.send.call(arr[i], str); return true; }catch(e){} }
            }
            if (window.__wsLast) { try{ __WSOrigCon.prototype.send.call(window.__wsLast, str); return true; }catch(e){} }
            return false;
        }catch(e){ return false; }
    };
    window.__FU_state = State;
    window.__FU_normMainid = normalizeMainid;
    window.__FU_resolveCmd = resolveCmdValue;
    window.__FU_render = function(){ renderCards(); };
    function findLiveWS(){
        var arr = __WSOrigCon.instances;
        if (Array.isArray(arr) && arr.length > 0) return arr[arr.length-1];
        return __WSOrigCon.prototype;
    }

    // --- UI click handlers ---
    document.addEventListener('DOMContentLoaded', function(){
        function bindClick(idx){
            var c = $('fuCard'+idx);
            if (!c) return;
            c.addEventListener('click', function(){
                if (!c.classList.contains('clickable')) return;
                if (!(State.faceUpUser===State.mySeat && State.faceUpPhase===1 && !State.waitAfterPick && !State.pickPending)) return;
                if (!State.roompwd){ alert('未获取到房间号，请稍候重试'); return; }
                var pkt = {roompwd:State.roompwd, idx:idx};
                State.pickIdx = idx;
                if (State.faceUp && State.faceUp[idx]>0) State.pickCard = State.faceUp[idx]|0;
                State.pickPending = true;
                renderCards();
                window.__FU_send('game_mj_pick_flip', pkt);
            }, false);
        }
        bindClick(0); bindClick(1);
        var z = $('fuZimoBtn'); if (z){ z.addEventListener('click', function(){
            if (z.disabled || !State.roompwd) return;
            var pkt = {roompwd:State.roompwd};
            State.waitAfterPick = false; renderCards();
            window.__FU_send('game_mj_flip_zimo', pkt);
        }, false); }
        var dd = $('fuDiscardBtn'); if (dd){ dd.addEventListener('click', function(){
            if (dd.disabled || !(State.pickCard>0) || !State.roompwd) return;
            var pkt = {roompwd:State.roompwd, tile:State.pickCard|0};
            State.waitAfterPick = false; State.pickIdx=-1; State.pickCard=-1; renderCards();
            window.__FU_send('game_mj_flip_discard', pkt);
        }, false); }
    });
})();
</script>

</body>

</html>