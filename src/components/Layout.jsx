import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-[#FFCC00] h-[100vh] px-12 py-20">
        <section className="grid tablet:grid-cols-2 items-center">
          <div className=" w-full pr-12">
            <h1 className="font-[Anton] text-3xl text-[#E52441]">Discover the World of Pokémon with Pokémon Radar</h1>
            <p className="text-[#E52441] font-[inter] py-10">Dive into the ultimate Pokémon encyclopedia! Search for your favorite Pokémon and unlock detailed insights about their powers, abilities, evolutions, and more. From stats to moves and artwork, explore everything you need to know to become a true Pokémon master.</p>
            <button className="bg-[#E52441] font-[inter] font-medium py-2 px-4 rounded-md text-[#FBD74B] hover:cursor-pointer hover:bg-[#c42a41]">
              <Link to="/search">LAUNCH APP</Link>
            </button>
          </div>
          <img src="src/assets/pokemons.png" alt="hero image of all pokemons" className=" w-full"/>
        </section>
      </main>
      <Footer />
    </>
  )
}
export default Layout