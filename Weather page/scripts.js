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
var weather = [
    {"coord":
    {"lon":145.77,"lat":-16.92},
    "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
    "base":"cmc stations",
    "main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
    "wind":{"speed":5.1,"deg":150},
    "clouds":{"all":75},
    "rain":{"3h":3},
    "dt":1435658272,
    "sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
    "id":2172797,
    "name":"Cairns",
    "cod":200},
];


$(document).ready(function() {
    var getWeather = function(data) {
        $.getJSON('http://api.openweathermap.org/data/2.5/weather', {
            lat: data.lat,
            lon: data.lon,
            appid: "[&APPID=e107aadc09226b858fa632ec65fe4b33]"
        }, showWeather, 'jsonp');
    };
    
    $("#background").fadeOut(0, function() {
        var picturesNr = Math.floor(Math.random() * pictures.length);
        $("#background").css("background-image", "url(" + pictures[picturesNr].image + ")");
    });
    $("#background").fadeIn(2000);
    
        $.getJSON('http://ip-api.com/json', getWeather)
        var picturesNr = Math.floor(Math.random() * pictures.length);
        $("#background").css("background-image", "url(" + pictures[picturesNr].image + ")");
        $("#btn").click(function() {

            var url =  'http://api.openweathermap.org/data/2.5/weather?q=Bucharest,3166-2&APPID=e107aadc09226b858fa632ec65fe4b33' + 'lat=' + lat     + '&lon=' + lon + '&APPID=e107aadc09226b858fa632ec65fe4b33' + apiKey;
    
        $("#btn").click(function() {
        })
    });
});
