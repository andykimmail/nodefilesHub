var http = require('http');
var fs = require('fs'); //call the file system module

http.createServer(function (req, res) {
	fs.readFile('index.html', function(err, data){ // this will calll the file index.html
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);