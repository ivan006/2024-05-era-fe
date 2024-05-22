<template>
    <div class="pa-4">
        Please <a @click="$router.push('/sign-in')">sign in</a> to access this feature.
    </div>
</template>

<script>
export default {
    name: 'LoginToAccess',
}
</script>

<style scoped></style>
