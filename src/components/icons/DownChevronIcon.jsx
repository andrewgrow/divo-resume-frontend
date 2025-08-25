// ./src/components/icons/DownChevronIcon.jsx

import IcChevronDown from '../../assets/ic_chevron_down.svg?react';

function DownChevronIcon({ className = "w-5 h-5", strokeWidth = 1.5 }) {
    return <IcChevronDown className={className} strokeWidth={strokeWidth} aria-hidden />;
}
export default DownChevronIcon;