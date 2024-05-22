<template>
    <v-select
        :label="`Active Customer Group`"
        :modelValue="modelValue"
        @update:modelValue="
            (e) => {
                $emit('update:modelValue', e)
            }
        "
        item-title="name"
        item-value="id"
        :items="customerGroupsAssociatedWithUser"
        :readonly="readonly"
        :disabled="readonly"
        :rules="rules"
    ></v-select>
</template>
<script>
export default {
    name: 'SelectAssociatedCustomer',

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
