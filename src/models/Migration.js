import { Model } from '@vuex-orm/core';

export default class Migration extends Model {
    static entity = 'migration';

    static fields() {
        return {
            id: this.attr(null),
            'id': this.attr(''),
            'migration': this.attr(''),
            'batch': this.attr(''),
            
        };
    }
}