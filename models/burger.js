var connection = require("../config/connection");

//  burger data being stored in an object (constructor)? 

var Burger = function(burgerName, devoured) {
    //  fix this 
    this.burgerName = burgerName;
    this.devoured = devoured;

}
//  orm functions here 
Burger.selectAll = function(whatToSelect, tableInput) {
    connection.query("SELECT * FROM burgers;");

}

Burger.updateOne = function(table, colVal, userInput) {
    connection.query("UPDATE burgers SET ?", burgerData, cb);
}


Burger.insertOne = function(table, colVal1, colVal2, userInput1, userInput2){
    connection.query("INSERT INTO burgers SET ?", burgerData, cb);
}
//  and at the end we are exporting this - will be required it 

Burger.prototype.create = function(cb) {
    var burgerData = {
       burgerName:  this.burgerName, 
        devoured:  this.devoured

    };
    connection.query("INSERT INTO burgers SET ?", studentData, cb);
    
}
module.exports = Burger;