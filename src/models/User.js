import { Helpers } from 'quicklists-vue-orm-ui'
import { CustonMixins } from 'quicklists-vue-orm-ui'
import SnackbarNotification from '@/models/SnackbarNotification'
import moment from 'moment'
import { DBBaseModel } from 'quicklists-vue-orm-ui'
import DBPerson from '@/models/DBPerson'

export default class User extends DBBaseModel {
    // This is the name used as module name of the Vuex Store.
    static entity = 'users'
    static baseUrl = 'https://yellow.bluegemify.co.za'
    static Apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNjk0MjEwNDAwLAogICJleHAiOiAxODUyMDYzMjAwCn0.1OA6JmidSrPG7-VKVIC51DIO0Jj2OxbtHknWYaAu4mw'

    static mergedOptions(options) {
      return {
        ...options,
        moreHeaders: {
          Apikey: this.Apikey,
          ...options.moreHeaders,
        },
      }
    }

    static mergedOptionsFetchAll(options) {
      return {
        ...options,
        page: 1,
        limit: 15,
        filters: {},
        flags: {},
        moreHeaders: {
          Apikey: this.Apikey,
          ...options.moreHeaders,
        },
        clearPrimaryModelOnly: false,
        relationships: [],
      }
    }

    // List of all fields (schema) of the post model. `this.attr` is used
    // for the generic field type. The argument is the default value.
    static fields() {
        return {
            id: this.attr(''),
            aud: this.attr(''),
            role: this.attr(''),
            email: this.attr(''),
            email_confirmed_at: this.attr(''),
            phone: this.attr(''),
            confirmed_at: this.attr(''),
            last_sign_in_at: this.attr(''),
            created_at: this.attr(''),
            updated_at: this.attr(''),
            person: this.hasMany(DBPerson, 'user_id'),
        }
    }

    static FetchMe(id, relationships = []) {
        relationships

        const supabase = Helpers.getSupabaseClient()
        // supabase.from('auth.users').select('*').then().catch()
        supabase.auth.getUser().then().catch()
        // supabase.auth.admin.listUsers().then().catch()

        // return this.customSupabaseApiFetchById(
        //     this.mergedOptions(options),
        //     `${this.baseUrl}/rest/v1/events?id=eq.${id}`,
        //     id,
        //
        //     [
        //         'event_type:event_type_id',
        //         'venue_country:venue_country_id',
        //         'venue_state:venue_state_id',
        //         'venue_substate:venue_substate_id',
        //         'venue_town:venue_town_id',
        //         'venue_suburb:venue_suburb_id',
        //     ]
        // )
    }

    static FetchAll(options) {
        return this.customSupabaseApiFetchAll(`${this.baseUrl}/auth/v1/user`, [], options)
    }

    static Store(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.api()
            .post('/auth/v1/signup', entity, {
                ...CustonMixins.methods.DefaultHeadersAndBaseUrl(),
                dataTransformer: ({ data }) => {
                    return CustonMixins.methods.NormalizeRecursive(data)
                },
            })
            .then((res) => {
                SnackbarNotification.insert({
                    data: {
                        id: Date.now(),
                        text: 'Success! Please verify your email.',
                        date: moment().toISOString(),
                        show: true,
                    },
                })
                CustonMixins.methods.logNetworkSuccess(res)
                return res
            })
            .catch((error) => {
                CustonMixins.methods.logNetworkError(error)
            })
    }
}
