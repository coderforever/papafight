module.exports = function() {     
	global.socket.of('/login').on('connection', function(socket) { 
   		socket.on('post token', function (data) {
    		socket.emit("login success",data);
  		});
   	});
}();