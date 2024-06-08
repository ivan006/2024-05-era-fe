import MyBaseModel from '@/models/non-quicklist/MyBaseModel';
import router from '@/router';

export default class RequirementDetail extends MyBaseModel {
    static entity = 'requirementdetail';
    static entityUrl = '/api/requirement-details';
    static primaryKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/requirement-details/:rId',
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
            'Requirement': {},
            'RelativeID': {},
            'Service': {},
            'Category': {},
            'Value': {},
            'Comment': {},
            'Received': {},
            'Name': {},
            'NameOriginal': {},
            'ContentType': {},
            'Path': {},
            'ChangedBy': {},
            'ChangedOn': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'Requirement': this.attr(''),
            'RelativeID': this.attr(''),
            'Service': this.attr(''),
            'Category': this.attr(''),
            'Value': this.attr(''),
            'Comment': this.attr(''),
            'Received': this.attr(''),
            'Name': this.attr(''),
            'NameOriginal': this.attr(''),
            'ContentType': this.attr(''),
            'Path': this.attr(''),
            'ChangedBy': this.attr(''),
            'ChangedOn': this.attr(''),

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
