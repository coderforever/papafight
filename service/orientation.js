/*
	判断手势相关的websocket服务
*/

module.exports = function() {    
	var orientation_socket=global.socket.of('/orientation').on('connection', function(socket) { 
   		socket.on('post orientation', function (data) {
    		orientation_socket.emit('orientation success',data);
  		});
  		socket.on('post motion', function(data){
  			console.log(data);
   			orientation_socket.emit('motion success',data);
   		});
   	});
}();