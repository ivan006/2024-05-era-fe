import { Model } from '@vuex-orm/core'

export default class SnackbarNotification extends Model {
    static entity = 'snackbar-notifications'

    static fields() {
        return {
            id: this.attr(null),
            text: this.attr(''),
            date: this.attr(''),
            show: this.attr(false),
        }
    }
}
