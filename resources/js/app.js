require('./bootstrap');
import common from './common';
import { store } from './store';
import Vue from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import { Link } from '@inertiajs/inertia-vue';
import { InertiaProgress } from '@inertiajs/progress';
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme


InertiaProgress.init()
Vue.component('Link', Link);
Vue.component('QuillEditor', VueQuillEditor)

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