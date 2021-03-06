var http = require('http');
var fs  = require('fs');

http.createServer(function(req,res){
// 规范化 url，去掉查询字符串、可选的反斜杠，并把它变成小写
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase(); 
	switch(path) {

		case '':
		res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('Homepage');
		break;
		case '/about':
		res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('About');
		break;
		default:
		res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('Not Found');
		break;
	}

}).listen(3000);

console.log('现在到访问为:http://127.0.0.1:3000');