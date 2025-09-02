const fs = require('fs')
const https = require('https')

var a = 100;

setImmediate(() =>{
    console.log("set immediate called");
});

setTimeout(()=>{
    console.log("timer is called");
},6000);

fs.readFile('file.txt','utf-8' ,(data) =>{
    console.log(" file read takes time so it is in last in async func.", data);
});

setTimeout(()=>{
    console.log("timer is called ASAP");
},0);

function printA(){
     console.log("a =" ,a);
}
printA();
console.log("last line is here ");
