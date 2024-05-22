import { Model, belongsTo } from '@vuex-orm/core';
import Systemcode from './Systemcode';

export default class Email extends Model {
    static entity = 'email';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Address': this.attr(''),
            'Type': this.attr(''),
            'Person': this.attr(''),
            'Preferred': this.attr(''),
            'systemcode': this.belongsTo(Systemcode)
        };
    }
}