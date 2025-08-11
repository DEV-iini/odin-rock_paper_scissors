const choice = ["Rock", "Paper", "Scissors"];
let computer = getComputerChoice(choice);
console.log(computer);

// Get user choice
function getHumanChoice() {
    
}
// Get computer choice
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * 3)];
}
// See which one won
// play 5 times