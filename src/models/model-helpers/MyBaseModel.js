import { DBBaseModel } from 'quicklists-vue-orm-ui'
import VueCookies from "vue-cookies";

export default class DBEvent extends DBBaseModel {
  // static baseUrl = 'https://briland.co.za'
  static baseUrl = 'http://2024-05-era.test'
  // static Apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNjk0MjEwNDAwLAogICJleHAiOiAxODUyMDYzMjAwCn0.1OA6JmidSrPG7-VKVIC51DIO0Jj2OxbtHknWYaAu4mw'
  static adapator = 'laravel'

  static mergeHeaders(headers) {
    const result = {
      ...headers,
    };

    const VITE_AUTH = VueCookies.get('VITE_AUTH');

    if (VITE_AUTH?.token) {
      const expireDate = new Date(VITE_AUTH.expireDate);
      const currentDate = new Date();

      if (currentDate <= expireDate) {
        result['Authorization'] = `Bearer ${VITE_AUTH.token}`;
      }
    }

    return result;
  }



}
