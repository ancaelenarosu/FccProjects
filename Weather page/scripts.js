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


$(document).ready(function() {
    $("#background").fadeOut(2000, function() {
        var picturesNr = Math.floor(Math.random() * pictures.length);
        $("#background").css("background-image", "url(" + pictures[picturesNr].image + ")");
    });
    $("#background").fadeIn(2000);
        var picturesNr = Math.floor(Math.random() * pictures.length);
        $("#background").css("background-image", "url(" + pictures[picturesNr].image + ")");
    });
});