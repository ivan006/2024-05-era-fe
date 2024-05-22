import { Model } from '@vuex-orm/core';

export default class Requirementdetail extends Model {
    static entity = 'requirementdetail';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Requirement': this.attr(''),
            'RelativeID': this.attr(''),
            'Service': this.attr(''),
            'Category': this.attr(''),
            'Value': this.attr(''),
            'Comment': this.attr(''),
            'Received': this.attr(''),
            'Name': this.attr(''),
            'NameOriginal': this.attr(''),
            'ContentType': this.attr(''),
            'Path': this.attr(''),
            'ChangedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            
        };
    }
}