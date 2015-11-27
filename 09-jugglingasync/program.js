var http = require('http')
var concatStream = require('concat-stream')
var results = []
var count = 0

function getStream(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(concatStream(function (data) {
      results[index] = data.toString()
      count++

      if (count == 3)
        printStream()
    }))
  })
}

function printStream() {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

for (var i = 0; i < 3; i++)
  getStream(i)