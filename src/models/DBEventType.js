import DBEvent from '@/models/DBEvent'
import { DBBaseModel } from 'quicklists-vue-orm-ui'
import { FieldUsageTypes } from 'quicklists-vue-orm-ui'

export default class DBEventType extends DBBaseModel {
    static entity = 'DBEventTypes'
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

    static fieldsMetadata = {
        created_at: { usageType: FieldUsageTypes.readOnlyTimestampType() },
    }

    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(''),
            created_at: this.attr(''),
            backColor: this.attr(''),
            borderColor: this.attr(''),
            events: this.hasMany(DBEvent, 'event_type_id'),

            // id: this.uid(null),
            // place: this.attr(null),
            // text: this.attr(''),
            // // // start: this.attr('[2023-09-05T18:00:00.000Z, 2023-09-05T22:00:00.000Z]'),
            // // // start: this.attr(''),
            // start: this.attr(''),
            // end: this.attr(''),
            // event_type_id: this.attr(null),
            // event_type: this.belongsTo(DBEventType, 'event_type_id'),
        }
    }

    static FetchAll(options) {
        return this.customSupabaseApiFetchAll(
            `${this.baseUrl}/rest/v1/event_types`,
            [],
            this.mergedOptionsFetchAll(options)
        )
    }

    static FetchById( options = { flags: {}, moreHeaders: {}, rels: [] }, id, relationships = []) {
        relationships
        return this.customSupabaseApiFetchById(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/event_types?id=eq.${id}&select=*`,
            id,
            relationships
        )
    }

    static Store(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiStore(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/event_types?select=*`,
            entity
        )
    }

    static Update(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiUpdate(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/event_types?id=eq.${entity.id}&select=*`,
            entity
        )
    }
    static Delete(entityId, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiDelete(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/event_types?id=eq.${entityId}`,
            entityId
        )
    }
}
