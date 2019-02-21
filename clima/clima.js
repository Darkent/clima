const axios = require('axios');


getClima = async(latitud,longitud) =>{
    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=5241ad9eb24d753375a76bbe52f1f06e`)


    return clima.data.main.temp;

}


module.exports = {
    getClima
}