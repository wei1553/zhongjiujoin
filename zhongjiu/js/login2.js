define(function(){
	return {
		login2 : function(){
			var oDiv = document.getElementById("slid_2_2")
			var oUl = document.getElementById("slid_zhao_2")
			var oAl = document.getElementById("pret_2")
			var oAr = document.getElementById("next_2")
			var oLi = oUl.getElementsByTagName("ul")
			var timer  = null;
			var speed = 100;
			//oUl.innerHTML += oUl.innerHTML ;
			//初始化ul的宽度
			oUl.style.width = oLi[0].offsetWidth*oLi.length + "px"
			
		function move(){
				
				if(oUl.offsetLeft < -oUl.offsetWidth/2){
					oUl.style.left = 0
				}else if(oUl.offsetLeft > 0){
					oUl.style.left = -oUl.offsetWidth/2 + "px"
					
				}
				oUl.style.left =  oUl.offsetLeft + speed + "px"
			}
			
			
			oAl.onclick = function(){
				speed = -188;
				move();
			}
			oAr.onclick = function(){
				speed = 188;
				move();
			}
			
		}
	}	
})				
			