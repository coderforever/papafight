// Utils.checkToken();

$(function(){
	//操作storage
	var storage=new Storage();
	var my_token=storage.getItem("token");
	var my_role=storage.getItem("role");
	//倒计时,告诉手机端，电脑端已经进入fight页面
	setTimeout(function(){
		var socket=io.connect(document.domain+":8080/waitplayer");
		socket.emit("enter fight page",{token:my_token});
	},3000);
	
	//链接fight的socket
	var fight_socket=io.connect(document.domain+":8080/fight");
	fight_socket.on("attack",function(data){
		console.log("attack");
		console.log(data);
	});
	fight_socket.on("attack result",function(data){
		console.log("attack result");
		console.log(data);
	});
	fight_socket.on("defend",function(data){
		console.log("defend");
		console.log(data);
	});
	fight_socket.on("nodefend",function(data){
		console.log("nodefend");
		// console.log(data);
	});
	fight_socket.on("escapeLeft",function(data){
		console.log("escapeLeft");
		console.log(data);
	});
	fight_socket.on("escapeRight",function(data){
		console.log("escapeRight");
		console.log(data);
	});
});