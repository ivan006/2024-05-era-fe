import { Model,  } from '@vuex-orm/core';

export default class Object extends Model {
    static entity = 'object';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Name': this.attr(''),
            'Description': this.attr(''),
            'Parent': this.attr(''),
            'ChildType': this.attr(''),
            
        };
    }
}