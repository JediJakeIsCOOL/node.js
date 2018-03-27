// function add (x, y, z) {
//     var result = x + y;
//     z(result);// print(result);
// }
// function print(result) { 
//     console.log(result); 
// }


//   add(1, 2, print);    //need to understand a bit better. 

// function subtract(x, y, callback){
//     callback(x,y) 
// }
// function returnXY(x, y){
    
//     console.log(x-y)
//     return x-y
// }
// subtract(3 ,1 ,returnXY)

function math(x, y, callback) {
    let result = callback(x, y);
    console.log(result)
    return result;
  }
  
  //Add
  math(1, 2, function(x,y){
    return x + y;
  })
  
  //Subtract
  math(1,2, function(x, y) {
    return x - y;
  })
  
  //Greet
  math("Hello ", "World", function(x,y) {
    return x + y
  })
  
  //Product
  math(2, 6, function(x,y) {
    return Array.from(arguments).reduce((x,y) => {
      return x * y
    }, 1)
  })