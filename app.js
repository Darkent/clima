const datos = require('./datos/datos')
const clima = require('./clima/clima')
const argv = require ('yargs').options({
    direccion:{
        alias:'d',
        desc:'Ciudad de la cual quiere saber el clima.',
        demmand:true
    }
}).argv;


getInfo = async (direccion)=>{
    try {

        let coordenadas = await datos.getDatos(direccion)
        let climaC = await clima.getClima(coordenadas.lat,coordenadas.lon)
    
        return `El clima en ${coordenadas.ciudad} es de ${climaC} grados`
        
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion} por el error ${error}`
    }
   
}



getInfo(argv.direccion)
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});


// datos.getDatos(argv.direccion)
// .then(resp => console.log(resp))
// .catch(e => console.log(e))

// clima.getClima(-12.0621065,-77.0365256)
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

