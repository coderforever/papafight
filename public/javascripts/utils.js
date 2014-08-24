var Utils={};

Utils.checkToken=function(){
	var storage=new Storage();
	var token=storage.getItem("token");
	//没登陆，重定向
	if(token==null){
		document.location.href="/";
	}
}
