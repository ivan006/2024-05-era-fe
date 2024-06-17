import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import Entity from 'src/models/Entity';
import SystemUser from 'src/models/SystemUser';
import ServiceRequestFrequency from 'src/models/ServiceRequestFrequency';
import ServiceRequestReport from 'src/models/ServiceRequestReport';

export default class ServiceRequest extends MyBaseModel {
    static entity = 'servicerequest';
    static entityUrl = '/api/service-requests';
    static primaryKey = 'Id';
    static titleKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/service-requests/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'service_provider_rel',
        'created_by_rel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'ServiceRequestNo': {},
            'ServiceProvider': { relationRules: { linkables: (user) => { return {} } } },
            'CreatedBy': { relationRules: { linkables: (user) => { return {} } } },
            'CreatedOn': {},
            'FromDate': {},
            'ToDate': {},
            'Services': {},
            'Locations': {},
            'Deliverables': {},
            'DeliveryDate': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'ServiceRequestNo': this.attr(''),
            'ServiceProvider': this.attr(''),
            'CreatedBy': this.attr(''),
            'CreatedOn': this.attr(''),
            'FromDate': this.attr(''),
            'ToDate': this.attr(''),
            'Services': this.attr(''),
            'Locations': this.attr(''),
            'Deliverables': this.attr(''),
            'DeliveryDate': this.attr(''),
            'service_provider_rel': this.belongsTo(Entity, 'ServiceProvider'),
            'created_by_rel': this.belongsTo(SystemUser, 'CreatedBy'),
            'servicerequestfrequencies': this.hasMany(ServiceRequestFrequency, 'ServiceRequest'),
            'servicerequestreports': this.hasMany(ServiceRequestReport, 'ServiceRequest')
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