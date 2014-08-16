$(function(){
	var socket=io.connect(document.domain+":8080/login");
	$("#match_btn").click(function(){
		var ssocket=new SonicSocket({alphabet:'0123456789'});
		var date=new Date();
		var msg=date.getSeconds()+""+date.getMilliseconds();
		ssocket.send(msg);
		$("#token").text(msg);
		$("#token_area").show();
	});
	socket.on("login success",function(data){
		$("#token").text("shoudale:"+data);
	});
});