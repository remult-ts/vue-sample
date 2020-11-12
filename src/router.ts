import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/users',
            component: () => import("./components/UserList.vue")
        },
        {
            path: '/sign-in',
            component: () => import("./components/SignIn.vue")
        },
        {
            path: '/add-user',
            component: () => import("./components/AddUser.vue")
        }
    ]
});
export default router;