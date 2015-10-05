var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.render('index')
});

var server = app.listen(port, function() {
	var host = server.address().address;
	var x = server.address().port;

	console.log('Cat Clicker is running on http://%s:%s', host, x);
});

app.set('views', __dirname + '../../views');
app.set('view engine', 'jade');
app.use('/client', express.static(__dirname + '/../../client'))
app.use('/client', express.static(__dirname + '/../../client/img'))
