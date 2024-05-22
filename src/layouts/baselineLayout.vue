<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <slot name="sidebar"></slot>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <slot name="header"></slot>
    </v-app-bar>

    <v-main style="background-color: whitesmoke; min-height: 100vh">
      <v-container>
        <slot name="main"></slot>
      </v-container>
    </v-main>

    <!--<v-main>-->
    <!--  <router-view />-->
    <!--</v-main>-->
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(null)
</script>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>


