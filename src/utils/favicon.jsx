// ./src/utils/favicon.jsx

import ReactDOMServer from 'react-dom/server';
import AppIcon from "../components/icons/AppIcon.jsx";

export function setFaviconFromComponent(color = '#f472b6') {
    const svgString = ReactDOMServer.renderToStaticMarkup(
        <AppIcon style={{ color }} className="w-8 h-8" />
    );

    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
    document.head.appendChild(link);
}