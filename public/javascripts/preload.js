Utils.checkToken();
(function($, undefined){
	//建立命名空间为playerselect的socket连接
	var socket=io.connect(document.domain+":8080/playerselect");
	var storage=new Storage();
	var token=storage.getItem("token");
	var COUNT = 0;
	function init() {
		fix();
		loadResource();
	}
	function loadResource() {
		var resource = [];
		for(var i in RESOURCE){
			if( $.isArray(RESOURCE[i]) ){
				resource = resource.concat(RESOURCE[i]);
			}
		}
		var len = resource.length;
		preload(resource, function(){
			var percent = $('#percent');
			var current = percent.html().split('/').shift() || 0;
			var num = Math.ceil(COUNT/len*100);
			var interId = setInterval(function(){
				if(current >= num) {
					clearInterval(interId);
					percent.html(+ num + '/' + 100);
				}
				percent.html(current + '/' + 100);
				if(current >= 100){
					setTimeout(function(){
						socket.emit("post preload",{token:token});
						document.location.href="/playerselect";
					},3000);
				}
				current++;
			},10);
		});
	}
	function fix(){
		var height = $(window).height();
		$('#container').css({
			'margin-top': height/2 - 30
		});
	}
	function preload(arr, callback) {
		if(!$.isArray(arr)) {
			return;
		}
		var len = arr.length;
		for(var i = 0; i < len; i++) {
			$.get(arr[i]).done(function() {
				COUNT++;
				callback();
			});
		}
	}
	$(init);
})(jQuery);
