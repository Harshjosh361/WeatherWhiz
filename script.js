const URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const key = "7fb2542b721d5faf349e4d48702a4b82";

let input = document.querySelector(".search input");
let inpuBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


const checkWeather=async(city)=>{
    let response = await fetch(URL + city + `&appid=${key}`);
    let data = await response.json();//convert json into js object
    if(response.status=="404"){
        document.querySelector(".error").style.display ="block";
    }
    else{
        document.querySelector(".city").innerHTML=data.name; 
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%" ;
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
        if(data.weather[0].main=="Clouds")
        {
            weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main=="Rain")
        {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main =="Clear")
        {
            weatherIcon.src = "images/clear.png";
        }   else if(data.weather[0].main =="Snow")
        {
            weatherIcon.src = "images/snow.png";
        }
        else if(data.weather[0].main =="Drizzle")
        {
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main =="mist"){
            weatherIcon.src = "images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

   
    
};


inpuBtn.addEventListener("click",()=>{
    checkWeather(input.value);
})

checkWeather();