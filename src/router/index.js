import { createRouter, createWebHistory } from 'vue-router'
// import { setupLayouts } from 'virtual:generated-layouts'

const routes = [
  {
    path: '/art',
    name: '/art',
    component: () => import('@/views/misc/ArtInVoyage.vue'),
  },
  {
    path: '/sign-in-up',
    name: '/sign-in-up',
    component: () =>
      import(
        /* webpackChunkName: "/all-content" */ '../views/MenuView.vue'
        ),
    children: [
      {
        path: '/sign-in',
        name: '/sign-in',
        component: () => import('@/views/misc/SigninView.vue'),
      },
      {
        path: '/avi-stress-test',
        name: '/avi-stress-test',
        component: () => import('@/views/tests/AviStressTest.vue'),
      },
      {
        path: '/join',
        name: '/join',
        component: () => import('@/views/misc/JoinView.vue'),
      },
    ],
  },
  {
    path: '/',
    name: '/',
    component: () =>
      import(
        /* webpackChunkName: "/all-content" */ '../views/MenuView.vue'
        ),
    children: [
      {
        path: '/',
        name: '/',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/ListsIntroduction.vue'
            ),
      },




      {
        path: '/lists/address',
        name: '/lists/address',
        component: () =>
          import(
            '@/views/lists/address/AddressList.vue'
            ),
      },
      {
        path: '/lists/address/:rId',
        name: '/lists/address/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/address/AddressRead.vue'
            ),
      },
      {
        path: '/lists/attachment',
        name: '/lists/attachment',
        component: () =>
          import(
            '@/views/lists/attachment/AttachmentList.vue'
            ),
      },
      {
        path: '/lists/attachment/:rId',
        name: '/lists/attachment/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/attachment/AttachmentRead.vue'
            ),
      },
      {
        path: '/lists/audit',
        name: '/lists/audit',
        component: () =>
          import(
            '@/views/lists/audit/AuditList.vue'
            ),
      },
      {
        path: '/lists/audit/:rId',
        name: '/lists/audit/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/audit/AuditRead.vue'
            ),
      },
      {
        path: '/lists/bank',
        name: '/lists/bank',
        component: () =>
          import(
            '@/views/lists/bank/BankList.vue'
            ),
      },
      {
        path: '/lists/bank/:rId',
        name: '/lists/bank/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/bank/BankRead.vue'
            ),
      },
      {
        path: '/lists/communication',
        name: '/lists/communication',
        component: () =>
          import(
            '@/views/lists/communication/CommunicationList.vue'
            ),
      },
      {
        path: '/lists/communication/:rId',
        name: '/lists/communication/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/communication/CommunicationRead.vue'
            ),
      },
      {
        path: '/lists/contactnumber',
        name: '/lists/contactnumber',
        component: () =>
          import(
            '@/views/lists/contactnumber/ContactnumberList.vue'
            ),
      },
      {
        path: '/lists/contactnumber/:rId',
        name: '/lists/contactnumber/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/contactnumber/ContactnumberRead.vue'
            ),
      },
      {
        path: '/lists/crm',
        name: '/lists/crm',
        component: () =>
          import(
            '@/views/lists/crm/CrmList.vue'
            ),
      },
      {
        path: '/lists/crm/:rId',
        name: '/lists/crm/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/crm/CrmRead.vue'
            ),
      },
      {
        path: '/lists/document',
        name: '/lists/document',
        component: () =>
          import(
            '@/views/lists/document/DocumentList.vue'
            ),
      },
      {
        path: '/lists/document/:rId',
        name: '/lists/document/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/document/DocumentRead.vue'
            ),
      },
      {
        path: '/lists/document-detail',
        name: '/lists/document-detail',
        component: () =>
          import(
            '@/views/lists/document-detail/DocumentdetailList.vue'
            ),
      },
      {
        path: '/lists/document-detail/:rId',
        name: '/lists/document-detail/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/document-detail/DocumentdetailRead.vue'
            ),
      },
      {
        path: '/lists/domain-user',
        name: '/lists/domain-user',
        component: () =>
          import(
            '@/views/lists/domain-user/DomainuserList.vue'
            ),
      },
      {
        path: '/lists/domain-user/:rId',
        name: '/lists/domain-user/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/domain-user/DomainuserRead.vue'
            ),
      },
      {
        path: '/lists/dummy',
        name: '/lists/dummy',
        component: () =>
          import(
            '@/views/lists/dummy/DummyList.vue'
            ),
      },
      {
        path: '/lists/dummy/:rId',
        name: '/lists/dummy/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/dummy/DummyRead.vue'
            ),
      },
      {
        path: '/lists/email',
        name: '/lists/email',
        component: () =>
          import(
            '@/views/lists/email/EmailList.vue'
            ),
      },
      {
        path: '/lists/email/:rId',
        name: '/lists/email/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/email/EmailRead.vue'
            ),
      },
      {
        path: '/lists/entity',
        name: '/lists/entity',
        component: () =>
          import(
            '@/views/lists/entity/EntityList.vue'
            ),
      },
      {
        path: '/lists/entity/:rId',
        name: '/lists/entity/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/entity/EntityRead.vue'
            ),
      },
      {
        path: '/lists/entity-audit',
        name: '/lists/entity-audit',
        component: () =>
          import(
            '@/views/lists/entity-audit/EntityauditList.vue'
            ),
      },
      {
        path: '/lists/entity-audit/:rId',
        name: '/lists/entity-audit/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/entity-audit/EntityauditRead.vue'
            ),
      },
      {
        path: '/lists/entity-event',
        name: '/lists/entity-event',
        component: () =>
          import(
            '@/views/lists/entity-event/EntityeventList.vue'
            ),
      },
      {
        path: '/lists/entity-event/:rId',
        name: '/lists/entity-event/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/entity-event/EntityeventRead.vue'
            ),
      },
      {
        path: '/lists/entity-good',
        name: '/lists/entity-good',
        component: () =>
          import(
            '@/views/lists/entity-good/EntitygoodList.vue'
            ),
      },
      {
        path: '/lists/entity-good/:rId',
        name: '/lists/entity-good/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/entity-good/EntitygoodRead.vue'
            ),
      },
      {
        path: '/lists/entity-good-approval',
        name: '/lists/entity-good-approval',
        component: () =>
          import(
            '@/views/lists/entity-good-approval/EntitygoodapprovalList.vue'
            ),
      },
      {
        path: '/lists/entity-good-approval/:rId',
        name: '/lists/entity-good-approval/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/entity-good-approval/EntitygoodapprovalRead.vue'
            ),
      },
      {
        path: '/lists/entity-relationship',
        name: '/lists/entity-relationship',
        component: () =>
          import(
            '@/views/lists/entity-relationship/EntityrelationshipList.vue'
            ),
      },
      {
        path: '/lists/entity-relationship/:rId',
        name: '/lists/entity-relationship/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/entity-relationship/EntityrelationshipRead.vue'
            ),
      },
      {
        path: '/lists/external-producer',
        name: '/lists/external-producer',
        component: () =>
          import(
            '@/views/lists/external-producer/ExternalproducerList.vue'
            ),
      },
      {
        path: '/lists/external-producer/:rId',
        name: '/lists/external-producer/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/external-producer/ExternalproducerRead.vue'
            ),
      },
      {
        path: '/lists/good',
        name: '/lists/good',
        component: () =>
          import(
            '@/views/lists/good/GoodList.vue'
            ),
      },
      {
        path: '/lists/good/:rId',
        name: '/lists/good/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/good/GoodRead.vue'
            ),
      },
      {
        path: '/lists/instance-no',
        name: '/lists/instance-no',
        component: () =>
          import(
            '@/views/lists/instance-no/InstancenoList.vue'
            ),
      },
      {
        path: '/lists/instance-no/:rId',
        name: '/lists/instance-no/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/instance-no/InstancenoRead.vue'
            ),
      },
      {
        path: '/lists/object',
        name: '/lists/object',
        component: () =>
          import(
            '@/views/lists/object/ObjectList.vue'
            ),
      },
      {
        path: '/lists/object/:rId',
        name: '/lists/object/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/object/ObjectRead.vue'
            ),
      },
      {
        path: '/lists/object-trait',
        name: '/lists/object-trait',
        component: () =>
          import(
            '@/views/lists/object-trait/ObjecttraitList.vue'
            ),
      },
      {
        path: '/lists/object-trait/:rId',
        name: '/lists/object-trait/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/object-trait/ObjecttraitRead.vue'
            ),
      },
      {
        path: '/lists/object-value',
        name: '/lists/object-value',
        component: () =>
          import(
            '@/views/lists/object-value/ObjectvalueList.vue'
            ),
      },
      {
        path: '/lists/object-value/:rId',
        name: '/lists/object-value/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/object-value/ObjectvalueRead.vue'
            ),
      },
      {
        path: '/lists/password-hash',
        name: '/lists/password-hash',
        component: () =>
          import(
            '@/views/lists/password-hash/PasswordhashList.vue'
            ),
      },
      {
        path: '/lists/password-hash/:rId',
        name: '/lists/password-hash/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/password-hash/PasswordhashRead.vue'
            ),
      },
      {
        path: '/lists/product-provider',
        name: '/lists/product-provider',
        component: () =>
          import(
            '@/views/lists/product-provider/ProductproviderList.vue'
            ),
      },
      {
        path: '/lists/product-provider/:rId',
        name: '/lists/product-provider/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/product-provider/ProductproviderRead.vue'
            ),
      },
      {
        path: '/lists/query',
        name: '/lists/query',
        component: () =>
          import(
            '@/views/lists/query/QueryList.vue'
            ),
      },
      {
        path: '/lists/query/:rId',
        name: '/lists/query/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/query/QueryRead.vue'
            ),
      },
      {
        path: '/lists/query-header',
        name: '/lists/query-header',
        component: () =>
          import(
            '@/views/lists/query-header/QueryheaderList.vue'
            ),
      },
      {
        path: '/lists/query-header/:rId',
        name: '/lists/query-header/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/query-header/QueryheaderRead.vue'
            ),
      },
      {
        path: '/lists/relative',
        name: '/lists/relative',
        component: () =>
          import(
            '@/views/lists/relative/RelativeList.vue'
            ),
      },
      {
        path: '/lists/relative/:rId',
        name: '/lists/relative/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/relative/RelativeRead.vue'
            ),
      },
      {
        path: '/lists/requirement',
        name: '/lists/requirement',
        component: () =>
          import(
            '@/views/lists/requirement/RequirementList.vue'
            ),
      },
      {
        path: '/lists/requirement/:rId',
        name: '/lists/requirement/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/requirement/RequirementRead.vue'
            ),
      },
      {
        path: '/lists/requirement-detail',
        name: '/lists/requirement-detail',
        component: () =>
          import(
            '@/views/lists/requirement-detail/RequirementdetailList.vue'
            ),
      },
      {
        path: '/lists/requirement-detail/:rId',
        name: '/lists/requirement-detail/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/requirement-detail/RequirementdetailRead.vue'
            ),
      },
      {
        path: '/lists/rule',
        name: '/lists/rule',
        component: () =>
          import(
            '@/views/lists/rule/RuleList.vue'
            ),
      },
      {
        path: '/lists/rule/:rId',
        name: '/lists/rule/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/rule/RuleRead.vue'
            ),
      },
      {
        path: '/lists/rule-action',
        name: '/lists/rule-action',
        component: () =>
          import(
            '@/views/lists/rule-action/RuleactionList.vue'
            ),
      },
      {
        path: '/lists/rule-action/:rId',
        name: '/lists/rule-action/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/rule-action/RuleactionRead.vue'
            ),
      },
      {
        path: '/lists/rule-action-datum',
        name: '/lists/rule-action-datum',
        component: () =>
          import(
            '@/views/lists/rule-action-datum/RuleactiondatumList.vue'
            ),
      },
      {
        path: '/lists/rule-action-datum/:rId',
        name: '/lists/rule-action-datum/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/rule-action-datum/RuleactiondatumRead.vue'
            ),
      },
      {
        path: '/lists/rule-config',
        name: '/lists/rule-config',
        component: () =>
          import(
            '@/views/lists/rule-config/RuleconfigList.vue'
            ),
      },
      {
        path: '/lists/rule-config/:rId',
        name: '/lists/rule-config/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/rule-config/RuleconfigRead.vue'
            ),
      },
      {
        path: '/lists/rule-entity-role',
        name: '/lists/rule-entity-role',
        component: () =>
          import(
            '@/views/lists/rule-entity-role/RuleentityroleList.vue'
            ),
      },
      {
        path: '/lists/rule-entity-role/:rId',
        name: '/lists/rule-entity-role/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/rule-entity-role/RuleentityroleRead.vue'
            ),
      },
      {
        path: '/lists/service-request',
        name: '/lists/service-request',
        component: () =>
          import(
            '@/views/lists/service-request/ServicerequestList.vue'
            ),
      },
      {
        path: '/lists/service-request/:rId',
        name: '/lists/service-request/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/service-request/ServicerequestRead.vue'
            ),
      },
      {
        path: '/lists/service-request-frequency',
        name: '/lists/service-request-frequency',
        component: () =>
          import(
            '@/views/lists/service-request-frequency/ServicerequestfrequencyList.vue'
            ),
      },
      {
        path: '/lists/service-request-frequency/:rId',
        name: '/lists/service-request-frequency/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/service-request-frequency/ServicerequestfrequencyRead.vue'
            ),
      },
      {
        path: '/lists/service-request-report',
        name: '/lists/service-request-report',
        component: () =>
          import(
            '@/views/lists/service-request-report/ServicerequestreportList.vue'
            ),
      },
      {
        path: '/lists/service-request-report/:rId',
        name: '/lists/service-request-report/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/service-request-report/ServicerequestreportRead.vue'
            ),
      },
      {
        path: '/lists/system-action',
        name: '/lists/system-action',
        component: () =>
          import(
            '@/views/lists/system-action/SystemactionList.vue'
            ),
      },
      {
        path: '/lists/system-action/:rId',
        name: '/lists/system-action/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/system-action/SystemactionRead.vue'
            ),
      },
      {
        path: '/lists/system-code',
        name: '/lists/system-code',
        component: () =>
          import(
            '@/views/lists/system-code/SystemcodeList.vue'
            ),
      },
      {
        path: '/lists/system-code/:rId',
        name: '/lists/system-code/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/system-code/SystemcodeRead.vue'
            ),
      },
      {
        path: '/lists/system-configuration',
        name: '/lists/system-configuration',
        component: () =>
          import(
            '@/views/lists/system-configuration/SystemconfigurationList.vue'
            ),
      },
      {
        path: '/lists/system-configuration/:rId',
        name: '/lists/system-configuration/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/system-configuration/SystemconfigurationRead.vue'
            ),
      },
      {
        path: '/lists/system-log',
        name: '/lists/system-log',
        component: () =>
          import(
            '@/views/lists/system-log/SystemlogList.vue'
            ),
      },
      {
        path: '/lists/system-log/:rId',
        name: '/lists/system-log/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/system-log/SystemlogRead.vue'
            ),
      },
      {
        path: '/lists/system-user',
        name: '/lists/system-user',
        component: () =>
          import(
            '@/views/lists/system-user/SystemuserList.vue'
            ),
      },
      {
        path: '/lists/system-user/:rId',
        name: '/lists/system-user/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/system-user/SystemuserRead.vue'
            ),
      },
      {
        path: '/lists/transaction',
        name: '/lists/transaction',
        component: () =>
          import(
            '@/views/lists/transaction/TransactionList.vue'
            ),
      },
      {
        path: '/lists/transaction/:rId',
        name: '/lists/transaction/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/transaction/TransactionRead.vue'
            ),
      },
      {
        path: '/lists/treatment-detail',
        name: '/lists/treatment-detail',
        component: () =>
          import(
            '@/views/lists/treatment-detail/TreatmentdetailList.vue'
            ),
      },
      {
        path: '/lists/treatment-detail/:rId',
        name: '/lists/treatment-detail/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/treatment-detail/TreatmentdetailRead.vue'
            ),
      },
      {
        path: '/lists/user-access',
        name: '/lists/user-access',
        component: () =>
          import(
            '@/views/lists/user-access/UseraccessList.vue'
            ),
      },
      {
        path: '/lists/user-access/:rId',
        name: '/lists/user-access/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/user-access/UseraccessRead.vue'
            ),
      },
      {
        path: '/lists/user-configuration',
        name: '/lists/user-configuration',
        component: () =>
          import(
            '@/views/lists/user-configuration/UserconfigurationList.vue'
            ),
      },
      {
        path: '/lists/user-configuration/:rId',
        name: '/lists/user-configuration/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/user-configuration/UserconfigurationRead.vue'
            ),
      },
      {
        path: '/lists/user-device',
        name: '/lists/user-device',
        component: () =>
          import(
            '@/views/lists/user-device/UserdeviceList.vue'
            ),
      },
      {
        path: '/lists/user-device/:rId',
        name: '/lists/user-device/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/user-device/UserdeviceRead.vue'
            ),
      },
      {
        path: '/lists/user-role',
        name: '/lists/user-role',
        component: () =>
          import(
            '@/views/lists/user-role/UserroleList.vue'
            ),
      },
      {
        path: '/lists/user-role/:rId',
        name: '/lists/user-role/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/user-role/UserroleRead.vue'
            ),
      },
      {
        path: '/lists/user-role-access',
        name: '/lists/user-role-access',
        component: () =>
          import(
            '@/views/lists/user-role-access/UserroleaccessList.vue'
            ),
      },
      {
        path: '/lists/user-role-access/:rId',
        name: '/lists/user-role-access/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/user-role-access/UserroleaccessRead.vue'
            ),
      },
      {
        path: '/lists/website-producer-registration',
        name: '/lists/website-producer-registration',
        component: () =>
          import(
            '@/views/lists/website-producer-registration/WebsiteProducerRegistrationList.vue'
            ),
      },
      {
        path: '/lists/website-producer-registration/:rId',
        name: '/lists/website-producer-registration/:rId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/website-producer-registration/WebsiteProducerRegistrationRead.vue'
            ),
      },

      //
      // {
      //   path: '/lists/providers',
      //   name: '/lists/providers',
      //   component: () =>
      //     import(
      //       '@/views/lists/provider-groups/ListsProviderGroups.vue'
      //       ),
      // },
      // {
      //   path: '/lists/providers/:cId',
      //   name: '/lists/providers/:cId',
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "/all-content" */ '@/views/lists/provider-groups/ListsProviderGroupsRead.vue'
      //       ),
      // },
      // {
      //   path: '/lists/customers',
      //   name: '/lists/customers',
      //   component: () =>
      //     import(
      //       '@/views/lists/customer-groups/ListsCustomerGroups.vue'
      //       ),
      // },
      // {
      //   path: '/lists/customers/:cId',
      //   name: '/lists/customers/:cId',
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "/all-content" */ '@/views/lists/customer-groups/ListsCustomerGroupsRead.vue'
      //       ),
      // },
      // {
      //   path: '/lists/events',
      //   name: '/lists/events',
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "/all-content" */ '@/views/lists/events/ListsEvents.vue'
      //       ),
      // },
      // {
      //   path: '/lists/events/:cId',
      //   name: '/lists/events/:cId',
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "/all-content" */ '@/views/lists/events/ListsEventsRead.vue'
      //       ),
      // },
      {
        path: '/menu',
        name: 'menu',
        component: () => import('../views/MenuView.vue'),
      },
    ],
  },
  {
    path: '/account',
    name: '/account',
    redirect: '/account/introduction',
    component: () =>
      import(
        /* webpackChunkName: "/all-content" */ '../views/MenuView.vue'
        ),
    children: [],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // extendRoutes: setupLayouts,
})

export default router
