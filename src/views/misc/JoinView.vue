<template>
    <div>
        <v-card class="pa-2">
            <v-sheet width="300" class="mx-auto">
                <v-form ref="form">
                    <h1 class="text-center">Join</h1>
                    <!--            <div>-->
                    <!--                <a @click="join" class="btn">Buy $10 membership.</a>-->
                    <!--            </div>-->
                    <vTextField
                        v-model="person.first_name"
                        label="First Name"
                        :rules="[(v) => !!v || 'This field is required']"
                    />
                    <vTextField
                        v-model="person.last_name"
                        label="Last Name"
                        :rules="[(v) => !!v || 'This field is required']"
                    />
                    <vTextField
                        v-model="entity.email"
                        label="Email"
                        :rules="[(v) => !!v || 'This field is required']"
                    />
                    <vTextField
                        v-model="entity.password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        label="Password"
                        :rules="[(v) => !!v || 'This field is required']"
                    />
<!--                  label="My main intention is to be a"-->
                    <v-radio-group
                        label="My primary intention is to be a"
                        v-model="group_type"
                        :rules="[(v) => !!v || 'This field is required']"
                    >
                        <v-radio label="Customer" modelValue="cust"></v-radio>
                        <v-radio label="Provider" modelValue="prov"></v-radio>
                    </v-radio-group>
                    <template v-if="group_type == 'prov'">
                        <vTextField
                            :hint="mandatory_prov_message"
                            persistent-hint
                            :rules="[(v) => !!v || mandatory_prov_message]"
                            v-model="providerGroup.name"
                            label="Provider Group Name"
                        />
                    </template>
                    <template v-else>
                        <vTextField
                            :hint="mandatory_cust_message"
                            persistent-hint
                            :rules="[(v) => !!v || mandatory_cust_message]"
                            v-model="customerGroup.name"
                            label="Customer Group Name"
                        />
                    </template>
                    <!--                  hint="At least 8 characters"-->
                    <!--                  :rules="[rules.required, rules.min]"-->

                    <v-btn block class="mt-2" :loading="loading" @click="join">
                        Submit
                    </v-btn>
                </v-form>
            </v-sheet>
        </v-card>
    </div>
</template>
<script>
// import { loadStripe } from '@stripe/stripe-js'
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

import User from '@/models/User'
import DBPerson from '@/models/DBPerson'
import DBCustomerGroup from '@/models/DBCustomerGroup'
import DBProviderGroup from '@/models/DBProviderGroup'

export default {
    name: 'JoinView',
    data() {
        return {
            entity: {},
            person: {},
            customerGroup: {},
            providerGroup: {},
            loading: false,
            showPassword: false,
            group_type: 'cust',
            // mandatory_prov_message: 'Creating a provider group is mandatory',
            // mandatory_cust_message: 'Creating a customer group is mandatory',
            mandatory_prov_message: 'This field is required',
            mandatory_cust_message: 'This field is required',
        }
    },
    methods: {
        // async join() {
        //     // const stripe = await stripePromise
        //     const product = { subscriptionId: 1 }
        //     const res = await order.Store(product)
        //     res
        //     // await stripe.redirectToCheckout({
        //     //     LoginSessionId: res.response.data.stripeLoginSession.id,
        //     // })
        // },
        join() {
            if (this.$refs.form.validate()) {
                this.loading = true
                this.entity = {
                    options: {
                        redirectTo: 'http://localhost:8082',
                        data: {
                            first_name: 'John',
                            age: 27,
                        },
                    },
                    ...this.entity,
                }
                User.Store(this.entity)
                    .then((res) => {
                        const resData = res.response.data
                        // Determine the correct user ID based on the response structure
                        let userId
                        if (resData.user && resData.user.id) {
                            userId = resData.user.id // Local structure (comprehensive response)
                        } else if (resData.id) {
                            userId = resData.id // Remote structure (concise response)
                        } else {
                            throw new Error('User ID not found in response')
                        }

                        // Store the person with the correct user ID
                        DBPerson.Store({
                            ...this.person,
                            user_id: userId,
                        })
                            .then((res2) => {
                                const resData2 = res2.response.data

                                let personId = resData2[0].id

                                if (this.group_type == 'prov') {
                                    DBProviderGroup.Store({
                                        ...this.providerGroup,
                                        person_that_created_this_id: personId,
                                        created_at: null,
                                    })
                                        .then(() => {
                                            this.loading = false
                                        })
                                        .catch(() => {
                                            this.loading = false
                                        })
                                } else {
                                    DBCustomerGroup.Store({
                                        ...this.customerGroup,
                                        person_that_created_this_id: personId,
                                        created_at: null,
                                    })
                                        .then(() => {
                                            this.loading = false
                                        })
                                        .catch(() => {
                                            this.loading = false
                                        })
                                }
                            })
                            .catch(() => {
                                this.loading = false
                            })
                    })
                    .catch(() => {
                        this.loading = false
                    })
            }
        },
    },
}
</script>
<style scoped></style>
