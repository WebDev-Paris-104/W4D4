import axios from "axios"
import "./App.css"
import { useState } from "react"

function App() {
	const [pokemons, setPokemons] = useState([])
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

	function fetchPokemons() {
		axios.get(url).then((response) => {
			console.log(response)
			// With axios
			setPokemons(response.data.results)
			setUrl(response.data.next)
		})
	}

	async function coffeeTime() {
		const firstPokemon = pokemons[0]
		try {
			const response = await axios.post(
				"https://ironrest.fly.dev/api/coffee",
				firstPokemon
			)
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<button onClick={fetchPokemons}>Get those pokemons</button>
			<button onClick={coffeeTime}>Put the pokemons in your coffee</button>
			<ul>
				{pokemons.map((onePoke) => {
					return <li key={onePoke.name}> {onePoke.name} </li>
				})}
			</ul>
		</>
	)
}

export default App
