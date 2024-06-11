import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import SystemAction from 'src/models/SystemAction';
import SystemUser from 'src/models/SystemUser';
import UserRole from 'src/models/UserRole';

export default class UserAccess extends MyBaseModel {
    static entity = 'useraccess';
    static entityUrl = '/api/user-accesses';
    static primaryKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/user-accesses/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'systemUserRel',
        'userRoleRel',
        'systemActionRel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'SystemUser': { relationRules: { linkables: (user) => { return {} } } },
            'UserRole': { relationRules: { linkables: (user) => { return {} } } },
            'SystemAction': { relationRules: { linkables: (user) => { return {} } } },
            'Entity': {},
            'CreatedOn': {},
            'CreatedBy': {},
            'ChangedOn': {},
            'ChangedBy': {},
            'FbId': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'SystemUser': this.attr(''),
            'UserRole': this.attr(''),
            'SystemAction': this.attr(''),
            'Entity': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            'ChangedBy': this.attr(''),
            'FbId': this.attr(''),
            'systemActionRel': this.belongsTo(SystemAction, 'SystemAction'),
            'systemUserRel': this.belongsTo(SystemUser, 'SystemUser'),
            'userRoleRel': this.belongsTo(UserRole, 'UserRole')
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
            options,
            this
        );
    }

    static FetchById(id, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiFetchById(
            `${this.baseUrl}${this.entityUrl}`,
            id,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Store(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiStore(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Update(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiUpdate(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Delete(entityId, options = { flags: {}, moreHeaders: {} }) {
        return this.customSupabaseApiDelete(
            `${this.baseUrl}${this.entityUrl}`,
            entityId,
            this
        );
    }
}
