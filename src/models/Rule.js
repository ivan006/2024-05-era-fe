import { Model } from '@vuex-orm/core';

export default class Rule extends Model {
    static entity = 'rule';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Name': this.attr(''),
            'Description': this.attr(''),
            'RuleType': this.attr(''),
            'NextRule': this.attr(''),
            
        };
    }
}