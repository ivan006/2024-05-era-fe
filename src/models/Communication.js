import MyBaseModel from '@/models/MyBaseModel';
import Systemuser from './Systemuser';

export default class Communication extends MyBaseModel {
    static entity = 'communication';
    static entityUrl = '/api/communications';
    static primaryKey = 'Id';

    static parentWithables = [
        'sentByRel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'Type': {},
            'Status': {},
            'SentBy': { relationRules: { linkables: (user) => { return {} } } },
            'SentTo': {},
            'SentOn': {},
            'Content': {},
            'RelativeName': {},
            'RelativeID': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'Type': this.attr(''),
            'Status': this.attr(''),
            'SentBy': this.attr(''),
            'SentTo': this.attr(''),
            'SentOn': this.attr(''),
            'Content': this.attr(''),
            'RelativeName': this.attr(''),
            'RelativeID': this.attr(''),
            'sentByRel': this.belongsTo(Systemuser, 'SentBy')
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
