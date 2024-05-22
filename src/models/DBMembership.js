import DBProviderGroup from '@/models/DBProviderGroup'
import DBCustomerGroup from '@/models/DBCustomerGroup'
import { DBBaseModel } from 'quicklists-vue-orm-ui'
import { FieldUsageTypes } from 'quicklists-vue-orm-ui'
import DBPerson from '@/models/DBPerson'

export default class DBMembership extends DBBaseModel {
    static entity = 'DBMembership'
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
        approved_by_id: {
            usageType: FieldUsageTypes.ownerApprovedByProviderType(),
        },
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
        provider_being_applied_to_id: {
            usageType: FieldUsageTypes.ownerAppliedToProviderType(),
        },
        person_that_created_this: this.belongsTo(
            DBPerson,
            'person_that_created_this_id'
        ),
        created_at: { usageType: FieldUsageTypes.readOnlyTimestampType() },
        person_that_created_this_id: {
            // usageType: FieldUsageTypes.creatorType(),
        },
    }

    static fields() {
        return {
            id: this.uid(null),

            approved_by_id: this.attr(null).nullable(),
            approved_by: this.belongsTo(DBProviderGroup, 'approved_by_id'),
            provider_being_applied_to_id: this.attr(null).nullable(),
            provider_being_applied_to: this.belongsTo(
                DBProviderGroup,
                'provider_being_applied_to_id'
            ),
            customer_id: this.attr(null),
            customer: this.belongsTo(DBCustomerGroup, 'customer_id'),
            created_at: this.attr('').nullable(),
            person_that_created_this_id: this.attr(null),
            person_that_created_this: this.belongsTo(
                DBPerson,
                'person_that_created_this_id'
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
            memberships: [],
        }
    ) {
        return this.customSupabaseApiFetchAll(
            `${this.baseUrl}/rest/v1/memberships`,
            ['approved_by:approved_by_id', 'customer:customer_id'],
            this.mergedOptionsFetchAll(options)
        )
    }

    static FetchById(id, memberships = []) {
        memberships
        return this.customSupabaseApiFetchById(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/memberships?id=eq.${id}&select=*`,
            id,
            memberships
        )
    }

    static Store(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiStore(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/memberships?select=*`,
            entity
        )
    }

    static Update(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiUpdate(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/memberships?id=eq.${entity.id}&select=*`,
            entity
        )
    }
    static Delete(entityId, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiDelete(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/memberships?id=eq.${entityId}`,
            entityId
        )
    }
}
