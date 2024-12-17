import { RxHamburgerMenu } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <header>
      <nav className="bg-[#E52441] flex justify-between items-center px-6 py-4">
        <img src="src/assets/Logo.png" alt="Pokemon Radar Logo image" className="w-[180px]" />
        < RxHamburgerMenu  className="text-[#FBD74B] text-3xl"/>
      </nav>
     </header>
     <main className="bg-[#FFCC00] h-full px-6 py-20">
        <section className="flex flex-col justify-center items-center">
          <img src="src/assets/pokemons.png" alt="hero image of all pokemons" className="my-6" />
          <h1 className="font-[Anton] text-3xl text-[#E52441] text-center max-w-[300px]">Discover the World of Pokémon with Pokémon Radar</h1>
          
          <button className="bg-[#E52441] font-[inter] font-medium py-2 px-4 rounded-md text-[#FBD74B] my-8 hover:cursor-pointer hover:bg-[#c42a41]">
          <Link to="/search">LAUNCH APP</Link>
          </button>
          
          <p className="text-[#E52441] font-[inter] text-center">Dive into the ultimate Pokémon encyclopedia! Search for your favorite Pokémon and unlock detailed insights about their powers, abilities, evolutions, and more. From stats to moves and artwork, explore everything you need to know to become a true Pokémon master.</p>
        </section>
     </main>
     <footer className="bg-[#FFCC00] h-full px-6 py-10 font-[inter] flex justify-center flex-col items-center">
        <div className="flex justify-center gap-6">
        <FaGithub className="text-[#E52441] text-2xl"/>
        <FaXTwitter className="text-[#E52441] text-2xl"/>
        </div>
        <p className="text-[#E52441] text-[.8rem] max-w-[300px] text-center mt-4">© 2024 Pokémon Radar. All rights reserved. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
     </footer>
    </>
  )
}
export default Layout