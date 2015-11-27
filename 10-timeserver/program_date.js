var net = require('net')

function leadZero(i) {
  return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function (socket) {
  var date = new Date()
  var year = date.getFullYear()
  var month = leadZero(date.getMonth()+1)
  var day = leadZero(date.getDate())
  var hours = leadZero(date.getHours())
  var minutes = leadZero(date.getMinutes())

  var data = year+"-"+month+"-"+day+" "+hours+":"+minutes
  socket.end(data+"\n")
})
server.listen(process.argv[2])