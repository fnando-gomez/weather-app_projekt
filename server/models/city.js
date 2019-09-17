const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String,
    updateAt: Date,
    temperature: Number,
    humidity: Number,
    feelslike:Number,
    condition: String,
    conditionPic: String,
    saved:Boolean
})

const City = mongoose.model('city', citySchema)// City model of citySchema
module.exports = City