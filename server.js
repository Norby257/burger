//  node dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000

//  data parsing 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//  starting the server 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});