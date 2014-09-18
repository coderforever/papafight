/*
	等待玩家相关的websocket服务
*/

module.exports = function() {   
	var players=[];

	var wait_socket=global.socket.of('/waitplayer').on('connection', function(socket) { 
   		socket.on('wait player', function (data) {
    		var token=data["token"];
    		var role=data["role"];
    		if(players.length==0){
    			players.push({token:token,role:role});
    		}
    		else{
    			var opponent=players[players.length-1];
    			var anotherToken=opponent.token;
    			var anotherRole=opponent.role;
          if(anotherToken!=token){
            players.pop();
            wait_socket.emit('wait success',{token1:token,token2:anotherToken,role1:role,role2:anotherRole});            
          }
    		}
  		});
      socket.on('enter fight page', function(data){
        wait_socket.emit('begin fight',data);
      });
   	});
}();