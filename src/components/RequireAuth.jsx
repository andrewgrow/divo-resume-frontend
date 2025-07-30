// /src/components/RequireAuth.jsx

import { Navigate } from "react-router-dom";
import { getToken, isTokenValid } from "../utils/auth";

function RequireAuth({ children }) {
    const token = getToken();
    if (!isTokenValid(token)) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default RequireAuth;