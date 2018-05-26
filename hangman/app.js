// Set up the DOM queries for reuse.
const puzzleEl = document.querySelector("#puzzle")
const guessEl = document.querySelector("#guesses")
const statusEl = document.querySelector("#status")
const resetEl = document.querySelector("#reset")

// Setup a variable for the puzzle game. Don't assign a value at first.
let game

// Make the puzzle interactive by using the letters pressed on the keyboard.
window.addEventListener('keypress', (e) => {
    // Extract the letter the user typed for the guess.
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)

    // Every time the player presses a key, re-render the information about the game (puzzle word, playstatus, remaining guesses) to the screen.
    render()
})

// Function for rendering the DOM information: the playstatus, the word to be guessed, how many guesses a player has.
const render = () => {
    // Update the DOM elements on keypress.
    statusEl.textContent = game.playStatus()
    puzzleEl.textContent = game.puzzle
    guessEl.textContent = `Remaining guesses: ${game.remainingGuesses}`
}

const startGame = async () => {

    // startGame has to be an async function so await can be used on the getPuzzle function. You first need a puzzle before a new instance of Hangman can be created. Otherwise, it throws an error.
    const puzzle = await getPuzzle('2')

    // Setup a new game with the puzzle as the word and 5 guesses.
    game = new Hangman(puzzle, 5)

    // Render the first values to the page: the puzzle in *, the beginning play status, the guesses at the beginning.
    render()
}

// Activate the startGame function when the user presses the reset button.
resetEl.addEventListener('click', startGame)

startGame()