import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';

export default class RuleConfig extends MyBaseModel {
    static entity = 'ruleconfig';
    static entityUrl = '/api/rule-configs';
    static primaryKey = 'Id';
    static titleKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/rule-configs/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
        creatable: (user) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'Rule': {},
            'TableName': {},
            'ColumnName': {},
            'ColumnType': {},
            'Operand': {},
            'Value': {},
            'Description': {},
            'SystemCodeValue': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'Rule': this.attr(''),
            'TableName': this.attr(''),
            'ColumnName': this.attr(''),
            'ColumnType': this.attr(''),
            'Operand': this.attr(''),
            'Value': this.attr(''),
            'Description': this.attr(''),
            'SystemCodeValue': this.attr(''),
            
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
            this
        );
    }

    static FetchById(id, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiFetchById(
            `${this.baseUrl}${this.entityUrl}`,
            id,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Store(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiStore(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
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
            this
        );
    }
}