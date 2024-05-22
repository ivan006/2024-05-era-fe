import { Model } from '@vuex-orm/core';

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
            
        };
    }
}