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

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (5* (fahrenheit - 32)) / 9;
    return celsius;
};

function getWeather(data) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather', { q: data.city, appid: "e107aadc09226b858fa632ec65fe4b33" }, showWeather);
};

function showWeather(result) {
    var degrees = fahrenheitToCelsius(result.main.temp);
    $("#btn").click(function() {
        var type = $("#btn").text();
        console.log(type);
        if (type == "Fahrenheit") {
            $("#btn").text("Celsius");
            $("#fahrenheit-celsius").text(degrees);
        }
        else { 
            $("#btn").text("Fahrenheit");
            $("#fahrenheit-celsius").text(result.main.temp);
        }
        });
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
        $("#minimum-temperature").text(result.main.temp_min);
        $("#maximum-temperature").text(result.main.temp_max);
        $("#wind").text(result.wind.speed);
        $("#clouds").text(result.clouds.all);
        $("#sunrise").text(result.sys.sunrise);
        $("#sunset").text(result.sys.sunset);
        $("#fahrenheit-celsius").text(result.main.temp);
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
