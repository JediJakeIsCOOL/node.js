var express = require('express')
var router = express.Router()


router.get('/home', function(req, res) {
    var data = req.app.get('appData')
    var pagePhotos = []
    data.fisharray.forEach(function(item) {
        pagePhotos.push(item.imgURL)
        
    });
    res.render('home', {
        image: pagePhotos,
        pageID : 'home'
    })

        
        
    });
    module.exports = router;