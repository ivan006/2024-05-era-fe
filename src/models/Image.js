import { Model } from '@vuex-orm/core'
import Table from '@/models/Table'
import { CustonMixins } from 'quicklists-vue-orm-ui'

export default class Image extends Model {
    static entity = 'Image'

    static fields() {
        return {
            id: this.attr(null),
            created_at: this.attr(''),
            name: this.attr(''),
            tables: this.hasMany(Table, 'image_id'),
        }
    }

    static FetchAll() {
        // return this.api().get('/rest/v1/tables?select=*,image_id(*)', {
        // return this.api().get('/rest/v1/', {
        // return this.api().get('/storage/v1/object/public/images', {
        return this.api().post(
            '/storage/v1/object/list/images',
            {
                limit: 100,
                offset: 0,
                prefix: '',
                // prefix: 'object',
                sortBy: { column: 'name', order: 'asc' },
                column: 'name',
                order: 'asc',
            },
            {
                ...CustonMixins.methods.DefaultHeadersAndBaseUrl(),
            }
        )
    }

    static Upload(data) {
        // return this.api().get('/rest/v1/tables?select=*,image_id(*)', {
        // return this.api().get('/rest/v1/', {
        // return this.api().get('/storage/v1/object/public/images', {
        return this.api().post(
            '/storage/v1/object/images/public/avatar1.png',
            data,
            {
                ...CustonMixins.methods.DefaultHeadersAndBaseUrl(),
            }
        )
    }

    // static async upload(formData) {
    //     const response = await axios.post('/upload', formData);
    //     if (response.data && response.data.success) {
    //         // Insert the new image record into the Vuex ORM store.
    //         this.insert({ data: response.data.image });
    //     } else {
    //         throw new Error(response.data.error);
    //     }
    // }

    static Download() {
        return this.api().get('/storage/v1/object/images/cooking.png', {
            ...CustonMixins.methods.DefaultHeadersAndBaseUrl(),
            dataTransformer: ({ data }) => {
                const result = CustonMixins.methods.NormalizeRecursive(data)
                return result
            },
        })
    }
}
