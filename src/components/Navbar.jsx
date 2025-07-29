// /src/components/Navbar.jsx

import { useNavigate } from "react-router-dom";
import GiftIcon  from "./icons/GiftIcon.jsx";

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
            <div className="flex items-center gap-2">
                <select
                    value={currentLang}
                    onChange={e => onLangChange(e.target.value)}
                    className="px-2 py-1 text-white focus:outline-none "
                >
                    <option value="en">EN</option>
                    <option value="pl">PL</option>
                    <option value="de">DE</option>
                    <option value="ru">RU</option>
                </select>
            </div>
        </header>
    )
}

export default Navbar;