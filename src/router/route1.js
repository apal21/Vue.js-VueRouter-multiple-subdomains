import Vue from 'vue';
import Router from 'vue-router';
import Route1 from '@/components/Route1';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Route1',
      component: Route1,
    },
  ],
});
