// ./src/components/LeftMenu.jsx
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken, removeUserId } from "../utils/auth.js";

function LeftMenu() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const items = [
        { key: "dashboard", label: t("navDashboard"), to: "/dashboard" },
        { key: "resumes",   label: t("navResumes"),   to: "/resumes" },
        { key: "jobs",      label: t("navJobs"),      to: "/jobs" },
        { key: "account",   label: t("navAccount"),   to: "/account" },
    ];

    function handleLogout() {
        removeToken();
        removeUserId();
        navigate("/login", { replace: true });
    }

    return (
        <aside className="h-full bg-transparent">
            <nav className="h-full flex flex-col">
                <ul className="space-y-2">
                    {items.map((item) => (
                        <li key={item.key}>
                            <NavLink
                                to={item.to}
                                end
                                className={({ isActive }) =>
                                    [
                                        "group w-full inline-flex items-start justify-start gap-3 px-3 py-2 rounded-lg transition-colors",
                                        "text-left", // ← принудительно по левому краю
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70",
                                        isActive
                                            ? "text-white bg-white/10"
                                            : "text-white hover:text-indigo-200 hover:bg-white/5"
                                    ].join(" ")
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <img
                                            src="/gift.svg"
                                            alt=""
                                            aria-hidden="true"
                                            className={
                                                "w-5 h-5 shrink-0 transition-opacity " +
                                                (isActive ? "opacity-100" : "opacity-40 group-hover:opacity-80")
                                            }
                                        />
                                        <span className={isActive ? "font-bold" : undefined}>{item.label}</span>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}

                    {/* Logout */}
                    <li className="mt-auto pt-12">
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="group w-full inline-flex items-center gap-3 px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
                        >
                            <span>{t("logoutTitle")}</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default LeftMenu;