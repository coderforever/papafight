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
		socket.emmit("post token", {'token': '121212121'});
	});
	//等待服务器端的通知，当收到login success，说明电脑和手机已经匹配完毕，可以进入下个页面
	socket.on("login success",function(data){
		console.log(data);
		//可能会有其他玩家也有发送，所以要判断令牌是否相等
		if(data["token"]==$("#token").text()){
			//存储令牌，便于以后使用
			var storage=new Storage();
			storage.setItem("token",data["token"]);
			document.location.href="mobile/playerselect";
		}
	});
});