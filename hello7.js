var http = require('http');
var fs = require('fs'); //call the file system module
var url = require('url');

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	if (filename == './') {filename = './index'}; // allows just to type localhost:8080 without errors
	filename = filename + ".html";
	console.log(filename);
	fs.readFile(filename, function(err, data) {// this will calll the file called index.html
		if(err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);

console.log("Server Listening on Port 8080...");