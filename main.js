function getComputerChoice() {
    let numberChosen = Math.floor(Math.random() * 3);
    let choice;

    switch (numberChosen) {
        case 0:
            choice = "rock";
            break;

        case 1:
            choice = "paper";
            break

        case 2:
            choice = "scissors";
            break
    }

    return choice;
}

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log("SELECTED OPTION", button.id)
    });
});