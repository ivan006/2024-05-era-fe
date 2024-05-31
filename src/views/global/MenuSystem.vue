<template>
    <div>

      <baseline-layout>

        <template v-slot:sidebar>

          <v-list nav density="compact">
            <div v-for="(link, i) in links" :key="i">
              <!--                  :active-class="color"-->
              <template v-if="!link.subLinks">
                <MenuSystemItem :link="link" />
              </template>
              <v-list-group
                v-else
                :key="link.text"
                no-action
                :prepend-icon="link.icon"
                :value="false"
              >
                <template v-slot:activator="{props, isOpen}">
                  <v-list-item
                    v-bind="props"
                    :key="link.text"
                    :title="link.text"
                  ></v-list-item>
                </template>
                <!--    :key="link.text"-->
                <!--    :title="link.text"-->
                <div
                  class="ml-2 pl-2"
                  style="border-left: solid 1px Gainsboro"
                >
                  <template v-if="typeof link.subLinks == 'string'">
                    <component :is="link.subLinks"> </component>
                  </template>
                  <template v-else>
                    <template v-for="sublink in link.subLinks" :key="sublink.text">

                      <MenuSystemItem
                        :link="sublink"
                      />
                    </template>
                  </template>
                </div>
              </v-list-group>
            </div>
          </v-list>
        </template>
        <template v-slot:header>

          <v-spacer></v-spacer>

          <!--<template v-if="$store.getters['entities/login-sessions/all']()[0]">-->
          <!--  <v-btn @click="logout()"> Sign Out </v-btn>-->
          <!--</template>-->
          <!--<template v-else>-->
          <!--  <v-btn @click="$router.push('/sign-in')" style="margin-right: 1em">-->
          <!--    Sign In-->
          <!--  </v-btn>-->
          <!--  <v-btn @click="$router.push('/join')"> Join </v-btn>-->
          <!--</template>-->
        </template>
        <template v-slot:main>

          <slot name="main"></slot>
        </template>
      </baseline-layout>


    </div>
</template>

<script>
// import LoginSession from '@/models/LoginSession'
import VueCookies from 'vue-cookies'
// import DBPerson from '@/models/DBPerson'
import MenuSystemItem from '@/views/global/MenuSystemItem.vue'
import MyProversAndCustomerAsMenuList from '@/views/global/MyProversAndCustomerAsMenuList.vue'
// import MyProversAndCustomerAsSelects from '@/views/global/MyProversAndCustomerAsSelects.vue'
import BaselineLayout from "@/layouts/baselineLayout.vue";

