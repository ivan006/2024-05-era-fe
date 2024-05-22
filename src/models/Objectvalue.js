import { Model,  } from '@vuex-orm/core';

export default class Objectvalue extends Model {
    static entity = 'objectvalue';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Trait': this.attr(''),
            'Value': this.attr(''),
            'Instance': this.attr(''),
            'ValueJson': this.attr(''),
            'Object': this.attr(''),
            'Entity': this.attr(''),
            
        };
    }
}