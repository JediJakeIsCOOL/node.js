var express = require('express')
var app = express()
var dataFile = require('./data/data.json')
var reload = require('reload')

app.set('view engine, ejs')
app.set('views', 'views')
app.set('appData', 'dataFile')

app.use(express.static('public'))
app.use(require('./routes/bluegill'))
app.use(require('./routes/catfish'))
app.use(require('./routes/lmbass'))
app.use(require('./routes/rbtrout'))
app.use(require('./routes/smbass'))
app.use(require('./routes/home'))


var server = app.listen(1000, function(){
    console.log('you are now listening on port 1000')
})
reload(server, app)