var express = require('express')
var app = express()
var reload = require('reload')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(require('./routes/cats'))
app.use(require('./routes/cats_and_dogs'))
app.use(require('./routes/dogs'))

var server = app.listen(2000, function(){
    console.log('you are on server port 2000')
})

reload(server, app)