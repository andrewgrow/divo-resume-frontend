// /src/App.jsx

import {useEffect, useState} from "react";
import LoginPage from "./pages/LoginPage.jsx";
import CardLayout from "./components/CardLayout.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import i18n from "i18next";
import RequireAuth from "./components/RequireAuth.jsx";
import {getToken, isTokenValid} from "./utils/auth.js";
import Dashboard from "./components/Dashboard.jsx";

function App() {
    const [lang, setLang] = useState(getInitialLang());
    const isAuthenticated = isTokenValid(getToken());

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
                            <LoginPage onLoginSuccess={() => window.location.href = "/dashboard"} />
                        </CardLayout>
                    }
                />

                {/* Dashboard page */}
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <CardLayout>
                                <Dashboard/>
                            </CardLayout>
                        </RequireAuth>
                    }
                />

                {/* root path */}
                <Route
                    path="/"
                    element={
                        isAuthenticated
                            ? <Navigate to="/dashboard" replace/>
                            : <Navigate to="/login" replace/>
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
    const browserLangs = (navigator.languages || [navigator.language])
        .map(l => l.split("-")[0]);

    // available translations
    const supported = ["en", "ru", "pl", "de"];

    // looking for the first matching
    for (const lang of browserLangs) {
        if (supported.includes(lang)) return lang;
    }

    // fallback
    return "en";
}

export default App
