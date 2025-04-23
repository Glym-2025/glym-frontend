import { URLS } from "../constants/urls";

const baseHeaders = {
  "Content-Type": "application/json",
};
// ==================== 토큰 만료 여부 확인 ====================
function isTokenExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch (e) {
    return true;
  }
}
// ==================== 헤더 생성 ====================
function getHeaders(customHeaders = {}, useAuth = false) {
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
// ==================== 쿠키 필요 여부 확인 ====================
function needsCookie(endpoint) {
  return endpoint === URLS.ENDPOINT.REFRESH_TOKEN || endpoint === URLS.ENDPOINT.LOGOUT;
}
// ==================== Access Token 갱신 ====================
async function refreshAccessToken() {
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
async function handle401AndRetry(requestFn, args) {
  const newToken = await refreshAccessToken();
  if (newToken) {
    return requestFn(args);
  } else {
    alert("세션이 만료되었습니다. 다시 로그인해주세요.");
    localStorage.clear();
    window.location.href = "/login";
  }
}
// ==================== HTTP 요청 ====================
export async function post({ postHeaders = {}, baseUrl, endpoint, data, useAuth = false }) {
  const url = baseUrl + endpoint;
  const headers = getHeaders(postHeaders, useAuth);

  const fetchOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
    ...(needsCookie(endpoint) ? { credentials: "include" } : {}),
  };

  return fetch(url, fetchOptions)
    .then(async (res) => {
      if (res.status === 401 && useAuth) {
        return handle401AndRetry(post, { postHeaders, baseUrl, endpoint, data, useAuth });
      }

      const responseData = await res.json();
      const AccessToken =
        endpoint === URLS.ENDPOINT.LOGIN
          ? res.headers.get("authorization") || responseData.accessToken || null
          : null;

      return {
        status: res.status,
        ok: res.ok,
        data: responseData,
        AccessToken,
      };
    })
    .catch((error) => {
      console.error("POST 요청 에러:", error);
      throw error;
    });
}

export async function get({ postHeaders = {}, baseUrl, endpoint, params = {}, useAuth = false }) {
  const query = new URLSearchParams(params).toString();
  const url = baseUrl + endpoint;
  const fullUrl = query ? `${url}?${query}` : url;
  const headers = getHeaders(postHeaders, useAuth);

  const fetchOptions = {
    method: "GET",
    headers,
    ...(needsCookie(endpoint) ? { credentials: "include" } : {}),
  };

  return fetch(fullUrl, fetchOptions)
    .then(async (res) => {
      if (res.status === 401 && useAuth) {
        return handle401AndRetry(get, { postHeaders, baseUrl, endpoint, params, useAuth });
      }

      const responseData = await res.json();
      return {
        status: res.status,
        ok: res.ok,
        data: responseData,
      };
    })
    .catch((error) => {
      console.error("GET 요청 에러:", error);
      throw error;
    });
}

export async function put({ postHeaders = {}, baseUrl, endpoint, data, useAuth = false }) {
  const url = baseUrl + endpoint;
  const headers = getHeaders(postHeaders, useAuth);

  const fetchOptions = {
    method: "PUT",
    headers,
    body: JSON.stringify(data),
    ...(needsCookie(endpoint) ? { credentials: "include" } : {}),
  };

  return fetch(url, fetchOptions)
    .then(async (res) => {
      if (res.status === 401 && useAuth) {
        return handle401AndRetry(put, { postHeaders, baseUrl, endpoint, data, useAuth });
      }

      const responseData = await res.json();
      return {
        status: res.status,
        ok: res.ok,
        data: responseData,
      };
    })
    .catch((error) => {
      console.error("PUT 요청 에러:", error);
      throw error;
    });
}

export async function del({ postHeaders = {}, baseUrl, endpoint, params = {}, useAuth = false }) {
  const query = new URLSearchParams(params).toString();
  const url = baseUrl + endpoint;
  const fullUrl = query ? `${url}?${query}` : url;
  const headers = getHeaders(postHeaders, useAuth);

  const fetchOptions = {
    method: "DELETE",
    headers,
    ...(needsCookie(endpoint) ? { credentials: "include" } : {}),
  };

  return fetch(fullUrl, fetchOptions)
    .then(async (res) => {
      if (res.status === 401 && useAuth) {
        return handle401AndRetry(del, { postHeaders, baseUrl, endpoint, params, useAuth });
      }

      const responseData = await res.json();
      return {
        status: res.status,
        ok: res.ok,
        data: responseData,
      };
    })
    .catch((error) => {
      console.error("DELETE 요청 에러:", error);
      throw error;
    });
}
