// /src/App.jsx

import {useEffect, useState} from "react";
import Dashboard from "./components/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CardLayout from "./components/CardLayout.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import i18n from "i18next";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [lang, setLang] = useState(getInitialLang());

    async function handleLangChange(selectedLang) {
        setLang(selectedLang);
        await i18n.changeLanguage(selectedLang);
        localStorage.setItem("lang", selectedLang);
        document.documentElement.lang = selectedLang;
    }

    useEffect(() => {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <>
            <Navbar currentLang={lang} onLangChange={handleLangChange}/>
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
                            <CardLayout bg="bg-white">
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

function getInitialLang() {
    // try from localStorage
    const stored = localStorage.getItem("lang");
    if (stored) return stored;

    // or get browser language, e.g. "en-US" → "en"
    const browserLang = navigator.language.split("-")[0];

    // available translations
    const supported = ["en", "ru", "pl", "de"];
    if (supported.includes(browserLang)) {
        return browserLang;
    }

    // fallback
    return "en";
}

export default App
