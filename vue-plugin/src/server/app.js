var express = require('express')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('*', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
  res.send(html)
})
app.listen(8081, function () {
  console.log('listen')
})
