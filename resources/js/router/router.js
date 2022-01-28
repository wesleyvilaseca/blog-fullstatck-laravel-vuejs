import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home/HomeComponent";
import Tags from "../pages/Tags/TagsComponent";


Vue.use(Router);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tags',
        component: Tags
    }
];

export default new Router({
    mode: 'history',
    routes
});