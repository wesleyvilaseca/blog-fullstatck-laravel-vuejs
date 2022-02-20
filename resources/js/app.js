require('./bootstrap');
import common from './common';
import { store } from './store';
import Vue from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue';
import Editor from 'vue-editor-js' 
import jsonToHtml from './jsonToHtml'

import VueQuillEditor from 'vue-quill-editor';
// import Quill from "quill";
// import { ImageDrop } from "quill-image-drop-module";
// import ImagePaste from 'quill-yang-image-paste';
// import { ImageResize } from './ResizeImage/ImageResize';


import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import { Link } from '@inertiajs/inertia-vue';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init()
Vue.component('Link', Link);

// Quill.register("modules/imageDrop", ImageDrop);
// Quill.register("modules/imagePaste", ImagePaste);
// Quill.register("modules/imageResize", ImageResize);

Vue.use(VueQuillEditor);
Vue.use(Editor)
Vue.use(ViewUI);
Vue.mixin(common);
Vue.mixin(jsonToHtml);

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