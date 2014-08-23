$(function(){
	var storage=new Storage();
	var token=storage.getItem("token");
	//建立命名空间为playerselect的websocket连接
	var socket=io.connect(document.domain+":8080/playerselect");
	socket.on("playerselect success",function(data){
		console.log(data);
		if(data.token==token){
			$("#content").html(token+"<br/>"+data.orientation);
		}
	});
});