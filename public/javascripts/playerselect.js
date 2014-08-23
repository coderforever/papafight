$(function(){
	//动画效果
	$('#gla_box>ul').roundabout({
		minOpacity:1,
		btnNext: ".next",
		duration: 1000,
		reflect: true,
		btnPrev: '.prev',
		tilt:0,
		shape: 'figure8'
	});
	var storage=new Storage();
	var token=storage.getItem("token");
	//没登陆，重定向
	if(token==null){
		document.location.href="/";
	}
	//建立命名空间为playerselect的websocket连接
	var socket=io.connect(document.domain+":8080/playerselect");
	socket.on("playerselect success",function(data){
		if(data.token==token){
			if(data.orientation==ORIENTATION.RIGHT){
				$("#gla_box .next").click();
			}
			else if(data.orientation==ORIENTATION.LEFT){
				$("#gla_box .prev").click();
			}
		}
	});
});