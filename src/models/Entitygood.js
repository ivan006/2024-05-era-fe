import MyBaseModel from '@/models/MyBaseModel';

export default class Entitygood extends MyBaseModel {
    static entity = 'entitygood';
    static entityUrl = '/api/entitygoods';

    static parentWithables = [

    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': { },
            'Entity': { },
            'Good': { },
            'Units': { },
            'AvgKg': { },
            'AvgKgOld': { },
            'AvgLifeSpan': { },
            'TotalKg': { },
            'Tariff': { },
            'Selected': { },
            'Dimension': { },
            'WasteClass': { },
            'Period': { },
            'Invoice': { }
    };

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr('', {}),
            'Entity': this.attr('', {}),
            'Good': this.attr('', {}),
            'Units': this.attr('', {}),
            'AvgKg': this.attr('', {}),
            'AvgKgOld': this.attr('', {}),
            'AvgLifeSpan': this.attr('', {}),
            'TotalKg': this.attr('', {}),
            'Tariff': this.attr('', {}),
            'Selected': this.attr('', {}),
            'Dimension': this.attr('', {}),
            'WasteClass': this.attr('', {}),
            'Period': this.attr('', {}),
            'Invoice': this.attr('', {}),

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
