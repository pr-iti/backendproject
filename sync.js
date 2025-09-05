// var a = 4908;
// var b = 409;

// function product ( x,y){
//     const res = x * y;
//     return res;
// }

// //func. call
// const prod = product(a , b);
// console.log("product of a and b is :-" ,prod);

//=---------------------------
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// async1(function (input, result1) {
//   async2(function (result2) {
//     async3(function (result3) {
//       async4(function (result4) {
//         async5(function (output) {
//           // do something with output
//           console.log("its here");
//         });
//       });
//     });
//   });
// });
