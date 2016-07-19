var http = require('http');
var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end('Hello world');
});

server.listen(8000);

console.log('Server is ready!');

var express = require('express')
var app = express()

//use 'static' middleware
app.use(express.static(__dirname + '/app'))

app.get('/', function(req,res) {
	res.send('Hello world')
})

app.listen(8000)


app.get('/todo', function(req,res) {
	db.todo.find({}, function(err, docs){
		res.send(docs)
	})
})

var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/todo', function(req, res) {
	db.todo.insert(req.body, function(err,docs) {
		res.send(docs)
		}
	)
})