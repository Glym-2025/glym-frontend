import { URLS } from "../constants/urls";

// ==================== 토큰 만료 여부 확인 ====================
export function isTokenExpired(token) {
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const now = Math.floor(Date.now() / 1000);
        return payload.exp < now;
    } catch {
        return true; // 잘못된 토큰이거나 디코딩 실패 시 만료된 것으로 간주
    }
}

// ==================== Access Token 갱신 ====================
export async function refreshAccessToken() {
    try {
        const res = await fetch(URLS.ENDPOINT.REFRESH_TOKEN, {
            method: "POST",
            credentials: "include", // refreshToken은 보통 쿠키로 전송됨
        });

        if (!res.ok) return null;

        const isJson = res.headers.get("content-type")?.includes("application/json");
        const data = isJson ? await res.json() : null;

        const newToken = data?.accessToken;
        if (newToken) {
            sessionStorage.setItem("accessToken", newToken);
            return newToken;
        }

        return null;
    } catch (error) {
        console.error("토큰 갱신 실패:", error);
        return null;
    }
}