import { Model } from '@vuex-orm/core'
// import Upload from "@/models/Upload";
// import Food from "@/models/Upload";

export default class UploadRelation extends Model {
    static entity = 'UploadRelation'

    static fields() {
        return {
            upload_id: this.attr(null),
            // upload: this.belongsTo(Upload, "upload_id"),
            // // id: this.attr(null),
            relation_id: this.attr(null),
            // // __type: this.attr(""),
            // relation_type: this.attr(""),
            // // relation: this.morphTo("relation_id", "relation_type"),
            // relation: this.belongsTo(Food, "relation_id"),
        }
    }
}
