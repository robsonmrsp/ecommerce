import axios from 'axios';
import btoa from 'btoa';

const BASE_URL = 'https://XXX.com/XXX/';

export default class HttpRequest {
  // constructor(url) {
  //   if (!url) {
  //     throw new Error('Need to define a sufix to endpoint!');
  //   }
  //   this.url = url;
  // }

  createAuthHeaders = () => {
    const headers = {};
    headers['Authorization'] = `Basic ${btoa('XXX:123456')}`;
    headers['Content-Type'] = 'application/json';

    console.log(`Basic ${btoa('XXXXX:123456')}`);
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

  delete = () => {};
}
