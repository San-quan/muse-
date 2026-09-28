<?php
session_start();
?>
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <title><?php
        if($_GET['cod']!=''){
            $pwd=base64_decode($_GET['cod']);
            $a=explode("&", $pwd);
            echo "炸金花".$a[1];
        }else{
            echo "将军大厅";
        }
    ?>
</title>
    <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="full-screen" content="true" />
    <meta name="screen-orientation" content="portrait" />
    <meta name="x5-fullscreen" content="true" />
    <meta name="360-fullscreen" content="true" />
    <style>
       
    </style>
</head>
<!--<script src="./webjs/jquery.min.js"></script>-->
<body style="margin: 0">
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
<div style="position: fixed;width: 100%;height: 100%;top: 0px;left: 0px;background: rgb(0, 0, 0);display: block;z-index: 999;" id="loading">
    <img src="http://web.boysmyx.com/files/d_2/images/loading.gif" style="top: 40%;position: absolute;left: 50%;margin-left: -45px;margin-top: -45px;">
</div>

<script>


    function hideNDXLoad(){
        document.getElementById('loading').style.display = 'none';
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
            // document.getElementById("xlTitle").innerHTML=data;
        }
</script>


</body>

</html>