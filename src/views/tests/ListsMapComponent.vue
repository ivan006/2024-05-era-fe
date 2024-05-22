<template>
    <div>
        <v-card class="pa-2">
            <v-row no-gutters>
                <v-col cols="12" sm="8" class="ma-n2">
                    <GmapMap
                        :center="center"
                        :zoom="8"
                        style="width: 100%; height: 500px"
                        class="GmapMap"
                    >
                        <GmapMarker
                            :key="index"
                            v-for="(m, index) in places"
                            :position="position(m)"
                            :clickable="true"
                            @click="clickedMarker(m, index)"
                            :icon="markerOptionsMethod(index)"
                        >
                            <!--              :label="m.Name"-->
                        </GmapMarker>
                    </GmapMap>
                </v-col>
                <v-col cols="12" sm="4" class="pa-4">
                    <template v-if="Object.keys(place).length !== 0">
                        <v-card>
                            <v-card-text>
                                <div>
                                    <h3 class="headline mb-0">
                                        {{ place.Name }}
                                    </h3>

                                    <!--            <img-->
                                    <!--              :src="'http://' + VITE_API_URL() + place.Image[0].url"-->
                                    <!--              width="100px"-->
                                    <!--            />-->
                                    <div>
                                        {{ place.Description }}
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </template>
                    <template v-else> Please select a place. </template>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import place from '@/models/place'
import Upload from '@/models/Upload'
export default {
    name: 'ListsMapComponent',
    components: {},
    data() {
        return {
            center: { lat: -32.900024, lng: 18.774893 },
            place: {},
            markers: [
                {
                    lat: 51.093048,
                    lng: 6.84212,
                    label: 'United States',
                },
                {
                    lat: 51.198429,
                    lng: 6.69529,
                    label: 'United States',
                },
                {
                    lat: 51.165218,
                    lng: 7.067116,
                    label: 'United States',
                },
                {
                    lat: 51.09256,
                    lng: 6.84074,
                    label: 'United States',
                },
            ],
            markerOptions: {
                url: 'https://i0.wp.com/www.worth.com/wp-content/uploads/2017/09/map-marker-icon.png?w=1024&ssl=1',
                size: { width: 30, height: 30, f: 'px', b: 'px' },
                scaledSize: { width: 30, height: 30, f: 'px', b: 'px' },
            },
            selectedMarkerOptions: {
                url: 'https://i0.wp.com/www.worth.com/wp-content/uploads/2017/09/map-marker-icon.png?w=1024&ssl=1',
                size: { width: 40, height: 40, f: 'px', b: 'px' },
                scaledSize: { width: 40, height: 40, f: 'px', b: 'px' },
            },
            selectedPlaceIndex: null,
        }
    },
    computed: {
        places() {
            return place.query().withAll().get()
        },
        integerCoordindateGrid() {
            let result = []
            const latMin = -35
            const latAdd = 5
            const lngMin = 16
            const lngAdd = 5

            let lat = latMin
            let lng = lngMin

            while (lat < latMin + latAdd) {
                lng = lngMin
                while (lng < lngMin + lngAdd) {
                    lng++
                    result.push({ lat: lat, lng: lng })
                }
                lat++
            }
            return result
        },
    },
    methods: {
        position(m) {
            return { lng: Number(m.lng), lat: Number(m.lat) }
        },
        positionString(m) {
            return m.lat + ', ' + m.lng
        },
        markerOptionsMethod(index) {
            const result =
                index == this.selectedPlaceIndex
                    ? this.selectedMarkerOptions
                    : this.markerOptions
            return result
        },
        clickedMarker(m, index) {
            // this.center = this.position(m);
            this.place = m
            this.selectedPlaceIndex = index
        },
    },
    mounted() {
        Upload.deleteAll()
        place.FetchAll({}).then(() => {})
        this.$getLocation({}).then((data) => {
            this.center = data
        })
    },
}
</script>

<style>
.GmapMap .vue-map {
    border-radius: 4px !important;
}
</style>
