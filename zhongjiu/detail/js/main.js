//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"jQ" : "jQ",
		"fangda" : "fangdajing"
	}		
})
require(["jquery","cookie","jQ","fangda"],function($,cookie,jQ,fangda){
	$(function(){
		jQ.jQ();
		fangda.fangda();
	})
})