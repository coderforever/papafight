Utils.checkToken();

$(function(){
	//获取token
	var storage=new Storage();
	var token=storage.getItem("token");
	//获取视频流
	var video_element = document.getElementById('video');  
	if(navigator.webkitGetUserMedia) { 
       navigator.webkitGetUserMedia({video:true},success, error);  
	}  
	function success(stream) {  
       video_element.src=window.webkitURL.createObjectURL(stream);
	}  
	function error(data){
		console.log(data);
	}
	//拍照
	$("#takephoto").click(function(){
		var canvas =document.getElementById('canvas');  
         var ctx = canvas.getContext('2d');  
         ctx.drawImage(video_element, 0, 0);  
         var imgData=canvas.toDataURL("image/png"); 
         // console.log(imgData.length);
         $.post("upload",{'imgData':imgData,'token':token});
         // document.location.href=imgData; 
	});
});
