// src/pages/NotFound.jsx

import CardLayout from "../components/CardLayout.jsx";

function NotFoundPage() {
    return (
        <CardLayout>
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">404 Not Found</h2>
            <p className="text-gray-600">Sorry, this page does not exist.</p>
        </CardLayout>
    )
};

export default NotFoundPage;