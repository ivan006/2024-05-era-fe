import { Model,  } from '@vuex-orm/core';

export default class Objecttrait extends Model {
    static entity = 'objecttrait';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Name': this.attr(''),
            'Description': this.attr(''),
            'Object': this.attr(''),
            'Type': this.attr(''),
            'Level': this.attr(''),
            'IsRule': this.attr(''),
            'SpecialType': this.attr(''),
            'IsDisabled': this.attr(''),
            'IsHidden': this.attr(''),
            'SystemCodeContext': this.attr(''),
            'SystemCodeField': this.attr(''),
            
        };
    }
}