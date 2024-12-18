import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="flex justify-center bg-[#E52441] px-6 py-4">
            <nav className="flex justify-between w-full items-center">
                <Link to="/">
                <img src="src/assets/Logo.png" alt="Pokemon Radar Logo image" className="w-[180px]" />
                </Link>
                < RxHamburgerMenu className="text-[#FFCC00] text-3xl"/>
            </nav>
        </header>
    )
}

export default Header