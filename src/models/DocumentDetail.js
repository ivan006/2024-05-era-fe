import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import Document from 'src/models/Document';

export default class DocumentDetail extends MyBaseModel {
    static entity = 'documentdetail';
    static entityUrl = '/api/document-details';
    static primaryKey = 'Id';
    static titleKey = 'Id';
    static openRecord(pKey){
      router.push({
        name: '/lists/document-details/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'document_rel'
    ];

    static rules = {
        readables: (user) => true,
        readable: (user, item) => true,
        editable: (user, item) => true,
    };

    static fieldsMetadata = {
        'Id': {},
            'Document': { relationRules: { linkables: (user) => { return {} } } },
            'Section': {},
            'Position': {},
            'Title': {},
            'Description': {},
            'Comments': {},
            'Style': {},
            'CreatedBy': {},
            'CreatedOn': {}
    };

    static fields() {
        return {
            'Id': this.attr(''),
            'Document': this.attr(''),
            'Section': this.attr(''),
            'Position': this.attr(''),
            'Title': this.attr(''),
            'Description': this.attr(''),
            'Comments': this.attr(''),
            'Style': this.attr(''),
            'CreatedBy': this.attr(''),
            'CreatedOn': this.attr(''),
            'document_rel': this.belongsTo(Document, 'Document')
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