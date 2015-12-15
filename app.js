var express = require('express'),
		app = express(),
		port = process.env.PORT || 5000,
		io = require('socket.io').listen(app.listen(port));


// Files in the public folder
app.use(express.static(__dirname + '/public'));

var secret = 'nansouille';

// Initialize new socket.io

var presentation = io.on('connection', function (socket) {

	socket.on('load', function(data){

		socket.emit('access', {
			access: (data.key === secret ? "granted" : "denied")
		});

	});

	socket.on('slide-changed', function(data){

		if(data.key === secret) {

			presentation.emit('navigate', {
				hash: data.hash
			});
		}

	});

});

console.log('Ca part en prod sur http://localhost:' + port);
