<template>
  <q-page>
    <q-card class="q-pa-md">
      <q-form ref="form">
        <div class="text-h6">Join</div>
        <q-input
          v-model="entity.name"
          label="Full Name"
          :error="!!errors.name"
          :error-message="errors.name"
          outlined
          dense
        />
        <q-input
          v-model="entity.email"
          label="Email"
          :error="!!errors.email"
          :error-message="errors.email"
          outlined
          dense
        />
        <q-input
          v-model="entity.password"
          :type="showPassword ? 'text' : 'password'"
          :append="showPassword ? 'visibility_off' : 'visibility'"
          @click:append="showPassword = !showPassword"
          label="Password"
          :error="!!errors.password"
          :error-message="errors.password"
          outlined
          dense
        />
        <q-input
          v-model="entity.c_password"
          :type="showCPassword ? 'text' : 'password'"
          :append="showCPassword ? 'visibility_off' : 'visibility'"
          @click:append="showCPassword = !showCPassword"
          label="Confirm Password"
          :error="!!errors.c_password"
          :error-message="errors.c_password"
          outlined
          dense
        />
        <q-btn
          block
          class="q-mt-md"
          :loading="loading"
          @click="join"
          label="Submit"
          color="primary"
        />
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import User from "src/models/model-helpers/User";

export default {
  name: "JoinView",
  data() {
    return {
      entity: {},
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
    join() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        User.Register(this.entity)
          .then(() => {
            this.loading = false;
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
