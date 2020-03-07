var http = require('http');
var fs = require('fs'); //call the file system module
var url = require('url');

http.createServer(function (req, res) {
	var q = url.parse(req.url, true); 
	console.log(q.pathname); //here pass in the file name index.html
	fs.readFile('index.html', function(err, data) {// this will calll the file called index.html
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);

console.log("Server Listening on Port 8080...");