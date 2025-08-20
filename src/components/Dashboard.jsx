// ./src/components/Dashboard.jsx

import { useTranslation } from "react-i18next";
import LeftMenu from "./LeftMenu.jsx";

function Dashboard() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col sm:flex-row items-stretch w-full h-full">
            {/* Left Panel with Menu */}
            <div className="hidden sm:flex pt-4 pl-4 pr-4 flex-1 items-left bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 ">
                <LeftMenu />
            </div>

            {/* Right Panel */}
            <div className="flex-3 items-center justify-center bg-white py-4 px-4">
                <h2 className="text-2xl font-bold mb-4 text-indigo-900">{t("dashboardTitle")}</h2>
                <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis mattis lectus. Vivamus luctus, turpis et fermentum aliquet, libero ex mattis nisi, in sodales dui ipsum ac metus. Fusce lectus velit, efficitur ac scelerisque ac, elementum sed orci. Suspendisse ligula nisl, bibendum id lectus in, luctus fermentum velit. Sed in elit eu erat efficitur hendrerit eget a tortor. Etiam hendrerit suscipit ligula, at bibendum massa luctus quis. Proin commodo tincidunt lorem et venenatis.
                </p>
                <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis mattis lectus. Vivamus luctus, turpis et fermentum aliquet, libero ex mattis nisi, in sodales dui ipsum ac metus. Fusce lectus velit, efficitur ac scelerisque ac, elementum sed orci. Suspendisse ligula nisl, bibendum id lectus in, luctus fermentum velit. Sed in elit eu erat efficitur hendrerit eget a tortor. Etiam hendrerit suscipit ligula, at bibendum massa luctus quis. Proin commodo tincidunt lorem et venenatis.
                </p>
            </div>
        </div>
    )
}

export default Dashboard