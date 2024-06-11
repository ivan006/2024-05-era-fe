import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import ServiceRequest from 'src/models/ServiceRequest';
import SystemCode from 'src/models/SystemCode';

export default class ServiceRequestFrequency extends MyBaseModel {
    static entity = 'servicerequestfrequency';
    static entityUrl = '/api/service-request-frequencies';
    static primaryKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/service-request-frequencies/:rId',
        params: {
          rId: pKey,
        },
      })
    }

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
            'serviceRequestRel': this.belongsTo(ServiceRequest, 'ServiceRequest'),
            'reportFrequencyRel': this.belongsTo(SystemCode, 'ReportFrequency')
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
