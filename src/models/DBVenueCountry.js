import { DBBaseModel } from 'quicklists-vue-orm-ui'
import DBVenueState from '@/models/DBVenueState'
import { CustonMixins } from 'quicklists-vue-orm-ui'
import { createClient } from '@supabase/supabase-js'

export default class DBVenueCountry extends DBBaseModel {
    static entity = 'DBVenueCountry'
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

    static fields() {
        return {
            id: this.uid(null),
            name: this.attr(''),
            venue_states: this.hasMany(DBVenueState, 'parent_id'),
        }
    }

    static getSupabaseClient() {
        const baseUrlAndHeaders =
            CustonMixins.methods.DefaultHeadersAndBaseUrl()
        const result = createClient(
            baseUrlAndHeaders.baseURL,
            // baseUrlAndHeaders.headers.Apikey,
            baseUrlAndHeaders.headers.AuthToken,
            {
                headers: { ...baseUrlAndHeaders.headers },
            }
        )
        return result
    }

    static FetchAll(options) {
        return this.customSupabaseApiFetchAll(
            `${this.baseUrl}/rest/v1/venue_countries`,
            [],
            this.mergedOptionsFetchAll(options)
        )
    }

    static FetchById( options = { flags: {}, moreHeaders: {}, rels: [] }, id, relationships = []) {
        relationships
        return this.customSupabaseApiFetchById(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/venue_countries?id=eq.${id}&select=*`,
            id,
            relationships
        )
    }

    static Store(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiStore(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/venue_countries?select=*`,
            entity
        )
    }

    static Upsert(entity) {
        // entity
        // const supabase = this.getSupabaseClient()
        // supabase
        //     .from('venue_countries')
        //     .upsert({ name: 'Albania' },{ onConflict: ['name'] })
        //     .select()
        //     .then()
        //     .catch()

        return this.customSupabaseApiUpsert(
            `${this.baseUrl}/rest/v1/venue_countries?on_conflict=name`,
            entity
        )
    }

    static Update(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiUpdate(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/venue_countries?id=eq.${entity.id}&select=*`,
            entity
        )
    }
    static Delete(entityId, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiDelete(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/venue_countries?id=eq.${entityId}`,
            entityId
        )
    }
}
