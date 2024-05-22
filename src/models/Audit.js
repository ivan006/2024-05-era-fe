import { Model } from '@vuex-orm/core';

export default class Audit extends Model {
    static entity = 'audit';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'TableName': this.attr(''),
            'CRUD': this.attr(''),
            'Data': this.attr(''),
            'ChangeDate': this.attr(''),
            'Entity': this.attr(''),
            'PageNo': this.attr(''),
            'NoOfLines': this.attr(''),
            'CrudMessage': this.attr(''),
            
        };
    }
}