import DBPerson from '@/models/DBPerson'
import DBCustomerGroup from '@/models/DBCustomerGroup'
import { DBBaseModel } from 'quicklists-vue-orm-ui'
import { FieldUsageTypes } from 'quicklists-vue-orm-ui'

export default class DBCustomerManager extends DBBaseModel {
    static entity = 'DBCustomerManager'
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
        customer_that_owns_this_id: {
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
    }

    static fields() {
        return {
            id: this.uid(null),
            member_id: this.attr(null).nullable(),
            member: this.belongsTo(DBPerson, 'member_id'),
            created_at: this.attr('').nullable(),

            customer_that_owns_this_id: this.attr(null),
            customer_that_owns_this: this.belongsTo(
                DBCustomerGroup,
                'customer_that_owns_this_id'
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
            `${this.baseUrl}/rest/v1/customer_managers`,
            // [
            //     'customer_that_owns_this:customer_that_owns_this_id(*, memberships(*))',
            // ],
            [
                'customer_that_owns_this:customer_that_owns_this_id(*, memberships(*, approved_by:approved_by_id(*)))',
            ],
            this.mergedOptionsFetchAll(options)
        )
    }

    static FetchById( options = { flags: {}, moreHeaders: {}, rels: [] }, id, relationships = []) {
        relationships
        return this.customSupabaseApiFetchById(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/customer_managers?id=eq.${id}&select=*`,
            id,
            relationships
        )
    }

    static Store(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiStore(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/customer_managers?select=*`,
            entity
        )
    }

    static Update(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiUpdate(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/customer_managers?id=eq.${entity.id}&select=*`,
            entity
        )
    }
    static Delete(entityId, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiDelete(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/customer_managers?id=eq.${entityId}`,
            entityId
        )
    }
}
