// Auth Model

import { Model } from '@vuex-orm/core'
import { CustonMixins } from 'quicklists-vue-orm-ui'
import User from '@/models/User'

export default class LoginSession extends Model {
    // This is the name used as module name of the Vuex Store.
    static entity = 'login-sessions'
    static primaryKey = 'access_token'
    static baseUrl = 'https://yellow.bluegemify.co.za'
    static Apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNjk0MjEwNDAwLAogICJleHAiOiAxODUyMDYzMjAwCn0.1OA6JmidSrPG7-VKVIC51DIO0Jj2OxbtHknWYaAu4mw'

    // List of all fields (schema) of the post model. `this.attr` is used
    // for the generic field type. The argument is the default value.
    static fields() {
        return {
            access_token: this.attr(''),
            token_type: this.attr(''),
            expires_in: this.attr(null),
            refresh_token: this.attr(''),
            user_id: this.attr(null),
            user: this.belongsTo(User, 'user_id'),
            enabled_provider_group_id: this.attr(null),
            enabled_customer_group_id: this.attr(null),
        }
    }

    static Login(form) {

        this.apiConfig = {
          baseURL: this.baseUrl,
          headers: {
            Apikey: this.Apikey,
          },
        }
        this.apiConfig = {
          baseURL: this.baseUrl,
          headers: {
            Apikey: this.Apikey,
          },
        }


        console.log(this.apiConfig)
        return this.api()
            .post(
                '/auth/v1/token?grant_type=password',
                {
                    email: form.email,
                    password: form.password,
                },
                {
                    baseURL: this.baseUrl,
                    headers: {
                      Apikey: this.Apikey,
                    },
                    dataTransformer: ({ data }) => {
                        const result =
                            CustonMixins.methods.NormalizeRecursive(data)
                        return result
                    },
                }
            )
            .then((res) => {
                CustonMixins.methods.logNetworkSuccess(res)
                return res
            })
            .catch((error) => {
                CustonMixins.methods.logNetworkError(error)
            })
    }
}
