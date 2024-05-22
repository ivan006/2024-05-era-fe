import { Model } from '@vuex-orm/core';
import Systemcode from './Systemcode';
import Systemuser from './Systemuser';

export default class Userconfiguration extends Model {
    static entity = 'userconfiguration';

    static fields() {
        return {
            id: this.attr(null),
            'SystemUser': this.attr(''),
            'Language': this.attr(''),
            'FbId': this.attr(''),
            'language': this.belongsTo(Systemcode, 'Language'),
            'systemUser': this.belongsTo(Systemuser, 'SystemUser')
        };
    }
}