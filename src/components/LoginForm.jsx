// /src/components/LoginForm.jsx

import {useState} from "react";
import { useTranslation } from "react-i18next";

function LoginForm({ onLoginSuccess }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const { t } = useTranslation();

    function handleSubmit(e) {
        e.preventDefault();
        // TODO: запрос к API, проверка, и т.д.
        // Если всё хорошо:
        onLoginSuccess();
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