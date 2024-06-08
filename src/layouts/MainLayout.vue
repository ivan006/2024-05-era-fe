<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>Quasar App</q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
        <q-space />

        <template v-if="loginSession">
          <q-btn flat label="Sign Out" @click="logout" />
        </template>
        <template v-else>
          <q-btn flat label="Login" @click="$router.push('/sign-in')" />
          <q-btn flat label="Register" @click="$router.push('/join')" />
        </template>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <template v-for="link in links" :key="link.text">
          <q-item v-if="!link.subLinks" :to="link.to" clickable>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-expansion-item v-else :label="link.text">
            <q-list style="padding-left: 16px;">
              <q-item
                v-for="subLink in link.subLinks"
                :key="subLink.text"
                :to="subLink.to"
                clickable
              >
                <q-item-section>
                  <q-item-label>{{ subLink.text }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import VueCookies from 'vue-cookies';
import links from './links.js';
import LoginSession from "src/models/model-helpers/LoginSession.js";

export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false,
      links: links,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    logout() {
      VueCookies.remove('VITE_AUTH');
      LoginSession.deleteAll();
    },
  },
  computed: {
    loginSession() {
      return LoginSession.query().withAllRecursive().first();
    }
  }
};
</script>

<style scoped>
.day-cell {
  cursor: pointer;
}
</style>
