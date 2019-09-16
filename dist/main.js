const render = new Renderer()
const tempmanager = new Tempmanager()
 
const loadPage = async function(){
    await tempmanager.getDataFromDB()
    let cityData = tempmanager.cityData
    render.renderCities(cityData)
}

const handleSearch = async function(){
    let input = $("#city_search").val()
    console.log(tempmanager.cityData)
    await tempmanager.getCityData(input)
    console.log(tempmanager.cityData)
    render.renderCities(tempmanager.cityData)
}

$('body').on('click','.saveButton', function(){
    let citytoSave = $(this).siblings('.name').text()
    console.log(citytoSave)
    tempmanager.saveCity(citytoSave)
})

$('body').on('click','.deleteButton', function(){
    let citytoDelete = $(this).siblings('.name').text()
    console.log(citytoDelete)
    tempmanager.removeCity(citytoDelete)
})