require('./bootstrap');
import common from './common';
import { store } from './store';
import Vue from 'vue';
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
      store,
      render: h => h(App, props),
    }).$mount(el)
  },
})