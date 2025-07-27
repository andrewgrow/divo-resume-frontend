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
        <div className="flex flex-col sm:flex-row items-stretch w-full h-full">
            {/* Left Panel */}
            <div className="hidden sm:flex flex-1 justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 ">
                <div className="p-12 text-center">
                    <h1 className="text-4xl font-bold text-white/100 mb-6">Divo Resume</h1>
                    <p className="text-white/80 text-lg mb-4">
                        AI-Powered toolchain to improve your CV to each vacancy you wanted.
                    </p>
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex-1 items-center justify-center bg-white">
                <div className="p-12">
                    <h2 className="text-2xl font-bold mb-6 text-indigo-900 text-center">
                        Sign in to Divo Resume
                    </h2>
                    <LoginForm onLoginSuccess={handleLogin} />
                </div>
            </div>
        </div>
    );

}

export default LoginPage;