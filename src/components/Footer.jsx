import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

function Footer() {
    return (
        <footer className="bg-[#E52441] px-6 py-6 font-[inter] flex justify-center flex-col items-center">
        <div className="flex justify-center gap-6">
        <a href="https://github.com/saadaltafofficial/pokemon_cards_checker">
        <FaGithub className="text-[#FFCC00] text-2xl"/>
        </a>
        <a href="https://x.com/saadaltaflaldin">
        <FaXTwitter className="text-[#FFCC00] text-2xl"/>
        </a>
        </div>
        <p className="text-[#FFCC00] text-[.8rem] max-w-[300px] text-center mt-4 tablet:max-w-[1000px]">© 2024 Pokémon Radar. All rights reserved. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
     </footer>
    )
}

export default Footer