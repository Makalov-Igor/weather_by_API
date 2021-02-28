
let api_key = '0d6fc040f89c1c2bf1fce7cce7e72f34';



function getWeather() {
    let city_name = document.querySelector('.city').value;
    let api_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${api_key}&units=metric&lang=ru`;
    console.log(city_name);
    fetch(api_url)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city_name').innerHTML = data.city.name;
            document.querySelector('.temperature').innerHTML = Math.round(data.list[0].main.temp) + '&deg;';
            document.querySelector('.description').innerHTML = data.list[0].weather[0]['description'];
            document.querySelector('.w_icon').setAttribute('src', `/img/${data.list[0].weather[0]['icon']}.png`)
            document.querySelector('.wind').innerHTML = `Скорость ветра - ${Math.round(data.list[0].wind.speed)} м/с`;
        })
        .catch(function () {

        })
}

window.addEventListener('load', getWeather);
document.querySelector('.city').addEventListener('change', (event) => { getWeather() })