import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import axios from 'axios'

export default async ({ store }) => {
  VuexORM.use(VuexORMAxios, { axios })
}
