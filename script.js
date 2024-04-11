const apikey="2080748f04bccd918532910a8515a10f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weathericon");

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/Hr";
    
    switch(data.weather[0].main) {
        case "Clear":
            weathericon.src = "assets/clear.png"
            break
        case "Clouds":
            weathericon.src = "assets/clouds.png"
            break
        case "Rain":
            weathericon.src = "assets/rain.png"
            break
        case "Drizzle":
            weathericon.src = "assets/drizzle.png"
            break
        case "Haze":
            weathericon.src = "assets/mist.png"
            break
        case "Snow":
            weathericon.src = "assets/snow.png"
            break
        default:
            alert("Error, not weather icon");
    }

   document.querySelector(".weather").style.display="block";
}

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener('keypress',(event)=>{
    if(event.key==='Enter')
    checkWeather(searchBox.value);
})
checkWeather();