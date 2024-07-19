<template>
  <div>
    <SuperTable :model="address" />"
  </div>
</template>

<script>
import {SuperTable} from "quicklists-vue-orm-ui-2";
import Address from "src/models/Address";
export default {
  name: "AddressPage2",
  components: {SuperTable},
  data(){
    return {
      address: Address
    }
  }
}
</script>

<style scoped>

</style>
