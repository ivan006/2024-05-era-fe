import { Model } from '@vuex-orm/core'

export default class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(''),
      email: this.attr(''),
      password: this.attr(''),
      // other fields...
    }
  }

  static registerFromClient(data) {
    return this.api().post('/auth/register-from-client', data)
  }
}
