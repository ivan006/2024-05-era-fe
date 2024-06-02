import MyBaseModel from '@/models/MyBaseModel';
import router from '@/router';
import ServiceRequest from '@/models/ServiceRequest';
import Entity from '@/models/Entity';
import SystemUser from '@/models/SystemUser';
import TreatmentDetail from '@/models/TreatmentDetail';
import ExternalProducer from '@/models/ExternalProducer';

export default class ServiceRequestReport extends MyBaseModel {
    static entity = 'servicerequestreport';
    static entityUrl = '/api/service-request-reports';
    static primaryKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/service-request-reports/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'serviceRequestRel',
        'serviceProviderRel',
        'createdByRel',
        'treatmentDetail'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'ServiceRequest': { relationRules: { linkables: (user) => { return {} } } },
            'ServiceProvider': { relationRules: { linkables: (user) => { return {} } } },
            'CreatedBy': { relationRules: { linkables: (user) => { return {} } } },
            'TreatmentDetails': { relationRules: { linkables: (user) => { return {} } } },
            'CreatedOn': {},
            'ReportDate': {},
            'Approved': {},
            'Rejected': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'ServiceRequest': this.attr(''),
            'ServiceProvider': this.attr(''),
            'CreatedBy': this.attr(''),
            'TreatmentDetails': this.attr(''),
            'CreatedOn': this.attr(''),
            'ReportDate': this.attr(''),
            'Approved': this.attr(''),
            'Rejected': this.attr(''),
            'serviceRequestRel': this.belongsTo(ServiceRequest, 'ServiceRequest'),
            'serviceProviderRel': this.belongsTo(Entity, 'ServiceProvider'),
            'createdByRel': this.belongsTo(SystemUser, 'CreatedBy'),
            'treatmentDetail': this.belongsTo(TreatmentDetail, 'TreatmentDetails'),
            'externalproducers': this.hasMany(ExternalProducer, 'ServiceRequestReport'),
            'treatmentdetailsServiceRequestReport': this.hasMany(TreatmentDetail, 'ServiceRequestReport')
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