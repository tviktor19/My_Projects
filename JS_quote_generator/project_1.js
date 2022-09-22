// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{ 
    quote: 'Győzök vagy tanulok!',
    person: 'Ismeretlen'
},{
    quote: "Life isnt about finding yourself. Life is about creating yourself.",
    person: "Geroge Bernanrd Shaw"
}, {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    person: "Buddha"
}, {
    quote: "We don't remember days, we remember moments.",
    person: "Viktor"
}, {
    quote: "Life is too short for long-term grudges",
    person: "Elon Musk"
}];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})