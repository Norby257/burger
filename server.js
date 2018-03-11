//  node dependencies
var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var PORT = process.env.PORT || 3000

//  servicing static content from the 'public directory'

app.use(express.static("public"));

//  data parsing

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//  setting up Handlebars

var exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))

app.set("view engine", "handlebars")

//  hwere we set up our own modules

var routes = require("./controllers/burgers_controller")

app.use(routes)



//  starting the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})
