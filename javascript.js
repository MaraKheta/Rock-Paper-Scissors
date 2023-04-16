'use strict'

function getComputerChoice() {
    let randomNumber;
    randomNumber = Math.round(Math.random()*10);
    // console.log(randomNumber)
    let CompChoise = "";
    switch(randomNumber){
        case 0:
            CompChoise = "rock"
            break;
        case 1:
            CompChoise = "paper"
            break;
        case 2:
            CompChoise = "scissors"
            break;
        case 3:
            CompChoise = "rock"
            break;
        case 4:
            CompChoise = "paper"
            break;
        case 5:
            CompChoise = "scissors"
            break;
        case 6:
            CompChoise = "rock"
            break;
        case 7:
            CompChoise = "paper"
            break;
        case 7:
            CompChoise = "scissors"
            break;
        case 8:
            CompChoise = "rock"
            break;
        case 9:
            CompChoise = "paper"
            break;
        case 10:
            CompChoise = "scissors"
            break;
    }

    return CompChoise
}

function oneRoundGame(playerSelection,computerSelection) {
    let playerSelection = prompt("Choose your weapon!");
    let computerSelection = getComputerChoice()
    playerSelection = playerSelection.trim().toLowerCase()

    if (playerSelection == computerSelection){
        // console.log("Ahh, it's a DRAW!")
        winner = "draw"
    } else if (playerSelection == "rock" && computerSelection =="paper"){
        // console.log("You Lose! Paper beats Rock!")
        winner = "computer"
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        // console.log("You WIN! Rock beats Scissors!")
        winner = "you"
    } else if (playerSelection == "paper" && computerSelection =="rock"){
        // console.log("You Win! Paper beats Rock!")
        winner = "you"
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        // console.log("You Lose! Scissors beats Paper!")
        winner = "computer"
    } else if (playerSelection == "scissors" && computerSelection =="paper"){
        // console.log("You Win! Scissors beats Paper!")
        winner = "you"
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        // console.log("You Lose! Rock beats Scissors!")
        winner = "computer"
    }else {
        // console.log("Looks like you're not interested anymore?!")
        winner = ""
    }

    return winner;
}


function game(playerSelection,computerSelection){
    let counter = 0
    let score = 0
    while (counter < 5){
        let playerSelection = prompt("Choose your weapon!");
        let computerSelection = getComputerChoice()
        playerSelection = playerSelection.trim().toLowerCase()

        if (playerSelection == computerSelection){
            console.log("Round " +(counter+1)+ ": Ahh, it's a DRAW!")
            counter++
        } else if (playerSelection == "rock" && computerSelection =="paper"){
            console.log("Round " +(counter+1)+ ": You Lose! Paper beats Rock!")
            counter++
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
            console.log("Round " +(counter+1)+ ": You WIN! Rock beats Scissors!")
            counter++
            score++
        } else if (playerSelection == "paper" && computerSelection =="rock"){
            console.log("Round " +(counter+1)+ ": You Win! Paper beats Rock!")
            counter++
            score++
        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            console.log("Round " +(counter+1)+ ": You Lose! Scissors beats Paper!")
            counter++
        } else if (playerSelection == "scissors" && computerSelection =="paper"){
            console.log("Round " +(counter+1)+ ": You Win! Scissors beats Paper!")
            counter++
            score++
        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            console.log("Round " +(counter+1)+ ": You Lose! Rock beats Scissors!")
            counter++
        }else {
            console.log("Round " +(counter+1)+ ": Looks like you're not interested this round?!")
            counter++
        }
    }

    return score

}


function game2(){}


// --------------------------- ONE ROUND GAME ----------------------------------

// let playerSelection = prompt("Choose your weapon!");
// let computerSelection = getComputerChoice()
// let winner = ""

// playerSelection = playerSelection.trim().toLowerCase()

// console.log("You chose: " +playerSelection)
// console.log("Computer chose: " +computerSelection)

// oneRoundGame(playerSelection,computerSelection)
// if (winner == "you"){
//     console.log("You WIN! " +playerSelection+ " beats " +computerSelection+ "!")
// }else if (winner == "computer"){
//     console.log("You LOSE! " +computerSelection+ " beats " +playerSelection+ "!")
// } else if (winner == "draw"){
//     console.log("Ahh, it's a DRAW!")
// } else {
//     console.log("Looks like someone isn't interest...?!")
// }


// -------------------------- FIVE ROUND GAME ------------------------------------


let playerSelection = ""
let computerSelection = ""
playerSelection = playerSelection.trim().toLowerCase()
let score = game(playerSelection,computerSelection)

if (score < 3){
    console.log("You lost. You only scored " +score+ " out of 5.")
} else {
    console.log("You win! You scored " +score+ " out of 5!")
}