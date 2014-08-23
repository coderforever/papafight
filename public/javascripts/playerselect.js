$(function(){
	//建立命名空间为login的websocket连接
	var socket=io.connect(document.domain+":8080/orientation");
	socket.on("orientation success",function(data){
		$("#content_1").html("<br/>alpha:"+parseInt(data.alpha)+", beta:"+parseInt(data.beta)+", gamma:"+parseInt(data.gamma));
	});
	socket.on("motion success",function(data){
		console.log(data);
		console.log($("#content_1").html());
		$("#content_2").html("<br/>x:"+data.x+", y:"+data.y+", z:"+data.z);
	});
});