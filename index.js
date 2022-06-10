
// getting username...
const player = prompt("What's your name?");
var guess;

console.log(`                    `);

// function to generate random number
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
 
// setting range as a function parameter....

function range(a){
     return randomNumber(1,2);
}

// player enters a number
 guess = prompt(`${player} what number am I thinking of ... 1 or 2 ?`)

// compare player entry to random number generated....
if(guess!= range()){
    alert(`loool, try again`)
}else
    alert(`That's right ... congratulations`);