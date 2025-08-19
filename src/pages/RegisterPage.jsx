// ./src/pages/RegisterPage.jsx

import RegisterForm from "../components/RegisterForm.jsx";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function RegisterPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleRegisterSuccess() {
        navigate("/login", { replace: true });
    }

    return (
        <div className="flex flex-col sm:flex-row items-stretch w-full h-full">
            {/* Left Panel */}
            <div className="hidden sm:flex flex-1 justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400">
                <div className="p-12 text-center">
                    <h1 className="text-4xl font-bold text-white/100 mb-6">
                        {t("projectName")}
                    </h1>
                    <p className="text-white/80 text-lg mb-4">
                        {t("description")}
                    </p>
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex-1 items-center justify-center bg-white">
                <div className="p-16">
                    <h2 className="text-2xl font-bold mb-6 text-purple-500 text-center">
                        {t("registerTitle", "Create an account")}
                    </h2>
                    <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;