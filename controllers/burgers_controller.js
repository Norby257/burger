//  this file creates a router for the app that is exported

//  importing node dependencies
var express = require("express")

var router = express.Router()

//  importing out model to use the database function
var burger = require("../models/burger")


//  here's our routes + the logic (connects to the ORM functions)
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    }
    console.log(hbsObject)
    res.render("index", hbsObject)
  })
})

router.post("/api/burgers", function(req, res){
  Burger.insertOne([
    "burgerName", "devoured"
  ], [ 
    req.body.burgerName, req.body.devoured

  ], function(result){
    res.json({ id: result.insertId});
  })

})


// router.put("/api/burgers", function(req, res){
//   Burger.updateOne(function(data){

//   })
// })
//  then we export that  and this is required in the server file
module.exports = router;
