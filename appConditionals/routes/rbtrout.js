var express = require('express')
var router = express.Router()
// var data = require('./data/data.json')

router.get('/rainbowtrout', function(req, res){
    var data = req.app.get('appData');
    var tosend ={};
    data.fisharray.forEach(function(item){
        if (item.name === 'Rainbow Trout'){
            tosend =item.imgURL;
            namesend = item.name
            describesend = item.description
        }
    })
   
    res.render('index', {
        image : tosend,
        header : namesend,
        describe : describesend
    })
})

    
    module.exports = router