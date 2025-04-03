const baseHeaders = {
    'Content-Type': 'application/json',
  };
  
  // POST 요청
  export async function post({ baseUrl, endpoint, data }) {
    const url = baseUrl + endpoint;
  
    return fetch(url, {
      method: 'POST',
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
        console.error('POST 요청 에러:', error);
        throw error;
      });
  }
  
  // GET 요청
  export async function get({ baseUrl, endpoint, params = {} }) {
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
  export async function put({ baseUrl, endpoint, data }) {
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
  export async function del({ baseUrl, endpoint, params = {} }) {
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
  