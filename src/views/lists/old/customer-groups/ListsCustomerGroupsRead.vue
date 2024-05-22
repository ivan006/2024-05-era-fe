<template>
    <div>
        <v-card class="pa-4 mt-4">
            <SuperRecord
              :model="superRecordModel"
              :id="+$route.params.cId"
              :user="user"
            />
        </v-card>
    </div>
</template>

<script>
import { SuperRecord } from 'quicklists-vue-orm-ui'
import DBCustomerGroup from '@/models/DBCustomerGroup'
import LoginSession from '@/models/LoginSession'

export default {
    name: 'ListsCustomerGroupsRead',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return DBCustomerGroup
        },
        loginSession() {
            return LoginSession.query().withAllRecursive().first()
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
}
</script>

<style scoped></style>
