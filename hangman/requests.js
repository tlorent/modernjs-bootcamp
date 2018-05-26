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

const getCountry = async (countryCode) => {

    // The variable response stores the result of the fetch promise being settled.
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if (response.ok) {
        // Store the result of parsing the response which is another promise.
        const data = await response.json()

        // Get the specific country based on the countryCode provided in the function call.
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw Error(`${response.statusText}`)
    }
}

const getLocation = async () => {

    const response = await fetch('https://ipinfo.io/json?token=4239d0d0492716')

    if (response.ok) {
        return response.json()
    } else {
        throw Error(`${response.statusText}`)
    }
}

// TODO: Async/await challenge
// 1. Create a new function called getCurrentCountry
// 2. Should return a promise that resolves the country object for your current location
// 3. Use async/await for the new function

const getCurrentCountry = async () => {
    let data = await getLocation()
    return getCountry(data.country)
}
