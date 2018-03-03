"use strict";
$(function() {
	$.extend(Array.prototype, {
		indexOf: function(o) {
			for (var i = 0, len = this.length; i < len; i++) {
				if (this[i] == o) {
					return i;
				}
			}
			return -1;
		},
		remove: function(o) {
			var index = this.indexOf(o);
			if (index != -1) {
				this.splice(index, 1);
			}
			return this;
		},
		removeById: function(filed, id) {
			for (var i = 0, len = this.length; i < len; i++) {
				if (this[i][filed] == id) {
					this.splice(i, 1);
					return this;
				}
			}
			return this;
		}
	});
});


function ajaxRequest(option) {
	$.ajax({
		type: option.type,
		url: option.url,
		cache: false,
		data: option.param,
		dataType: option.dataType,
		success: option.success,
		error: option.error
	});
}

//检查上传的图片格式
function checkImgType(filename) {
	var pos = filename.lastIndexOf(".");
	var str = filename.substring(pos, filename.length)
	var str1 = str.toLowerCase();
	if (!/\.(gif|jpg|jpeg|png|bmp)$/.test(str1)) {
		return false;
	}
	return true;
}

//通用loading变量
var loadingobj;

function showLoading(msg, delay) {
	/// <param name="msg" type="String">待显示的文本,非必填</param>
	/// <param name="delay" type="Int">延时显示的毫秒数，默认100毫秒显示,非必填</param>
	if (!delay)
		delay = 100;
	var loading = $('<div class="ajax-loading" style="display:none"><table height="100%" width="100%"><tr><td align="center"><p>' + (msg ? msg : '') + '</p></td></tr></table></div>');
	loading.appendTo('body');
	var s = setTimeout(function() {
		if ($(".ajax-loading").length > 0) {
			loading.show();
			$('.container,.login-box').addClass('blur');
		}
	}, delay);
	return {
		close: function() {
			clearTimeout(s);
			loading.remove();
			$('.container,.login-box').removeClass('blur');
		}
	}

}


function QueryString(name) {
	/// 获取QueryString
	if (name == null || name == "" || name == undefined) {
		var AllVars = window.location.search.substring(1);
		return AllVars.split("&");
	} else {
		var AllVars = window.location.search.substring(1);
		var Vars = AllVars.split("&");
		for (i = 0; i < Vars.length; i++) {
			var Var = Vars[i].split("=");
			if (Var[0] == name) return Var[1];
		}
		return "";
	}
};

