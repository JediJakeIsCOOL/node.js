// var http = require('http')
// var myServer = http.createServer(function(request, response){
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write('<h1>Digital Crafts</h1>')
//     response.end();
// })
// myServer.listen(3000);
// console.log('port 3000')




// var express = require('express');
// var app = express();
// app.get('/hello1', function(req, res){
//     var name = req.params.name || 'world';
//     res.send('Hello ' + name + '!');
// });
// app.get('/about', function(req, res) {
//     res.send('<h1>about!</h1>');
// });
// app.get('/', function(req, res) {
//     res.send('<h1>Hello World!</h1>');
// });

// app.listen(9200, function(){
//     console.log('Example app listening on port 9000')
// })

// var express = require('express')
// var dataFile = require('./data/data.json')
// var app = express()

// app.get('/', function(req, res){
//     var info = '';

//     dataFile.speakers.forEach(function(item){
//         info += `
//             <li>
//             <h2>${item.name}</h2>
//             <p>${item.summary}</p>
//             </li>
//         `;
//     })
//         res.send(
//             `
//             <h1>Speakers</h1>
//             ${info}
//             `
//         )
            
// })
// app.listen(3000, function(){
//     console.log('example app listening on port 3000')
// })





var express = require('express');

var dataFile = require('./data/data.json');
var app = express();

app.use(require('./routes/index'))





app.get('/speaker', function(req, res) {
 
    var info = "";

    dataFile.speakers.forEach(function(item){

        info += `
            <li>
            <h2>${item.name}</h2>
            <p>${item.summary}</p>
            </li>

        `;
        
    });  // end of foreach loop

    res.send(
        `
            <h1>Speakers</h1>
            ${info}
        `
    ); //end of res.send
    
});//end of app.get

app.get('/speaker/:speakerid', function(req, res) {
 
    var speaker = dataFile.speakers[req.params.speakerid];
    console.log(req.params)

    res.send(
        `
            
            <li>
            <h1>${speaker.title}</h1>
            <h2>${speaker.name}</h2>
            <p>${speaker.summary}</p>
            </li>
            
        `
    ); //end of res.send
    
});//end of app.get


app.listen(1830, function(){
    console.log('Example app listening on port ');
});

// app.get('/hello1', function(req, res){
//     var name = req.query.name || 'world';
//     res.send('Hello ' + name + '!');
// });



// app.get('/about', function(req, res) {
//     res.send('<h1>About Page</h1>');
// });

// app.get('/contact', function(req, res) {
//     res.send('<h1>Contact Page</h1>');
// });


