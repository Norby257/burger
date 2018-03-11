var Burger = require("./models/burger");

Burger.selectAll(function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});


// Burger.updateOne(function ( err, dat))