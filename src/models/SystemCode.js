import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import Entity from 'src/models/Entity';
import Address from 'src/models/Address';
import ContactNumber from 'src/models/ContactNumber';
import Email from 'src/models/Email';
import ServiceRequestFrequency from 'src/models/ServiceRequestFrequency';
import Transaction from 'src/models/Transaction';
import UserConfiguration from 'src/models/UserConfiguration';

export default class SystemCode extends MyBaseModel {
    static entity = 'systemcode';
    static entityUrl = '/api/system-codes';
    static primaryKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/system-codes/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'entityRel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'Context': {},
            'Field': {},
            'Description': {},
            'Value': {},
            'Code': {},
            'Active': {},
            'UserGenerated': {},
            'ContextualId': {},
            'CreatedOn': {},
            'CreatedBy': {},
            'ChangedOn': {},
            'ChangedBy': {},
            'Entity': { relationRules: { linkables: (user) => { return {} } } }
    };

    static fields() {
        return {
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
            'entityRel': this.belongsTo(Entity, 'Entity'),
            'addresses': this.hasMany(Address, 'Country'),
            'addresses': this.hasMany(Address, 'Type'),
            'contactnumbers': this.hasMany(ContactNumber, 'Type'),
            'emails': this.hasMany(Email, 'Type'),
            'servicerequestfrequencies': this.hasMany(ServiceRequestFrequency, 'ReportFrequency'),
            'transactions': this.hasMany(Transaction, 'Type'),
            'userconfigurations': this.hasMany(UserConfiguration, 'Language')
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
