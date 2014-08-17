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
	socket.on("login success",function(data){
		console.log(data);
	});
});