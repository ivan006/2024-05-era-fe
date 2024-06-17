import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import ServiceRequestReport from 'src/models/ServiceRequestReport';

export default class ExternalProducer extends MyBaseModel {
    static entity = 'externalproducer';
    static entityUrl = '/api/external-producers';
    static primaryKey = 'Id';
    static titleKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/external-producers/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'service_request_report_rel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
        creatable: (user) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'Name': {},
            'ServiceRequestReport': { relationRules: { linkables: (user) => { return {} } } }
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'Name': this.attr(''),
            'ServiceRequestReport': this.attr(''),
            'service_request_report_rel': this.belongsTo(ServiceRequestReport, 'ServiceRequestReport')
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