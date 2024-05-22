import { Model,  } from '@vuex-orm/core';

export default class User extends Model {
    static entity = 'user';

    static fields() {
        return {
            id: this.attr(null),
            'id': this.attr(''),
            'name': this.attr(''),
            'email': this.attr(''),
            'email_verified_at': this.attr(''),
            'password': this.attr(''),
            'remember_token': this.attr(''),
            'created_at': this.attr(''),
            'updated_at': this.attr(''),
            
        };
    }
}