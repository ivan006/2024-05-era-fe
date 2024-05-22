import { Model, hasMany } from '@vuex-orm/core';
import Documentdetail from './Documentdetail';

export default class Document extends Model {
    static entity = 'document';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'RelativeName': this.attr(''),
            'RelativeID': this.attr(''),
            'Comment': this.attr(''),
            'Title': this.attr(''),
            'CreatedBy': this.attr(''),
            'CreatedOn': this.attr(''),
            'Access': this.attr(''),
            'documentdetails': this.hasMany(Documentdetail)
        };
    }
}