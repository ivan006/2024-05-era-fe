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
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <template v-for="link in links" :key="link.text">
          <q-item v-if="!link.subLinks" :to="link.to" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-expansion-item v-else :label="link.text" :icon="link.icon">
            <q-list>
              <q-item v-for="subLink in link.subLinks" :key="subLink.text" :to="subLink.to" clickable>
                <q-item-section avatar>
                  <q-icon :name="subLink.icon" />
                </q-item-section>
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

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'MainLayout'
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const links = [
  {
    icon: 'home',
    text: 'Home',
    to: '/',
  },
  {
    icon: 'list',
    text: 'These ones tho',
    subLinks: [
      { icon: 'inventory', text: 'Entity Goods (Deps. Items)', to: '/lists/entity-goods' },
      { icon: 'approval', text: 'Entity Good Approvals (Deps.)', to: '/lists/entity-good-approvals' },
      { icon: 'category', text: 'Goods (Waste Types)', to: '/lists/goods' },
      { icon: 'request_quote', text: 'Service Requests (Withd. Contracts)', to: '/lists/service-requests' },
      { icon: 'date_range', text: 'Service Request Frequencies', to: '/lists/service-request-frequencies' },
      { icon: 'report', text: 'Service Request Reports (Withd.)', to: '/lists/service-request-reports' },
      { icon: 'query_builder', text: 'Queries', to: '/lists/queries' },
      { icon: 'header', text: 'Query Headers', to: '/lists/query-headers' },
      { icon: 'treatment', text: 'Treatment Details (Withd. Items)', to: '/lists/treatment-details' },
    ],
  },
  {
    icon: 'format_list_bulleted',
    text: 'Lists',
    subLinks: [
      { icon: 'place', text: 'Addresses', to: '/lists/addresses' },
      { icon: 'attachment', text: 'Attachments', to: '/lists/attachments' },
      { icon: 'fact_check', text: 'Audits', to: '/lists/audits' },
      { icon: 'account_balance', text: 'Banks', to: '/lists/banks' },
      { icon: 'connect_without_contact', text: 'Communications', to: '/lists/communications' },
      { icon: 'phone', text: 'Contact Numbers', to: '/lists/contact-numbers' },
      { icon: 'crm', text: 'Crms', to: '/lists/crms' },
      { icon: 'description', text: 'Documents', to: '/lists/documents' },
      { icon: 'document_scanner', text: 'Document Details', to: '/lists/document-details' },
      { icon: 'people', text: 'Domain Users', to: '/lists/domain-users' },
      { icon: 'dvr', text: 'Dummies', to: '/lists/dummies' },
      { icon: 'email', text: 'Emails', to: '/lists/emails' },
      { icon: 'business', text: 'Entities', to: '/lists/entities' },
      { icon: 'audit', text: 'Entity Audits', to: '/lists/entity-audits' },
      { icon: 'event', text: 'Entity Events', to: '/lists/entity-events' },
      { icon: 'device_hub', text: 'Entity Relationships', to: '/lists/entity-relationships' },
      { icon: 'external_link', text: 'External Producers', to: '/lists/external-producers' },
      { icon: 'format_list_numbered', text: 'Instance Nos', to: '/lists/instance-nos' },
      { icon: 'migration', text: 'Migration S', to: '/lists/migration-s' },
      { icon: 'objects', text: 'Objects', to: '/lists/objects' },
      { icon: 'traits', text: 'Object Traits', to: '/lists/object-traits' },
      { icon: 'values', text: 'Object Values', to: '/lists/object-values' },
      { icon: 'password', text: 'Password Hashes', to: '/lists/password-hashes' },
      { icon: 'providers', text: 'Product Providers', to: '/lists/product-providers' },
      { icon: 'family_restroom', text: 'Relatives', to: '/lists/relatives' },
      { icon: 'requirement', text: 'Requirements', to: '/lists/requirements' },
      { icon: 'requirement_detail', text: 'Requirement Details', to: '/lists/requirement-details' },
      { icon: 'rule', text: 'Rules', to: '/lists/rules' },
      { icon: 'rule_action', text: 'Rule Actions', to: '/lists/rule-actions' },
      { icon: 'rule_action_data', text: 'Rule Action Datas', to: '/lists/rule-action-datas' },
      { icon: 'rule_config', text: 'Rule Configs', to: '/lists/rule-configs' },
      { icon: 'role', text: 'Rule Entity Roles', to: '/lists/rule-entity-roles' },
      { icon: 'system_update', text: 'System Actions', to: '/lists/system-actions' },
      { icon: 'code', text: 'System Codes', to: '/lists/system-codes' },
      { icon: 'settings', text: 'System Configurations', to: '/lists/system-configurations' },
      { icon: 'bug_report', text: 'System Logs', to: '/lists/system-logs' },
      { icon: 'admin_panel_settings', text: 'System Users', to: '/lists/system-users' },
      { icon: 'paid', text: 'Transactions', to: '/lists/transactions' },
      { icon: 'accessibility', text: 'User Accesses', to: '/lists/user-accesses' },
      { icon: 'user_config', text: 'User Configurations', to: '/lists/user-configurations' },
      { icon: 'devices', text: 'User Devices', to: '/lists/user-devices' },
      { icon: 'security', text: 'User Roles', to: '/lists/user-roles' },
      { icon: 'security', text: 'User Role Accesses', to: '/lists/user-role-accesses' },
      { icon: 'web', text: 'Website Producer Registrations', to: '/lists/website-producer-registrations' },
    ],
  },
];
</script>

<style scoped>
.day-cell {
  cursor: pointer;
}
</style>
