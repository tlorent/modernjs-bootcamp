// Set up the DOM queries for reuse.
const puzzleEl = document.querySelector("#puzzle")
const guessEl = document.querySelector("#guesses")

// Setup the first game
const gameOne = new Hangman('Cat', 2)

// Display the initial hangman word puzzle, before any guesses have been made.
puzzleEl.textContent = gameOne.getPuzzle()
// Display the initial remaining guesses before the user has guessed.
guessEl.textContent = `Remaining guesses: ${gameOne.remainingGuesses}`

// Make the puzzle interactive by using the letters pressed on the keyboard.
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)

    // Update the DOM elements on keypress.
    puzzleEl.textContent = gameOne.getPuzzle()
    guessEl.textContent = `Remaining guesses: ${gameOne.remainingGuesses}`
})