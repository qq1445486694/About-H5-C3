function drag (id) {
	var oDiv=document.getElementById(id);
	oDiv.onmousedown=function (ev) {
		var oEvent=ev||event;
		var disX=oEvent.clientX-oDiv.offsetLeft;
		var disY=oEvent.clientY-oDiv.offsetTop;
		document.onmousemove=function (ev) {
			var oEvent=ev||event;
			oDiv.style.left=oEvent.clientX-disX+getstyle(id,"width")/2+'px';
			oDiv.style.top=oEvent.clientY-disY+getstyle(id,"height")/2+'px';
		}
		document.onmouseup=function (argument) {
			document.onmousemove=null;
			document.onmouseup=null;
		}
	}
}
function getstyle (id,attr) {
var oDiv=document.getElementById(id);	
	if(oDiv.currentStyle){
		return parseInt(oDiv.currentStyle[attr])
		}else{
		return parseInt(getComputedStyle(oDiv,false)[attr])
		}
	}
// drag('div1')