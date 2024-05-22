import { Model } from '@vuex-orm/core'
// import Image from '@/models/Image'
import { CustonMixins } from 'quicklists-vue-orm-ui'

export default class Table extends Model {
    static entity = 'Table'

    static fields() {
        return {
            id: this.attr(null),
            created_at: this.attr(''),
            name: this.attr(''),
            image: this.attr(''),
            // image_id: this.attr(null),
            // image: this.belongsTo(Image, 'image_id'),
        }
    }

    static FetchAll(limit = {}, query = {}) {
        return this.api().get('/rest/v1/tables?select=*', {
            // return this.api().get('/rest/v1/', {
            // return this.api().get('/storage/v1/object/public/images', {
            // return this.api().get('/storage/v1/object/list/images', {
            // return this.api().get('http://localhost:54324/storage/v1/', {
            // return this.api().get('/rest/v1/tables?select=*', {
            ...CustonMixins.methods.DefaultHeadersAndBaseUrl(),
            // base_url: '',
            params: {
                ...{
                    maxRecords: limit,
                },
                ...(query !== {} ? query : {}),
            },
            dataTransformer: ({ data }) => {
                const result = CustonMixins.methods.NormalizeRecursive(data)
                return result
            },
        })
    }
}
