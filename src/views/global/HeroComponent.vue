<template>
    <div class="pb-4">
        <!--      background-color: DimGray;-->
        <v-card
            class="pa-2"
            style="
                background-color: rgba(115, 142, 84, 255);
                background-image: url('/ListsIntroduction.jpg');
                background-size: cover;
                background-position: center center;
            "
        >
            <template v-if="isMobile()">
                <v-img
                    src="/ListsIntroduction.jpg"
                    height="600px"
                    class="pa-4"
                >
                    <v-row class="fill-height" align="center" justify="center">
                        <v-col cols="12" md="8" lg="6" class="text-center">
                            <!-- Title -->
                            <div class="headline white--text mb-3">
                                <slot name="title"></slot>
                            </div>

                            <!-- Subtitle -->
                            <div class="body-1 white--text mb-3">
                                <slot name="sub"></slot>
                            </div>

                            <!-- Subsubtitle -->
                            <div class="subtitle-2 mb-4 white--text">
                                <slot name="subsub"></slot>
                            </div>

                            <!-- Buttons Slot -->
                            <div>
                                <slot name="buttons"></slot>
                            </div>
                        </v-col>
                    </v-row>
                </v-img>
            </template>
            <template v-else>
                <v-img src="/ListsIntroduction.jpg" height="600px">
                    <v-row class="fill-height" align="center" justify="center">
                        <v-col cols="12" sm="8" md="6" class="text-center">
                            <div class="display-2 white--text">
                                <slot name="title"></slot>
                            </div>

                            <div class="display-1 my-4 white--text">
                                <slot name="sub"></slot>
                            </div>

                            <div class="subtitle-1 mb-4 white--text">
                                <slot name="subsub"></slot>
                            </div>

                            <slot name="buttons"></slot>
                        </v-col>
                    </v-row>
                </v-img>
            </template>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'HeroComponent',
    methods: {
        isMobile() {
            if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            ) {
                return true
            } else {
                return false
            }
        },
    },
}
</script>

<style scoped></style>
