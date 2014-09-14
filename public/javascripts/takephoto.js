$(function(){
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
         var cw = 500;  
         var ch = 500;  
         ctx.fillStyle="#ffffff";  
         ctx.fillRect(0, 0, cw, ch);  
         ctx.drawImage(video_element, 0, 0, cw,ch);  
         var imgData=canvas.toDataURL("image/png"); 
         console.log(imgData);
         $.post("upload",{'imgData':imgData});
         // document.location.href=imgData; 
	});
});
