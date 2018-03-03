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
          //  划过时 换class名切换
          $(".cen_bottom .cen_btn_ul .bottom_li").hover(function(){
          		$(this).find(".block_").css("display","none");
          		$(this).find(".none_zhao").css("display","block");
          },function(){
          		$(this).find(".block_").css("display","block");
          		$(this).find(".none_zhao").css("display","none");
          })
          
          // 划过小图时大图同步显示
          $(".cen_bottom .cen_btn_ul .bottom_li").each(function(index,value){     	  $(this).children(".none_zhao").children(".none_").children(".p_pic").children(".small_pic").children("a").each(function(index1,value){
					$(this).hover(function(){
						$(this).parent().parent().parent().find(".p_img1").children("a").eq(index1).css("display","block").siblings().css("display","none")
					})
          	 	})
            })
          
        //  划过列表的 中酒名称时出现下划线
        $(".p_shop1").hover(function(){
        	$(this).css({"color":"red"})
        },function(){
        	$(this).css({"color":"#656565"})
        })
          
          
        //  点击切换到详情页面
        $(".none_zhao").click(function(){
        		location.href = "../detail/detail.html";
        })
        
        //   点击小圆球
        $(".p_i").click(function(e){
        	loadCart();
			$(this).children("i").children("img").css("z-index",100000);
        	// 获取商品的id（用来区分不同的商品）
        	var goodId = $(this).parent().attr("data-good-id");
        	//获取商品名称
        	var goodName = $(this).siblings("div").eq(2).children("p").html();
        	console.log(goodName);
        	//获取商品价格
        	var goodPrice = parseFloat($(this).siblings("div").eq(1).children("span").html());
        	console.log(goodPrice)
        	// 获取商品的图片src
        	var goodSrc = $(this).children("i").children("img").attr("src");
        	console.log(goodSrc);
        	
        	//获取cookie中的信息
			//如果cookie中没有信息会返回一个undefined ,我所须是一个字符串类型的数据，所以将它转成一个“”空字符串。保持数据类型一致。
        	var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
        	//将字符串转成对象
        	var cartObj = convertCartStrToObj(cartStr);
        	//判断该商品是否已经在购物车中存在
        	if(goodId in cartObj){
        		//如果已存在，那么该商品的数量加1
				cartObj[goodId].num += 1;
        	}else{
        		//如果不存在，那么将新商品的信息存入
				cartObj[goodId] = {
					name : goodName,
					price : goodPrice,
					num : 1,
					src : goodSrc
				};
        	}
        	
        	
        	//将新的购物车信息存回cookie
			//将对象转为字符串
			cartStr = convertObjToCartStr(cartObj);
			//存入cookie
			//document.cookie = "key=value"
			$.cookie("cart",cartStr,{expires : 7,path:"/"});
        	
        	//做一个飞入购物车的效果
        	var cloneImg = $(this).children("i").children("img").clone().css({width:50,height:50});
        	cloneImg.fly({
        		start : {
        			top : e.clientY,
        			left : e.clientX
        		},
        		end : {
        			top : $("#buy").offset().top - $(document).scrollTop(),
        			left : $("#buy").offset().left,
        			width : 0,
        			height : 0
        		},
        		autoPlay : true,	
        		onEnd : function(){
        			$("#buy").html(function(index,v){
        				var pattern = /(\d+)/;
        				var num = parseInt(v.match(pattern)[1]);
        				return (num + 1);
        			});
        			cloneImg.remove();
        		}
        	})
        	function convertCartStrToObj(cartStr){
				if(!cartStr){
					return {};
				}
				var goods = cartStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i ++){
					var data = goods[i].split(",");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					obj[data[0]] = {
						name : data[1],
						price : parseFloat(data[2]),
						num : parseInt(data[3]),
						src : data[4]
					}
				}
				return obj;
			}
			function convertObjToCartStr(obj){
					var cartStr = "";
					//遍历对象
					for(var id in obj){
						if(cartStr){
							cartStr += ":";
						}
						cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
					}
					return cartStr;
			}
			
			//加载购物车中的信息（使商品页与购物车页中的购物车数量同步）
			function loadCart(){
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					var cartObj = convertCartStrToObj(cartStr);
					//获取到购物车中所有商品的数量
					var total = 0;
					for(var id in cartObj){
						total += cartObj[id].num;
					}
					$("#buy").val("购物车(" + total + ")");
			}
        	
        	return false;
        	
        	
        	
        	
        	
        	
        	
        })
		}	
	}
})
                
