import { Model, hasMany, hasOne } from '@vuex-orm/core';
import Communication from './Communication';
import Domainuser from './Domainuser';
import Entityaudit from './Entityaudit';
import Servicerequest from './Servicerequest';
import Servicerequestreport from './Servicerequestreport';
import Useraccess from './Useraccess';
import Userconfiguration from './Userconfiguration';
import Userdevice from './Userdevice';

export default class Systemuser extends Model {
    static entity = 'systemuser';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Entity': this.attr(''),
            'Username': this.attr(''),
            'Active': this.attr(''),
            'LastSeen': this.attr(''),
            'LoginCount': this.attr(''),
            'FailedLoginAttempts': this.attr(''),
            'LockedSince': this.attr(''),
            'Secret': this.attr(''),
            'Email': this.attr(''),
            'Phone': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            'ChangedBy': this.attr(''),
            'FbId': this.attr(''),
            'communications': this.hasMany(Communication),
            'domainuser': this.hasOne(Domainuser),
            'entityaudits': this.hasMany(Entityaudit),
            'servicerequests': this.hasMany(Servicerequest),
            'servicerequestreports': this.hasMany(Servicerequestreport),
            'useraccesses': this.hasMany(Useraccess),
            'userconfiguration': this.hasOne(Userconfiguration),
            'userdevices': this.hasMany(Userdevice)
        };
    }
}