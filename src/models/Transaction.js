import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import SystemCode from 'src/models/SystemCode';

export default class Transaction extends MyBaseModel {
    static entity = 'transaction';
    static entityUrl = '/api/transactions';
    static primaryKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/transactions/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'typeRel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'TransNo': {},
            'Description': {},
            'TransactionDate': {},
            'CaptureDate': {},
            'AccountCode': {},
            'Entity': {},
            'EntityProduct': {},
            'Debit': {},
            'Credit': {},
            'Source': {},
            'Period': {},
            'Reference': {},
            'Type': { relationRules: { linkables: (user) => { return {} } } }
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'TransNo': this.attr(''),
            'Description': this.attr(''),
            'TransactionDate': this.attr(''),
            'CaptureDate': this.attr(''),
            'AccountCode': this.attr(''),
            'Entity': this.attr(''),
            'EntityProduct': this.attr(''),
            'Debit': this.attr(''),
            'Credit': this.attr(''),
            'Source': this.attr(''),
            'Period': this.attr(''),
            'Reference': this.attr(''),
            'Type': this.attr(''),
            'typeRel': this.belongsTo(SystemCode, 'Type')
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
            this
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
