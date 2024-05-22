import { Model } from '@vuex-orm/core';
import Entitygood from './Entitygood';
import Entitygoodapproval from './Entitygoodapproval';
import Good from './Good';
import Servicerequest from './Servicerequest';
import Servicerequestreport from './Servicerequestreport';
import Systemcode from './Systemcode';

export default class Entity extends Model {
    static entity = 'entity';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'ExternalNo': this.attr(''),
            'Level': this.attr(''),
            'Type': this.attr(''),
            'Title': this.attr(''),
            'Name': this.attr(''),
            'Surname': this.attr(''),
            'Identity': this.attr(''),
            'BirthDate': this.attr(''),
            'Gender': this.attr(''),
            'Language': this.attr(''),
            'Status': this.attr(''),
            'Note': this.attr(''),
            'Passport': this.attr(''),
            'HasPhoto': this.attr(''),
            'IsPaid': this.attr(''),
            'entitygoods': this.hasMany(Entitygood, 'entity_id'),
            'entitygoodapprovals': this.hasMany(Entitygoodapproval, 'entity_id'),
            'entitygoodapprovals': this.hasMany(Entitygoodapproval, 'entity_id'),
            'entitygoodapprovals': this.hasMany(Entitygoodapproval, 'entity_id'),
            'goods': this.hasMany(Good, 'entity_id'),
            'servicerequests': this.hasMany(Servicerequest, 'entity_id'),
            'servicerequestreports': this.hasMany(Servicerequestreport, 'entity_id'),
            'systemcodes': this.hasMany(Systemcode, 'entity_id')
        };
    }
}