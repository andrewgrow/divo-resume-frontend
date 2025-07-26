// /src/App.jsx

import {useState} from "react";
import LoginForm from "./LoginForm.jsx"
import Dashboard from "./Dashboard.jsx";

function App() {
    // Временная логика: если есть токен — “авторизован”, иначе нет
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white/80 rounded-lg shadow-2xl p-8 max-w-5xl mt-20 mb-20 mx-1 ">
                {isLoggedIn ? (
                    <Dashboard />
                ) : (
                    <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
                )}
            </div>
        </div>
    )
}

export default App
