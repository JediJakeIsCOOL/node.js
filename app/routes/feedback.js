var express = require('express');
var router = express.Router();




router.get('/feedback', function(req, res){
    

    res.render('class', {
        pageTitle: 'Feedback form',
        pageID: 'Form',
        

    });

   
});

module.exports = router;