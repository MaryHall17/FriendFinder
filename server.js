//Dependncies 

var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

//Express app

var app = express();
var PORT = process.env.PORT || 3000;



//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public/data"));

//set up routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);



app.listen(PORT, function() {
	console.log("App is listeninging on PORT: " + PORT);
});

