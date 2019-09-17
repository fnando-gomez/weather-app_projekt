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

    async saveCity(cityName){
        let foundCity = this.cityData.find(c => c.name === cityName)
        foundCity.saved = true
       await $.post('/city', foundCity, () => console.log(`Sending city: ${foundCity} `))

    }

    async removeCity(cityName){
            await $.ajax({
                url: `city/${cityName}`,
                method: "Delete",
                success:()=>{
                let i = this.cityData.findIndex(c => c.name === cityName)
                    this.cityData.splice(i,1)
                    console.log(`${cityName} just deleted`)
            }
            })
            
    }
}




