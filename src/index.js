function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours <10){
        hours=`0${hours}`
    }
    let minutes = date.getMinutes();
    if (minutes<10){
        minutes=`0${minutes}`
    }
    let days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = [date.getDay()];
    return `${day} ${hours}:${minutes}`
}



function displayTemperature(response){
    let temperatureElement =document.querySelector("#tempeture");
   let cityElement =document.querySelector("#city");
    let discripionElement =document.querySelector("#discripion");
     let humidityElement =document.querySelector("#humidity");
      let windElement =document.querySelector("#wind");
       let dateElement =document.querySelector("#date");
   temperatureElement.innerHTML = Math.round (response.data.main.temp);
   cityElement.innerHTML = response.data.name;
   discripionElement.innerHTML= response.data.weather[0].discription;
   humidityElement.innerHTML= response.data.main.humidity;
   windElement.innerHTML= Math.round(response.data.wind.speed);
   dateElement.innerHTML = formatDate(response.data.dt*1000);
}




let apiKey = "6f727a99c6dff687686c2d48cae1c86d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=${apiKey}&units=metric`;
let city = "Pretoria";

axios.get(apiUrl).then(displayTemperature);
