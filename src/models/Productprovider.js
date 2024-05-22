import { Model } from '@vuex-orm/core';

export default class Productprovider extends Model {
    static entity = 'productprovider';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Name': this.attr(''),
            'Entity': this.attr(''),
            
        };
    }
}