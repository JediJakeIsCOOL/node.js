var express = require('express')
var router = express.Router()
var bodyparser = require('body-parser')
var fs = require('fs')
var feedbackData = require('../data/feedback.json')

router.get('/api', function(req, res){
    res.json(feedbackData);
})

router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false}))

router.post('/api', function(req, res){
    feedbackData.unshift(req.body);
    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err){
        if (err){
            console.log(err)
        }
    })
    res.json(feedbackData)
})




module.exports = router