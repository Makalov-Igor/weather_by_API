
let api_key = '0d6fc040f89c1c2bf1fce7cce7e72f34';
let cityNames = document.querySelectorAll('.city_name');
let temperature = document.querySelectorAll('.temperature');
let description = document.querySelectorAll('.description');
let weatherIcons = document.querySelectorAll('.w_icon');
let wind = document.querySelectorAll('.wind');
let date = document.querySelectorAll('.date');
let city_name = 'Moscow';
let all_city = document.querySelectorAll('.city');

for (let key in all_city) {
    all_city[key].onchange = getWeather;
}

function getWeather() {
    for (let i = 0; i < all_city.length; i++) {
        if (all_city[i].checked) {
            city_name = all_city[i].value;
        }
    }
    let api_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${api_key}&units=metric&lang=ru`;

    fetch(api_url)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            // console.log(data);
            let k = 0;
            for (let i = 0; i < cityNames.length; i++) {
                cityNames[i].innerHTML = data.city.name;
                temperature[i].innerHTML = Math.round(data.list[k].main.temp) + '&deg;';
                description[i].innerHTML = data.list[i].weather[0]['description'];
                weatherIcons[i].setAttribute('src', `img/${data.list[k].weather[0]['icon']}.png`);
                wind[i].innerHTML = `Скорость ветра:  ${Math.round(data.list[k].wind.speed)} м/с`;
                if (k == 0) date[i].innerHTML = 'Сейчас';
                else date[i].innerHTML = data.list[k].dt_txt;
                k += 8;
            }
        })
        .catch(function () {

        })
}

window.addEventListener('load', getWeather);


