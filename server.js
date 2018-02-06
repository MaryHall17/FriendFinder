//Dependncies 

var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

//Express app

var app = express();
var PORT = process.env.PORT || 3000;

console.log("App is listening: " + PORT);

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(_dirname + '/public'))
app.use(express.static(_dirname + '/data'))

