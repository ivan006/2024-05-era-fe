import { createRouter, createWebHistory } from 'vue-router'
// import { setupLayouts } from 'virtual:generated-layouts'

const routes = [
  {
    path: '/art',
    name: '/art',
    component: () => import('@/views/misc/ArtInVoyage.vue'),
  },
  {
    path: '/sign-in-up',
    name: '/sign-in-up',
    component: () =>
      import(
        /* webpackChunkName: "/all-content" */ '../views/MenuView.vue'
        ),
    children: [
      {
        path: '/sign-in',
        name: '/sign-in',
        component: () => import('@/views/misc/SigninView.vue'),
      },
      {
        path: '/avi-stress-test',
        name: '/avi-stress-test',
        component: () => import('@/views/tests/AviStressTest.vue'),
      },
      {
        path: '/join',
        name: '/join',
        component: () => import('@/views/misc/JoinView.vue'),
      },
    ],
  },
  {
    path: '/',
    name: '/',
    component: () =>
      import(
        /* webpackChunkName: "/all-content" */ '../views/MenuView.vue'
        ),
    children: [
      {
        path: '/',
        name: '/',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/ListsIntroduction.vue'
            ),
      },
      {
        path: '/lists/providers',
        name: '/lists/providers',
        component: () =>
          import(
            '@/views/lists/provider-groups/ListsProviderGroups.vue'
            ),
      },
      {
        path: '/lists/providers/:cId',
        name: '/lists/providers/:cId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/provider-groups/ListsProviderGroupsRead.vue'
            ),
      },
      {
        path: '/lists/customers',
        name: '/lists/customers',
        component: () =>
          import(
            '@/views/lists/customer-groups/ListsCustomerGroups.vue'
            ),
      },
      {
        path: '/lists/customers/:cId',
        name: '/lists/customers/:cId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/customer-groups/ListsCustomerGroupsRead.vue'
            ),
      },
      {
        path: '/lists/events',
        name: '/lists/events',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/events/ListsEvents.vue'
            ),
      },
      {
        path: '/lists/events/:cId',
        name: '/lists/events/:cId',
        component: () =>
          import(
            /* webpackChunkName: "/all-content" */ '@/views/lists/events/ListsEventsRead.vue'
            ),
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import('../views/MenuView.vue'),
      },
    ],
  },
  {
    path: '/account',
    name: '/account',
    redirect: '/account/introduction',
    component: () =>
      import(
        /* webpackChunkName: "/all-content" */ '../views/MenuView.vue'
        ),
    children: [],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // extendRoutes: setupLayouts,
})

export default router
