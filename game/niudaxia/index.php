<?php
session_start();
?>
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <title><?php
        // if($_GET['cod']!=''){
        //     $pwd=base64_decode($_GET['cod']);
        //     $a=explode("&", $pwd);
        //     echo "十三人房号:".$a[1];
        // }else{
            echo "樱桃互娱";
        // }
    ?>
</title>
    <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="full-screen" content="true" />
    <meta name="screen-orientation" content="portrait" />
    <meta name="x5-fullscreen" content="true" />
    <meta name="360-fullscreen" content="true" />
    <style>
        html, body {
            -ms-touch-action: none;
            background: #030010;
            /*background: #ffffff;*/
            padding: 0;
            border: 0;
            margin: 0;
            height: 100%;
        }
        #loadings {
            position:fixed;
            top:0;
            right:0;
            bottom:0;
            left:0;
            background:#000 url('https://games-1257620524.file.myqcloud.com/images/common/new_loading.jpg') no-repeat 0 0 / 100% 100%;
            z-index:999;
            font-size:16px;
        }
        #loadings .mask {
            position:absolute;
            top:0;
            right:0;
            bottom:0;
            left:0;
            background-color:rgba(0,0,0,.1);
        }
        #loadings .circular {
            position:absolute;
            left:50%;
            top:50%;
            margin-left:-55px;
            margin-top:-95px;
            width:110px;
            height:110px;
            background:url("../static/game/new_loading1.png") no-repeat 0 0 / 100% 100%;
            -webkit-animation:circular 1s infinite linear;
            -o-animation:circular 1s infinite linear;
            animation:circular 1s infinite linear;
        }
        #loadings .rotate {
            position:absolute;
            left:50%;
            top:50%;
            margin-left:-28px;
            margin-top:-68px;
            width:56px;
            height:56px;
            -webkit-animation:rotate_load 4s infinite ease-in;
            -o-animation:rotate_load 4s infinite ease-in;
            animation:rotate_load 4s infinite ease-in;
            background-image:url("../static/game/new_load.png");
            background-position:0 0;
            background-repeat:no-repeat;
            background-size:auto 100%;
        }
        #loadings .doingText {
            position:absolute;
            left:50%;
            top:50%;
            text-align:center;
            transform:translateX(-50%);
            font-size:0.1rem;
            color:wheat;
            margin-top:30px;
        }
        @-webkit-keyframes circular {
            from {
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -ms-transform:rotate(0);
            -o-transform:rotate(0);
            transform:rotate(0);
        }
        to {
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            transform:rotate(360deg);
        }
        }@keyframes circular {
            from {
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -ms-transform:rotate(0);
            -o-transform:rotate(0);
            transform:rotate(0);
        }
        to {
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            transform:rotate(360deg);
        }
        }@-webkit-keyframes rotate_load {
            0% {
                background-position:0 0;
                -webkit-transform:rotateY(90deg);
                -moz-transform:rotateY(90deg);
                -ms-transform:rotateY(90deg);
                -o-transform:rotateY(90deg);
                transform:rotateY(90deg);
            }
            24% {
                background-position:0 0;
                -webkit-transform:rotateY(270deg);
                -moz-transform:rotateY(270deg);
                -ms-transform:rotateY(270deg);
                -o-transform:rotateY(270deg);
                transform:rotateY(270deg);
            }
            25% {
                background-position:-56px 0;
                -webkit-transform:rotateY(270deg);
                -moz-transform:rotateY(270deg);
                -ms-transform:rotateY(270deg);
                -o-transform:rotateY(270deg);
                transform:rotateY(270deg);
            }
            49% {
                background-position:-56px 0;
                -webkit-transform:rotateY(450deg);
                -moz-transform:rotateY(450deg);
                -ms-transform:rotateY(450deg);
                -o-transform:rotateY(450deg);
                transform:rotateY(450deg);
            }
            50% {
                background-position:-112px 0;
                -webkit-transform:rotateY(450deg);
                -moz-transform:rotateY(450deg);
                -ms-transform:rotateY(450deg);
                -o-transform:rotateY(450deg);
                transform:rotateY(450deg);
            }
            74% {
                background-position:-112px 0;
                -webkit-transform:rotateY(630deg);
                -moz-transform:rotateY(630deg);
                -ms-transform:rotateY(630deg);
                -o-transform:rotateY(630deg);
                transform:rotateY(630deg);
            }
            75% {
                background-position:-168px 0;
                -webkit-transform:rotateY(630deg);
                -moz-transform:rotateY(630deg);
                -ms-transform:rotateY(630deg);
                -o-transform:rotateY(630deg);
                transform:rotateY(630deg);
            }
            100% {
                background-position:-168px 0;
                -webkit-transform:rotateY(810deg);
                -moz-transform:rotateY(810deg);
                -ms-transform:rotateY(810deg);
                -o-transform:rotateY(810deg);
                transform:rotateY(810deg);
            }
        }@keyframes rotate_load {
            0% {
                background-position:0 0;
                -webkit-transform:rotateY(90deg);
                -moz-transform:rotateY(90deg);
                -ms-transform:rotateY(90deg);
                -o-transform:rotateY(90deg);
                transform:rotateY(90deg);
            }
            24% {
                background-position:0 0;
                -webkit-transform:rotateY(270deg);
                -moz-transform:rotateY(270deg);
                -ms-transform:rotateY(270deg);
                -o-transform:rotateY(270deg);
                transform:rotateY(270deg);
            }
            25% {
                background-position:-56px 0;
                -webkit-transform:rotateY(270deg);
                -moz-transform:rotateY(270deg);
                -ms-transform:rotateY(270deg);
                -o-transform:rotateY(270deg);
                transform:rotateY(270deg);
            }
            49% {
                background-position:-56px 0;
                -webkit-transform:rotateY(450deg);
                -moz-transform:rotateY(450deg);
                -ms-transform:rotateY(450deg);
                -o-transform:rotateY(450deg);
                transform:rotateY(450deg);
            }
            50% {
                background-position:-112px 0;
                -webkit-transform:rotateY(450deg);
                -moz-transform:rotateY(450deg);
                -ms-transform:rotateY(450deg);
                -o-transform:rotateY(450deg);
                transform:rotateY(450deg);
            }
            74% {
                background-position:-112px 0;
                -webkit-transform:rotateY(630deg);
                -moz-transform:rotateY(630deg);
                -ms-transform:rotateY(630deg);
                -o-transform:rotateY(630deg);
                transform:rotateY(630deg);
            }
            75% {
                background-position:-168px 0;
                -webkit-transform:rotateY(630deg);
                -moz-transform:rotateY(630deg);
                -ms-transform:rotateY(630deg);
                -o-transform:rotateY(630deg);
                transform:rotateY(630deg);
            }
            100% {
                background-position:-168px 0;
                -webkit-transform:rotateY(810deg);
                -moz-transform:rotateY(810deg);
                -ms-transform:rotateY(810deg);
                -o-transform:rotateY(810deg);
                transform:rotateY(810deg);
            }
        }
    </style>
