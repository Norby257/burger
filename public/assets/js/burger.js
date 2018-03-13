//  front end jQuery goes here
console.log("We are linked")

//  var for empty burgers array that we push values too
var burgerNumber = 0
var burgers = []

// when document is ready:
$(document).ready(function() {
  // on click event
  $("button").on("click", function(e) {
    //   prevent form from submitting
    //   for now have it separate name and for
    e.preventDefault()
    var newBurger = {
      name: $("#name").val()
    }
    burgers.push(newBurger)
    $("document").append("<button>")
    console.log(newBurger)
    console.log(newBurger)
    //    for loop here that adds a number, div, and devour button
    for (var i = 0; i < burgers.length; i++) {
      burgerNumber++
      $(".added-burgers").append(`${burgerNumber} ${newBurger.name}`)
    }
    //   or this could be a function
    //    $("added-burgers").append(burgerData).addClass("pull-right");
    //    $("<button>", {
    //        text: "Devoured?"
    //    })

    //   send the POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger")
      //    show a modal maybe?
    })
  })

  // on click for devoured button aka put request
  //  change devoured to TRUE
  //   $(function() {
  //     $(".devoured").on("click", function(e) {
  //         var id = $(this).data("id");
  //         var newDevoured = $(this).data("newDevoured");

  //         var newDevouredState = {
  //             devoured: newDevoured
  //         };
  //         //  sending the put req
  //         $.ajax("/api/cats" + id) {
  //             type: "PUT",
  //             data: newDevouredState
  //         }
  //     })
  // })
})
