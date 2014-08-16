$(function(){
	$("#match_btn").click(function(){
		var ssocket=new SonicSocket({alphabet:'0123456789'});
		var date=new Date();
		var msg=date.getSeconds()+""+date.getMilliseconds();
		ssocket.send(msg);
		$("#token").text(msg);
		$("#token_area").show();
	});
});