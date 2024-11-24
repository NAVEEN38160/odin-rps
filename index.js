let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const computer = Math.floor(Math.random() * 10);
  if (computer >= 0 && computer <= 2) {
    return "rock";
  } else if (computer >= 3 && computer <= 6) {
    return "paper";
  } else {
    return "scissors";
  }
};

const playRound = (human) => {
  const computer = getComputerChoice();
  if (computer === "rock") {
    if (human === "rock") {
      console.log(`Tie! Human: ${human} , Computer: ${computer}`);
    } else if (human === "paper") {
      humanScore += 1;
      console.log(
        `You win. Score - Human:${humanScore} , Computer:${computerScore}
      Human: ${human} , Computer: ${computer}`
      );
    } else {
      computerScore += 1;
      console.log(
        `You lose. Score - Human:${humanScore} , Computer:${computerScore}
        Human: ${human} , Computer: ${computer}`
      );
    }
  } else if (computer === "paper") {
    if (human === "rock") {
      computerScore += 1;
      console.log(
        `You lose. Score - Human:${humanScore} , Computer:${computerScore}
      Human: ${human} , Computer: ${computer}`
      );
    } else if (human === "paper") {
      console.log(`Tie! Human: ${human} , Computer: ${computer}`);
    } else {
      humanScore += 1;
      console.log(
        `You win. Score - Human:${humanScore} , Computer:${computerScore}
      Human: ${human} , Computer: ${computer}`
      );
    }
  } else {
    if (human === "rock") {
      humanScore += 1;
      console.log(
        `You win. Score - Human:${humanScore} , Computer:${computerScore}
      Human: ${human} , Computer: ${computer}`
      );
    } else if (human === "paper") {
      computerScore += 1;
      console.log(
        `You lose. Score - Human:${humanScore} , Computer:${computerScore}
      Human: ${human} , Computer: ${computer}`
      );
    } else {
      console.log(`Tie! Human: ${human} , Computer: ${computer}`);
    }
  }
};

const buttons = document.querySelectorAll("button");

const handleGame = (e) => {
  const humanChoice = e.target.id;
  playRound(humanChoice);
  const result = document.querySelector(".result");
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      result.textContent = "You win.";
    } else {
      result.textContent = "computer wins..";
    }
    buttons.forEach((button) => {
      button.removeEventListener("click", handleGame);
    });
  } else {
    result.textContent = `Human : ${humanScore} , Computer : ${computerScore}`;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", handleGame);
});
