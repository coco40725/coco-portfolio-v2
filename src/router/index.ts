import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw,} from "vue-router";


const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/page/home/Home.vue"),
    },
    {
        path: "/service",
        name: "Service",
        component: () => import("@/page/service/Service.vue"),
    },
    {
        path: "/experience",
        name: "Experience",
        component: () => import("@/page/experience/Experience.vue"),
    },
    {
        path: "/project",
        name: "Project",
        component: () => import("@/page/project/Project.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("@/page/contact/Contact.vue"),
    }

]

export const router = createRouter({
    history: createWebHistory(),
    routes
});
