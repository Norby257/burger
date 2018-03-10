//  this file creates a router for the app that is exported

//  importing node dependencies
var express = require("express")

var router = express.Router()

//  importing out model to use the database function
var Burger = require("../models/burger")

//  here's our routes + the logic (connects to the ORM functions)
router.get("/", function(req, res) {
  Burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    }
    console.log(hbsObject)
    res.render("index", hbsObject)
  })
})

//  then we export that  and this is required in the server file
module.exports = router;
