import { Model,  } from '@vuex-orm/core';

export default class Query extends Model {
    static entity = 'query';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'ParentQuery': this.attr(''),
            'AssignedTo': this.attr(''),
            'Description': this.attr(''),
            'CreatedBy': this.attr(''),
            'CreatedOn': this.attr(''),
            'ClosedOn': this.attr(''),
            'ClosedBy': this.attr(''),
            
        };
    }
}