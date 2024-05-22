import { Model } from '@vuex-orm/core';
import Systemuser from './Systemuser';

export default class Userdevice extends Model {
    static entity = 'userdevice';

    static fields() {
        return {
            id: this.attr(null),
            'SystemUser': this.attr(''),
            'DeviceKey': this.attr(''),
            'Name': this.attr(''),
            'LastUsed': this.attr(''),
            'FbId': this.attr(''),
            'systemUser': this.belongsTo(Systemuser, 'SystemUser')
        };
    }
}