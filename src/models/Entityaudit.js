import MyBaseModel from '@/models/MyBaseModel';
import Systemuser from './Systemuser';

export default class Entityaudit extends MyBaseModel {
    static entity = 'entityaudit';
    static entityUrl = '/api/entityaudits';
    static primaryKey = 'Id';

    static parentWithables = [
        'systemUserRel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'Entity Name': {},
            'Entity Id': {},
            'Operation': {},
            'SystemUser': { relationRules: { linkables: (user) => { return {} } } },
            'Changes': {},
            'Audit_TS': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'Entity Name': this.attr(''),
            'Entity Id': this.attr(''),
            'Operation': this.attr(''),
            'SystemUser': this.attr(''),
            'Changes': this.attr(''),
            'Audit_TS': this.attr(''),
            'systemUserRel': this.belongsTo(Systemuser, 'SystemUser')
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
            `${this.baseUrl}${this.entityUrl}`,
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
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders)
        );
    }

    static Delete(entityId, options = { flags: {}, moreHeaders: {} }) {
        return this.customSupabaseApiDelete(
            `${this.baseUrl}${this.entityUrl}`,
            entityId
        );
    }
}
