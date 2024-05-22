import { Model,  } from '@vuex-orm/core';

export default class Systemlog extends Model {
    static entity = 'systemlog';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'LogDate': this.attr(''),
            'LogLevel': this.attr(''),
            'Logger': this.attr(''),
            'SystemUser': this.attr(''),
            'CallSite': this.attr(''),
            'Message': this.attr(''),
            'Exception': this.attr(''),
            'StackTrace': this.attr(''),
            
        };
    }
}