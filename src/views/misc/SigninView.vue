<template>
    <div>
        <v-card class="pa-2">
            <v-sheet width="300" class="mx-auto">
                <h1 class="text-center">Sign In</h1>
                <template
                    v-if="!loginSession"
                >
                    <v-form @submit.prevent="submit">
                        <v-text-field
                            required
                            v-model="form.email"
                            label="Email"
                            type="email"
                            variant="underlined"
                        ></v-text-field>
                        <v-text-field
                            v-model="form.password"
                            label="Password"
                            type="password"
                            variant="underlined"
                        ></v-text-field>

                        <v-btn
                            type="submit"
                            block
                            class="mt-2"
                            :loading="loading"
                            >Submit
                        </v-btn>
                    </v-form>
                </template>
                <template v-else>
                    Welcome <b>{{ this.loginSession.user.email }}</b>
                </template>
            </v-sheet>
        </v-card>
    </div>
</template>
<script>
import LoginSession from '@/models/non-quicklist/LoginSession'
// import DBPerson from '@/models/non-quicklist/User'
import VueCookies from 'vue-cookies';

export default {
    name: 'SigninView',
    components: {},
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            loading: false,
        }
    },
    methods: {
        submit() {
            LoginSession.deleteAll()
            this.loading = true
            LoginSession.signIn(this.form)
                .then((response) => {
                    // // Get the current time in seconds since the Unix epoch
                    // const currentTimeInSeconds = Math.floor(Date.now() / 1000)
                    //
                    // const cookieExpireTimeInSeconds =
                    //     currentTimeInSeconds +
                    //     (120 * 60) -
                    //     60
                    //
                    // const cookieExpirationDate = new Date(
                    //     cookieExpireTimeInSeconds * 1000
                    // )
                    //
                    // this.$cookies.set('VITE_AUTH', response.response.data, {
                    //     expires: cookieExpirationDate,
                    // })

                    VueCookies.set('VITE_AUTH', response.response.data, '2h');

                    // const expirationDate = new Date();
                    // expirationDate.setMinutes(expirationDate.getMinutes() + 120);
                    //
                    // console.log("response.data")
                    // console.log(response.response.data)
                    // // Set the cookie with VueCookies to expire in 120 minutes
                    // this.$cookies.set('VITE_AUTH', response.response.data, {
                    //   expires: expirationDate,
                    // });




                    // DBPerson.FetchAll({
                    //     page: 1,
                    //     limit: 1,
                    //     filters: {
                    //         user_id: this.loginSession.user_id,
                    //     },
                    //     flags: {},
                    //     moreHeaders: {},
                    //     clearPrimaryModelOnly: false,
                    //     relationships: [
                    //       'provider_groups',
                    //       'customer_groups',
                    //     ],
                    // })
                    //   .then((result)=>{
                    //     const id = this.loginSession.$id
                    //
                    //     // this.$store.state.entities['login-sessions'].data[id] = {
                    //     //   ...this.$store.state.entities['login-sessions'].data[id],
                    //     //   user: result.response.data[0]
                    //     // }
                    //
                    //   })

                    this.loading = false
                })
                .catch(() => {
                    this.loading = false
                })
        },
    },
    computed: {
        loginSession() {
            return LoginSession.query().withAllRecursive().first()
        },
    },
    mounted() {},
}
</script>
<style scoped></style>
