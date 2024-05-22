<template>
    <v-snackbar v-if="showSnackBar" :value="showSnackBar" top right>
        {{ snackbar ? snackbar.text : '' }}
        <v-btn text @click="closeSnackbar"> Close </v-btn>
    </v-snackbar>
</template>

<script>
import SnackbarNotification from '@/models/SnackbarNotification'

export default {
    name: 'SnackbarNotifications',
    data() {
        return {
            showSnackBar: false,
        }
    },
    computed: {
        snackbar() {
            const result = SnackbarNotification.query()
                .where('show', true)
                .first()

            return result
        },
    },

    watch: {
        snackbar(newValue) {
            this.showSnackBar = false

            setTimeout(() => {
                this.showSnackBar = this.snackbar ? this.snackbar.show : false

                if (newValue) {
                    setTimeout(() => {
                        this.updateSnackbar(false)
                    }, 3000)
                }
            }, 10)
        },
    },
    methods: {
        updateSnackbar() {
            if (this.snackbar?.id) {
                SnackbarNotification.update({
                    where: this.snackbar?.id,
                    data: { show: false },
                })
            }
        },
        closeSnackbar() {
            this.updateSnackbar(false)
        },
    },
}
</script>
