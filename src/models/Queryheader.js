import { Model } from '@vuex-orm/core';

export default class Queryheader extends Model {
    static entity = 'queryheader';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Subject': this.attr(''),
            'Status': this.attr(''),
            'Type': this.attr(''),
            'RelativeName': this.attr(''),
            'RelativeID': this.attr(''),
            'CreatedBy': this.attr(''),
            'CreatedOn': this.attr(''),
            'ClosedBy': this.attr(''),
            'ClosedOn': this.attr(''),
            
        };
    }
}