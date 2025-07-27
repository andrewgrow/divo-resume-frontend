// /src/components/CardLayout.jsx

function CardLayout({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white/80 rounded-lg shadow-2xl p-8 max-w-5xl mt-20 mb-20 mx-1 ">
                {children}
            </div>
        </div>
    )
};

export default CardLayout;