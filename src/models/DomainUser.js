import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import SystemUser from 'src/models/SystemUser';

export default class DomainUser extends MyBaseModel {
    static entity = 'domainuser';
    static entityUrl = '/api/domain-users';
    static primaryKey = 'SystemUser';
    static titleKey = 'SystemUser';
    static openRecord(pKey){
      router.push({
        name: '/lists/domain-users/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'system_user_rel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
        creatable: (user) => true,
    };

    static fieldsMetadata = {
        'SystemUser': { relationRules: { linkables: (user) => { return {} } } },
            'DomainName': {},
            'DomainAccount': {},
            'CreatedOn': {},
            'CreatedBy': {},
            'ChangedOn': {},
            'ChangedBy': {}
    };

    static fields() {
        return {
            'SystemUser': this.attr(''),
            'DomainName': this.attr(''),
            'DomainAccount': this.attr(''),
            'CreatedOn': this.attr(''),
            'CreatedBy': this.attr(''),
            'ChangedOn': this.attr(''),
            'ChangedBy': this.attr(''),
            'system_user_rel': this.belongsTo(SystemUser, 'SystemUser')
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