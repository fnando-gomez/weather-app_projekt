class Tempmanager {
    constructor() {
        this.cityData = []
    }

    getDataFromDB() {
        $.get('/cities', function (data) {
            this.cityData = data
        })
    }
    
    async getCityData(cityName){ 
        let Data = await $.get(`/city/${cityName}`)
        this.cityData.push(Data)
    }

    saveCity(cityName){
        let foundCity = this.cityData.find(c => c.name === cityName)
        $.post('/city', foundCity, () => console.log(`Sending city: ${foundCity} `))
    }

    removeCity(cityName){
            $.ajax({
                url: `city/${cityName}`,
                method: "Delete",
            })
    }
}
        


