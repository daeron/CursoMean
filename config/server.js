const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
server.use(bodyParser.urlencoded({limit: "50mb", extended: false, parameterLimit:50000}))
server.use(bodyParser.json({limit: "50mb"}))
server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`);
})
module.exports = server
