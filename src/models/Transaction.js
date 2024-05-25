import MyBaseModel from '@/models/MyBaseModel';
import Systemcode from './Systemcode';

export default class Transaction extends MyBaseModel {
    static entity = 'transaction';
    static entityUrl = '/rest/v1/transactions';

    static parentWithables = [
        'type': 'Type'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        Id: { },
            TransNo: { },
            Description: { },
            TransactionDate: { },
            CaptureDate: { },
            AccountCode: { },
            Entity: { },
            EntityProduct: { },
            Debit: { },
            Credit: { },
            Source: { },
            Period: { },
            Reference: { },
            Type: { }
    };

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr('', {}),
            'TransNo': this.attr('', {}),
            'Description': this.attr('', {}),
            'TransactionDate': this.attr('', {}),
            'CaptureDate': this.attr('', {}),
            'AccountCode': this.attr('', {}),
            'Entity': this.attr('', {}),
            'EntityProduct': this.attr('', {}),
            'Debit': this.attr('', {}),
            'Credit': this.attr('', {}),
            'Source': this.attr('', {}),
            'Period': this.attr('', {}),
            'Reference': this.attr('', {}),
            'Type': this.attr('', { relationRules: { linkables: (user) => { return {} } } }),
            'type': this.belongsTo(Systemcode, 'Type')
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