</head>
<!--<script src="./webjs/jquery.min.js"></script>-->
<body>
    <div style="margin: auto;width: 100%;height: 100%;" class="egret-player"
         data-entry-class="Main"
         data-orientation="portrait"
         data-scale-mode="fixedWidth"
         data-frame-rate="60"
         data-content-width="750"
         data-content-height="1216"
         data-multi-fingered="2"
         data-show-fps="false" data-show-log="false"
         data-show-fps-style="x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9">
    </div>
    <input type="hidden" id="roompwd" value="">
    <input type="hidden" id="uid" value="">
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
        <!--<span style="display:block;font-size: 25px ">点击分享图片</span><br/>-->
        <img src="" alt="" id="shareImage" style="width: 100%;">
    </div>
   <!--<img src="./resource/assets/public/hall_record_btn_2.png" onclick="isHidden('divImage')"  alt="" style="width:137px;height:40px;position:absolute;right:1%;top:2%;">-->
</div>
<div id="loadings">
<div class="mask"></div>
<div class="circular"></div>
<div class="rotate"></div>
<div class="doingText">准备加入中</div></div>

<script>
var win = {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    version: '1.0.0',
    ws: {},
    status: 0,
    readed: 0,
    gameId: 0,
    reset: function(fn) {
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        document.getElementsByTagName('html')[0].setAttribute('style', 'font-size:' + 100 * (this.width / 360) + 'px !important');
        if (typeof(fn) == 'function') fn();
    },
    loading: function() {
        if (this.overlay) {
            this.overlay.remove();
            this.overlay = null;
        }
        this.overlay = $('<div>').css({
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'background': 'rgba(255,255,255,0.7)',
            'z-index': 110000
        }).appendTo('body');
        if (this.loadingLay) {
            this.loadingLay.remove();
            this.loadingLay = null;
        }
        var code = '<div class="spinner">';
        code += ' <div class="spinner-container container1">';
        code += ' <div class="circle1"></div>';
        code += ' <div class="circle2"></div>';
        code += ' <div class="circle3"></div>';
        code += ' <div class="circle4"></div>';
        code += ' </div>';
        code += ' <div class="spinner-container container2">';
        code += ' <div class="circle1"></div>';
        code += ' <div class="circle2"></div>';
        code += ' <div class="circle3"></div>';
        code += ' <div class="circle4"></div>';
        code += ' </div>';
        code += ' <div class="spinner-container container3">';
        code += ' <div class="circle1"></div>';
        code += ' <div class="circle2"></div>';
        code += ' <div class="circle3"></div>';
        code += ' <div class="circle4"></div>';
        code += ' </div>';
        code += '</div>';
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", code);
    },
    close_loading: function() {
        if (this.overlay) {
            this.overlay.remove();
            this.overlay = null;
        }
        if (this.loadingLay) {
            this.loadingLay.remove();
            this.loadingLay = null;
        }
    },
    closeLoading: function() {
        document.getElementById('loadings').style.opacity = 0;
        setTimeout(function() {
            document.getElementById('loadings').style.display = 'none';
        },
        500);
    },
    load: function() {
        this.reset();
        if (typeof(Page) == 'object' && typeof(Page.load) == 'function') Page.load();
    },
    ready: function() {
        this.reset();
        if (typeof(Page) == 'object' && typeof(Page.ready) == 'function') Page.ready();
    },
    reload: function() {
        if (/[\?\&]q=[0-9\.]+/.test(location.href)) location.href = location.href.replace(/([\?\&]q=)[0-9\.]+/, '$1' + Math.random());
        else location.href = location.href + (location.href.indexOf('?') > 0 ? '&': '?') + 'q=' + Math.random();
    }
};
win.ready();
    window.load = function() {
      console.info('onload()');
  
      if (typeof(win) == 'undefined') return;
 
      win.version = '2.0.0';
      win.app = 3;
      win.sign = 'niudaxia';
      win.token = '52sSClOsXOmxxjmeOjtoCOkon2Hpr8yENdc9Drgi';

      window.clearInterval(window._interval);
      win.load();
    };
    window._interval = window.setInterval(window.load, 500);
    window.load();
    function hideNDXLoad(){
        document.getElementById('loadings').style.display = 'none';
    }
    ///这里添加点击 X 按钮关闭
    function isHidden(idtext) {
        // var vDiv = document.getElementById(idtext);
        // vDiv.style.display = 'none';
        // var roompwd = document.getElementById("roompwd").value;
        // var uid = document.getElementById("uid").value;
        // $.post("http://niuniu.guanghuangame.com/game/checkimage.php",{imgata:$("#shareImage").attr('src'),pwd:roompwd,uid:uid},function(result){
        //     // alert(result);
        //     window.gameRecordObj.screenHot(); 
        // });
    }
    function sendimage(imagedata,roompwd,userid) {
       

        ajax({
            url: "http://niuniu.guanghuangame.com/game/checkimage.php",       //请求地址
            type: "POST",                            //请求方式
            data: { imgata: imagedata, pwd: roompwd ,  uid:userid},    //请求参数
            dataType: "json",
            success: function (response, xml) {
            // 此处放成功后执行的代码
                // console.log(response);
                ret = eval('('+response+')'); 

                if(ret.code == 0){
                    window.gameRecordObj.screenHot(); 
                }else{
                    window.gameRecordObj.screenHotError(); 
                }
            },
            error: function (status) {
            // 此处放失败后执行的代码
                window.gameRecordObj.screenHotError(); 
            }
        });



    }

    function setroompwd(pwd){
        document.getElementById("roompwd").value = pwd;
        
    }
    function setuid(uid){
        document.getElementById("uid").value = uid;
        
    }


    function ajax(options) {
        options = options || {};
        options.type = (options.type || "GET").toUpperCase();
        options.dataType = options.dataType || "json";
        var params = formatParams(options.data);
        var xhr;
        
            //创建 - 第一步
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if(window.ActiveObject) {         //IE6及以下
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }
        
        //连接 和 发送 - 第二步
            if (options.type == "GET") {
                xhr.open("GET", options.url + "?" + params, true);
                xhr.send(null);
            } else if (options.type == "POST") {
                xhr.open("POST", options.url, true);
                //设置表单提交时的内容类型
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send(params);
            }

            //接收 - 第三步
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300 || status == 304) {
                    options.success && options.success(xhr.responseText, xhr.responseXML);
                } else {
                    options.error && options.error(status);
                }
                }
            }
        }

        //格式化参数
        function formatParams(data) {
            var arr = [];
            for (var name in data) {
                arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
            }
            arr.push(("v=" + Math.random()).replace("."));
            return arr.join("&");
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
        function setTitle(data="988指间娱乐"){
            document.getElementById("xlTitle").innerHTML=data;
        }
</script>


</body>

</html>