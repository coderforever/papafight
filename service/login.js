/*
	登录相关的websocket服务
*/

module.exports = function() {     
	var login_socket=global.socket.of('/login').on('connection', function(socket) { 
   		socket.on('post token', function (data) {
    		login_socket.emit("login success",data);
  		});
   	});
}();