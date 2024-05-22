<template>
    <div>
        <v-card class="pa-4 mt-4">
            <SuperTable
                :user="user"
                :showMap="true"
                :model="superTableModel"
                :canEdit="
                    !!this.$store.getters['entities/login-sessions/all']()[0]
                "
                @update:modelValue="openRecord"
                :displayMapField="false"
                :canCreate="canCreate"
                canCreateDescription="Please first set your creator settings"
            />
        </v-card>
        <!--    <home-plans></home-plans>-->
        <!--    <home-hero></home-hero>-->
        <!--    <home-details></home-details>-->
    </div>
</template>

<script>
// import HomeHero from "@/components/HomeHero";
// import HomeDetails from "@/components/HomeDetails";
// import HomePlans from "@/components/HomePlans";
// import MapComponent from '@/views/ListsMode/ListsMapComponent.vue'
import { SuperTable } from 'quicklists-vue-orm-ui'
import DBEvent from '@/models/DBEvent'
import router from '@/router'
import LoginSession from '@/models/LoginSession'

export default {
    name: 'ListsEvents',
    components: {
        SuperTable,
        // HomeHero,
        // HomeDetails,
        // HomePlans,
        // MapComponent,
    },

    computed: {
        superTableModel() {
            return DBEvent
        },
        loginSession() {
            return LoginSession.query().withAllRecursive().first()
        },
        canCreate() {
            return !!this.loginSession?.enabled_provider_group_id
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
    methods: {
        openRecord(e) {
            router.push({
                name: '/lists/events/:cId',
                params: {
                    cId: e.id,
                },
            })
        },
    },
}
</script>
