Utils.checkToken();

$(function(){
	var isStart=false;
	//操作storage
	var storage=new Storage();
	var my_token=storage.getItem("token");
	var my_role=storage.getItem("role");
	//创建waitplayer命名空间的socket
	var socket=io.connect(document.domain+":8080/waitplayer");
	//获取双方token
	socket.on("wait success",function(data){
		if(data["token1"]==my_token){
			storage.setItem("opponent_token",data["token2"]);
			storage.setItem("opponent_role",data["role2"]);
		}
		else if(data["token2"]==my_token){
			storage.setItem("opponent_token",data["token1"]);
			storage.setItem("opponent_role",data["role1"]);
		}
	});
	//电脑端已经进入fight页面
	socket.on("begin fight",function(data){
		if(data["token"]==my_token){
			isStart=true;
		}
	});
	// var fight_socket=io.connect(document.domain+":8080/fight");
});