const fs = require('fs');
const http = require('https');

consaole.log("Hello world");

var a = 293;
var b = 342;

https.get("https://dummyjson.com/products/1",(res) => {
    console.log("Fetched Data Successfully");
});
