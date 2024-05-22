<template>
    <div>
        <v-main class="grey lighten-2">
<!--            <div style="height:132px;">-->

<!--            </div>-->
            <div class="black">
                <v-container style="padding: 0 !important;">
                    <v-img
                        src="https://artinvoyage.com/wp-content/uploads/Tiger.jpg"
                        height="452px"
                    >
                        <div class="white--text  d-flex flex-column fill-height justify-center align-center text-white">
                            <h1 class="text-h3 font-weight-regular mb-4">
                                Lions, Tigers and Tradewinds
                            </h1>
                            <h4 class="subheading">
                                A Exclusive Journey by Private Jet
                            </h4>
                            <h4 class="subheading">
                                Operated by Bushtracks
                            </h4>
                        </div>
                    </v-img>
                </v-container>
            </div>
            <div>
                <v-container class="py-0 px-8" style="max-width: 1400px;">
                    <div class="text-center">

                        <h1 class="text-h6 font-weight-medium mb-4  pt-3">
                            November 3 - 23, 2024
                        </h1>
                        <p class="font-weight-light px-2 my-4">
                            Art in Voyage invites you to join our trusted friends at Bushtracks on this experiential journey for just 24 guests. Gain friends and make memories to last a lifetime, while checking off some of those bucket-list items along the way.
                            <br>Flying in comfort aboard our private jet, we’ll span continents and oceans, and experience incredibly diverse landscapes, wildlife and cultures in a single trip. Traveling to nine carefully selected destinations, we’ll retrace the path of ancient trade routes, making our way from the Middle East to India and on to Africa, with island stops in between. It’s an exhilarating fusion of lions and tigers, maharajas and Maasai, temples and tropical escapes that you won’t experience with anyone else.
                        </p>
                        <p class="font-weight-light px-4 my-4">
                            Leave all the details to Art in Voyage and Bushtracks, as you travel to five countries in 21 days by private jet. Direct routes, VIP cabin service, and expedited airport formalities ensure that you arrive in each destination refreshed, relaxed and ready to enjoy the day’s adventures. Immerse yourself in vibrant cultures, timeless traditions, and natural beauty - from towering mountains and sandy dunes to endless grassy plains and shimmering shores. Set out in search of elusive Bengal tigers, luxuriate on pristine tropical beaches, spend a night under dazzling desert skies, and experience a classic Big Five safari.
                        </p>
                        <div style="height: 18px;">

                        </div>
                    </div>
                </v-container>
            </div>
            <div style="height: 16px;">

            </div>
            <div v-for="serviceline of serviceLines" :key="serviceline">
                <v-container class="py-0 px-8" style="max-width: 1400px;">
                    <v-row>
                        <v-col cols="6">
                            <div class="py-4">
                                <div class="text-h4 font-weight-light my-10">{{serviceline.col1title}}</div>
                                <v-card
                                    elevated
                                    color="#F5F5F5"
                                    class="rounded-lg"
                                >
                                    <div class="d-flex">
                                        <v-img
                                            :src="serviceline.col1img"
                                            class="flex-grow-1 rounded-lg"
                                        ></v-img>
<!--                                        aspect-ratio="1.5"-->
                                    </div>
                                </v-card>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="py-4">
                                <div class="text-h4 font-weight-light my-10">{{serviceline.col2title}}</div>
                                <v-card
                                    elevated
                                    color="#F5F5F5"
                                    class="rounded-lg"
                                >
                                    <div class="d-flex">
                                        <v-img
                                            :src="serviceline.col1img"
                                            class="flex-grow-1 rounded-lg"
                                        ></v-img>
