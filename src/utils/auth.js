// /src/utils/auth.js

import { jwtDecode } from "jwt-decode";

export function getToken() {
    return localStorage.getItem("token");
}

export function setToken(token) {
    localStorage.setItem("token", token);
}

export function removeToken() {
    localStorage.removeItem("token");
}

export function setUserId(userId) {
    localStorage.setItem("userId", userId);
}
export function getUserId() {
    return localStorage.getItem("userId");
}
export function removeUserId() {
    localStorage.removeItem("userId");
}

export function isTokenValid(token) {
    if (!token) return false;
    try {
        const { exp } = jwtDecode(token);
        return Date.now() < exp * 1000;
    } catch {
        return false;
    }
}