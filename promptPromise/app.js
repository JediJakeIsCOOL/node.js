var prompt = require('prompt-promise')
var promise = require('bluebird')


var options= {
    promiseLib: promise
}
var pgp = require('pg-promise')(options)
var connection = 'postgres://localhost:5432/albumprompt'
var db = pgp(connection)

var data = []

prompt('albumName: ').then(function albumName(val) {
    data.push(val)
    return prompt('year: ')
}).then(function year(val){
    data.push(val)
    return prompt('albumId: ')
}).then(function id (val){
    data.push(val)
    console.log('Created album with ID ' + data[2])
})
    .then(function updateTable(){
        db.none('INSERT INTO albumprompt(albumName, year, albumId) values($1, $2, $3)',[data[0], data[1], data[2]])
        prompt.done(
            function(){
                db.$pool.end();
            }
        );
    })
.catch(function denied(err){
    console.log('error:', err.stack)
    prompt.finish();
    

})


use joins to connect artis to album