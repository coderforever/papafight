//Utils.checkToken();

(function($, undefined){
	var COUNT = 0;
	function init() {
		fix();
		loadResource();
	}
	function loadResource() {
		var resource = [
			'/images/role/1.png',
			'/images/role/2.png',
			'/images/role/3.png',
			'/images/role/4.png',
			'/images/role/5.png'
		];
		var len = resource.length;
		preload(resource, function(){
			var percent = $('#percent');
			var current = percent.html().split('/').shift() || 0;
			var num = Math.ceil(COUNT/len*100);
			var interId = setInterval(function(){
				if(current >= num) {
					clearInterval(interId);
					percent.html('(' + num + '/' + 100 + ')');
				}
				percent.html('(' + current + '/' + 100 + ')');
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
			$.get(arr[i], function(){
				COUNT++;
				callback();
			})
		}
	}
	$(init);
})(jQuery);