var mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console,'connection error...'));
	db.once('open', function callback() {
	  console.log('squallispuppeteers db opened');
	});

	var userSchema = mongoose.Schema({
		firsName: String, 
		lastName: String, 
		userName: String
	});
	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function(err, collection) {
		if (collection.length === 0) {
			User.create({firstName: 'Joe', lastName: 'Eames', username: 'joe'});
			User.create({firstName: 'John', lastName: 'Papa', username: 'john'});
			User.create({firstName: 'Dan', lastName: 'Wahlin', username: 'dan'});
		}
	})
}