<template>
  <div>
    <baseline-layout>
      <template v-slot:sidebar>
        <v-list nav density="compact">
          <div v-for="(link, i) in links" :key="i">
            <template v-if="!link.subLinks">
              <MenuSystemItem :link="link" />
            </template>
            <v-list-group v-else :key="link.text" no-action :prepend-icon="link.icon" :value="false">
              <template v-slot:activator="{props, isOpen}">
                <v-list-item v-bind="props" :key="link.text" :title="link.text"></v-list-item>
              </template>
              <div class="ml-2 pl-2" style="border-left: solid 1px Gainsboro">
                <template v-if="typeof link.subLinks == 'string'">
                  <component :is="link.subLinks"> </component>
                </template>
                <template v-else>
                  <template v-for="sublink in link.subLinks" :key="sublink.text">
                    <MenuSystemItem :link="sublink" />
                  </template>
                </template>
              </div>
            </v-list-group>
          </div>
        </v-list>
      </template>
      <template v-slot:header>
        <v-spacer></v-spacer>
        <template v-if="loginSession">
          <v-btn @click="logout()"> Sign Out </v-btn>
        </template>
        <template v-else>
          <v-btn @click="$router.push('/sign-in')" style="margin-right: 1em">
            Sign In
          </v-btn>
          <v-btn @click="$router.push('/join')"> Join </v-btn>
        </template>
      </template>
      <template v-slot:main>
        <slot name="main"></slot>
      </template>
    </baseline-layout>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import MenuSystemItem from '@/views/global/MenuSystemItem.vue'
import MyProversAndCustomerAsMenuList from '@/views/global/MyProversAndCustomerAsMenuList.vue'
import BaselineLayout from "@/layouts/baselineLayout.vue";
import LoginSession from "@/models/non-quicklist/LoginSession.js";
import {Model as $store} from "@vuex-orm/core";

