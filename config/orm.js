
var connection = require("./connection")

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = `SELECT * FROM ${tableInput};`; 
    connection.query(queryString, function(
      err,
      result
    ) {
      if (err) throw err
      cb(result)
    })


  }
};

//   insertOne: function(table, colVal, burgerData) {
//     // query string with insert into
//     var queryString = "UPDATE burgers SET ?"
//     // column names
//     connection.query(
//       queryString,
//       [table, colVal1, colVal2, userInput1, userInput2],
//       function(err, result) {
//         if (err) throw err
//         console.log(results)
//       }
//     )
//     //  values
//   },

//   updateOne: function(table, colVal, userInput) {
//     var queryString = "UPDATE ?? set ? = ? where id = ?"
//     connection.query(queryString, [table, colVal, userInput], function() {
//       if (err) throw err
//       console.log(results)
//     })
//   }
// }
module.exports = orm;