pictures = [
    {
        "name": "cloudy",
        "image": "./assets/cloudy-weather.jpg"
    },
    {
        "name": "rainy",
        "image": "./assets/rainy-weather2.jpg"
    },
    {
        "name": "night",
        "image": "./assets/night-time.jpg"
    },
    {
        "name": "storm",
        "image": "./assets/storm-weather2.jpg"
    },
    {
        "name": "snow",
        "image": "./assets/winter-weather.jpg"
    },
    {
        "name": "fog",
        "image": "./assets/ceata-weather.jpg"
    },
    {
        "name": "hot",
        "image": "./assets/hot-weather.jpg" 
    },
    {
        "name": "warm",
        "image": "./assets/sunny-weather.jpg"
    },
    {
        "name": "cold",
        "image": "./assets/winter-weather.jpg"
    },
    {
        "name": "Frast",
        "image":"./assets/winter-weather.jpg"
    }
];

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (5* (fahrenheit - 32)) / 9;
    return celsius;
};
function getWeather(data) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather', { q: data.city, appid: "e107aadc09226b858fa632ec65fe4b33" }, showWeather);
};
function chooseImage(result) {
    result.main.temp = fahrenheitToCelsius(result.main.temp);
    if (result.weather[0].main == "Rain") {
        $("#background").css("background-image", "url(' ./assets/rainy-weather2.jpg')");  
    } else if(result.weather[0].main == "Clear") {
        $("#background").css("background-image", "url(' ./assets/sunny-weather.jpg')");
    } else if(result.weather[0].main == "Haze") {
        $("#background").css("background-image", "url(' ./assets/ceata-weather.jpg')");
    } else if(result.weather[0].main == "Clouds") {
        $("#background").css("background-image", "url(' ./assets/cloudy-weather.jpg')");
    } else if(result.weather[0].main == "Snow") {
        $("#background").css("background-image", "url(' ./assets/winter-weather.jpg')");

}

function showWeather(result) {
    var degrees = fahrenheitToCelsius(result.main.temp);
    $("#info").text(result.weather[0].description);
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
    $("#background").fadeOut(0, function() {
        var picturesNr = Math.floor(Math.random() * pictures.length);
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
        chooseImage(result);
    });
    $("#background").fadeIn(2000);
    var picturesNr = Math.floor(Math.random() * pictures.length);
 }

function changeCity() {
    city = "Kongo";
    $("#local-location").text(city);
    return city;
};

$(document).ready(function() {
    var positionData = {};
    positionData.city = changeCity();

    getWeather(positionData);   

    
})};
