import { getHeaders } from "./headers";
import { handle401AndRetry } from "./authUtils";
import { needsCookie } from "./cookieUtils";
import { URLS } from "../constants/urls";

function createFetchOptions(method, headers, data, endpoint) {
    return {
        method,
        headers,
        ...(data ? { body: JSON.stringify(data) } : {}),
        ...(needsCookie(endpoint) ? { credentials: "include" } : {}),
    };
}

export async function post({ postHeaders = {}, baseUrl, endpoint, data, useAuth = false }) {
    const url = baseUrl + endpoint;
    const headers = getHeaders(postHeaders, useAuth);
    const options = createFetchOptions("POST", headers, data, endpoint);

    return fetch(url, options)
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
        });
}

export async function get({ postHeaders = {}, baseUrl, endpoint, params = {}, useAuth = false }) {
    const query = new URLSearchParams(params).toString();
    const url = baseUrl + endpoint;
    const fullUrl = query ? `${url}?${query}` : url;
    const headers = getHeaders(postHeaders, useAuth);
    const options = createFetchOptions("GET", headers, null, endpoint);

    return fetch(fullUrl, options)
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
        });
}

export async function put({ postHeaders = {}, baseUrl, endpoint, data, useAuth = false }) {
    const url = baseUrl + endpoint;
    const headers = getHeaders(postHeaders, useAuth);
    const options = createFetchOptions("PUT", headers, data, endpoint);

    return fetch(url, options)
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
        });
}

export async function del({ postHeaders = {}, baseUrl, endpoint, params = {}, useAuth = false }) {
    const query = new URLSearchParams(params).toString();
    const url = baseUrl + endpoint;
    const fullUrl = query ? `${url}?${query}` : url;
    const headers = getHeaders(postHeaders, useAuth);
    const options = createFetchOptions("DELETE", headers, null, endpoint);

    return fetch(fullUrl, options)
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
        });
}
