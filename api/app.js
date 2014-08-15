/**
 * Created by riffdiktator on 15.08.2014.
 */
var express = require('express');
var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/api/nav', function(req, res){

    var response =[
        {"text" : "Strona główna", "url": "/"},
        {"text" : "Profil", "url": "#/profile"},
        {"text" : "nawigacja 3", "url": "nawigacja_3"},
        {"text" : "nawigacja 4", "url": "nawigacja_4"}
    ];

    res.send(response);
});
var server = app.listen(3333, function() {
    console.log('Listening on port %d', server.address().port);
});
