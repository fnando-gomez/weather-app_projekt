const express = require('express')
const server = express()
const port = 1571

const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')


const api =require ("./server/routes/api")

mongoose.connect("mongodb://localhost/citiesDB", {useNewUrlParser:true, useFindAndModify:false, useUnifiedTopology: true },() => console.log ("DB-connection-up"))
//Serving files


server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

//Mongoose Setup

server.use('/', api)


server.get('/', (req, res) => {
  res.send('You should point to the correct route -->')
})

server.get('/status', (req, res) => res.send('Still alive!'))

server.listen(process.env.port || port, () => console.log(`Up-and-running in port: ${port} `))