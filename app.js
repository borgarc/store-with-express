var express = require('express');
var app = express();
var path = require('path');
var componentType = require('./models/component-type');
var components = require('./models/components'); 

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/api/components', function(req, res){
    components.getAll((err, result) => {
        res.json(result);
    });
});

app.get('/api/componenttypes', function(req, res){
    componentType.getAll((err, result) => {
        res.json(result);
    });
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});