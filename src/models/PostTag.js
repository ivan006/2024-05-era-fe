import { Model } from '@vuex-orm/core';

export default class PostTag extends Model {
    static entity = 'postTag';

    static fields() {
        return {
            id: this.attr(null),
            'id': this.attr(''),
            'created_at': this.attr(''),
            'updated_at': this.attr(''),
            'post_id': this.attr(''),
            'tag_id': this.attr(''),
            
        };
    }
}