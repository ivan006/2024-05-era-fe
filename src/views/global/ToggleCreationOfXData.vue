<script>
import LoginSession from '@/models/non-quicklist/LoginSession'
// import this.model from '@/models/this.model'
import { Helpers } from 'quicklists-vue-orm-ui'
import DBCustomerManager from '@/models/DBCustomerManager'
// import this.memberModel from '@/models/this.memberModel'

export default {
    name: 'ToggleCreationOfXData',
    props: {
        model: {
            type: [Object, Function],
            required: true,
        },
        memberModel: {
            type: [Object, Function],
            required: true,
        },
        entityName: {
            type: String,
            default() {
                return ''
            },
        },
        memberShipOwnerField: {
            type: String,
            default() {
                return ''
            },
        },
        enabledGroupStateName: {
            type: String,
            default() {
                return ''
            },
        },
    },
    data() {
        return {
            correspondenceModalShow: false,
            newActiveGroup: null,
        }
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
        membershipFilters() {
            let result = {}
            if (this.loginSession?.user?.person?.[0]?.id) {
                result.member_id = this.loginSession.user.person[0].id
            }
            return result
        },

        groupsTheyOwn() {
            // console.log(this.filters)
            let result = []
            if (this.loginSession) {
                result = this.model
                    .query()
                    .where((item) => {
                        return Helpers.getIfMatchesAllChecks(item, this.filters)
                    })
                    .withAll()
                    .orderBy('id', 'desc')
                    .get()
            }
            return result
        },

        groupsTheyAreAMember() {
            if (this.memberShipOwnerField == 'customer_that_owns_this') {
                return this.customersLinkedToUser
            } else {
                return this.providersLinkedToCustomersLinkedToUser
            }
        },

        customersLinkedToUser() {
            let result = []
            if (this.loginSession) {
                const customerManagers = DBCustomerManager.query()
                    .where((item) => {
                        return Helpers.getIfMatchesAllChecks(
                            item,
                            this.membershipFilters
                        )
                    })
                    .withAll()
                    .orderBy('id', 'desc')
                    .get()

                customerManagers.forEach((cm) => {
                    if (cm.customer_that_owns_this) {
                        result.push(cm.customer_that_owns_this)
                    }
                })
            }

            return result
        },

        providersLinkedToCustomersLinkedToUser() {
            let result = []
            if (this.loginSession) {
                const customerManagers = DBCustomerManager.query()
                    .where((item) => {
                        return Helpers.getIfMatchesAllChecks(
                            item,
                            this.membershipFilters
                        )
                    })
                    .with(
                        'customer_that_owns_this.memberships.provider_group'
                    )
                    .orderBy('id', 'desc')
                    .get()

                // Extract provider groups from customerManagers
                customerManagers.forEach((cm) => {
                    if (
                        cm.customer_that_owns_this &&
                        cm.customer_that_owns_this.memberships
                    ) {
                        cm.customer_that_owns_this.memberships.forEach(
                            (cpl) => {
                                if (cpl.provider_group) {
                                    result.push(cpl.provider_group)
                                }
                            }
                        )
                    }
                })
            }
            return result
        },

        allAssocitateGroups() {
            let result = this.groupsTheyOwn
            for (const group of this.groupsTheyAreAMember) {
                const check = this.groupsTheyOwn.filter((item) => {
                    return item.id == group.id
                })
                if (!check.length) {
                    result.push(group)
                }
            }
            return result
        },

        canCreateData() {
            return this.$store.state.entities['login-sessions'].data[
                this.loginSession.access_token
            ][this.enabledGroupStateName]
        },

        currentParentRecord() {
            let result = {}
            if (this.canCreateData) {
                result = this.model.query().whereId(this.canCreateData).first()
            }
            return result
        },
    },
    watch: {
        'loginSession.access_token'() {
            setTimeout(() => {
                this.fetchGroupsTheyOwn()
                this.fetchGroupsOfWhichTheyAreAMember()
            }, 300)
        },
    },
    methods: {
        toggleFunction() {
            if (this.canCreateData) {
                this.$store.state.entities['login-sessions'].data[
                    this.loginSession.access_token
                ][this.enabledGroupStateName] = null
            } else {
                this.newActiveGroup = null
                this.correspondenceModalShow = true
            }
        },
        setActiveGroup() {
            this.correspondenceModalShow = false
            this.$store.state.entities['login-sessions'].data[
                this.loginSession.access_token
            ][this.enabledGroupStateName] = +this.newActiveGroup
        },
        fetchGroupsTheyOwn() {
            this.model
                .FetchAll({
                    page: 1,
                    limit: 100,
                    filters: this.filters,
                    flags: {},
                    moreHeaders: {},
                    clearPrimaryModelOnly: false,
                    relationships: [],
                })
                .then(() => {})
        },
        fetchGroupsOfWhichTheyAreAMember() {
            this.memberModel
                .FetchAll({
                    page: 1,
                    limit: 100,
                    filters: this.membershipFilters,
                    flags: {},
                    moreHeaders: {},
                    clearPrimaryModelOnly: false,
                    relationships: [],
                })
                .then(() => {})
        },
    },
}
</script>

<template>
    <div>
        <v-switch
            readonly
            :value="canCreateData"
            @click="toggleFunction"
            hide-details
            inset
            :label="`Create ${entityName.toLowerCase()} data: ${
                canCreateData ? `On (${currentParentRecord.name})` : 'Off'
            }`"
        ></v-switch>
        <v-dialog v-model="correspondenceModalShow" max-width="600px">
            <v-card>
                <v-card-title>
                    Create {{ entityName.toLowerCase() }} data
                </v-card-title>
                <v-card-text>
                    For which {{ entityName.toLowerCase() }} will you be
                    creating data?
                    <v-select
                        v-if="loginSession?.access_token"
                        :label="`${entityName} Group`"
                        v-model="newActiveGroup"
                        item-title="name"
                        item-value="id"
                        :items="this.allAssocitateGroups"
                    ></v-select>
                </v-card-text>

                <v-card-actions>
                    <v-btn @click="correspondenceModalShow = false"
                        >Cancel</v-btn
                    >
                    <v-btn @click="setActiveGroup">Ok</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped></style>
