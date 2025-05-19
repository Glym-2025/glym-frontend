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
            credentials: "include",
            withCredentials: true
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

// ==================== 401 에러 처리 및 재시도 ====================
export async function handle401AndRetry(requestFn, args) {
    const newToken = await refreshAccessToken();
    if (newToken) {
        // 새로운 토큰으로 헤더 업데이트 (필요하다면)
        if (args.headers && args.headers.authorization) {
            args.headers.authorization = `${newToken}`;
        }
        return requestFn(args); // 원래 요청 재시도
    } else {
        // 리프레시 토큰 갱신 실패 시 로그아웃 처리
        alert("세션이 만료되었습니다. 다시 로그인해주세요."); // 또는 ErrorModal 사용
        sessionStorage.clear();
        // TODO: React Router의 navigate를 사용하여 페이지 이동하도록 수정
        window.location.href = "/login";
    }
}