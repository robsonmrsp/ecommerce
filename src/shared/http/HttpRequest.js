import axios from 'axios';
import btoa from 'btoa';
import { BASE_URL } from '@/shared/config';

export default class HttpRequest {
  createAuthHeaders = () => {
    const headers = {};
    headers['Authorization'] = `Basic ${btoa('modaadm:123456')}`;
    headers['Content-Type'] = 'application/json';
    return headers;
  };

  get = async (url) => {
    const response = await axios.get(`${BASE_URL}${url}/`, { headers: this.createAuthHeaders() });
    return response.data;
  };

  getPage = async (params) => {
    const response = await axios.get(BASE_URL + this.url, { headers: this.createAuthHeaders(), params });
    return response.data;
  };

  save = (object) => {
    const response = fetch(BASE_URL + this.url, {
      method: 'post',
      headers: this.createAuthHeaders(),
      body: JSON.stringify(object),
    });
    return response;
  };
}
