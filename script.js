const url = "https://pokeapi.co/api/v2/pomon/"

let result

// fetch(url)
// 	.then((rawResponse) => {
// 		// console.log(rawResponse)
// 		rawResponse
// 			.json()
// 			.then((response) => {
// 				result = response
// 				console.log(response.results[0])
// 			})
// 			.catch((error) => {
// 				console.log(error)
// 			})
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})

fetch(url)
	.then((rawResponse) => {
		return rawResponse.json()
	})
	.then((response) => {
		// console.log(response.results)
		greetAllPokemons(response.results)
	})
	.catch((error) => {
		console.log(error)
	})

console.log(result)

function greetAllPokemons(arrayOfPoke) {
	// arrayOfPoke.forEach((pokemon) => console.log(`Hello ${pokemon.name}`))
}

async function getSomeData() {
	try {
		const rawResponse = await fetch(url)
		console.log(rawResponse)
		if (rawResponse.status === 404) {
			throw Error("We could not find this page")
		}
		const response = await rawResponse.json()
	} catch (error) {
		console.log("we have an error")
		console.log(error)
	}
}

getSomeData()
