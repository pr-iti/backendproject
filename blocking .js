const crypto = require('node:crypto');
var a = 293;
var b = 342;

//password based key derivative func
crypto.pbkdf2Sync("password","salt",5000,50,"asd123",(err,key) => {
    console.log("1st password generated")
});
crypto.pbkdf2("password","salt",5000,50,"asd123",(err,key) => {
    console.log("password generated")
});

 function multiply (x ,y ){
    return x* y;
 }

 const prod = multiply(a,b);

 console.log("product is evaluate first :-" ,prod);

 module . exports = {
    multiply,
    prod
 };