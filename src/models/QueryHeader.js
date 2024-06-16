import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import EntityGoodApproval from 'src/models/EntityGoodApproval';

export default class QueryHeader extends MyBaseModel {
    static entity = 'queryheader';
    static entityUrl = '/api/query-headers';
    static primaryKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/query-headers/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'Subject': {},
            'Status': {},
            'Type': {},
            'RelativeName': {},
            'RelativeID': {},
            'CreatedBy': {},
            'CreatedOn': {},
            'ClosedBy': {},
            'ClosedOn': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'Subject': this.attr(''),
            'Status': this.attr(''),
            'Type': this.attr(''),
            'RelativeName': this.attr(''),
            'RelativeID': this.attr(''),
            'CreatedBy': this.attr(''),
            'CreatedOn': this.attr(''),
            'ClosedBy': this.attr(''),
            'ClosedOn': this.attr(''),
            'entitygoodapprovals': this.hasMany(EntityGoodApproval, 'Query')
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