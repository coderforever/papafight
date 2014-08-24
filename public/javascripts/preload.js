Utils.checkToken();

$(function(){
	//建立命名空间为login的websocket连接
	var socket=io.connect(document.domain+":8080/login");
	var storage=new Storage();
	var token=storage.getItem("token");
	document.location.href="/playerselect";
});