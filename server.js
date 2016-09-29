var url = require('url')
var http = require('http')

var isDate = function(date) {
    return ((new Date(date)).toString() !== "Invalid Date") ? true : false;         
}

var server = http.createServer(function (req, res) {  
  // request handling logic...  
    var parsed =  url.parse(req.url, true)
    console.log(parsed)
    if (parsed.pathname === "/asd") {
        if (parsed.query) {
            console.log(parsed.query)
            if (isDate(parsed.query)) {
               var datevar = new Date(parsed.query)
               res.writeHead(200, { 'Content-Type': 'application/json' })
               var resJson = {unix: datevar.getTime(),
                             natural: datevar.getMonth() + datevar.getDay() + datevar.getYear()
               }
               console.log(resJson)
               res.end(JSON.stringify(resJson))
            }
            
            
            
        }
    }
})  
server.listen(8080)
