import MyBaseModel from '@/models/non-quicklist/MyBaseModel';
import router from '@/router';
import Entity from '@/models/Entity';
import QueryHeader from '@/models/QueryHeader';
import EntityGood from '@/models/EntityGood';

export default class EntityGoodApproval extends MyBaseModel {
    static entity = 'entitygoodapproval';
    static entityUrl = '/api/entity-good-approvals';
    static primaryKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/entity-good-approvals/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'approvedByRel',
        'invoiceApprovedByRel',
        'entityRel',
        'queryRel'
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
            'queryRel': this.belongsTo(QueryHeader, 'Query'),
            'entityRel': this.belongsTo(Entity, 'Entity'),
            'entitygoods': this.hasMany(EntityGood, 'Invoice')
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
