import { Model } from '@vuex-orm/core';

export default class Bank extends Model {
    static entity = 'bank';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Name': this.attr(''),
            'Branch': this.attr(''),
            'BranchName': this.attr(''),
            'Type': this.attr(''),
            'BankType': this.attr(''),
            'Account': this.attr(''),
            'Verified': this.attr(''),
            'Entity': this.attr(''),
            
        };
    }
}