pictures = [
    {
        "name": "sunny",
        "image": "./assets/sunny-weather.jpg"
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
    console.log(result.main);
    if (result.main.temp > 250) {
        $("#info").text("e cald");
    }
    else {
        $("#info").text("e frig");
    }
    $("#weather-info").text(result.main.temp);
    $("#background").fadeOut(0, function() {
        var picturesNr = Math.floor(Math.random() * pictures.length);
        $("#background").css("background-image", "url(" + pictures[picturesNr].image + ")");
    });
    $("#background").fadeIn(2000);
    var picturesNr = Math.floor(Math.random() * pictures.length);
    $("#background").css("background-image", "url(" + pictures[picturesNr].image + ")");
}

function changeCity() {
    city = "Washington";
    return city;
};

$(document).ready(function() {
    var positionData = {};
    positionData.city = changeCity();

    getWeather(positionData);    
});
