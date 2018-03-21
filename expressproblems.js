// var express = require('express');
// var app = express();
// app.get('/', function(req, res) {
//     res.send('Hello World!');
// });
// app.listen(4100, function(){
//     console.log('Example app listening on port 3000!');
// });

var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('Hello World!');
});
app.get('/greet/:name/:lastname', function(req, res) {
    var name = req.params.name
    var lastname = req.params.lastname
    res.send('Hello ' + name + lastname + '!');
});
app.get('/year', function(req, res){

    var age = req.query.age;
    var name = req.query.name;
    var year = new Date().getFullYear() - age
    res.send('you were born in ' + year + ' ' + name);
    
    });
app.get('/cats', function(req, res) {
    res.send('Meow');
});
app.get('/dogs', function(req, res) {
    res.send('Woof');
});
app.get('/cats_and_dogs', function(req, res) {
    res.send('Living together');
});
app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});
