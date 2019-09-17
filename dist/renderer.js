class Renderer{

    renderCities(cityData){
        $('#container').empty()
        let source = $('#cities_template').html()
        let template = Handlebars.compile(source)
        let newHTML = template ({cityData})
        $('#container').append(newHTML)
        $('#city_search').val("")

    }
}