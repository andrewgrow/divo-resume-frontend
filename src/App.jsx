// /src/App.jsx

import {useState} from "react";
import Dashboard from "./components/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CardLayout from "./components/CardLayout.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [lang, setLang] = useState("en");
    { console.log("App main recreate"); }

    return (
        <>
            <Navbar currentLang={lang} onLangChange={setLang}/>
            <Routes>
                {/* Login page */}
                <Route
                    path="/login"
                    element={
                        <CardLayout>
                            <LoginPage
                                onLoginSuccess={
                                    () => {
                                        setIsLoggedIn(true);
                                    }
                                }/>
                        </CardLayout>
                    }
                />

                {/* Dashboard page */}
                <Route
                    path="/dashboard"
                    element={
                        isLoggedIn ? (
                            <CardLayout>
                                <Dashboard/>
                            </CardLayout>
                        ) : (
                            <Navigate to="/login" replace/>
                        )
                    }
                />

                {/* root path */}
                <Route
                    path="/"
                    element={
                        <Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace/>
                    }
                />

                {/* 404 */}
                <Route
                    path="*"
                    element={
                        <NotFoundPage/>
                    }/>
            </Routes>
        </>
    )
}

export default App
