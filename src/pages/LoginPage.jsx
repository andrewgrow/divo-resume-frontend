// /src/pages/LoginPage.jsx

import LoginForm from "../components/LoginForm.jsx";
import {useNavigate} from "react-router-dom";

function LoginPage({ onLoginSuccess }) {
    const navigate = useNavigate();

    function handleLogin() {
        onLoginSuccess();
        navigate("/");
    }

    return (
        <div className="login-page">
            <h2 className="text-2xl font-bold mb-6 text-indigo-900">Sign in to Divo Resume</h2>
            <LoginForm onLoginSuccess={handleLogin} />
        </div>
    )
}

export default LoginPage;