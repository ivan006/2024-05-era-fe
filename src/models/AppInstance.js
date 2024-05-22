import { Model } from '@vuex-orm/core'

export default class AppInstance extends Model {
    static entity = 'app-instances'

    static fields() {
        return {
            vuexORMOptions: this.attr({}),
        }
    }
}
