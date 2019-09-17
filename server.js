const express = require('express')
const server = express()
const PORT = 1571
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const api = require ("./server/routes/api")
const path = require ('path')

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

//Mongoose setup --> 
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/citiesDB', {useNewUrlParser:true},() => console.log ("DB-connection-up"))

//Serving files
server.use(express.static(path.join(__dirname,`./dist` )))
server.use(express.static(path.join(__dirname,`./node_modules`)))

//Taking routes from here:
server.use('/', api)


//Server running confirmation:
server.get('/status', (req, res) => res.send('Still alive!'))
server.listen(process.env.PORT || PORT, () => console.log(`Up-and-running in port: ${PORT} `))