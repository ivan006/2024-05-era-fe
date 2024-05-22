import { Model } from '@vuex-orm/core';

export default class Systemuser extends Model {
    static entity = 'systemuser';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Entity': this.attr(''),
            'Username': this.attr(''),
            'Active': this.attr(''),
            'LastSeen': this.attr(''),
            'LoginCount': this.attr(''),
            'FailedLoginAttempts': this.attr(''),
            'LockedSince': this.attr(''),
            'Secret': this.attr(''),
            'Email': this.attr(''),
            'Phone': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            'ChangedBy': this.attr(''),
            'FbId': this.attr(''),
            
        };
    }
}