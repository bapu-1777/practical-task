let btn=document.getElementById('btn');
let output=document.getElementById('result');
let quote=[
    "The optimist sees Opportunity In Every Difficulty.-Winston Churchill",
    "The purpose of our lives is to be happy.-Dalai Lama",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "You only live once, but if you do it right, once is enough. — Mae West",
    "Never let the fear of striking out keep you from playing the game.– Babe Ruth",
    "Money and success don’t change people; they merely amplify what is already there. — Will Smith",
    "Not how long, but how well you have lived is the main thing.” — Seneca",
    "In order to write about life first you must live it.”– Ernest Hemingway",
    "Life is not a problem to be solved, but a reality to be experienced.”– Soren Kierkegaard",
]

btn.addEventListener('click',function(){
    var randomquote=quote[Math.floor(Math.random()*quote.length)]
    output.innerHTML=randomquote;

})