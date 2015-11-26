var readfilter = require('./readfilter.js')
var path_name = process.argv[2]
var extension = process.argv[3]

readfilter(path_name, extension, function(err, list){
  if (err){
    return console.error('There was an error:', err)
  }

  list.forEach(function (item) {
      console.log(item)
  })
})

