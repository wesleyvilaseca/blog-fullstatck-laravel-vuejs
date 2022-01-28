require('./bootstrap');

window.Vue = require('vue').default;

import router from './router/router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Vue from 'vue';

Vue.use(ViewUI);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('main-app', require('./MainApp.vue').default);

const app = new Vue({
    el: '#app',
    router
});
