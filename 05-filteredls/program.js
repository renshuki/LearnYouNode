var fs = require('fs')
var path = require('path')
var path_name = process.argv[2]
var extension = process.argv[3]
fs.readdir(path_name, function callback(err, list) {
  list.forEach(function(item) {
    if(path.extname(item).substring(1) == extension)
      console.log(item)
  })
})