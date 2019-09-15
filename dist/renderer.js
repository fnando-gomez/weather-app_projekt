class Renderer{

    renderCities(cityData){
        let source = $('#cities_template').html()
        let template = Handlebars.compile(source)
        let newHTML = template ({cityData})
        $('#container').empty().append(newHTML)
    }
}