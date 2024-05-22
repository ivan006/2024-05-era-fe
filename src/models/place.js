import { Model } from '@vuex-orm/core'
// import UploadRelation from "@/models/UploadRelation";
// import Upload from "@/models/Upload";
import { CustonMixins } from 'quicklists-vue-orm-ui'

export default class Place extends Model {
    static entity = 'places'

    static fields() {
        return {
            id: this.attr(null),
            Name: this.attr(''),
            Description: this.attr(''),
            lng: this.attr(''),
            lat: this.attr(''),
            // Image: this.belongsToMany(
            //   Upload,
            //   UploadRelation,
            //   "relation_id",
            //   "upload_id"
            // ),
        }
    }

    static FetchAll(limit, query = {}) {
        // return this.api().get('/rest/v1/places?select=*,created_by', {
        // return this.api().get('/rest/v1/places?select=*,person_that_created_this_id(*,email)', {
        return this.api().get('/rest/v1/places?select=*,created_by(*,email)', {
            ...CustonMixins.methods.DefaultHeadersAndBaseUrl(),
            params: {
                ...{
                    maxRecords: limit,
                },
                ...(query !== {} ? query : {}),
            },
            dataTransformer: ({ data }) => {
                const result = CustonMixins.methods.NormalizeRecursive(data)

                // if (result[0] && result[0]["Image"]) {
                //   for (const key in result) {
                //     result[key]["UploadRelations"] = [
                //       {
                //         upload_id: result[key]["Image"].id,
                //         relation_id: result[key].id,
                //       },
                //     ];
                //     result[key]["Image"] = [result[key]["Image"]];
                //   }
                // }
                return result
            },
        })
    }
}
