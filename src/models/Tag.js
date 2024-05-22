import { Model } from '@vuex-orm/core';

export default class Tag extends Model {
    static entity = 'tag';

    static fields() {
        return {
            id: this.attr(null),
            'id': this.attr(''),
            'created_at': this.attr(''),
            'updated_at': this.attr(''),
            'name': this.attr(''),
            
        };
    }
}