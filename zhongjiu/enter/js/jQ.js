define(function(){
	return {
		jQ : function(){
			
			//点击切换注册面
			$(".li2").click(function(){
				$(this).children("a").css({"color":"red","font-weight":600})
				$(".li1").children("a").css({"color":"#313840","font-weight":500})
				$(".zhu_").css("display","block");
				$(".zhu").css("display","none");
			})
			$(".li1").click(function(){
				$(this).children("a").css({"color":"red","font-weight":600})
				$(".li2").children("a").css({"color":"#313840","font-weight":500})
				$(".zhu_").css("display","none");
				$(".zhu").css("display","block");
			})
			//  点击是否为指定内容
			
			//  点击登录登录到主页
			$("#login").click(function(){
				// 获取用户输入的用户名和密码
				var usn = $("#username").val();
				var pwd = $("#password").val();
			
			
			//校验用户名和密码是否正确
			//获取到cookie中的用户信息
			var users = $.cookie("geyongweiUsers") ? $.cookie("geyongweiUsers") : "";
			// 将字符串转为对象
			users = convertStrToObj(users);
			
			if(users[usn] == pwd){
				//登录成功
				$.cookie("loginedUsers",usn,{expires:7,path:"/"});
				console.log("登录成功!");
				location.href = "../main.html";
			}else{
				//登录失败
				alert("用户名和密码不匹配，请确认后重试！");
			}
		})	
			//将字符串转为对象
			function convertStrToObj(str){
				if(!str){ //如果是空字符串
					return {}; //返回空对象
				}
				var users = str.split(":");
				var obj = {};
				for(var i = 0; i < users.length; i ++){
					var userData = users[i].split(",");
					obj[userData[0]] = userData[1];
				}
				return obj;
			}
			
			//将对象转为字符串
			function convertObjToStr(obj){
				var str = "";
				//遍历对象
				for(var usn in obj){
					var pwd = obj[usn];
					if(str){
						str += ":";
					}
					str += usn + ',' + pwd;
				}
				return str;
			}
			
			
			
			
			
			
			
			
			
			
		}
	}
})
                
