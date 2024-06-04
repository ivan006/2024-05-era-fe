<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import VueCookies from "vue-cookies";
import LoginSession from "@/models/non-quicklist/LoginSession";

export default {
  name: 'App',
  mounted() {
    const VITE_AUTH = VueCookies.get('VITE_AUTH')
    if (VITE_AUTH) {
      LoginSession.deleteAll()
      LoginSession.insert({
        data: VITE_AUTH,
      })
    }
  },
}
</script>
