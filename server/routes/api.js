const express = require ('express')
const mongoose = require ('mongoose')
const router = express.Router()
const City = require ('../models/city')
const request = require ('request')
const moment = require ('moment')



const apikey = "c57023029a33f002233b36a4752efb77"//API access Key

router.get('/city/:cityName', function (req, res) {
    city = req.params.cityName

    let apiAdd = `http://api.weatherstack.com/current?access_key=${apikey}&query=${city}`
    request(apiAdd,function(error, response, body){
        let fulldataCity = JSON.parse(body)
        let dataCity = new City ({
            name: fulldataCity.location.name,
            updateAt: moment().format(`LLLL`),
            temperature: fulldataCity.current.temperature,
            humidity: fulldataCity.current.humidity,
            feelslike:fulldataCity.current.feelslike,
            condition: fulldataCity.current.weather_descriptions[0],
            conditionPic: fulldataCity.current.weather_icons[0]
        })
        
        dataCity.save()
        
        res.send(dataCity)//Inside the request

    })    
})

router.get('/cities', function (req, res) {
    City.find({}, function(err, cities){
        res.send(cities) 
    })
  
})

module.exports = router 