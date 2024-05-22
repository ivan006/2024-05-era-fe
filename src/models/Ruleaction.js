import { Model,  } from '@vuex-orm/core';

export default class Ruleaction extends Model {
    static entity = 'ruleaction';

    static fields() {
        return {
            id: this.attr(null),
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
}