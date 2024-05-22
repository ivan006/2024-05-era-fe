import { Model } from '@vuex-orm/core';

export default class Post extends Model {
    static entity = 'post';

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