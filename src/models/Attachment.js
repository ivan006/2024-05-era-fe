import { Model,  } from '@vuex-orm/core';

export default class Attachment extends Model {
    static entity = 'attachment';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Name': this.attr(''),
            'Description': this.attr(''),
            'ContentType': this.attr(''),
            'Path': this.attr(''),
            'RelativeName': this.attr(''),
            'RelativeID': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            
        };
    }
}