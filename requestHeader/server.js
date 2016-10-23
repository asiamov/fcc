/*
User Story: I can get the IP address, language and operating system for my browser.
*/

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    var myRegexp = /\(([^)]+)\)/
    var matchOs = myRegexp.exec(req.headers['user-agent'])
 
    var resJson = {
        'language' : req.headers['accept-language'].split(",")[0],
        'ipaddress' : req.headers.host,
        'software' : matchOs[1]
    }

    res.end(JSON.stringify(resJson))
})

app.listen(process.env.PORT || 8080)
