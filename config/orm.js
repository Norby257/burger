// // import { WSAEPROVIDERFAILEDINIT } from "constants"

// var connection = require("./connection")

// var orm = {
//   selectAll: function(whatToSelect, tableInput) {
//     var queryString = "SELECT ?? FROM ??"
//     connection.query(queryString, [whatToSelect, tableInput], function(
//       err,
//       result
//     ) {
//       if (err) throw err
//       console.log(result)
//     })
//   },

//   insertOne: function(table, colVal1, colVal2, userInput1, userInput2) {
//     // query string with insert into
//     var queryString = "INSERT INTO ?? (?, ?) values( ?, ?)"
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

// module.exports = orm
