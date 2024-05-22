import { Model } from '@vuex-orm/core';

export default class Relative extends Model {
    static entity = 'relative';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Entity': this.attr(''),
            'Relative': this.attr(''),
            'Relationship': this.attr(''),
            'Adopted': this.attr(''),
            'Student': this.attr(''),
            'Disabled': this.attr(''),
            'TraditionalMarriage': this.attr(''),
            
        };
    }
}