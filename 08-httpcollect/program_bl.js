var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error("An error occured: ", err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})