$(function(){
	//建立命名空间为login的socket连接
	var socket=io.connect(document.domain+":8080/login");
	//匹配电脑
	$("#match_btn").click(function(){
		//创建超声波
		var ssocket=new SonicSocket({alphabet:'0123456789'});
		var date=new Date();
		//发送令牌声波
		var msg=date.getSeconds()+""+date.getMilliseconds();
		ssocket.send(msg);
		//令牌显示在屏幕上，以便和电脑端对比
		$("#token").text(msg);
		$("#token_area").show();
	});
	//等待服务器端的通知，当收到login success，说明电脑和手机已经匹配完毕，可以进入下个页面
	socket.on("login success",function(data){
		console.log(data);
	});
});