import { Model } from '@vuex-orm/core';

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
            
        };
    }
}