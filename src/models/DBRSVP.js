import { FieldUsageTypes } from 'quicklists-vue-orm-ui'
import { CustonMixins } from 'quicklists-vue-orm-ui'
import { createClient } from '@supabase/supabase-js'
import { DBBaseModel } from 'quicklists-vue-orm-ui'
import DBCustomerGroup from '@/models/DBCustomerGroup'
import DBEvent from '@/models/DBEvent'
import DBProviderGroup from '@/models/DBProviderGroup'

export default class DBRSVP extends DBBaseModel {
    static entity = 'DBRSVP'
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

    static getSupabaseClient() {
        const baseUrlAndHeaders =
            CustonMixins.methods.DefaultHeadersAndBaseUrl()
        const result = createClient(
            baseUrlAndHeaders.baseURL,
            baseUrlAndHeaders.headers.AuthToken,
            {
                headers: { ...baseUrlAndHeaders.headers },
            }
        )
        return result
    }

    static fieldsMetadata = {
        customer_id: {
          // usageType: FieldUsageTypes.ownerCustomerType(),
          rules: (user) => {
            let customerGroupIds = []
            if (user?.provider_groups){
              customerGroupIds = user.customer_groups.map(group => group.id);
            }
            return {
              id: `in.(${customerGroupIds})`
            }
          }
        },
        provider_that_owns_this_id: {
          // usageType: FieldUsageTypes.ownerProviderType(),

          relationRules: {

            linkables: (user) => {
              let providerGroupIds = []
              if (user?.provider_groups){
                providerGroupIds = user.provider_groups.map(group => group.id);
              }
              return {
                id: `in.(${providerGroupIds})`
              }
            }
          }
        },
        created_at: { usageType: FieldUsageTypes.readOnlyTimestampType() },
    }

    static fields() {
        return {
            id: this.uid(null),

            event_id: this.attr(null).nullable(),
            event: this.belongsTo(DBEvent, 'event_id'),

            customer_id: this.attr(null),
            customer: this.belongsTo(DBCustomerGroup, 'customer_id'),

            provider_that_owns_this_id: this.attr(null),
            provider_that_owns_this: this.belongsTo(
                DBProviderGroup,
                'provider_that_owns_this_id'
            ),

            created_at: this.attr(''),
        }
    }

    static parentRels = [
        'provider_that_owns_this:provider_that_owns_this_id',
        'customer:customer_id',
        'event:event_id',
    ]

    static FetchAll(
        options = {
            page: 1,
            limit: 15,
            filters: {},
            flags: {},
            moreHeaders: {},
            clearPrimaryModelOnly: false,
            relationships: [],
        }
        // { page = 1, limit = 15 },
        // filters = {},
        // flags = {},
        // relationships = [],
        // moreHeaders = {},
        // clearPrimaryModelOnly = false
    ) {
        // const supabase = this.getSupabaseClient()
        // supabase
        //     .from('events')
        //     .select('*,*', { count: 'exact'})
        //     .then((res) => {
        //         console.log(res)
        //     })

        // const test2 = supabase
        //     .from('events')
        //     .select().then().catch()
        // console.log(test2)

        // relationships
        return this.customSupabaseApiFetchAll(
            `${this.baseUrl}/rest/v1/rsvps`,
            this.parentRels,
            this.mergedOptionsFetchAll(options)
        )
    }

    static FetchById( options = { flags: {}, moreHeaders: {}, rels: [] }, id, relationships = []) {
        relationships
        return this.customSupabaseApiFetchById(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/rsvps?id=eq.${id}`,
            id,
            this.parentRels
        )
    }

    static Store(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiStore(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/rsvps?select=*`,
            entity
        )
    }

    static Update(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        // const supabase = this.getSupabaseClient()
        //
        // let payload = {...entity}
        // // delete payload.id
        // // delete payload.created_at
        // supabase
        //     .from('rsvps')
        //     .update({...payload})
        //     .eq('id', entity.id)
        //     .select()
        //     .then().catch()

        return this.customSupabaseApiUpdate(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/rsvps?id=eq.${entity.id}&select=*`,
            entity
        )
    }
    static Delete(entityId, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiDelete(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/rsvps?id=eq.${entityId}`,
            entityId
        )
    }
}
