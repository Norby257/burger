var connection = require("../config/connection");


//  and then require the orm functions too - this is prolly why 

var orm = require("../config/orm.js");

//  burger data being stored in an object (constructor)? 

// var burger = function(burgerName, devoured) {
//     //  fix this 
//     this.burgerName = burgerName;
//     this.devoured = devoured;

// };

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

//  add the delete request here 

//  this is put request 
// Burger.updateOne = function(criteria, cb) {
//     connection.query("UPDATE burgers SET ? WHERE ?;", criteria, cb);
// }

//  this is post request 
insertOne: function( cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res){
        cb(res);
    });
},

updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res){
        cb(res);
    });
}

    
}
module.exports = burger;