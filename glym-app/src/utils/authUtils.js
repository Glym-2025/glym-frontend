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
    const res = await fetch(URLS.ENDPOINT.REFRESH_TOKEN, {
        method: "POST",
        credentials: "include",
    });

    if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem("accessToken", data.accessToken);
        return data.accessToken;
    } else {
        return null;
    }
}