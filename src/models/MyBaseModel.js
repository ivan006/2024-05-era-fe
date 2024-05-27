import { DBBaseModel } from 'quicklists-vue-orm-ui'

export default class DBEvent extends DBBaseModel {
    static baseUrl = 'http://2024-05-era.test'
    static Apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNjk0MjEwNDAwLAogICJleHAiOiAxODUyMDYzMjAwCn0.1OA6JmidSrPG7-VKVIC51DIO0Jj2OxbtHknWYaAu4mw'
    static adapator = 'laravel'

    static mergeHeaders(headers) {
      return {
        Apikey: this.Apikey,
        ...headers,
      }
    }



}
