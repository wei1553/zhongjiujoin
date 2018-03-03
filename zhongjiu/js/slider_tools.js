define(function(){
	
	//获取指定id的对象
	function $(id){
		return document.getElementById(id);
	}
	//获取指定元素名称的对象集
	function $get(containerId,tagName){
		if(typeof containerId == "string" && $(containerId)){
			return $(containerId).getElementsByTagName(tagName);
		}
		else if(typeof containerId == "object"){
			return containerId.getElementsByTagName(tagName);
		}else{
			throw("你写的第一个参数不是一个ID");
		}
	}
	//创建元素对象
	function $create(TagName,attr){
		var dom = document.createElement(TagName);
		for(var p in attr){
			dom[p] = attr[p];
		}
		return dom;
	}	
	return {
		$ : $,
		$get : $get,
		$create : $create
	}
})	
