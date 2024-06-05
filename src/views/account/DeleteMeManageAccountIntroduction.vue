<template>
    <div>
        <HeroComponent>
            <template v-slot:title> Your Dashboard </template>
            <template v-slot:sub>
                Update your profile and keep track of all your site activities,
                from provider engagements to your child's class selections.
            </template>
            <template v-slot:subsub>
                Home-Ed Community Hub: Community-focused home education.
            </template>
            <template v-slot:buttons>
                <!--                        <v-btn color="primary" large class="mx-2">-->
                <!--                            Edit My Profile-->
                <!--                        </v-btn>-->
            </template>
        </HeroComponent>
        <v-card class="pa-2">
            <v-row class="fill-height" justify="center" align="center">
                <template v-for="entity of entities" :key="entity.name">
                    <v-col cols="12" md="3">
                        <v-card class="mx-auto my-12" style="cursor: pointer">
                            <template slot="progress">
                                <v-progress-linear
                                    color="deep-purple"
                                    height="10"
                                    indeterminate
                                ></v-progress-linear>
                            </template>
                            <v-card-title>{{ entity.name }}</v-card-title>
                            <v-card-text>
                                <div>
                                    {{ entity.desc }}
                                </div>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="deep-purple lighten-2" text>
                                    Lists
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </template>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import HeroComponent from '@/views/global/HeroComponent.vue'

export default {
    name: 'ManageAccountIntroduction',
    components: { HeroComponent },
    data() {
        return {
            entities: [
                {
                    name: 'Lists Events',
                    desc: 'Explore diverse events led by expert tutors, tailored for home education.',
                },
                {
                    name: 'Lists Education Providers',
                    desc: 'Join spaces created by educators to share resources, discuss methods, and collaborate.',
                },
            ],
        }
    },
}
</script>
