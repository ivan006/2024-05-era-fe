import { Model } from '@vuex-orm/core';

export default class Ruleconfig extends Model {
    static entity = 'ruleconfig';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Rule': this.attr(''),
            'TableName': this.attr(''),
            'ColumnName': this.attr(''),
            'ColumnType': this.attr(''),
            'Operand': this.attr(''),
            'Value': this.attr(''),
            'Description': this.attr(''),
            'SystemCodeValue': this.attr(''),
            
        };
    }
}