<template>
    <div>
        <v-card class="pa-4">
            <template
                v-if="
                    this.$store.getters['entities/login-sessions/all']().length
                "
            >
                Current selected provider:
                <div class="ma-4">
                    <template v-if="provider?.id">
                        {{ provider?.id }}. {{ provider?.name }}
                    </template>
                    <template v-else> None selected </template>
                </div>
                <SuperTable
                    v-model="provider"
                    :model="superTableModel"
                    :canEdit="
                        !!this.$store.getters[
                            'entities/login-sessions/all'
                        ]()[0]
                    "
                    :forcedFilters="{
                        person_that_created_this_id: 1,
                    }"
                />
            </template>
            <template v-else>
                <LoginToAccess />
            </template>
        </v-card>
    </div>
</template>

<script>
import DBProviderGroup from '@/models/DBProviderGroup'
import LoginSession from '@/models/non-quicklist/LoginSession'
import { SuperTable } from 'quicklists-vue-orm-ui'
import router from '@/router'
import LoginToAccess from '@/views/global/LoginToAccess.vue'

export default {
    name: 'ManageProviderSelectProvider',
    components: { LoginToAccess, SuperTable },
    computed: {
        superTableModel() {
            return DBProviderGroup
        },
        provider: {
            get() {
                const loginSession = LoginSession.query().first()
                if (loginSession?.enabled_provider_group_id) {
                    return DBProviderGroup.query()
                        .whereId(loginSession?.enabled_provider_group_id)
                        .first()
                } else {
                    return null
                }
            },
            set(newValue) {
                const loginSession = LoginSession.query().first()

                LoginSession.update({
                    where: loginSession.access_token,
                    data: {
                        enabled_provider_group_id: newValue.id,
                    },
                })
                // this.LoginSession.enabled_provider_group_id = newValue.id
            },
        },
    },
    methods: {
        // selectDBProvider(item) {
        //     const session = LoginSession.query().first()
        //     if (session?.$id) {
        //         session.update({
        //             where: 1,
        //             data: { provider_id: item.id },
        //         })
        //     }
        //     this.$router
        //         .push({
        //             name: '/manage-provider/introduction',
        //             query: {},
        //         })
        //         .catch(() => {})
        // },
        openRecord(e) {
            router.push({
                name: '/Lists/providers/:cId',
                params: {
                    cId: e.id,
                },
            })
        },
    },
}
</script>

<style scoped></style>
