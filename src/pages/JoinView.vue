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
            v-model="entity.name"
            label="Full Name"
            :error="!!errors.name"
            :error-messages="errors.name"
          />
          <vTextField
            v-model="entity.email"
            label="Email"
            :error="!!errors.email"
            :error-messages="errors.email"
          />
          <vTextField
            v-model="entity.password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            label="Password"
            :error="!!errors.password"
            :error-messages="errors.password"
          />
          <vTextField
            v-model="entity.c_password"
            :append-icon="showCPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showCPassword ? 'text' : 'password'"
            @click:append="showCPassword = !showCPassword"
            label="Password"
            :error="!!errors.c_password"
            :error-messages="errors.c_password"
          />

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

import User from "@/models/non-quicklist/User";
// import DBPerson from '@/models/non-quicklist/User'

export default {
  name: "JoinView",
  data() {
    return {
      entity: {},
      person: {},
      loading: false,
      showPassword: false,
      showCPassword: false,
      errors: {},
      itemEmpty: {
        name: "",
        email: "",
        password: "",
        c_password: "",
      },
    };
  },
  methods: {
    setErrors(rawErrors = {}) {
      for (const fieldKey in this.itemEmpty) {
        if (rawErrors[fieldKey]) {
          this.errors[fieldKey] = rawErrors[fieldKey][0];
        } else {
          this.errors[fieldKey] = null;
        }
      }
    },
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
        this.loading = true;
        // this.entity = {
        //     options: {
        //         redirectTo: 'http://localhost:8082',
        //         data: {
        //             first_name: 'John',
        //             age: 27,
        //         },
        //     },
        //     ...this.entity,
        // }
        User.Register(this.entity)
          .then((res) => {
            this.loading = false;
            // const resData = res.response.data
            // // Determine the correct user ID based on the response structure
            // let userId
            // if (resData.user && resData.user.id) {
            //     userId = resData.user.id // Local structure (comprehensive response)
            // } else if (resData.id) {
            //     userId = resData.id // Remote structure (concise response)
            // } else {
            //     throw new Error('User ID not found in response')
            // }
            //
            // // Store the person with the correct user ID
            // DBPerson.Store({
            //     ...this.person,
            //     user_id: userId,
            // })
            //     .then((res2) => {
            //         const resData2 = res2.response.data
            //
            //         let personId = resData2[0].id
            //
            //     })
            //     .catch(() => {
            //         this.loading = false
            //     })
          })
          .catch((errors) => {
            if (errors.response && errors.response.data.errors) {
              this.setErrors(errors.response.data.errors);
            }
            this.loading = false;
          });
      }
    },
  },
  mounted() {
    this.setErrors();
  },
};
</script>
<style scoped></style>
