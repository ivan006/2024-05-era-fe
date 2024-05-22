// import axios from 'axios'
// import Vue from 'vue'
// import Vuex from 'vuex'
// import VuexORM from '@vuex-orm/core'
// import VuexORMAxios from '@vuex-orm/plugin-axios'
// import VueCookies from 'vue-cookies'

import { createStore } from 'vuex'
// import { createORM } from '@vuex-orm/core'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import axios from 'axios'

// Register Models to Database.

import User from '@/models/User'

import LoginSession from '@/models/LoginSession'
import Post from '@/models/Post'
import Food from '@/models/Food'
import Upload from '@/models/Upload'
import UploadRelation from '@/models/UploadRelation'
import place from '@/models/place'
import DBEvent from '@/models/DBEvent'
import DBEventType from '@/models/DBEventType'
import DBMembership from '@/models/DBMembership'
import order from '@/models/order'
import DBProviderGroup from '@/models/DBProviderGroup'
import SnackbarNotification from '@/models/SnackbarNotification'
import Image from '@/models/Image'
import Table from '@/models/Table'
import DBVenueCountry from '@/models/DBVenueCountry'
import DBVenueState from '@/models/DBVenueState'
import DBVenueSubstate from '@/models/DBVenueSubstate'
import DBVenueTown from '@/models/DBVenueTown'
import DBVenueSuburb from '@/models/DBVenueSuburb'
import DBPerson from '@/models/DBPerson'
import { DBCrudCacheSet } from 'quicklists-vue-orm-ui'
import DBCustomerGroup from '@/models/DBCustomerGroup'
import DBCustomerManager from '@/models/DBCustomerManager'
import DBRSVP from '@/models/DBRSVP'

VuexORM.use(VuexORMAxios, {
  axios,
  baseURL: 'https://your-api-url.com'  // Set your API base URL here
});

const database = new VuexORM.Database();

database.register(DBCrudCacheSet)
database.register(User)
database.register(LoginSession)
database.register(Post)
database.register(Food)
database.register(Upload)
database.register(UploadRelation)
database.register(place)
database.register(DBEvent)
database.register(DBEventType)
database.register(DBMembership)
database.register(order)
database.register(DBProviderGroup)
database.register(SnackbarNotification)
database.register(Table)
database.register(Image)
database.register(DBVenueCountry)
database.register(DBVenueState)
database.register(DBVenueSubstate)
database.register(DBVenueTown)
database.register(DBVenueSuburb)
database.register(DBPerson)
database.register(DBCustomerGroup)
database.register(DBCustomerManager)
database.register(DBRSVP)


const store = createStore({
  plugins: [VuexORM.install(database)]
});

export default store;
