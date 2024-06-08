import { defineAsyncComponent } from 'vue';

const routes = [
  {
    path: '/',
    component: defineAsyncComponent(() => import('layouts/MainLayout.vue')),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      {
        path: '/sign-in-up',
        name: '/sign-in-up',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ 'src/pages/EmptyLayout.vue'
            ),
        children: [
          {
            path: '/sign-in',
            name: '/sign-in',
            component: defineAsyncComponent(() => import('src/pages/SigninView.vue')),
          },
          {
            path: '/join',
            name: '/join',
            component: defineAsyncComponent(() => import('src/pages/JoinView.vue')),
          },
        ],
      },
      {
        path: 'lists',
        component: defineAsyncComponent(() => import('layouts/EmptyLayout.vue')),
        children: [
          {
            path: '/lists/addresses',
            name: '/lists/addresses',
            component: defineAsyncComponent(() => import('src/pages/lists/addresses/AddressList.vue')),
          },
          {
            path: '/lists/addresses/:rId',
            name: '/lists/addresses/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/addresses/AddressRead.vue')),
          },
          {
            path: '/lists/attachments',
            name: '/lists/attachments',
            component: defineAsyncComponent(() => import('src/pages/lists/attachments/AttachmentList.vue')),
          },
          {
            path: '/lists/attachments/:rId',
            name: '/lists/attachments/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/attachments/AttachmentRead.vue')),
          },
          {
            path: '/lists/audits',
            name: '/lists/audits',
            component: defineAsyncComponent(() => import('src/pages/lists/audits/AuditList.vue')),
          },
          {
            path: '/lists/audits/:rId',
            name: '/lists/audits/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/audits/AuditRead.vue')),
          },
          {
            path: '/lists/banks',
            name: '/lists/banks',
            component: defineAsyncComponent(() => import('src/pages/lists/banks/BankList.vue')),
          },
          {
            path: '/lists/banks/:rId',
            name: '/lists/banks/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/banks/BankRead.vue')),
          },
          {
            path: '/lists/communications',
            name: '/lists/communications',
            component: defineAsyncComponent(() => import('src/pages/lists/communications/CommunicationList.vue')),
          },
          {
            path: '/lists/communications/:rId',
            name: '/lists/communications/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/communications/CommunicationRead.vue')),
          },
          {
            path: '/lists/contact-numbers',
            name: '/lists/contact-numbers',
            component: defineAsyncComponent(() => import('src/pages/lists/contact-numbers/ContactNumberList.vue')),
          },
          {
            path: '/lists/contact-numbers/:rId',
            name: '/lists/contact-numbers/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/contact-numbers/ContactNumberRead.vue')),
          },
          {
            path: '/lists/crms',
            name: '/lists/crms',
            component: defineAsyncComponent(() => import('src/pages/lists/crms/CrmList.vue')),
          },
          {
            path: '/lists/crms/:rId',
            name: '/lists/crms/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/crms/CrmRead.vue')),
          },
          {
            path: '/lists/documents',
            name: '/lists/documents',
            component: defineAsyncComponent(() => import('src/pages/lists/documents/DocumentList.vue')),
          },
          {
            path: '/lists/documents/:rId',
            name: '/lists/documents/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/documents/DocumentRead.vue')),
          },
          {
            path: '/lists/document-details',
            name: '/lists/document-details',
            component: defineAsyncComponent(() => import('src/pages/lists/document-details/DocumentDetailList.vue')),
          },
          {
            path: '/lists/document-details/:rId',
            name: '/lists/document-details/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/document-details/DocumentDetailRead.vue')),
          },
          {
            path: '/lists/domain-users',
            name: '/lists/domain-users',
            component: defineAsyncComponent(() => import('src/pages/lists/domain-users/DomainUserList.vue')),
          },
          {
            path: '/lists/domain-users/:rId',
            name: '/lists/domain-users/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/domain-users/DomainUserRead.vue')),
          },
          {
            path: '/lists/dummies',
            name: '/lists/dummies',
            component: defineAsyncComponent(() => import('src/pages/lists/dummies/DummyList.vue')),
          },
          {
            path: '/lists/dummies/:rId',
            name: '/lists/dummies/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/dummies/DummyRead.vue')),
          },
          {
            path: '/lists/emails',
            name: '/lists/emails',
            component: defineAsyncComponent(() => import('src/pages/lists/emails/EmailList.vue')),
          },
          {
            path: '/lists/emails/:rId',
            name: '/lists/emails/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/emails/EmailRead.vue')),
          },
          {
            path: '/lists/entities',
            name: '/lists/entities',
            component: defineAsyncComponent(() => import('src/pages/lists/entities/EntityList.vue')),
          },
          {
            path: '/lists/entities/:rId',
            name: '/lists/entities/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/entities/EntityRead.vue')),
          },
          {
            path: '/lists/entity-audits',
            name: '/lists/entity-audits',
            component: defineAsyncComponent(() => import('src/pages/lists/entity-audits/EntityAuditList.vue')),
          },
          {
            path: '/lists/entity-audits/:rId',
            name: '/lists/entity-audits/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/entity-audits/EntityAuditRead.vue')),
          },
          {
            path: '/lists/entity-events',
            name: '/lists/entity-events',
            component: defineAsyncComponent(() => import('src/pages/lists/entity-events/EntityEventList.vue')),
          },
          {
            path: '/lists/entity-events/:rId',
            name: '/lists/entity-events/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/entity-events/EntityEventRead.vue')),
          },
          {
            path: '/lists/entity-goods',
            name: '/lists/entity-goods',
            component: defineAsyncComponent(() => import('src/pages/lists/entity-goods/EntityGoodList.vue')),
          },
          {
            path: '/lists/entity-goods/:rId',
            name: '/lists/entity-goods/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/entity-goods/EntityGoodRead.vue')),
          },
          {
            path: '/lists/entity-good-approvals',
            name: '/lists/entity-good-approvals',
            component: defineAsyncComponent(() => import('src/pages/lists/entity-good-approvals/EntityGoodApprovalList.vue')),
          },
          {
            path: '/lists/entity-good-approvals/:rId',
            name: '/lists/entity-good-approvals/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/entity-good-approvals/EntityGoodApprovalRead.vue')),
          },
          {
            path: '/lists/entity-relationships',
            name: '/lists/entity-relationships',
            component: defineAsyncComponent(() => import('src/pages/lists/entity-relationships/EntityRelationshipList.vue')),
          },
          {
            path: '/lists/entity-relationships/:rId',
            name: '/lists/entity-relationships/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/entity-relationships/EntityRelationshipRead.vue')),
          },
          {
            path: '/lists/external-producers',
            name: '/lists/external-producers',
            component: defineAsyncComponent(() => import('src/pages/lists/external-producers/ExternalProducerList.vue')),
          },
          {
            path: '/lists/external-producers/:rId',
            name: '/lists/external-producers/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/external-producers/ExternalProducerRead.vue')),
          },
          {
            path: '/lists/goods',
            name: '/lists/goods',
            component: defineAsyncComponent(() => import('src/pages/lists/goods/GoodList.vue')),
          },
          {
            path: '/lists/goods/:rId',
            name: '/lists/goods/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/goods/GoodRead.vue')),
          },
          {
            path: '/lists/instance-nos',
            name: '/lists/instance-nos',
            component: defineAsyncComponent(() => import('src/pages/lists/instance-nos/InstanceNoList.vue')),
          },
          {
            path: '/lists/instance-nos/:rId',
            name: '/lists/instance-nos/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/instance-nos/InstanceNoRead.vue')),
          },
          {
            path: '/lists/migration-s',
            name: '/lists/migration-s',
            component: defineAsyncComponent(() => import('src/pages/lists/migration-s/MigrationList.vue')),
          },
          {
            path: '/lists/migration-s/:rId',
            name: '/lists/migration-s/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/migration-s/MigrationRead.vue')),
          },
          {
            path: '/lists/objects',
            name: '/lists/objects',
            component: defineAsyncComponent(() => import('src/pages/lists/objects/ObjectList.vue')),
          },
          {
            path: '/lists/objects/:rId',
            name: '/lists/objects/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/objects/ObjectRead.vue')),
          },
          {
            path: '/lists/object-traits',
            name: '/lists/object-traits',
            component: defineAsyncComponent(() => import('src/pages/lists/object-traits/ObjectTraitList.vue')),
          },
          {
            path: '/lists/object-traits/:rId',
            name: '/lists/object-traits/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/object-traits/ObjectTraitRead.vue')),
          },
          {
            path: '/lists/object-values',
            name: '/lists/object-values',
            component: defineAsyncComponent(() => import('src/pages/lists/object-values/ObjectValueList.vue')),
          },
          {
            path: '/lists/object-values/:rId',
            name: '/lists/object-values/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/object-values/ObjectValueRead.vue')),
          },
          {
            path: '/lists/password-hashes',
            name: '/lists/password-hashes',
            component: defineAsyncComponent(() => import('src/pages/lists/password-hashes/PasswordHashList.vue')),
          },
          {
            path: '/lists/password-hashes/:rId',
            name: '/lists/password-hashes/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/password-hashes/PasswordHashRead.vue')),
          },
          {
            path: '/lists/product-providers',
            name: '/lists/product-providers',
            component: defineAsyncComponent(() => import('src/pages/lists/product-providers/ProductProviderList.vue')),
          },
          {
            path: '/lists/product-providers/:rId',
            name: '/lists/product-providers/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/product-providers/ProductProviderRead.vue')),
          },
          {
            path: '/lists/queries',
            name: '/lists/queries',
            component: defineAsyncComponent(() => import('src/pages/lists/queries/QueryList.vue')),
          },
          {
            path: '/lists/queries/:rId',
            name: '/lists/queries/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/queries/QueryRead.vue')),
          },
          {
            path: '/lists/query-headers',
            name: '/lists/query-headers',
            component: defineAsyncComponent(() => import('src/pages/lists/query-headers/QueryHeaderList.vue')),
          },
          {
            path: '/lists/query-headers/:rId',
            name: '/lists/query-headers/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/query-headers/QueryHeaderRead.vue')),
          },
          {
            path: '/lists/relatives',
            name: '/lists/relatives',
            component: defineAsyncComponent(() => import('src/pages/lists/relatives/RelativeList.vue')),
          },
          {
            path: '/lists/relatives/:rId',
            name: '/lists/relatives/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/relatives/RelativeRead.vue')),
          },
          {
            path: '/lists/requirements',
            name: '/lists/requirements',
            component: defineAsyncComponent(() => import('src/pages/lists/requirements/RequirementList.vue')),
          },
          {
            path: '/lists/requirements/:rId',
            name: '/lists/requirements/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/requirements/RequirementRead.vue')),
          },
          {
            path: '/lists/requirement-details',
            name: '/lists/requirement-details',
            component: defineAsyncComponent(() => import('src/pages/lists/requirement-details/RequirementDetailList.vue')),
          },
          {
            path: '/lists/requirement-details/:rId',
            name: '/lists/requirement-details/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/requirement-details/RequirementDetailRead.vue')),
          },
          {
            path: '/lists/rules',
            name: '/lists/rules',
            component: defineAsyncComponent(() => import('src/pages/lists/rules/RuleList.vue')),
          },
          {
            path: '/lists/rules/:rId',
            name: '/lists/rules/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/rules/RuleRead.vue')),
          },
          {
            path: '/lists/rule-actions',
            name: '/lists/rule-actions',
            component: defineAsyncComponent(() => import('src/pages/lists/rule-actions/RuleActionList.vue')),
          },
          {
            path: '/lists/rule-actions/:rId',
            name: '/lists/rule-actions/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/rule-actions/RuleActionRead.vue')),
          },
          {
            path: '/lists/rule-action-datas',
            name: '/lists/rule-action-datas',
            component: defineAsyncComponent(() => import('src/pages/lists/rule-action-datas/RuleActionDatumList.vue')),
          },
          {
            path: '/lists/rule-action-datas/:rId',
            name: '/lists/rule-action-datas/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/rule-action-datas/RuleActionDatumRead.vue')),
          },
          {
            path: '/lists/rule-configs',
            name: '/lists/rule-configs',
            component: defineAsyncComponent(() => import('src/pages/lists/rule-configs/RuleConfigList.vue')),
          },
          {
            path: '/lists/rule-configs/:rId',
            name: '/lists/rule-configs/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/rule-configs/RuleConfigRead.vue')),
          },
          {
            path: '/lists/rule-entity-roles',
            name: '/lists/rule-entity-roles',
            component: defineAsyncComponent(() => import('src/pages/lists/rule-entity-roles/RuleEntityRoleList.vue')),
          },
          {
            path: '/lists/rule-entity-roles/:rId',
            name: '/lists/rule-entity-roles/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/rule-entity-roles/RuleEntityRoleRead.vue')),
          },
          {
            path: '/lists/service-requests',
            name: '/lists/service-requests',
            component: defineAsyncComponent(() => import('src/pages/lists/service-requests/ServiceRequestList.vue')),
          },
          {
            path: '/lists/service-requests/:rId',
            name: '/lists/service-requests/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/service-requests/ServiceRequestRead.vue')),
          },
          {
            path: '/lists/service-request-frequencies',
            name: '/lists/service-request-frequencies',
            component: defineAsyncComponent(() => import('src/pages/lists/service-request-frequencies/ServiceRequestFrequencyList.vue')),
          },
          {
            path: '/lists/service-request-frequencies/:rId',
            name: '/lists/service-request-frequencies/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/service-request-frequencies/ServiceRequestFrequencyRead.vue')),
          },
          {
            path: '/lists/service-request-reports',
            name: '/lists/service-request-reports',
            component: defineAsyncComponent(() => import('src/pages/lists/service-request-reports/ServiceRequestReportList.vue')),
          },
          {
            path: '/lists/service-request-reports/:rId',
            name: '/lists/service-request-reports/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/service-request-reports/ServiceRequestReportRead.vue')),
          },
          {
            path: '/lists/system-actions',
            name: '/lists/system-actions',
            component: defineAsyncComponent(() => import('src/pages/lists/system-actions/SystemActionList.vue')),
          },
          {
            path: '/lists/system-actions/:rId',
            name: '/lists/system-actions/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/system-actions/SystemActionRead.vue')),
          },
          {
            path: '/lists/system-codes',
            name: '/lists/system-codes',
            component: defineAsyncComponent(() => import('src/pages/lists/system-codes/SystemCodeList.vue')),
          },
          {
            path: '/lists/system-codes/:rId',
            name: '/lists/system-codes/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/system-codes/SystemCodeRead.vue')),
          },
          {
            path: '/lists/system-configurations',
            name: '/lists/system-configurations',
            component: defineAsyncComponent(() => import('src/pages/lists/system-configurations/SystemConfigurationList.vue')),
          },
          {
            path: '/lists/system-configurations/:rId',
            name: '/lists/system-configurations/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/system-configurations/SystemConfigurationRead.vue')),
          },
          {
            path: '/lists/system-logs',
            name: '/lists/system-logs',
            component: defineAsyncComponent(() => import('src/pages/lists/system-logs/SystemLogList.vue')),
          },
          {
            path: '/lists/system-logs/:rId',
            name: '/lists/system-logs/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/system-logs/SystemLogRead.vue')),
          },
          {
            path: '/lists/system-users',
            name: '/lists/system-users',
            component: defineAsyncComponent(() => import('src/pages/lists/system-users/SystemUserList.vue')),
          },
          {
            path: '/lists/system-users/:rId',
            name: '/lists/system-users/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/system-users/SystemUserRead.vue')),
          },
          {
            path: '/lists/transactions',
            name: '/lists/transactions',
            component: defineAsyncComponent(() => import('src/pages/lists/transactions/TransactionList.vue')),
          },
          {
            path: '/lists/transactions/:rId',
            name: '/lists/transactions/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/transactions/TransactionRead.vue')),
          },
          {
            path: '/lists/treatment-details',
            name: '/lists/treatment-details',
            component: defineAsyncComponent(() => import('src/pages/lists/treatment-details/TreatmentDetailList.vue')),
          },
          {
            path: '/lists/treatment-details/:rId',
            name: '/lists/treatment-details/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/treatment-details/TreatmentDetailRead.vue')),
          },
          {
            path: '/lists/user-accesses',
            name: '/lists/user-accesses',
            component: defineAsyncComponent(() => import('src/pages/lists/user-accesses/UserAccessList.vue')),
          },
          {
            path: '/lists/user-accesses/:rId',
            name: '/lists/user-accesses/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/user-accesses/UserAccessRead.vue')),
          },
          {
            path: '/lists/user-configurations',
            name: '/lists/user-configurations',
            component: defineAsyncComponent(() => import('src/pages/lists/user-configurations/UserConfigurationList.vue')),
          },
          {
            path: '/lists/user-configurations/:rId',
            name: '/lists/user-configurations/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/user-configurations/UserConfigurationRead.vue')),
          },
          {
            path: '/lists/user-devices',
            name: '/lists/user-devices',
            component: defineAsyncComponent(() => import('src/pages/lists/user-devices/UserDeviceList.vue')),
          },
          {
            path: '/lists/user-devices/:rId',
            name: '/lists/user-devices/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/user-devices/UserDeviceRead.vue')),
          },
          {
            path: '/lists/user-roles',
            name: '/lists/user-roles',
            component: defineAsyncComponent(() => import('src/pages/lists/user-roles/UserRoleList.vue')),
          },
          {
            path: '/lists/user-roles/:rId',
            name: '/lists/user-roles/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/user-roles/UserRoleRead.vue')),
          },
          {
            path: '/lists/user-role-accesses',
            name: '/lists/user-role-accesses',
            component: defineAsyncComponent(() => import('src/pages/lists/user-role-accesses/UserRoleAccessList.vue')),
          },
          {
            path: '/lists/user-role-accesses/:rId',
            name: '/lists/user-role-accesses/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/user-role-accesses/UserRoleAccessRead.vue')),
          },
          {
            path: '/lists/website-producer-registrations',
            name: '/lists/website-producer-registrations',
            component: defineAsyncComponent(() => import('src/pages/lists/website-producer-registrations/WebsiteProducerRegistrationList.vue')),
          },
          {
            path: '/lists/website-producer-registrations/:rId',
            name: '/lists/website-producer-registrations/:rId',
            component: defineAsyncComponent(() => import('src/pages/lists/website-producer-registrations/WebsiteProducerRegistrationRead.vue')),
          }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
