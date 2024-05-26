import MyBaseModel from '@/models/MyBaseModel';
import Systemuser from './Systemuser';

export default class Domainuser extends MyBaseModel {
    static entity = 'domainuser';
    static entityUrl = '/rest/v1/domainusers';

    static parentWithables = [
        'systemUser'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'SystemUser': { },
            'DomainName': { },
            'DomainAccount': { },
            'CreatedOn': { },
            'CreatedBy': { },
            'ChangedOn': { },
            'ChangedBy': { }
    };

    static fields() {
        return {
            id: this.attr(null),
            'SystemUser': this.attr('', { relationRules: { linkables: (user) => { return {} } } }),
            'DomainName': this.attr('', {}),
            'DomainAccount': this.attr('', {}),
            'CreatedOn': this.attr('', {}),
            'CreatedBy': this.attr('', {}),
            'ChangedOn': this.attr('', {}),
            'ChangedBy': this.attr('', {}),
            'systemUser': this.belongsTo(Systemuser, 'SystemUser')
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