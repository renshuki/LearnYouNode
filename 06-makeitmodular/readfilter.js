var fs = require('fs')
var path = require('path')
var result = []

module.exports = function (path_name, extension, callback) {
  fs.readdir(path_name, function (err, list) {
    if (err)
      return callback(err)

    list.forEach(function (item) {
      if(path.extname(item).substring(1) == extension)
        result.push(item)
    })

    callback(null, result)
  })
}