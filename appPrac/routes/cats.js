var express = require('express')
var router = express.Router()

router.get('/cats', function(req, res) {
    res.send('Meow');
});
module.exports = router