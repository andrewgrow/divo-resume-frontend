// /src/components/CardLayout.jsx

import {useNavigate} from "react-router-dom";
import {getToken, isTokenValid, removeToken, removeUserId} from "../utils/auth.js";

function CardLayout({ children, bg = "bg-transparent" }) {
    const navigate = useNavigate();
    const token = getToken();
    const isLoggedIn = isTokenValid(token);

    function handleLogout() {
        removeToken();
        removeUserId();
        navigate("/login");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent relative">
            <div className={`w-full max-w-6xl shadow-2xl mt-20 mb-20 mx-1 overflow-hidden rounded-lg ${bg}`}>
                {children}
            </div>
            {isLoggedIn && (
                <button
                    onClick={handleLogout}
                    className="fixed right-12 bottom-12 z-40 px-6 py-2 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition"
                >
                    Logout
                </button>
            )}
        </div>
    )
}

export default CardLayout;