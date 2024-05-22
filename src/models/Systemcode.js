import { Model } from '@vuex-orm/core';
import Entity from './Entity';

export default class Systemcode extends Model {
    static entity = 'systemcode';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Context': this.attr(''),
            'Field': this.attr(''),
            'Description': this.attr(''),
            'Value': this.attr(''),
            'Code': this.attr(''),
            'Active': this.attr(''),
            'UserGenerated': this.attr(''),
            'ContextualId': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            'ChangedBy': this.attr(''),
            'Entity': this.attr(''),
            'entity': this.belongsTo(Entity, 'Entity')
        };
    }
}