import { Model, hasMany } from '@vuex-orm/core';
import Useraccess from './Useraccess';

export default class Userrole extends Model {
    static entity = 'userrole';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Name': this.attr(''),
            'Active': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            'ChangedBy': this.attr(''),
            'FbId': this.attr(''),
            'useraccesses': this.hasMany(Useraccess)
        };
    }
}