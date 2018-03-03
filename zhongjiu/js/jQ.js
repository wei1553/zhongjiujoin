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
			// 侧边栏
			$(".maxicon .icon").hover(function(){
				$(this).find(".iconname").animate({"right":"40px","opacity":1},500).css("z-index",999);
				$(this).css("z-index",998);
				$(this).css("background","red");
				$(this).find("span").css("display","block")
			},function(){
				$(this).find(".iconname").animate({"right":"50px","opacity":0},500);
				$(this).css("background","black");
				$(this).find("span").css("display","none")
			})
			// slider上的 列表 活动出现
			$(".banner .jiu_lie .ul_1 .li_jiu1").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			$(".banner .jiu_lie .ul_1 .li_jiu2").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			$(".banner .jiu_lie .ul_1 .li_jiu3").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			$(".banner .jiu_lie .ul_1 .li_jiu4").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			$(".banner .jiu_lie .ul_1 .li_jiu5").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			$(".banner .jiu_lie .ul_1 .li_jiu6").hover(function(){
				$(this).css("background","#363a3d");
				$(this).find(".left_biao1").css("display","block");
			},function(){
				$(this).css("background","#3e4851");
				$(this).find(".left_biao1").css("display","none");
			})
			
			// slider上的 列表   右边的移动
			$(".banner .jiu_lie .ban_jiu1").hover(function(){
				$(this).animate({"right":"50px","opacity":1},200);
			},function(){
				$(this).animate({"right":"40px","opacity":0.7},200);
			})
			$(".banner .jiu_lie .ban_jiu2").hover(function(){
				$(this).animate({"right":"50px","opacity":1},200);
			},function(){
				$(this).animate({"right":"40px","opacity":0.7},200);
			})
			//   选项卡图片列表宽度变小
            $(".main_ .main_one dl").hover(function(){
            	$(this).css("transform","translateX(-10px)");
            },function(){
            	$(this).css("transform","translateX(0px)");
            })
            //   更多  滑动变色
            $(".main_ .main_one .duo_").hover(function(){
            	$(this).css("color","red");
            },function(){
            	$(this).css("color","#636768");
            })
            //  滑动 选项卡变色
            $(".main_ .main_two  ul li a").hover(function(){
            	$(this).css("color","red");
            },function(){
            	$(this).css("color","#2e2d29");
            })
           // 滑动  切换选项卡
           $(".li_hua2").hover(function(){
           		$(this).find(".lie_").css("display","block");
           		
           },function(){
           		$(this).find(".lie_").css("display","none");
           })

           $(".li_hua3").hover(function(){
           		$(this).find(".lie_").css("display","block");
           		
           },function(){
           		$(this).find(".lie_").css("display","none");
           		
           })
           
           $(".li_hua4").hover(function(){
           		$(this).find(".lie_").css("display","block");
           		
           },function(){
           		$(this).find(".lie_").css("display","none");
           		
           })
           //  左侧边栏 滑动变色
           $(".left_c ul li a").hover(function(){
	           	$(this).css("background","red");
	           	$(this).find("span").css("display","block");
	           	$(this).find("em").css("display","none");
           },function(){
           		$(this).css("background","white");
           		$(this).find("em").css("display","block");
           		$(this).find("span").css("display","none");
           })
           // 左侧边栏高度到达一定位置出现
           $(window).scroll(function(){
           		if($(this).scrollTop() >= 1000){
           			$(".left_c").css("display","block");
           		}
           		if($(this).scrollTop() < 1000 || $(this).scrollTop() > 4500){
           			$(".left_c").css("display","none");
           		}
           })
           // 左侧边栏 点击跳转到指定位置
           $(".left_c ul li .tiao_1").click(function(){
           		$("html").animate({"scrollTop":1360},1000)
           })
           $(".left_c ul li .tiao_2").click(function(){
           		$("html").animate({"scrollTop":2110},1000)
           })
           $(".left_c ul li .tiao_3").click(function(){
           		$("html").animate({"scrollTop":2850},1000)
           })
           $(".left_c ul li .tiao_4").click(function(){
           		$("html").animate({"scrollTop":3600},1000)
           })
           //   位置在一定区域时，显示标识
           $(window).scroll(function(){
           		if($(this).scrollTop() >=1000 && $(this).scrollTop() <= 1810){
           			$(".left_c ul li .tiao_1").css("background","red");
           			$(".left_c ul li .tiao_1").find("span").css("display","block");
	           		$(".left_c ul li .tiao_1").find("em").css("display","none");
           		}else{
           			$(".left_c ul li .tiao_1").css("background","white");
	           		$(".left_c ul li .tiao_1").find("em").css("display","block");
	           		$(".left_c ul li .tiao_1").find("span").css("display","none");
           		}
           })
           $(window).scroll(function(){
           		if($(this).scrollTop() >=1810 && $(this).scrollTop() <= 2550){
           			$(".left_c ul li .tiao_2").css("background","red");
           			$(".left_c ul li .tiao_2").find("span").css("display","block");
	           		$(".left_c ul li .tiao_2").find("em").css("display","none");
           		}else{
           			$(".left_c ul li .tiao_2").css("background","white");
	           		$(".left_c ul li .tiao_2").find("em").css("display","block");
	           		$(".left_c ul li .tiao_2").find("span").css("display","none");
           		}
           })
           $(window).scroll(function(){
           		if($(this).scrollTop() >=2550 && $(this).scrollTop() <= 3300){
           			$(".left_c ul li .tiao_3").css("background","red");
           			$(".left_c ul li .tiao_3").find("span").css("display","block");
	           		$(".left_c ul li .tiao_3").find("em").css("display","none");
           		}else{
           			$(".left_c ul li .tiao_3").css("background","white");
	           		$(".left_c ul li .tiao_3").find("em").css("display","block");
	           		$(".left_c ul li .tiao_3").find("span").css("display","none");
           		}
           })
           $(window).scroll(function(){
           		if($(this).scrollTop() >=3300 && $(this).scrollTop() <= 4500){
           			$(".left_c ul li .tiao_4").css("background","red");
           			$(".left_c ul li .tiao_4").find("span").css("display","block");
	           		$(".left_c ul li .tiao_4").find("em").css("display","none");
           		}else{
           			$(".left_c ul li .tiao_4").css("background","white");
	           		$(".left_c ul li .tiao_4").find("em").css("display","block");
	           		$(".left_c ul li .tiao_4").find("span").css("display","none");
           		}
           })
           
           //  点击请登录  跳转到登陆页面
           $(".icon").click(function(){
           		$(".zhaozhao_").css("display","block");
           		$(".login_").css("display","block");
           })
           
           //   点击错误按钮 关闭登录框
           $(".log_clos").click(function(){
           		$(".zhaozhao_").css("display","none");
           		$(".login_").css("display","none");
           })
           //  划过QQ weixin  weibo时  切换图片
           $(".Q_a1").hover(function(){
           		$(".Q2").css("display","block");
           		$(".Q1").css("display","none");
           },function(){
           		$(".Q2").css("display","none");
           		$(".Q1").css("display","block");
           })
           $(".Q_a2").hover(function(){
           		$(".W2").css("display","block");
           		$(".W1").css("display","none");
           },function(){
           		$(".W2").css("display","none");
           		$(".W1").css("display","block");
           })
           $(".Q_a3").hover(function(){
           		$(".B2").css("display","block");
           		$(".B1").css("display","none");
           },function(){
           		$(".B2").css("display","none");
           		$(".B1").css("display","block");
           })
           	 	
           //  表单验证
           $(".log_txt1").blur(function(){
           		var $re = /^[0-9]{3-9}/g;
           		if($re.test($(".log_txt1").value == false) || $(".log_txt1").value == ""){
           			alert("kong");
           		}
           })
           
          //   获取登录信息
          
	
				var str = $.cookie("loginedUsers") ? $.cookie("loginedUsers") : "";
				if(str){
					
					$(".denglu_").html($('<p>欢迎您！' + str + '<u href="javascript:;" id="logout">注销</u></p>'))
				}
				$("#logout").click(function(){
					$(this).parent().remove();
					$.removeCookie("loginedUsers",{expires : 7,path:"/"});
					location.href = "enter/enter.html";
				})	
			
           
		}	
	}
})
                
