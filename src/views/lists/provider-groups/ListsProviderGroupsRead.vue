<template>
    <div>
        <v-card class="pa-4 mt-4">
            <SuperRecord
              :model="superRecordModel"
              :id="+$route.params.cId"
              :user="user"
            />

            <!--          canCreateDescription="First turn correspondence on"-->
        </v-card>
    </div>
</template>

<script>
import { SuperRecord } from 'quicklists-vue-orm-ui'
import DBProviderGroup from '@/models/DBProviderGroup'

export default {
    name: 'ListsProviderGroupsRead',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return DBProviderGroup
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
