import { Model } from '@vuex-orm/core';

export default class Userroleaccess extends Model {
    static entity = 'userroleaccess';

    static fields() {
        return {
            id: this.attr(null),
            'UserRole': this.attr(''),
            'SystemAction': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            'ChangedBy': this.attr(''),
            'FbId': this.attr(''),
            'Rule': this.attr(''),
            
        };
    }
}