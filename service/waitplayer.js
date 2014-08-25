/*
	等待玩家相关的websocket服务
*/

module.exports = function() {   
	var players=[];

	var wait_socket=global.socket.of('/waitplayer').on('connection', function(socket) { 
   		socket.on('wait player', function (data) {
   			console.log(data+"------------------------");
    		var token=data["token"];
    		var role=data["role"];
    		if(players.length==0){
    			players.push({token:token,role:role});
    		}
    		else{
    			var opponent=players.pop();
    			console.log(opponent);
    			var anotherToken=opponent.token;
    			var anotherRole=opponent.role;
    			wait_socket.emit('wait success',{token1:token,token2:anotherToken,role1:role,role2:anotherRole});
    		}
  		});
   	});
}();