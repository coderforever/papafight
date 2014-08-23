$(function(){
	var lastTime=null;
	//建立命名空间为orientation的socket连接
	var socket=io.connect(document.domain+":8080/orientation");
	//设备方向
	window.addEventListener("deviceorientation",function(evt){
		document.getElementById("alpha").innerHTML=evt.alpha;
        document.getElementById("beta").innerHTML=evt.beta;
		document.getElementById("gamma").innerHTML=evt.gamma;
		//规律！！！！！！！！！！！！！
		//beta和gamma的绝对值趋近于0--手机屏幕向上；
		//beta和gamma的绝对值一个趋近于0，一个趋近于180,--手机屏幕向下；
		//gamma的绝对值趋近于90，beta的绝对值要么趋近于0，要么趋近于180--左右摆手
		//发送方向
		socket.emit("post orientation",{alpha:evt.alpha,beta:evt.beta,gamma:evt.gamma});
	},true);
	//设备加速度
	window.addEventListener("devicemotion",function(evt){
		var x=evt.acceleration.x;
		var y=evt.acceleration.y;
		var z=evt.acceleration.z;
		document.getElementById("x").innerHTML=x;
		document.getElementById("y").innerHTML=y;
		document.getElementById("z").innerHTML=z;
		//作为进攻的话这些还不够，还要判断是否手机在平面上（beta值），否则有可能是防守！！
		if((Math.abs(x)>8 || Math.abs(y)>8) && Math.abs(z)<8){
			if(lastTime==null || new Date().getTime()-lastTime>500){
				document.getElementById("count").innerHTML=parseInt(document.getElementById("count").innerHTML)+1;
				lastTime=new Date().getTime();
				//发送加速度
				socket.emit("post motion",{x:x,y:y,z:z});
			}
		}
	},true);
});