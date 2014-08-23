$(function(){
	var lastTime=null;
	var storage=new Storage();
	var token=storage.getItem("token");
	//没登陆，重定向
	if(token==null){
		document.location.href="/mobile";
	}
	//建立命名空间为playerselect的socket连接
	var socket=io.connect(document.domain+":8080/playerselect");
	//设备加速度
	window.addEventListener("devicemotion",function(evt){
		var x=evt.acceleration.x;
		var y=evt.acceleration.y;
		var z=evt.acceleration.z;
		$("#x").text(x);
		$("#y").text(y);
		$("#z").text(z);
		//作为进攻的话这些还不够，还要判断是否手机在平面上（beta值），否则有可能是防守！！
		if(Math.abs(z)>8){
			//动作间隔至少500ms
			if(lastTime==null || new Date().getTime()-lastTime>1000){
				var orientation=ORIENTATION.RIGHT;
				if(z<0){
					orientation=ORIENTATION.LEFT;
				}
				//发送加速度
				socket.emit("post playerselect",{token:token,orientation:orientation});
				lastTime=new Date().getTime();
			}
		}
	},true);
});