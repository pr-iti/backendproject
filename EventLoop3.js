const fs = require('fs')
const https = require('https')

var a = 100;

setImmediate(() =>{
    console.log("set immediate called");
});

Promise.resolve("promise").then(console.log);

process.nextTick(()=>{
    console.log("here implement process - next-tick");

})


setTimeout(()=>{
    console.log("timer is called");
},0);

fs.readFile('file.txt','utf-8' ,(data) =>{

    setImmediate(() =>{
    console.log("2nd set immediate called");

    Promise.resolve("2nd promise").then(console.log);

    process.nextTick(()=>{
    console.log("2nd time next-tick");

   });
   setImmediate(()=>{
    console.log("2nd time setimmediate");
   })
   setTimeout(()=>{
    console.log("timer is called ASAP");
    },0);


});


setTimeout(()=>{
    console.log("timer is called");
},6000);


    console.log(" file read takes time so it is in last in async func.", );
});



function printA(){
     console.log("a =" ,a);
}
printA();
console.log("last line is here ");