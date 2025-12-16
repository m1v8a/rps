const humanScoreNode = document.querySelector(".human-score");
const computerScoreNode = document.querySelector(".computer-score");
const computerHand = document.querySelector(".computer-hand");
const humanHand = document.querySelector(".human-hand");
const buttonsCont = document.querySelector(".buttons");

function getComputerChoice() {
    const rnd = Math.floor(Math.random() * 3);
    switch(rnd) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
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

    
    // gets both human and computer choice and display it on the screen then play a single round
    buttonsCont.addEventListener("click" , function chooseHand(e) {
        const handButton = e.target;
        if(handButton.type === "button") {
            const humanChoice = humanHand.textContent;
            const computerChoice = getComputerChoice();

            humanHand.textContent = handButton.textContent;
            computerHand.textContent = computerChoice;
            humanHand.classList.remove("hidden");
            computerHand.classList.remove("hidden");
            
            const roundWinner = playRound(humanChoice, computerChoice);

            if(roundWinner === "human") {
                humanHand.classList.add("winner");
                humanHand.classList.remove("loser");
                computerHand.classList.add("loser");
                computerHand.classList.remove("winner")
            } else {
                humanHand.classList.add("loser");
                humanHand.classList.remove("winner");
                computerHand.classList.add("winner");
                computerHand.classList.remove("loser")
            }

            humanScoreNode.textContent = humanScore;
            computerScoreNode.textContent = computerScore;
        }
    })

    // -----
    function playRound(humanChoice, computerChoice) {
        let winner = "";
        if(humanChoice.toLowerCase() === "rock") {
            switch(computerChoice.toLowerCase()) {
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
            switch(computerChoice.toLowerCase()) {
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
            switch(computerChoice.toLowerCase()) {
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