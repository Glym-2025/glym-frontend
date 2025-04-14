import { URLS } from "../constants/urls";

const baseHeaders = {
  'Content-Type': 'application/json',
};

// POST 요청
export async function post({postHeaders = baseHeaders, baseUrl, endpoint, data }) {
  const url = baseUrl + endpoint;

  return fetch(url, {
    method: 'POST',
    headers: postHeaders,
    body: JSON.stringify(data)
  })
    .then(async (res) => {
      const data = await res.json();
      const AccessToken = endpoint === URLS.ENDPOINT.LOGIN ? res.headers.get('authorization') : null;


      return {
        status: res.status,
        ok: res.ok,
        data,
        AccessToken
      };
    })
    .catch((error) => {
      console.error('POST 요청 에러:', error);
      throw error;
    });
}

// GET 요청
export async function get({ postHeaders = baseHeaders,baseUrl, endpoint, params = {} }) {
  const query = new URLSearchParams(params).toString();
  const url = baseUrl + endpoint;
  const fullUrl = query ? `${url}?${query}` : url;

  return fetch(fullUrl, {
    method: 'GET',
    headers: baseHeaders,
  })
    .then(async (res) => {
      const data = await res.json();
      return {
        status: res.status,
        ok: res.ok,
        data,
      };
    })
    .catch((error) => {
      console.error('GET 요청 에러:', error);
      throw error;
    });
}

// PUT 요청
export async function put({ postHeaders = baseHeaders, baseUrl, endpoint, data }) {
  const url = baseUrl + endpoint;

  return fetch(url, {
    method: 'PUT',
    headers: baseHeaders,
    body: JSON.stringify(data),
  })
    .then(async (res) => {
      const data = await res.json();
      return {
        status: res.status,
        ok: res.ok,
        data,
      };
    })
    .catch((error) => {
      console.error('PUT 요청 에러:', error);
      throw error;
    });
}

// DELETE 요청
export async function del({ postHeaders = baseHeaders, baseUrl, endpoint, params = {} }) {
  const query = new URLSearchParams(params).toString();
  const url = baseUrl + endpoint;
  const fullUrl = query ? `${url}?${query}` : url;

  return fetch(fullUrl, {
    method: 'DELETE',
    headers: baseHeaders,
  })
    .then(async (res) => {
      const data = await res.json();
      return {
        status: res.status,
        ok: res.ok,
        data,
      };
    })
    .catch((error) => {
      console.error('DELETE 요청 에러:', error);
      throw error;
    });
}
