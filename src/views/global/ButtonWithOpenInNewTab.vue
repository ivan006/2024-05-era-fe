<template>
    <a
        :class="classes"
        :href="$router.resolve(route)?.href"
        @click.prevent="$router.push(route)"
    >
        <slot />
    </a>
</template>

<script>
export default {
    name: 'ButtonWithOpenInNewTab',
    props: {
        route: {
            type: Object,
            default() {
                return {}
            },
        },
        classes: {
            type: String,
            default() {
                return ''
            },
        },
    },
}
</script>

<style scoped lang="scss"></style>
