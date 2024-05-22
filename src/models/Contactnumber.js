import { Model, belongsTo } from '@vuex-orm/core';
import Systemcode from './Systemcode';

export default class Contactnumber extends Model {
    static entity = 'contactnumber';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Number': this.attr(''),
            'Type': this.attr(''),
            'Person': this.attr(''),
            'Preferred': this.attr(''),
            'systemcode': this.belongsTo(Systemcode)
        };
    }
}