import { Model } from '@vuex-orm/core';

export default class PasswordResetToken extends Model {
    static entity = 'passwordResetToken';

    static fields() {
        return {
            id: this.attr(null),
            'email': this.attr(''),
            'token': this.attr(''),
            'created_at': this.attr(''),
            
        };
    }
}