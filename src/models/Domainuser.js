import { Model } from '@vuex-orm/core';
import Systemuser from './Systemuser';

export default class Domainuser extends Model {
    static entity = 'domainuser';

    static fields() {
        return {
            id: this.attr(null),
            'SystemUser': this.attr(''),
            'DomainName': this.attr(''),
            'DomainAccount': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            'ChangedBy': this.attr(''),
            'systemuser': this.belongsTo(Systemuser)
        };
    }
}