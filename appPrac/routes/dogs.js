var express = require('express')
var router = express.Router()

var name
router.get('/dogs', function(req, res) {
    res.render('layout',{
        pageTitle: 'whatever',
        pageID: 'yay',
        skills: 'haha',
    })

});

module.exports = router