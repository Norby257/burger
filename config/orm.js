var connection = require("./connection");

var orm = {

    selectAll: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString,[whatToSelect, tableInput], function(err, result){
            if (err) throw err;
            console.log(result);
        });

    },

    insertOne: function() {

    },

    updateOne: function() {

    }
};

module.exports = orm;