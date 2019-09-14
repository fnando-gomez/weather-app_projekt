const express = require('express')
const server = express()
const port = 1571

const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const request = require ('request')

const api =require ("./server/routes/api")

//Serving files


server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

//Mongoose Setup
mongoose.connect("mongodb:localhost/citiesDB", {useNewUrlParser:true, useFindAndModify:false},() => console.log ("DB-connection-up"))

server.use('/', api)


server.get('/', (req, res) => {
  res.send('You should point to the correct route -->')
})

server.get('/status', (req, res) => res.send('Still alive!'))

server.listen(process.env.port || port, () => console.log(`Up-and-running in port: ${port} `))