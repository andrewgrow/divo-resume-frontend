// ./src/components/RegisterForm.jsx

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { responseToUserFriendlyMessage } from "../utils/errorToUserFriendlyMessage.jsx";
import { KNOWN_TRANSLATABLE_ERRORS } from "../constants.js";
import { isValidEmail, isValidPhone } from "../utils/validator.js";

const API_URL = import.meta.env.VITE_API_URL;

function RegisterForm({ onRegisterSuccess }) {
    const { t } = useTranslation();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [loading, setLoading] = useState(false);
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
        if (password.length < 6) {
            setError({ type: "t", key: "passwordTooShort", def: "Password is too short" });
            setLoading(false);
            return;
        }
        if (password !== password2) {
            setError({ type: "t", key: "passwordsDontMatch", def: "Passwords do not match" });
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_URL}/users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ login, password }),
            });

            if (response.ok) {
                if (typeof onRegisterSuccess === "function") onRegisterSuccess();
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
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
                className={[
                    "rounded px-5 py-2 border focus:outline-none focus:ring",
                    "border-gray-300 bg-indigo-50 focus:ring-indigo-300",
                    loading ? "bg-gray-100 text-gray-400" : ""
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
                    loading ? "bg-gray-100 text-gray-400" : ""
                ].join(" ")}
                type="password"
                autoComplete="new-password"
                placeholder={t("password")}
                value={password}
                onChange={e => setPassword(e.target.value)}
                disabled={loading}
            />
            <input
                className={[
                    "rounded px-5 py-2 border focus:outline-none focus:ring",
                    "border-gray-300 bg-indigo-50 focus:ring-indigo-300",
                    loading ? "bg-gray-100 text-gray-400" : ""
                ].join(" ")}
                type="password"
                autoComplete="new-password"
                placeholder={t("passwordConfirm", "Confirm password")}
                value={password2}
                onChange={e => setPassword2(e.target.value)}
                disabled={loading}
            />

            <div className="text-red-500 text-sm text-center min-h-4" aria-live="polite">
                {error && (error.type === "server" ? error.msg : t(error.key, error.def))}
            </div>

            <button
                type="submit"
                className="mt-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white py-2 font-semibold transition disabled:opacity-60"
                disabled={loading}
            >
                {t("register", "Register")}
            </button>
        </form>
    );
}

export default RegisterForm;

