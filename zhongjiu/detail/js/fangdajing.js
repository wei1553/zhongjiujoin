define(function(){
	return{
		fangda : function(){
			var oMu = document.getElementById("left_mu_");
			var oZhao = document.getElementById("left_datu_")
			var oDiv = document.getElementById("left_datu_zhao_")
			var oFang = document.getElementById("left_datu_right_")
			var oImg1 = oFang.getElementsByClassName("active_")[0]
			var oImg2 = oFang.getElementsByClassName("active_")[1]
			var oImg3 = oFang.getElementsByClassName("active_")[2]
			var oImg4 = oFang.getElementsByClassName("active_")[3]
			
			oZhao.onmouseover = function(){
				oMu.style.display = "block";
				oFang.style.display = "block"
			}
			oDiv.onmouseover = function(){
				oMu.style.display = "block";
				oFang.style.display = "block";
			}
			oZhao.onmouseout = function(){
				oMu.style.display = "none";
				oFang.style.display = "none";
			}
			oDiv.onmouseout = function(){
				oMu.style.display = "none";
				oFang.style.display = "none";
			}
			oZhao.onmousemove =function(evt){
				var e = evt || window.event;
				var disX = e.pageX - oZhao.offsetLeft - oDiv.offsetLeft - oMu.offsetWidth/2;
				var disY = e.pageY - oZhao.offsetTop - oDiv.offsetTop - oMu.offsetHeight/2;
				// 设置边界
				if(disX <= 0){
					disX = 0;
				}else if(disX >= oDiv.offsetWidth - oMu.offsetWidth){
					disX = oDiv.offsetWidth - oMu.offsetWidth;
				}
				if(disY <= 0){
					disY = 0;
				}else if(disY >= oDiv.offsetHeight - oMu.offsetHeight){
					disY = oDiv.offsetHeight - oMu.offsetHeight;
				}
				oMu.style.left = disX + "px";
				oMu.style.top = disY + "px";
				
				// 设置比例 放大
				var percentX = disX / (oDiv.offsetWidth - oMu.offsetWidth);
				var percentY = disY / (oDiv.offsetHeight - oMu.offsetHeight);
				//大图的left值 = 移动比例 * （大图的宽度 - 大图所在Div的宽度）（大图所能移动的距离）
				oImg1.style.left = -percentX * (oImg1.offsetWidth - oFang.offsetWidth) + 'px';
				oImg1.style.top = -percentY * (oImg1.offsetHeight - oFang.offsetHeight) + 'px';
				oImg2.style.left = -percentX * (oImg2.offsetWidth - oFang.offsetWidth) + 'px';
				oImg2.style.top = -percentY * (oImg2.offsetHeight - oFang.offsetHeight) + 'px';
				oImg3.style.left = -percentX * (oImg3.offsetWidth - oFang.offsetWidth) + 'px';
				oImg3.style.top = -percentY * (oImg3.offsetHeight - oFang.offsetHeight) + 'px';
				oImg4.style.left = -percentX * (oImg4.offsetWidth - oFang.offsetWidth) + 'px';
				oImg4.style.top = -percentY * (oImg4.offsetHeight - oFang.offsetHeight) + 'px';
			}
			
		}
	}
})