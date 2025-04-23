import { isTokenExpired } from "./authUtils";

const baseHeaders = {
    "Content-Type": "application/json",
};

// ==================== 헤더 생성 ====================
export function getHeaders(customHeaders = {}, useAuth = false) {
    const token = localStorage.getItem("accessToken");

    if (useAuth && token && isTokenExpired(token)) {
        return baseHeaders;
    }

    return {
        ...baseHeaders,
        ...(token && useAuth && { Authorization: `Bearer ${token}` }),
        ...customHeaders,
    };
}