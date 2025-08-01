// /src/components/LeftMenu.jsx

import { useTranslation } from "react-i18next";
import {useNavigate} from "react-router-dom";
import {removeToken, removeUserId} from "../utils/auth.js";

function LeftMenu() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const menuItems = [
        { label: t("dashboardTitle"),  value: "/dashboard" },
        { label: t("logoutTitle"),  value: "logout" },
    ]

    function handleLogout() {
        removeToken();
        removeUserId();
        navigate("/login", { replace: true });
    }

    function menuItemClick(value) {
        switch(value) {
            case "logout": handleLogout(); break;
            case "/dashboard": navigate("/dashboard", { replace: true }); break;
        }
    }

    return (
        <aside className="flex flex-col bg-transparent h-full">
            <nav className="h-full">
                <ul className="space-y-4">
                    {menuItems.map(item => (
                        <li key={item.value}>
                            <button
                                className="w-full text-left text-white hover:text-indigo-200 transition-colors font-medium text-lg"
                                onClick={() => menuItemClick(item.value)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default LeftMenu;