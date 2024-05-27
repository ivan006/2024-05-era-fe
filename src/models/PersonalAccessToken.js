import MyBaseModel from '@/models/MyBaseModel';

export default class PersonalAccessToken extends MyBaseModel {
    static entity = 'personalAccessToken';
    static entityUrl = '/api/personal_access_tokens';
    static primaryKey = 'id';

    static parentWithables = [

    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'id': {},
            'tokenable_type': {},
            'tokenable_id': {},
            'name': {},
            'token': {},
            'abilities': {},
            'last_used_at': {},
            'expires_at': {},
            'created_at': {},
            'updated_at': {}
    };

    static fields() {
        return {
            'id': this.attr(''),
            'tokenable_type': this.attr(''),
            'tokenable_id': this.attr(''),
            'name': this.attr(''),
            'token': this.attr(''),
            'abilities': this.attr(''),
            'last_used_at': this.attr(''),
            'expires_at': this.attr(''),
            'created_at': this.attr(''),
            'updated_at': this.attr(''),

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