export default {
    name: 'MenuSystem',
    components: {
      BaselineLayout,
        // MyProversAndCustomerAsSelects,
        MyProversAndCustomerAsMenuList,
        MenuSystemItem,
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
                  text: 'Hmmm',
                  subLinks: [
                    {
                      icon: '',
                      text: 'Servicerequest (Deps. Contracts)',
                      to: '/lists/service-request',
                    },
                    {
                      icon: '',
                      text: 'Servicerequestfrequency ',
                      to: '/lists/service-request-frequency',
                    },
                    {
                      icon: '',
                      text: 'Servicerequestreport (Deps.)',
                      to: '/lists/service-request-report',
                    },
                    {
                      icon: '',
                      text: 'Treatmentdetail (Deps. Items)',
                      to: '/lists/treatment-detail',
                    },
                    {
                      icon: '',
                      text: 'Entitygood (Withd. Items)',
                      to: '/lists/entity-good',
                    },
                    {
                      icon: '',
                      text: 'Entitygoodapproval (Withd.)',
                      to: '/lists/entity-good-approval',
                    },
                    {
                      icon: '',
                      text: 'Good (Waste Types)',
                      to: '/lists/good',
                    },
                    {
                      icon: '',
                      text: 'Query',
                      to: '/lists/query',
                    },
                    {
                      icon: '',
                      text: 'Queryheader',
                      to: '/lists/query-header',
                    },
                  ],
                },
                {
                    icon: '',
                    text: 'Lists',
                    subLinks: [


                        {
                            icon: '',
                            text: 'Address',
                            to: '/lists/address',
                        },
                        {
                            icon: '',
                            text: 'Attachment',
                            to: '/lists/attachment',
                        },
                        {
                            icon: '',
                            text: 'Audit',
                            to: '/lists/audit',
                        },
                        {
                            icon: '',
                            text: 'Bank',
                            to: '/lists/bank',
                        },
                        {
                            icon: '',
                            text: 'Communication',
                            to: '/lists/communication',
                        },
                        {
                            icon: '',
                            text: 'Contactnumber',
                            to: '/lists/contactnumber',
                        },
                        {
                            icon: '',
                            text: 'Crm',
                            to: '/lists/crm',
                        },
                        {
                            icon: '',
                            text: 'Document',
                            to: '/lists/document',
                        },
                        {
                            icon: '',
                            text: 'Documentdetail',
                            to: '/lists/document-detail',
                        },
                        {
                            icon: '',
                            text: 'Domainuser',
                            to: '/lists/domain-user',
                        },
                        {
                            icon: '',
                            text: 'Dummy',
                            to: '/lists/dummy',
                        },
                        {
                            icon: '',
                            text: 'Email',
                            to: '/lists/email',
                        },
                        {
                            icon: '',
                            text: 'Entity',
                            to: '/lists/entity',
                        },
                        {
                            icon: '',
                            text: 'Entityaudit',
                            to: '/lists/entity-audit',
                        },
                        {
                            icon: '',
                            text: 'Entityevent',
                            to: '/lists/entity-event',
                        },
                        {
                            icon: '',
                            text: 'Entityrelationship',
                            to: '/lists/entity-relationship',
                        },
                        {
                            icon: '',
                            text: 'Externalproducer',
                            to: '/lists/external-producer',
                        },
                        {
                            icon: '',
                            text: 'Instanceno',
                            to: '/lists/instance-no',
                        },
                        {
                            icon: '',
                            text: 'Object',
                            to: '/lists/object',
                        },
                        {
                            icon: '',
                            text: 'Objecttrait',
                            to: '/lists/object-trait',
                        },
                        {
                            icon: '',
                            text: 'Objectvalue',
                            to: '/lists/object-value',
                        },
                        {
                            icon: '',
                            text: 'Passwordhash',
                            to: '/lists/password-hash',
                        },
                        {
                            icon: '',
                            text: 'Productprovider',
                            to: '/lists/product-provider',
                        },
                        {
                            icon: '',
                            text: 'Relative',
                            to: '/lists/relative',
                        },
                        {
                            icon: '',
                            text: 'Requirement',
                            to: '/lists/requirement',
                        },
                        {
                            icon: '',
                            text: 'Requirementdetail',
                            to: '/lists/requirement-detail',
                        },
                        {
                            icon: '',
                            text: 'Rule',
                            to: '/lists/rule',
                        },
                        {
                            icon: '',
                            text: 'Ruleaction',
                            to: '/lists/rule-action',
                        },
                        {
                            icon: '',
                            text: 'Ruleactiondatum',
                            to: '/lists/rule-action-datum',
                        },
                        {
                            icon: '',
                            text: 'Ruleconfig',
                            to: '/lists/rule-config',
                        },
                        {
                            icon: '',
                            text: 'Ruleentityrole',
                            to: '/lists/rule-entity-role',
                        },
                        {
                            icon: '',
                            text: 'Systemaction',
                            to: '/lists/system-action',
                        },
                        {
                            icon: '',
                            text: 'Systemcode',
                            to: '/lists/system-code',
                        },
                        {
                            icon: '',
                            text: 'Systemconfiguration',
                            to: '/lists/system-configuration',
                        },
                        {
                            icon: '',
                            text: 'Systemlog',
                            to: '/lists/system-log',
                        },
                        {
                            icon: '',
                            text: 'Systemuser',
                            to: '/lists/system-user',
                        },
                        {
                            icon: '',
                            text: 'Transaction',
                            to: '/lists/transaction',
                        },
                        {
                            icon: '',
                            text: 'Useraccess',
                            to: '/lists/user-access',
                        },
                        {
                            icon: '',
                            text: 'Userconfiguration',
                            to: '/lists/user-configuration',
                        },
                        {
                            icon: '',
                            text: 'Userdevice',
                            to: '/lists/user-device',
                        },
                        {
                            icon: '',
                            text: 'Userrole',
                            to: '/lists/user-role',
                        },
                        {
                            icon: '',
                            text: 'Userroleaccess',
                            to: '/lists/user-role-access',
                        },
                        {
                            icon: '',
                            text: 'WebsiteProducerRegistration',
                            to: '/lists/website-producer-registration',
                        },






















                    ],
                },
            ]

            // if (this.loginSession) {
            //     result.push({
            //         icon: '',
            //         // text: 'My Provider Groups',
            //         text: 'My Shortcuts',
            //         subLinks: 'MyProversAndCustomerAsMenuList',
            //     })
            //     // if (this.providerGroupsAssociatedWithUser?.length) {
            //     // }
            //     // if (this.customerGroupsAssociatedWithUser?.length) {
            //     //     result.push({
            //     //         icon: '',
            //     //         // text: 'My Provider Groups',
            //     //         text: 'My Customer Groups',
            //     //         subLinks: this.customerGroupsMenuSection,
            //     //     })
            //     // }
            //     result.push(
            //         {
            //             icon: '',
            //             text: 'My Account',
            //             subLinks: [],
            //         }
            //         // {
            //         //     icon: '',
            //         //     // text: 'Groups I\'m Representing ',
            //         //     text: 'Active Groups',
            //         //     subLinks: [],
            //         // },
            //         // ...(this.$store.getters['entities/login-sessions/all']()[0]
            //         //     ? []
            //         //     : [])
            //     )
            // }
            //
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

<style scoped></style>
