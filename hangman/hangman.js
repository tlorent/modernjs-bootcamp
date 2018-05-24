const Hangman = function (word, guesses) {

    this.word = word.toLowerCase().split(''),
    this.remainingGuesses = guesses,
    this.guessedLetters = [],
    this.status = 'playing'
}

// Display the current state of the puzzle, based on the letters that have been guessed.
Hangman.prototype.getPuzzle = function () {

    let puzzle = ''

    // Loop over the word array and for each letter (or element), check if that letter is included in the guessed array or if the letter is a space. If true, then the empty puzzle string gets the letter or space added to it. If false, the empty puzzle string gets an * added to it because the letter(s) has/have not been guessed yet.
    this.word.forEach(letter => {
        this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*'
    });

    // Return the completed puzzle string after the forEach loop
    return `The word is: ${puzzle}`

}

// Make a guess function
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match
Hangman.prototype.makeGuess = function (guess) {

    guess = guess.toLowerCase()

    // If the current status of the game is not 'playing', then the code below will not run because it will return undefined and stop. This will ensure that the user cannot make a guess anymore once the game is finished or failed. This will stop the call in app.js (gameOne.makeGuess(guess))
    if (this.status !== 'playing') {
        return
    }

    // Check if the guessed letter isn't already in the array, to only allow unique guesses being made (no doubles). Only check if it isn't, instead of also checking if it is and then pushing it to the array in the else statement like above. Think more about the code that needs to be performed instead of writing an if statement straight away.
    if (!this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess)
    }

    // Subtract a remaining guess if the guess is not included in the game word.
    if (!this.word.includes(guess)) {
        this.remainingGuesses--
    }
    
}

// 2. Create a method for recalculating status to "playing", "finished", "failed".
Hangman.prototype.playStatus = function () {

    // Solution 2.

    // With every, loop through the word array and check for each letter if it is included in the guessedLetters array. Every returns true or false, so const finished will only be true if every letter in word is included in guessedLetters.
    // const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    // Solution 1.

    // Set the initial value of finished to be true.
    let finished = true

    this.word.forEach(letter => {
        // Here you can modify the finished value. Only check if a letter guessed by the user is not included in the word. If this is the case then finished should be set to false.
        if (!this.guessedLetters.includes(letter)) {
            finished = false
        }
    })

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
        return `Nice try! The word was ${this.word.join('')}`
    } else if (finished) {
        this.status = 'finished'
        return 'Great work! You guessed the word.'
    } else {
        this.status = 'playing'
        return `Current game status: ${this.status}`
    }
}