const express = require('express')
const server = express()
const port = 1571
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const api = require ("./server/routes/api")
const path = require ('path')

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

//Mongoose setup --> 
mongoose.connect("mongodb://localhost/citiesDB", {useNewUrlParser:true, useFindAndModify:false, useUnifiedTopology: true },() => console.log ("DB-connection-up"))

//Serving files
server.use(express.static(path.join(__dirname,`./dist` )))

//Taking routes from here:
server.use('/', api)


//Server running confirmation:
server.get('/status', (req, res) => res.send('Still alive!'))
server.listen(process.env.port || port, () => console.log(`Up-and-running in port: ${port} `))