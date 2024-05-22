<script>
export default {
    name: 'MenuSystemItem',
    props: {
        link: {
            type: Object,
            default() {
                return {}
            },
        },
    },
}
</script>

<template>
    <div>
        <template v-if="link.isHeading">
            <v-list-item v-if="!link.subLinks" class="pl-2 pr-2" style="padding-inline-start: 8px !important;">
                <!--<template v-if="link.icon.length">-->
                <!--    <v-list-item-icon style="align-self: center">-->
                <!--        <v-icon>{{ link.icon }}</v-icon>-->
                <!--    </v-list-item-icon>-->
                <!--</template>-->


              <b>{{ link.text }}</b>
            </v-list-item>



        </template>
        <template v-else>
            <v-list-item
                v-if="!link.subLinks"
                :to="link.to"
                class="pl-2 pr-2 "
                style="padding-inline-start: 8px !important;"
            >
                <!--<template v-if="link.icon.length">-->
                <!--    <v-list-item-icon style="align-self: center">-->
                <!--        <v-icon>{{ link.icon }}</v-icon>-->
                <!--    </v-list-item-icon>-->
                <!--</template>-->

                <v-list-item-title v-text="link.text" />
            </v-list-item>
        </template>
    </div>
</template>

<style scoped></style>
