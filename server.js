const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

// serve static assets normally
app.use('/static', express.static(__dirname + '/static'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  console.log(' redirect to : ' + path.resolve(__dirname, 'index.html'))
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)