// console.log(Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]))


// var fs = require('fs');
// var contents = fs.readFileSync(process.argv[2]).toString();

// var st = contents.split("\n");
// console.log(st.length-1);
var fs = require('fs')
fs.readFile(process.argv[2], function(error, data) {
    if (error){
    console.error(error.message);
    return;
    }
    var contents = data.toString().split('\n').length-1
    
    console.log(contents)    
})  //whats the point of else if you can just write the backup function after an if
