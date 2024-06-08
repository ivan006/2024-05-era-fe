import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'
import User from 'src/models/User'
import Address from "src/models/Address";
import {DBCrudCacheSet} from "quicklists-vue-orm-ui-2";

// Initialize the database
const database = new VuexORM.Database()

// Register models
database.register(User)
database.register(Address)
database.register(DBCrudCacheSet)

// Create Vuex store
const store = createStore({
  plugins: [VuexORM.install(database)]
})

export default store
