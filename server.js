const http = require('node:http');

const server = http.createServer(function (req, res) {
   
    if( req.url === "/getsecretdata"){
        res.end("herre is my secret data -> universe alignment ");
    }
     res.end("welcome to the server");
});

server .listen(3000); 
    
