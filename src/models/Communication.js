import { Model } from '@vuex-orm/core';
import Systemuser from './Systemuser';

export default class Communication extends Model {
    static entity = 'communication';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Type': this.attr(''),
            'Status': this.attr(''),
            'SentBy': this.attr(''),
            'SentTo': this.attr(''),
            'SentOn': this.attr(''),
            'Content': this.attr(''),
            'RelativeName': this.attr(''),
            'RelativeID': this.attr(''),
            'systemuser': this.belongsTo(Systemuser)
        };
    }
}