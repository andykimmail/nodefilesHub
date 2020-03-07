var http = require('http');

http.createServer(function (req, res) { // the req here requst anything coming after front slash / in browser
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(req.url); //here is the the req that request a URL
	res.end();
}).listen(8080);