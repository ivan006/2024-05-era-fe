<template>
    <MenuSystem>
        <template v-slot:main>
            <router-view></router-view>
            <!--<SnackbarNotifications />-->
        </template>
    </MenuSystem>
</template>
<script>
import MenuSystem from '@/views/global/MenuSystem.vue'
// import SnackbarNotifications from '@/views/global/SnackbarNotifications.vue'

export default {
    name: 'MenuView',
    components: {
      // SnackbarNotifications,
      MenuSystem
    },
}
</script>
<style scoped></style>
