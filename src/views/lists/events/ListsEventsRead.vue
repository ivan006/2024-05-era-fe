<template>
    <div>
        <v-card class="pa-4 mt-4">
            <SuperRecord
                :model="superRecordModel"
                :id="+$route.params.cId"
                :displayMapField="true"
                :user="user"
            >
                <template #rsvps>
                    <CreateRsvp
                        :currentOpenRecord="{
                            item: item,
                            model: DBRSVPModel,
                        }"
                        :model="DBRSVPModel"
                    />
                </template>
            </SuperRecord>
        </v-card>
    </div>
</template>

<script>
import { SuperRecord } from 'quicklists-vue-orm-ui'
import DBEvent from '@/models/DBEvent'
import CreateRsvp from '@/views/lists/provider-groups/CreateRsvp.vue'
import LoginSession from '@/models/LoginSession'
import DBRSVP from '@/models/DBRSVP'

export default {
    name: 'ListsEventsRead',
    components: { CreateRsvp, SuperRecord },
    computed: {
        superRecordModel() {
            return DBEvent
        },
        loginSession() {
            return LoginSession.query().withAllRecursive().first()
        },
        DBRSVPModel() {
            return DBRSVP
        },
        item() {
            const result = DBEvent.query()
                .whereId(+this.$route.params.cId)
                .withAll()
                .get()[0]
            return result
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
