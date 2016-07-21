var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');


module.exports = function(app, config) {
	function compile(str, path) {
		return stylus(str).set('filename', path);
	}

	app.set('views', config.rootPath + '/server/views');
  	app.set('view engine', 'pug');
	app.use(logger('dev'));
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(session({secret: 'Squallis Puppeteers Puppets',resave:false,saveUninitialized:false}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(stylus.middleware(
		{
			src: config.rootPath + '/public',
			compile: compile
		}
	));
	app.use(express.static(config.rootPath + '/public'));
}
