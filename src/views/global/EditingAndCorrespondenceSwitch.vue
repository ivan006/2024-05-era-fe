<template>
    <div>
        <div v-if="!!loginSession" class="d-flex align-center gap-1em">
            <ToggleCreationOfXData
                :memberModel="providerMemberModel"
                :model="providerModel"
                memberShipOwnerField="provider_that_owns_this"
                enabledGroupStateName="enabled_provider_group_id"
                entityName="Provider"
                class="mr-5"
            />
            <ToggleCreationOfXData
                :memberModel="customerMemberModel"
                :model="customerModel"
                memberShipOwnerField="customer_that_owns_this"
                enabledGroupStateName="enabled_customer_group_id"
                entityName="Customer"
                class="mr-5"
            />
        </div>
    </div>
</template>

<script>
import ToggleCreationOfXData from '@/views/global/ToggleCreationOfXData.vue'
import LoginSession from '@/models/LoginSession'
import DBCustomerManager from '@/models/DBCustomerManager'
import DBCustomerGroup from '@/models/DBCustomerGroup'
import DBMembership from '@/models/DBMembership'
import DBProviderGroup from '@/models/DBProviderGroup'

export default {
    name: 'EditingAndCorrespondenceSwitch',
    components: { ToggleCreationOfXData },
    data() {
        return {
            customerMemberModel: DBCustomerManager,
            customerModel: DBCustomerGroup,
            providerMemberModel: DBMembership,
            providerModel: DBProviderGroup,
        }
    },
    computed: {
        loginSession() {
            return LoginSession.query().withAllRecursive().first()
        },
    },
}
</script>

<style scoped></style>
