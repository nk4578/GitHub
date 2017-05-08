function view(response) {  
    console.log('request handler called --> view');

    		console.log('request-');
		response.writeHead(200, {'Content-Type' : 'text/plain'});

		response.write('heelllllo view');
		response.end();
}

function create(response) {  
    console.log('request handler called --> create');

    		console.log('request-');
		response.writeHead(200, {'Content-Type' : 'text/plain'});

		response.write('heelllllo create');
		response.end();
}

var handle = {}; // javascript object has key:value pair.  
handle['/'] = view;  
handle['/view'] = view;  
handle['/create'] = create;

exports.handle = handle; 