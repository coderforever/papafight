function Browser(ua) {
	this.ua = ua.replace(/\s*/g,'').toLowerCase();
}
module.exports = Browser;

Browser.prototype.isMobile = function() {
	var ua = this.ua;
	if(ua.indexOf('android') != -1 
		|| ua.indexOf('iphone') != -1 
		|| ua.indexOf('ipad') != -1
		|| ua.indexOf('ipod') != -1
		|| ua.indexOf('windowsphone') != -1
		|| ua.indexOf('meego') != -1 
		|| ua.indexOf('compatible') != -1
		|| ua.indexOf('playbook') != -1){

		return true;
	}
};

// Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19

// Mozilla/5.0 (Linux; U; Android 4.0.4; en-gb; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30

// Mozilla/5.0 (Linux; U; Android 2.2; en-gb; GT-P1000 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1

// Mozilla/5.0 (Android; Mobile; rv:14.0) Gecko/14.0 Firefox/14.0

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0

// Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20130331 Firefox/21.0

// Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19

// Mozilla/5.0 (Linux; Android 4.1.2; Nexus 7 Build/JZ054K) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19

// Mozilla/5.0 (compatible; WOW64; MSIE 10.0; Windows NT 6.2)

// Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+

// ozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13

// Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)

// ozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A101a Safari/419.3

// Googlebot/2.1 (+http://www.googlebot.com/bot.html)
// Windows Phone



