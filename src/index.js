function displayTemperature(response){
    let temperatureElement =document.querySelector("#tempeture");
   let cityElement =document.querySelector("#city");
    let discripionElement =document.querySelector("#discripion");
     let humidityElement =document.querySelector("#humidity");
      let windElement =document.querySelector("#wind");
   temperatureElement.innerHTML = Math.round (response.data.main.temp);
   cityElement.innerHTML = response.data.name;
   discripionElement.innerHTML= response.data.weather[0].discription;
   humidityElement.innerHTML= response.data.main.humidity;
   windElement.innerHTML= Math.round(response.data.wind.speed);
}




let apiKey = "6f727a99c6dff687686c2d48cae1c86d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);
