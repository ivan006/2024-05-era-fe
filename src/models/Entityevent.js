import { Model } from '@vuex-orm/core';

export default class Entityevent extends Model {
    static entity = 'entityevent';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'TableID': this.attr(''),
            'TableName': this.attr(''),
            'Event': this.attr(''),
            'Date': this.attr(''),
            'Instance': this.attr(''),
            
        };
    }
}