import DBEventType from '@/models/DBEventType'
import DBProviderGroup from '@/models/DBProviderGroup'
import { DBBaseModel } from 'quicklists-vue-orm-ui'
import DBVenueCountry from '@/models/DBVenueCountry'
import DBVenueState from '@/models/DBVenueState'
import DBVenueSubstate from '@/models/DBVenueSubstate'
import DBVenueTown from '@/models/DBVenueTown'
import DBVenueSuburb from '@/models/DBVenueSuburb'
import DBPerson from '@/models/DBPerson'
import { FieldUsageTypes } from 'quicklists-vue-orm-ui'
import DBRSVP from '@/models/DBRSVP'

// import { createClient } from '@supabase/supabase-js'

export default class DBEvent extends DBBaseModel {
    static entity = 'db-events'
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

    static displayMapSummary = {
        rows: [
            {
                cols: [
                    {
                        width: 12,
                        dataPoint: {
                            data: "text",
                            tag: "h1",
                            class: "text-h6",
                            hideLabel: true,
                        },
                    },
                ],
            },
            {
                cols: [
                    {
                        width: 12,
                        dataPoint: {
                            data: "start",
                            xOrientation: true,
                        },
                    },
                    {
                        width: 12,
                        dataPoint: {
                            data: "end",
                            xOrientation: true,
                        },
                    },
                ],
            },
        ],
    }

