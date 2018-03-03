define(function(){		
	function Slider(id){
		this.ele = $id(id);
		this.oUllis = $ByTagName($ByTagName($id(id),"ul")[0],"li");
		this.num = this.oUllis.length;
		this.ollis = this.createEle()
		this.nowIndex = 0;
		this.init();
		this.myEvent();
		this.autoPlay();
	}
	Slider.prototype = {
		createEle : function(){
			// 创建ol
			var ol = $create("ol");
			var arr = [];
			for(var i = 0;i <this.num;i ++){
				var li = $create("li");
				ol.appendChild(li);
				arr.push(li);
			}
			this.ele.appendChild(ol);
			return arr;
		},
		init : function(){
			for(var i = 0;i < this.num;i ++){
				this.oUllis[i].style.display = "none";
				this.ollis[i].style.background = "white";
				this.ollis[i].style.border = "none";
			}
			this.oUllis[this.nowIndex].style.display = "block";
			this.ollis[this.nowIndex].style.background = "transparent";
			this.ollis[this.nowIndex].style.border = "4px solid #fff";
		},
		myEvent : function(){
			var that = this;
			// 划入ol时
			for(var i = 0;i <this.num;i ++){
				this.ollis[i].index = i;
				this.ollis[i].onmouseenter = function(){
					that.nowIndex = this.index;
					that.init();
				}
			}
		},
		autoPlay : function(){
			var that = this;
			var timer = setInterval(function(){
				that.nowIndex ++;
				if(that.nowIndex >that.num -1){
					that.nowIndex = 0;
				}
				that.init();
			},4000)
			this.ele.onmouseenter = function(){
				clearInterval(that.timer);
			}
			this.ele.onmouseleave = function(){
				autoPlay();
			}
		}
	}	
			
	
				// 工具箱
				// 获取id
	function $id(id){
		return document.getElementById(id);
	}
	// 获取tagname
	function $ByTagName(target,tagName){
		if(typeof target == "string" && $id(target)){
			return $id(target).getElementsByTagName(tagName);
		}else if(typeof target == "object"){
			return target.getElementsByTagName(tagName);
		}
	}
	// 创建元素
	function $create(tagName){
		return document.createElement(tagName);
	}
	return {
		Slider : Slider
	}
})
