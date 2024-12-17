import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx"


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
    if(inputValue){
      fetchApi(inputValue)
      console.log(pokemonData)
    }
    setInputValue('')
  }

  return (
    <>
      <header>
        <nav className="bg-[#E52441] flex justify-between items-center px-6 py-4">
          <img src="src/assets/Logo.png" alt="Pokemon Radar Logo image" className="w-[180px]" />
          < RxHamburgerMenu className="text-[#FFCC00] text-3xl" />
        </nav>
      </header>
      <main className="bg-[#FFCC00] min-h-[800px] px-14 py-10 font-[inter]">
        <section className="flex flex-col w-full">
          <h1 className="font-[Anton] text-3xl text-[#E52441] text-left mb-6">Search your Pokémon with id.</h1>
          <form
          onSubmit={handleSubmit} 
          className="flex flex-col gap-4">
            <input
              type="number"
              placeholder="Enter number 0-1302"
              value={inputValue}
              onChange={handleChange}
              name="inputnumber"
              required
              className="w-full h-12 rounded-md shadow-md font-[inter] text-[#E52441] font-normal px-3 py-2 outline-1 outline-[#f0abb5]"
            />
            <button
              type="submit"
              className="bg-[#E52441] font-[inter] font-medium w-full h-12 px-4 shadow-md rounded-md text-[#FBD74B] hover:cursor-pointer hover:bg-[#c42a41]">
              Get Details
            </button>
          </form>
        </section>
        <section className="h-full flex justify-center items-center text-[#E52441] mt-4">
          {pokemonData.name ?
            <div>
              <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className="bg-[#ebeaea] rounded-[1rem] w-[400px] object-cover h-full border-4 border-[#E52441]" />
              <h1 className="font-[Anton] text-3xl py-3">{pokemonData.name}</h1>
              <p className="fon-[inter] font-bold">Weight: <span className="font-normal">{pokemonData.weight}</span></p>
              <p className="fon-[inter] font-bold">height: <span className="font-normal">{pokemonData.height}</span></p>
              <p className="fon-[inter] font-bold">Base Experience: <span className="font-normal">{pokemonData.base_experience}</span></p>
              <p className="fon-[inter] font-bold">Moves: <span className="font-normal">{pokemonData.moves.length}</span></p>
            </div>
            : <div>
              Search to see result
            </div>}
        </section>
      </main>
      <footer className="h-[10vh]">
        <section className="bg-[#FFCC00] px-6 py-8 font-[inter] flex justify-center flex-col items-center">
          <div className="flex justify-center gap-6">
            <FaGithub className="text-[#E52441] text-2xl" />
            <FaXTwitter className="text-[#E52441] text-2xl" />
          </div>
          <p className="text-[#E52441] text-[.8rem] max-w-[300px] text-center mt-4">© 2024 Pokémon Radar. All rights reserved. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
        </section>
      </footer>
    </>
  )
}

export default Search