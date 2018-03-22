var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index', {
        pageTitle: 'Home',
        pageID: 'woah'})

        
        
    });
    module.exports = router;