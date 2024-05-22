<template>
    <div>
        <v-card class="pa-4 mt-4">
            <SuperRecord
                :model="superRecordModel"
                :id="+$route.params.rId"
                :displayMapField="true"
                :user="user"
            >
            </SuperRecord>
        </v-card>
    </div>
</template>

<script>
import { SuperRecord } from 'quicklists-vue-orm-ui'
import Relative from '@/models/Relative'

export default {
    name: 'Relative-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Relative
        },
        user() {
          let result = {}
          if (this.$store.getters['entities/login-sessions/all']()?.[0]){
            const id = this.$store.getters['entities/login-sessions/all']()?.[0]?.$id
            result = this.$store.state.entities['login-sessions'].data[id]?.user
          }
          return result
        },
    },
}
</script>

<style scoped></style>