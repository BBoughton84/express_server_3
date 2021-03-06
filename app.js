const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const cars = require('./routes/main.js')

app.use('/cars', cars)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.listen(PORT, function() {
  console.log(`listening on port ${PORT} for server 3 day`)
})
