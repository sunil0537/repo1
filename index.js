var https= require('http');
https.createServer(function (req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World');
}).listen(5030,"localhost");
console.log('Server running at http://localhost:5030/')
