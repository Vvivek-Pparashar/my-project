'use strict';

document.querySelector(".guess").value = " ";
document.querySelector(".number").textContent = "?";

let ram_number =  Math.ceil(Math.random() * 20);

const score = document.querySelector(".score");
const number = document.querySelector(".number");

let displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}


document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);

    if(!guess){
        displayMessage("❌ Not a Number");
        score.textContent = ` ${score.textContent - 1}`;
    }else{
        if( guess == ram_number){
            displayMessage("correct_guess!!");
            document.body.style.background = " rgb(96, 179, 71)";

            let highscore = document.querySelector(".highscore");
            number.textContent = ram_number;

            if(Number(score.textContent) > Number(highscore.textContent)){
                highscore.textContent = score.textContent;
            }

        }else{
            score.textContent = ` ${score.textContent - 1}`;
            displayMessage(guess > ram_number ? "🚀Too high!!" : "🌂Too low!!");
        }
    }

})

document.querySelector(".again").addEventListener("click", function(){
    document.body.style.background = "rgb(34, 34, 34)";
    document.querySelector(".guess").value = " ";
    ram_number =  Math.ceil(Math.random() * 20);
    
    displayMessage("Start guessing...");
    score.textContent = "20";
    number.textContent = "?";

})