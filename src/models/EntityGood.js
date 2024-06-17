import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import Entity from 'src/models/Entity';
import EntityGoodApproval from 'src/models/EntityGoodApproval';
import Good from 'src/models/Good';

export default class EntityGood extends MyBaseModel {
    static entity = 'entitygood';
    static entityUrl = '/api/entity-goods';
    static primaryKey = 'Id';
    static titleKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/entity-goods/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'entity_rel',
        'good_rel',
        'invoice_rel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
        creatable: (user) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'Entity': { relationRules: { linkables: (user) => { return {} } } },
            'Good': { relationRules: { linkables: (user) => { return {} } } },
            'Units': {},
            'AvgKg': {},
            'AvgKgOld': {},
            'AvgLifeSpan': {},
            'TotalKg': {},
            'Tariff': {},
            'Selected': {},
            'Dimension': {},
            'WasteClass': {},
            'Period': {},
            'Invoice': { relationRules: { linkables: (user) => { return {} } } }
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'Entity': this.attr(''),
            'Good': this.attr(''),
            'Units': this.attr(''),
            'AvgKg': this.attr(''),
            'AvgKgOld': this.attr(''),
            'AvgLifeSpan': this.attr(''),
            'TotalKg': this.attr(''),
            'Tariff': this.attr(''),
            'Selected': this.attr(''),
            'Dimension': this.attr(''),
            'WasteClass': this.attr(''),
            'Period': this.attr(''),
            'Invoice': this.attr(''),
            'entity_rel': this.belongsTo(Entity, 'Entity'),
            'invoice_rel': this.belongsTo(EntityGoodApproval, 'Invoice'),
            'good_rel': this.belongsTo(Good, 'Good')
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