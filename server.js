const http = require('node:http');

const server = http.createServer(function (req, res) {
    res.end("welcome to the server");
});

server .listen(3000); 
    