    static displayMapFull = {
        hideViewMode: true,
        defaultViewMode: "grid",
        rows: [
            {
                cols: [
                    {
                        width: 12,
                        rows: [
                            {
                                cols: [
                                    {
                                        width: 12,
                                        dataPoint: {
                                            data: "text",
                                            tag: "h1",
                                            class: "text-h6",
                                            hideLabel: true,
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                cols: [
                    {
                        width: 4,
                        rows: [
                            {
                                cols: [
                                    {
                                        width: 12,
                                        dataPoint: {
                                            data: "start",
                                            xOrientation: true,
                                        },
                                    },
                                    {
                                        width: 12,
                                        dataPoint: {
                                            data: "end",
                                            xOrientation: true,
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        width: 8,
                        dataPoint: {
                            data: "rsvps",
                            relationViewMode: "grid",
                        },
                    },
                ],
            },
        ],
    }

    static rules = {
      readables: (user) => {
        // let providerGroupIds = []
        // if (user?.provider_groups){
        //   providerGroupIds = user.provider_groups.map(group => group.id);
        // }
        // return {
        //   provider_that_owns_this_id: `in.(${providerGroupIds})`
        // }
        return true
      },
      readable: (user, item) => {
        return true
      },
      editable: (user, item) => {
        let result = false
        if (user){
          let providerGroupIds = []
          if (user?.provider_groups){
            providerGroupIds = user.provider_groups.map(group => group.id);
          }
          const ownsDataAsProviderOwner = providerGroupIds.includes(item.provider_that_owns_this_id)
          const ownsDataAsCreator = item.person_that_created_this_id == user.id
          result = ownsDataAsProviderOwner || ownsDataAsCreator
        }
        // let customerGroupId = []
        // if (user?.provider_groups){
        //   customerGroupId = user.customer_groups.map(group => group.id);
        // }
        // const ownsDataAsCustomerOwner = item.provider_that_owns_this_id.includes(customerGroupId)
        return result;
      },
    }

  static fieldsMetadata = {
    start: { usageType: FieldUsageTypes.timeRangeStart(), important: true },
    end: { usageType: FieldUsageTypes.timeRangeEnd(), important: true },
    venue_name: {
      usageType: FieldUsageTypes.mapName(),
      important: true,
    },
    venue_address: {
      usageType: FieldUsageTypes.mapExtraFormattedAddress(),
    },
    venue_place_identifier: {
      usageType: FieldUsageTypes.mapExtraPlaceID(),
    },
    venue_longitude: {
      usageType: FieldUsageTypes.mapExtraGeoLocLong(),
      important: true,
    },
    venue_latitude: {
      usageType: FieldUsageTypes.mapExtraGeoLocLat(),
      important: true,
    },
    venue_country_id: { usageType: FieldUsageTypes.mapExtraRelCountry() },
    venue_state_id: { usageType: FieldUsageTypes.mapExtraRelAdminArea1() },
    venue_substate_id: {
      usageType: FieldUsageTypes.mapExtraRelAdminArea2(),
    },
    venue_town_id: { usageType: FieldUsageTypes.mapExtraRelLocality() },
    venue_suburb_id: {
      usageType: FieldUsageTypes.mapExtraRelSublocality(),
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
    person_that_created_this_id: {
      // usageType: FieldUsageTypes.creatorType(),
    },
    rsvps: this.hasMany(DBRSVP, 'event_id'),
  }

    static fields() {
        return {
            id: this.uid(null),
            text: this.attr(''),
            start: this.attr(''),
            end: this.attr(''),
            event_type_id: this.attr(null),
            event_type: this.belongsTo(DBEventType, 'event_type_id'),

            venue_name: this.attr(null).nullable(),
            venue_address: this.attr(null).nullable(),
            venue_place_identifier: this.attr(null).nullable(),
            venue_longitude: this.attr(null).nullable(),
            venue_latitude: this.attr(null).nullable(),

            venue_country_id: this.attr(null).nullable(),
            venue_country: this.belongsTo(DBVenueCountry, 'venue_country_id'),

            venue_state_id: this.attr(null).nullable(),
            venue_state: this.belongsTo(DBVenueState, 'venue_state_id'),

            venue_substate_id: this.attr(null).nullable(),
            venue_substate: this.belongsTo(
                DBVenueSubstate,
                'venue_substate_id'
            ),

            venue_town_id: this.attr(null).nullable(),
            venue_town: this.belongsTo(DBVenueTown, 'venue_town_id'),

            // venue_suburb_1: this.attr(
            //     null
            // ).nullable(),
            // venue_suburb_2: this.attr(
            //     null
            // ).nullable(),

            venue_suburb_id: this.attr(null).nullable(),
            venue_suburb: this.belongsTo(DBVenueSuburb, 'venue_suburb_id'),

            provider_that_owns_this_id: this.attr(null),
            provider_that_owns_this: this.belongsTo(
                DBProviderGroup,
                'provider_that_owns_this_id'
            ),
            person_that_created_this_id: this.attr(null),
            person_that_created_this: this.belongsTo(
                DBPerson,
                'person_that_created_this_id'
            ),
            rsvps: this.hasMany(DBRSVP, 'event_id'),
        }
    }

  // static getSupabaseClient() {
  //   const baseUrlAndHeaders =
  //     CustonMixins.methods.DefaultHeadersAndBaseUrl()
  //   const result = createClient(
  //     baseUrlAndHeaders.baseURL,
  //     baseUrlAndHeaders.headers.AuthToken,
  //     {
  //       headers: { ...baseUrlAndHeaders.headers },
  //     }
  //   )
  //   return result
  // }


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

    // const supabase = this.getSupabaseClient();
    // supabase
    //     .from('events')
    //     .upsert(entity)
    //     .select().then().catch()

        return this.customSupabaseApiFetchAll(
            `${this.baseUrl}/rest/v1/events`,
            [
                'event_type:event_type_id',
                'venue_country:venue_country_id',
                'venue_state:venue_state_id',
                'venue_substate:venue_substate_id',
                'venue_town:venue_town_id',
                'venue_suburb:venue_suburb_id',
                'provider_that_owns_this:provider_that_owns_this_id',
            ],
            this.mergedOptionsFetchAll(options)
        )
    }

    static FetchById( options = { flags: {}, moreHeaders: {}, rels: [] }, id, relationships = []) {
        relationships
        return this.customSupabaseApiFetchById(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/events?id=eq.${id}`,
            id,

            [
                'event_type:event_type_id',
                'venue_country:venue_country_id',
                'venue_state:venue_state_id',
                'venue_substate:venue_substate_id',
                'venue_town:venue_town_id',
                'venue_suburb:venue_suburb_id',
            ]
        )
    }

    static Store(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiStore(
            this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/events?select=*,event_type_id(*)`,
            entity
        )
    }

    static Update(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {


        return this.customSupabaseApiUpdate(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/events?id=eq.${entity.id}&select=*,event_type_id(*)`,
            entity
        )
    }
    static Delete(entityId, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.customSupabaseApiDelete(
          this.mergedOptions(options),
            `${this.baseUrl}/rest/v1/events?id=eq.${entityId}`,
            entityId
        )
    }
}
