import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "DashboardPage" */ '@/views/Dashboard.vue'),
    },
    {
      path: '/about*',
      name: 'about',
      component: () => import(/* webpackChunkName: "About" */ '@/views/About.vue'),
      children: [
        {
          path: '/delivery',
        },
      ],
    },
    {
      path: '/dashboard/:type',
      name: 'type',
      component: () => import(/* webpackChunkName: "/dashboard/:type" */ '@/views/Dashboard.vue'),
      children: [
        {
          path: 'dashboard/food',
        },
      ],
    },
    {
      path: '/notfound',
      name: 'notfound',
      // component: NotFound,
      component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound.vue'),
    },
    {
      path: '*',
      redirect: {
        name: 'notfound',
      },
    },
  ],
});

const titles = {
  dashboard: 'Dashboard',
  about: 'About',
  notfound: 'Not Found',
};

router.afterEach((to) => {
  document.title = titles[to.name];
});

export default router;
