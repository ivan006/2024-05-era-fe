import { Model } from '@vuex-orm/core';

export default class Dummy extends Model {
    static entity = 'dummy';

    static fields() {
        return {
            id: this.attr(null),
            'textData': this.attr(''),
            
        };
    }
}