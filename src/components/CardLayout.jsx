// /src/components/CardLayout.jsx

function CardLayout({ children, bg = "bg-transparent" }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
            {/* the Card */}
            <div className={`w-full max-w-6xl shadow-2xl mt-20 mb-20 mx-1 overflow-hidden rounded-lg ${bg}`}>
                {children}
            </div>
        </div>
    )
}

export default CardLayout;