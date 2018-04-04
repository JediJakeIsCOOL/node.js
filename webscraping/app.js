var rp = require('request-promise')
var fs = require('fs-extra')
var concat = require('concat-files')

const file = '/Users/jedijake/node/webscraping/public/html/savedfile.html'
const file1 = '/Users/jedijake/node/webscraping/public/js/file1.js'
const file2 = '/Users/jedijake/node/webscraping/public/js/file2.js'
const file3 = '/Users/jedijake/node/webscraping/public/js/file3.js'


var urls = [
    'https://en.wikipedia.org/wiki/Futures_and_promises',
    'https://en.wikipedia.org/wiki/Continuation-passing_style',
    'https://en.wikipedia.org/wiki/JavaScript',
    'https://en.wikipedia.org/wiki/Node.js',
    'https://en.wikipedia.org/wiki/Google_Chrome'
  ];

 var pro1 = rp('https://en.wikipedia.org/wiki/Futures_and_promises');
 var pro2 = rp('https://en.wikipedia.org/wiki/Continuation-passing_style');

  Promise.all([pro1,pro2]).then(function(values){
    // console.log(values[1]);
  });

  function saveWebPage(url, filename){
    rp(url).then(function(htmlstring){
        fs.outputFile(filename, htmlstring)
    })
  }
  saveWebPage('https://en.wikipedia.org/wiki/Google_Chrome', file)

  // function Cat(fileIn1, fileIn2){
  //   var buffer1 = fs.readFileSync(fileIn1, 'utf8')
  //   var buffer2 = fs.readFileSync(fileIn2, 'utf8')
  //   console.log(buffer1)
  //   console.log(buffer2)
    

  // }
  // Cat(file1, file2)


  var buf = fs.readFileSync(file2, 'utf8');
  var buf1 ;
  fs.appendFile(file1 ,buf)
  .then(() => {buf1 = fs.readFileSync(file1, 'utf8');
              fs.appendFile(file3 ,buf1);})
              .then(()=> console.log('copied again') )