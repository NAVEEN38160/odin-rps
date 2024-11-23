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

const getHumanChoice = () => {
  const human = prompt(`
    Enter the valid number
    1: rock , 2: paper , 3: scissors`);
  if (human === "1") {
    return "rock";
  } else if (human === "2") {
    return "paper";
  } else {
    return "scissors";
  }
};

const playRound = () => {
  const computer = getComputerChoice();
  const human = getHumanChoice();
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

const playGame = () => {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
};

playGame();
