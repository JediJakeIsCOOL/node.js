var express = require('express');
var router = express.Router();
var feedbackData = require('../data/feedback.json')
var bodyParser = require('body-parser')
var fs = require('fs')


router.use(bodyParser.urlencoded({ extended: false}))
router.use(bodyParser.json())

router.get('/', function(req, res){
    
        res.json(feedbackData);
    })


router.post



   

module.exports = router;


//unshift selects last index of an array