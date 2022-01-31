import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {
        path: '/admin',
        component: () => import("../pages/admin/Home/HomeComponent"),
    },
    {
        path: '/admin/tags',
        component: () => import("../pages/admin/Tags/TagsComponent"),
    },
    {
        path: '/admin/category',
        component: () => import("../pages/admin/Category/CategoryComponent")
    }
];

export default new Router({
    mode: 'history',
    routes
});