import MyBaseModel from '@/models/MyBaseModel';
import router from '@/router';
import Entity from '@/models/Entity';
import Address from '@/models/Address';
import ContactNumber from '@/models/ContactNumber';
import Email from '@/models/Email';
import ServiceRequestFrequency from '@/models/ServiceRequestFrequency';
import Transaction from '@/models/Transaction';
import UserConfiguration from '@/models/UserConfiguration';

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
            this.adapator
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
            entityId,
            this.adapator
        );
    }
}