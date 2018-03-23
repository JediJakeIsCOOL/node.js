var express = require('express')
var router = express.Router()

var data = req.app.get('appData')
router.get('/', function(req, res) {
    data.speakers.forEach(function(item) {
        pagePhotos = pagePhotos.concact(item.artwork)
        
    });
    res.render('index', {
        pageTitle: 'Home',
        pageID: 'woah',
        artwork: pagePhotos,
    })

        
        
    });
    module.exports = router;