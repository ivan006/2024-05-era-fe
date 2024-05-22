import { DBBaseModel } from 'quicklists-vue-orm-ui'
import { FieldUsageTypes } from 'quicklists-vue-orm-ui'

export default class DBPerson extends DBBaseModel {
    static entity = 'DBPerson'
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
            id: this.uid(null),
            first_name: this.attr(''),
            last_name: this.attr(''),
            created_at: this.attr('').nullable(),
            user_id: this.attr(null).nullable(),
        }
    }

    static FetchAll(options = {
        page: 1,
        limit: 15,
        filters: {},
        flags: {},
        moreHeaders: {},
        clearPrimaryModelOnly: false,
        relationships: [],
      }) {
        return this.customSupabaseApiFetchAll(
          `${this.baseUrl}/rest/v1/persons`,
          [
            ...options.relationships
          ],
          this.mergedOptionsFetchAll(options)
        )
    }

    static FetchById( options = { flags: {}, moreHeaders: {}, rels: [] }, id, relationships = []) {
        relationships
        return this.customSupabaseApiFetchById(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/persons?id=eq.${id}&select=*`,
            id,
            relationships
        )
    }

    static Store(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiStore(
            this.mergedOptions(options),`${this.baseUrl}/rest/v1/persons?select=*`, entity)
    }

    static Update(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiUpdate(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/persons?id=eq.${entity.id}&select=*`,
            entity
        )
    }

    static Delete(entityId, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiDelete(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/persons?id=eq.${entityId}`,
            entityId
        )
    }
}
