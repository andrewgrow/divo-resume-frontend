// ./src/components/LeftMenu.jsx
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken, removeUserId } from "../utils/auth.js";
import SettingsIcon from "./icons/SettingsIcon.jsx";
import LogoutIcon from "./icons/LogoutIcon.jsx";
import DashboardIcon from "./icons/DashboardIcon.jsx";
import ResumeIcon from "./icons/ResumeIcon.jsx";
import JobsIcon from "./icons/JobsIcon.jsx";
import {useCallback, useMemo} from "react";

function LeftMenu() {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const items = useMemo(() => [
        { key: "dashboard", label: t("navDashboard"), to: "/dashboard", Icon: DashboardIcon },
        { key: "resumes",   label: t("navResumes"),   to: "/resumes",   Icon: ResumeIcon },
        { key: "jobs",      label: t("navJobs"),      to: "/jobs",      Icon: JobsIcon },
        { key: "account",   label: t("navAccount"),   to: "/account",   Icon: SettingsIcon },
    ], [t]);

    const handleLogout = useCallback(() => {
        removeToken();
        removeUserId();
        navigate("/login", { replace: true });
    }, [navigate]);


    const selectIcon = useCallback(
        (item, isActive) => {
            const Icon = ICONS[item.key];
            if (!Icon) return null;

            const className = [
                "w-5 h-6",
                "shrink-0 transition-opacity",
                isActive ? "opacity-80" : "opacity-40 group-hover:opacity-80",
            ].join(" ");

            return <Icon className={className} aria-hidden />;
        },
        []
    );

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
                                        "text-left",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70",
                                        isActive
                                            ? "text-white bg-white/10"
                                            : "text-white hover:text-indigo-200 hover:bg-white/5"
                                    ].join(" ")
                                }
                            >
                                {({ isActive }) => {
                                    const className = `w-5 h-6 shrink-0 transition-opacity ` +
                                        `${isActive ? "opacity-80" : "opacity-40 group-hover:opacity-80"}`;
                                    return (
                                        <>
                                            <item.Icon className={className} aria-hidden />
                                            <span className={isActive ? "font-bold" : undefined}>{item.label}</span>
                                        </>
                                    );
                                }}
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
                            <LogoutIcon className={"w-5 h-5 text-white opacity-40 group-hover:opacity-60"} />
                            <span>{t("logoutTitle", "Logout")}</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default LeftMenu;