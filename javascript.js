
function getComputerChoice(){
    var outcomes = [
        'rock',
        'paper',
        'scissors'
        ]

    var results = outcomes[Math.floor(Math.random() * outcomes.length)];
    return(results);
}  

let playerScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const playerSelection = 
//const div = document.querySelector('#answers')

const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click',play)

const paperButton = document.querySelector('.paper');
rockButton.addEventListener('click',play)

const scissorsButton = document.querySelector('.scissors');
rockButton.addEventListener('click',play)

function play(){
    let compMove = getComputerChoice();
    let status = playRound(this.id,compMove);
    //let p = document.createElement('p');
    if (status == 'lose'){
        computerScore += 1;
        
    }
    else if(status =='win'){
        playerScore += 1;
        
    }
    

}

function playRound(playerSelection, computerSelection){
    
    if (computerSelection === "rock" && playerSelection === "rock"){
        return('draw');
    }   
    else if(computerSelection === "paper" && playerSelection === "rock"){
        return('lose');
    }   
    else if(computerSelection === "scissors" && playerSelection === "rock"){
        return('win'); 
    }
    else if(computerSelection === "paper" && playerSelection === "paper"){
        return("draw")
    }
    else if(computerSelection === "scissors" && playerSelection === "paper"){
        return("lose")
    }
    else if(computerSelection === "scissors" && playerSelection === "scissors"){
        return("draw")
    }
    else if(computerSelection === "rock" && playerSelection === "scissors"){
        return("lose")
    }
    else if(computerSelection === "rock" && playerSelection === "paper"){
        return("win")
    }
    else if(computerSelection === "paper" && playerSelection === "scissors"){
        return("win")
    }
    
}

function game(){
    for (let i = 0; i < 5; i++){
        if (i <= 5){    
            playRound(playerSelection, computerSelection);
        
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection))
        }
    }
}




