// Set up the DOM queries for reuse.
const puzzleEl = document.querySelector("#puzzle")
const guessEl = document.querySelector("#guesses")
const statusEl = document.querySelector("#status")

// Setup the first game
const gameOne = new Hangman('car parts', 2)

// Display the initial hangman word puzzle, before any guesses have been made.
puzzleEl.textContent = gameOne.puzzle
// Display the initial remaining guesses before the user has guessed.
guessEl.textContent = `Remaining guesses: ${gameOne.remainingGuesses}`
// Display the initial play status of the game.
statusEl.textContent = gameOne.playStatus()

// Make the puzzle interactive by using the letters pressed on the keyboard.
window.addEventListener('keypress', function (e) {

    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)

    // Update the DOM elements on keypress.
    statusEl.textContent = gameOne.playStatus()
    puzzleEl.textContent = gameOne.puzzle
    guessEl.textContent = `Remaining guesses: ${gameOne.remainingGuesses}`

})