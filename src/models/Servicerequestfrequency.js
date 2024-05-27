import MyBaseModel from '@/models/MyBaseModel';
import Servicerequest from './Servicerequest';
import Systemcode from './Systemcode';

export default class Servicerequestfrequency extends MyBaseModel {
    static entity = 'servicerequestfrequency';
    static entityUrl = '/api/servicerequestfrequencies';
    static primaryKey = 'Id';

    static parentWithables = [
        'serviceRequestRel',
        'reportFrequencyRel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'ServiceRequest': { relationRules: { linkables: (user) => { return {} } } },
            'ReportFrequency': { relationRules: { linkables: (user) => { return {} } } },
            'Active': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'ServiceRequest': this.attr(''),
            'ReportFrequency': this.attr(''),
            'Active': this.attr(''),
            'serviceRequestRel': this.belongsTo(Servicerequest, 'ServiceRequest'),
            'reportFrequencyRel': this.belongsTo(Systemcode, 'ReportFrequency')
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
            `${this.baseUrl}${this.entityUrl}`,
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
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders)
        );
    }

    static Delete(entityId, options = { flags: {}, moreHeaders: {} }) {
        return this.customSupabaseApiDelete(
            `${this.baseUrl}${this.entityUrl}`,
            entityId
        );
    }
}
