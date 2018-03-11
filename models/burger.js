var connection = require("../config/connection");


//  and then require the orm functions too - this is prolly why 

// var orm = require("../config/orm.js");

//  burger data being stored in an object (constructor)? 

var Burger = function(burgerName, devoured) {
    //  fix this 
    this.burgerName = burgerName;
    this.devoured = devoured;

}
//  orm functions here - testing this with the actual values
Burger.selectAll = function(burger) {
    connection.query("SELECT * FROM burgers;", burger);

}
//  this is put request 
// Burger.updateOne = function(criteria, cb) {
//     connection.query("UPDATE burgers SET ? WHERE ?;", criteria, cb);
// }

//  this is post request 
Burger.insertOne = function(Burger, cb){
    connection.query("INSERT INTO burgers SET ?", Burger, cb);
}
//  and at the end we are exporting this - will be required it 

Burger.prototype.create = function(cb) {
    var burgerData = {
       burgerName:  this.burgerName, 
        devoured:  this.devoured

    };
    connection.query("INSERT INTO burgers SET ?", [burgerName, devoured], cb);
    
}
module.exports = Burger;