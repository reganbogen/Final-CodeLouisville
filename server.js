var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/todo', function(req, res) {
	db.todo.insert(req.body, function(err,docs) {
		res.send(docs)
		}
	)
})