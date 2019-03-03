//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//port setup
var app = express();
var PORT = process.env.PORT || 3000;

//Serve static content for the app from the "public" directory in the app dir.
app.use(express.static("public"));

app.use(bodyParser.urlencoded( {extended: true} ));

//parse the app into json format
app.use(bodyParser.json());

//Handlebars needed
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give server access to them
var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});