var mongojs = require('mongojs')

var db = mongojs.connect("mongodb://localhost/squallispuppeteers", ['squallis'])

app.get('/squallis', function(req, res) {
	db.todo.find({}, function(err, docs) {
		res.send(docs)
	})
})