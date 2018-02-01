pictures = [
    {
        "name": "cloudy",
        "image": "./assets/cloudy-weather.jpg"
    },
    {
        "name": "mountain",
        "image": "./assets/mountain-weather.jpg"
    },
    {
        "name": "night",
        "image": "./assets/night-time.jpg"
    },
    {
        "name": "storm",
        "image": "./assets/storm-weather.jpg",
    },
    {
        "name": "winter",
        "image": "./assets/winter-weather.jpg"
    },
];

function getWeather(data) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather', { q: data.city, appid: "e107aadc09226b858fa632ec65fe4b33" }, showWeather);
};

function showWeather(result) {
    console.log(result);
    if (result.main.temp > 250) {
        $("#info").text("Warm");
    }
    else {
        $("#info").text("Cold");
    }
    $("#background").fadeOut(0, function() {
        var picturesNr = Math.floor(Math.random() * pictures.length);
        $("#background").css("background-image", "url(" + pictures[picturesNr].image + ")");
        $("#icon").css("weather-icons", "./weather-icons.min.css")
        $("#temperature").text(result.main.temp);
        $("#pressure").text(result.main.pressure);
        $("#humidity").text(result.main.humidity);
    });
    $("#background").fadeIn(2000);
    var picturesNr = Math.floor(Math.random() * pictures.length);
    $("#background").css("background-image", "url(" + pictures[picturesNr].image + ")");


}

function changeCity() {
    city = "Bucharest";
    return city;
};

$(document).ready(function() {
    var positionData = {};
    positionData.city = changeCity();

    getWeather(positionData);    
});
