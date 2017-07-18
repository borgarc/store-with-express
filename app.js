var express = require('express');
var app = express();
var path = require('path');
var cpu = require('./models/cpu'); 
var graphicCard = require('./models/graphic-cards'); 
var motherboard = require('./models/motherboards'); 

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/api/components', function(req, res){
    let components = [];

    switch(req.query.type){
        case 'cpus':
            cpu.getAll((err, result) => {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(result)); 
            });
        break;
        case 'graphic-cards':
            graphicCard.getAll((err, result) => {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(result)); 
            });
        break;
        case 'motherboards':
            motherboard.getAll((err, result) => {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(result)); 
            });
        break;
    }
    /*res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(components));*/
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});