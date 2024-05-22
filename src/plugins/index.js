/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import VueCookies from 'vue-cookies';
import store from '@/store';
import VueGoogleMaps from 'vue-google-maps-community-fork'
import { CustonMixins } from 'quicklists-vue-orm-ui'


export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
  app.use(VueCookies, { expire: '7d' });
  app.use(store);
  app.use(VueGoogleMaps, {
    load: {
      key: import.meta.env.VITE_GOOGLE_MAP_KEY,
      libraries: "places",
      autobindAllEvents: true,
      loading: 'async',
    },
  })
  app.mixin(CustonMixins)

}


