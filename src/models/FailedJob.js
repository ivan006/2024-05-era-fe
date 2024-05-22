import { Model } from '@vuex-orm/core';

export default class FailedJob extends Model {
    static entity = 'failedJob';

    static fields() {
        return {
            id: this.attr(null),
            'id': this.attr(''),
            'uuid': this.attr(''),
            'connection': this.attr(''),
            'queue': this.attr(''),
            'payload': this.attr(''),
            'exception': this.attr(''),
            'failed_at': this.attr(''),
            
        };
    }
}