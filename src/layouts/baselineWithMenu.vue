<script>
import baselineLayout from '@/layouts/baselineLayout.vue'
// import LoginSession from '@/models/non-quicklist/LoginSession'
import VueCookies from 'vue-cookies'
// import DBPerson from '@/models/non-quicklist/User'
// import MenuSystemItem from '@/components/global/MenuSystemItem.vue'
// import MyProversAndCustomerAsMenuList from '@/views/global/MyProversAndCustomerAsMenuList.vue'
// import MyProversAndCustomerAsSelects from '@/views/global/MyProversAndCustomerAsSelects.vue'

export default {
  name: 'baselineWithMenu',
  components: {
    // MyProversAndCustomerAsSelects,
    // MyProversAndCustomerAsMenuList,
    // MenuSystemItem,
    baselineLayout,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      error: '',
      loading: false,
      drawer: false,
      appTitle: 'Insert title here',
    }
  },
  methods: {
    logout() {
      VueCookies.remove('VITE_AUTH')
      // LoginSession.deleteAll()
    },
    seeAll() {
      this.providerId = null

      this.$router
        .push({
          name: '/lists/providers',
          query: {},
        })
        .catch(() => {})
    },
  },
  computed: {
    links() {
      let result = [
        {
          icon: '',
          text: 'Home',
          to: '/',
        },
        {
          icon: '',
          text: 'Lists',
          subLinks: [
            {
              icon: '',
              text: 'Events',
              to: '/lists/events',
            },
            {
              icon: '',
              text: 'Provider Groups',
              to: '/lists/providers',
            },
            {
              icon: '',
              text: 'Customer Groups',
              to: '/lists/customers',
            },
          ],
        },
      ]

      if (this.loginSession) {
        result.push({
          icon: '',
          text: 'My Shortcuts',
          subLinks: 'MyProversAndCustomerAsMenuList',
        })
        result.push(
          {
            icon: '',
            text: 'My Account',
            subLinks: [],
          }
        )
      }

      return result
    },
    // loginSession() {
    //     return LoginSession.query().withAllRecursive().first()
    // },
  },
  watch: {
    drawer(newVal) {
      this.$emit('drawer', newVal)
    },
  },
  mounted() {
    // const VITE_AUTH = this.$cookies.get('VITE_AUTH')
    // if (VITE_AUTH) {
    //     LoginSession.deleteAll()
    //     LoginSession.insert({
    //         data: VITE_AUTH,
    //     })
    //     DBPerson.FetchAll({
    //         page: 1,
    //         limit: 1,
    //         filters: {
    //             user_id: this.loginSession.user_id,
    //         },
    //         flags: {},
    //         moreHeaders: {},
    //         clearPrimaryModelOnly: false,
    //         relationships: [],
    //     })
    // }
  },
}
</script>

<template>
  <baselineLayout>
    <template v-slot:header>

      <v-spacer></v-spacer>
      <!--<template v-if="$store.getters['entities/login-sessions/all']()[0]">-->
      <!--    <v-btn @click="logout()"> Sign Out </v-btn>-->
      <!--</template>-->
      <!--<template v-else>-->
      <!--    <v-btn @click="goto('/sign-in')" style="margin-right: 1em">-->
      <!--        Sign In-->
      <!--    </v-btn>-->
      <!--    <v-btn @click="goto('/join')"> Join </v-btn>-->
      <!--</template>-->
    </template>
    <template v-slot:sidebar>

      <v-list nav dense>
        <div v-for="(link, i) in links" :key="i">
          <template v-if="!link.subLinks">
            <!--<MenuSystemItem :link="link" />-->
          </template>

          <v-list-group
            v-else
            :key="link.text"
            no-action
            :prepend-icon="link.icon"
            :value="false"
          >
            <template v-slot:activator>
              <v-list-item-title :title="link.text">
                {{ link.text }}
              </v-list-item-title>
            </template>
            <div
              class="ml-2 pl-2"
              style="border-left: solid 1px Gainsboro"
            >
              <template v-if="typeof link.subLinks == 'string'">
                <component :is="link.subLinks"> </component>
              </template>
              <template v-else>
                <template v-for="sublink in link.subLinks" :key="sublink.text">
                  <!--<MenuSystemItem-->
                  <!--  :link="sublink"-->

                  <!--/>-->
                </template>
              </template>
            </div>
          </v-list-group>
        </div>


      </v-list>
    </template>
  </baselineLayout>
</template>

<style scoped>

</style>





