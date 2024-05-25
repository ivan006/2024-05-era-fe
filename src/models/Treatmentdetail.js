import MyBaseModel from '@/models/MyBaseModel';
import Servicerequestreport from './Servicerequestreport';

export default class Treatmentdetail extends MyBaseModel {
    static entity = 'treatmentdetail';
    static entityUrl = '/rest/v1/treatmentdetails';

    static parentWithables = [
        'serviceRequestReport': 'ServiceRequestReport'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        Id: { },
            ServiceRequestReport: { },
            OpeningBalance: { },
            Refurbished: { },
            Recovered: { },
            Export: { },
            Energy: { },
            Landfill: { },
            LocalSecondaryProducts: { }
    };

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr('', {}),
            'ServiceRequestReport': this.attr('', { relationRules: { linkables: (user) => { return {} } } }),
            'OpeningBalance': this.attr('', {}),
            'Refurbished': this.attr('', {}),
            'Recovered': this.attr('', {}),
            'Export': this.attr('', {}),
            'Energy': this.attr('', {}),
            'Landfill': this.attr('', {}),
            'LocalSecondaryProducts': this.attr('', {}),
            'serviceRequestReport': this.belongsTo(Servicerequestreport, 'ServiceRequestReport')
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