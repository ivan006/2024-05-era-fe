import MyBaseModel from '@/models/MyBaseModel';
import Servicerequest from './Servicerequest';
import Entity from './Entity';
import Systemuser from './Systemuser';
import Treatmentdetail from './Treatmentdetail';
import Externalproducer from './Externalproducer';

export default class Servicerequestreport extends MyBaseModel {
    static entity = 'servicerequestreport';
    static entityUrl = '/api/servicerequestreports';
    static primaryKey = 'Id';

    static parentWithables = [
        'serviceRequest',
        'serviceProvider',
        'createdBy',
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
            'servicerequest': this.belongsTo(Servicerequest, 'ServiceRequest'),
            'entity': this.belongsTo(Entity, 'ServiceProvider'),
            'systemuser': this.belongsTo(Systemuser, 'CreatedBy'),
            'treatmentdetail': this.belongsTo(Treatmentdetail, 'TreatmentDetails'),
            'externalproducer': this.hasMany(Externalproducer, 'ServiceRequestReport'),
            'treatmentdetailServiceRequestReport': this.hasMany(Treatmentdetail, 'ServiceRequestReport')
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