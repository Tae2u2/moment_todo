
const API_KEY="2c35d8a2ec21aa539d498762da086784"

function onGeoOK(position){
    const lat =position.coords.latitude;
    const lon =position.coords.longitude;
    url=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const cityName = document.querySelector("#weather span:last-child");

        cityName.innerText=data.name;
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("당신의 위치를 찾을 수가 없어서 날씨를 알려드릴 수 없네용")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);