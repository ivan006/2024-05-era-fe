import { DBBaseModel } from 'quicklists-vue-orm-ui'
import DBVenueSubstate from '@/models/DBVenueSubstate'
import DBVenueSuburb from '@/models/DBVenueSuburb'

export default class DBVenueTown extends DBBaseModel {
    static entity = 'DBVenueTown'
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
            parent_id: this.attr(null),
            venue_substate: this.belongsTo(DBVenueSubstate, 'parent_id'),
            venue_suburbs: this.hasMany(DBVenueSuburb, 'parent_id'),
        }
    }

    static FetchAll(options) {
        return this.customSupabaseApiFetchAll(
            `${this.baseUrl}/rest/v1/venue_towns`,
            [],
            this.mergedOptionsFetchAll(options)
        )
    }

    static FetchById( options = { flags: {}, moreHeaders: {}, rels: [] }, id, relationships = []) {
        relationships
        return this.customSupabaseApiFetchById(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/venue_towns?id=eq.${id}&select=*`,
            id,
            relationships
        )
    }

    static Store(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiStore(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/venue_towns?select=*`,
            entity
        )
    }

    static Upsert(entity) {
        return this.customSupabaseApiUpsert(
            `${this.baseUrl}/rest/v1/venue_towns?on_conflict=name,parent_id`,
            entity
        )
    }

    static Update(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiUpdate(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/venue_towns?id=eq.${entity.id}&select=*`,
            entity
        )
    }
    static Delete(entityId, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiDelete(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/venue_towns?id=eq.${entityId}`,
            entityId
        )
    }
}
