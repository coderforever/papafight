var express = require('express');
var router = express.Router();
var fs=require('fs');

router.get('/', function(req, res) {   
    res.render('index');
});

router.get('/mobile', function(req, res) {
    res.render('mobile/index');
});

router.get('/takephoto', function(req, res) {
    res.render('takephoto');
});

router.post('/upload', function(req, res){
    //接收前台POST过来的base64
    var imgData = req.body.imgData;
    //过滤data:URL
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile("out.png", dataBuffer, function(err) {
        if(err){
          res.send(err);
        }else{
          res.send("保存成功！");
        }
    });
});

module.exports = router;