import { Model,  } from '@vuex-orm/core';

export default class PersonalAccessToken extends Model {
    static entity = 'personalAccessToken';

    static fields() {
        return {
            id: this.attr(null),
            'id': this.attr(''),
            'tokenable_type': this.attr(''),
            'tokenable_id': this.attr(''),
            'name': this.attr(''),
            'token': this.attr(''),
            'abilities': this.attr(''),
            'last_used_at': this.attr(''),
            'expires_at': this.attr(''),
            'created_at': this.attr(''),
            'updated_at': this.attr(''),
            
        };
    }
}