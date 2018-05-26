// Setup the function as an async function.
const getPuzzle = async (wordCount) => {

    // Await the response of using fetch and store the result in the response variable.
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.ok) {
        // Store the parsed result of using .json on the promise in response.
        const data = await response.json()
        // Return the specific data you need.
        return data.puzzle
    } else {
        throw Error(response.statusText)
    }
}
