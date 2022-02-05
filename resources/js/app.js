// require('./bootstrap');

// window.Vue = require('vue').default;

// import router from './router/router';

// import Vue from 'vue';

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('main-app', require('./layouts/admin/MainApp.vue').default);

// const app = new Vue({
//     el: '#app',
//     router
// });

require('./bootstrap');
import common from './common';
import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import { Link } from '@inertiajs/inertia-vue';

Vue.component('Link', Link);

Vue.use(ViewUI);

Vue.mixin(common);

createInertiaApp({
  resolve: name => import(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)

    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
})