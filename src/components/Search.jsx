import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"



function Search() {
  const [pokemonData, setPokemonData] = useState([])
  const [inputValue, setInputValue] = useState('');


  async function fetchApi(pokemonId) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error("Pokemon not found")
      }
      const data = await res.json()
      setPokemonData(data)

    } catch (error) {
      console.error(error)
      setPokemonData(null)
    }
  }

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (inputValue) {
      fetchApi(inputValue)
      console.log(pokemonData)
    }
    setInputValue('')
  }

  return (
    <>
      <Header />
      <main className="bg-[#FFCC00] h-[100vh] font-[inter] flex flex-col py-12 px-8 tablet:px-40">
        <section className="flex flex-col">
          <h1 className="font-[Anton] text-3xl text-[#E52441] text-center">Search your Pokémon with id.</h1>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 tablet:grid-cols-3 w-full mt-6">
            <input
              type="number"
              placeholder="Enter number 0-1302"
              value={inputValue}
              onChange={handleChange}
              name="inputnumber"
              required
              className="h-12 rounded-md shadow-md font-[inter] text-[#E52441] font-normal px-3 py-2 outline-1 outline-[#f0abb5] tablet:col-span-2"
            />
            <button
              type="submit"
              className="bg-[#E52441] font-[inter] font-medium w-full h-12 px-4 shadow-md rounded-md text-[#FBD74B] hover:cursor-pointer hover:bg-[#c42a41]">
              Get Details
            </button>
          </form>
        </section>
        <section className="flex flex-wrap gap-8 text-[#E52441] mt-8 tablet:grid-cols-2 w-full tablet:justify-center">
          {pokemonData.name ?
            <>
            <div>
              <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className="bg-[#ebeaea] rounded-[1rem] w-[400px] object-cover h-full border-4 border-[#E52441]" />
            </div>
            <div>
              <h1 className="font-[Anton] text-3xl mb-4">{pokemonData.name}<hr/></h1>
              <p className="fon-[inter] font-bold">Weight: <span className="font-normal">{pokemonData.weight}</span></p>
              <p className="fon-[inter] font-bold">height: <span className="font-normal">{pokemonData.height}</span></p>
              <p className="fon-[inter] font-bold">Base Experience: <span className="font-normal">{pokemonData.base_experience}</span></p>
              <p className="fon-[inter] font-bold">Moves: <span className="font-normal">{pokemonData.moves.length}</span></p>
            </div>
            </>
            : <div>
              Search to see result
            </div>}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Search