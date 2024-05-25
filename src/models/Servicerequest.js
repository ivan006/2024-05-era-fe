import MyBaseModel from '@/models/MyBaseModel';
import Entity from './Entity';
import Systemuser from './Systemuser';
import Servicerequestfrequency from './Servicerequestfrequency';
import Servicerequestreport from './Servicerequestreport';

export default class Servicerequest extends MyBaseModel {
    static entity = 'servicerequest';
    static entityUrl = '/rest/v1/servicerequest';

    static parentWithables = [
        'serviceProvider',
        'createdBy'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': { },
            'ServiceRequestNo': { },
            'ServiceProvider': { },
            'CreatedBy': { },
            'CreatedOn': { },
            'FromDate': { },
            'ToDate': { },
            'Services': { },
            'Locations': { },
            'Deliverables': { },
            'DeliveryDate': { }
    };

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr('', {}),
            'ServiceRequestNo': this.attr('', {}),
            'ServiceProvider': this.attr('', { relationRules: { linkables: (user) => { return {} } } }),
            'CreatedBy': this.attr('', { relationRules: { linkables: (user) => { return {} } } }),
            'CreatedOn': this.attr('', {}),
            'FromDate': this.attr('', {}),
            'ToDate': this.attr('', {}),
            'Services': this.attr('', {}),
            'Locations': this.attr('', {}),
            'Deliverables': this.attr('', {}),
            'DeliveryDate': this.attr('', {}),
            'serviceProvider': this.belongsTo(Entity, 'ServiceProvider'),
            'createdBy': this.belongsTo(Systemuser, 'CreatedBy'),
            'servicerequestfrequencies': this.hasMany(Servicerequestfrequency, 'ServiceRequest'),
            'servicerequestreports': this.hasMany(Servicerequestreport, 'ServiceRequest')
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