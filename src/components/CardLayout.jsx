// /src/components/CardLayout.jsx

function CardLayout({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent">
            <div className="w-full max-w-6xl shadow-2xl mt-20 mb-20 mx-1 overflow-hidden rounded-lg bg-white">
                {children}
            </div>
        </div>
    )
}

export default CardLayout;