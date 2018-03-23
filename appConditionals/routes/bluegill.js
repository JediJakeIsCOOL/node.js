var express = require('express')
var router = express.Router()
var data = req.app.get('appData')

router.get('/bluegill', function(req, res){
    var tosend ={}
    data.arrayfish.forEach(function(item){
        if (item.name === 'Bluegill'){
            tosend =item.imgURL;
        }
    })

    res.render('index', {
        image: tosend
    })
})

    
    module.exports = router