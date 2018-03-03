//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"fly" : "jquery.fly.min",
		"cookie" : "jquery.cookie",
		"jQ" : "jQ"
	}
})
require(["jquery","fly","cookie","jQ"],function($,fly,cookie,jQ){
	$(function(){
		fly.fn();
		jQ.jQ();
	})
})