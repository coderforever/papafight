var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {   
    res.render('waitplayer');
});

router.get('/mobile', function(req, res) {
    res.render('mobile/waitplayer');
});

module.exports = router;