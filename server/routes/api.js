const express = require ('express')
const router = express.Router()
const request = require ('request')
const moment = require ('moment')
const City = require ('../models/city')

//Connecting & getting useful data from the API(weatherstack) 
router.get('/city/:cityName', function (req, res) {
    let city = req.params.cityName
    const apikey = "c57023029a33f002233b36a4752efb77"//API access Key
    let apiAdd = `http://api.weatherstack.com/current?access_key=${apikey}&query=${city}`
    request(apiAdd,function(error, response, body){
        let fulldataCity = JSON.parse(body)
        let dataCity = {
            name: fulldataCity.location.name,
            updateAt: moment().format(`LLLL`),
            temperature: fulldataCity.current.temperature,
            humidity: fulldataCity.current.humidity,
            feelslike:fulldataCity.current.feelslike,
            condition: fulldataCity.current.weather_descriptions[0],
            conditionPic: fulldataCity.current.weather_icons[0]
        }
        res.send(dataCity)//Inside the request
    })    
})

router.get('/cities', function (req, res) {
    City.find({}, function(err, cities){
        res.send(cities) 
    }) 
})

router.post('/city', function (req, res) {
    let dataCity = new City (req.body)//This line substitue the nex two in comments

    // let {name, updateAt, temperature, humidity, feelslike, condition, conditionPic} = req.body
    // let dataCity = new City ({name, updateAt, temperature, humidity, feelslike, condition, conditionPic })
    dataCity.save()
    res.send('City saved in the DB')
})

router.delete('/city/:cityName', function (req, res) {
    citytodelete = req.params.cityName
    City.findOneAndDelete({name:citytodelete}).exec(console.log("City removed"))
  res.send('City removed from the DB')
})


module.exports = router 