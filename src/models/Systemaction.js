import { Model } from '@vuex-orm/core';
import Useraccess from './Useraccess';

export default class Systemaction extends Model {
    static entity = 'systemaction';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Module': this.attr(''),
            'Context': this.attr(''),
            'Action': this.attr(''),
            'Description': this.attr(''),
            'Available': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            'ChangedBy': this.attr(''),
            'useraccesses': this.hasMany(Useraccess, 'systemaction_id')
        };
    }
}