import { Model } from '@vuex-orm/core';

export default class Ruleactiondatum extends Model {
    static entity = 'ruleactiondatum';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Rule': this.attr(''),
            'TableName': this.attr(''),
            'ColumnName': this.attr(''),
            'ColumnType': this.attr(''),
            
        };
    }
}