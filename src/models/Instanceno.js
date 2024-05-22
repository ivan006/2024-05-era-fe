import { Model,  } from '@vuex-orm/core';

export default class Instanceno extends Model {
    static entity = 'instanceno';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'ObjectName': this.attr(''),
            
        };
    }
}