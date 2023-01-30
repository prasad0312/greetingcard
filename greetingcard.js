let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Prasad","to":"All My Friends"}';

let parsedvalue = JSON.parse(greeting);

let GreetingText = document.getElementById("greeting");
let Greetfrom = document.getElementById("greetFrom");
let Greetto = document.getElementById("greetTo");

GreetingText.textContent = parsedvalue.greetText;
Greetfrom.textContent = "From: "+ parsedvalue.from;
Greetto.textContent = "To: " + parsedvalue.to;