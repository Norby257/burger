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
      burgers: data
    }
    console.log(hbsObject)
    res.render("index", hbsObject)
  })
})

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, "0"],
    function(result) {
      res.json({ id: result.insertId })
      //  result gives me the ouputof data operation and not the data that I'd need
      //  ergo, i need to write a SELECT QUERY to retrieve that data
      console.log(result)
    }
  )
})

// delete request
router.delete("/api/burgers", function(req, res) {
  var condition = `id=${req.params.id}`
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end()
    } else {
      res.status(200).end()
    }
  })
})

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id

  console.log("condition", condition)

  burger.updateOne(
    {
      burger_name: req.body.name,
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end()
      } else {
        res.status(200).end()
      }
    }
  )
})
//  then we export that  and this is required in the server file
module.exports = router
