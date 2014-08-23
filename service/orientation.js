/*
	判断手势相关的websocket服务
*/

module.exports = function() {    
	var playerselect_socket=global.socket.of('/playerselect').on('connection', function(socket) { 
   		socket.on('post playerselect', function (data) {
    		playerselect_socket.emit('playerselect success',data);
  		});
   	});
}();