function AddFavorite(sURL, sTitle) {
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch (e) {
			alert("加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}

//表示全局唯一标识符 (GUID)。
function Guid(g) {
	var arr = new Array(); //存放32位数值的数组
	if (typeof(g) == "string") { //如果构造函数的参数为字符串
		InitByString(arr, g);
	} else {
		InitByOther(arr);
	}

	//返回一个值，该值指示 Guid 的两个实例是否表示同一个值。
	this.Equals = function(o) {
			if (o && o.IsGuid) {
				return this.ToString() == o.ToString();
			} else {
				return false;
			}
		}
		//Guid对象的标记
	this.IsGuid = function() {}
		//返回 Guid 类的此实例值的 String 表示形式。
	this.ToString = function(format) {
			if (typeof(format) == "string") {
				if (format == "N" || format == "D" || format == "B" || format == "P") {
					return ToStringWithFormat(arr, format);
				} else {
					return ToStringWithFormat(arr, "D");
				}
			} else {
				return ToStringWithFormat(arr, "D");
			}
		}
		//由字符串加载
	function InitByString(arr, g) {
		g = g.replace(/\{|\(|\)|\}|-/g, "");
		g = g.toLowerCase();
		if (g.length != 32 || g.search(/[^0-9,a-f]/i) != -1) {
			InitByOther(arr);
		} else {
			for (var i = 0; i < g.length; i++) {
				arr.push(g[i]);
			}
		}
	}
	//由其他类型加载
	function InitByOther(arr) {
		var i = 32;
		while (i--) {
			arr.push("0");
		}
	}
	/*
	根据所提供的格式说明符，返回此 Guid 实例值的 String 表示形式。
	N  32 位： xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	D  由连字符分隔的 32 位数字 xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
	B  括在大括号中、由连字符分隔的 32 位数字：{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}
	P  括在圆括号中、由连字符分隔的 32 位数字：(xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
	*/
	function ToStringWithFormat(arr, format) {
		switch (format) {
			case "N":
				return arr.toString().replace(/,/g, "");
			case "D":
				var str = arr.slice(0, 8) + "-" + arr.slice(8, 12) + "-" + arr.slice(12, 16) + "-" + arr.slice(16, 20) + "-" + arr.slice(20, 32);
				str = str.replace(/,/g, "");
				return str;
			case "B":
				var str = ToStringWithFormat(arr, "D");
				str = "{" + str + "}";
				return str;
			case "P":
				var str = ToStringWithFormat(arr, "D");
				str = "(" + str + ")";
				return str;
			default:
				return new Guid();
		}
	}
}
//Guid 类的默认实例，其值保证均为零。
Guid.Empty = new Guid();
//初始化 Guid 类的一个新实例。
Guid.NewGuid = function() {
	var g = "";
	var i = 32;
	while (i--) {
		g += Math.floor(Math.random() * 16.0).toString(16);
	}
	return new Guid(g);
}

//获取区域路径
//eg: /admin/home/index 页面调用此方法后返回 /admin/
function getAreaPath() {
	var path = location.pathname + '/';
	path = path.substring(1, path.length);
	path = path.substring(0, path.indexOf('/'));
	return '/' + path + '/';
}
//转换json传输date
function date_string(str, df) {
	df = df || "yyyy-MM-dd";
	return time_string(str, df);
}

//时间转换前位加零
function dFormat(i) {
	return i < 10 ? "0" + i.toString() : i;
}

//转换json传输date
function time_string(str, df) {
	df = df || "yyyy-MM-dd HH:mm:ss";
	var result = "";
	if (str == null || str.length < 1) {
		return result;
	}
	var d = eval('new ' + str.substr(1, str.length - 2));
	var ar_date = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
	result = formatdata(d, df);
	return result;
}

function formatdata(data, fmt) {
	var o = {
		"M+": data.getMonth() + 1, //月份         
		"d+": data.getDate(), //日         
		"h+": data.getHours() % 12 == 0 ? 12 : data.getHours() % 12, //小时         
		"H+": data.getHours(), //小时         
		"m+": data.getMinutes(), //分         
		"s+": data.getSeconds(), //秒         
		"q+": Math.floor((data.getMonth() + 3) / 3), //季度         
		"S": data.getMilliseconds() //毫秒         
	};
	var week = {
		"0": "/u65e5",
		"1": "/u4e00",
		"2": "/u4e8c",
		"3": "/u4e09",
		"4": "/u56db",
		"5": "/u4e94",
		"6": "/u516d"
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	if (/(E+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[data.getDay() + ""]);
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}

String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

// 倒计时
function countDown(intDiff, callback) {
	var intDiff = parseInt(intDiff); // 倒计时总秒数量
	window.setInterval(function() {
		var day = 0,
			hour = 0,
			minute = 0,
			second = 0; // 时间默认值
		if (intDiff > 0) {
			day = Math.floor(intDiff / (60 * 60 * 24));
			hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
			minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
			second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		}
		if (minute <= 9) minute = '0' + minute;
		if (second <= 9) second = '0' + second;
		callback(day, hour, minute, second);
		intDiff--;
	}, 1000);
}

// JavaScript Document

$(document).ready(function() {

	//图片延迟加载
	$(".lazyload").scrollLoading();

	//下拉菜单
	$('.dropdown').hover(function() {
		$(this).toggleClass('hover');
	});


	//图片左右滚动切换
	$(function() {
		var page = 1;
		var i = 3; //每版放3个图片 
		var content = $("#mscroll-list");
		var content_list = $("#mscroll-list");
		var v_width = content.width();
		var len = content.find("li").length;
		var page_count = Math.ceil(len / i);
		//向后 按钮  
		$("#mscroll-ctrl-next").click(function() {
			if (!content_list.is(":animated")) {
				if (page == page_count) {
					content_list.animate({
						left: '0px'
					}, 300);
					page = 1;
				} else {
					content_list.animate({
						left: '-=' + v_width
					}, 300);
					page++;
				}
			}
		});
		//往前 按钮  
		$("#mscroll-ctrl-prev").click(function() {
			if (!content_list.is(":animated")) {
				if (page == 1) {
					content_list.animate({
						left: '-=' + v_width * (page_count - 1)
					}, 300);
					page = page_count;
				} else {
					content_list.animate({
						left: '+=' + v_width
					}, 300);
					page--;
				}
			}

		});
	});


	//焦点图渐变切换
	$(function() {
		var len = $("#slide ul li").length;
		var index = 0;
		var picTimer;
		var btn = '<div class="slide-controls">';
		for (var i = 1; i <= len; i++) {
			btn += "<span>" + i + "</span>";
		}
		btn += "</div>";
		$('#slide').append(btn);
		$("#slide ul li").eq(0).addClass('active');
		$("#slide span").mouseover(function() {
			index = $("#slide span").index(this);
			clearInterval(picTimer);
			showPics(index);
		}).eq(0).trigger("mouseover");

		$("#slide ul").hover(function() {
			clearInterval(picTimer);
		}, function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if (index == len) {
					index = 0;
				}
			}, 4000);
		}).trigger("mouseleave");

		function showPics(index) {
			$("#slide ul li").eq(index).addClass('active').siblings().removeClass();
			$("#slide span").removeClass("cur").eq(index).addClass("cur");

		}
	});


	//楼层选项卡切换
	$('.floor-hd li').mouseDelay(100).hover(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parent().parent().siblings(".floor-bd").find('.content-right-box').children().eq($(this).index()).show().siblings().hide();
	});


	//图片滚动切换

	$('.floors .slide').each(function() {
		var len = $(this).find('li').length,
			liWidth = $(this).find('li').first().width();

		var btn = '<div class="slide-controls">';
		for (var i = 0; i < len; i++) {
			btn += "<span>" + i + "</span>";
		}
		btn += "</div>";
		$(this).append(btn).find('ul').width(len * liWidth);
		$(this).find('span').first().addClass("cur");
		$(this).find('span').mouseDelay().mouseenter(function() {
			$(this).addClass("cur").siblings().removeClass().parent().siblings().stop(false, true).animate({
				'left': $(this).index() * (-liWidth)
			}, 200);
		});

	});


	//商品导航
	$('.categorys .item').hover(function() {
		$(this).toggleClass('hover');
	})
	if ($('.category').css('display') == 'none') {
		$('.categorys').mouseDelay().hover(function() {
			$('.category').show();
		});
		$('.categorys').mouseleave(function() {
			$('.category').hide();
		});
	}



	clickChange('#tab-brand li', '.brandslist.tabcon');



	/*商品列表页*/
	$('#refilter .item').each(function() {
		var _this = $(this);
		$(this).find('b').click(function() {
			_this.toggleClass('hover');
		});
	});

	$('#refilter .extra').click(function() {
		if ($(this).siblings('.undis').css('display') == 'none') {
			$(this).siblings('.undis').show();
			$(this).find('.more').html('<span>收起</span><b class="close"></b>');
		} else {
			$(this).siblings('.undis').hide();
			$(this).find('.more').html('<span>显示全部分类</span><b class="open"></b>');
		}

	});


	//商铺排行切换
	hoverChange('.shop-ranking span', '.shop-ranking ul');


	//兼容IE8及以下浏览器
	if (!+[1, ]) {
		$('.content_recont ul').children().last().addClass('last-child');
		$('.content_mcontl').children().last().addClass('last-child');

	}

});

//点击切换
function clickChange(tabHd, tabBd) {

	$(tabHd).click(function() {
		$(this).addClass('curr').siblings().removeClass('curr');
		$(this).parent().siblings(tabBd).eq($(this).index()).show().siblings(tabBd).hide();
	});
}

//hover切换
function hoverChange(tabHd, tabBd) {

	$(tabHd).hover(function() {
		$(this).addClass('current').siblings().removeClass('current');
		$(this).parent().siblings(tabBd).eq($(this).index()).show().siblings(tabBd).hide();
	});
}

function isHaveLogin() {
	var result = false;
	var memberId = $.cookie('Himall-User');
	if (memberId) {
		result = true;
	}
	return result;
}

function checkLogin(callBack) {
	if (isHaveLogin()) {
		callBack();
	} else {
		$.fn.login({}, function() {
			callBack(function() {
				location.reload();
			});
		}, './', '', '/Login/Login');
	}
}




//浏览器
(function(jQuery) {

	if (jQuery.browser) return;

	jQuery.browser = {};
	jQuery.browser.mozilla = false;
	jQuery.browser.webkit = false;
	jQuery.browser.opera = false;
	jQuery.browser.msie = false;

	var nAgt = navigator.userAgent;
	jQuery.browser.name = navigator.appName;
	jQuery.browser.fullVersion = '' + parseFloat(navigator.appVersion);
	jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
	var nameOffset, verOffset, ix;

	// In Opera, the true version is after "Opera" or after "Version"   
	if ((verOffset = nAgt.indexOf("Opera")) != -1) {
		jQuery.browser.opera = true;
		jQuery.browser.name = "Opera";
		jQuery.browser.fullVersion = nAgt.substring(verOffset + 6);
		if ((verOffset = nAgt.indexOf("Version")) != -1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset + 8);
	}
	// In MSIE, the true version is after "MSIE" in userAgent   
	else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
		jQuery.browser.msie = true;
		jQuery.browser.name = "Microsoft Internet Explorer";
		jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
	}
	// In Chrome, the true version is after "Chrome"   
	else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
		jQuery.browser.webkit = true;
		jQuery.browser.name = "Chrome";
		jQuery.browser.fullVersion = nAgt.substring(verOffset + 7);
	}
	// In Safari, the true version is after "Safari" or after "Version"   
	else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
		jQuery.browser.webkit = true;
		jQuery.browser.name = "Safari";
		jQuery.browser.fullVersion = nAgt.substring(verOffset + 7);
		if ((verOffset = nAgt.indexOf("Version")) != -1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset + 8);
	}
	// In Firefox, the true version is after "Firefox"   
	else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
		jQuery.browser.mozilla = true;
		jQuery.browser.name = "Firefox";
		jQuery.browser.fullVersion = nAgt.substring(verOffset + 8);
	}
	// In most other browsers, "name/version" is at the end of userAgent   
	else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
		(verOffset = nAgt.lastIndexOf('/'))) {
		jQuery.browser.name = nAgt.substring(nameOffset, verOffset);
		jQuery.browser.fullVersion = nAgt.substring(verOffset + 1);
		if (jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase()) {
			jQuery.browser.name = navigator.appName;
		}
	}
	// trim the fullVersion string at semicolon/space if present   
	if ((ix = jQuery.browser.fullVersion.indexOf(";")) != -1)
		jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix);
	if ((ix = jQuery.browser.fullVersion.indexOf(" ")) != -1)
		jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix);

	jQuery.browser.majorVersion = parseInt('' + jQuery.browser.fullVersion, 10);
	if (isNaN(jQuery.browser.majorVersion)) {
		jQuery.browser.fullVersion = '' + parseFloat(navigator.appVersion);
		jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
	}
	jQuery.browser.version = jQuery.browser.majorVersion;
})(jQuery);
$(function () {

    refreshCartProducts();
});
function refreshCartProducts() {
    $.post('/cart/GetCartProducts', {}, function (cart) {
        var products = cart.products;
        var count = cart.totalCount;
        $('#shopping-amount,#right_cart em').html(count);
    });
}

