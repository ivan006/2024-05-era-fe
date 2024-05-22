<template>
    <div>
        <template v-for="link in links" :key="link.text">
            <!--                                <v-list-item-->
            <!--                                    :to="sublink.to"-->
            <!--                                    :key="sublink.text"-->
            <!--                                    class="pl-2"-->
            <!--                                >-->
            <!--                                    <template v-if="sublink.icon.length">-->
            <!--                                        <v-list-item-icon>-->
            <!--                                            <v-icon>{{ sublink.icon }}</v-icon>-->
            <!--                                        </v-list-item-icon>-->
            <!--                                    </template>-->
            <!--                                    <v-list-item-title>-->
            <!--                                        {{ sublink.text }}-->
            <!--                                    </v-list-item-title>-->
            <!--                                </v-list-item>-->

            <MenuSystemItem :link="link"  />
        </template>
    </div>
</template>

<script>
import MenuSystemItem from '@/views/global/MenuSystemItem.vue'

export default {
    name: 'MyProversAndCustomerAsMenuList',
    components: { MenuSystemItem },
    // props: {
    //     providerGroupsAssociatedWithUser: {
    //         type: Array,
    //         default() {
    //             return []
    //         },
    //     },
    //     customerGroupsAssociatedWithUser: {
    //         type: Array,
    //         default() {
    //             return []
    //         },
    //     },
    // },
    computed: {
        providerGroupsMenuSection() {
            let result = []
            for (const provider of this.providerGroupsAssociatedWithUser) {
                result.push({
                    icon: '',
                    text: provider.name,
                    to: `/lists/providers/${provider.id}`,
                })
            }
            return result
        },

        customerGroupsMenuSection() {
            let result = []

            for (const customer of this.customerGroupsAssociatedWithUser) {
                result.push({
                    icon: '',
                    text: customer.name,
                    to: `/lists/customers/${customer.id}`,
                })
            }

            return result
        },
        links() {
            const results = [
                {
                    icon: '',
                    text: 'Provider Groups',
                    isHeading: true,
                },
                ...(this.providerGroupsMenuSection.length
                    ? this.providerGroupsMenuSection
                    : [
                          {
                              icon: '',
                              text: 'No data',
                              to: '',
                          },
                      ]),

                {
                    icon: '',
                    text: 'Customer Groups',
                    isHeading: true,
                },

                ...(this.customerGroupsMenuSection.length
                    ? this.customerGroupsMenuSection
                    : [
                          {
                              icon: '',
                              text: 'No data',
                              to: '',
                          },
                      ]),
            ]
            return results
        },
    },
}
</script>

<style scoped></style>
