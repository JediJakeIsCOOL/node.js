



var express = require('express');
var app = express();
var reload = require('reload');
var dataFile = require('./data/data.json');


//app.set sets environment variable
app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('appDAta', dataFile)

app.locals.siteTitle = "Digital Crafts"

//public folder in refernce to root folder
app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/feedback'))
app.use(require('./routes/api'))
// 

//making data available to 
//routes will have access to this file


var server = app.listen(3000, function(){
    console.log('Listening on port ' + '3000');
});

reload(server, app);


