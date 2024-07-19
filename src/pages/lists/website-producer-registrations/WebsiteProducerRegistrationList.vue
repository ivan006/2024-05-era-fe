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
import WebsiteProducerRegistration from 'src/models/WebsiteProducerRegistration'
import router from 'src/router'

export default {
    name: 'WebsiteProducerRegistration-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return WebsiteProducerRegistration
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
            //    name: '/lists/website-producer-registrations/:rId',
            //    params: {
            //        rId: e.id,
            //    },
            //})
        },
    },
}
</script>
