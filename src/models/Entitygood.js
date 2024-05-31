import MyBaseModel from '@/models/MyBaseModel';
import Entity from './Entity';
import Entitygoodapproval from './Entitygoodapproval';
import Good from './Good';
import router from "@/router";

export default class Entitygood extends MyBaseModel {
    static entity = 'entitygood';
    static entityUrl = '/api/entitygoods';
    static primaryKey = 'Id';
    static openRecord(id){
      router.push({
        name: '/lists/entity-good/:rId',
        params: {
          rId: id,
        },
      })
    }

    static parentWithables = [
        'entityRel',
        'goodRel',
        'invoiceRel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
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
            'entityRel': this.belongsTo(Entity, 'Entity'),
            'invoiceRel': this.belongsTo(Entitygoodapproval, 'Invoice'),
            'goodRel': this.belongsTo(Good, 'Good')
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
