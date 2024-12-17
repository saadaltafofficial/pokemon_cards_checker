import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from "react-router-dom"

const Notfound = () => {
  return (
    <>
      <header>
        <nav className="bg-[#E52441] flex justify-between items-center px-6 py-4">
          <img src="src/assets/Logo.png" alt="Pokemon Radar Logo image" className="w-[180px]" />
          < RxHamburgerMenu className="text-[#FBD74B] text-3xl" />
        </nav>
      </header>
      <main className="bg-[#FFCC00] px-6 py-20 h-[800px]">
        <p className="font-[Anton] text-4xl text-[#E52441]">Error 404 Not found! <br/><span className="font-[inter] text-xl">Please try again later</span></p>
        <button className="bg-[#E52441] font-[inter] font-medium py-2 px-4 rounded-md text-[#FBD74B] my-8 hover:cursor-pointer hover:bg-[#c42a41]">
          <Link to="/">Go Back To Home</Link>
        </button>
      </main>
      <footer className="bg-[#FFCC00] px-6 py-10 font-[inter] flex justify-center flex-col items-center footer">
        <div className="flex justify-center gap-6">
          <FaGithub className="text-[#E52441] text-2xl" />
          <FaXTwitter className="text-[#E52441] text-2xl" />
        </div>
        <p className="text-[#E52441] text-[.8rem] max-w-[300px] text-center mt-4">© 2024 Pokémon Radar. All rights reserved. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
      </footer>
    </>
  )
}
export default Notfound