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
import DBProviderGroup from '@/models/DBProviderGroup'
import { SuperTable } from 'quicklists-vue-orm-ui'
import router from '@/router'

export default {
    name: 'ListsProviderGroups',
    components: { SuperTable },
    computed: {
        superTableModel() {
            return DBProviderGroup
        },
    },
    methods: {
        openRecord(e) {
            router.push({
                name: '/lists/providers/:rId',
                params: {
                    rId: e.Id,
                },
            })
        },
    },
}
</script>

<style scoped></style>
