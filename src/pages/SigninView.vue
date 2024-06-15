<template>
  <q-page>
    <q-card class="q-pa-md">
      <q-form @submit.prevent="submit">
        <div class="text-h6">Sign In</div>
        <template v-if="!loginSession">
          <q-input
            v-model="form.email"
            label="Email"
            type="email"
            outlined
            dense
            :rules="[emailRule]"
            autocomplete="email"
            name="email"
          />
          <q-input
            v-model="form.password"
            label="Password"
            type="password"
            outlined
            dense
            autocomplete="password"
            name="password"
          />
          <q-btn type="submit" block class="q-mt-md" :loading="loading" label="Submit" color="primary" />
        </template>
        <template v-else>
          Welcome <b>{{ loginSession.user.email }}</b>
        </template>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import VueCookies from "vue-cookies";
import LoginSession from "src/models/model-helpers/LoginSession";

export default {
  name: "SigninView",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      loading: false,
      emailRule: (val) => !!val || 'Email is required'
    };
  },
  computed: {
    loginSession() {
      return LoginSession.query().withAllRecursive().first();
    },
  },
  methods: {
    submit() {
      LoginSession.deleteAll();
      this.loading = true;
      LoginSession.signIn(this.form)
        .then((response) => {
          const sessionData = response.response.data;
          const expireDate = new Date();
          expireDate.setDate(expireDate.getDate() + 7); // Set the expiration date to 7 days from now

          sessionData.expireDate = expireDate.toISOString(); // Add the expiration date to the session data

          VueCookies.set('VITE_AUTH', sessionData, '7d');

          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
