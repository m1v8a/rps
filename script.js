function computerChoice() {
    const rnd = Math.floor(Math.random() * 3);
    switch(rnd) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    const choice = prompt("Your Choice: ");
    return choice;
}




function playGame() {
    const ROUNDS = 5;

    let humanScore = 0;
    let computerScore = 0;


    for(let i = 0; i < ROUNDS; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = computerChoice();

        const winner = playRound(humanSelection, computerSelection);

        if(winner === "human" || winner === "computer") {
            console.log(`${winner.toUpperCase()} wins this round!`);
        } else if(winner === "draw") {
            console.log("DRAW!!");
        } 

        console.log(`Human: ${humanSelection} - Computer ${computerSelection}`)
        console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
    }

    // -----

    function playRound(humanChoice, computerChoice) {
        let winner = "";
        if(humanChoice.toLowerCase() === "rock") {
            switch(computerChoice) {
                case "rock":
                    winner = "draw";
                    break;
                case "paper":
                    winner = "computer"
                    break;
                case "scissors":
                    winner = "human";
                    break;
            }
        } else if(humanChoice.toLowerCase() === "paper") {
            switch(computerChoice) {
                case "rock":
                    winner = "human";
                    break;
                case "paper":
                    winner = "draw";
                    break;
                case "scissors":
                    winner = "computer";
                    break
            }
        } else if(humanChoice.toLowerCase() === "scissors") {
            switch(computerChoice) {
                case "rock":
                    winner = "human";
                    break;
                case "paper":
                    winner = "computer"
                    break;
                case "scissors":
                    winner = "draw";
                    break;
            }
        }

        switch(winner) {
            case "human":
                humanScore++;
                break;
            case "computer":
                computerScore++;
                break;
        }

        return winner;
    }
}

playGame()