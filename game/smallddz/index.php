<?php
session_start();
?>

<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <title>魂族斗地主</title>
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
            /*background-image:url(./resource/assets/public/loading/hall/loading_BG.png)*/;
            background-size:100% 100%;
            padding: 0;
            border: 0;
            margin: 0;
            height: 100%;
            text-align:center;
        }
    </style>
</head>

<body>
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



</body>

</html>