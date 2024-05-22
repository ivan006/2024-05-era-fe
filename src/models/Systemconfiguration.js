import { Model } from '@vuex-orm/core';

export default class Systemconfiguration extends Model {
    static entity = 'systemconfiguration';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Name': this.attr(''),
            'Value': this.attr(''),
            
        };
    }
}