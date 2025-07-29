// /src/components/icons/GiftIcon.jsx

function GiftIcon({ className = "w-8 h-8 text-white" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            fill="none"
            className={className}
        >
            {/* Box */}
            <rect x="8" y="16" width="24" height="16" rx="2" fill="#fff" />
            {/* Box lid */}
            <rect x="6" y="13" width="28" height="6" rx="2" fill="#fff" stroke="#f472b6" />
            {/* Vertical strip */}
            <rect x="18" y="13" width="4" height="19" rx="2" fill="#f472b6"/>
            {/* Left Bow Knot */}
            <path d="M20 13 Q14 7 12 13" stroke="#f472b6" fill="#f472b6" />
            {/* Right Bow Knot */}
            <path d="M20 13 Q26 7 28 13" stroke="#f472b6" fill="#f472b6" />
        </svg>
    );
}

export default GiftIcon;