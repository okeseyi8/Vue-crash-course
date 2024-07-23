import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Jobview from "../views/Jobview.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: "home",
            component: HomeView,
        },
        {
            path: '/jobs',
            name: "Jobs",
            component: Jobview,
        }
    ]
});
export default router;
