import MyBaseModel from '@/models/MyBaseModel';
import Document from './Document';

export default class Documentdetail extends MyBaseModel {
    static entity = 'documentdetail';
    static entityUrl = '/rest/v1/documentdetails';

    static parentWithables = [
        'document'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': { },
            'Document': { },
            'Section': { },
            'Position': { },
            'Title': { },
            'Description': { },
            'Comments': { },
            'Style': { },
            'CreatedBy': { },
            'CreatedOn': { }
    };

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr('', {}),
            'Document': this.attr('', { relationRules: { linkables: (user) => { return {} } } }),
            'Section': this.attr('', {}),
            'Position': this.attr('', {}),
            'Title': this.attr('', {}),
            'Description': this.attr('', {}),
            'Comments': this.attr('', {}),
            'Style': this.attr('', {}),
            'CreatedBy': this.attr('', {}),
            'CreatedOn': this.attr('', {}),
            'document': this.belongsTo(Document, 'Document')
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