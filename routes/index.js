var express = require('express');
var router = express.Router();
var Browser = require('../util/browser');

/* GET home page. */
router.get('/', function(req, res) {
    var ua = res.req.headers['user-agent'];
    var browser = new Browser(ua);
    if (browser.isMobile()) {
        res.render('mobile/index');
    } else {
        res.render('index');
    }
    //console.log(res.req.headers['user-agent']);
});

router.get('/mobile', function(req, res) {
    res.render('mobile/index');
});

module.exports = router;