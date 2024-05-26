import MyBaseModel from '@/models/MyBaseModel';

export default class Entityrelationship extends MyBaseModel {
    static entity = 'entityrelationship';
    static entityUrl = '/rest/v1/entityrelationships';

    static parentWithables = [
        
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': { },
            'EntityA': { },
            'EntityB': { },
            'EntityARelationship': { },
            'EntityBRelationship': { },
            'EntityAStatus': { },
            'EntityBStatus': { },
            'EntityAQualifier': { },
            'EntityBQualifier': { },
            'EntityALevel': { },
            'EntityBLevel': { }
    };

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr('', {}),
            'EntityA': this.attr('', {}),
            'EntityB': this.attr('', {}),
            'EntityARelationship': this.attr('', {}),
            'EntityBRelationship': this.attr('', {}),
            'EntityAStatus': this.attr('', {}),
            'EntityBStatus': this.attr('', {}),
            'EntityAQualifier': this.attr('', {}),
            'EntityBQualifier': this.attr('', {}),
            'EntityALevel': this.attr('', {}),
            'EntityBLevel': this.attr('', {}),
            
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