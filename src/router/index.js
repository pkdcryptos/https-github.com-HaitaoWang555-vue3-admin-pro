import Layout from '@/layout/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import chartRouter from './modules/chart'
import componentsPage from './modules/components-page'
import errorRouter from './modules/error-page'
import formRouter from './modules/form'
/* Router Modules */
import nestedRouter from './modules/nested'
import tableRouter from './modules/table'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () =>
          import(
            /* webpackChunkName: "redirect" */ '@/components/Redirect/index.vue'
          ),
      },
    ],
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'
          ),
        meta: { title: 'Dashboard', icon: 'dashboard' },
      },
    ],
  },

  tableRouter,
  chartRouter,
  {
    path: '/online',
    hidden: true,
    component: Layout,
    name: 'onlineRouter',
    meta: { title: 'online', icon: 'el-icon-cloudy' },
    children: [
      {
        path: ':id',
        name: 'onlineRouterTem',
        meta: { title: 'onlineRouter' },
        component: () =>
          import(
            /* webpackChunkName: "online" */ '@/components/Online/list.vue'
          ),
      },
      {
        path: 'add',
        name: 'addOnlineRouterTem',
        meta: { title: 'add online template' },
        component: () =>
          import(
            /* webpackChunkName: "online" */ '@/views/online/createList.vue'
          ),
      },
    ],
  },
  formRouter,

  componentsPage,
  nestedRouter,
  errorRouter,

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () =>
          import(/* webpackChunkName: "icon" */ '@/views/icons/index.vue'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true },
      },
    ],
  },

  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/HaitaoWang555/vue3-admin-pro',
        meta: { title: 'External Link', icon: 'link' },
      },
    ],
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    hidden: true,
  },
  { path: '/:pathMatch(.*)*', redirect: '/error/404', hidden: true },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = []

const history = createWebHashHistory()
const router = createRouter({
  history,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: constantRoutes,
})

export default router

export function resetRouter() {
  const newRouter = createRouter({
    history,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    },
    routes: constantRoutes,
  })
  router.matcher = newRouter.matcher // reset router
}
