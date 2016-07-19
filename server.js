var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/squallispuppeteers');

db.on('error', function callback () {
	console.log("Connection error");
});

db.once('open', function callback () {
	console.log("Mongo working!");
});

app.get('/ping', function(req, res) {
	res.send({ping:'Hello this is server and I am alive!'});
});

app.get('/ping/:id', function(req, res) {
	res.send({ping:'hello this is server and I am got '+req.params.id});
});

app.listen(3000);
console.log('Listening on port 3000...');