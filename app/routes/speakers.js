var express = require('express');
var router = express.Router();

router.get('/speaker', function(req, res) {
 
    var info = "";
    var dataFile = req.app.get('appData');
    dataFile.speakers.forEach(function(item){

        info += `
        <link rel="stylesheet" type="text/css" href="css/style.css">
            <li>
            <h2>${item.name}</h2>
            <p>${item.summary}</p>
            </li>
            <script src="/reload/reload.js"></script>
        `;
        
    });  // end of foreach loop

    res.send(
        `
            <h1>Speakers</h1>
            ${info}
        `
    ); //end of res.send
    
});//end of app.get

router.get('/speaker/:speakerid', function(req, res) {
 
    var speaker = dataFile.speakers[req.params.speakerid];
    var dataFile = req.app.get('appData');
    res.send(
        `
        <link rel="stylesheet" type="text/css" href="css/style.css">
            <li>
            <h1>${speaker.title}</h1>
            <h2>${speaker.name}</h2>
            <p>${speaker.summary}</p>
            </li>
            <script src="/reload/reload.js"></script>
        `
    ); //end of res.send
    
});//end of app.get

module.exports = router;