import MyBaseModel from '@/models/MyBaseModel';
import Communication from './Communication';
import Domainuser from './Domainuser';
import Entityaudit from './Entityaudit';
import Servicerequest from './Servicerequest';
import Servicerequestreport from './Servicerequestreport';
import Useraccess from './Useraccess';
import Userconfiguration from './Userconfiguration';
import Userdevice from './Userdevice';

export default class Systemuser extends MyBaseModel {
    static entity = 'systemuser';
    static entityUrl = '/api/systemusers';
    static primaryKey = 'Id';

    static parentWithables = [

    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'Entity': {},
            'Username': {},
            'Active': {},
            'LastSeen': {},
            'LoginCount': {},
            'FailedLoginAttempts': {},
            'LockedSince': {},
            'Secret': {},
            'Email': {},
            'Phone': {},
            'CreatedOn': {},
            'CreatedBy': {},
            'ChangedOn': {},
            'ChangedBy': {},
            'FbId': {}
    };

    static fields() {
        return {
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
            'communications': this.hasMany(Communication, 'SentBy'),
            'domainusers': this.hasMany(Domainuser, 'SystemUser'),
            'entityaudits': this.hasMany(Entityaudit, 'SystemUser'),
            'servicerequests': this.hasMany(Servicerequest, 'CreatedBy'),
            'servicerequestreports': this.hasMany(Servicerequestreport, 'CreatedBy'),
            'useraccesses': this.hasMany(Useraccess, 'SystemUser'),
            'userconfigurations': this.hasMany(Userconfiguration, 'SystemUser'),
            'userdevices': this.hasMany(Userdevice, 'SystemUser')
        };
    }

    static displayMapSummary = {
        // Define displayMapSummary
    };

    static displayMapFull = {
        // Define displayMapFull
    };

    static FetchAll(relationships = [], flags = {}, moreHeaders = {}, options = { page: 1, limit: 15, filters: {}, clearPrimaryModelOnly: false }) {
        return this.customSupabaseApiFetchAll(
            `${this.baseUrl}${this.entityUrl}`,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            options
        );
    }

    static FetchById(id, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiFetchById(
            `${this.baseUrl}${this.entityUrl}`,
            id,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this.adapator
        );
    }

    static Store(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiStore(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this.adapator
        );
    }

    static Update(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiUpdate(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this.adapator
        );
    }

    static Delete(entityId, options = { flags: {}, moreHeaders: {} }) {
        return this.customSupabaseApiDelete(
            `${this.baseUrl}${this.entityUrl}`,
            entityId
        );
    }
}
