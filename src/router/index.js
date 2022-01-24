import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
    },
    {
      path: '/about*',
      name: 'about',
      component: () => import('@/views/About.vue'),
      children: [
        {
          path: '/delivery',
        },
      ],
    },
    {
      path: '/dashboard/:type',
      name: 'type',
      component: () => import('@/views/Dashboard.vue'),
      children: [
        {
          path: 'dashboard/food',
        },
      ],
    },
    {
      path: '/dashboard/:price',
      name: 'price',
      component: () => import('@/views/Dashboard.vue'),
      children: [
        {
          path: 'dashboard',
        },
      ],
    },
    {
      path: '/notfound',
      name: 'notfound',
      // component: NotFound,
      component: () => import('@/views/NotFound.vue'),
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
