<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
            <SuperTable
                :user="user"
                :showMap="true"
                :model="superTableModel"
                @update:modelValue="openRecord"
                :displayMapField="false"
            />
        </q-card>
    </div>
</template>

<script>
import { SuperTable } from 'quicklists-vue-orm-ui'
import ServiceRequest from 'src/models/ServiceRequest'
import router from 'src/router'

export default {
    name: 'ServiceRequest-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return ServiceRequest
        },
        user() {
          let result = {}
          // if (this.$store.getters['entities/login-sessions/all']()?.[0]){
          //   const id = this.$store.getters['entities/login-sessions/all']()?.[0]?.$id
          //   result = this.$store.state.entities['login-sessions'].data[id]?.user
          // }
          return result
        },
    },
    methods: {
        openRecord(e) {
            //router.push({
            //    name: '/lists/service-requests/:rId',
            //    params: {
            //        rId: e.id,
            //    },
            //})
        },
    },
}
</script>
