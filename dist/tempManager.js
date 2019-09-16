class Tempmanager {
    constructor() {
        this.cityData = []
    }

    async getDataFromDB(){
        let data = await $.get('/cities')
        this.cityData = []
        data.forEach(c => this.cityData.push(c))
    }

    async getCityData(cityName){ 
        let Data = await $.get(`/city/${cityName}`)
        this.cityData.unshift(Data)
    }

    saveCity(cityName){
        let foundCity = this.cityData.find(c => c.name === cityName)
        $.post('/city', foundCity, () => console.log(`Sending city: ${foundCity} `))
    }

    removeCity(cityName){
            $.ajax({
                url: `city/${cityName}`,
                method: "Delete",
                success:()=>console.log(`${cityName} just deleted`)
            })
            
    }
}




