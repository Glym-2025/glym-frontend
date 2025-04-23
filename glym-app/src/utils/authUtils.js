import { URLS } from "../constants/urls";

// ==================== 토큰 만료 여부 확인 ====================
export function isTokenExpired(token) {
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const now = Math.floor(Date.now() / 1000);
        return payload.exp < now;
    } catch (e) {
        return true;
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
        localStorage.setItem("accessToken", data.accessToken);
        return data.accessToken;
    } else {
        return null;
    }
}
// ==================== 401 에러 처리 및 재시도 ====================
export async function handle401AndRetry(requestFn, args) {
    const newToken = await refreshAccessToken();
    if (newToken) {
        return requestFn(args);
    } else {
        alert("세션이 만료되었습니다. 다시 로그인해주세요.");
        localStorage.clear();
        window.location.href = "/login";
    }
}