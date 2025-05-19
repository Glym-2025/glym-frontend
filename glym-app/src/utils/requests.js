import { URLS } from "../constants/urls";
import { isTokenExpired, refreshAccessToken, handle401AndRetry } from "../utils/authUtils";

// 기본 요청 처리 함수
async function performRequest({ method, baseUrl, endpoint, data, withToken = false, withCredentials = false }) {
    const url = baseUrl + endpoint;
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        credentials: withCredentials ? "include" : "omit",
    };

    if (data && method !== "GET" && method !== "DELETE") {
        options.body = JSON.stringify(data);
    } else if (data && (method === "GET" || method === "DELETE")) {
        const query = new URLSearchParams(data).toString();
        url += (query ? `?${query}` : "");
    }

    // 토큰이 필요한 경우 헤더에 추가
    if (withToken) {
        let token = sessionStorage.getItem("accessToken");
        // 요청 전에 토큰 만료 여부를 체크하고 갱신하는 로직은 제거하고, 401 응답으로 처리합니다.
        options.headers['authorization'] = `${token}`;
    }

    const res = await fetch(url, options);
    const isJson = res.headers.get("content-type")?.includes("application/json");
    const responseData = isJson ? await res.json() : null;

    // 401 에러 발생 시 토큰 갱신 및 재시도
    if (res.status === 401 && withToken) {
        console.warn(`401 Unauthorized for ${method} ${url}. Attempting token refresh and retry.`);
        // handle401AndRetry 함수에 원래 요청 함수와 인자를 전달
        return handle401AndRetry(performRequest, { method, baseUrl, endpoint, data, withToken, withCredentials });
    }

    // 로그인 응답에서 Access Token 추출 (로그인 엔드포인트에만 해당)
    const AccessToken = (endpoint === URLS.ENDPOINT.LOGIN && res.ok)
        ? res.headers.get("authorization") || responseData?.accessToken || null
        : null;

    return {
        status: res.status,
        ok: res.ok,
        data: responseData,
        AccessToken: AccessToken, // 로그인 응답에만 포함
    };
}

// ==================== POST ====================
export function post(args) {
    return performRequest({ ...args, method: "POST" });
}

// ==================== GET ====================
export function get(args) {
    return performRequest({ ...args, method: "GET" });
}

// ==================== PUT ====================
export function put(args) {
    return performRequest({ ...args, method: "PUT" });
}

// ==================== DELETE ====================
export function del(args) {
     return performRequest({ ...args, method: "DELETE" });
}
