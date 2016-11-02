//app.js
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
	console.log("Client has requested URL:", request.url);
	if(request.url === '/'){
		fs.readFile('./views/index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars'){
		fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cats'){
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars/new'){
		fs.readFile('./views/new.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/stylesheet/styles.css'){
		fs.readFile('./stylesheet/styles.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/images/la_ferrari.jpg'){
		fs.readFile('./images/la_ferrari.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'images/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/images/kitty.jpg'){
		fs.readFile('./images/kitty.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'images/jpg'});
			response.write(contents);
			response.end();
		})
	}
});

server.listen(7077);
console.log('running local server on DAT gud port 7077')