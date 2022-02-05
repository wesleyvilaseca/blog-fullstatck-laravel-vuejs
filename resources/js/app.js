// require('./bootstrap');

// window.Vue = require('vue').default;

// import router from './router/router';
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
// import Vue from 'vue';
// import common from './common';

// Vue.mixin(common);
// Vue.use(ViewUI);
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('main-app', require('./layouts/admin/MainApp.vue').default);

// const app = new Vue({
//     el: '#app',
//     router
// });


import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'

createInertiaApp({
  resolve: name => import(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)

    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
})