import { Model,  } from '@vuex-orm/core';

export default class Requirement extends Model {
    static entity = 'requirement';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Service': this.attr(''),
            'Category': this.attr(''),
            'Code': this.attr(''),
            'Name': this.attr(''),
            'Required': this.attr(''),
            'Path': this.attr(''),
            'Display': this.attr(''),
            'SystemCodeContext': this.attr(''),
            'SystemCodeField': this.attr(''),
            'ValueType': this.attr(''),
            
        };
    }
}