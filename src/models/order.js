import { Model } from '@vuex-orm/core'
import { CustonMixins } from 'quicklists-vue-orm-ui'

export default class order extends Model {
    static entity = 'order'

    static fields() {
        return {
            id: this.attr(null),
            stripeId: this.attr(''),
            products: this.attr(''),
        }
    }

    static FetchAll(query = {}) {
        return this.api().get('/orders?populate=*', {
            params: {
                ...(query !== {} ? query : {}),
            },
            dataTransformer: ({ data }) => {
                const result = CustonMixins.methods.NormalizeRecursive(data)

                return result
            },
        })
    }

    static Store(entity, options = { flags: {}, moreHeaders: {}, rels: [] } ) {
        return this.api().get(
            // '/stripe-subscriptions/create-payment-intent',
            '/stripe-subscriptions',
            entity,
            {
                baseURL: import.meta.env.VITE_API_URL + '/',
                dataTransformer: ({ data }) => {
                    const result = CustonMixins.methods.NormalizeRecursive(data)
                    return result
                },
            }
        )
    }
}
