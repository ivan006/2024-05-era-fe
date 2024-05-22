import { Model } from '@vuex-orm/core'
import { CustonMixins } from 'quicklists-vue-orm-ui'
// import Food from "@/models/Food";
import UploadRelation from '@/models/UploadRelation'

export default class Upload extends Model {
    static entity = 'Upload'

    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(''),
            alternativeText: this.attr(''),
            caption: this.attr(''),
            width: this.attr(null),
            height: this.attr(null),
            hash: this.attr(''),
            ext: this.attr(''),
            mime: this.attr(''),
            size: this.attr(null),
            url: this.attr(''),
            previewUrl: this.attr(''),
            provider: this.attr(''),
            provider_metadata: this.attr(''),
            createdAt: this.attr(''),
            updatedAt: this.attr(''),
            // related: this.hasMany(""),

            // related: this.morphedByMany(
            //   Food,
            //   UploadRelation,
            //   "upload_id",
            //   "id",
            //   "__type"
            // ),
            UploadRelations: this.hasMany(UploadRelation, 'upload_id', 'id'),
            // Foods: this.belongsToMany(
            //   Food,
            //   UploadRelation,
            //   "upload_id",
            //   "relation_id"
            // ),
        }
    }

    static FetchAll(
        { page = 1, limit = 15 },
        query = {},
        relationships = [],
        view = 'Grid view'
    ) {
        page
        relationships
        // return this.api().get("/Foods?populate=*", {
        return this.api().get('/upload/files?populate=*', {
            params: {
                ...{
                    // page: page,
                    maxRecords: limit,
                    view,
                    // with: relationships,
                },
                ...(query !== {} ? query : {}),
            },
            dataTransformer: ({ data }) => {
                const result = CustonMixins.methods.NormalizeRecursive(data)

                let result2 = result
                {
                    result2 = []
                    let element = []
                    let relation = {}
                    let related = []
                    let related2 = []

                    if (result.length && result[0] && result[0].related) {
                        for (const resultKey in result) {
                            element = result[resultKey]
                            related2 = []
                            related = element.related
                            for (const relationKey in related) {
                                relation = related[relationKey]

                                related2[relationKey] = {
                                    upload_id: element.id,
                                    // upload: element,
                                    relation_id: relation.id,
                                    // relation_type: relation["__type"],
                                    // relation_type: "Food",
                                    relation,
                                }
                            }
                            element.UploadRelations = related2
                            result2[resultKey] = element
                        }
                    }
                }
                return result
                // return data.records.map((entity) => {
                //   return { ...entity, ...entity.fields };
                // });
            },
        })
    }
}
