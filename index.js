var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/cat') {
        
        fs.readFile('./index.html', function(err, html) {
            console.log('kot');
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            response.write(html);
            response.end();
        });
   } else {
        fs.readFile("./cat404.jpg", function(err, img) {
            console.log('error')
          //  response.setHeader("Content-Type");
            response.write(img, 'binary');
            response.end();
        });
    }
});

server.listen(8000);