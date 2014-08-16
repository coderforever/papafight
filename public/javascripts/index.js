//判断手机访问还是电脑访问，从而重定向到不同的页面      
var system ={      
    win : false,      
    mac : false,      
    xll : false    
};    
  
//检测平台       
var p = navigator.platform;    
system.win = p.indexOf("Win") == 0;      
system.mac = p.indexOf("Mac") == 0;      
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);      
if(!system.win&&!system.mac&&!system.xll){//转向手机登陆页面      
    window.location.href="/mobile";    
}    

$(function(){
	var sserver=new SonicServer({alphabet:'0123456789'});
	var socket=io.connect(document.domain+":8080/login");
	$("#find_phone").click(function(){
		if($(this).hasClass("disable")){
			return false;
		}
		$(this).addClass("disable");
		sserver.on("message",function(message){
			$("#token").text(message);
			$("#find_phone").removeClass("disable");
			$("#token_area").show();
		});
		sserver.start();
	});
	$("#token_no").click(function(){
		sserver.stop();
		$("#token_area").hide();
		$("#find_phone").click();
	});
	$("#token_yes").click(function(){
		socket.emit("post token",{token:$("#token").text()});
	});
});