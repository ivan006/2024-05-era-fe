import { Model, belongsTo } from '@vuex-orm/core';
import Systemaction from './Systemaction';
import Systemuser from './Systemuser';
import Userrole from './Userrole';

export default class Useraccess extends Model {
    static entity = 'useraccess';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'SystemUser': this.attr(''),
            'UserRole': this.attr(''),
            'SystemAction': this.attr(''),
            'Entity': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            'ChangedBy': this.attr(''),
            'FbId': this.attr(''),
            'systemaction': this.belongsTo(Systemaction),
            'systemuser': this.belongsTo(Systemuser),
            'userrole': this.belongsTo(Userrole)
        };
    }
}