var express = require('express');
var router = express.Router();
var request = require('request');
var util = require('util');
var restclient = require('restler');

var fxml_url = 'http://flightxml.flightaware.com/json/FlightXML2/';
var username = 'inmarsat';
var apiKey = process.env.FLIGHTAWARE;

router.get('/', function (req, res) {
	if (req.query.id) {
		restclient.get(fxml_url + 'InFlightInfo', {
		    username: username,
		    password: apiKey,
		    query: {ident: req.query.id}
		}).on('success', function(result, response) {
		    console.log(result);
		});
	}else{
		res.send({
			error:'Please provide id'
		})
	}
});

module.exports = router;
