var config     = require('../../config');
var request    = require('request');
var fs         = require('fs');
var arr = ["“What are you talking about, it’s SO modular! -Ethan", "jQuery does some meta shit in the clouds and then boom! it works -Cristian", "Hello - Cole", "Hold on… there’s something funky going on! - Lane", "youre going to have some hallucinogenic experiences this summer - Moose", "Text is gonna return your mom - Abhi", '""Asdf" - Cole" - Lando" - Moose', "I now know so many CS words like JSOn Ajax API....my tech interviewer's gonna have an orgasm! - Cristian", '"You can sleep on Sundays - Abhi, "Just like God" - Andy', "I'm basic - Abhi", "Safari is being a bitch - Lane", "I hate Safari - Lane", "I am not sure why all this information-Sam Lee", "It's all Asian - Tom Eng"];



// super secret for creating tokens
var superSecret = config.secret;

module.exports = function(app, express) {

	var apiRouter = express.Router();

	// accessed at GET http://localhost:8080/api
	apiRouter.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to our api!' });	
	});

	apiRouter.get('/quotes', function(req, res) {
		var num = Math.floor(Math.random() * (14 - 0)) + 0
		res.json({ message: arr[num] });	
	});


	return apiRouter;
};