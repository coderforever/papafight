/*
	判断手势相关的websocket服务
*/

module.exports = function() {
	var ACTION = {
		a: "attack",
		d: "defend",
		m: "nodefend",
		l: "escapeLeft",
		r: "escapeRight"
	}; 
	var RESULTS = {
		'invalid': 'invalid',
		'valid': 'valid'
	};
	var PLAYERS = {};
	var fight_socket=global.socket.of('/fight').on('connection', function(socket) { 
   		socket.on('attack', function(data){
   			console.log(data)
	        var operator = data.operator;
	        var target = data.target;
	        PLAYERS[operator] = {};
	   		PLAYERS[operator]['target'] = target;
	   		PLAYERS[operator]['status'] = ACTION.a;

	   		fight_socket.emit('attack', {
   				'operator': operator,
	   			'target': target
   			});

	   		var result;
	   		setTimeout(function() {
	   			
	   			if(!!PLAYERS[target] && PLAYERS[target].status == ACTION.defend){
	   				result = RESULTS['valid'];
	   			} else {
	   				result = RESULTS['invalid'];
	   			}
	   			fight_socket.emit('attack result',{
		   			'operator': operator,
		   			'target': target,
		   			'result': result
		   		});
	   		},400);
   		});
   		socket.on('defend', function(data){
	        var key = data.operator;
	        var value = data.target;
	        
	   		ACTION[key] = value;

   		});
   		socket.on('nodefend', function(data){
	        var key = data.operator;
	        var value = data.target;
	        
	   		ACTION[key] = value;

   		});
   		socket.on('escapeLeft', function(data){
	        var key = data.operator;
	        var value = data.target;
	        
	   		ACTION[key] = value;

   		});
   		socket.on('escapeRight', function(data){
	        var key = data.operator;
	        var value = data.target;
	        
	   		ACTION[key] = value;

   		});
   	});
}();