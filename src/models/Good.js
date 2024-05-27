import MyBaseModel from '@/models/MyBaseModel';
import Entity from './Entity';
import Entitygood from './Entitygood';

export default class Good extends MyBaseModel {
    static entity = 'good';
    static entityUrl = '/api/goods';
    static primaryKey = 'Id';

    static parentWithables = [
        'sectorRel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'HSCode': {},
            'Description': {},
            'EU6': {},
            'EU10': {},
            'UNU': {},
            'AvgKg': {},
            'Category': {},
            'HazardSubstance': {},
            'Dimension': {},
            'Sector': { relationRules: { linkables: (user) => { return {} } } }
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'HSCode': this.attr(''),
            'Description': this.attr(''),
            'EU6': this.attr(''),
            'EU10': this.attr(''),
            'UNU': this.attr(''),
            'AvgKg': this.attr(''),
            'Category': this.attr(''),
            'HazardSubstance': this.attr(''),
            'Dimension': this.attr(''),
            'Sector': this.attr(''),
            'sectorRel': this.belongsTo(Entity, 'Sector'),
            'entitygoods': this.hasMany(Entitygood, 'Good')
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
            entityId
        );
    }
}
