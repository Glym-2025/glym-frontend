import { URLS } from "../constants/urls";
import { isTokenExpired, refreshAccessToken } from "../utils/authUtils";

// ==================== POST ====================
export async function post({ baseUrl, endpoint, data, withToken = false, withCredentials = false }) {
    const url = baseUrl + endpoint;
    let token = sessionStorage.getItem("accessToken");

    if (withToken && (!token || isTokenExpired(token))) {
        token = await refreshAccessToken();
    }

    const headers = {
        "Content-Type": "application/json",
        ...(withToken && token ? { authorization: `${token}` } : {}),
    };

    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(data),
        credentials: withCredentials ? "include" : "omit",
    };

    const res = await fetch(url, options);
    const isJson = res.headers.get("content-type")?.includes("application/json");
    const responseData = isJson ? await res.json() : null;

    const AccessToken =
        endpoint === URLS.ENDPOINT.LOGIN
            ? res.headers.get("authorization") || responseData?.accessToken || null
            : null;

    return {
        status: res.status,
        ok: res.ok,
        data: responseData,
        AccessToken,
    };
}

// ==================== GET ====================
export async function get({ baseUrl, endpoint, data = {}, withToken = false, withCredentials = false }) {
    const query = new URLSearchParams(data).toString();
    const url = baseUrl + endpoint + (query ? `?${query}` : "");
    let token = sessionStorage.getItem("accessToken");

    if (withToken && (!token || isTokenExpired(token))) {
        token = await refreshAccessToken();
    }

    const headers = {
        "Content-Type": "application/json",
        ...(withToken && token ? { authorization: `Bearer ${token}` } : {}),
    };

    const options = {
        method: "GET",
        headers,
        credentials: withCredentials ? "include" : "omit",
    };

    const res = await fetch(url, options);
    const isJson = res.headers.get("content-type")?.includes("application/json");
    const responseData = isJson ? await res.json() : null;

    return {
        status: res.status,
        ok: res.ok,
        data: responseData,
    };
}

// ==================== PUT ====================
export async function put({ baseUrl, endpoint, data, withToken = false, withCredentials = false }) {
    const url = baseUrl + endpoint;
    let token = sessionStorage.getItem("accessToken");

    if (withToken && (!token || isTokenExpired(token))) {
        token = await refreshAccessToken();
    }

    const headers = {
        "Content-Type": "application/json",
        ...(withToken && token ? { authorization: `Bearer ${token}` } : {}),
    };

    const options = {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
        credentials: withCredentials ? "include" : "omit",
    };

    const res = await fetch(url, options);
    const isJson = res.headers.get("content-type")?.includes("application/json");
    const responseData = isJson ? await res.json() : null;

    return {
        status: res.status,
        ok: res.ok,
        data: responseData,
    };
}

// ==================== DELETE ====================
export async function del({ baseUrl, endpoint, data = {}, withToken = false, withCredentials = false }) {
    const query = new URLSearchParams(data).toString();
    const url = baseUrl + endpoint + (query ? `?${query}` : "");
    let token = sessionStorage.getItem("accessToken");

    if (withToken && (!token || isTokenExpired(token))) {
        token = await refreshAccessToken();
    }

    const headers = {
        "Content-Type": "application/json",
        ...(withToken && token ? { authorization: `Bearer ${token}` } : {}),
    };

    const options = {
        method: "DELETE",
        headers,
        credentials: withCredentials ? "include" : "omit",
    };

    const res = await fetch(url, options);
    const isJson = res.headers.get("content-type")?.includes("application/json");
    const responseData = isJson ? await res.json() : null;

    return {
        status: res.status,
        ok: res.ok,
        data: responseData,
    };
}
