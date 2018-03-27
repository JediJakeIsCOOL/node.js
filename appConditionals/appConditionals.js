var express = require('express')
var app = express()
var dataFile = require('./data/data.json')
//var reload = require('reload')

app.set('view engine', 'ejs')   //sets global variables for entire app
app.set('views', 'views')
app.set('appData', dataFile)

app.use(express.static('public'))  //public folder for whole app
app.use(require('./routes/bluegill'))
app.use(require('./routes/catfish'))
app.use(require('./routes/lmbass'))
app.use(require('./routes/rbtrout'))
app.use(require('./routes/smbass'))
app.use(require('./routes/home'))
// app.use(require('./routes/contact'))
app.use(require('./routes/api'))
app.use(require('./routes/feedback'))


var server = app.listen(2000, function(){
    console.log('you are now listening on port 2000')
})
//reload(server, app)