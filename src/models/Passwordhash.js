import { Model,  } from '@vuex-orm/core';

export default class Passwordhash extends Model {
    static entity = 'passwordhash';

    static fields() {
        return {
            id: this.attr(null),
            'SystemUser': this.attr(''),
            'Hash': this.attr(''),
            'Salt': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            'ChangedBy': this.attr(''),
            'FbId': this.attr(''),
            
        };
    }
}