function logout() {
    $.removeCookie('Himall-User', { path: '/',domain:'.zhongjiu.cn' });
    $.removeCookie('Himall-SellerManager', { path: "/", domain: '.zhongjiu.cn' });
    $.removeCookie('cps_cookie', { path: "/", domain: '.zhongjiu.cn' });
    window.location.href = "/Login";
}


var currentUser;
$(function () {
    initUserInfo();
});

function initUserInfo() {
    try {
        $.ajax({
            type: 'post',
            url: '/userinfo/GetCurrentUserInfo',
            cache: false,
            async: true,
            data: {},
            dataType: "json",
            success: function (result) {
                if (result.success) {
                    $("#sayhello").html("Hi! " + result.name);
                    $(".login-bt .btn").hide();
                    $("#loginOut").show();
                }
                else {
                    $(".login-bt .btn").show();
                    $("#loginOut").hide();
                }
            },
            error: function () {
            }
        });


        //$.post('/userinfo/GetCurrentUserInfo', {}, function (result) {
        //    if (result.success) {
        //        $("#sayhello").html("Hi! " + result.name);
        //        $(".login-bt .btn").hide();
        //        $("#loginOut").show();
        //    }
        //    else {
        //        $(".login-bt .btn").show();
        //        $("#loginOut").hide();
        //    }
        //});
    }
    catch (e) {
        $("#sayhello").html("Hi! 你好");
        $(".login-bt .btn").show();
    }
}

function logout() {
    $.removeCookie('Himall-User', { path: '/', domain: '.zhongjiu.cn' });
    $.removeCookie('Himall-SellerManager', { path: "/", domain: '.zhongjiu.cn' });
    $.removeCookie('cps_cookie', { path: "/", domain: '.zhongjiu.cn' });
    window.location.href="/Login";
}