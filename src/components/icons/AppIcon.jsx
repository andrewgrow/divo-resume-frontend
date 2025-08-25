// ./src/components/icons/AppIcon.jsx

import IcGift from '/src/assets/ic_gift.svg?react'

function AppIcon({ className = "w-8 h-8 text-pink-400", ...props }) {
    // HEX #f472b6 or Tailwind as text-pink-400
    return <IcGift className={className} {...props} />;
}

export default AppIcon;