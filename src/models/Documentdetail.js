import { Model, belongsTo } from '@vuex-orm/core';
import Document from './Document';

export default class Documentdetail extends Model {
    static entity = 'documentdetail';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Document': this.attr(''),
            'Section': this.attr(''),
            'Position': this.attr(''),
            'Title': this.attr(''),
            'Description': this.attr(''),
            'Comments': this.attr(''),
            'Style': this.attr(''),
            'CreatedBy': this.attr(''),
            'CreatedOn': this.attr(''),
            'document': this.belongsTo(Document)
        };
    }
}