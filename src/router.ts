import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/hello',
            component: () => import("./components/HelloWorld.vue")
        }
    ]
});
export default router;