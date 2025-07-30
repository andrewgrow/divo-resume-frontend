// /src/components/Navbar.jsx

import { useNavigate } from "react-router-dom";
import GiftIcon  from "./icons/GiftIcon.jsx";
import DownChevronIcon from "./icons/DownChevronIcon.jsx";

function Navbar({ currentLang, onLangChange }) {
    const navigate = useNavigate();

    return (
        <header className="w-full px-8 py-4 flex items-center justify-between bg-transparent  fixed top-0 left-0 z-50">
            {/* Left part: logo */}
            <div className="flex items-center gap-2 cursor-pointer select-none"
                 onClick={() => {
                     navigate("/");
                     console.log("navigate to home");
                 }}
            >
                <GiftIcon className="w-8 h-8 text-white" />
            </div>

            {/* Right part: language selector */}
            <div className="relative flex items-center">
                <select
                    value={currentLang}
                    onChange={e => onLangChange(e.target.value)}
                    className="appearance-none bg-transparent px-4 py-1 pr-8 rounded text-white focus:outline-none"
                >
                    <option value="en">EN</option>
                    <option value="pl">PL</option>
                    <option value="de">DE</option>
                    <option value="ru">RU</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                    <DownChevronIcon className="w-4 h-4 text-white" />
                </span>
            </div>
        </header>
    )
}

export default Navbar;