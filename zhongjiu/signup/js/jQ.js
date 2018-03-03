define(function(){
	return {
		jQ : function(){
			
			//  设置4个字随机数
			$(".random_").click(function(){
				var newStr = new Array(4);	
				var str = new String("1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM");
				var sum = '';
				for(var i = 0;i < newStr.length;i ++){
					newStr[i] = str.charAt(random(0,61));	
					sum += newStr[i];  //去除验证码之间的逗号
				}
				function random(min,max){
				if(min > max){
					var t = min;
					min = max;
					max = t;
					}
				return Math.floor(Math.random() * (max - min + 1)) + min;
				}
				$(this).html(sum);
			})
			
			//   点击input 出现提示框    点击失焦后
			$(".inp_1").each(function(index,value){
				$(".inp_1 input").click(function(){
					$(this).parent().parent().find(".dianji_").css("display","block");
				})
				$(".inp_1 input").blur(function(){
					$(this).parent().parent().find(".dianji_").css("display","none");
				})
			})
			
			//  cookie 获取数据并验证
			//  注册按钮添加点击事件;
			$("#userzhuce").click(function(){
				 var usn = $("#username").val();// 手机号
				 var pwd = $("#userpwd").val();// 密码
				 var cop = $("#copypwd").val();// 确认密码
				 
				 
				 //  账号不能为空
				 if(!usn){
				 	alert("手机号不能为空！")
				 	return;
				 }
				 
				 
				 // 检测密码是否相同
				 // 密码不能为空，密码规则
				 if(pwd !== cop){
				 	alert("两次输入的密码不相同，请重试!");
				 	return;
				 }
				 
				 
				 //  获取cookie中的用户信息
				 var users = $.cookie("geyongweiUsers") ? $.cookie("geyongweiUsers") : "";
				 
				 // 将字符串转为对象
				 users = convertStrToObj(users);
				 if(usn in users){
				 	alert("用户名已经被注册");
				 	return;
				 }else{
				 	
				 	//将用户信息对象转化回字符串，以便于设置cookie
				 	users[usn] = pwd;
				 	userStr = convertObjToStr(users);
				 	///设置用户信息cookie
				 	$.cookie("geyongweiUsers",userStr,{expires:7,path:"/"});
				 	console.log(decodeURIComponent(document.cookie))				
				 	alert("注册成功！");
				 	

					//转到登录页面
					location.href = "../enter/enter.html";

				 } 
		 	})
			
				//将字符串转为对象
				function convertStrToObj(str){
					if(!str){
						return {};
					}
					//假设不为空："test1,123:test2,abc:test3,888:李涛,123"
					var users = str.split(":"); //将字符串转为数组 ["test1,123","test2,abc","test3,888"]
					var obj = {};
					/*
					 * var obj = new Object();
					 * obj["name"] = "zhangsan";
					 * 
					 */
					//遍历数组
					for(var i = 0; i < users.length; i ++){
						//将字符串转为数组
						var userData = users[i].split(",");
						//["test1",123] ["test2","abc"] ["test3",888]
						obj[userData[0]] = userData[1];
						/*转为对象如下：
						 * obj = {
						 * 	test1 : 123,
						 *  test2 : abc,
						 *  test3 : 888
						 * }
						 */
					}
					return obj;
				}
				
				//将对象转为字符串
				function convertObjToStr(obj){
					////假设不为空："test1,123:test2,abc:test3,888:李涛,123"
					var str = "";
					for(var usn in obj){
						var pwd = obj[usn];
						if(str){
							//看是否是第一组用户名和密码，如果不是，先在前面添加一个：
							str += ":";
						}
						str += usn + ',' + pwd;
					}
					return str;
				}
			
			
			
			
			
			
			
			
			
		}
	}
})
