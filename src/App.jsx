// /src/App.jsx

import {useState} from "react";
import Dashboard from "./components/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CardLayout from "./components/CardLayout.jsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFound.jsx";

function App() {
    // Временная логика: если есть токен — “авторизован”, иначе нет
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
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
                            } />
                        </CardLayout>
                    }
                />

                {/* Dashboard page */}
                <Route
                    path="/dashboard"
                    element={
                        isLoggedIn ? (
                            <CardLayout>
                                <Dashboard />
                            </CardLayout>
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />

                {/* root path */}
                <Route
                    path="/"
                    element={
                        <Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />
                    }
                />

                {/* 404 */}
                <Route
                    path="*"
                    element={
                    <NotFoundPage />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App
