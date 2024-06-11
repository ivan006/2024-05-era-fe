import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import SystemCode from 'src/models/SystemCode';

export default class Address extends MyBaseModel {
    static entity = 'address';
    static entityUrl = '/api/addresses';
    static primaryKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/addresses/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'countryRel',
        'typeRel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'StreetNo': {},
            'StreetName': {},
            'Building': {},
            'Postal': {},
            'Suburb': {},
            'City': {},
            'Province': {},
            'Country': { relationRules: { linkables: (user) => { return {} } } },
            'PostCode': {},
            'Type': { relationRules: { linkables: (user) => { return {} } } },
            'Person': {},
            'MoveDate': {},
            'Preferred': {},
            'Dispatch': {},
            'Latitude': {},
            'Longitude': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'StreetNo': this.attr(''),
            'StreetName': this.attr(''),
            'Building': this.attr(''),
            'Postal': this.attr(''),
            'Suburb': this.attr(''),
            'City': this.attr(''),
            'Province': this.attr(''),
            'Country': this.attr(''),
            'PostCode': this.attr(''),
            'Type': this.attr(''),
            'Person': this.attr(''),
            'MoveDate': this.attr(''),
            'Preferred': this.attr(''),
            'Dispatch': this.attr(''),
            'Latitude': this.attr(''),
            'Longitude': this.attr(''),
            'countryRel': this.belongsTo(SystemCode, 'Country'),
            'typeRel': this.belongsTo(SystemCode, 'Type')
        };
    }

    static displayMapSummary = {
        // Define displayMapSummary
    };

    static displayMapFull = {
        // Define displayMapFull
    };

    static FetchAll(relationships = [], flags = {}, moreHeaders = {}, options = { page: 1, limit: 15, filters: {}, clearPrimaryModelOnly: false }) {
        return this.customSupabaseApiFetchAll(
            `${this.baseUrl}${this.entityUrl}`,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            options,
            this
        );
    }

    static FetchById(id, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiFetchById(
            `${this.baseUrl}${this.entityUrl}`,
            id,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Store(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiStore(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Update(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiUpdate(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Delete(entityId, options = { flags: {}, moreHeaders: {} }) {
        return this.customSupabaseApiDelete(
            `${this.baseUrl}${this.entityUrl}`,
            entityId,
            this
        );
    }
}
