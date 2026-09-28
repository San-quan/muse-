var showed=0;
var paicount=0;
var poker = {
    timer: 1,

    fanpai: function (pai, imgpath, key, audio) {
        var _this = pai;

        // if (_this.hasClass('open') || key == 0) {
        //     if (key == 0) {
        //         _this.find('img').attr({'src':'/static/game/img/pai2/0.png','opacity':'1'});
        //     }

        //     return false;
        // }
        if ((_this.hasClass('open')&&key==0)||key==null) {
            return false;
        }
        if (key==0) {
            if (key == 0) {
                _this.find('img').attr({'src':'/static/game/img/pai2/0.png','opacity':'1'});
            }
            return false;
        }

        console.log($('.pai').height());
        _this.addClass('open');
        // _this.flip({
        //     direction: 'lr',
        //     content: '<img class="pk" src="' + imgpath + key + '.png" style="opacity:1;">',
        //     speed: 150,
        //     onEnd: function () {

        //         audio();
        //     }
        // });
        var w=_this.width();
        var h=_this.height();
        _this.html('<img class="pk" src="' + imgpath + key + '.png" style="opacity:1;max-width:'+w+'px;">');

    },
    fly: function (pai, imgpath, key, audio) {

        var _this = pai;
        if (_this.hasClass('showed')) {

            return false;
        }
        _this.addClass('showed');
        var dx = _this.offset().left;
        var dy = _this.offset().top;

       // console.log([dx,dy]);
        //_this.empty();
        var img = _this.find('img');
        //img.attr('src', '/static/game/img/pai/0.png');
        var h = img.height();
        var ww=img.width();
        //_this.css('height','0');
        var w=_this.width();
        var hh=w*h/ww;
        // _this.css('height',hh+'px');
        setTimeout(function () {
            img.attr('id','paicount'+paicount);
            img.css({
                'position': 'fixed',
                'top': '50%',
                'left': '50%',
                'margin-left':'-20px',
                'margin-top':'-25px',
                'max-width':w+'px',
                'opacity':'1',
                'z-index':5
            })
            // .animate({'margin-top':0,'margin-left':0,'top': dy + 'px', left: dx + 'px','opacity':1}, 200,'', function () {
            //     img.css({'position': 'static','max-width':'none','opacity':'1'});
            //     //_this.html(img);
            //     showed ++ ;
            //     audio();
            //     setTimeout(function(){poker.fanpai(pai, imgpath, key, audio);},750);

            // });
            var y=dy-img.offset().top;
            var x=dx-img.offset().left;
            setTimeout(function () {
                    img.css({
                        'transition': '-webkit-transform 500ms ease-out',
                        'webkitTransform': "translate("+x+"px,"+y+"px) scale(1) translateZ(0px)",
                        'opacity':'1'
                    });
                    setTimeout(function(){
                        img.css({
                            'position': 'static','max-width':'none','opacity':'1',
                            'transition': '-webkit-transform 0ms ease-out',
                            'margin-top':0,'margin-left':0,'top': dy + 'px', 'left': dx + 'px','opacity':1,
                        'webkitTransform': "translate(0px,0px) scale(1) translateZ(0px)",
                        'heihgt':h+'px'
                        });
                        setTimeout(function(){poker.fanpai(pai, imgpath, key, audio);},750);
                        showed ++ ;
                    },1000);
                    
                    
                    
                },500);
                paicount++;
        }, 150 * poker.timer);

        poker.timer++;
    },
    ajaxshow:function(url, key,imgpath, element, audio){
        $.post(url, {key:key}, function(ret){
            if(ret.code == 1){
                poker.fanpai($(element),imgpath,ret.msg, audio);
            }
        }, 'json');
    },
    fanpaiall: function (elements, imgpath, keys, audio) {
        poker.timer = 1;
        // faJudge=false;
        // $(elements).find('img').css('opacity', 0);
        $(elements).each(function (index, element) {
            if (typeof(keys[index]) != 'undefined') {
                if (showed >= $(elements).length) {
                    $(elements).find('img').css('opacity', 1);
                    poker.fanpai($(element), imgpath, keys[index],audio);
                } else {
                    $(elements).find('img').attr('src', '/static/game/img/pai2/0.png');
                    poker.fly($(element), imgpath, keys[index],audio);
                }
            }
        });
            
        
    },
     fanpaiall_zjh: function (elements, imgpath, keys, audio) {
        poker.timer = 1;
        
            $(elements).each(function (index, element) {
                if (typeof(keys[index]) != 'undefined') {
                    if (showed >= $(elements).length) {
                        $(elements).find('img').css('opacity', 1);
                        poker.fanpai($(element), imgpath, keys[index],audio);
                    } else {
                        $(elements).find('img').attr({'src': '/static/game/img/pai2/0.png','opacity':'1'});
                        poker.fly($(element), imgpath, keys[index],audio);
                    }
                }
            });
            
        
        
    },
    fanpaithree: function (elements, imgpath, keys, audio) {
        poker.timer = 1;
        $(elements).find('img').css('opacity', 0);
        $(elements).each(function (index, element) {
            if (typeof(keys[index]) != 'undefined') {
                if (showed >= $(elements).length) {
                    if (index<3) {
                        $(elements).find('img').css('opacity', 1);
                        poker.fanpai($(element), imgpath, keys[index],audio);
                    }else{
                        return;
                    }
                    
                } else {
                    $(elements).find('img').attr('src', '/static/game/img/pai2/0.png');
                    poker.fly($(element), imgpath, keys[index],audio);
                }
            }
        });
            
        
        
    },
    init: function (poker) {
        $(poker).removeClass('open');
        $(poker).removeClass('showed');
        $(poker).css({'background-color':'rgba(0,0,0,0)'});
        showed= 0;
        faJudge=true;
        initpai=true;
    },
    fa: function(){
        faJudge=true;
    }
}
