<template>
    <v-select
        :label="`Active Provider Group`"
        :modelValue="modelValue"
        @update:modelValue="
            (e) => {
                $emit('update:modelValue', e)
            }
        "
        item-title="name"
        item-value="id"
        :items="providerGroupsAssociatedWithUser"
        :readonly="readonly"
        :disabled="readonly"
        :rules="rules"
        variant="underlined"
    ></v-select>
</template>
<script>
import { SuperSelect } from 'quicklists-vue-orm-ui'

export default {
    name: 'SelectAssociatedProvider',
    components: {SuperSelect},

    props: {
        modelValue: {
            type: [Number, Object],
            default() {
                return null
            },
        },
        readonly: {
            type: Boolean,
            default() {
                return false
            },
        },
        rules: {
            type: Array,
            default() {
                return []
            },
        },
    },
}
</script>

<style scoped></style>
