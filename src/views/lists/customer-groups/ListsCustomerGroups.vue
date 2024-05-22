<template>
    <div>
        <v-card class="pa-4">
            <SuperTable
                :model="superTableModel"
                :canEdit="
                    !!this.$store.getters['entities/login-sessions/all']()[0]
                "
                @update:modelValue="openRecord"
                :canCreate="true"
            />
        </v-card>
    </div>
</template>

<script>
import DBCustomerGroup from '@/models/DBCustomerGroup'
import { SuperTable } from 'quicklists-vue-orm-ui'
import router from '@/router'

export default {
    name: 'ListsCustomerGroups',
    components: { SuperTable },
    computed: {
        superTableModel() {
            return DBCustomerGroup
        },
    },
    methods: {
        openRecord(e) {
            router.push({
                name: '/lists/customers/:cId',
                params: {
                    cId: e.id,
                },
            })
        },
    },
}
</script>

<style scoped></style>
