quotes = [
    {
        "text": "\"To find yourself, think for yourself.\"",
        "author": " -Socrates"
    },
    {
        "text": "\"If you seek authenticity for authenticity’s sake you are no longer authentic.\"",
        "author": " -Jean Paul Sartre"
    },
    {
        "text": "\"If you cannot be a poet, be the poem.\"",
        "author": "-David Carradine"
    },
    {
        "text": "\"When one is pretending the entire body revolts.\"",
        "author": " -Anaïs Nin" 
     },
     {
         "text": "\"Be there for others, but never leave yourself behind.\"",
         "author": "-Dodinsky"
     },
     {
         "text": "\"Do what you must, And your friends will adjust.\"",
         "author": "-Robert Brault"
     },
     {
         "text": "\"Just let awareness have its way with you completely.\"",
         "author": "-Scott Morrison"
     },
     {
         "text": "\"We must be our own before we can be another’s.\"",
         "author": "-Ralph Waldo Emerson"
     },
     {
        "text": "\"I try to create sympathy for my characters, then turn the monsters loose.\"",
        "author": "-Stephen King"
     },
     {
        "text": "\"Prose is architecture, not interior decoration.\"",
        "author": "-Ernest Hemingway"
     },
     {
        "text": "\"It’s none of their business that you have to learn to write. Let them think you were born that way.\"",
        "author": "-Ernest Hemingway"
     },
     {
        "text": "\"Most writers regard the truth as their most valuable possession, and therefore are most economical in its use.\"",
        "author": "-Mark Twain"
     },
     {
        "text": "\"To produce a mighty book, you must choose a mighty theme.\"",
        "author": "-Herman Melville"
     },
     {
        "text": "\"It is perfectly okay to write garbage—as long as you edit brilliantly.\"",
        "author": "-C. J. Cherryh"
     },
     {
        "text": "\"A blank piece of paper is God’s way of telling us how hard it to be God.\"",
        "author": "-Sidney Sheldon"
     },
     {
        "text": "\"Not that the story need be long, but it will take a long while to make it short.\"",
        "author": "-Henry David Thoreau"
     },
     {
        "text": "\"Most of the basic material a writer works with is acquired before the age of fifteen.\"",
        "author": "-Willa Cather"
     },
     {
        "text": "\"I love deadlines. I like the whooshing sound they make as they fly by.\"",
        "author": "-Douglas Adams"
     },
     {
        "text": "\"Words are a lens to focus one’s mind.\"",
        "author": "-Ayn Rand"
     },
     {
        "text": "\"Half my life is an act of revision.\"",
        "author": "-John Irving"
     },
     {
        "text": "\"I went for years not finishing anything. Because, of course, when you finish something you can be judged.\"",
        "author": "-Erica Jong"
     },
     {
        "text": "\"Get it down. Take chances. It may be bad, but it’s the only way you can do anything really good.\"",
        "author": "-William Faulkner"
     },
     {
        "text": "\"The work never matches the dream of perfection the artist has to start with.\"",
        "author": "-William Faulkner"
     },
     {
        "text": "\"Great is the art of beginning, but greater is the art of ending.\"",
        "author": "-Henry Wadsworth Longfellow"
     },
     {
        "text": "\"There is nothing permanent except change.\"",
        "author": "-Heraclitus"
     },
];
pictures = [
    { 
        "name": "test", 
        "image": "./assets/bw.jpg" 
    },
    {
        "name":"test3",
        "image": "./assets/02.jpg"
    },
    {
        "name":"test4",
        "image": "./assets/03.jpg"
    },
    {
        "name":"test5",
        "image": "./assets/000011.jpg"
    },
    {
        "name":"test6",
        "image": "./assets/000031.jpg"
    },
    {
        "name":"test7",
        "image": "./assets/DSC_0305-3.jpg"
    },
    {
        "name":"test8",
        "image": "./assets/DSC_0945.jpg"
    },
    {
        "name":"test9",
        "image": "./assets/corrupted.jpg" 
    },
    {
        "name":"test10",
        "image": "./assets/DSC_0311.jpg"
    },
    {
        "name":"test11",
        "image": "./assets/DSC_0427.jpg"
    },
    {
        "name":"test12",
        "image": "./assets/DSC_0893.jpg"
    },
    {
        "name":"test13",
        "image": "./assets/DSC_3806.jpg"                   
    },
    {
        "name":"test14",
        "image": "./assets/DSC_0961.jpg"
    },
    {
        "name":"test15",
        "image": "./assets/DSC_3245-2.jpg"
    },
    {
        "name":"test16",
        "image": "./assets/DSC_3978.jpg"
    },
    {
        "name":"test17",
        "image": "./assets/DSC_3986.jpg"
    },
    {
        "name":"test18",
        "image": "./assets/DSC_4308.jpg"
    },
    {
        "name":"test19",
        "image": "./assets/DSC_5117.jpg"
    },
    {
        "name":"test20",
        "image": "./assets/DSC_5153.jpg"
    },
    {
        "name":"test21",
        "image": "./assets/DSC_5171.jpg"
    },
    {
        "name":"test22",
        "image": "./assets/DSC_5182.jpg"
    },
    {
        "name":"test23",
        "image": "./assets/DSC_5193.jpg"
    },
    {
        "name":"test24",
        "image": "./assets/DSC_5303.jpg"
    },
    {
        "name":"test25",
        "image": "./assets/DSC_5507.jpg"
    },
    
];




 
$(document).ready(function() {
    $("#quote-button").click(function() {
        var quoteNr = Math.floor(Math.random() * quotes.length);
        var leftPosition = Math.floor(Math.random() * window.innerHeight);
        var rightPosition = Math.floor(Math.random()* window.innerWidth);
        var picturesNr = Math.floor(Math.random() * pictures.length);
         $("#background").fadeOut(1000, function(){
            $("#quoteText").text(quotes[quoteNr].text);
            $("#author").text(quotes[quoteNr].author);
            /*$("#quote").css("left", leftPosition / 2);
            $("#quote").css("top", rightPosition / 2);*/
            
            $("#background").fadeIn(1000);
            $("#picture").css("background-image", "url(" + pictures[picturesNr].image + ")");


            
        });
        
    });
    
});
