define(function(){
	return {
		jQ : function(){
			/*---下拉菜单显示隐藏---*/
			$("header .li1").hover(function(){
				$(".lie1").addClass("lie2");
			},function(){
				$(".lie2").removeClass("lie2");
			})
			// 二维码隐藏显示
			$("header .li2").hover(function(){
				$(".img").addClass("img1");
				},function(){
					$(".img1").removeClass("img1")
				}
			)
			// APP 二维码显示隐藏
			$("header .li3").hover(function(){
				$(".uu").addClass("uu1");
			},
			function(){
				$(".uu1").removeClass("uu1");
			})
			// 商家入驻 显示隐藏
			$("header .li4").hover(function(){
				$(".uu_").addClass("uu2");
			},function(){
				$(".uu2").removeClass("uu2");
			})
			// 网站导航  显示隐藏
			$("header .li5").hover(function(){
				$(".box_").addClass("box");
			},function(){
				$(".box").removeClass("box");
			})
			
			//  划入全部商品显现 移除消失
			$(".list_div .li1_").hover(function(){
				$(".ul_1").css("display","block");
			},function(){
				$(".ul_1").css("display","none");
			})
			$(".ul_1").hover(function(){
				$(".ul_1").css("display","block");
			},function(){
				$(".ul_1").css("display","none");
			})
			// slider上的 列表 活动出现
			$(".ul_1 .li_jiu1").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			$(".ul_1 .li_jiu2").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			$(".ul_1 .li_jiu3").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			$(".ul_1 .li_jiu4").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			$(".ul_1 .li_jiu5").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			$(".ul_1 .li_jiu6").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			
			// 侧边栏
			$(".maxicon .icon").hover(function(){
				$(this).find(".iconname").animate({"right":"40px","opacity":1},500).css("z-index",999);
				$(this).css("z-index",998);
				$(this).css("background","red");
			},function(){
				$(this).find(".iconname").animate({"right":"50px","opacity":0},500);
				$(this).css("background","black");
			})
			//  小三角点击时切换class名
			$(".jiao_1").click(function(){
				$(".jiu_1").addClass("jiu_2");
				$(".jiu_1").removeClass("jiu_1");
			})
          	$(".jiao_1").dblclick(function(){
				$(".jiu_2").addClass("jiu_1");
				$(".jiu_2").removeClass("jiu_2");
			})
          	
          	//  small_图片划过时添加border  并且划过小图时大图显示
          	$(".left_smallpic ul li").each(function(index,value){
          		$(this).hover(function(){
          			$(this).css("border","2px solid #fd0008").siblings().css("border","2px solid #fff");			
					$(this).parent().parent().parent().find(".left_datu").find(".left_datu_zhao").children("a").eq(index).addClass("active").siblings().removeClass("active");
					$(this).parent().parent().parent().find(".left_datu").find(".left_datu_right").children("a").eq(index).addClass("active_").siblings().removeClass();
          		})
          	})
          	
          	// 获取放大镜的 json
          	$.getJSON("js/fangdajing.json",function(json){
          		var $json = json.fangda;
          		$(".left_smallpic ul li").each(function(index,value){
          			$(this).children("a").children("img").attr({src: "" + $json[index] + ""});
          		})
          		$(".left_datu .left_datu_zhao a").each(function(index,value){
          			$(this).children("img").attr({src: "" + $json[index] + ""});
          		})
          		$(".left_datu .left_datu_right a").each(function(index,value){
          			$(this).children("img").attr({src: "" + $json[index] + ""});
          		})
          	})
          	
          	
          	//  获取小图标的图片  微信 微博 空间
			$.getJSON("js/fangdajing.json",function(json){
				var $json = json.tubiao;
				$(".left_fen a").each(function(index,value){
					$(this).children("img").attr({src: ""+ $json[index] + ""});
				})
			})
          	
          	//  点击加号增加  减号减少
          	var $val = $(".a_num").val();
          	$(".a_jia").click(function(){
          		 $val ++;
          		 if($val < 1){
          		 	$(".a_num").val() == 1;
          		 }else{
          		 	$(".a_num").val([$val]);
          		 }
          	})
           $(".a_jian").click(function(){
           	     $val --;
           	     if($val < 1){
           	     	$(".a_num").val() == 1;
           	     }else{
           	     	$(".a_num").val([$val]);
           	     }
           })
           //  获取左边图片
           $.getJSON("js/fangdajing.json",function(json){
           		$json = json.left_;
           		$(".detail_left_next_main ul li").each(function(index,value){
           			 $(this).find(".detail_left_next_main_div").children("img").attr({src :"" +$json[index] +""});
           		})
           })
           // 获取右边图片
           $.getJSON("js/fangdajing.json",function(json){
           		$json = json.tit_right_;
           		$(".detail_main_right_next div").each(function(index,value){
           			$(this).find("img").attr({src: ""+$json[index]+""});
           		})
           })
           // 获取详情页的大图片
           $.getJSON("js/fangdajing.json",function(json){
           		$json = json.right_pig_pic;
           		$(".right_pig_pic p img").each(function(index,value){
           			$(this).attr({src: ""+$json[index]+""});
           		})
           })
           
           //  选项卡点击事件
           $(".dianji_1").click(function(){
           		$(".right_pig_pic").css("display","block");
           		$(".detail_main_right_next").css("display","block");
           		$(".detail_main_right_tit_div2").css("display","block"); 
           		$(".detail_main_right_tit").css("height","160px")
           		$(this).css({"border-right":"2px solid #ccc","border-left":"2px solid #ccc","border-top":"2px solid red"}).siblings().css({"border-right":"2px solid #fff","border-left":"2px solid #fff","border-top":"2px solid #fff"});
           })
           
           $(".dianji_2").click(function(){
           		$(".right_pig_pic").css("display","none");
           		$(".detail_main_right_next").css("display","none");
           		$(".detail_main_right_tit_div2").css("display","none"); 
           		$(".detail_main_right_tit").css("height","70px")
           		
           		$(this).css({"border-right":"2px solid #ccc","border-left":"2px solid #ccc","border-top":"2px solid red"}).siblings().css({"border-right":"2px solid #fff","border-left":"2px solid #fff","border-top":"2px solid #fff"});
           })
           
           $(".dianji_3").click(function(){
           		$(".right_pig_pic").css("display","none");
           		$(".detail_main_right_next").css("display","none");
           		$(".detail_main_right_tit_div2").css("display","none"); 
           		$(".detail_main_right_tit").css("height","70px")
           		$(this).css({"border-right":"2px solid #ccc","border-left":"2px solid #ccc","border-top":"2px solid red"}).siblings().css({"border-right":"2px solid #fff","border-left":"2px solid #fff","border-top":"2px solid #fff"});
           		$("html").animate({"scrollTop":1350},0)
           })
           
           
           //高度到达一定是 悬浮不动
           $(window).scroll(function(){
           		if($(document).scrollTop() >= 1000){
           			$(".detail_main_right_tit_div1").css({"position":"fixed","top":"0"});
           		}else{
           			$(".detail_main_right_tit_div1").css("position","static")
           		}
           })
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
		}	
	}
})
                
