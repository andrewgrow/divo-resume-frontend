// /src/components/LoginForm.jsx

import {useState} from "react";
import {useTranslation} from "react-i18next";
import {setToken, setUserId} from "../utils/auth.js";
import Spinner from "./Spinner.jsx";
import {responseToUserFriendlyMessage} from "../utils/errorToUserFriendlyMessage.jsx";
import {KNOWN_TRANSLATABLE_ERRORS} from "../constants.js";
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
                // handling errors
                const translateKey = KNOWN_TRANSLATABLE_ERRORS[response.status];
                if (translateKey) {
                    setError({ type: "t", key: translateKey });
                } else {
                    let serverMsg = await responseToUserFriendlyMessage(response);
                    setError({ type: "server", msg: serverMsg });
                }
            }
        } catch (error) {
            // show error not connect to backend
            setError({ type:"t", key:"backendDisconnectedErrorDescription"});
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="login-form-container">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                    className={
                    "rounded px-5 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300 " +
                        (loading ? "bg-gray-100 text-gray-400" : "bg-indigo-50")
                }
                    type="text"
                    placeholder={t("loginHint")}
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    required
                    disabled={loading}
                />
                <input
                    className={
                    "rounded px-5 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300 " +
                        (loading ? "bg-gray-100 text-gray-400" : "bg-indigo-50")
                }
                    type="password"
                    placeholder={t("password")}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    disabled={loading}
                />
                <div className="text-red-500 text-sm text-center min-h-4">
                    {error && (error.type === "server" ? error.msg : t(error.key))}
                </div>
                { loading ? (
                    <div className="mt-4 flex justify-center items-center h-8">
                        <Spinner className="w-7 h-7" />
                    </div>
                ) : (
                    <button
                        type="submit"
                        className="mt-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white py-2 font-semibold transition"
                    >
                        { t("login") }
                    </button>
                    )
                }
            </form>
        </div>
    )
}

export default LoginForm;