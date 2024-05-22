// import { Model } from '@vuex-orm/core'
// import supabase from '@/supabase.js'
import { CustonMixins } from 'quicklists-vue-orm-ui'
import { FieldUsageTypes } from 'quicklists-vue-orm-ui'
import { createClient } from '@supabase/supabase-js'
import DBEvent from '@/models/DBEvent'
import { DBBaseModel } from 'quicklists-vue-orm-ui'
import DBPerson from '@/models/DBPerson'
import DBMembership from '@/models/DBMembership'
import DBRSVP from '@/models/DBRSVP'

export default class DBProviderGroup extends DBBaseModel {
    static entity = 'DBProviderGroup'
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
            // baseUrlAndHeaders.headers.Apikey,
            baseUrlAndHeaders.headers.AuthToken,
            {
                headers: { ...baseUrlAndHeaders.headers },
            }
        )
        return result
    }

    static fieldsMetadata = {
        created_at: { usageType: FieldUsageTypes.readOnlyTimestampType() },
        person_that_created_this_id: {
            // usageType: FieldUsageTypes.creatorType(),
        },
      events: {
          relationRules: {
            creatable: (user, parentItem) => {

              let result = false
              if (user){
                let providerGroupIds = []
                if (user?.provider_groups){
                  providerGroupIds = user.provider_groups.map(group => group.id);
                }
                const isProviderOwner = providerGroupIds.includes(parentItem.id)
                result = isProviderOwner
              }
              return result;
            },
          }
        },
        applications: { usageType: FieldUsageTypes.childrenApplicationType() },
    }

    static fields() {
        return {
            id: this.uid(null),
            name: this.attr(''),
            created_at: this.attr('').nullable(),
            events: this.hasMany(DBEvent, 'provider_that_owns_this_id'),
            rsvps: this.hasMany(DBRSVP, 'provider_that_owns_this_id'),
            person_that_created_this_id: this.attr(null),
            person_that_created_this: this.belongsTo(
                DBPerson,
                'person_that_created_this_id'
            ),
            memberships: this.hasMany(DBMembership, 'approved_by_id'),
            // offered_relationships: this.hasMany(
            applications: this.hasMany(
                DBMembership,
                'provider_being_applied_to_id'
            ),
        }
    }

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
    ) {
        return this.customSupabaseApiFetchAll(
            `${this.baseUrl}/rest/v1/provider_groups`,
            [
                'person_that_created_this:person_that_created_this_id',
                ...options.relationships,
            ],
            this.mergedOptionsFetchAll(options)
        )
    }

    static FetchById( options = { flags: {}, moreHeaders: {}, rels: [] }, id, relationships = []) {
        relationships
        return this.customSupabaseApiFetchById(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/provider_groups?id=eq.${id}&select=*`,
            id,
            relationships
        )
    }

    static Store(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        // const supabase = this.getSupabaseClient();
        // supabase
        //     .from('providers')
        //     .upsert(entity)
        //     .select().then().catch()
        return this.customSupabaseApiStore(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/provider_groups?select=*`,
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
        //     .from('providers')
        //     .update({...payload})
        //     .eq('id', entity.id)
        //     .select()
        //     .then().catch()
        return this.customSupabaseApiUpdate(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/provider_groups?id=eq.${entity.id}&select=*`,
            entity
        )
    }
    static Delete(entityId, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiDelete(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/provider_groups?id=eq.${entityId}`,
            entityId
        )
    }
}