<!--                                        aspect-ratio="1.5"-->
                                    </div>
                                </v-card>
                                <v-btn
                                    variant="outlined"
                                    class="rounded-pill px-12 py-6 my-4"
                                    style="border: black 2px solid"
                                >
                                    <div>{{ serviceline.col2btn }}</div>
                                </v-btn>
                                <div style="height: 20px;">

                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <v-container>

                <v-row>
                    <template v-for="n in 4">
                        <v-col
                            :key="n"
                            class="mt-2"
                            cols="12"
                        >
                            <strong>Category {{ n }}</strong>
                        </v-col>

                        <v-col
                            v-for="j in 6"
                            :key="`${n}${j}`"
                            cols="6"
                            md="2"
                        >
                            <v-sheet height="150"></v-sheet>
                        </v-col>
                    </template>
                </v-row>
            </v-container>
        </v-main>


        <v-main>
            <v-container>
                <v-row>
                    <v-col
                        v-for="n in 24"
                        :key="n"
                        cols="4"
                    >
                        <v-card height="200"></v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    name: 'TravelPage',
    data: () => ({
        serviceLines: [
            {
                col1title: "Days 1-3 | November 3-5, 2024",
                col1img: "https://artinvoyage.com/wp-content/uploads/iStock-1363234552-768x432.jpg",
                col2title: "United Arab Emirates",
                col2img: "https://artinvoyage.com/wp-content/uploads/Dubai_United_Arab_Emirates_1920x1080-768x432.png",
                col2btn: "Your Home: The Ritz-Carlton Ras Khaimah, Al Wadi Desert",
            },
            {
                col1title: "xxxxxx",
                col1img: "https://artinvoyage.com/wp-content/uploads/iStock-1363234552-768x432.jpg",
                col2title: "xxxxxx",
                col2img: "https://artinvoyage.com/wp-content/uploads/Dubai_United_Arab_Emirates_1920x1080-768x432.png",
                col2btn: "xxxxxx",
            },
            {
                col1title: "xxxxxx",
                col1img: "https://artinvoyage.com/wp-content/uploads/iStock-1363234552-768x432.jpg",
                col2title: "xxxxxx",
                col2img: "https://artinvoyage.com/wp-content/uploads/Dubai_United_Arab_Emirates_1920x1080-768x432.png",
                col2btn: "xxxxxx",
            },
            {
                col1title: "xxxxxx",
                col1img: "https://artinvoyage.com/wp-content/uploads/iStock-1363234552-768x432.jpg",
                col2title: "xxxxxx",
                col2img: "https://artinvoyage.com/wp-content/uploads/Dubai_United_Arab_Emirates_1920x1080-768x432.png",
                col2btn: "xxxxxx",
            },
            {
                col1title: "xxxxxx",
                col1img: "https://artinvoyage.com/wp-content/uploads/iStock-1363234552-768x432.jpg",
                col2title: "xxxxxx",
                col2img: "https://artinvoyage.com/wp-content/uploads/Dubai_United_Arab_Emirates_1920x1080-768x432.png",
                col2btn: "xxxxxx",
            },
            {
                col1title: "xxxxxx",
                col1img: "https://artinvoyage.com/wp-content/uploads/iStock-1363234552-768x432.jpg",
                col2title: "xxxxxx",
                col2img: "https://artinvoyage.com/wp-content/uploads/Dubai_United_Arab_Emirates_1920x1080-768x432.png",
                col2btn: "xxxxxx",
            },
            {
                col1title: "xxxxxx",
                col1img: "https://artinvoyage.com/wp-content/uploads/iStock-1363234552-768x432.jpg",
                col2title: "xxxxxx",
                col2img: "https://artinvoyage.com/wp-content/uploads/Dubai_United_Arab_Emirates_1920x1080-768x432.png",
                col2btn: "xxxxxx",
            },
            {
                col1title: "xxxxxx",
                col1img: "https://artinvoyage.com/wp-content/uploads/iStock-1363234552-768x432.jpg",
                col2title: "xxxxxx",
                col2img: "https://artinvoyage.com/wp-content/uploads/Dubai_United_Arab_Emirates_1920x1080-768x432.png",
                col2btn: "xxxxxx",
            },
            {
                col1title: "xxxxxx",
                col1img: "https://artinvoyage.com/wp-content/uploads/iStock-1363234552-768x432.jpg",
                col2title: "xxxxxx",
                col2img: "https://artinvoyage.com/wp-content/uploads/Dubai_United_Arab_Emirates_1920x1080-768x432.png",
                col2btn: "xxxxxx",
            },
            {
                col1title: "xxxxxx",
                col1img: "https://artinvoyage.com/wp-content/uploads/iStock-1363234552-768x432.jpg",
                col2title: "xxxxxx",
                col2img: "https://artinvoyage.com/wp-content/uploads/Dubai_United_Arab_Emirates_1920x1080-768x432.png",
                col2btn: "xxxxxx",
            },
            {
                col1title: "xxxxxx",
                col1img: "https://artinvoyage.com/wp-content/uploads/iStock-1363234552-768x432.jpg",
                col2title: "xxxxxx",
                col2img: "https://artinvoyage.com/wp-content/uploads/Dubai_United_Arab_Emirates_1920x1080-768x432.png",
                col2btn: "xxxxxx",
            },
        ]
    }),
    methods: {
        // Component methods here
    }
}
</script>

<style scoped>
/* Custom styles here */
</style>
