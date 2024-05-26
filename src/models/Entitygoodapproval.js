import MyBaseModel from '@/models/MyBaseModel';
import Entity from './Entity';
import Queryheader from './Queryheader';
import Entitygood from './Entitygood';

export default class Entitygoodapproval extends MyBaseModel {
    static entity = 'entitygoodapproval';
    static entityUrl = '/api/entitygoodapprovals';
    static primaryKey = 'Id';

    static parentWithables = [
        'approvedBy',
        'invoiceApprovedBy',
        'entity',
        'query'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'ApprovedBy': { relationRules: { linkables: (user) => { return {} } } },
            'ApprovedOn': {},
            'InvoiceApprovedBy': { relationRules: { linkables: (user) => { return {} } } },
            'InvoiceApprovedOn': {},
            'Entity': { relationRules: { linkables: (user) => { return {} } } },
            'Period': {},
            'PurchaseOrder': {},
            'InvoiceNo': {},
            'UseAR': {},
            'UseVAT': {},
            'Query': { relationRules: { linkables: (user) => { return {} } } },
            'Status': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'ApprovedBy': this.attr(''),
            'ApprovedOn': this.attr(''),
            'InvoiceApprovedBy': this.attr(''),
            'InvoiceApprovedOn': this.attr(''),
            'Entity': this.attr(''),
            'Period': this.attr(''),
            'PurchaseOrder': this.attr(''),
            'InvoiceNo': this.attr(''),
            'UseAR': this.attr(''),
            'UseVAT': this.attr(''),
            'Query': this.attr(''),
            'Status': this.attr(''),
            'approvedByRel': this.belongsTo(Entity, 'ApprovedBy'),
            'invoiceApprovedByRel': this.belongsTo(Entity, 'InvoiceApprovedBy'),
            'queryRel': this.belongsTo(Queryheader, 'Query'),
            'entityRel': this.belongsTo(Entity, 'Entity'),
            'entitygoods': this.hasMany(Entitygood, 'Invoice')
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