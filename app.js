function playGame(userChoice) {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = `You Win! ${userChoice} beats ${computerChoice}`;
    } else {
        result = `You Lose! ${computerChoice} beats ${userChoice}`;
    }
    
    document.getElementById("result").innerText = result;
}

 
