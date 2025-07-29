// /src/components/Dashboard.jsx

import { useTranslation } from "react-i18next";

function Dashboard() {
    const { t } = useTranslation();

    return (
        <div className="dashboard-container">
            <h2 className="text-2xl font-bold mb-4 text-indigo-900">{t("dashboardTitle")}</h2>
            <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis mattis lectus. Vivamus luctus, turpis et fermentum aliquet, libero ex mattis nisi, in sodales dui ipsum ac metus. Fusce lectus velit, efficitur ac scelerisque ac, elementum sed orci. Suspendisse ligula nisl, bibendum id lectus in, luctus fermentum velit. Sed in elit eu erat efficitur hendrerit eget a tortor. Etiam hendrerit suscipit ligula, at bibendum massa luctus quis. Proin commodo tincidunt lorem et venenatis.
            </p>
            <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis mattis lectus. Vivamus luctus, turpis et fermentum aliquet, libero ex mattis nisi, in sodales dui ipsum ac metus. Fusce lectus velit, efficitur ac scelerisque ac, elementum sed orci. Suspendisse ligula nisl, bibendum id lectus in, luctus fermentum velit. Sed in elit eu erat efficitur hendrerit eget a tortor. Etiam hendrerit suscipit ligula, at bibendum massa luctus quis. Proin commodo tincidunt lorem et venenatis.
            </p>
        </div>
    )
}

export default Dashboard