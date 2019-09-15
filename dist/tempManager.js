class Tempmanager {
    constructor() {
        this.cityData = []
    }

    // getDataFromDB() {
    
    //    $.get('/cities', (data, status )=>{
    //         this.cityData = data
    //         console.log(this.cityData)
    //     })
    // }

    // async getDataFromDB(){
    //     $.get('/cities', await function(cityData){
    //         this.cityData = cityData
    //     })
    //     //return $.get('/cities')
    // }

    async getDataFromDB(){
        let data = await $.get('/cities')
        this.cityData = data
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
                success:()=>console.log(`${cityName}just deleted`)
            })
    }
}




