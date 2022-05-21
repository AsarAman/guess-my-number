'use strict';



let score = 20;
let highScore = 0;
let guessNumber = Math.trunc(Math.random() * 20) +1 ;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if (!guess) {
        document.querySelector('.message').textContent = 'Please enter a number!';
    }
    if (guess === guessNumber) {
        document.querySelector('.message').textContent = 'You won!';
        document.querySelector('.number').textContent= guessNumber;

        document.body.style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';


        if (score> highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    

    }
    else if(guess !== guessNumber){

        if (score > 1) {
            document.querySelector('.message').textContent= guess > guessNumber ? 'Too high!' : 'too low!';
            score--;
            document.querySelector('.score').textContent= score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }


    }
    
})

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
 guessNumber = Math.trunc(Math.random() * 20) +1 ;

 document.querySelector('.message').textContent = 'start guessing...';

    document.querySelector('.guess').value ='';
    document.querySelector('.score').textContent= score;
    document.body.style.backgroundColor ='#222';
    document.querySelector('.number').textContent= '?';
    document.querySelector('.number').style.width = '15rem';

    
})

    


    





            



    
    


