$(function () {

    //左侧导航
    if ($(".floors").children().length > 0) {
        $(".floor-nav li").click(function () {
            var currentE = $(".floor").eq($(this).index());
            $("html,body").stop().animate({ scrollTop: currentE.offset().top - 1 }, 600);
        });

        $(window).scroll(function () {
            if ($(document).scrollTop() > ($('.floor').first().offset().top - $(window).height() / 2 - 100) && $(document).scrollTop() + $(window).height() < $(document).height() - 200) {
                $('.floor-nav').fadeIn()
            } else {
                $('.floor-nav').fadeOut()
            }

            $(".floor").each(function () {
                if ($(this).offset().top <= $(document).scrollTop() + $(window).height() / 2) {
                    $(".floor-nav li").delay(300).eq($(this).index()).addClass("cur").siblings().removeClass();
                    
                }
            })
        });
    }

    var timeoutid;
    $(".floorA .floorA-hd ul li").each(function (index) {
        $(this).mouseover(function () {
            var t = $(this);
            timeoutid = setTimeout(function () {

                t.addClass("active").siblings().removeClass("active");

                $(".floorA .floorA-right .tab-right").eq(index).addClass("current").siblings().removeClass("current");
            }, 300);
        }).mouseout(function () {
            clearTimeout(timeoutid);
        });
    });
   
    //关闭首页弹层
    $('.tc').find('.close').click(function () {
        $('.tc').hide();
        addCookie('tc', '1', 4);
    });
    checkCookie();
})
function checkCookie() {
    var date = getCookie('tc');
    if (date != '') {
        $('.tc').hide();
        addCookie(10, 1);
    } else {
        $('.tc').show();
    }
}
//写Cookie
function addCookie(objName, objValue, objHours) {
    var str = objName + "=" + escape(objValue);
    if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}

//读Cookie
function getCookie(objName) {//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);
    }
    return "";
}








