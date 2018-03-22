



var express = require('express');
var app = express();
var reload = require('reload');
var dataFile = require('./data/data.json');


//app.set sets environment variable
app.set('port', process.env.PORT || 2220 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = "Digital Crafts"

//public folder in refernce to root folder
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

//making data available to 
//routes will have access to this file


var server = app.listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port'));
});

reload(server, app);


