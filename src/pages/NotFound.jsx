// src/pages/NotFound.jsx

import CardLayout from "../components/CardLayout.jsx";
import {useTranslation} from "react-i18next";

function NotFoundPage() {
    const {t} = useTranslation();

    return (
        <CardLayout bg="bg-white" >
            <div className="p-16">
                <h2 className="text-3xl font-bold text-purple-500 mb-4">
                    {t("notFoundTitle")} {/* 404 Not Found */}
                </h2>
                <p className="text-gray-600">
                    {t("notFoundDescription")} {/* Sorry, this page does not exist. */}
                </p>
            </div>
        </CardLayout>
    )
}

export default NotFoundPage;