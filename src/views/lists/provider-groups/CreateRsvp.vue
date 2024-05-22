<template>
    <div>
        <v-tooltip bottom :disabled="!loginSession || !canCreateMsg.length">
            <template v-slot:activator="{ props }">
                <div v-bind="props">
                    <v-btn @click="createItem()" :disabled="!loginSession">
                        Create
                    </v-btn>
                </div>
            </template>
            <span>{{ canCreateMsg }}</span>
        </v-tooltip>

        <template v-if="!!loginSession">
            <v-dialog v-model="createShowModal" max-width="800px">
                <!--                <CreateEditForm-->
                <!--                    title="Create Item"-->
                <!--                    v-if="createShowModal"-->
                <!--                    :RSVPRSVPModelFields="RSVPModelFields"-->
                <!--                    v-model="RSVPData"-->
                <!--                    :model="model"-->
                <!--                    :displayMapField="false"-->
                <!--                    @submit="createItemSubmit"-->
                <!--                    @cancel="createShowModal = false"-->
                <!--                    :currentOpenRecord="currentOpenRecord"-->
                <!--                />-->

                <div>
                    <v-card>
                        <v-card-title> Create RSVP </v-card-title>
                        <v-card-text>
                            Would you like to RSVP to this event?

                            <SelectAssociatedCustomer
                                v-model="customer_id"
                                :rules="[(v) => !!v || `Field is required.`]"
                            />
                            <!--                            <v-form ref="editForm">-->
                            <!--                                <SelectAssociatedProvider-->
                            <!--                                    v-model="RSVPData[getFieldName(DBRSVP, 'OwnerProviderType').name]"-->
                            <!--                                    :readonly="true"-->
                            <!--                                    :rules="getFieldName(DBRSVP, 'OwnerProviderType').meta.rules"-->
                            <!--                                />-->
                            <!--                            </v-form>-->
                        </v-card-text>

                        <v-card-actions>
                            <v-btn @click="createShowModal = false">
                                Cancel
                            </v-btn>
                            <v-btn @click="createItemSubmit"> Yes </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-dialog>
        </template>
    </div>
</template>

<script>
import LoginSession from '@/models/LoginSession'
import DBRSVP from '@/models/DBRSVP'
import DBEvent from '@/models/DBEvent'
import DBMembership from '@/models/DBMembership'
import QuickListsHelpers from '../../global/quicklists-wrapper/quick-list/QuickListsHelpers'
import SelectAssociatedCustomer from '@/views/global/selects/SelectAssociatedCustomer.vue'
// import SelectAssociatedProvider from '@/views/global/selects/SelectAssociatedProvider.vue'

export default {
    name: 'CreateRsvp',
    components: {
        SelectAssociatedCustomer,
        // SelectAssociatedProvider,
    },
    props: {
        currentOpenRecord: {
            type: Object,
            default() {
                return null
            },
        },
        model: {
            type: [Object, Function],
            default() {
                return null
            },
        },
    },
    data() {
        return {
            createShowModal: false,
            customer_id: null,
            RSVPData: {},
            membershipData: {},
        }
    },
    computed: {
        RSVPModelFields() {
            const result = QuickListsHelpers.computedAttrs(DBRSVP, [])
            return result
        },
        membershipModelFields() {
            const result = QuickListsHelpers.computedAttrs(DBMembership, [])
            return result
        },
        loginSession() {
            return LoginSession.query().withAllRecursive().first()
        },
        canCreateMsg() {
            let result = ''
            return result
        },
    },
    methods: {
        createItem() {
            this.createShowModal = true
        },
        createItemSubmit() {
            // console.log(this.currentOpenRecord)

            // this.membershipData[this.getFieldName(DBMembership, 'OwnerApprovedByProviderType').name] = ''

            // console.log(
            //     "this.getFieldName(DBMembership, 'OwnerApprovedByProviderType')"
            // )
            // console.log(
            //     this.getFieldName(DBMembership, 'OwnerApprovedByProviderType')
            // )

            const provider_id = this.currentOpenRecord.item["provider_that_owns_this_id"]


            this.membershipData["approved_by_id"] = provider_id


            this.membershipData["provider_being_applied_to_id"] = provider_id

            this.membershipData["customer_id"] = this.customer_id

            this.membershipData["person_that_created_this_id"] = this.loginSession.user.person[0].id

            let membershipData = QuickListsHelpers.preparePayload(
                this.membershipData,
                this.membershipModelFields
            )
            delete membershipData.id

            // -------------

            this.RSVPData.event_id = this.currentOpenRecord.item.id

            this.RSVPData["provider_that_owns_this_id"] =
                provider_id

            this.RSVPData["customer_id"] =
                this.customer_id

            let RSVPData = QuickListsHelpers.preparePayload(
                this.RSVPData,
                this.RSVPModelFields
            )
            delete RSVPData.id

            DBMembership.Store(membershipData)
                .then(() => {
                    this.membershipData = {}

                    DBRSVP.Store(RSVPData).then(() => {
                        this.RSVPData = {}
                    })
                })
                .catch((err) => {
                    // console.log('err')
                    // console.log(err)
                    // console.log(err.response.data.message)
                    // console.log(
                    //     err.response.data.message ==
                    //         'duplicate key value violates unique constraint "provider_customer_unique"'
                    // )
                    if (
                        err.response.data.message ==
                        'duplicate key value violates unique constraint "provider_customer_unique"'
                    ) {
                        DBRSVP.Store(RSVPData).then(() => {
                            this.RSVPData = {}
                        })
                    }
                })

            // Close the dialog after submission
            this.createShowModal = false
        },
    },
    mounted() {},
    // watch: {
    //     currentOpenRecord() {
    //         console.log(this.currentOpenRecord)
    //         console.log(this.RSVPData[this.getFieldName(DBRSVP, 'OwnerProviderType')])
    //         this.RSVPData[this.providerFieldForRSVP.name] =
    //             this.currentOpenRecord.item.id
    //         console.log(this.RSVPData)
    //     },
    // },
}
</script>

<style scoped></style>
