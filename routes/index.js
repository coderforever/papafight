var express = require('express');
var router = express.Router();
var Browser = require('../util/browser');

/* GET home page. */
router.get('/', function(req, res) {   
	var ua = res.req.headers['user-agent'];
	var browser = new Browser(ua);
    if (browser.isMobile()) {
        res.redirect('/mobile');
    }
    res.render('index')
    //console.log(res.req.headers['user-agent']);
});

router.get('/mobile', function(req, res) {
	var ua = res.req.headers['user-agent'];
	var browser = new Browser(ua);
    if (!browser.isMobile()) {
        res.redirect('/');
    }
    res.render('mobile/index')
});

module.exports = router;