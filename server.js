var http = require('http');
var url   = require('url');

function start(route, handle){

	var server = http.createServer();

	server.on('request', function (request, response){

	var pathname = url.parse(request.url).pathname;
	console.log('request for ' + pathname + ' received.');

	route(handle, pathname, response);


	});

	server.on('connection', function(socket){
		console.log('connect---------');
	});

	server.on('connect', function(request, socket, head){
		console.log('conndddddddddddddd');
	});

	server.listen(9090, function(){
		console.log('listening...............');
	});

	console.log('start server');
}

exports.start = start;