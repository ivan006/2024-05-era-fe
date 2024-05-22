import { Model } from '@vuex-orm/core'
import UploadRelation from '@/models/UploadRelation'
import Upload from '@/models/Upload'
import { CustonMixins } from 'quicklists-vue-orm-ui'

export default class Food extends Model {
    static entity = 'Foods'

    static fields() {
        return {
            id: this.attr(null),
            Name: this.attr(''),
            Desc: this.attr(''),
            UploadRelations: this.hasMany(UploadRelation, 'relation_id'),
            Image: this.belongsToMany(
                Upload,
                UploadRelation,
                'relation_id',
                'upload_id'
            ),
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

        return this.api().get('/Foods?populate=*', {
            // return this.api().get("/upload/files?populate=*", {
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

                if (result[0] && result[0].Image) {
                    for (const key in result) {
                        result[key].UploadRelations = [
                            {
                                upload_id: result[key].Image.id,
                                relation_id: result[key].id,
                            },
                        ]
                        result[key].Image = [result[key].Image]
                    }
                }
                return result
            },
        })
    }
}
