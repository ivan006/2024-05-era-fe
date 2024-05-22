import { Model } from '@vuex-orm/core';

export default class Crm extends Model {
    static entity = 'crm';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Entity': this.attr(''),
            'EntityProduct': this.attr(''),
            'Contact': this.attr(''),
            'Description': this.attr(''),
            'Status': this.attr(''),
            
        };
    }
}