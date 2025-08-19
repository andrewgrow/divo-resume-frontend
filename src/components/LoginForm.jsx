// /src/components/LoginForm.jsx

import {useState} from "react";
import {useTranslation} from "react-i18next";
import {setToken, setUserId} from "../utils/auth.js";
import Spinner from "./Spinner.jsx";
import {responseToUserFriendlyMessage} from "../utils/errorToUserFriendlyMessage.jsx";
import {KNOWN_TRANSLATABLE_ERRORS} from "../constants.js";
import {isValidEmail, isValidPhone} from "../utils/validator.js";
import {Link} from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

function LoginForm({ onLoginSuccess }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!isValidEmail(login) && !isValidPhone(login)) {
            setError({ type: "t", key: "loginFormatError" });
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_URL}/users/login`, {
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
                const translateKey = KNOWN_TRANSLATABLE_ERRORS[response.status];
                if (translateKey) {
                    setError({ type: "t", key: translateKey });
                } else {
                    const serverMsg = await responseToUserFriendlyMessage(response);
                    setError({ type: "server", msg: serverMsg });
                }
            }
        } catch (err) {
            setError({ type: "t", key: "backendDisconnectedErrorDescription" });
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-form-container">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                    className={[
                        "rounded px-5 py-2 border focus:outline-none focus:ring",
                        "border-gray-300 bg-indigo-50 focus:ring-indigo-300",
                        loading
                            ? "bg-gray-100 text-gray-400"
                            : ""
                    ].join(" ")}
                    type="text"
                    autoComplete="username"
                    placeholder={t("loginHint")}
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    disabled={loading}
                />
                <input
                    className={[
                        "rounded px-5 py-2 border focus:outline-none focus:ring",
                        "border-gray-300 bg-indigo-50 focus:ring-indigo-300",
                        loading
                            ? "bg-gray-100 text-gray-400"
                            : ""
                    ].join(" ")}
                    type="password"
                    autoComplete="current-password"
                    placeholder={t("password")}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={loading}
                />
                <div
                    className="text-red-500 text-sm text-center min-h-4"
                    aria-live="polite"
                >
                    {error && (error.type === "server" ? error.msg : t(error.key))}
                </div>

                {loading ? (
                    <div className="mt-4 flex justify-center items-center h-8">
                        <Spinner className="w-7 h-7" />
                    </div>
                ) : (
                    <>
                    <button
                        type="submit"
                        className="mt-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white py-2 font-semibold transition"
                        disabled={loading}
                    >
                        {t("login")}
                    </button>

                        <div className="mt-3 text-center">

                            <Link
                                to="/register"
                                className="text-sm text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                            >
                            {t("noAccountRegister", "No account? Register")}
                            </Link>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}

export default LoginForm;