<script>
export default {
    name: 'TableList',
    props: {
        tables: {
            type: Array,
            default() {
                return []
            },
        },
    },
}
</script>

<template>
    <v-row class="fill-height" justify="center" align="center">
        <template v-for="table of tables" :key="table.name">
            <v-col cols="12" md="3">
                <v-card class="mx-auto" style="cursor: pointer">
                    <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                    </template>
                    <v-card-title>{{ table.name }}</v-card-title>
                    <v-card-text>
                        <div>
                            {{ table.desc }}
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
</template>

<style scoped></style>
