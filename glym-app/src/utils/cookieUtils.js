import { URLS } from "../constants/urls";

// ==================== 쿠키 필요 여부 확인 ====================
export function needsCookie(endpoint) {
    return endpoint === URLS.ENDPOINT.REFRESH_TOKEN || endpoint === URLS.ENDPOINT.LOGOUT;
}