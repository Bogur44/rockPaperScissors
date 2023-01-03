
function getComputerChoice(){
    var outcomes = [
        'rock',
        'paper',
        'scissors'
        ]

    var results = outcomes[Math.floor(Math.random() * outcomes.length)];
    return(results);
}  
const result = document.querySelector('.result');
const guessSubmit = document.querySelector('.submit');
const playerSelection = getComputerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    
    if (computerSelection === "rock" && playerSelection === "rock"){
        result.textContent = 'its a draw';
    }   
    else if(computerSelection === "paper" && playerSelection === "rock"){
        result.textContent = 'you lost';
    }   
    else if(computerSelection === "scissors" && playerSelection === "rock"){
        result.textContent = 'you won';
    }
    else if(computerSelection === "paper" && playerSelection === "paper"){
        return("its a draw")
    }
    else if(computerSelection === "scissors" && playerSelection === "paper"){
        return("you lost")
    }
    else if(computerSelection === "scissors" && playerSelection === "scissors"){
        return("its a draw")
    }
    else if(computerSelection === "rock" && playerSelection === "scissors"){
        return("you lost")
    }
    else if(computerSelection === "rock" && playerSelection === "paper"){
        return("you won")
    }
    else if(computerSelection === "paper" && playerSelection === "scissors"){
        return("you won")
    }
    
}
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection))

