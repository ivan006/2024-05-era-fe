<template>
    <div>
        <v-list-item class="pl-2">
            <!--                                        <ToggleCreationOfXData-->
            <!--                                            :memberModel="providerMemberModel"-->
            <!--                                            :model="providerModel"-->
            <!--                                            memberShipOwnerField="provider_that_owns_this"-->
            <!--                                            enabledGroupStateName="enabled_provider_group_id"-->
            <!--                                            entityName="Provider"-->
            <!--                                            class="mr-5"-->
            <!--                                        />-->

            <SelectAssociatedProvider
                v-model="providerGroupId"
                v-if="loginSession?.access_token"
            />
        </v-list-item>
        <v-list-item class="pl-2">
            <!--                                        <ToggleCreationOfXData-->
            <!--                                            :memberModel="customerMemberModel"-->
            <!--                                            :model="customerModel"-->
            <!--                                            memberShipOwnerField="customer_that_owns_this"-->
            <!--                                            enabledGroupStateName="enabled_customer_group_id"-->
            <!--                                            entityName="Customer"-->
            <!--                                            class="mr-5"-->
            <!--                                        />-->

            <SelectAssociatedCustomer
                v-model="customerGroupId"
                v-if="loginSession?.access_token"
            />
        </v-list-item>
    </div>
</template>
<script>
import LoginSession from '@/models/non-quicklist/LoginSession'
import DBCustomerManager from '@/models/DBCustomerManager'
import DBCustomerGroup from '@/models/DBCustomerGroup'
import DBMembership from '@/models/DBMembership'
import DBProviderGroup from '@/models/DBProviderGroup'
import SelectAssociatedProvider from '@/views/global/selects/SelectAssociatedProvider'
import SelectAssociatedCustomer from '@/views/global/selects/SelectAssociatedCustomer'

export default {
    name: 'MyProversAndCustomerAsSelects',
    components: {
        SelectAssociatedProvider,
        SelectAssociatedCustomer,
    },
    data() {
        return {
            customerMemberModel: DBCustomerManager,
            customerModel: DBCustomerGroup,
            providerMemberModel: DBMembership,
            providerModel: DBProviderGroup,
        }
    },
    props: {
        // providerGroupsAssociatedWithUser: {
        //     type: Array,
        //     default() {
        //         return []
        //     },
        // },
        // customerGroupsAssociatedWithUser: {
        //     type: Array,
        //     default() {
        //         return []
        //     },
        // },
    },
    computed: {
        providerGroupId: {
            get() {
                const result =
                    this.$store.state.entities['login-sessions'].data[
                        this.loginSession.access_token
                    ].enabled_provider_group_id
                return result
            },
            set(value) {
                // this.correspondenceModalShow = false
                this.$store.state.entities['login-sessions'].data[
                    this.loginSession.access_token
                ].enabled_provider_group_id = +value
            },
        },
        customerGroupId: {
            get() {
                return this.$store.state.entities['login-sessions'].data[
                    this.loginSession.access_token
                ].enabled_customer_group_id
            },
            set(value) {
                // this.correspondenceModalShow = false
                this.$store.state.entities['login-sessions'].data[
                    this.loginSession.access_token
                ].enabled_customer_group_id = +value
            },
        },
        loginSession() {
            return LoginSession.query().withAllRecursive().first()
        },
    },
    watch: {
        providerGroupsAssociatedWithUser() {
            const check = this.providerGroupsAssociatedWithUser.find(
                (group) => {
                    return group.id == this.providerGroupId
                }
            )
            if (!check) {
                this.providerGroupId = null
            }
        },
    },
}
</script>

<style scoped></style>
