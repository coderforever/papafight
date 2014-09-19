/*
	判断手势相关的websocket服务
*/

module.exports = function() {
	var ACTION = {
		a = "attack";
		d = "defend";
		m = "nodefend";
		l = "escapeLeft";
		r = "escapeRight";
	}; 
	var RESULTS = {
		'invalid': 'invalid',
		'valid': 'valid'
	}
	var PLAYERS = {

	};
	var playerselect_socket=global.socket.of('/fight').on('connection', function(socket) { 
   		socket.on('attack', function(data){
	        var token = data.operator;
	        var defender = data.defender;

	   		PLAYERS[token]['defender'] = defender;
	   		PLAYERS[token]['status'] = ACTION.a;
	   		var result;
	   		setTimeout(function() {
	   			
	   			if(!!PLAYERS[defender].status && PLAYERS[defender].status == ACTION.defend){
	   				result = RESULTS[valid];
	   			} else {
	   				result = RESULTS[invalid];
	   			}
	   			playerselect_socket.emmit('attack result',{
		   			'operator': token,
		   			'defender': defender,
		   			'result': result
		   		});

	   		},300);
   		});
   		socket.on('defend', function(data){
	        var key = data.operator;
	        var value = data.data.defender;
	        
	   		STATUS[key] = value;

   		});
   		socket.on('nodefend', function(data){
	        var key = data.operator;
	        var value = data.data.defender;
	        
	   		STATUS[key] = value;

   		});
   		socket.on('escapeLeft', function(data){
	        var key = data.operator;
	        var value = data.data.defender;
	        
	   		STATUS[key] = value;

   		});
   		socket.on('escapeRight', function(data){
	        var key = data.operator;
	        var value = data.data.defender;
	        
	   		STATUS[key] = value;

   		});
   	});
}();