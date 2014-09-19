/*
	判断手势相关的websocket服务
*/

module.exports = function() {
	var ACTION = {
		a: "attack",
		d: "defend",
		n: "nodefend",
		l: "escapeLeft",
		r: "escapeRight"
	};
	var IS_MOVE = false;
	var PLAYERS = {};
	var fight_socket=global.socket.of('/fight').on('connection', function(socket) { 
   		socket.on('attack', function(data){
   			if(!!IS_MOVE) {
	   			return;
	   		}
	        var operator = data.operator;
	        var target = data.target;
	        PLAYERS[operator] = PLAYERS[operator] || {};
	   		PLAYERS[operator]['target'] = target;
	   		PLAYERS[operator]['status'] = ACTION.a;

	   		fight_socket.emit('attack', {
   				'operator': operator,
	   			'target': target
   			});

	   		var result;
	   		setTimeout(function() {
	   			
	   			if(!!PLAYERS[target] && PLAYERS[target].status == ACTION.d){
	   				//发起一次攻击，被防御（有效）
	   				result = 1;
	   			} else if(!!PLAYERS[target] && PLAYERS[target].status == ACTION.l){
	   				//发起一次攻击，左侧闪躲（有效）
	   				result = 2;
	   			} else if(!!PLAYERS[target] && PLAYERS[target].status == ACTION.r) {
	   				//发起一次攻击，右侧闪躲（有效）
	   				result = 3;
	   			} else {
	   				//发起一次攻击，对手没有防守
	   				result = 4;
	   			}
	   			fight_socket.emit('attack result',{
		   			'operator': operator,
		   			'target': target,
		   			'result': result
		   		});

	   		},800);
	   		console.log(PLAYERS);
   		});
   		socket.on('defend', function(data){
   			if(!!IS_MOVE) {
	   			return;
	   		}
	        var operator = data.operator;
	        var target = data.target;
	        PLAYERS[operator] = PLAYERS[operator] || {};
	   		PLAYERS[operator]['target'] = target;
	   		if(PLAYERS[operator]['status'] != ACTION.d){
		   		PLAYERS[operator]['status'] = ACTION.d;

		   		fight_socket.emit('defend', {
	   				'operator': operator,
		   			'target': target
	   			});
		   		console.log(PLAYERS);
	   		}
   		});
   		socket.on('nodefend', function(data){
   			if(!!IS_MOVE) {
	   			return;
	   		}
	        var operator = data.operator;
	        var target = data.target;
	        PLAYERS[operator] = PLAYERS[operator] || {};
	   		PLAYERS[operator]['target'] = target;
	   		if(PLAYERS[operator]['status'] != ACTION.n){
		   		PLAYERS[operator]['status'] = ACTION.n;

		   		fight_socket.emit('nodefend', {
	   				'operator': operator,
		   			'target': target
	   			});
		   		console.log(PLAYERS);
	   		}
   		});
   		socket.on('escapeLeft', function(data){
   			if(!!IS_MOVE) {
	   			return;
	   		}
   			IS_MOVE = true;
   			var operator = data.operator;
	        var target = data.target;
	        PLAYERS[operator] = PLAYERS[operator] || {};
	   		PLAYERS[operator]['target'] = target;
	   		PLAYERS[operator]['status'] = ACTION.l;

	   		fight_socket.emit('escapeLeft', {
   				'operator': operator,
	   			'target': target
   			});
   			setTimeout(function() {
   				PLAYERS[operator]['status'] = ACTION.n;
   				IS_MOVE = false;
   			}, 800);
			console.log(PLAYERS);
   		});
   		socket.on('escapeRight', function(data){
   			if(!!IS_MOVE) {
	   			return;
	   		}
   			IS_MOVE = true;
	        var operator = data.operator;
	        var target = data.target;
	        PLAYERS[operator] = PLAYERS[operator] || {};
	   		PLAYERS[operator]['target'] = target;
	   		PLAYERS[operator]['status'] = ACTION.r;

	   		fight_socket.emit('escapeRight', {
   				'operator': operator,
	   			'target': target
   			});
   			setTimeout(function() {
   				PLAYERS[operator]['status'] = ACTION.n;
   				IS_MOVE = false;
   			}, 800);
	   		console.log(PLAYERS);
   		});
   	});
}();