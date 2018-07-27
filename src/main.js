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

let router;

if (parts.length === 2 || parts[0] === 'www') {
  router = index;
} else if (parts[0] === 'route1') {
  router = route1;
} else if (parts[0] === 'route2') {
  router = route2;
} else {
  // If you want to do something else just comment the line below
  router = index;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
