<template>
    <div>
        <EmbededHomePage />
        <v-alert
            v-if="showWelcomeNewUser"
            color="green"
            text
            icon=""
            class="text-center"
        >
            <div>
                <v-icon color="green" size="50px">mdi-glass-cocktail</v-icon>
            </div>
            <h1>Thanks for joining!</h1>
            <div>We're excited to have you on board!</div>
            <div class="mt-2">
                <ButtonWithOpenInNewTab
                    :route="{ name: '/sign-in', params: { signup: 'true' } }"
                >
                    <v-btn color="success">Sign In</v-btn>
                    <!--            <v-btn> Sign Out </v-btn>-->
                </ButtonWithOpenInNewTab>
            </div>
        </v-alert>

        <HeroComponent>
            <template v-slot:title>
                Plan Your Child's Home Education Journey
            </template>
            <template v-slot:sub>
                Take a look around the public content of this site. Various
                providers offer exciting opportunities and events to explore.
            </template>
            <template v-slot:subsub>
                Home-Ed Community Hub: Community-focused home education.
            </template>
            <template v-slot:buttons>
                <template
                    v-if="!$store.getters['entities/login-sessions/all']()[0]"
                >
                    <ButtonWithOpenInNewTab :route="{ name: '/join' }">
                        <v-btn color="primary" large class="ma-2">
                            Sign Up
                        </v-btn>
                    </ButtonWithOpenInNewTab>
                </template>
                <v-btn
                    href="https://example.com"
                    target="_blank"
                    color="light-grey"
                    dark
                    variant="outlined"
                    large
                    class="ma-2"
                >
                    Learn More
                </v-btn>
            </template>
        </HeroComponent>
        <v-card class="pa-2">
            <TableList :tables="entities" />
        </v-card>
    </div>
</template>

<script>
import Image from '@/models/Image'
import DBEvent from '@/models/DBEvent'
import place from '@/models/place'
import Table from '@/models/Table'
import supabase from '@/supabase.js'
import HeroComponent from '@/views/global/HeroComponent.vue'
import TableList from '@/views/global/TableList.vue'
import ButtonWithOpenInNewTab from '@/views/global/ButtonWithOpenInNewTab.vue'
import EmbededHomePage from './EmbededHomePage.vue'
// import TableList from '@/views/global/TableList.vue'

export default {
    name: 'ListsIntroduction',
    components: { ButtonWithOpenInNewTab, TableList, HeroComponent, EmbededHomePage },
    data() {
        return {
            showWelcomeNewUser: false,
            entities: [
                {
                    name: 'Events',
                    desc: 'Explore diverse events led by expert tutors, tailored for home education.',
                },
                {
                    name: 'Providers',
                    desc: 'Join spaces created by educators to share resources, discuss methods, and collaborate.',
                },
            ],
        }
    },
    computed: {
        tables() {
            const result = Table.query().get()
            return result
        },
    },
    methods: {
        refreshData() {
            supabase.from('provider_groups').select('*').then().catch()
            // supabase.storage.listBuckets().then().catch()
            // supabase.storage
            //     .from('images')
            //     .list('object', {
            //         limit: 100,
            //         offset: 0,
            //         sortBy: { column: 'name', order: 'asc' },
            //     })
            //     .then()
            //     .catch()

            // supabase.storage
            //     .from('images')
            //     .getPublicUrl('cooking.png', {
            //         transform: {
            //             width: 100,
            //             height: 100,
            //         },
            //     })
            //     .then()
            //     .catch()

            // supabase.storage
            //     .from('images')
            //     .download('cooking.png')
            //     .then()
            //     .catch()

            // supabase.storage
            //     .createBucket('avatars', {
            //         public: false,
            //         allowedMimeTypes: ['image/png'],
            //         fileSizeLimit: 1024,
            //     })
            //     .then()
            //     .catch()
            Image.FetchAll()
            Image.Download()

            DBEvent.FetchAll()

            place.FetchAll({})
            Table.FetchAll({})
        },
        parseHashParams(hash) {
            // Remove the '#' at the start if it's there
            let hashString = hash.charAt(0) === '#' ? hash.slice(1) : hash

            // Split the hash into individual key=value pairs
            let pairs = hashString.split('&')

            // Convert the pairs into a dictionary/object
            let result = {}
            pairs.forEach((pair) => {
                let [key, value] = pair.split('=')
                result[key] = decodeURIComponent(value)
            })

            return result
        },
    },
    mounted() {
        if (window.location.hash) {
            let hashValue = window.location.hash
            let parsedParams = this.parseHashParams(hashValue)
            if (parsedParams.type && parsedParams.type == 'signup') {
                this.showWelcomeNewUser = true
            }
        }
        this.refreshData()
    },
    // async created() {
    //     supabase.storage
    //         .from('public-bucket')
    //         .getPublicUrl('folder/avatar1.png')
    // },
}
</script>
