var express = require('express')
var router = express.Router()

router.get('/cats_and_dogs', function(req, res) {
    var age = req.query.age
    var name = req.query.name
    
    res.render('layout',{
        pageTitle: 'Jake',
        pageID: 'woah',
        skills: 'pwefwefwefwebif',
        age: age
    })

    });

module.exports = router