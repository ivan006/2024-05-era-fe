<template>
  <q-page>
    <q-card class="q-pa-md">
      <q-form ref="form">
        <h1 class="text-center">Join</h1>
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

<script setup>
import { ref } from "vue";
import User from "@/models/non-quicklist/User";

const entity = ref({});
const loading = ref(false);
const showPassword = ref(false);
const showCPassword = ref(false);
const errors = ref({});
const itemEmpty = {
  name: "",
  email: "",
  password: "",
  c_password: "",
};

const setErrors = (rawErrors = {}) => {
  for (const fieldKey in itemEmpty) {
    if (rawErrors[fieldKey]) {
      errors.value[fieldKey] = rawErrors[fieldKey][0];
    } else {
      errors.value[fieldKey] = null;
    }
  }
};

const join = () => {
  if (this.$refs.form.validate()) {
    loading.value = true;
    User.Register(entity.value)
      .then(() => {
        loading.value = false;
      })
      .catch((errors) => {
        if (errors.response && errors.response.data.errors) {
          setErrors(errors.response.data.errors);
        }
        loading.value = false;
      });
  }
};

onMounted(() => {
  setErrors();
});
</script>

<style scoped></style>
