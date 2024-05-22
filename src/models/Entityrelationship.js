import { Model } from '@vuex-orm/core';

export default class Entityrelationship extends Model {
    static entity = 'entityrelationship';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'EntityA': this.attr(''),
            'EntityB': this.attr(''),
            'EntityARelationship': this.attr(''),
            'EntityBRelationship': this.attr(''),
            'EntityAStatus': this.attr(''),
            'EntityBStatus': this.attr(''),
            'EntityAQualifier': this.attr(''),
            'EntityBQualifier': this.attr(''),
            'EntityALevel': this.attr(''),
            'EntityBLevel': this.attr(''),
            
        };
    }
}