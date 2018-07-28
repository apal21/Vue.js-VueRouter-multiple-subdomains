// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import index from './router';
import route1 from './router/route1';
import route2 from './router/route2';

Vue.config.productionTip = false;

const host = window.location.host;
const parts = host.split('.');
const domainLength = 3; // route1.example.com => domain length = 3

const router = () => {
  let routes;
  if (parts.length === (domainLength - 1) || parts[0] === 'www') {
    routes = index;
  } else if (parts[0] === 'route1') {
    routes = route1;
  } else if (parts[0] === 'route2') {
    routes = route2;
  } else {
    // If you want to do something else just comment the line below
    routes = index;
  }
  return routes;
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
