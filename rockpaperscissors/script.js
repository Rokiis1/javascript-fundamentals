const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelector("[data-your-score]");

// Define an array of objects representing the selections in rock-paper-scissors
const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌",
    beats: "paper",
  },
];

// Add a click event listener to each selection button
selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    
    // Get the name of the selection from the data-selection attribute
    const selectionName = selectionButton.dataset.selection;

    // Find the selection object that matches the name
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );

    // Call the makeSelection function with the selected object
    makeSelection(selection);
  });
});


// A function that takes a selection object as an argument
function makeSelection(selection) {

  // Generate a random computer selection using the randomSelection function
  const computerSelection = randomSelection();

  // Determine if the player's selection is a winner
  const yourWinner = isWinner(selection, computerSelection);

  // Determine if the computer's selection is a winner
  const computerWinner = isWinner(computerSelection, selection);

  // Add the computer's selection and result to the final column
  addSelectionResult(computerSelection, computerWinner);

  // Add the player's selection and result to the final column
  addSelectionResult(selection, yourWinner);

  // Increment the player's score if they won
  if (yourWinner) incrementScore(yourScoreSpan);

  // Increment the computer's score if they won
  if (computerWinner) incrementScore(computerScoreSpan);
}

// A function that increments the score of a player
function incrementScore(scoreSpan) {

  // Get the current score from the score span and convert it to a number
  const score = parseInt(scoreSpan.innerText);

  // Increment the score by 1 and set the text of the score span to the new score
  scoreSpan.innerText = score + 1;
}

// A function that adds a selection and result to the final column
function addSelectionResult(selection, winner) {

  // Create a new div element to hold the selection
  const div = document.createElement("div");

  // Set the inner text of the div to the selection's emoji
  div.innerText = selection.emoji;

  // Add the 'result-selection' class to the div
  div.classList.add("result-selection");

  // Add the 'winner' class to the div if the selection won
  if (winner) div.classList.add("winner");

  // Add the div to the final column
  finalColumn.after(div);
}

// A function that determines if a selection beats another selection
function isWinner(selection, opponentSelection) {

  // Return true if the selection's 'beats' property matches the opponent's name
  return selection.beats === opponentSelection.name;
}

// function is used to generate a random selection of either rock, paper, or scissors for the computer's turn in the game.
function randomSelection() {
  // The function does this by first calculating a random index number within the range of the number of selections (rock, paper, and scissors) available in the SELECTIONS array using Math.random() and SELECTIONS.length.
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  
  // Then, the function uses the random index number to select a random element (rock, paper, or scissors) from the SELECTIONS array, and returns that element as the computer's selection for the current turn of the game.
  return SELECTIONS[randomIndex];
}
