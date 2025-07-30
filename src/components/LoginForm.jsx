// /src/components/LoginForm.jsx

import {useState} from "react";
import { useTranslation } from "react-i18next";
import {setToken, setUserId} from "../utils/auth.js";

function LoginForm({ onLoginSuccess }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const { t } = useTranslation();

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ login, password }),
        });
        if (response.ok) {
            const { userId, token } = await response.json();
            setToken(token);
            setUserId(userId);
            onLoginSuccess();
        } else {
            // обработка ошибки
        }
    }


    return (
        <div className="login-form-container">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                    className="rounded px-5 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                    type="text"
                    placeholder={t("loginHint")}
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    required
                />
                <input
                    className="rounded px-5 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                    type="password"
                    placeholder={t("password")}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="mt-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white py-2 font-semibold transition"
                >
                    {t("login")} {/* Login */}
                </button>
            </form>
        </div>
    )
}

export default LoginForm;