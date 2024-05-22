import { Model } from '@vuex-orm/core';
import Address from './Address';
import Contactnumber from './Contactnumber';
import Email from './Email';
import Servicerequestfrequency from './Servicerequestfrequency';
import Entity from './Entity';
import Transaction from './Transaction';
import Userconfiguration from './Userconfiguration';

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
            'countryAddresses': this.hasMany(Address, 'systemcode_id'),
            'typeAddresses': this.hasMany(Address, 'systemcode_id'),
            'contactnumbers': this.hasMany(Contactnumber, 'systemcode_id'),
            'emails': this.hasMany(Email, 'systemcode_id'),
            'servicerequestfrequencies': this.hasMany(Servicerequestfrequency, 'systemcode_id'),
            'entity': this.belongsTo(Entity, 'entity_id'),
            'transactions': this.hasMany(Transaction, 'systemcode_id'),
            'userconfigurations': this.hasMany(Userconfiguration, 'systemcode_id')
        };
    }
}