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
            'entitygoods': this.hasMany(Entitygood),
            'entitygoodapprovals': this.hasMany(Entitygoodapproval),
            'entitygoodapprovals': this.hasMany(Entitygoodapproval),
            'entitygoodapprovals': this.hasMany(Entitygoodapproval),
            'goods': this.hasMany(Good),
            'servicerequests': this.hasMany(Servicerequest),
            'servicerequestreports': this.hasMany(Servicerequestreport),
            'systemcodes': this.hasMany(Systemcode)
        };
    }
}