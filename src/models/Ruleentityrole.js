import MyBaseModel from '@/models/MyBaseModel';

export default class Ruleentityrole extends MyBaseModel {
    static entity = 'ruleentityrole';
    static entityUrl = '/rest/v1/ruleentityrole';

    static parentWithables = [
        
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        Id: { },
            EntityRole: { },
            Entity: { },
            UserRole: { },
            Rule: { },
            Priority: { },
            CRUD_Create: { },
            CRUD_Read: { },
            CRUD_Update: { },
            CRUD_Delete: { }
    };

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr('', {}),
            'EntityRole': this.attr('', {}),
            'Entity': this.attr('', {}),
            'UserRole': this.attr('', {}),
            'Rule': this.attr('', {}),
            'Priority': this.attr('', {}),
            'CRUD_Create': this.attr('', {}),
            'CRUD_Read': this.attr('', {}),
            'CRUD_Update': this.attr('', {}),
            'CRUD_Delete': this.attr('', {}),
            
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