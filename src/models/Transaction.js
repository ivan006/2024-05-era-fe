import { Model } from '@vuex-orm/core';
import Systemcode from './Systemcode';

export default class Transaction extends Model {
    static entity = 'transaction';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'TransNo': this.attr(''),
            'Description': this.attr(''),
            'TransactionDate': this.attr(''),
            'CaptureDate': this.attr(''),
            'AccountCode': this.attr(''),
            'Entity': this.attr(''),
            'EntityProduct': this.attr(''),
            'Debit': this.attr(''),
            'Credit': this.attr(''),
            'Source': this.attr(''),
            'Period': this.attr(''),
            'Reference': this.attr(''),
            'Type': this.attr(''),
            'systemcode': this.belongsTo(Systemcode)
        };
    }
}