let XMLHTTPRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'
//para hacer instancias a un llamado API
//utilizaremos xmlhhtprequest
//por qué no fetch? fetch esta disponibles desde es6, y trabaja con promesas
//entonces este ejercicio, es con callbacks, para observar como se hacía anteriormente

function fetchData(url_api, callback) {
    let xhttp = new XMLHTTPRequest();//
    //XMLHTTPRequest: este elemento creado originalmente por Microsoft, y adaptado como un standard
    //para las empresas que como trabajan dentro de Javascript
    xhttp.open('GET', url_api, true);//true: para activar el asincronismo dentro de XMLHTTPRequest
    xhttp.onreadystatechange = function(event) {
        //5 estados:
        //0: Solicitud no inicializada
        //1: Conexión establecida con servidor
        //2: solicitud recibida
        //3: procesando solicitudes (descargas, si las hubiere)
        //4: solicitud finalizada y respuesta lista
        if(xhttp.readyState === 4 ){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }
            else {
                const error = new Error('Error: '+ url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

//1 Obtener elementos
//2 Obtener personajes
//3 obtener ubicación de personajes

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.log(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension)
        })
    })
})