var http = require('http')
var url = require('url')

function parsetime(time) {
  return {
           hour: time.getHours(),
           minute: time.getMinutes(),
           second: time.getSeconds()
         }
}

function unixtime(time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  if (req.method != 'GET')
    return res.end('GET request required')

  var parsedurl = url.parse(req.url, true)
  var time = new Date(parsedurl.query.iso)
  var data

  if(parsedurl.pathname == "/api/parsetime")
    data = parsetime(time)
  else if(parsedurl.pathname == "/api/unixtime")
    data = unixtime(time)

  if (data) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))