
function Gusser() {
    let userturn = prompt("Your turn! (Rock, Paper, Scissors)").trim();
    let userList = ["Rock", "Paper", "Scissors"];
    let computer = userList[Math.floor(Math.random() * 3)];
    let userPoints = 1;
    let computerPoints = 1;

    console.log(`You: ${userturn} | Computer: ${computer}`);

    if (userturn === "Paper" && computer === "Scissors") {
        computerPoints += 1;
        console.log("Computer has won it", computerPoints);
    } 
    else if (userturn === computer) {
        console.log("It's a tie!");
    } 
    else if (userturn === "Rock" && computer === "Scissors") {
        userPoints += 1;
        console.log("User has won it", userPoints);
    } 
    else if (userturn === "Rock" && computer === "Paper") {  // Fixed typo "Papaer"
        computerPoints += 1;
        console.log("Computer has won it", computerPoints);
    } 
    else if (userturn === "Scissors" && computer === "Paper") {
        userPoints += 1;
        console.log("User has won it", userPoints);
    } 
    else {
        console.log("Invalid input! Please enter Rock, Paper, or Scissors.");
    }
}

 
