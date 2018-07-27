import Vue from 'vue';
import Router from 'vue-router';
import Route2 from '@/components/Route2';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Route2',
      component: Route2,
    },
  ],
});
