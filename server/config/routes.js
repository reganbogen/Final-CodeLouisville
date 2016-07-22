var auth = require('./auth');

module.exports = function(app) {

	app.get('/partials/*', function(req, res) {
		res.render('../../public/app/' + req.params[0]);
  });

	app.post('logout', function (req, res) {
		req.logout();
		res.end();
	});

	app.post('/login', auth.authenticate);

	app.get('*', function(req, res) {
		res.render('index', {
			bootstrappedUser: req.user
		});
	});
}