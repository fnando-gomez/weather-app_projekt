const express = require ('express')
const mongoose = require ('mongoose')
const router = express.Router()
const City = require ('../models/city')
const request = require ('request')
const moment = require ('moment')
moment.lang('es');

//Mongoose setup
mongoose.connect("mongodb:localhost/citiesDB", {useNewUrlParser:true, useFindAndModify:false},() => console.log ("DB-connection-up"))


const apikey = "c57023029a33f002233b36a4752efb77"//API access Key
router.get('/forecast/:city', function (req, res) {
    const city = req.params.city

    let apiAdd = `http://api.weatherstack.com/current?access_key=${apikey}&query=${city}`
    request(apiAdd,function(error, response, body){
        let fulldataCity = JSON.parse(body)
        let dataCity = {
            name: fulldataCity.location.name,
            updateAt: moment().format(`LLLL`),
            temperature: fulldataCity.current.temperature,
            humidity: fulldataCity.current.humidity,
            feelslike:fulldataCity.current.feelslike,
            condition: fulldataCity.current.weather_descriptions,
            conditionPic: fulldataCity.current.weather_icons
        }
        
    res.send(dataCity)//Inside the request
    })    
})

module.exports = router 