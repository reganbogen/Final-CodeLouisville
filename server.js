var http = require('express');
var app = express()

//use 'static' middleware
app.use(express.static(__dirname + "/app"))

app.get('/', function(req, res) {
	res.send("Hello World")
})

app.listen(8000)