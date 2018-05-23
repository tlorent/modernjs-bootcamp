// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle back
    // No guesses? -> ***
    // Guessed "c", "b", and "t"? -> c*t

const Hangman = function (word, guesses) {

    this.word = word.toLowerCase().split(''),
    this.remainingGuesses = guesses,
    this.guessedLetters = []
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

    // For multiple guesses argument.
    // guessing = guessing.toLowerCase().split('')

    // // Check if the guessed letter isn't already in the array.
    // guessing.forEach(letter => {
    //     this.guessed.includes(letter) ? this.guessed = this.guessed : this.guessed.push(letter)
    // })

    // // If the guess is in the word, then the number of guesses stays the same. Otherwise, take 1 of the guesses allowed.
    // guessing.forEach(letter => {
    //     this.word.includes(letter) ? this.guesses = this.guesses : this.guesses -= 1
    // })

    // For a single guess argument.

    // // Check if the guessed letter isn't already in the array.
    // this.guessed.includes(guess) ? this.guessed = this.guessed : this.guessed.push(guess)

    // // If the guess is in the word, then the number of guesses stays the same. Otherwise, take 1 of the guesses allowed.
    // this.word.includes(guess) ? this.guesses = this.guesses : this.guesses -= 1

    // Better solution!
    guess = guess.toLowerCase()

    // Check if the guessed letter isn't already in the array. Only check if it isn't, instead of also checking if it is and then pushing it to the array in the else statement like above. Think more about the code that needs to be performed instead of writing an if statement straight away.
    if (!this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess)
    }

    // Subtract a remaining guess if the guess is not included in the game word.
    if (!this.word.includes(guess)) {
        this.remainingGuesses--
    }
    
}