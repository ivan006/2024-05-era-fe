<template>
    <v-tooltip bottom :disabled="!!items.length">
        <template v-slot:activator="{ props }">
            <div v-bind="props">
                <v-select
                    :menu-props="{ offsetY: true }"
                    :value="value"
                    @update:modelValue="
                        (e) => {
                            $emit('update:modelValue', e)
                        }
                    "
                    :variant="variant"
                    :density="density"
                    :items="items"
                    :label="label"
                    item-title="name"
                    item-value="id"
                    :disabled="!items.length"
                    :readonly="!items.length"
                />
            </div>
        </template>
        <span>Only only the provider group can approve this application.</span>
    </v-tooltip>
</template>
<script>
import { Helpers } from 'quicklists-vue-orm-ui'
import LoginSession from '@/models/LoginSession'
import DBProviderGroup from '@/models/DBProviderGroup'

export default {
    name: 'SelectGroupsUserOwns',
    props: {
        modelValue: {
            type: [Number, Object],
            default() {
                return null
            },
        },
        // filters: {
        //     type: String,
        //     default() {
        //         return '{}'
        //     },
        // },
        disabled: {
            type: Boolean,
            default() {
                return false
            },
        },
        readonly: {
            type: Boolean,
            default() {
                return false
            },
        },
        variant: {
            type: String,
            default() {
                return "outlined"
            },
        },
        density: {
            type: String,
            default() {
                return "compact"
            },
        },
        label: {
            type: String,
            default() {
                return ''
            },
        },
        whiteList: {
            type: Array,
            default() {
                return []
            },
        },
    },
    computed: {
        loginSession() {
            return LoginSession.query().withAllRecursive().first()
        },
        filters() {
            let result = {}
            if (this.loginSession?.user?.person?.[0]?.id) {
                result.person_that_created_this_id =
                    this.loginSession.user.person[0].id
            }
            return result
        },
        groupsTheyOwn() {
            // console.log(this.filters)
            let result = []
            if (this.loginSession) {
                result = DBProviderGroup.query()
                    .where((item) => {
                        return Helpers.getIfMatchesAllChecks(item, this.filters)
                    })
                    .withAll()
                    .orderBy('id', 'desc')
                    .get()
            }
            return result
        },
        items() {
            // console.log(this.filters)
            let result = []
            for (const group of this.groupsTheyOwn) {
                if (this.whiteList.includes(group.id)) result.push(group)
            }
            return result
        },
    },
    methods: {
        fetchGroupsTheyOwn() {
            DBProviderGroup.FetchAll({
                page: 1,
                limit: 100,
                filters: this.filters,
                flags: {},
                moreHeaders: {},
                clearPrimaryModelOnly: false,
                relationships: [],
            }).then(() => {})
        },
    },
    mounted() {
        this.fetchGroupsTheyOwn()
    },
}
</script>

<style scoped></style>
