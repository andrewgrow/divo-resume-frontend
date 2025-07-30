// /src/components/CardLayout.jsx

function CardLayout({ children, bg = "bg-transparent", showLogout, onLogout }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
            {/* the Card */}
            <div className={`w-full max-w-6xl shadow-2xl mt-20 mx-1 overflow-hidden rounded-lg ${bg}`}>
                {children}
            </div>
            {/* Logout-link under the Card */}
            {showLogout && (
                <div className="w-full max-w-6xl flex justify-end mt-6 pr-3">
                    <span
                        onClick={onLogout}
                        className="text-white hover:underline cursor-pointer font-medium"
                    >
                        Logout
                    </span>
                </div>
            )}
        </div>
    )
}

export default CardLayout;