import MyBaseModel from '@/models/MyBaseModel';
import Entity from './Entity';
import Address from './Address';
import Contactnumber from './Contactnumber';
import Email from './Email';
import Servicerequestfrequency from './Servicerequestfrequency';
import Transaction from './Transaction';
import Userconfiguration from './Userconfiguration';

export default class Systemcode extends MyBaseModel {
    static entity = 'systemcode';
    static entityUrl = '/rest/v1/systemcode';

    static parentWithables = [
        'entity': 'Entity'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        Id: { },
            Context: { },
            Field: { },
            Description: { },
            Value: { },
            Code: { },
            Active: { },
            UserGenerated: { },
            ContextualId: { },
            CreatedOn: { },
            CreatedBy: { },
            ChangedOn: { },
            ChangedBy: { },
            Entity: { }
    };

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr('', {}),
            'Context': this.attr('', {}),
            'Field': this.attr('', {}),
            'Description': this.attr('', {}),
            'Value': this.attr('', {}),
            'Code': this.attr('', {}),
            'Active': this.attr('', {}),
            'UserGenerated': this.attr('', {}),
            'ContextualId': this.attr('', {}),
            'CreatedOn': this.attr('', {}),
            'CreatedBy': this.attr('', {}),
            'ChangedOn': this.attr('', {}),
            'ChangedBy': this.attr('', {}),
            'Entity': this.attr('', { relationRules: { linkables: (user) => { return {} } } }),
            'entity': this.belongsTo(Entity, 'Entity'),
            'addresses': this.hasMany(Address, 'Country'),
            'addresses': this.hasMany(Address, 'Type'),
            'contactnumbers': this.hasMany(Contactnumber, 'Type'),
            'emails': this.hasMany(Email, 'Type'),
            'servicerequestfrequencies': this.hasMany(Servicerequestfrequency, 'ReportFrequency'),
            'transactions': this.hasMany(Transaction, 'Type'),
            'userconfigurations': this.hasMany(Userconfiguration, 'Language')
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
            `${this.baseUrl}${this.entityUrl}?id=eq.${id}`,
            id,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders)
        );
    }

    static Store(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiStore(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders)
        );
    }

    static Update(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiUpdate(
            `${this.baseUrl}${this.entityUrl}?id=eq.${entity.id}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders)
        );
    }

    static Delete(entityId, options = { flags: {}, moreHeaders: {} }) {
        return this.customSupabaseApiDelete(
            `${this.baseUrl}${this.entityUrl}?id=eq.${entityId}`,
            entityId
        );
    }
}