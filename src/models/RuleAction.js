import MyBaseModel from '@/models/MyBaseModel';
import router from '@/router';

export default class RuleAction extends MyBaseModel {
    static entity = 'ruleaction';
    static entityUrl = '/api/rule-actions';
    static primaryKey = 'Id';
    static openRecord(id){
      router.push({
        name: '/lists/rule-actions/:rId',
        params: {
          rId: Id,
        },
      })
    }

    static parentWithables = [
        
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'Rule': {},
            'Process': {},
            'Result': {},
            'ResultNegative': {},
            'ResultType': {},
            'Description': {},
            'ResultSystemCode': {},
            'NegativeSystemCode': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'Rule': this.attr(''),
            'Process': this.attr(''),
            'Result': this.attr(''),
            'ResultNegative': this.attr(''),
            'ResultType': this.attr(''),
            'Description': this.attr(''),
            'ResultSystemCode': this.attr(''),
            'NegativeSystemCode': this.attr(''),
            
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