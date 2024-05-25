import MyBaseModel from '@/models/MyBaseModel';
import Systemcode from './Systemcode';

export default class Address extends MyBaseModel {
    static entity = 'address';
    static entityUrl = '/rest/v1/address';

    static parentWithables = [
        'country': 'Country',
        'type': 'Type'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        Id: { },
            StreetNo: { },
            StreetName: { },
            Building: { },
            Postal: { },
            Suburb: { },
            City: { },
            Province: { },
            Country: { },
            PostCode: { },
            Type: { },
            Person: { },
            MoveDate: { },
            Preferred: { },
            Dispatch: { },
            Latitude: { },
            Longitude: { }
    };

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr('', {}),
            'StreetNo': this.attr('', {}),
            'StreetName': this.attr('', {}),
            'Building': this.attr('', {}),
            'Postal': this.attr('', {}),
            'Suburb': this.attr('', {}),
            'City': this.attr('', {}),
            'Province': this.attr('', {}),
            'Country': this.attr('', { relationRules: { linkables: (user) => { return {} } } }),
            'PostCode': this.attr('', {}),
            'Type': this.attr('', { relationRules: { linkables: (user) => { return {} } } }),
            'Person': this.attr('', {}),
            'MoveDate': this.attr('', {}),
            'Preferred': this.attr('', {}),
            'Dispatch': this.attr('', {}),
            'Latitude': this.attr('', {}),
            'Longitude': this.attr('', {}),
            'country': this.belongsTo(Systemcode, 'Country'),
            'type': this.belongsTo(Systemcode, 'Type')
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
            options
        );
    }

    static FetchById(id, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiFetchById(
            `${this.baseUrl}${this.entityUrl}?id=eq.${id}`,
            id,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders)
        );
    }

    static Store(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiStore(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders)
        );
    }

    static Update(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiUpdate(
            `${this.baseUrl}${this.entityUrl}?id=eq.${entity.id}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders)
        );
    }

    static Delete(entityId, options = { flags: {}, moreHeaders: {} }) {
        return this.customSupabaseApiDelete(
            `${this.baseUrl}${this.entityUrl}?id=eq.${entityId}`,
            entityId
        );
    }
}