/*
-User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
-User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.
-User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.
*/

var express = require('express')
var app = express();

var isDate = function(date) {
  return ((new Date(date)).toString() !== "Invalid Date") ? true : false;  }
 
app.get('/:string', function (req, res) {
  var dateString = req.params.string
  if (dateString.indexOf(",") === -1) {
    dateString = dateString * 1000
  }
  if (isDate(dateString)) {
    var dateObj = new Date(dateString)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var options = { month: 'long', day: 'numeric', year: 'numeric' };
    var naturalDate= dateObj.toLocaleString("en-us", options)
    var resJson = { unix: dateObj.getTime()/1000, natural: naturalDate }
   } else {
    var resJson = { unix: null, natural: null }
   }
   res.end(JSON.stringify(resJson))
})

app.listen(8080)
