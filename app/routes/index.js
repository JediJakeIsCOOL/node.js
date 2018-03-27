var express = require('express');
var router = express.Router();


var pagePhotos = [];

router.get('/', function(req, res){
    
    var data = req.app.get('appData');
    data.speakers.forEach(function(item){
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    res.render('class', {
        pageTitle: 'Here is my variable',
        pageID: 'Veronica',
        artwork: pagePhotos

    });

    console.log(pagePhotos);
});

module.exports = router;