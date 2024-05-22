import { Model,  } from '@vuex-orm/core';

export default class Ruleentityrole extends Model {
    static entity = 'ruleentityrole';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'EntityRole': this.attr(''),
            'Entity': this.attr(''),
            'UserRole': this.attr(''),
            'Rule': this.attr(''),
            'Priority': this.attr(''),
            'CRUD_Create': this.attr(''),
            'CRUD_Read': this.attr(''),
            'CRUD_Update': this.attr(''),
            'CRUD_Delete': this.attr(''),
            
        };
    }
}