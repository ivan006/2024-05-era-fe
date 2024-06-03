import MyBaseModel from '@/models/non-quicklist/MyBaseModel';
import router from '@/router';
import Entity from '@/models/Entity';
import SystemUser from '@/models/SystemUser';
import ServiceRequestFrequency from '@/models/ServiceRequestFrequency';
import ServiceRequestReport from '@/models/ServiceRequestReport';

export default class ServiceRequest extends MyBaseModel {
    static entity = 'servicerequest';
    static entityUrl = '/api/service-requests';
    static primaryKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/service-requests/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'serviceProviderRel',
        'createdByRel'
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
            'serviceProviderRel': this.belongsTo(Entity, 'ServiceProvider'),
            'createdByRel': this.belongsTo(SystemUser, 'CreatedBy'),
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
            this.adapator
        );
    }

    static FetchById(id, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiFetchById(
            `${this.baseUrl}${this.entityUrl}`,
            id,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this.adapator
        );
    }

    static Store(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiStore(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this.adapator
        );
    }

    static Update(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiUpdate(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this.adapator
        );
    }

    static Delete(entityId, options = { flags: {}, moreHeaders: {} }) {
        return this.customSupabaseApiDelete(
            `${this.baseUrl}${this.entityUrl}`,
            entityId,
            this.adapator
        );
    }
}