export default {
  name: 'MenuSystem',
  components: {
    BaselineLayout,
    MyProversAndCustomerAsMenuList,
    MenuSystemItem,
  },
  data() {
    return {
      drawer: false,
      appTitle: 'Insert title here',
    }
  },
  methods: {
    $store() {
      return $store
    },
    logout() {
      VueCookies.remove('VITE_AUTH')
      LoginSession.deleteAll()
    },
  },
  computed: {
    loginSession() {
        return LoginSession.query().withAllRecursive().first()
    },
    links() {
      return [
        {
          icon: '',
          text: 'Home',
          to: '/',
        },
        {
          icon: '',
          text: 'Hmmm',
          subLinks: [

            {
              icon: '',
              text: 'Entity Goods (Deps. Items)',
              to: '/lists/entity-goods',
            },
            {
              icon: '',
              text: 'Entity Good Approvals (Deps.)',
              to: '/lists/entity-good-approvals',
            },
            {
              icon: '',
              text: 'Goods (Waste Types)',
              to: '/lists/goods',
            },
            {
              icon: '',
              text: 'Service Requests (Withd. Contracts)',
              to: '/lists/service-requests',
            },
            {
              icon: '',
              text: 'Service Request Frequencies',
              to: '/lists/service-request-frequencies',
            },
            {
              icon: '',
              text: 'Service Request Reports (Withd.)',
              to: '/lists/service-request-reports',
            },
            {
              icon: '',
              text: 'Queries',
              to: '/lists/queries',
            },
            {
              icon: '',
              text: 'Query Headers',
              to: '/lists/query-headers',
            },
            {
              icon: '',
              text: 'Treatment Details (Withd. Items)',
              to: '/lists/treatment-details',
            },

          ],
        },
        {
          icon: '',
          text: 'Lists',
          subLinks: [
            {
              icon: '',
              text: 'Addresses',
              to: '/lists/addresses',
            },
            {
              icon: '',
              text: 'Attachments',
              to: '/lists/attachments',
            },
            {
              icon: '',
              text: 'Audits',
              to: '/lists/audits',
            },
            {
              icon: '',
              text: 'Banks',
              to: '/lists/banks',
            },
            {
              icon: '',
              text: 'Communications',
              to: '/lists/communications',
            },
            {
              icon: '',
              text: 'Contact Numbers',
              to: '/lists/contact-numbers',
            },
            {
              icon: '',
              text: 'Crms',
              to: '/lists/crms',
            },
            {
              icon: '',
              text: 'Documents',
              to: '/lists/documents',
            },
            {
              icon: '',
              text: 'Document Details',
              to: '/lists/document-details',
            },
            {
              icon: '',
              text: 'Domain Users',
              to: '/lists/domain-users',
            },
            {
              icon: '',
              text: 'Dummies',
              to: '/lists/dummies',
            },
            {
              icon: '',
              text: 'Emails',
              to: '/lists/emails',
            },
            {
              icon: '',
              text: 'Entities',
              to: '/lists/entities',
            },
            {
              icon: '',
              text: 'Entity Audits',
              to: '/lists/entity-audits',
            },
            {
              icon: '',
              text: 'Entity Events',
              to: '/lists/entity-events',
            },
            {
              icon: '',
              text: 'Entity Relationships',
              to: '/lists/entity-relationships',
            },
            {
              icon: '',
              text: 'External Producers',
              to: '/lists/external-producers',
            },
            {
              icon: '',
              text: 'Instance Nos',
              to: '/lists/instance-nos',
            },
            {
              icon: '',
              text: 'Migration S',
              to: '/lists/migration-s',
            },
            {
              icon: '',
              text: 'Objects',
              to: '/lists/objects',
            },
            {
              icon: '',
              text: 'Object Traits',
              to: '/lists/object-traits',
            },
            {
              icon: '',
              text: 'Object Values',
              to: '/lists/object-values',
            },
            {
              icon: '',
              text: 'Password Hashes',
              to: '/lists/password-hashes',
            },
            {
              icon: '',
              text: 'Product Providers',
              to: '/lists/product-providers',
            },
            {
              icon: '',
              text: 'Relatives',
              to: '/lists/relatives',
            },
            {
              icon: '',
              text: 'Requirements',
              to: '/lists/requirements',
            },
            {
              icon: '',
              text: 'Requirement Details',
              to: '/lists/requirement-details',
            },
            {
              icon: '',
              text: 'Rules',
              to: '/lists/rules',
            },
            {
              icon: '',
              text: 'Rule Actions',
              to: '/lists/rule-actions',
            },
            {
              icon: '',
              text: 'Rule Action Datas',
              to: '/lists/rule-action-datas',
            },
            {
              icon: '',
              text: 'Rule Configs',
              to: '/lists/rule-configs',
            },
            {
              icon: '',
              text: 'Rule Entity Roles',
              to: '/lists/rule-entity-roles',
            },
            {
              icon: '',
              text: 'System Actions',
              to: '/lists/system-actions',
            },
            {
              icon: '',
              text: 'System Codes',
              to: '/lists/system-codes',
            },
            {
              icon: '',
              text: 'System Configurations',
              to: '/lists/system-configurations',
            },
            {
              icon: '',
              text: 'System Logs',
              to: '/lists/system-logs',
            },
            {
              icon: '',
              text: 'System Users',
              to: '/lists/system-users',
            },
            {
              icon: '',
              text: 'Transactions',
              to: '/lists/transactions',
            },
            {
              icon: '',
              text: 'User Accesses',
              to: '/lists/user-accesses',
            },
            {
              icon: '',
              text: 'User Configurations',
              to: '/lists/user-configurations',
            },
            {
              icon: '',
              text: 'User Devices',
              to: '/lists/user-devices',
            },
            {
              icon: '',
              text: 'User Roles',
              to: '/lists/user-roles',
            },
            {
              icon: '',
              text: 'User Role Accesses',
              to: '/lists/user-role-accesses',
            },
            {
              icon: '',
              text: 'Website Producer Registrations',
              to: '/lists/website-producer-registrations',
            }
          ],
        },
      ]
    },
  },
  watch: {
    drawer(newVal) {
      this.$emit('drawer', newVal)
    },
  },
  mounted() {
  },
}
</script>

<style scoped></style>
