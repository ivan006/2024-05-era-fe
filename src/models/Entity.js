import MyBaseModel from '@/models/MyBaseModel';
import Entitygood from './Entitygood';
import Entitygoodapproval from './Entitygoodapproval';
import Good from './Good';
import Servicerequest from './Servicerequest';
import Servicerequestreport from './Servicerequestreport';
import Systemcode from './Systemcode';

export default class Entity extends MyBaseModel {
    static entity = 'entity';
    static entityUrl = '/rest/v1/entities';

    static parentWithables = [
        
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': { },
            'ExternalNo': { },
            'Level': { },
            'Type': { },
            'Title': { },
            'Name': { },
            'Surname': { },
            'Identity': { },
            'BirthDate': { },
            'Gender': { },
            'Language': { },
            'Status': { },
            'Note': { },
            'Passport': { },
            'HasPhoto': { },
            'IsPaid': { }
    };

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr('', {}),
            'ExternalNo': this.attr('', {}),
            'Level': this.attr('', {}),
            'Type': this.attr('', {}),
            'Title': this.attr('', {}),
            'Name': this.attr('', {}),
            'Surname': this.attr('', {}),
            'Identity': this.attr('', {}),
            'BirthDate': this.attr('', {}),
            'Gender': this.attr('', {}),
            'Language': this.attr('', {}),
            'Status': this.attr('', {}),
            'Note': this.attr('', {}),
            'Passport': this.attr('', {}),
            'HasPhoto': this.attr('', {}),
            'IsPaid': this.attr('', {}),
            'entitygoods': this.hasMany(Entitygood, 'Entity'),
            'entitygoodapprovals': this.hasMany(Entitygoodapproval, 'ApprovedBy'),
            'entitygoodapprovals': this.hasMany(Entitygoodapproval, 'InvoiceApprovedBy'),
            'entitygoodapprovals': this.hasMany(Entitygoodapproval, 'Entity'),
            'goods': this.hasMany(Good, 'Sector'),
            'servicerequests': this.hasMany(Servicerequest, 'ServiceProvider'),
            'servicerequestreports': this.hasMany(Servicerequestreport, 'ServiceProvider'),
            'systemcodes': this.hasMany(Systemcode, 'Entity')
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