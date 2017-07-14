var express = require('express');
var app = express();
var path = require('path');
var cpus = require('./models/cpu'); 

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/api/components', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(cpus));
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});