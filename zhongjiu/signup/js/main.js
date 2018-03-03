//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"jQ" : "jQ"
	}
})
require(["jquery","cookie","jQ"],function($,cookie,jQ){
	$(function(){
		jQ.jQ();
	})
})