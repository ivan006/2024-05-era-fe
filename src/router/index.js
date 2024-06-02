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
        path: '/lists/addresses',
        name: '/lists/addresses',
        component: () => import('@/views/lists/addresses/AddressList.vue'),
      },
      {
        path: '/lists/addresses/:rId',
        name: '/lists/addresses/:rId',
        component: () => import('@/views/lists/addresses/AddressRead.vue'),
      },
      {
        path: '/lists/attachments',
        name: '/lists/attachments',
        component: () => import('@/views/lists/attachments/AttachmentList.vue'),
      },
      {
        path: '/lists/attachments/:rId',
        name: '/lists/attachments/:rId',
        component: () => import('@/views/lists/attachments/AttachmentRead.vue'),
      },
      {
        path: '/lists/audits',
        name: '/lists/audits',
        component: () => import('@/views/lists/audits/AuditList.vue'),
      },
      {
        path: '/lists/audits/:rId',
        name: '/lists/audits/:rId',
        component: () => import('@/views/lists/audits/AuditRead.vue'),
      },
      {
        path: '/lists/banks',
        name: '/lists/banks',
        component: () => import('@/views/lists/banks/BankList.vue'),
      },
      {
        path: '/lists/banks/:rId',
        name: '/lists/banks/:rId',
        component: () => import('@/views/lists/banks/BankRead.vue'),
      },
      {
        path: '/lists/communications',
        name: '/lists/communications',
        component: () => import('@/views/lists/communications/CommunicationList.vue'),
      },
      {
        path: '/lists/communications/:rId',
        name: '/lists/communications/:rId',
        component: () => import('@/views/lists/communications/CommunicationRead.vue'),
      },
      {
        path: '/lists/contact-numbers',
        name: '/lists/contact-numbers',
        component: () => import('@/views/lists/contact-numbers/ContactNumberList.vue'),
      },
      {
        path: '/lists/contact-numbers/:rId',
        name: '/lists/contact-numbers/:rId',
        component: () => import('@/views/lists/contact-numbers/ContactNumberRead.vue'),
      },
      {
        path: '/lists/crms',
        name: '/lists/crms',
        component: () => import('@/views/lists/crms/CrmList.vue'),
      },
      {
        path: '/lists/crms/:rId',
        name: '/lists/crms/:rId',
        component: () => import('@/views/lists/crms/CrmRead.vue'),
      },
      {
        path: '/lists/documents',
        name: '/lists/documents',
        component: () => import('@/views/lists/documents/DocumentList.vue'),
      },
      {
        path: '/lists/documents/:rId',
        name: '/lists/documents/:rId',
        component: () => import('@/views/lists/documents/DocumentRead.vue'),
      },
      {
        path: '/lists/document-details',
        name: '/lists/document-details',
        component: () => import('@/views/lists/document-details/DocumentDetailList.vue'),
      },
      {
        path: '/lists/document-details/:rId',
        name: '/lists/document-details/:rId',
        component: () => import('@/views/lists/document-details/DocumentDetailRead.vue'),
      },
      {
        path: '/lists/domain-users',
        name: '/lists/domain-users',
        component: () => import('@/views/lists/domain-users/DomainUserList.vue'),
      },
      {
        path: '/lists/domain-users/:rId',
        name: '/lists/domain-users/:rId',
        component: () => import('@/views/lists/domain-users/DomainUserRead.vue'),
      },
      {
        path: '/lists/dummies',
        name: '/lists/dummies',
        component: () => import('@/views/lists/dummies/DummyList.vue'),
      },
      {
        path: '/lists/dummies/:rId',
        name: '/lists/dummies/:rId',
        component: () => import('@/views/lists/dummies/DummyRead.vue'),
      },
      {
        path: '/lists/emails',
        name: '/lists/emails',
        component: () => import('@/views/lists/emails/EmailList.vue'),
      },
      {
        path: '/lists/emails/:rId',
        name: '/lists/emails/:rId',
        component: () => import('@/views/lists/emails/EmailRead.vue'),
      },
      {
        path: '/lists/entities',
        name: '/lists/entities',
        component: () => import('@/views/lists/entities/EntityList.vue'),
      },
      {
        path: '/lists/entities/:rId',
        name: '/lists/entities/:rId',
        component: () => import('@/views/lists/entities/EntityRead.vue'),
      },
      {
        path: '/lists/entity-audits',
        name: '/lists/entity-audits',
        component: () => import('@/views/lists/entity-audits/EntityAuditList.vue'),
      },
      {
        path: '/lists/entity-audits/:rId',
        name: '/lists/entity-audits/:rId',
        component: () => import('@/views/lists/entity-audits/EntityAuditRead.vue'),
      },
      {
        path: '/lists/entity-events',
        name: '/lists/entity-events',
        component: () => import('@/views/lists/entity-events/EntityEventList.vue'),
      },
      {
        path: '/lists/entity-events/:rId',
        name: '/lists/entity-events/:rId',
        component: () => import('@/views/lists/entity-events/EntityEventRead.vue'),
      },
      {
        path: '/lists/entity-goods',
        name: '/lists/entity-goods',
        component: () => import('@/views/lists/entity-goods/EntityGoodList.vue'),
      },
      {
        path: '/lists/entity-goods/:rId',
        name: '/lists/entity-goods/:rId',
        component: () => import('@/views/lists/entity-goods/EntityGoodRead.vue'),
      },
      {
        path: '/lists/entity-good-approvals',
        name: '/lists/entity-good-approvals',
        component: () => import('@/views/lists/entity-good-approvals/EntityGoodApprovalList.vue'),
      },
      {
        path: '/lists/entity-good-approvals/:rId',
        name: '/lists/entity-good-approvals/:rId',
        component: () => import('@/views/lists/entity-good-approvals/EntityGoodApprovalRead.vue'),
      },
      {
        path: '/lists/entity-relationships',
        name: '/lists/entity-relationships',
        component: () => import('@/views/lists/entity-relationships/EntityRelationshipList.vue'),
      },
      {
        path: '/lists/entity-relationships/:rId',
        name: '/lists/entity-relationships/:rId',
        component: () => import('@/views/lists/entity-relationships/EntityRelationshipRead.vue'),
      },
      {
        path: '/lists/external-producers',
        name: '/lists/external-producers',
        component: () => import('@/views/lists/external-producers/ExternalProducerList.vue'),
      },
      {
        path: '/lists/external-producers/:rId',
        name: '/lists/external-producers/:rId',
        component: () => import('@/views/lists/external-producers/ExternalProducerRead.vue'),
      },
      {
        path: '/lists/goods',
        name: '/lists/goods',
        component: () => import('@/views/lists/goods/GoodList.vue'),
      },
      {
        path: '/lists/goods/:rId',
        name: '/lists/goods/:rId',
        component: () => import('@/views/lists/goods/GoodRead.vue'),
      },
      {
        path: '/lists/instance-nos',
        name: '/lists/instance-nos',
        component: () => import('@/views/lists/instance-nos/InstanceNoList.vue'),
      },
      {
        path: '/lists/instance-nos/:rId',
        name: '/lists/instance-nos/:rId',
        component: () => import('@/views/lists/instance-nos/InstanceNoRead.vue'),
      },
      {
        path: '/lists/migration-s',
        name: '/lists/migration-s',
        component: () => import('@/views/lists/migration-s/MigrationList.vue'),
      },
      {
        path: '/lists/migration-s/:rId',
        name: '/lists/migration-s/:rId',
        component: () => import('@/views/lists/migration-s/MigrationRead.vue'),
      },
      {
        path: '/lists/objects',
        name: '/lists/objects',
        component: () => import('@/views/lists/objects/ObjectList.vue'),
      },
      {
        path: '/lists/objects/:rId',
        name: '/lists/objects/:rId',
        component: () => import('@/views/lists/objects/ObjectRead.vue'),
      },
      {
        path: '/lists/object-traits',
        name: '/lists/object-traits',
        component: () => import('@/views/lists/object-traits/ObjectTraitList.vue'),
      },
      {
        path: '/lists/object-traits/:rId',
        name: '/lists/object-traits/:rId',
        component: () => import('@/views/lists/object-traits/ObjectTraitRead.vue'),
      },
      {
        path: '/lists/object-values',
        name: '/lists/object-values',
        component: () => import('@/views/lists/object-values/ObjectValueList.vue'),
      },
      {
        path: '/lists/object-values/:rId',
        name: '/lists/object-values/:rId',
        component: () => import('@/views/lists/object-values/ObjectValueRead.vue'),
      },
      {
        path: '/lists/password-hashes',
        name: '/lists/password-hashes',
        component: () => import('@/views/lists/password-hashes/PasswordHashList.vue'),
      },
      {
        path: '/lists/password-hashes/:rId',
        name: '/lists/password-hashes/:rId',
        component: () => import('@/views/lists/password-hashes/PasswordHashRead.vue'),
      },
      {
        path: '/lists/product-providers',
        name: '/lists/product-providers',
        component: () => import('@/views/lists/product-providers/ProductProviderList.vue'),
      },
      {
        path: '/lists/product-providers/:rId',
        name: '/lists/product-providers/:rId',
        component: () => import('@/views/lists/product-providers/ProductProviderRead.vue'),
      },
      {
        path: '/lists/queries',
        name: '/lists/queries',
        component: () => import('@/views/lists/queries/QueryList.vue'),
      },
      {
        path: '/lists/queries/:rId',
        name: '/lists/queries/:rId',
        component: () => import('@/views/lists/queries/QueryRead.vue'),
      },
      {
        path: '/lists/query-headers',
        name: '/lists/query-headers',
        component: () => import('@/views/lists/query-headers/QueryHeaderList.vue'),
      },
      {
        path: '/lists/query-headers/:rId',
        name: '/lists/query-headers/:rId',
        component: () => import('@/views/lists/query-headers/QueryHeaderRead.vue'),
      },
      {
        path: '/lists/relatives',
        name: '/lists/relatives',
        component: () => import('@/views/lists/relatives/RelativeList.vue'),
      },
      {
        path: '/lists/relatives/:rId',
        name: '/lists/relatives/:rId',
        component: () => import('@/views/lists/relatives/RelativeRead.vue'),
      },
      {
        path: '/lists/requirements',
        name: '/lists/requirements',
        component: () => import('@/views/lists/requirements/RequirementList.vue'),
      },
      {
        path: '/lists/requirements/:rId',
        name: '/lists/requirements/:rId',
        component: () => import('@/views/lists/requirements/RequirementRead.vue'),
      },
      {
        path: '/lists/requirement-details',
        name: '/lists/requirement-details',
        component: () => import('@/views/lists/requirement-details/RequirementDetailList.vue'),
      },
      {
        path: '/lists/requirement-details/:rId',
        name: '/lists/requirement-details/:rId',
        component: () => import('@/views/lists/requirement-details/RequirementDetailRead.vue'),
      },
      {
        path: '/lists/rules',
        name: '/lists/rules',
        component: () => import('@/views/lists/rules/RuleList.vue'),
      },
      {
        path: '/lists/rules/:rId',
        name: '/lists/rules/:rId',
        component: () => import('@/views/lists/rules/RuleRead.vue'),
      },
      {
        path: '/lists/rule-actions',
        name: '/lists/rule-actions',
        component: () => import('@/views/lists/rule-actions/RuleActionList.vue'),
      },
      {
        path: '/lists/rule-actions/:rId',
        name: '/lists/rule-actions/:rId',
        component: () => import('@/views/lists/rule-actions/RuleActionRead.vue'),
      },
      {
        path: '/lists/rule-action-datas',
        name: '/lists/rule-action-datas',
        component: () => import('@/views/lists/rule-action-datas/RuleActionDatumList.vue'),
      },
      {
        path: '/lists/rule-action-datas/:rId',
        name: '/lists/rule-action-datas/:rId',
        component: () => import('@/views/lists/rule-action-datas/RuleActionDatumRead.vue'),
      },
      {
        path: '/lists/rule-configs',
        name: '/lists/rule-configs',
        component: () => import('@/views/lists/rule-configs/RuleConfigList.vue'),
      },
      {
        path: '/lists/rule-configs/:rId',
        name: '/lists/rule-configs/:rId',
        component: () => import('@/views/lists/rule-configs/RuleConfigRead.vue'),
      },
      {
        path: '/lists/rule-entity-roles',
        name: '/lists/rule-entity-roles',
        component: () => import('@/views/lists/rule-entity-roles/RuleEntityRoleList.vue'),
      },
      {
        path: '/lists/rule-entity-roles/:rId',
        name: '/lists/rule-entity-roles/:rId',
        component: () => import('@/views/lists/rule-entity-roles/RuleEntityRoleRead.vue'),
      },
      {
        path: '/lists/service-requests',
        name: '/lists/service-requests',
        component: () => import('@/views/lists/service-requests/ServiceRequestList.vue'),
      },
      {
        path: '/lists/service-requests/:rId',
        name: '/lists/service-requests/:rId',
        component: () => import('@/views/lists/service-requests/ServiceRequestRead.vue'),
      },
      {
        path: '/lists/service-request-frequencies',
        name: '/lists/service-request-frequencies',
        component: () => import('@/views/lists/service-request-frequencies/ServiceRequestFrequencyList.vue'),
      },
      {
        path: '/lists/service-request-frequencies/:rId',
        name: '/lists/service-request-frequencies/:rId',
        component: () => import('@/views/lists/service-request-frequencies/ServiceRequestFrequencyRead.vue'),
      },
      {
        path: '/lists/service-request-reports',
        name: '/lists/service-request-reports',
        component: () => import('@/views/lists/service-request-reports/ServiceRequestReportList.vue'),
      },
      {
        path: '/lists/service-request-reports/:rId',
        name: '/lists/service-request-reports/:rId',
        component: () => import('@/views/lists/service-request-reports/ServiceRequestReportRead.vue'),
      },
      {
        path: '/lists/system-actions',
        name: '/lists/system-actions',
        component: () => import('@/views/lists/system-actions/SystemActionList.vue'),
      },
      {
        path: '/lists/system-actions/:rId',
        name: '/lists/system-actions/:rId',
        component: () => import('@/views/lists/system-actions/SystemActionRead.vue'),
      },
      {
        path: '/lists/system-codes',
        name: '/lists/system-codes',
        component: () => import('@/views/lists/system-codes/SystemCodeList.vue'),
      },
      {
        path: '/lists/system-codes/:rId',
        name: '/lists/system-codes/:rId',
        component: () => import('@/views/lists/system-codes/SystemCodeRead.vue'),
      },
      {
        path: '/lists/system-configurations',
        name: '/lists/system-configurations',
        component: () => import('@/views/lists/system-configurations/SystemConfigurationList.vue'),
      },
      {
        path: '/lists/system-configurations/:rId',
        name: '/lists/system-configurations/:rId',
        component: () => import('@/views/lists/system-configurations/SystemConfigurationRead.vue'),
      },
      {
        path: '/lists/system-logs',
        name: '/lists/system-logs',
        component: () => import('@/views/lists/system-logs/SystemLogList.vue'),
      },
      {
        path: '/lists/system-logs/:rId',
        name: '/lists/system-logs/:rId',
        component: () => import('@/views/lists/system-logs/SystemLogRead.vue'),
      },
      {
        path: '/lists/system-users',
        name: '/lists/system-users',
        component: () => import('@/views/lists/system-users/SystemUserList.vue'),
      },
      {
        path: '/lists/system-users/:rId',
        name: '/lists/system-users/:rId',
        component: () => import('@/views/lists/system-users/SystemUserRead.vue'),
      },
      {
        path: '/lists/transactions',
        name: '/lists/transactions',
        component: () => import('@/views/lists/transactions/TransactionList.vue'),
      },
      {
        path: '/lists/transactions/:rId',
        name: '/lists/transactions/:rId',
        component: () => import('@/views/lists/transactions/TransactionRead.vue'),
      },
      {
        path: '/lists/treatment-details',
        name: '/lists/treatment-details',
        component: () => import('@/views/lists/treatment-details/TreatmentDetailList.vue'),
      },
      {
        path: '/lists/treatment-details/:rId',
        name: '/lists/treatment-details/:rId',
        component: () => import('@/views/lists/treatment-details/TreatmentDetailRead.vue'),
      },
      {
        path: '/lists/user-accesses',
        name: '/lists/user-accesses',
        component: () => import('@/views/lists/user-accesses/UserAccessList.vue'),
      },
      {
        path: '/lists/user-accesses/:rId',
        name: '/lists/user-accesses/:rId',
        component: () => import('@/views/lists/user-accesses/UserAccessRead.vue'),
      },
      {
        path: '/lists/user-configurations',
        name: '/lists/user-configurations',
        component: () => import('@/views/lists/user-configurations/UserConfigurationList.vue'),
      },
      {
        path: '/lists/user-configurations/:rId',
        name: '/lists/user-configurations/:rId',
        component: () => import('@/views/lists/user-configurations/UserConfigurationRead.vue'),
      },
      {
        path: '/lists/user-devices',
        name: '/lists/user-devices',
        component: () => import('@/views/lists/user-devices/UserDeviceList.vue'),
      },
      {
        path: '/lists/user-devices/:rId',
        name: '/lists/user-devices/:rId',
        component: () => import('@/views/lists/user-devices/UserDeviceRead.vue'),
      },
      {
        path: '/lists/user-roles',
        name: '/lists/user-roles',
        component: () => import('@/views/lists/user-roles/UserRoleList.vue'),
      },
      {
        path: '/lists/user-roles/:rId',
        name: '/lists/user-roles/:rId',
        component: () => import('@/views/lists/user-roles/UserRoleRead.vue'),
      },
      {
        path: '/lists/user-role-accesses',
        name: '/lists/user-role-accesses',
        component: () => import('@/views/lists/user-role-accesses/UserRoleAccessList.vue'),
      },
      {
        path: '/lists/user-role-accesses/:rId',
        name: '/lists/user-role-accesses/:rId',
        component: () => import('@/views/lists/user-role-accesses/UserRoleAccessRead.vue'),
      },
      {
        path: '/lists/website-producer-registrations',
        name: '/lists/website-producer-registrations',
        component: () => import('@/views/lists/website-producer-registrations/WebsiteProducerRegistrationList.vue'),
      },
      {
        path: '/lists/website-producer-registrations/:rId',
        name: '/lists/website-producer-registrations/:rId',
        component: () => import('@/views/lists/website-producer-registrations/WebsiteProducerRegistrationRead.vue'),
      }
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
