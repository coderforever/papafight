module.exports = function() {     
	global.socket.of('/login').on('connection', function(socket) { 
   		socket.on('post token', function (data) {
    		console.log(data);
  		});
   	});
}();