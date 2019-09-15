const render = new Renderer()
const tempmanager = new Tempmanager()
 
const loadPage = async function(){
    tempmanager.getDataFromDB().then(() => {render.renderCities(tempmanager.cityData) })
}