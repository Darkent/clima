
const axios = require('axios');

let getDatos = async (direccion) =>{

    let encodeUrl = encodeURI(direccion);

    let result = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=%22${encodeUrl}%22&key=a08ab980938843789855fc7e05f161d3`);

    if(result.data.total_results === 0){
        throw `No se encontraron datos para la dirección ${direccion}`
    }
    
    return{
        ciudad: result.data.results[0].formatted,
        lat : result.data.results[0].geometry.lat,
        lon : result.data.results[0].geometry.lng
    }


}

module.exports = {
    getDatos
}


/*let lat,lon,ciudad="";
axios.get(`https://api.opencagedata.com/geocode/v1/json?q=%22${encodeUrl}%22&key=a08ab980938843789855fc7e05f161d3`)
.then((result) => {
  //  console.log(result.data.results.annotations);
            ciudad = result.data.results[0].formatted;
             lat = result.data.results[0].geometry.lat;
             lon = result.data.results[0].geometry.lng;
                console.log(`Ciudad: ${ciudad}`);
                console.log(`Latitud: ${lat}`);
                console.log(`Longitud: ${lon}`);
        
       
    

}).catch((err) => {
    console.log(err);
}); */