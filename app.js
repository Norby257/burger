var Burger = require("./models/burger");

Burger.selectAll(function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});

Burger.selectAll();

// Burger.updateOne(function ( err, dat))