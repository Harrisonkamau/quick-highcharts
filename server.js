// import modules
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

// create express app
var app = express();

// set default port
var port = process.env.PORT || 5000;

// load files in public folder
app.use(express.static('public'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json 
app.use(bodyParser.json());


// service routes
routes(app);

// start server
app.listen(port, () => {
    console.log("Listening on port: "+ port);
})