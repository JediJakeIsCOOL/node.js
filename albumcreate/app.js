var express = require('express');
var app = express();
var promise = require('bluebird');
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended :false}))

// defined the options for the pg-promise library
var options = {
  promiseLib : promise
}

// configuring the pg-promise database connection
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/albums';
var db = pgp(connectionString);



//public folder
app.use(express.static('app/public'))

app.get('/newalbum',function(req,res){
  res.render('newalbum');
});

app.post('/albums',function(req,res){

    let title = req.body.title;
    let description = req.body.description;
    let price = parseInt(req.body.price);
    let genre = req.body.genre;
    let imageURL = req.body.imageURL;
  
    db.none('INSERT INTO albums(title,description,price,genre,"imageURL") values($1,$2,$3,$4,$5)',[title,description,price,genre,imageURL]).then(function(){
  
      db.any('SELECT * FROM albums').then(function(data){
        // res.render(page to render, object to pass to the page)
        res.render('albums', {'albums' : data});
      })
  
    })// end of 'then' promise
  
  })
  
  app.get('/albums',function(req,res){
  
    // fetch dishes from the database
    db.any('SELECT * FROM albums').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.render('albums',{'albums' : data});
      
    })
  })
  
  app.get('/albums/json',function(req,res){
  
    // fetch dishes from the database
    db.any('SELECT * FROM albums').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.status(200).json({
        status : 'success',
        dishes : data
      })
    })
  
  })
  
  app.get('/',function(req,res){
    res.send('hello world');
  })

var server = app.listen(2004, function(){
    console.log('Example app listening on port 2001 ');
});