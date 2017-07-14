var express = require('express');
var app = express();
var path = require('path');
var cpus = require('./models/cpu'); 
var graphicCards = require('./models/graphic-cards'); 
var motherboards = require('./models/motherboards'); 

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/api/components', function(req, res){
    let components = [];

    switch(req.query.type){
        case 'cpus':
            components = cpus;
        break;
        case 'graphic-cards':
            components = graphicCards;
        break;
        case 'motherboards':
            components = motherboards;
        break;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(components));
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});