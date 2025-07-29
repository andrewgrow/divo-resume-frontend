// src/pages/NotFound.jsx

import CardLayout from "../components/CardLayout.jsx";

function NotFoundPage() {
    return (
        <CardLayout bg="bg-white">
            <h2 className="text-3xl font-bold text-purple-500 mb-4">404 Not Found</h2>
            <p className="text-gray-600">Sorry, this page does not exist.</p>
        </CardLayout>
    )
}

export default NotFoundPage;