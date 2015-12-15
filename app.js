var express = require('express'),
		app = express(),
		port = process.env.PORT || 5000,
		io = require('socket.io').listen(app.listen(port));


var tab = [];

// Files in the public folder
app.use(express.static(__dirname + '/public'));


// var secret = 'nansouille';

// Initialize new socket.io

var presentation = io.on('connection', function (socket) {

	socket.on('auth', function(starWarsName) {
		var starWarsName;
		tab.push(starWarsName);
	});

	socket.on('authMobile', function(mobileVerif) {
		var mobileVerif;

		console.log(mobileVerif);
		console.log(tab);


		if (tab.indexOf(mobileVerif) == -1) {
			console.log('nike ta mer');
		} else {
			console.log('bienvenu à la maison');
		}
	});
	

// if(starWarsName && mobileVerif) {
// 	Verif(starWarsName, mobileVerif);
// } else {
//
// }
//
// 	function Verif(starWarsName, mobileVerif) {
// 		var desktop = starWarsName;
// 		var mobile = mobileVerif;
//
// 		console.log(desktop);
// 		console.log(mobileVerif);
//
// 		if(desktop == mobileVerif) {
// 			console.log('paul est bon');
// 		}
// 	}


	// 	socket.on('load', function Verif(data, secret){
	//
	// 	socket.emit('access', {
	// 		access: (data.key === secret ? "granted" : "denied")
	// 	});
	//
	// });


	socket.on('slide-changed', function(data){

		if(data.key === secret) {

			// presentation.emit('navigate', {
			// 	hash: data.hash
			// });

			console.log("l'utilisateur est sur iPhone");
		}

	});

});

console.log('Ca part en prod sur http://localhost:' + port);
