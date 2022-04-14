
import axios from "axios"

export function getWeather(setState) {

 
      
      function success(pos) {
        var crd = pos.coords;
        const lat = crd.latitude
        const long = crd.longitude
        const key  = "471a59cb1f8e23d0bce30f902839e069"
        axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`)
        .then(({data})=>  setState(data))
        
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error);
}

