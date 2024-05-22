import { Model, belongsTo } from '@vuex-orm/core';
import Systemuser from './Systemuser';

export default class Entityaudit extends Model {
    static entity = 'entityaudit';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Entity Name': this.attr(''),
            'Entity Id': this.attr(''),
            'Operation': this.attr(''),
            'SystemUser': this.attr(''),
            'Changes': this.attr(''),
            'Audit_TS': this.attr(''),
            'systemuser': this.belongsTo(Systemuser)
        };
    }
}