const choice = ["Rock", "Paper", "Scissors"];
let player = getHumanChoice(choice);
let computer = getComputerChoice(choice);
console.log(player);

// Get user choice
function getHumanChoice(choices) {
    let human;
    do {
    human = parseInt(prompt("Type: 0 (Rock), 1 (Paper) or 2 (Scissors)"));
    } while (Number.isNaN(human) || human < -1 || human > 2);

    return choices[human];
}
// Get computer choice
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * 3)];
}
// See which one won
// play 5 times