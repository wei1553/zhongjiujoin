//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"jQ" : "jQ",
		"slider" : "slider",
		"login" : "login",
		"login1" : "login1",
		"login2" : "login2",
		"login3" : "login3",
		"login_bottom" : "login_bottom"
	}
})
require(["jquery","cookie","jQ","slider","login","login1","login2","login3","login_bottom"],function($,cookie,jQ,slider,login,login1,login2,login3,login_bottom){
	$(function(){
		jQ.jQ();
		new slider.Slider("slide1");
		login.login();
		login1.login1();
		login2.login2();
		login3.login3();
		login_bottom.login_bottom();
	})
})